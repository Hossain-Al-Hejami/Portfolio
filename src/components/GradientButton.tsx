import type { ReactNode } from "react";

type GradientButtonProps = {
  text: string;
  href: string;
  target?: "_blank" | "_self";
  rel?: string;
  icon?: ReactNode;
};

export default function GradientButton({
  text,
  href,
  target,
  rel,
  icon,
}: GradientButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="group relative inline-block"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 bg-linear-to-r from-purple-500 via-pink-500 to-orange-400"
      />

      <span className="relative flex items-center justify-center gap-2 bg-black px-6 py-3 text-lg font-semibold text-white transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3">
        {icon}
        {text}
      </span>
    </a>
  );
}
