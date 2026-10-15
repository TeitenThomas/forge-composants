export function ProductCards() {
  return (
    <div className="mx-auto w-[min(100%_-_2rem,64rem)] py-8">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-5">
        <li className="overflow-hidden rounded-[18px] border border-rose-100 bg-white dark:border-[#3e1a25] dark:bg-[#1d0b11]">
          <div
            aria-hidden="true"
            className="grid aspect-[4/3] place-items-center bg-rose-50 dark:bg-[#2a1018]"
          >
            <svg className="w-[70%]" viewBox="0 0 180 160">
              <path d="M30 70 L90 50 L150 70 L150 120 L30 120 Z" fill="#b9b4ad"></path>
            </svg>
          </div>
          <div className="grid gap-1.5 px-5 pt-4.5 pb-5">
            <h2 className="text-lg font-bold">
              <a
                href="#produit"
                className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-800 dark:focus-visible:outline-rose-300"
              >
                Plaid en laine mérinos
              </a>
            </h2>
            <p className="text-sm text-[#7a3a4a] dark:text-rose-200">Gris perle, 130 × 170 cm</p>
            <p className="mt-1 flex gap-1.5 text-sm">
              <span
                aria-hidden="true"
                className="tracking-widest text-amber-700 dark:text-amber-400"
              >
                ★★★★★
              </span>
              <span className="sr-only">Note : 4,8 sur 5, 126 avis</span>
              <span aria-hidden="true">4,8 (126)</span>
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <p className="text-2xl font-extrabold">89 €</p>
              <button
                type="button"
                className="min-h-11 cursor-pointer rounded-full bg-rose-800 px-4 text-sm font-semibold text-white hover:bg-rose-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-800 dark:bg-rose-300 dark:text-[#3b0a18] dark:hover:bg-rose-200 dark:focus-visible:outline-rose-300"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </li>
        <li className="overflow-hidden rounded-[18px] border border-rose-100 bg-white dark:border-[#3e1a25] dark:bg-[#1d0b11]">
          <div
            aria-hidden="true"
            className="grid aspect-[4/3] place-items-center bg-rose-50 dark:bg-[#2a1018]"
          >
            <svg className="w-[70%]" viewBox="0 0 180 160">
              <path d="M45 60 Q90 40 135 60 L135 115 Q90 130 45 115 Z" fill="#c86f4f"></path>
            </svg>
          </div>
          <div className="grid gap-1.5 px-5 pt-4.5 pb-5">
            <h2 className="text-lg font-bold">
              <a
                href="#produit"
                className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-800 dark:focus-visible:outline-rose-300"
              >
                Coussin lin lavé
              </a>
            </h2>
            <p className="text-sm text-[#7a3a4a] dark:text-rose-200">Terracotta, 45 × 45 cm</p>
            <p className="mt-1 flex gap-1.5 text-sm">
              <span
                aria-hidden="true"
                className="tracking-widest text-amber-700 dark:text-amber-400"
              >
                ★★★★★
              </span>
              <span className="sr-only">Note : 4,6 sur 5, 58 avis</span>
              <span aria-hidden="true">4,6 (58)</span>
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <p className="text-2xl font-extrabold">34 €</p>
              <button
                type="button"
                className="min-h-11 cursor-pointer rounded-full bg-rose-800 px-4 text-sm font-semibold text-white hover:bg-rose-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-800 dark:bg-rose-300 dark:text-[#3b0a18] dark:hover:bg-rose-200 dark:focus-visible:outline-rose-300"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
