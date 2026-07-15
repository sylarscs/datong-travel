"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="absolute top-0 right-0 bottom-0 w-72 bg-stone-50 shadow-xl border-l border-stone-200 p-6 flex flex-col animate-[slideIn_200ms_ease-out]"
      >
        {/* Close */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="p-2 rounded-md text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4l10 10M14 4L4 14" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="mt-4 flex flex-col gap-1">
          <Link
            href="/"
            onClick={onClose}
            className="px-3 py-3 rounded-md font-semibold text-stone-900 hover:bg-stone-100 transition-colors"
          >
            Home
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="px-3 py-3 rounded-md font-medium text-stone-700 hover:text-red-700 hover:bg-stone-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 pt-6 border-t border-stone-200">
          <Link
            href="/#checklist"
            onClick={onClose}
            className="block w-full text-center px-4 py-3 rounded-md bg-red-700 text-white font-semibold hover:bg-red-700 transition-colors"
          >
            Get Free Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}
