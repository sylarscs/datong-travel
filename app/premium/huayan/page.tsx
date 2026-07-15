import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InfoBox } from "@/components/ui/InfoBox";

export const metadata = {
  title: "Huayan Temple Audio Guide — 5 Episodes, Liao Dynasty Masterpiece",
  description: "Complete English audio guide for Huayan Temple. 5 episodes covering the Upper Hall, Lower Temple, sutra library, pagoda, and the legacy of the Liao Dynasty.",
};

const EPISODES = [
  { num: 1, title: "The Greatest Liao Dynasty Temple in China", location: "Temple entrance", duration: "4 min" },
  { num: 2, title: "The Upper Temple — China's Largest Buddhist Hall ★★★", location: "Mahavira Hall", duration: "4 min" },
  { num: 3, title: "Reading the Frescoes — 880 sqm of Ming Dynasty Art", location: "Upper Temple walls", duration: "3 min" },
  { num: 4, title: "The Lower Temple — The Thousand-Year Library ★★★", location: "Bhagavan Sutra Hall", duration: "5 min" },
  { num: 5, title: "The Liao Dynasty Craft — Wood Joinery Without Nails", location: "Lower Temple cabinets", duration: "3 min" },
  { num: 6, title: "The Pagoda & Gardens — Huayan's Quiet Side", location: "Pagoda and gardens", duration: "2 min" },
  { num: 7, title: "The Courtyards — Between the Halls", location: "Temple courtyards", duration: "2 min" },
  { num: 8, title: "Why Huayan Matters — Legacy of a Vanished Empire", location: "Exit / temple gate", duration: "3 min" },
];

export default function HuayanPremiumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Premium Audio Guides", href: "/premium" }, { label: "Huayan Temple" }]} />

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">Premium Audio Guide</p>
        <h1 className="font-display font-extrabold text-stone-900 text-3xl sm:text-4xl mb-3">Huayan Temple</h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
          5 episodes — China&apos;s largest Buddhist hall, a 1,000-year-old sutra library, and the best surviving monument of the Liao Dynasty.
        </p>
        <div className="flex flex-wrap gap-3 mt-3 text-xs font-mono text-stone-400">
          <span>8 episodes</span><span>~30 minutes</span><span>$5.99</span>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-stone-500">
          <span>⭐ 4.9</span><span>·</span><span>Trusted by travelers from 18 countries</span>
        </div>
      </header>

      <div className="mb-8 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
        <span className="text-lg">🛡️</span>
        <div>
          <p className="font-semibold text-green-800 text-sm">30-Day Money-Back Guarantee</p>
          <p className="text-xs text-green-700">If this guide doesn&apos;t make your visit better than reading a guidebook, email us for a full refund. No questions asked.</p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">Episodes</h2>
        <div className="space-y-2">
          {EPISODES.map((ep) => (
            <div key={ep.num} className="flex items-start gap-3 p-3 rounded-lg border border-stone-200 bg-white">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-semibold">{ep.num}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-stone-900 text-sm">{ep.title}</h3>
                <p className="text-xs text-stone-400 font-mono">{ep.location} · {ep.duration}</p>
              </div>
              <span className="flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold bg-stone-900 text-white">PREMIUM</span>
            </div>
          ))}
        </div>
      </section>

      <section className="p-6 sm:p-8 rounded-xl bg-stone-900 text-white text-center mb-10">
        <h2 className="font-display font-bold text-2xl mb-2">Get All 5 Episodes</h2>
        <p className="text-stone-300 mb-2 text-sm">5 episodes · ~20 min · Listen offline</p>
        <p className="font-display font-bold text-3xl mb-4">$4.99</p>
        <button className="px-6 py-3 rounded-md bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-colors">Buy Now — $4.99</button>
        <p className="text-xs text-stone-400 mt-4">Payment coming soon.</p>
      </section>

      <InfoBox type="info" title="Bundle & Save">
        Get <strong>all 5 guides</strong> for <strong>$14.99</strong> — includes Yungang, Hanging Temple, Huayan Temple, plus the Ancient City Walking Tour & Nine Dragon Screen as free bonuses.{" "}
        <a href="/premium" className="font-semibold text-red-800">View bundle →</a>
      </InfoBox>
    </div>
  );
}
