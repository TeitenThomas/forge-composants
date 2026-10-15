// Replace `send` with your own request (fetch, form submission…); it must return a promise.
function send() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

document.querySelectorAll("[data-loading-button]").forEach((button) => {
  const status = document.querySelector("[data-loading-status]");
  button.addEventListener("click", async () => {
    if (button.getAttribute("aria-busy") === "true") return;
    button.style.minWidth = `${button.offsetWidth}px`;
    button.setAttribute("aria-busy", "true");
    button.removeAttribute("data-state");
    if (status) status.textContent = "Envoi en cours";
    try {
      await send();
      button.setAttribute("data-state", "done");
      if (status) status.textContent = "Demande envoyée";
    } finally {
      button.removeAttribute("aria-busy");
    }
  });
});
