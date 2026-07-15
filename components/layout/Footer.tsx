import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="no-underline">
              <span className="font-display font-bold text-lg text-stone-900">
                Datong Guide
              </span>
            </Link>
            <p className="mt-3 text-sm text-stone-400 leading-relaxed">
              The most detailed English travel guide to Datong, China.
              Independent, honest, and built by travelers who love Shanxi.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/guides" className="text-sm text-stone-700 hover:text-red-600 transition-colors">
                  Travel Guides
                </Link>
              </li>
              <li>
                <Link href="/attractions" className="text-sm text-stone-700 hover:text-red-600 transition-colors">
                  Attractions
                </Link>
              </li>
              <li>
                <Link href="/itineraries" className="text-sm text-stone-700 hover:text-red-600 transition-colors">
                  Itineraries
                </Link>
              </li>
              <li>
                <Link href="/transportation" className="text-sm text-stone-700 hover:text-red-600 transition-colors">
                  Getting Around
                </Link>
              </li>
            </ul>
          </div>

          {/* Practical */}
          <div>
            <h4 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-3">
              Practical
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/practical-info" className="text-sm text-stone-700 hover:text-red-600 transition-colors">
                  Visa & Info
                </Link>
              </li>
              <li>
                <Link href="/practical-info#weather" className="text-sm text-stone-700 hover:text-red-600 transition-colors">
                  Weather & When to Go
                </Link>
              </li>
              <li>
                <Link href="/practical-info#apps" className="text-sm text-stone-700 hover:text-red-600 transition-colors">
                  Essential Apps
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-stone-700 hover:text-red-600 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Guide */}
          <div>
            <h4 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-3">
              Free Download
            </h4>
            <p className="text-sm text-stone-400 mb-3">
              Get our free Datong Travel Checklist — packing tips, key phrases, and must-see spots.
            </p>
            <Link
              href="/#checklist"
              className="inline-block px-4 py-2 rounded-md bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              Get the Checklist →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} Datong Travel Guide. All rights reserved.
          </p>
          <p className="text-xs text-stone-400">
            Some links on this site are affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
