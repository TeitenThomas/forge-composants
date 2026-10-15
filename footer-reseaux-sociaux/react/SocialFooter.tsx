export function SocialFooter() {
  return (
    <div className="flex min-h-screen flex-col justify-end">
      <footer className="bg-cyan-50 text-cyan-800 dark:bg-[#042f2e] dark:text-cyan-200">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-6">
          <h2 className="mb-6 text-2xl font-bold text-cyan-950 dark:text-cyan-50">
            Suivez la vie du club
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a
                href="#instagram"
                className="grid grid-cols-[auto_1fr] gap-x-3.5 rounded-[14px] border border-cyan-200 bg-white px-4.5 py-4 transition hover:-translate-y-0.5 hover:border-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan-700 motion-reduce:transition-none dark:border-[#0f5a58] dark:bg-[#063b3a] dark:hover:border-cyan-300 dark:focus-visible:outline-cyan-300"
              >
                <svg
                  className="row-span-3 size-7 text-cyan-700 dark:text-cyan-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="17.2" cy="6.8" r="0.6"></circle>
                </svg>
                <strong className="text-cyan-950 dark:text-cyan-50">Instagram</strong>
                <span>@club.envol</span>
                <small className="text-sm">Photos des entraînements</small>
              </a>
            </li>
            <li>
              <a
                href="#facebook"
                className="grid grid-cols-[auto_1fr] gap-x-3.5 rounded-[14px] border border-cyan-200 bg-white px-4.5 py-4 transition hover:-translate-y-0.5 hover:border-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan-700 motion-reduce:transition-none dark:border-[#0f5a58] dark:bg-[#063b3a] dark:hover:border-cyan-300 dark:focus-visible:outline-cyan-300"
              >
                <svg
                  className="row-span-3 size-7 text-cyan-700 dark:text-cyan-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="8.5"></circle>
                  <path d="M13 20.5v-7h2.4l.4-2.8H13V9.2c0-.8.3-1.3 1.4-1.3H16V5.4a17 17 0 0 0-2.1-.1c-2 0-3.4 1.2-3.4 3.5v1.9H8.3v2.8h2.2v7"></path>
                </svg>
                <strong className="text-cyan-950 dark:text-cyan-50">Facebook</strong>
                <span>Club Envol Triathlon</span>
                <small className="text-sm">Actualités et événements</small>
              </a>
            </li>
            <li>
              <a
                href="#youtube"
                className="grid grid-cols-[auto_1fr] gap-x-3.5 rounded-[14px] border border-cyan-200 bg-white px-4.5 py-4 transition hover:-translate-y-0.5 hover:border-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan-700 motion-reduce:transition-none dark:border-[#0f5a58] dark:bg-[#063b3a] dark:hover:border-cyan-300 dark:focus-visible:outline-cyan-300"
              >
                <svg
                  className="row-span-3 size-7 text-cyan-700 dark:text-cyan-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2.5" y="5.5" width="19" height="13" rx="4"></rect>
                  <path d="m10 9.2 5 2.8-5 2.8Z"></path>
                </svg>
                <strong className="text-cyan-950 dark:text-cyan-50">YouTube</strong>
                <span>Envol TV</span>
                <small className="text-sm">Conseils techniques en vidéo</small>
              </a>
            </li>
            <li>
              <a
                href="#mail"
                className="grid grid-cols-[auto_1fr] gap-x-3.5 rounded-[14px] border border-cyan-200 bg-white px-4.5 py-4 transition hover:-translate-y-0.5 hover:border-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan-700 motion-reduce:transition-none dark:border-[#0f5a58] dark:bg-[#063b3a] dark:hover:border-cyan-300 dark:focus-visible:outline-cyan-300"
              >
                <svg
                  className="row-span-3 size-7 text-cyan-700 dark:text-cyan-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <path d="m4 7 8 6 8-6"></path>
                </svg>
                <strong className="text-cyan-950 dark:text-cyan-50">Lettre du club</strong>
                <span>Chaque mois</span>
                <small className="text-sm">Résultats et calendrier</small>
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm">
            © 2026 Club Envol Triathlon, association loi 1901 ·{" "}
            <a
              href="#mentions"
              className="text-cyan-950 underline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan-700 dark:text-cyan-50"
            >
              Mentions légales
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
