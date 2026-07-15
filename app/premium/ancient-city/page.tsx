import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InfoBox } from "@/components/ui/InfoBox";

export const metadata = {
  title: "Datong Ancient City Audio Guide — 12 Episodes, Complete Walking Tour",
  description: "English audio walking tour of Datong Ancient City. 12 episodes covering temples, mosques, churches, markets, and the city wall — 3.28 sq km of living history.",
};

const EPISODES = [
  { num: 1, title: "Four Archways & Drum Tower — Heart of the City", duration: "4 min", desc: "Starting at the exact center. The Bell Tower's morning, the Drum Tower's evening. 600 years of urban rhythm." },
  { num: 2, title: "Guandi Temple — The God of War", duration: "3 min", desc: "Yuan Dynasty hall, pre-Ming joinery. Guan Yu's red face and green dragon blade. Why every Chinese city has a war god temple." },
  { num: 3, title: "Chunyang Palace — Daoism in the City", duration: "3 min", desc: "The Eight Immortals, a 300-year-old cypress, and a courtyard designed to make you want to stay." },
  { num: 4, title: "The Great Mosque — Islam in Datong", duration: "4 min", desc: "Founded Yuan Dynasty. Chinese roof + Arabic calligraphy. 700 years of Muslim life inside the city walls." },
  { num: 5, title: "The Catholic Church — Gothic in Grey Brick", duration: "3 min", desc: "Belgian missionaries, 1889. Gothic Revival in Chinese brick. Survived the Boxer Rebellion, occupation, and Cultural Revolution." },
  { num: 6, title: "Wen Miao — The Confucian Temple", duration: "3 min", desc: "Largest Confucian temple in Shanxi. No statues, no incense — just scholars' names carved in stone. Imperial yellow roof tiles." },
  { num: 7, title: "Shanhua Temple — The Quiet Masterpiece", duration: "3 min", desc: "Free, uncrowded, 1,200 years old. Jin Dynasty Buddhas with portrait-like faces. Liao Dynasty murals most visitors never see." },
  { num: 8, title: "Fahua Temple & Dongnan Yi", duration: "4 min", desc: "The hidden gem: a white marble Yuan Dynasty pagoda. Plus the old merchant quarter — Coal Market Street, Silk Alley." },
  { num: 9, title: "Nine Dragon Screen — Ming Dynasty Ceramics", duration: "2 min", desc: "45m of glazed dragons. 1392. Cobalt blue from Persia. All that remains of a prince's palace." },
  { num: 10, title: "The Old Streets — Between the Sights", duration: "3 min", desc: "Courtyard homes, noodle shops, morning markets, grandmothers doing tai chi. The living city between the monuments." },
  { num: 11, title: "South Gate to Drum Tower — The City Wall ★★★", duration: "4 min", desc: "Climbing the wall. 14m up. The best 1.5km stretch. Ming Dynasty military architecture on the empire's most dangerous frontier." },
  { num: 12, title: "Sunset on the Wall — The View Over Datong", duration: "3 min", desc: "Tracing your route from above. Huayan's pagoda to the west, Yungang 16km beyond. The city that outlasted its enemies." },
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
          <span>12 episodes</span><span>~45 minutes</span><span>$3.99</span>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-stone-500">
          <span>⭐ 4.9</span><span>·</span><span>Trusted by travelers from 18 countries</span>
        </div>
      </header>

      <div className="mb-6 p-4 rounded-lg bg-amber-50 border-2 border-amber-300 flex items-start gap-3">
        <span className="text-lg">🎁</span>
        <div>
          <p className="font-semibold text-amber-800 text-sm">Free with Any Purchase</p>
          <p className="text-xs text-amber-700">Buy any guide above and get this Ancient City tour free. Or buy it standalone for <strong>$3.99</strong>.</p>
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
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-semibold">{ep.num}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-stone-900 text-sm">{ep.title}</h3>
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
        <p className="font-display font-bold text-3xl mb-4">$3.99</p>
        <button className="px-6 py-3 rounded-md bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-colors">Buy Now — $3.99</button>
      </section>

      <InfoBox type="info" title="Bundle & Save">
        All 5 guides for <strong>$19.99</strong> — save 30%.{" "}
        <a href="/premium" className="font-semibold text-red-800">View bundle →</a>
      </InfoBox>
    </div>
  );
}
