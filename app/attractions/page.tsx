import Link from "next/link";
import { getAllContent } from "@/lib/content";
import { attractions } from "@/lib/data";
import { Breadcrumb } from "@/components/content/Breadcrumb";

export const metadata = {
  title: "Datong Attractions — Temples, Grottoes & Ancient Walls",
  description:
    "Complete guide to Datong's top attractions: Yungang Grottoes, Hanging Temple, Huayan Temple, Nine Dragon Screen, and the Ancient City Wall.",
};

export default function AttractionsPage() {
  const guides = getAllContent("attractions");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Attractions" },
        ]}
      />

      <header className="mb-10">
        <h1 className="font-display font-extrabold text-stone-900 mb-3">
          Attractions
        </h1>
        <p className="text-stone-700 leading-relaxed max-w-xl">
          Datong packs more history into one city than most countries. Here&apos;s
          what you can&apos;t miss.
        </p>
      </header>

      {/* Hardcoded attractions as rich cards */}
      <div className="space-y-6">
        {attractions.map((attr) => (
          <div
            key={attr.name}
            className="rounded-xl border border-stone-200 bg-white p-5 sm:p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="font-display font-bold text-lg text-stone-900">
                    {attr.name}
                  </h2>
                  <span className="text-xs text-stone-400 font-mono">
                    {attr.nameZh}
                  </span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {attr.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-xs text-stone-400">
                  <span className="font-mono">🎫 {attr.ticketPrice}</span>
                  <span className="font-mono">🕐 {attr.hours}</span>
                  <span className="font-mono">⏱️ {attr.duration}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0 sm:text-right">
                {guides.find((g) => g.slug.includes(attr.name.toLowerCase().split(" ")[0])) ? (
                  <Link
                    href={`/attractions/${guides.find((g) =>
                      g.slug.includes(attr.name.toLowerCase().split(" ")[0])
                    )?.slug}`}
                    className="px-4 py-2 rounded-md bg-red-600 text-white text-sm font-semibold text-center hover:bg-red-700 transition-colors"
                  >
                    Full Guide →
                  </Link>
                ) : (
                  <span className="px-4 py-2 rounded-md bg-stone-100 text-stone-400 text-sm text-center">
                    Guide Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
