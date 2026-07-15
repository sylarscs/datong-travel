import Link from "next/link";
import { getFeaturedContent } from "@/lib/content";
import { CTABanner } from "@/components/ui/CTABanner";
import { getAffiliateUrl } from "@/lib/affiliate";
import { IMAGES } from "@/lib/images";

export default function HomePage() {
  const featuredGuides = getFeaturedContent("guides", 3);
  const featuredItineraries = getFeaturedContent("itineraries", 2);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-800 via-stone-800 to-stone-700">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-300 mb-4">
              Your Complete English Guide to
            </p>
            <h1 className="font-display font-extrabold text-white leading-[1.1] mb-6">
              Datong.
              <br />
              <span className="text-red-400">Ancient caves,</span>
              <br />
              living history.
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed mb-8 max-w-xl">
              Discover UNESCO World Heritage grottoes carved into sandstone cliffs,
              a temple suspended 75 meters in the air, and a walled city where
              Ming Dynasty history meets Shanxi&apos;s legendary noodle culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/guides"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-red-800 text-white font-semibold hover:bg-red-900 transition-colors"
              >
                Explore Guides →
              </Link>
              <Link
                href="/itineraries"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-stone-500 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                View Itineraries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Datong ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="font-display font-bold text-center mb-12">
          Why Datong?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "UNESCO Heritage",
              description:
                "The Yungang Grottoes hold 51,000+ Buddhist statues — one of the world's greatest collections of cave art, older than the Mogao Caves.",
              icon: "🏛️",
            },
            {
              title: "Living History",
              description:
                "Walk a 7km Ming Dynasty city wall, explore a 1,000-year-old Liao Dynasty temple, and stand beneath a temple on a cliff.",
              icon: "🏯",
            },
            {
              title: "Real Shanxi",
              description:
                "Far from the tourist crowds of Beijing and Xi'an, Datong is where you'll find authentic northern Chinese culture — and the best knife-cut noodles.",
              icon: "🍜",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-stone-200 bg-white hover:shadow-md transition-shadow"
            >
              <span className="text-2xl">{item.icon}</span>
              <h3 className="mt-3 font-semibold text-stone-900">{item.title}</h3>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Guides ── */}
      <section className="bg-stone-100 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-400 mb-2">
                Start Planning
              </p>
              <h2 className="font-display font-bold">Travel Guides</h2>
            </div>
            <Link
              href="/guides"
              className="hidden sm:inline-flex text-sm font-semibold text-red-800 hover:text-red-800 transition-colors"
            >
              All Guides →
            </Link>
          </div>

          {featuredGuides.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group block rounded-xl overflow-hidden border border-stone-200 bg-white hover:shadow-lg transition-all duration-200"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-stone-200 to-stone-100 flex items-center justify-center">
                    {guide.frontmatter.image ? (
                      <img
                        src={guide.frontmatter.image}
                        alt={guide.frontmatter.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-4xl opacity-30">
                        {guide.slug.includes("grotto") ? "🏛️" : guide.slug.includes("temple") ? "🏯" : "🗺️"}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-stone-900 group-hover:text-red-800 transition-colors leading-tight">
                      {guide.frontmatter.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-400 line-clamp-2 leading-relaxed">
                      {guide.frontmatter.description}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-stone-400">
                      <span className="font-mono">{guide.readingTime} min read</span>
                      {guide.frontmatter.tags?.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-stone-400 py-12">
              Guides coming soon! We&apos;re writing the most detailed Datong guides on the internet.
            </p>
          )}

          <Link
            href="/guides"
            className="sm:hidden mt-6 block text-center text-sm font-semibold text-red-800"
          >
            All Guides →
          </Link>
        </div>
      </section>

      {/* ── Quick Links ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="font-display font-bold text-center mb-10">
          Top Attractions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: "Yungang Grottoes", icon: "🏛️", href: "/guides/yungang-grottoes" },
            { name: "Hanging Temple", icon: "🏯", href: "/guides/hanging-temple" },
            { name: "Huayan Temple", icon: "🛕", href: "/attractions/huayan-temple" },
            { name: "City Wall", icon: "🧱", href: "/attractions/datong-city-wall" },
            { name: "Nine Dragon Screen", icon: "🐉", href: "/attractions/nine-dragon-screen" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-xl border border-stone-200 bg-white hover:shadow-sm transition-all group overflow-hidden"
            >
              <Link
                href={item.href}
                className="flex flex-col items-center gap-2 p-4 pb-2"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-semibold text-stone-900 group-hover:text-red-800 transition-colors text-center">
                  {item.name}
                </span>
              </Link>
              <a
                href={getAffiliateUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2 text-[10px] font-semibold text-red-800 hover:bg-red-50 transition-colors border-t border-stone-100"
              >
                Book Tickets →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Hotel Booking CTA ── */}
      <section className="bg-stone-100 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-white border border-stone-200 p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-400 mb-2">
                  Where to Stay
                </p>
                <h2 className="font-display font-bold mb-3">
                  Hotels in Datong
                </h2>
                <p className="text-stone-700 leading-relaxed mb-4 max-w-md">
                  From boutique courtyard hotels inside the ancient city walls to
                  international chains near the grottoes. Find the perfect base for
                  your Datong adventure.
                </p>
                <a
                  href={getAffiliateUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 rounded-md bg-red-800 text-white font-semibold hover:bg-red-900 transition-colors"
                >
                  Browse Hotels on Trip.com →
                </a>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-3">
                {["🏨", "🏡", "🛏️", "🏰"].map((icon, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-xl bg-stone-100 flex items-center justify-center text-2xl"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Email Signup ── */}
      <section id="checklist" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <CTABanner
          title="Get the Free Datong Travel Checklist"
          description="Packing list, essential Chinese phrases, must-see attractions ranked by priority, QR codes for Alipay & Didi setup — everything first-time visitors need, in a single PDF."
          buttonText="Send Me the Checklist"
          variant="teal"
        />
      </section>

      {/* ── About Note ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="text-center max-w-lg mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-400 mb-3">
            About This Site
          </p>
          <p className="text-sm text-stone-700 leading-relaxed">
            We&apos;re a small team of travelers who believe Datong deserves better
            English-language guides. Every recommendation is independently researched.
            Some links are affiliate links — we earn a small commission at no cost to you,
            which helps keep this site running.{" "}
            <Link href="/about" className="text-red-800 font-medium hover:text-red-800">
              Learn more →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
