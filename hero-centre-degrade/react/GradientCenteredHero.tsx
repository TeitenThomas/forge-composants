export function GradientCenteredHero() {
  return (
    <section className="grid justify-items-center gap-5 bg-[radial-gradient(40rem_22rem_at_20%_0%,#c7d7ff,transparent_70%),radial-gradient(36rem_20rem_at_85%_10%,#e9d5ff,transparent_70%)] px-5 py-20 text-center dark:bg-[radial-gradient(40rem_22rem_at_20%_0%,#1d3170,transparent_70%),radial-gradient(36rem_20rem_at_85%_10%,#3b1d63,transparent_70%)]">
      <p className="inline-flex items-center gap-2.5 rounded-full bg-white py-1 pr-3.5 pl-1 text-sm font-medium dark:bg-[#111a38]">
        <span className="rounded-full bg-[#2347d6] px-2.5 py-1 font-bold text-white dark:bg-[#8fa8ff] dark:text-[#060b1d]">
          Nouveau
        </span>{" "}
        Rapprochement bancaire automatique
      </p>
      <h1 className="max-w-[18ch] text-4xl leading-[1.04] font-extrabold tracking-[-0.035em] md:text-7xl">
        La comptabilité de votre entreprise, tenue au jour le jour
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-[#3b4a6b] dark:text-[#b6c2e2]">
        Importez vos relevés, photographiez vos tickets : Grandlivre classe tout et prépare la
        déclaration de TVA.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <a
          href="#essai"
          className="inline-flex min-h-12 items-center rounded-xl bg-[#2347d6] px-6 font-bold text-white hover:bg-[#1b3ab5] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#2347d6] dark:bg-[#8fa8ff] dark:text-[#060b1d] dark:hover:bg-[#adc0ff] dark:focus-visible:outline-[#8fa8ff]"
        >
          Essayer 30 jours
        </a>{" "}
        <a
          href="#demo"
          className="inline-flex min-h-12 items-center rounded-xl bg-white px-6 font-bold hover:bg-indigo-50 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#2347d6] dark:bg-[#111a38] dark:hover:bg-[#18244d] dark:focus-visible:outline-[#8fa8ff]"
        >
          Voir une démonstration
        </a>
      </div>
      <p className="text-sm text-[#3b4a6b] dark:text-[#b6c2e2]">
        Sans engagement · Données hébergées en France
      </p>
    </section>
  );
}
