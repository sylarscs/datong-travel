import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InfoBox } from "@/components/ui/InfoBox";

export const metadata = {
  title: "Yungang Grottoes Audio Guide — Premium English Narration",
  description:
    "6-episode English audio guide for Yungang Grottoes. Cave-by-cave documentary-style narration — deeper than the official guide, more engaging than a guidebook.",
};

const EPISODES = [
  {
    num: 1,
    title: "Welcome to Yungang",
    location: "Entrance plaza",
    duration: "3 min",
    description:
      "Set the scene: 460 AD, the Silk Road, and why a cliff in Datong became the canvas for 51,000 Buddhas.",
  },
  {
    num: 2,
    title: "Caves 5 & 6: The Twin Caves",
    location: "Eastern cliff",
    duration: "5 min",
    description:
      "The 17-meter colossus and the 'graphic novel in stone' — a stupa carved with the entire life story of the Buddha.",
  },
  {
    num: 3,
    title: "Cave 12: The Music Cave",
    location: "Central cliff",
    duration: "4 min",
    description:
      "Musicians and dancers frozen in sandstone. A 5th-century orchestra, and what it tells us about life on the Silk Road.",
  },
  {
    num: 4,
    title: "Caves 16–19: The Emperors' Caves",
    location: "Central cliff",
    duration: "5 min",
    description:
      "Four colossal Buddhas, four Northern Wei emperors. How a monk named Tan Yao turned politics into sacred art.",
  },
  {
    num: 5,
    title: "Cave 20: The Open-Air Buddha",
    location: "Western cliff",
    duration: "4 min",
    description:
      "The icon of Yungang. A collapsed wall, a 14-meter Buddha exposed to the sky, and 1,500 years of survival.",
  },
  {
    num: 6,
    title: "The Legacy: What Yungang Means Today",
    location: "Museum / exit",
    duration: "3 min",
    description:
      "Why Yungang matters. The restoration, the UNESCO status, and the quiet resilience of a monument built to last forever.",
  },
];

export default function YungangPremiumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Premium Audio Guides", href: "/premium" },
          { label: "Yungang Grottoes" },
        ]}
      />

      {/* Header */}
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
          Premium Audio Guide
        </p>
        <h1 className="font-display font-extrabold text-stone-900 text-3xl sm:text-4xl mb-3">
          Yungang Grottoes
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
          6 episodes, cave-by-cave. Written like a documentary, not a textbook.
        </p>
        <div className="flex flex-wrap gap-3 mt-4 text-xs font-mono text-stone-400">
          <span>6 episodes</span>
          <span>~30 minutes total</span>
          <span>$7.99</span>
        </div>
      </header>

      {/* Episode List */}
      <section className="mb-10">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">
          Episodes
        </h2>
        <div className="space-y-3">
          {EPISODES.map((ep) => (
            <div
              key={ep.num}
              className="flex items-start gap-4 p-4 rounded-lg border border-stone-200 bg-white"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-semibold">
                {ep.num}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-stone-900">
                  {ep.title}
                </h3>
                <p className="text-sm text-stone-500 mt-0.5">
                  {ep.description}
                </p>
                <p className="text-xs text-stone-400 mt-1 font-mono">
                  {ep.location} · {ep.duration}
                </p>
              </div>
              {ep.num <= 3 ? (
                <span className="flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold bg-stone-100 text-stone-500">
                  FREE PREVIEW
                </span>
              ) : (
                <span className="flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold bg-stone-900 text-white">
                  AVAILABLE
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sample Preview */}
      <section className="mb-10" id="sample">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">
          Free Preview: Cave 20 — The Open-Air Buddha
        </h2>
        <div className="p-6 rounded-xl border border-stone-200 bg-stone-50">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center text-lg">
              ▶
            </span>
            <div>
              <p className="font-semibold text-stone-900 text-sm">
                Episode 5: Cave 20 — The Open-Air Buddha
              </p>
              <p className="text-xs text-stone-400 font-mono">4 min · Free</p>
            </div>
          </div>
          <div className="text-sm text-stone-600 leading-relaxed space-y-3">
            <p>
              <em>This is the one. The photo you've seen a hundred times. The giant Buddha sitting in the open air, exposed to the sky, with nothing between him and you but 1,500 years of wind and rain.</em>
            </p>
            <p>
              <em>First, notice what's different: there's no front wall. It collapsed centuries ago, probably during an earthquake. That accident — a structural failure — created the most photographed spot in the entire grotto complex...</em>
            </p>
          </div>
          <p className="text-xs text-stone-400 mt-4">
            🎧 Audio coming soon — text preview available now
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="p-6 sm:p-8 rounded-xl bg-stone-900 text-white text-center">
        <h2 className="font-display font-bold text-2xl mb-2">
          Get the Full Guide
        </h2>
        <p className="text-stone-300 mb-2 text-sm">
          6 episodes · ~30 min · Listen offline · Lifetime access
        </p>
        <p className="font-display font-bold text-3xl mb-4">$7.99</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="px-6 py-3 rounded-md bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-colors">
            Buy Now — $7.99
          </button>
        </div>
        <p className="text-xs text-stone-400 mt-4">
          Payment processing coming soon. Join the free newsletter for launch updates.
        </p>
      </section>

      <InfoBox type="info" title="Also Available">
        The <strong>Datong Complete Audio Bundle</strong> includes both guides — Yungang Grottoes (6 episodes) + Hanging Temple (4 episodes) — for <strong>$11.99</strong>.{" "}
        <a href="/premium" className="font-semibold text-red-800">
          View bundle →
        </a>
      </InfoBox>
    </div>
  );
}
