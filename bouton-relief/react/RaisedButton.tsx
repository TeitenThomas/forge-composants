import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";
type Size = "small" | "medium" | "large";

const variants: Record<Variant, string> = {
  primary:
    "border-indigo-900 bg-indigo-600 text-white [--edge:var(--color-indigo-900)] dark:border-indigo-400 dark:bg-indigo-400 dark:text-indigo-950 dark:[--edge:var(--color-indigo-700)]",
  secondary:
    "border-indigo-900 bg-white text-indigo-900 [--edge:var(--color-indigo-900)] dark:border-indigo-500 dark:bg-indigo-950 dark:text-indigo-100 dark:[--edge:var(--color-indigo-500)]",
};

const sizes: Record<Size, string> = {
  small: "min-h-10 px-4 text-sm [--depth:4px]",
  medium: "min-h-12 px-6 text-base [--depth:5px]",
  large: "min-h-15 px-8 text-lg [--depth:6px]",
};

export type RaisedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function RaisedButton({
  variant = "primary",
  size = "medium",
  type = "button",
  className = "",
  ...props
}: RaisedButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border-2 font-bold shadow-[0_var(--depth)_0_var(--edge)] transition-[transform,box-shadow] duration-100 hover:-translate-y-px active:translate-y-[var(--depth)] active:shadow-none focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-amber-400 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
