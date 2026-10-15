document.querySelectorAll("[data-carousel]").forEach((root) => {
  const slides = [...root.querySelectorAll("[data-slide]")];
  const dots = [...root.querySelectorAll("[data-carousel-dot]")];
  const track = root.querySelector("[data-carousel-slides]");
  const toggle = root.querySelector("[data-carousel-toggle]");
  let index = 0;
  let playing = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let hovered = false;
  let timer;

  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, position) => {
      slide.hidden = position !== index;
    });
    dots.forEach((dot, position) => dot.setAttribute("aria-current", String(position === index)));
  }

  function schedule() {
    clearInterval(timer);
    if (playing && !hovered) timer = setInterval(() => show(index + 1), 6000);
  }

  function setPlaying(value) {
    playing = value;
    toggle.setAttribute("aria-label", value ? "Mettre en pause le défilement" : "Lancer le défilement");
    toggle.querySelector("[data-icon-pause]").hidden = !value;
    toggle.querySelector("[data-icon-play]").hidden = value;
    // Slide changes are only announced when the user drives them.
    track.setAttribute("aria-live", value ? "off" : "polite");
    schedule();
  }

  root.querySelector("[data-carousel-prev]").addEventListener("click", () => show(index - 1));
  root.querySelector("[data-carousel-next]").addEventListener("click", () => show(index + 1));
  dots.forEach((dot, position) => dot.addEventListener("click", () => show(position)));
  toggle.addEventListener("click", () => setPlaying(!playing));
  root.addEventListener("focusin", (event) => {
    if (event.target !== toggle && playing) setPlaying(false);
  });
  root.addEventListener("mouseenter", () => {
    hovered = true;
    schedule();
  });
  root.addEventListener("mouseleave", () => {
    hovered = false;
    schedule();
  });

  // Without JavaScript the slides stay stacked and readable, and no control is shown.
  root.querySelector("[data-carousel-controls]").hidden = false;
  show(0);
  setPlaying(playing);
});
