const STORAGE_KEY = "forge-consent";
// The CNIL recommends asking again after six months.
const MAX_AGE = 1000 * 60 * 60 * 24 * 182;

function readConsent() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return stored && Date.now() - Date.parse(stored.date) < MAX_AGE ? stored : null;
  } catch {
    return null;
  }
}

function writeConsent(choices) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...choices, date: new Date().toISOString() }));
  } catch {
    // Storage can be blocked: the choice still applies to the current page.
  }
}

document.querySelectorAll("[data-consent-root]").forEach((root) => {
  const banner = root.querySelector("[data-consent]");
  const panel = root.querySelector("[data-consent-panel]");
  const customize = root.querySelector("[data-consent-customize]");
  const save = root.querySelector("[data-consent-save]");
  const manage = root.querySelector("[data-consent-manage]");
  const boxes = [...root.querySelectorAll("[data-consent-category]")];
  const every = (value) => Object.fromEntries(boxes.map((box) => [box.dataset.consentCategory, value]));

  function apply(choices) {
    boxes.forEach((box) => {
      box.checked = Boolean(choices[box.dataset.consentCategory]);
    });
    banner.hidden = true;
    manage.hidden = false;
    root.dispatchEvent(new CustomEvent("consentchange", { bubbles: true, detail: Object.fromEntries(boxes.map((box) => [box.dataset.consentCategory, box.checked])) }));
  }

  function decide(choices) {
    writeConsent(choices);
    apply(choices);
    manage.focus();
  }

  root.querySelector("[data-consent-accept]").addEventListener("click", () => decide(every(true)));
  root.querySelector("[data-consent-refuse]").addEventListener("click", () => decide(every(false)));
  save.addEventListener("click", () => decide(Object.fromEntries(boxes.map((box) => [box.dataset.consentCategory, box.checked]))));
  customize?.addEventListener("click", () => {
    const opening = panel.hidden;
    panel.hidden = !opening;
    save.hidden = !opening;
    customize.setAttribute("aria-expanded", String(opening));
    if (opening) panel.querySelector("input:not([disabled])").focus();
  });
  manage.addEventListener("click", () => {
    banner.hidden = false;
    manage.hidden = true;
    banner.querySelector("button").focus();
  });

  const stored = readConsent();
  if (stored) apply(stored);
});
