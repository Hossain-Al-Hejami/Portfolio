
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ArrowButtonProps = {
  text: string;
  href: string;
  target?: "_blank" | "_self";
  rel?: string;
  icon?: ReactNode;
};

export default function ArrowButton({
  text,
  href,
  target,
  rel,
  icon,
}: ArrowButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="group inline-flex items-center gap-5 text-lg font-semibold text-black"
    >
      <span>{text}</span>

      <span className="transition-transform duration-300 ease-out group-hover:translate-x-2">
        {icon ?? <ArrowRight size={24} aria-hidden="true" />}
      </span>
    </a>
  );
}
