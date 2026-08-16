"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink(
        SITE.whatsappNumber,
        "Bonjour, je souhaite un devis pour importer depuis la Chine.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Super Cargo Service sur WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 1.2,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-3 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-all duration-300 hover:pr-5 sm:bottom-7 sm:right-7"
    >
      <span className="flex h-8 w-8 items-center justify-center">
        <MessageCircle className="h-6 w-6" strokeWidth={2} />
      </span>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[140px] sm:inline-block">
        WhatsApp
      </span>
    </motion.a>
  );
}
