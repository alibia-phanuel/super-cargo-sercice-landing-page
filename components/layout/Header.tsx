/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Empêche le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white/85 shadow-[0_4px_20px_-8px_rgba(0,16,64,0.15)] backdrop-blur-md"
            : "bg-white/0",
        )}
      >
        <Container>
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              scrolled ? "py-3" : "py-5",
            )}
          >
            <a href="#accueil" className="flex items-center gap-2">
              <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white">
                <Image
                  src="/logo.png"
                  alt="Super Cargo Service"
                  fill
                  sizes="36px"
                  className="object-contain p-1"
                  priority
                />
              </span>
              <span
                className={cn(
                  "hidden font-display text-base font-semibold sm:inline transition-colors",
                  scrolled ? "text-primary" : "text-white",
                )}
              >
                Super Cargo Service
              </span>
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    scrolled
                      ? "text-text/70 hover:text-primary"
                      : "text-white/90 hover:text-white",
                  )}
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
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg lg:hidden transition-colors",
                scrolled ? "text-primary" : "text-white",
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Menu mobile avec AnimatePresence */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 bg-primary-dark lg:hidden"
              >
                <Container>
                  <div className="flex items-center justify-between py-5">
                    <span className="flex items-center gap-2">
                      <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-white">
                        <Image
                          src="/logo.png"
                          alt="Super Cargo Service"
                          fill
                          sizes="32px"
                          className="object-contain p-1"
                        />
                      </span>
                      <span className="font-display text-base font-semibold text-white">
                        Super Cargo Service
                      </span>
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
                    {NAV_LINKS.map((link, i) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                        className="border-b border-white/10 py-4 text-lg font-medium text-white/90"
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </nav>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-8"
                  >
                    <Button
                      href="#devis"
                      onClick={() => setOpen(false)}
                      className="w-full"
                    >
                      Obtenir un devis
                    </Button>
                  </motion.div>
                </Container>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
