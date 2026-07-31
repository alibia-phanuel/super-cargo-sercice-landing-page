import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "whatsapp";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-red text-white hover:bg-[#b8151b] shadow-[0_8px_24px_-8px_rgba(215,25,32,0.55)]",
  secondary:
    "bg-white text-navy hover:bg-mist shadow-[0_8px_24px_-10px_rgba(6,43,104,0.35)]",
  outline:
    "border border-white/30 text-white hover:bg-white/10",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1fb958] shadow-[0_8px_24px_-8px_rgba(37,211,102,0.55)]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  icon,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  icon?: ReactNode;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.97]",
    VARIANT_CLASSES[variant],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
          {icon}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
