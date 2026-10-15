import { useEffect, useId, useState } from "react";

// Replace each background with a real photo (an <img> with the same alt) when you have one.
const slides = [
  {
    title: "La terrasse au soleil couchant",
    text: "Dîner face aux Alpilles, de mai à septembre.",
    alt: "Terrasse en pierre avec table dressée face aux collines au coucher du soleil",
    background: "linear-gradient(135deg,#fcd9a8,#c2410c)",
  },
  {
    title: "Chambre Lavande",
    text: "Lit de 160, salle d'eau privative et vue sur le jardin.",
    alt: "Chambre aux murs mauves, lit blanc et fenêtre ouverte sur le jardin",
    background: "linear-gradient(135deg,#e2d5f5,#6d4fa8)",
  },
  {
    title: "La piscine chauffée",
    text: "Ouverte d'avril à octobre, transats et douche extérieure.",
    alt: "Piscine bordée d'oliviers et de transats blancs",
    background: "linear-gradient(135deg,#c4f1ec,#0f766e)",
  },
  {
    title: "Le petit-déjeuner maison",
    text: "Confitures du jardin, pain du village et œufs de nos poules.",
    alt: "Table de petit-déjeuner avec confitures, pain et fruits frais",
    background: "linear-gradient(135deg,#f6e7b0,#a16207)",
  },
];

export function ImageCarousel() {
  const id = useId();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const show = (next: number) => setIndex((next + slides.length) % slides.length);

  useEffect(() => {
    setPlaying(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!playing || hovered) return;
    const timer = setInterval(() => setIndex((current) => (current + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [playing, hovered]);

  return (
    <section
      aria-roledescription="carrousel"
      aria-label="Photos du Mas des Oliviers"
      onFocus={(event) => {
        if (!event.target.hasAttribute("data-carousel-toggle")) setPlaying(false);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="grid gap-4 text-[#042f2e] dark:text-[#e6fffb]"
    >
      <div id={`${id}-slides`} aria-live={playing ? "off" : "polite"} className="grid gap-4">
        {slides.map((slide, position) => (
          <figure
            key={slide.title}
            role="group"
            aria-roledescription="diapositive"
            aria-label={`${position + 1} sur ${slides.length}`}
            hidden={position !== index}
            className="overflow-hidden rounded-[20px] bg-white shadow-[0_10px_30px_-18px_rgb(4_47_46/0.5)] dark:bg-[#062523] dark:shadow-none"
          >
            <div
              role="img"
              aria-label={slide.alt}
              className="aspect-[16/9]"
              style={{ background: slide.background }}
            />
            <figcaption className="grid gap-1 px-5 py-4">
              <h3 className="text-lg font-bold">{slide.title}</h3>
              <p className="text-[#3f6260] dark:text-[#9fd3cc]">{slide.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          data-carousel-toggle
          aria-label={playing ? "Mettre en pause le défilement" : "Lancer le défilement"}
          onClick={() => setPlaying(!playing)}
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#bfe3de] bg-white text-[#0f766e] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#134e4a] dark:border-[#164e4a] dark:bg-[#062523] dark:text-[#5eead4] dark:focus-visible:outline-[#99f6e4]"
        >
          {playing ? (
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 6v12M15 6v12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M8 5.5v13l10-6.5z" />
            </svg>
          )}
        </button>
        <div className="mx-auto flex flex-wrap justify-center gap-1">
          {slides.map((slide, position) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Diapositive ${position + 1}`}
              aria-controls={`${id}-slides`}
              aria-current={position === index}
              onClick={() => show(position)}
              className="grid h-6 min-w-6 cursor-pointer place-items-center rounded-full before:size-2.5 before:rounded-full before:bg-[#8fbfb9] before:content-[''] focus-visible:outline-3 focus-visible:outline-offset-1 focus-visible:outline-[#134e4a] aria-[current=true]:before:w-6 aria-[current=true]:before:bg-[#0f766e] dark:before:bg-[#2f6b65] dark:focus-visible:outline-[#99f6e4] dark:aria-[current=true]:before:bg-[#5eead4]"
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Diapositive précédente"
          aria-controls={`${id}-slides`}
          onClick={() => show(index - 1)}
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#bfe3de] bg-white text-[#0f766e] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#134e4a] dark:border-[#164e4a] dark:bg-[#062523] dark:text-[#5eead4] dark:focus-visible:outline-[#99f6e4]"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m15 6-6 6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Diapositive suivante"
          aria-controls={`${id}-slides`}
          onClick={() => show(index + 1)}
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#bfe3de] bg-white text-[#0f766e] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#134e4a] dark:border-[#164e4a] dark:bg-[#062523] dark:text-[#5eead4] dark:focus-visible:outline-[#99f6e4]"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 6 6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
