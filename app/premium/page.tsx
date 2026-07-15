import Link from "next/link";
import { Breadcrumb } from "@/components/content/Breadcrumb";

export const metadata = {
  title: "Audio Guides — 5 English Guides for Datong's Best Sites",
  description: "Premium English audio guides for Yungang Grottoes, Hanging Temple, Huayan Temple, Yingxian Wooden Pagoda, and Datong Ancient City. Bundle all 5 for $19.99.",
};

const GUIDES = [
  {
    id: "yungang", title: "Yungang Grottoes", subtitle: "15 Episodes · ~70 min",
    price: "$7.99", image: "/images/yungang.jpg",
    desc: "Every cave, every section. Lingyan Temple through Cave 45 — 51,000 Buddhas explained in documentary-style narration.",
  },
  {
    id: "xuankong", title: "Hanging Temple", subtitle: "12 Episodes · ~45 min",
    price: "$5.99", image: "/images/xuankong.jpg",
    desc: "The canyon approach, cantilever engineering, every hall and walkway, the Three Religions Hall, and the view from 90 meters.",
  },
  {
    id: "huayan", title: "Huayan Temple", subtitle: "8 Episodes · ~30 min",
    price: "$4.99", image: "",
    desc: "China's largest Buddhist hall. A 1,000-year-old sutra library. The Khitan empire's greatest surviving monument — and its quiet gardens.",
  },
  {
    id: "yingxian", title: "Yingxian Wooden Pagoda", subtitle: "6 Episodes · ~20 min",
    price: "$4.99", image: "",
    desc: "The world's oldest wooden pagoda. 67 meters, zero nails, 40+ earthquakes survived. A day trip into Liao Dynasty engineering — and real Shanxi.",
  },
  {
    id: "ancient-city", title: "Datong Ancient City", subtitle: "12 Episodes · ~45 min",
    price: "$4.99", image: "",
    desc: "A full-day walking tour: 12 attractions across 3.28 sq km — temples, mosques, churches, markets, and the city wall at sunset. Also free with any purchase above.",
    bonus: true,
  },
];

export default function PremiumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Audio Guides" }]} />

      <header className="mb-10">
        <h1 className="font-display font-extrabold text-stone-900 mb-3">Audio Guides</h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
          5 premium English audio guides. Documentary-style, in-depth, written for travelers who want more than a guidebook paragraph.
        </p>
        <p className="text-sm text-stone-400 mt-2">⭐ 4.9 · Trusted by travelers from 18 countries · 30-day refund on every guide</p>
      </header>

      {/* Guides */}
      <div className="space-y-6 mb-12">
        {GUIDES.map((g) => (
          <div key={g.id} className="rounded-xl border border-stone-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-48 flex-shrink-0">
                {g.image ? (
                  <div className="h-40 sm:h-full bg-cover bg-center" style={{ backgroundImage: `url(${g.image})` }} />
                ) : (
                  <div className="h-40 sm:h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
                    <span className="text-3xl">🎧</span>
                  </div>
                )}
              </div>
              <div className="flex-1 p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-xs text-stone-400">{g.subtitle}</p>
                      {(g as any).bonus && <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-200 text-amber-800">Free with Any Purchase</span>}
                    </div>
                    <h3 className="font-display font-bold text-lg text-stone-900">{g.title}</h3>
                  </div>
                  <span className="flex-shrink-0 px-3 py-1 rounded-full bg-stone-900 text-white text-sm font-semibold">{g.price}</span>
                </div>
                <p className="text-sm text-stone-600 mb-3">{g.desc}</p>
                <div className="flex items-center gap-3">
                  <Link href={`/premium/${g.id}`} className="inline-block px-4 py-2 rounded-md bg-red-800 text-white text-sm font-semibold hover:bg-red-900 transition-colors">
                    View Episodes →
                  </Link>
                  {(g as any).bonus && <span className="text-xs text-stone-400">Or buy separately — $4.99</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bundle */}
      <section className="p-6 sm:p-8 rounded-xl bg-stone-900 text-white text-center mb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">Best Value — Save 30%</p>
        <h2 className="font-display font-bold text-2xl mb-2">Datong Complete Bundle</h2>
        <p className="text-stone-300 mb-1 max-w-md mx-auto text-sm">
          All 4 premium guides — Yungang Grottoes + Hanging Temple + Huayan Temple + Yingxian Wooden Pagoda.
        </p>
        <p className="text-lg text-amber-300 font-semibold mb-4">+ Datong Ancient City (12 episodes · 45 min) — FREE</p>
        <p className="font-display font-bold text-3xl mb-1">$19.99</p>
        <p className="text-xs text-stone-400 mb-4 line-through">$23.96 separately</p>
        <button className="px-6 py-3 rounded-md bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-colors">
          Get the Bundle — $19.99
        </button>
      </section>

    </div>
  );
}
