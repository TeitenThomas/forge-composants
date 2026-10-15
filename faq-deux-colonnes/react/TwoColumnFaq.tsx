export function TwoColumnFaq() {
  return (
    <div className="mx-auto w-[min(100%_-_2rem,66rem)] py-8">
      <section className="grid gap-8 min-[800px]:grid-cols-[1fr_1.6fr] min-[800px]:items-start">
        <div className="min-[800px]:sticky min-[800px]:top-8">
          <h2 className="mb-3 text-3xl font-bold">Vous avez des questions ?</h2>
          <p className="mb-5 leading-relaxed text-[#48614f] dark:text-[#b2cbbb]">
            Voici les réponses aux demandes les plus courantes. Pour le reste, notre équipe répond
            sous 24 heures ouvrées.
          </p>
          <a
            href="#contact"
            className="font-bold text-green-800 underline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-green-800 dark:text-green-300 dark:focus-visible:outline-green-300"
          >
            Écrire à l'équipe
          </a>
        </div>
        <div className="grid gap-3">
          <details className="group rounded-[14px] border border-[#d8e8dd] bg-white dark:border-[#20402b] dark:bg-[#0c1a11]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 font-semibold focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-green-800 dark:focus-visible:outline-green-300 [&::-webkit-details-marker]:hidden">
              Intervenez-vous le week-end ?
              <svg
                className="size-5 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 8 5 5 5-5"></path>
              </svg>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-[#48614f] dark:text-[#b2cbbb]">
              Oui, pour les urgences (fuite, panne de chauffage), nous intervenons le samedi et le
              dimanche avec une majoration de 30 % annoncée avant le déplacement.
            </p>
          </details>
          <details className="group rounded-[14px] border border-[#d8e8dd] bg-white dark:border-[#20402b] dark:bg-[#0c1a11]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 font-semibold focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-green-800 dark:focus-visible:outline-green-300 [&::-webkit-details-marker]:hidden">
              Le devis est-il gratuit ?
              <svg
                className="size-5 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 8 5 5 5-5"></path>
              </svg>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-[#48614f] dark:text-[#b2cbbb]">
              Oui. Nous nous déplaçons gratuitement dans un rayon de 25 km pour établir un devis
              détaillé, valable trois mois.
            </p>
          </details>
          <details className="group rounded-[14px] border border-[#d8e8dd] bg-white dark:border-[#20402b] dark:bg-[#0c1a11]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 font-semibold focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-green-800 dark:focus-visible:outline-green-300 [&::-webkit-details-marker]:hidden">
              Quelles garanties proposez-vous ?
              <svg
                className="size-5 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 8 5 5 5-5"></path>
              </svg>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-[#48614f] dark:text-[#b2cbbb]">
              Tous nos travaux bénéficient de la garantie décennale et d'une garantie de parfait
              achèvement d'un an. Les attestations sont fournies avec la facture.
            </p>
          </details>
          <details className="group rounded-[14px] border border-[#d8e8dd] bg-white dark:border-[#20402b] dark:bg-[#0c1a11]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 font-semibold focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-green-800 dark:focus-visible:outline-green-300 [&::-webkit-details-marker]:hidden">
              Pouvez-vous m'aider à obtenir des aides ?
              <svg
                className="size-5 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 8 5 5 5-5"></path>
              </svg>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-[#48614f] dark:text-[#b2cbbb]">
              Nous sommes certifiés RGE : vos travaux de rénovation énergétique sont éligibles à
              MaPrimeRénov' et aux certificats d'économies d'énergie. Nous montons le dossier avec
              vous.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
