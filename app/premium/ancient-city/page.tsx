import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InfoBox } from "@/components/ui/InfoBox";

export const metadata = {
  title: "Datong Ancient City Audio Guide — 12 Episodes, Complete Walking Tour",
  description: "English audio walking tour of Datong Ancient City. 12 episodes covering temples, mosques, churches, markets, and the city wall — 3.28 sq km of living history.",
};

const EPISODES = [
  { num: 1, title: "Four Archways & Drum Tower — Heart of the City", duration: "4 min", highlight: false, desc: "Starting at the exact center. The Bell Tower's morning, the Drum Tower's evening. 600 years of urban rhythm." },
  { num: 2, title: "Guandi Temple — The God of War", duration: "3 min", highlight: false, desc: "Yuan Dynasty hall, pre-Ming joinery. Guan Yu's red face and green dragon blade. Why every Chinese city has a war god temple." },
  { num: 3, title: "Chunyang Palace — Daoism in the City", duration: "3 min", highlight: false, desc: "The Eight Immortals, a 300-year-old cypress, and a courtyard designed to make you want to stay." },
  { num: 4, title: "The Great Mosque — Islam in Datong", duration: "4 min", highlight: false, desc: "Founded Yuan Dynasty. Chinese roof + Arabic calligraphy. 700 years of Muslim life inside the city walls." },
  { num: 5, title: "The Catholic Church — Gothic in Grey Brick", duration: "3 min", highlight: false, desc: "Belgian missionaries, 1889. Gothic Revival in Chinese brick. Survived the Boxer Rebellion, occupation, and Cultural Revolution." },
  { num: 6, title: "Wen Miao — The Confucian Temple", duration: "3 min", highlight: false, desc: "Largest Confucian temple in Shanxi. No statues, no incense — just scholars' names carved in stone. Imperial yellow roof tiles." },
  { num: 7, title: "Shanhua Temple — The Quiet Masterpiece", duration: "3 min", highlight: false, desc: "1,200 years old, still under the radar. Jin Dynasty Buddhas with portrait-like faces. Liao Dynasty murals most visitors never see. Entry ticket required — buy at the gate." },
  { num: 8, title: "Fahua Temple — The White Marble Pagoda", duration: "2 min", highlight: false, desc: "A hidden gem: a white marble Yuan Dynasty pagoda tucked behind a quiet courtyard. Intricate carvings most tourists walk right past." },
  { num: 9, title: "Dongnan Yi — The Trendy Quarter", duration: "3 min", highlight: true, badge: "Must See", desc: "Datong's hippest neighborhood. Boutique shops, craft stores, art galleries, and gift-worthy souvenirs you won't find anywhere else. Western restaurants, coffee shops, and cocktail bars line the alleys — this is where young Datong hangs out. Perfect spot to take a break and buy gifts." },
  { num: 10, title: "Nine Dragon Screen — Ming Dynasty Ceramics", duration: "2 min", highlight: true, badge: "Must See", desc: "45m of glazed dragons. 1392. Cobalt blue from Persia. All that remains of a prince's palace." },
  { num: 11, title: "The Old Streets — Between the Sights", duration: "3 min", highlight: false, desc: "Courtyard homes, noodle shops, morning markets, grandmothers doing tai chi. The living city between the monuments." },
  { num: 12, title: "The City Wall", duration: "7 min", highlight: true, badge: "Must See", desc: "Climbing the wall at South Gate — 14m up, the best 1.5km stretch. Ming Dynasty military architecture on the empire's most dangerous frontier. Finish with the sunset view: Huayan's pagoda to the west, Yungang 16km beyond." },
];

export default function AncientCityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Audio Guides", href: "/premium" }, { label: "Datong Ancient City" }]} />

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">Premium Audio Guide</p>
        <h1 className="font-display font-extrabold text-stone-900 text-3xl sm:text-4xl mb-3">Datong Ancient City</h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">12-episode walking tour. A full-day loop through 3.28 square kilometers — temples, mosques, churches, markets, and the city wall at sunset.</p>
        <div className="flex flex-wrap gap-3 mt-3 text-xs font-mono text-stone-400">
          <span>12 episodes</span><span>~45 minutes</span><span>$5.99</span>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-stone-500">
          <span>⭐ 4.9</span><span>·</span><span>Trusted by travelers from 18 countries</span>
        </div>
      </header>

      <div className="mb-6 p-4 rounded-lg bg-amber-50 border-2 border-amber-300 flex items-start gap-3">
        <span className="text-lg">🎁</span>
        <div>
          <p className="font-semibold text-amber-800 text-sm">Free with Any Purchase</p>
          <p className="text-xs text-amber-700">Buy any guide above and get this Ancient City tour free. Or buy it standalone for <strong>$5.99</strong>.</p>
        </div>
      </div>

      <div className="mb-8 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
        <span className="text-lg">🛡️</span>
        <div><p className="font-semibold text-green-800 text-sm">30-Day Money-Back Guarantee</p><p className="text-xs text-green-700">Not satisfied? Email us for a full refund.</p></div>
      </div>

      <section className="mb-10">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">Episodes</h2>
        <div className="space-y-2">
          {EPISODES.map((ep) => (
            <div key={ep.num} className="flex items-start gap-3 p-3 rounded-lg border border-stone-200 bg-white">
              <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${ep.highlight ? "bg-red-800 text-white" : "bg-stone-900 text-white"}`}>
                {ep.num}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-stone-900 text-sm">{ep.title}</h3>
                  {ep.badge && <span className="flex-shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800">{ep.badge}</span>}
                </div>
                <p className="text-xs text-stone-500 mt-0.5">{ep.desc}</p>
                <p className="text-xs text-stone-400 font-mono">{ep.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-6 sm:p-8 rounded-xl bg-stone-900 text-white text-center mb-10">
        <h2 className="font-display font-bold text-2xl mb-2">Get All 12 Episodes</h2>
        <p className="text-stone-300 mb-2 text-sm">12 episodes · ~45 min · Lifetime access</p>
        <p className="font-display font-bold text-3xl mb-4">$5.99</p>
        <button className="px-6 py-3 rounded-md bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-colors">Buy Now — $5.99</button>
      </section>

      <InfoBox type="info" title="Bundle & Save">
        All 5 guides for <strong>$19.99</strong> — save 37%.{" "}
        <a href="/premium" className="font-semibold text-red-800">View bundle →</a>
      </InfoBox>
    </div>
  );
}
