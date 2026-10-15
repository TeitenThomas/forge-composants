import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

type State = "idle" | "pending" | "done";

export type LoadingButtonProps = {
  /** Runs the action; the button stays busy until the promise settles. */
  onAction: () => Promise<unknown>;
  children: ReactNode;
  pendingLabel?: string;
  doneLabel?: string;
  className?: string;
};

export function LoadingButton({
  onAction,
  children,
  pendingLabel = "Envoi…",
  doneLabel = "Demande envoyée",
  className = "",
}: LoadingButtonProps) {
  const [state, setState] = useState<State>("idle");
  const [width, setWidth] = useState<number>();
  const button = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (state === "pending" && button.current && width === undefined) {
      setWidth(button.current.offsetWidth);
    }
  }, [state, width]);

  async function run() {
    if (state === "pending") return;
    setState("pending");
    try {
      await onAction();
      setState("done");
    } catch {
      setState("idle");
    }
  }

  const layer =
    "col-start-1 row-start-1 inline-flex items-center gap-2 transition-opacity motion-reduce:transition-none";
  return (
    <>
      <button
        ref={button}
        type="button"
        onClick={run}
        aria-busy={state === "pending"}
        style={width ? { minWidth: width } : undefined}
        className={`inline-grid min-h-12 cursor-pointer place-items-center rounded-full px-7 font-semibold text-white transition-colors focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber-400 aria-busy:cursor-progress dark:text-emerald-950 ${
          state === "done"
            ? "bg-emerald-600 dark:bg-emerald-200"
            : "bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-300 dark:hover:bg-emerald-200"
        } ${className}`}
      >
        <span className={`${layer} ${state === "idle" ? "opacity-100" : "opacity-0"}`}>
          {children}
        </span>
        <span
          aria-hidden="true"
          className={`${layer} ${state === "pending" ? "opacity-100" : "opacity-0"}`}
        >
          <span className="size-4 animate-spin rounded-full border-[2.5px] border-current border-r-transparent motion-reduce:[animation-duration:2s]" />
          {pendingLabel}
        </span>
        <span
          aria-hidden="true"
          className={`${layer} ${state === "done" ? "opacity-100" : "opacity-0"}`}
        >
          {doneLabel}
        </span>
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {state === "pending" ? pendingLabel : state === "done" ? doneLabel : ""}
      </span>
    </>
  );
}
