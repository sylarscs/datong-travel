import Link from "next/link";
import { Breadcrumb } from "@/components/content/Breadcrumb";

export const metadata = {
  title: "Premium Audio Guides — Datong's Complete English Narration",
  description:
    "5 in-depth audio guides: Yungang (15 eps), Hanging Temple (4 eps), Huayan Temple (5 eps), + free bonus City Wall & Nine Dragon Screen with bundle.",
};

const GUIDES = [
  {
    id: "yungang", title: "Yungang Grottoes", subtitle: "15 Episodes — Every Cave Covered",
    episodes: 15, duration: "~70 min", price: "$7.99", image: "/images/yungang.jpg",
    description: "Lingyan Temple through Cave 45. Every section, every major cave, every story.",
  },
  {
    id: "xuankong", title: "Hanging Temple", subtitle: "4 Episodes — Engineering & Faith",
    episodes: 4, duration: "~20 min", price: "$5.99", image: "/images/xuankong.jpg",
    description: "The approach, the cantilever engineering, three religions under one roof, the view from 90 meters.",
  },
  {
    id: "huayan", title: "Huayan Temple", subtitle: "5 Episodes — Liao Dynasty Masterpiece",
    episodes: 5, duration: "~20 min", price: "$4.99", image: "",
    description: "China's largest Buddhist hall, the 1,000-year-old sutra library, and the best surviving monument of a vanished empire.",
  },
];

const BONUS = [
  { title: "Datong Ancient City Wall", eps: "3 episodes · ~12 min", desc: "7.2km of Ming Dynasty fortification. Walk the wall at sunset." },
  { title: "Nine Dragon Screen", eps: "2 episodes · ~8 min", desc: "The oldest and largest glazed dragon screen in China. 1392, 45 meters of ceramic dragons." },
];

export default function PremiumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Premium Audio Guides" }]} />

      <header className="mb-10">
        <h1 className="font-display font-extrabold text-stone-900 mb-3">Audio Guides</h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
          The English audio guides Datong&apos;s attractions don&apos;t provide. In-depth, documentary-style narration for every major site.
        </p>
      </header>

      {/* Paid Guides */}
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
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">{g.subtitle}</p>
                    <h3 className="font-display font-bold text-lg text-stone-900">{g.title}</h3>
                  </div>
                  <span className="flex-shrink-0 px-3 py-1 rounded-full bg-stone-900 text-white text-sm font-semibold">{g.price}</span>
                </div>
                <p className="text-sm text-stone-600 mb-3">{g.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-stone-400 mb-3">
                  <span className="font-mono">{g.episodes} episodes</span>
                  <span className="font-mono">{g.duration}</span>
                </div>
                <Link href={`/premium/${g.id}`} className="inline-block px-4 py-2 rounded-md bg-red-800 text-white text-sm font-semibold hover:bg-red-900 transition-colors">
                  View Episodes →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bundle */}
      <section className="mb-12 p-6 sm:p-8 rounded-xl bg-stone-900 text-white text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">Best Value</p>
        <h2 className="font-display font-bold text-2xl mb-2">Datong Complete Bundle</h2>
        <p className="text-stone-300 mb-4 max-w-md mx-auto text-sm">
          All 3 premium guides — 24 episodes, ~110 minutes. Everything you need for Datong&apos;s UNESCO sites and hidden gems.
        </p>
        <p className="font-display font-bold text-3xl mb-1">$14.99</p>
        <p className="text-xs text-stone-400 mb-4 line-through">$18.97 separately</p>
        <button className="px-6 py-3 rounded-md bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-colors">
          Get the Bundle — $14.99
        </button>
        <p className="text-xs text-stone-400 mt-4">Payment coming soon.</p>
      </section>

      {/* Bonus */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-100 text-amber-700">Free Bonus</span>
          <h2 className="font-display font-bold text-xl text-stone-900">Included with Bundle</h2>
        </div>
        <p className="text-sm text-stone-500 mb-4">
          These two guides are <strong>free</strong> with the 3-guide bundle. Not sold separately.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BONUS.map((b) => (
            <div key={b.title} className="p-5 rounded-xl border border-amber-200 bg-amber-50">
              <h3 className="font-display font-bold text-stone-900 mb-1">{b.title}</h3>
              <p className="text-xs text-stone-500 mb-2">{b.eps}</p>
              <p className="text-sm text-stone-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
