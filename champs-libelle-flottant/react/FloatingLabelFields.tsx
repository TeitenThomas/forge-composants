export function FloatingLabelFields() {
  return (
    <div className="mx-auto w-[min(100%_-_2rem,34rem)] py-8">
      <form action="#envoi" className="grid gap-4">
        <div className="relative">
          <input
            id="float-name"
            type="text"
            name="name"
            placeholder=" "
            autoComplete="name"
            className="peer h-14 w-full rounded-[10px] border-[1.5px] border-slate-400 bg-white px-3.5 pt-5.5 pb-1.5 focus:border-blue-700 focus:shadow-[0_0_0_3px_rgb(29_78_216/0.25)] focus:outline-none dark:border-slate-500 dark:bg-slate-900 dark:focus:border-blue-300"
          />
          <label
            htmlFor="float-name"
            className="pointer-events-none absolute top-4 left-4 origin-top-left text-slate-600 transition peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-[0.78] peer-focus:-translate-y-3 peer-focus:scale-[0.78] peer-focus:text-blue-700 motion-reduce:transition-none dark:text-slate-300 dark:peer-focus:text-blue-300"
          >
            Nom complet
          </label>
        </div>
        <div className="relative">
          <input
            id="float-email"
            type="email"
            name="email"
            placeholder=" "
            autoComplete="email"
            className="peer h-14 w-full rounded-[10px] border-[1.5px] border-slate-400 bg-white px-3.5 pt-5.5 pb-1.5 focus:border-blue-700 focus:shadow-[0_0_0_3px_rgb(29_78_216/0.25)] focus:outline-none dark:border-slate-500 dark:bg-slate-900 dark:focus:border-blue-300"
          />
          <label
            htmlFor="float-email"
            className="pointer-events-none absolute top-4 left-4 origin-top-left text-slate-600 transition peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-[0.78] peer-focus:-translate-y-3 peer-focus:scale-[0.78] peer-focus:text-blue-700 motion-reduce:transition-none dark:text-slate-300 dark:peer-focus:text-blue-300"
          >
            Adresse e-mail
          </label>
        </div>
        <div className="relative">
          <input
            id="float-phone"
            type="tel"
            name="tel"
            placeholder=" "
            autoComplete="tel"
            className="peer h-14 w-full rounded-[10px] border-[1.5px] border-slate-400 bg-white px-3.5 pt-5.5 pb-1.5 focus:border-blue-700 focus:shadow-[0_0_0_3px_rgb(29_78_216/0.25)] focus:outline-none dark:border-slate-500 dark:bg-slate-900 dark:focus:border-blue-300"
          />
          <label
            htmlFor="float-phone"
            className="pointer-events-none absolute top-4 left-4 origin-top-left text-slate-600 transition peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-[0.78] peer-focus:-translate-y-3 peer-focus:scale-[0.78] peer-focus:text-blue-700 motion-reduce:transition-none dark:text-slate-300 dark:peer-focus:text-blue-300"
          >
            Téléphone (facultatif)
          </label>
        </div>
        <button
          type="submit"
          className="min-h-13 cursor-pointer rounded-[10px] bg-blue-700 font-bold text-white hover:bg-blue-800 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-700 dark:bg-blue-300 dark:text-[#0b1530] dark:hover:bg-blue-200 dark:focus-visible:outline-blue-300"
        >
          Être rappelé
        </button>
      </form>
    </div>
  );
}
