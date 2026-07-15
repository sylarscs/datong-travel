import Link from "next/link";
import { getAllContent } from "@/lib/content";
import { Breadcrumb } from "@/components/content/Breadcrumb";

export const metadata = {
  title: "Datong Travel Guides — Everything You Need to Know",
  description:
    "Comprehensive English-language travel guides for Datong, China. Yungang Grottoes, Hanging Temple, food guides, itineraries, and practical tips.",
};

export default function GuidesPage() {
  const guides = getAllContent("guides");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Guides" },
        ]}
      />

      <header className="mb-10">
        <h1 className="font-display font-extrabold text-stone-900 mb-3">
          Travel Guides
        </h1>
        <p className="text-stone-700 leading-relaxed max-w-xl">
          Everything you need to plan your Datong trip — from UNESCO caves to the
          best noodle shops in the ancient city.
        </p>
      </header>

      {guides.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group block rounded-xl overflow-hidden border border-sand-200 bg-white hover:shadow-lg transition-all"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-sand-200 to-sand-100 flex items-center justify-center">
                {guide.frontmatter.image ? (
                  <img
                    src={guide.frontmatter.image}
                    alt={guide.frontmatter.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-4xl opacity-30">🗺️</span>
                )}
              </div>
              <div className="p-5">
                {guide.frontmatter.tags && (
                  <div className="flex gap-2 mb-2">
                    {guide.frontmatter.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-sand-100 text-sand-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h2 className="font-display font-bold text-lg text-stone-900 group-hover:text-cinnabar transition-colors leading-tight">
                  {guide.frontmatter.title}
                </h2>
                <p className="mt-2 text-sm text-sand-500 line-clamp-2">
                  {guide.frontmatter.description}
                </p>
                <div className="mt-3 text-xs text-sand-500 font-mono">
                  {guide.readingTime} min read
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-sand-500 text-lg mb-4">Guides are being written!</p>
          <p className="text-sand-500 text-sm">
            We&apos;re crafting the most detailed Datong guides on the internet.
            Check back soon, or{" "}
            <Link href="/#checklist" className="text-cinnabar font-medium">
              sign up for our newsletter
            </Link>{" "}
            to get notified when new guides are published.
          </p>
        </div>
      )}
    </div>
  );
}
