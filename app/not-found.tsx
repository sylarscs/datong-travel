import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-display font-bold text-stone-300 mb-4">404</p>
        <h1 className="font-display font-bold text-2xl text-stone-900 mb-2">
          Page Not Found
        </h1>
        <p className="text-stone-700 mb-6 max-w-sm mx-auto">
          This page doesn&apos;t exist — maybe it moved, or maybe you typed the wrong URL.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-md bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors"
          >
            Back to Home →
          </Link>
          <Link
            href="/guides"
            className="px-5 py-2.5 rounded-md border border-stone-300 text-stone-900 font-semibold text-sm hover:bg-white transition-colors"
          >
            Browse Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
