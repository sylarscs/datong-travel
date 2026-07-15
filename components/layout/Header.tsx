"use client";

import { useState } from "react";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { href: "/guides", label: "Guides" },
  { href: "/attractions", label: "Attractions" },
  { href: "/itineraries", label: "Itineraries" },
  { href: "/transportation", label: "Transport" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-sand-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 no-underline hover:opacity-80 transition-opacity"
        >
          <span className="w-8 h-8 rounded-lg bg-cinnabar flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M12 2L2 22h20L12 2z" />
              <path d="M12 10v7" />
            </svg>
          </span>
          <span className="font-display font-bold text-lg text-stone-900">
            Datong Guide
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-md text-sm font-medium text-stone-700 hover:text-cinnabar hover:bg-sand-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/practical-info"
            className="px-3 py-2 rounded-md text-sm font-medium text-stone-700 hover:text-cinnabar hover:bg-sand-100 transition-colors"
          >
            Practical Info
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#checklist"
            className="px-4 py-2 rounded-md bg-cinnabar text-white text-sm font-semibold hover:bg-cinnabar-hover transition-colors"
          >
            Free Guide
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 rounded-md text-stone-700 hover:bg-sand-100 transition-colors"
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 5h14M3 10h14M3 15h14" />
          </svg>
        </button>
      </nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </header>
  );
}
