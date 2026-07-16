import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InfoBox } from "@/components/ui/InfoBox";

export const metadata = {
  title: "Yungang Grottoes Audio Guide — 15 Episodes, Every Cave Covered",
  description:
    "Complete English audio guide for all 45 caves at Yungang Grottoes. 15 episodes covering every section from Lingyan Temple to the western caves. Cave-by-cave narration.",
};

const EPISODES = [
  { num: 1, title: "Lingyan Temple — The Gateway", location: "Entrance plaza", duration: "3 min", highlight: false },
  { num: 2, title: "The Eastern Caves (1–4)", location: "Eastern cliff", duration: "5 min", highlight: false },
  { num: 3, title: "Caves 5 & 6 — The Twin Caves", location: "Central-east", duration: "6 min", highlight: true, badge: "Must See" },
  { num: 4, title: "Caves 7 & 8 — The Hindu Connection", location: "Central-east", duration: "4 min", highlight: false },
  { num: 5, title: "Caves 9 & 10 — The Five Flowers Caves", location: "Central-east", duration: "4 min", highlight: false },
  { num: 6, title: "Cave 11 — The Square Pillar", location: "Central-east", duration: "3 min", highlight: false },
  { num: 7, title: "Cave 12 — The Music Cave", location: "Central-east", duration: "4 min", highlight: true, badge: "Must See" },
  { num: 8, title: "Cave 13 — The Cross-Ankled Bodhisattva", location: "Central-east", duration: "3 min", highlight: false },
  { num: 9, title: "Cave 14 & 15 — Ten Thousand Buddhas", location: "Central", duration: "4 min", highlight: false },
  { num: 10, title: "Caves 16–19 — The Emperors' Caves", location: "Central", duration: "6 min", highlight: true, badge: "Must See" },
  { num: 11, title: "Cave 20 — The Open-Air Buddha", location: "Central-west", duration: "4 min", highlight: true, badge: "Must See" },
  { num: 12, title: "Western Caves (21–29)", location: "Western section", duration: "5 min", highlight: false },
  { num: 13, title: "Western Caves (30–37)", location: "Western section", duration: "4 min", highlight: false },
  { num: 14, title: "Western Caves (38–45) — The End", location: "Far western", duration: "4 min", highlight: false },
  { num: 15, title: "Museum & Legacy — What Yungang Means", location: "Yungang Museum", duration: "4 min", highlight: false },
];

export default function YungangPremiumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Premium Audio Guides", href: "/premium" }, { label: "Yungang Grottoes" }]} />

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">Premium Audio Guide</p>
        <h1 className="font-display font-extrabold text-stone-900 text-3xl sm:text-4xl mb-3">Yungang Grottoes</h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
          15 episodes covering every cave and every section — from Lingyan Temple to the far western caves. No cave left unmentioned.
        </p>
        <div className="flex flex-wrap gap-3 mt-3 text-xs font-mono text-stone-400">
          <span>15 episodes</span><span>~70 minutes</span><span>$7.99</span>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-stone-500">
          <span>⭐ 4.9</span><span>·</span><span>Trusted by travelers from 18 countries</span>
        </div>
      </header>

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
              <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${ep.highlight ? "bg-red-800 text-white" : "bg-stone-100 text-stone-500"}`}>
                {ep.num}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-stone-900 text-sm">{ep.title}</h3>
                  {ep.badge && <span className="flex-shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800">{ep.badge}</span>}
                </div>
                <p className="text-xs text-stone-400 font-mono">{ep.location} · {ep.duration}</p>
              </div>
              <span className={`flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold ${ep.num <= 3 ? "bg-stone-100 text-stone-500" : "bg-stone-900 text-white"}`}>
                {ep.num <= 3 ? "FREE" : "PREMIUM"}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 p-6 rounded-xl bg-stone-50 border border-stone-200" id="sample">
        <h2 className="font-display font-bold text-lg text-stone-900 mb-3">Free Preview</h2>
        <audio controls className="w-full mb-3" preload="metadata">
          <source src="/audio/yungang-cave20.wav" type="audio/wav" />
        </audio>
        <p className="text-xs text-stone-400">Episode 11: Cave 20 — The Open-Air Buddha (full audio)</p>
      </section>

      <section className="p-6 sm:p-8 rounded-xl bg-stone-900 text-white text-center mb-10">
        <h2 className="font-display font-bold text-2xl mb-2">Get All 15 Episodes</h2>
        <p className="text-stone-300 mb-2 text-sm">Every cave covered · ~70 min · Listen offline</p>
        <p className="font-display font-bold text-3xl mb-4">$7.99</p>
        <button className="px-6 py-3 rounded-md bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-colors">Buy Now — $7.99</button>
        <p className="text-xs text-stone-400 mt-4">Payment coming soon. Free preview available above.</p>
      </section>

      <InfoBox type="info" title="Bundle & Save">
        All 5 guides for <strong>$19.99</strong> — save 37%.{" "}
        <a href="/premium" className="font-semibold text-red-800">View bundle →</a>
      </InfoBox>
    </div>
  );
}
