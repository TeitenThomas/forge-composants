import { useId, useRef, useState, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";

export type Consent = Record<string, boolean>;

const STORAGE_KEY = "forge-consent";
// The CNIL recommends asking again after six months.
const MAX_AGE = 1000 * 60 * 60 * 24 * 182;
const categories = [
  {
    id: "analytics",
    label: "Mesure d'audience",
    description: "Statistiques anonymes de fréquentation pour améliorer le site.",
  },
  {
    id: "marketing",
    label: "Publicité personnalisée",
    description: "Annonces adaptées à vos centres d'intérêt sur d'autres sites.",
  },
];

const listeners = new Set<() => void>();
let memory: string | null = null;

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function snapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? memory;
  } catch {
    return memory;
  }
}

function parse(raw: string | null): Consent | null {
  if (!raw) return null;
  try {
    const { date, ...choices } = JSON.parse(raw) as Consent & { date: string };
    return Date.now() - Date.parse(date) < MAX_AGE ? choices : null;
  } catch {
    return null;
  }
}

function store(choices: Consent) {
  memory = JSON.stringify({ ...choices, date: new Date().toISOString() });
  try {
    localStorage.setItem(STORAGE_KEY, memory);
  } catch {
    // Storage can be blocked: the in-memory copy keeps the choice for this visit.
  }
  listeners.forEach((listener) => listener());
}

const every = (value: boolean): Consent =>
  Object.fromEntries(categories.map((category) => [category.id, value]));

export function CompactDarkCookieBar({ onChange }: { onChange?: (consent: Consent) => void }) {
  const id = useId();
  const raw = useSyncExternalStore(subscribe, snapshot, () => null);
  const stored = parse(raw);
  const [reopened, setReopened] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [draft, setDraft] = useState<Consent>(() => every(false));
  const manage = useRef<HTMLButtonElement>(null);
  const visible = !stored || reopened;

  function decide(choices: Consent) {
    flushSync(() => {
      store(choices);
      setReopened(false);
      setCustomizing(false);
    });
    onChange?.(choices);
    manage.current?.focus();
  }

  return (
    <div>
      {visible && (
        <section
          aria-labelledby={`${id}-title`}
          className="fixed inset-x-4 bottom-4 mx-auto max-h-[calc(100vh_-_2rem)] max-w-5xl overflow-y-auto rounded-2xl px-5 py-4 [--r:8px] min-[900px]:grid min-[900px]:grid-cols-[1fr_auto] min-[900px]:items-center min-[900px]:gap-x-8 bg-[#111216] dark:bg-[#0a0b0e] text-[#f4f5f7]"
        >
          <h2 id={`${id}-title`} className="mb-1 text-base font-bold">
            Nous respectons vos choix
          </h2>
          <p className="leading-normal text-[#b2b6c0] text-sm">
            Avec votre accord, nous utilisons des cookies pour mesurer l'audience et personnaliser
            la publicité. Vous pouvez accepter, refuser ou choisir par catégorie, et changer d'avis
            à tout moment.{" "}
            <a
              href="#politique-cookies"
              className="font-bold underline text-[#f4f5f7] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              Politique de cookies
            </a>
          </p>
          {customizing && (
            <fieldset
              id={`${id}-panel`}
              className="mt-4 grid gap-3 rounded-xl border px-4 pt-3 pb-4 border-[#2c2f38] dark:border-[#24262e] min-[900px]:col-span-2 min-[900px]:row-start-3"
            >
              <legend className="px-1.5 font-bold">Vos choix par catégorie</legend>
              <div className="grid grid-cols-[auto_1fr] items-start gap-2.5">
                <input
                  id={`${id}-necessary`}
                  type="checkbox"
                  checked
                  disabled
                  readOnly
                  className="mt-0.5 size-5 accent-[#f4f5f7] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                />
                <label htmlFor={`${id}-necessary`} className="grid gap-0.5 font-semibold">
                  Cookies nécessaires
                  <span className="text-sm leading-snug font-normal text-[#b2b6c0]">
                    Panier, connexion et sécurité : toujours actifs, ils ne nécessitent pas de
                    consentement.
                  </span>
                </label>
              </div>
              {categories.map((category) => (
                <div key={category.id} className="grid grid-cols-[auto_1fr] items-start gap-2.5">
                  <input
                    id={`${id}-${category.id}`}
                    type="checkbox"
                    checked={draft[category.id] ?? false}
                    onChange={(event) =>
                      setDraft({ ...draft, [category.id]: event.target.checked })
                    }
                    className="mt-0.5 size-5 accent-[#f4f5f7] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                  />
                  <label htmlFor={`${id}-${category.id}`} className="grid gap-0.5 font-semibold">
                    {category.label}
                    <span className="text-sm leading-snug font-normal text-[#b2b6c0]">
                      {category.description}
                    </span>
                  </label>
                </div>
              ))}
            </fieldset>
          )}
          <div className="mt-3.5 flex flex-wrap gap-2 min-[900px]:col-start-2 min-[900px]:row-span-2 min-[900px]:row-start-1 min-[900px]:mt-0">
            <button
              type="button"
              onClick={() => decide(every(false))}
              className="min-h-11 cursor-pointer rounded-[var(--r)] border-2 px-4.5 font-bold focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-amber-300 border-[#f4f5f7] bg-[#f4f5f7] text-[#111216]"
            >
              Tout refuser
            </button>
            <button
              type="button"
              aria-expanded={customizing}
              aria-controls={`${id}-panel`}
              onClick={() => setCustomizing((open) => !open)}
              className="min-h-11 cursor-pointer rounded-[var(--r)] border-2 px-4.5 font-bold focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-amber-300 border-transparent underline underline-offset-3"
            >
              Personnaliser
            </button>
            {customizing && (
              <button
                type="button"
                onClick={() => decide(draft)}
                className="min-h-11 cursor-pointer rounded-[var(--r)] border-2 px-4.5 font-bold focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-amber-300 bg-transparent border-[#f4f5f7]"
              >
                Enregistrer mes choix
              </button>
            )}
            <button
              type="button"
              onClick={() => decide(every(true))}
              className="min-h-11 cursor-pointer rounded-[var(--r)] border-2 px-4.5 font-bold focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-amber-300 border-[#f4f5f7] bg-[#f4f5f7] text-[#111216]"
            >
              Tout accepter
            </button>
          </div>
        </section>
      )}
      <button
        ref={manage}
        type="button"
        hidden={visible}
        onClick={() => {
          setDraft({ ...every(false), ...stored });
          setReopened(true);
        }}
        className="fixed bottom-4 left-4 min-h-11 cursor-pointer rounded-full border px-4.5 font-semibold shadow-[0_8px_24px_-12px_rgb(0_0_0/0.4)] focus-visible:outline-3 focus-visible:outline-offset-2 bg-[#111216] dark:bg-[#0a0b0e] text-[#f4f5f7] border-[#2c2f38] dark:border-[#24262e] focus-visible:outline-amber-300"
      >
        Gérer les cookies
      </button>
    </div>
  );
}
