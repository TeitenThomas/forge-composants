const keyframes = `
@keyframes dots-bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }

  40% {
    transform: translateY(-0.4rem);
    opacity: 1;
  }
}
`;

export function BouncingDots() {
  return (
    <>
      {/* React 19 hoists this style once, however many loaders are rendered. */}
      <style href="forge-loader-points" precedence="default">
        {keyframes}
      </style>
      <div
        role="status"
        className="inline-flex items-center gap-3 rounded-[18px_18px_18px_4px] bg-violet-100 px-4.5 py-3 text-[0.95rem] text-[#3b2a73] dark:bg-[#1e1240] dark:text-violet-200"
      >
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2 animate-[dots-bounce_1s_ease-in-out_infinite] rounded-full bg-violet-700 [animation-delay:-0.32s] motion-reduce:[animation-duration:3s] dark:bg-violet-300"></span>
          <span className="size-2 animate-[dots-bounce_1s_ease-in-out_infinite] rounded-full bg-violet-700 [animation-delay:-0.16s] motion-reduce:[animation-duration:3s] dark:bg-violet-300"></span>
          <span className="size-2 animate-[dots-bounce_1s_ease-in-out_infinite] rounded-full bg-violet-700 motion-reduce:[animation-duration:3s] dark:bg-violet-300"></span>
        </span>
        <span>Votre conseillère écrit</span>
      </div>
    </>
  );
}
