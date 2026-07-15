import Link from "next/link";
import { getAllContent } from "@/lib/content";
import { Breadcrumb } from "@/components/content/Breadcrumb";

export const metadata = {
  title: "Datong Itineraries — 1 to 5 Day Plans",
  description:
    "Ready-made Datong itineraries for every trip length. Day-by-day plans covering grottoes, temples, food, and transport.",
};

export default function ItinerariesPage() {
  const itineraries = getAllContent("itineraries");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Itineraries" },
        ]}
      />

      <header className="mb-10">
        <h1 className="font-display font-extrabold text-stone-900 mb-3">
          Itineraries
        </h1>
        <p className="text-stone-700 leading-relaxed max-w-xl">
          Don&apos;t just plan — steal our day-by-day Datong itineraries built by
          locals who know the city inside out.
        </p>
      </header>

      {itineraries.length > 0 ? (
        <div className="space-y-8">
          {itineraries.map((itin) => (
            <Link
              key={itin.slug}
              href={`/itineraries/${itin.slug}`}
              className="block rounded-xl border border-sand-200 bg-white p-6 hover:shadow-lg transition-all group"
            >
              <h2 className="font-display font-bold text-xl text-stone-900 group-hover:text-cinnabar transition-colors">
                {itin.frontmatter.title}
              </h2>
              <p className="mt-2 text-stone-700 leading-relaxed">
                {itin.frontmatter.description}
              </p>
              <div className="mt-3 flex items-center gap-4 text-xs text-sand-500 font-mono">
                <span>{itin.readingTime} min read</span>
                <span className="px-2 py-0.5 rounded-full bg-sand-100">
                  {itin.slug.includes("3-day") ? "Most Popular" : "Itinerary"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-sand-500 text-lg mb-4">Itineraries coming soon!</p>
          <p className="text-sand-500 text-sm">
            We&apos;re building detailed day-by-day plans. Sign up to get notified when they&apos;re ready.
          </p>
        </div>
      )}
    </div>
  );
}
