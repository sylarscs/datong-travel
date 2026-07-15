import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InfoBox } from "@/components/ui/InfoBox";

export const metadata = {
  title: "Hanging Temple Audio Guide — Premium English Narration",
  description:
    "4-episode English audio guide for the Hanging Temple. The engineering, the three religions, and the view from 90 meters up — told like a documentary.",
};

const EPISODES = [
  {
    num: 1,
    title: "The Approach — A Temple in the Sky",
    location: "Jinlong Canyon valley floor",
    duration: "3 min",
    description:
      "First sight of the temple, 75 meters up. Why was it built here? Floods, silence, and the convergence of heaven and earth.",
  },
  {
    num: 2,
    title: "The Engineering — How It Doesn't Fall Down",
    location: "Base of the temple",
    duration: "4 min",
    description:
      "Cantilever beams, tung-oil-soaked wood, and the seismic secret that's kept this temple standing for 1,500 years.",
  },
  {
    num: 3,
    title: "Inside the Temple — Three Religions, One Roof",
    location: "Temple walkways",
    duration: "4 min",
    description:
      "Narrow boardwalks, 40 halls, and the only place in China where Buddha, Laozi, and Confucius share a room.",
  },
  {
    num: 4,
    title: "The View from Above — What the Monks Saw",
    location: "Highest walkway, Northern Section",
    duration: "3 min",
    description:
      "90 meters up. The river below, Mount Heng in the distance, and what it meant to wake up here every morning for fifteen centuries.",
  },
];

export default function XuankongPremiumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Premium Audio Guides", href: "/premium" },
          { label: "Hanging Temple" },
        ]}
      />

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
          Premium Audio Guide
        </p>
        <h1 className="font-display font-extrabold text-stone-900 text-3xl sm:text-4xl mb-3">
          Hanging Temple
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
          4 episodes — the engineering marvel, the three religions, and the view from 90 meters up.
        </p>
        <div className="flex flex-wrap gap-3 mt-4 text-xs font-mono text-stone-400">
          <span>4 episodes</span>
          <span>~20 minutes total</span>
          <span>$5.99</span>
        </div>
      </header>

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
                <h3 className="font-semibold text-stone-900">{ep.title}</h3>
                <p className="text-sm text-stone-500 mt-0.5">
                  {ep.description}
                </p>
                <p className="text-xs text-stone-400 mt-1 font-mono">
                  {ep.location} · {ep.duration}
                </p>
              </div>
              <span className="flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold bg-stone-900 text-white">
                AVAILABLE
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="p-6 sm:p-8 rounded-xl bg-stone-900 text-white text-center mb-10">
        <h2 className="font-display font-bold text-2xl mb-2">
          Get the Full Guide
        </h2>
        <p className="text-stone-300 mb-2 text-sm">
          4 episodes · ~20 min · Listen offline · Lifetime access
        </p>
        <p className="font-display font-bold text-3xl mb-4">$5.99</p>
        <button className="px-6 py-3 rounded-md bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-colors">
          Buy Now — $5.99
        </button>
        <p className="text-xs text-stone-400 mt-4">
          Payment processing coming soon.
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
