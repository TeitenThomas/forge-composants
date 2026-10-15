import { useId, useRef, useState, type FormEvent } from "react";

type Field = "name" | "email" | "message";
type Values = Record<Field, string>;

const empty: Values = { name: "", email: "", message: "" };

function validate(field: Field, value: string): string {
  if (!value.trim()) return "Ce champ est obligatoire.";
  if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Saisissez une adresse e-mail valide, par exemple nom@exemple.fr.";
  }
  if (field === "name" && value.trim().length < 2) return "Écrivez au moins 2 caractères.";
  if (field === "message" && value.trim().length < 20) return "Écrivez au moins 20 caractères.";
  return "";
}

const inputClass =
  "w-full rounded-[10px] border-[1.5px] border-slate-400 bg-white px-3.5 py-3 focus:border-blue-700 focus:outline-3 focus:outline-blue-700/30 aria-invalid:border-red-700 dark:border-slate-500 dark:bg-slate-900 dark:focus:border-blue-300 dark:aria-invalid:border-red-300";

export function ValidatedContactForm({
  onSubmit,
}: {
  onSubmit: (values: Values) => Promise<void>;
}) {
  const id = useId();
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState("");
  const refs = useRef<Partial<Record<Field, HTMLInputElement | HTMLTextAreaElement | null>>>({});

  const check = (field: Field) =>
    setErrors((current) => ({ ...current, [field]: validate(field, values[field]) }));

  async function submit(event: FormEvent) {
    event.preventDefault();
    const found = (Object.keys(values) as Field[]).reduce<Partial<Record<Field, string>>>(
      (all, field) => ({ ...all, [field]: validate(field, values[field]) }),
      {},
    );
    setErrors(found);
    const invalid = (Object.keys(found) as Field[]).filter((field) => found[field]);
    if (invalid.length) {
      setStatus(`${invalid.length} champ(s) à corriger.`);
      refs.current[invalid[0]!]?.focus();
      return;
    }
    await onSubmit(values);
    setValues(empty);
    setStatus("Merci, votre message a bien été envoyé.");
  }

  const field = (name: Field, label: string, type: "text" | "email", autoComplete: string) => (
    <div className="grid gap-1.5">
      <label htmlFor={`${id}-${name}`} className="font-semibold">
        {label}
      </label>
      <input
        ref={(element) => {
          refs.current[name] = element;
        }}
        id={`${id}-${name}`}
        type={type}
        autoComplete={autoComplete}
        value={values[name]}
        onChange={(event) => setValues({ ...values, [name]: event.target.value })}
        onBlur={() => values[name] && check(name)}
        aria-invalid={Boolean(errors[name])}
        aria-describedby={`${id}-${name}-error`}
        className={inputClass}
      />
      <p
        id={`${id}-${name}-error`}
        className="text-[0.9rem] font-semibold text-red-700 empty:hidden dark:text-red-300"
      >
        {errors[name]}
      </p>
    </div>
  );

  return (
    <form noValidate onSubmit={submit} className="grid gap-4.5">
      {field("name", "Nom", "text", "name")}
      {field("email", "Adresse e-mail", "email", "email")}
      <div className="grid gap-1.5">
        <label htmlFor={`${id}-message`} className="font-semibold">
          Message
        </label>
        <textarea
          ref={(element) => {
            refs.current.message = element;
          }}
          id={`${id}-message`}
          rows={5}
          value={values.message}
          onChange={(event) => setValues({ ...values, message: event.target.value })}
          onBlur={() => values.message && check("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={`${id}-message-hint ${id}-message-error`}
          className={inputClass}
        />
        <p id={`${id}-message-hint`} className="text-sm text-slate-600 dark:text-slate-300">
          20 caractères au minimum.
        </p>
        <p
          id={`${id}-message-error`}
          className="text-[0.9rem] font-semibold text-red-700 empty:hidden dark:text-red-300"
        >
          {errors.message}
        </p>
      </div>
      <button
        type="submit"
        className="min-h-12.5 cursor-pointer rounded-[10px] bg-blue-700 font-bold text-white hover:bg-blue-800 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-700 dark:bg-blue-300 dark:text-[#0b1530] dark:hover:bg-blue-200"
      >
        Envoyer le message
      </button>
      <p role="status" className="font-semibold empty:hidden">
        {status}
      </p>
    </form>
  );
}
