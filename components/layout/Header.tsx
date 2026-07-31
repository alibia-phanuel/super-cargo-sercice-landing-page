"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-white/85 shadow-[0_4px_20px_-8px_rgba(6,43,104,0.15)] backdrop-blur-md"
          : "bg-white/0"
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "py-3" : "py-5"
          )}
        >
          <a href="#accueil" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy font-display text-sm font-bold text-white">
              SCS
            </span>
            <span className="hidden font-display text-base font-semibold text-navy sm:inline">
              Super Cargo Service
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#devis" icon={<ArrowRight className="h-4 w-4" />}>
              Obtenir un devis
            </Button>
          </div>

          <button
            aria-label="Ouvrir le menu"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {open && (
        <div className="fixed inset-0 z-50 bg-navy-deep lg:hidden">
          <Container>
            <div className="flex items-center justify-between py-5">
              <span className="font-display text-base font-semibold text-white">
                Super Cargo Service
              </span>
              <button
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-4 text-lg font-medium text-white/90"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-8">
              <Button href="#devis" onClick={() => setOpen(false)} className="w-full">
                Obtenir un devis
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
