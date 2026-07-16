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
      <section className="relative overflow-hidden bg-stone-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.heroSecondary})` }}
        />
        <div className="absolute inset-0 bg-stone-900/75" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">
              Your Complete English Guide to
            </p>
            <h1 className="font-display font-extrabold text-white leading-[1.1] mb-6 text-4xl sm:text-5xl lg:text-6xl">
              Datong.
              <br />
              <span className="text-red-300">Ancient caves,</span>
              <br />
              living history.
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
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
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-stone-400 text-white font-semibold hover:bg-white/10 transition-colors"
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

      {/* ── Audio Guide Promo ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <Link
          href="/premium"
          className="block rounded-xl bg-stone-900 p-6 sm:p-8 hover:bg-stone-800 transition-colors group"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-800 flex items-center justify-center text-2xl">
              🎧
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                New — Premium Audio Guides
              </p>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Yungang Grottoes &amp; Hanging Temple
              </h3>
              <p className="text-sm text-stone-300 max-w-lg">
                In-depth English narration — cave by cave, hall by hall. Like a
                documentary, not a textbook. Free preview available.
              </p>
            </div>
            <span className="flex-shrink-0 px-5 py-3 rounded-md bg-white text-stone-900 font-semibold text-sm group-hover:bg-stone-100 transition-colors">
              Listen Free →
            </span>
          </div>
        </Link>
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

      {/* ── Local Restaurant Guide ── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-400 mb-2">
              Eat Like a Local
            </p>
            <h2 className="font-display font-bold">Datong Restaurant Guide</h2>
            <p className="mt-3 text-sm text-stone-500 max-w-xl mx-auto leading-relaxed">
              Handpicked from{" "}
              <strong className="text-stone-700">Dianping (大众点评)</strong> and{" "}
              <strong className="text-stone-700">Xiaohongshu (小红书)</strong> —{" "}
              these are where real Datong locals line up, not where tour buses drop off.
            </p>
          </div>

          {/* Queue Warning */}
          <div className="mb-8 p-4 rounded-lg bg-amber-50 border border-amber-200 text-center">
            <p className="text-sm text-amber-800 font-semibold">
              🕐 All three restaurants are extremely popular — expect 1–3 hour waits during peak season.
              <span className="font-normal"> Arrive 30 min before opening or grab a number on Dianping ahead of time.</span>
            </p>
          </div>

          {/* Restaurant Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 凯鸽酒楼 */}
            <div className="rounded-xl border border-stone-200 bg-white overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-red-100 text-red-800 flex items-center justify-center text-sm font-bold">1</span>
                  <h3 className="font-display font-bold text-lg text-stone-900">Kaige Restaurant</h3>
                </div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">凯鸽酒楼</p>
                <p className="text-sm text-stone-600 leading-relaxed mb-3">
                  The most-loved local restaurant in Datong. Known for its{" "}
                  <strong className="text-stone-900">half-portion system</strong> — order
                  smaller plates at half price, so two people can try 6–8 dishes. The
                  complimentary eight-treasure congee (八宝粥) is legendary.
                </p>
                <div className="mb-3">
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">Signature Dishes</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Fengsha Chicken (风沙鸡)", "Shanxi Guoyourou (过油肉)", "Copper Hotpot (什锦锅)", "Millet Cake (黄米凉糕)", "Sea Buckthorn Juice (沙棘汁)"].map((d) => (
                      <span key={d} className="px-2 py-0.5 rounded-md bg-stone-100 text-xs text-stone-600 font-medium">{d}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-stone-400">
                  <span className="font-mono">💰 ~¥60/person</span>
                  <span>📍 Zhenxing Street (振兴街)</span>
                </div>
              </div>
              <div className="px-6 py-3 bg-stone-50 border-t border-stone-100">
                <p className="text-xs text-stone-500">
                  <strong className="text-amber-700">💡 Tip:</strong> Scan the QR code on Dianping
                  to join the virtual queue before you leave your hotel.
                </p>
              </div>
            </div>

            {/* 喜晋道 */}
            <div className="rounded-xl border border-stone-200 bg-white overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-red-100 text-red-800 flex items-center justify-center text-sm font-bold">2</span>
                  <h3 className="font-display font-bold text-lg text-stone-900">Xijindao</h3>
                </div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">喜晋道</p>
                <p className="text-sm text-stone-600 leading-relaxed mb-3">
                  The <strong className="text-stone-900">"Hermès of knife-cut noodles"</strong> —
                  Datong&apos;s most famous bowl of daoxiaomian (刀削面). Each ¥19 bowl comes
                  with a braised egg and tofu. The chili oil is house-made and worth
                  buying a jar.
                </p>
                <div className="mb-3">
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">Signature Dishes</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Meat Sauce Noodles (肉沫面)", "Braised Pork Strip (扒肉条)", "Braised Beef (酱牛肉)", "Lamb Skewers (羊肉串)", "Milk Skin Yogurt (奶皮子)"].map((d) => (
                      <span key={d} className="px-2 py-0.5 rounded-md bg-stone-100 text-xs text-stone-600 font-medium">{d}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-stone-400">
                  <span className="font-mono">💰 ~¥40/person</span>
                  <span>📍 Huayan Temple area (华严寺旁)</span>
                </div>
              </div>
              <div className="px-6 py-3 bg-stone-50 border-t border-stone-100">
                <p className="text-xs text-stone-500">
                  <strong className="text-red-700">⚠️ Longest queue in Datong:</strong> 185+
                  tables on weekends. Scalpers sell queue numbers outside for ~¥30 — skip
                  them and use the &quot;美味不用等&quot; WeChat mini program instead.
                </p>
              </div>
            </div>

            {/* 凤临阁 */}
            <div className="rounded-xl border border-stone-200 bg-white overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-red-100 text-red-800 flex items-center justify-center text-sm font-bold">3</span>
                  <h3 className="font-display font-bold text-lg text-stone-900">Fenglinge</h3>
                </div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">凤临阁</p>
                <p className="text-sm text-stone-600 leading-relaxed mb-3">
                  A 500-year-old restaurant that spent <strong className="text-stone-900">¥370 million</strong> on
                  its interior. Empress Dowager Cixi ate here. The{" "}
                  <strong className="text-stone-900">same group owns Xijindao</strong>, so
                  you can order their famous knife-cut noodles here — same kitchen, no queue.
                </p>
                <div className="mb-3">
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">Signature Dishes</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Hundred-Flower Shaomai (百花烧麦)", "Guoyourou (过油肉)", "Yellow-Braised Meatballs (黄焖丸子)", "Copper Hotpot (什锦火锅)", "Xijindao Noodles (刀削面)"].map((d) => (
                      <span key={d} className="px-2 py-0.5 rounded-md bg-stone-100 text-xs text-stone-600 font-medium">{d}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-stone-400">
                  <span className="font-mono">💰 ~¥100/person</span>
                  <span>📍 Inside Ancient City (古城内)</span>
                </div>
              </div>
              <div className="px-6 py-3 bg-stone-50 border-t border-stone-100">
                <p className="text-xs text-stone-500">
                  <strong className="text-amber-700">💡 Tip:</strong> Morning queue opens at
                  9am for lunch, 3:30pm for dinner. Grab your number early — or go to the
                  Yujinyuan (御锦园) branch which is less crowded.
                </p>
              </div>
            </div>
          </div>
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
