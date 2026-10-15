const messages = {
  valueMissing: "Ce champ est obligatoire.",
  typeMismatch: "Saisissez une adresse e-mail valide, par exemple nom@exemple.fr.",
  tooShort: (field) => `Écrivez au moins ${field.minLength} caractères.`,
};

function errorFor(field) {
  const { validity } = field;
  if (validity.valueMissing) return messages.valueMissing;
  if (validity.typeMismatch) return messages.typeMismatch;
  if (validity.tooShort) return messages.tooShort(field);
  return "";
}

document.querySelectorAll("[data-validate]").forEach((form) => {
  const status = form.querySelector("[data-form-status]");
  const fields = [...form.querySelectorAll("input, textarea")];

  function show(field) {
    const error = document.getElementById(`${field.id}-error`);
    const message = errorFor(field);
    error.textContent = message;
    field.setAttribute("aria-invalid", String(Boolean(message)));
    return !message;
  }

  fields.forEach((field) => field.addEventListener("blur", () => field.value && show(field)));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const invalid = fields.filter((field) => !show(field));
    if (invalid.length) {
      status.textContent = `${invalid.length} champ(s) à corriger.`;
      invalid[0].focus();
      return;
    }
    status.textContent = "Merci, votre message a bien été envoyé.";
    form.reset();
  });
});
