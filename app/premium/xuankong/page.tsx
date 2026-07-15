import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InfoBox } from "@/components/ui/InfoBox";

export const metadata = {
  title: "Hanging Temple Audio Guide — 12 Episodes, Every Hall Covered",
  description: "Complete English audio guide for the Hanging Temple. 12 episodes covering the canyon, engineering, every hall, three religions, and the view from 90 meters.",
};

const EPISODES = [
  { num: 1, title: "The Canyon — Jinlong Gorge", duration: "3 min", desc: "The geological story. Why this canyon exists. First sight of the temple from the approach road." },
  { num: 2, title: "Why Here? — Floods, Silence & Sacred Ground", duration: "3 min", desc: "Floods, acoustics, Daoist geography. Plus the political reason for building on a cliff in 491 AD." },
  { num: 3, title: "The First Glimpse — Approaching the Temple", duration: "2 min", desc: "How the temple reveals itself gradually. The psychology of the approach — invisible until you're underneath it." },
  { num: 4, title: "At the Base — Looking Up", duration: "2 min", desc: "Standing directly beneath. The decorative posts that sway in the wind. The real support hidden inside the mountain." },
  { num: 5, title: "The Engineering — How It Hangs", duration: "4 min", desc: "Cantilever beams, tung-oil-soaked wood, the seismic secret. Why this temple has survived 1,500 years of earthquakes.", badge: "Must See" },
  { num: 6, title: "The Climb Begins — Southern Section", duration: "3 min", desc: "Narrow walkways, low railings. The meditation chamber, the sutra library, and monastic daily life at 75 meters." },
  { num: 7, title: "The Central Halls — Buddhist Shrines", duration: "4 min", desc: "Main Buddhist shrines. Mudras, asanas, and the silent language of Buddhist iconography." },
  { num: 8, title: "The Three Religions Hall — Buddha", duration: "3 min", badge: "Must See", desc: "The only hall in China with Buddha, Laozi, and Confucius. Part 1: Sakyamuni and Buddhism's journey from India." },
  { num: 9, title: "The Three Religions Hall — Daoism & Confucianism", duration: "3 min", badge: "Must See", desc: "Part 2: Why housing all three faiths was a radical political act. The Northern Wei as outsiders ruling a Chinese population." },
  { num: 10, title: "The Highest Point — 90 Meters Up", duration: "3 min", badge: "Must See", desc: "The view from the top. Mount Heng on the horizon. The river below. What the monks saw every morning for 1,500 years." },
  { num: 11, title: "Details & Decoration — What Most People Miss", duration: "3 min", desc: "Different bracket sets by different craftsmen. Worn stone steps. Offerings in corners. Forty halls of hidden details." },
  { num: 12, title: "The Descent & What It Means", duration: "2 min", desc: "You were up there. It held. Faith and engineering as the same thing — trusting what you can't see will support you." },
];

export default function XuankongPremiumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Premium Audio Guides", href: "/premium" }, { label: "Hanging Temple" }]} />

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">Premium Audio Guide</p>
        <h1 className="font-display font-extrabold text-stone-900 text-3xl sm:text-4xl mb-3">Hanging Temple</h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">12 episodes — every hall, every walkway, every story behind the temple on the cliff.</p>
        <div className="flex flex-wrap gap-3 mt-3 text-xs font-mono text-stone-400">
          <span>12 episodes</span><span>~45 minutes</span><span>$5.99</span>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-stone-500">
          <span>⭐ 4.9</span><span>·</span><span>Trusted by travelers from 18 countries</span>
        </div>
      </header>

      {/* Money-back guarantee */}
      <div className="mb-8 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
        <span className="text-lg">🛡️</span>
        <div>
          <p className="font-semibold text-green-800 text-sm">30-Day Money-Back Guarantee</p>
          <p className="text-xs text-green-700">If this guide doesn&apos;t make your visit better than the official audio guide, email us for a full refund. No questions asked.</p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">Episodes</h2>
        <div className="space-y-2">
          {EPISODES.map((ep) => (
            <div key={ep.num} className="flex items-start gap-3 p-3 rounded-lg border border-stone-200 bg-white">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-semibold">{ep.num}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-stone-900 text-sm">{ep.title}</h3>
                  {(ep as any).badge && <span className="flex-shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800">{(ep as any).badge}</span>}
                </div>
                <p className="text-xs text-stone-500 mt-0.5">{ep.desc}</p>
                <p className="text-xs text-stone-400 mt-0.5 font-mono">{ep.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-6 sm:p-8 rounded-xl bg-stone-900 text-white text-center mb-10">
        <h2 className="font-display font-bold text-2xl mb-2">Get All 12 Episodes</h2>
        <p className="text-stone-300 mb-2 text-sm">12 episodes · ~45 min · Lifetime access · 30-day refund</p>
        <p className="font-display font-bold text-3xl mb-4">$5.99</p>
        <button className="px-6 py-3 rounded-md bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-colors">Buy Now — $5.99</button>
      </section>

      <InfoBox type="info" title="Bundle & Save">
        All 5 guides — Yungang (15 eps) + Hanging Temple (12 eps) + Huayan Temple (5 eps) + Ancient City Tour (10 eps) + Nine Dragon Screen (2 eps) — <strong>$14.99</strong>.{" "}
        <a href="/premium" className="font-semibold text-red-800">View bundle →</a>
      </InfoBox>
    </div>
  );
}
