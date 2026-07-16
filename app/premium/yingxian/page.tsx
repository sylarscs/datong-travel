import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InfoBox } from "@/components/ui/InfoBox";

export const metadata = {
  title: "Yingxian Wooden Pagoda Audio Guide — 6 Episodes, 1,000 Years of Engineering",
  description: "English audio guide for the oldest wooden pagoda in the world. 6 episodes on the engineering, the Khitan builders, and why this 67m timber tower still stands.",
};

const EPISODES = [
  { num: 1, title: "A Thousand Years of Wood", duration: "3 min", highlight: false, desc: "The oldest and tallest wooden pagoda on Earth. 67m, 1056 AD, built without a single nail." },
  { num: 2, title: "The Engineering — 54 Bracket Sets, Zero Nails", duration: "5 min", highlight: true, badge: "Must See", desc: "54 different dougong designs. Why it leans 2° but won't fall. The tuned mass damper principle — applied 900 years before it was 'invented.'" },
  { num: 3, title: "The Liao Dynasty — Khitan Builders", duration: "3 min", highlight: false, desc: "Who the Khitan were. Nomads who became master builders. How steppe culture created China's greatest wooden structure." },
  { num: 4, title: "Inside the Pagoda — What You Can See", duration: "3 min", highlight: false, desc: "The 11m Sakyamuni Buddha on the ground floor. What's above (and why you can't go there). The pagoda as vertical museum." },
  { num: 5, title: "The Town of Yingxian", duration: "2 min", highlight: false, desc: "Morning markets, chess players, noodle shops. The real Shanxi county town that most visitors rush past." },
  { num: 6, title: "Why This Matters", duration: "2 min", highlight: false, desc: "Proof that nomadic people built permanent things. The greatest monuments aren't always in the famous places." },
];

export default function YingxianPremiumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Premium Audio Guides", href: "/premium" }, { label: "Yingxian Wooden Pagoda" }]} />

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">Premium Audio Guide</p>
        <h1 className="font-display font-extrabold text-stone-900 text-3xl sm:text-4xl mb-3">Yingxian Wooden Pagoda</h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">6 episodes — 1,000 years of timber engineering, a vanished empire, and the world&apos;s oldest wooden skyscraper.</p>
        <div className="flex flex-wrap gap-3 mt-3 text-xs font-mono text-stone-400">
          <span>6 episodes</span><span>~20 minutes</span><span>$5.99</span>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-stone-500">
          <span>⭐ 4.9</span><span>·</span><span>Trusted by travelers from 18 countries</span>
        </div>
      </header>

      <div className="mb-8 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
        <span className="text-lg">🛡️</span>
        <div>
          <p className="font-semibold text-green-800 text-sm">30-Day Money-Back Guarantee</p>
          <p className="text-xs text-green-700">Not satisfied? Email us for a full refund. No questions asked.</p>
        </div>
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
                  {(ep as any).badge && <span className="flex-shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800">{(ep as any).badge}</span>}
                </div>
                <p className="text-xs text-stone-500 mt-0.5">{ep.desc}</p>
                <p className="text-xs text-stone-400 font-mono">{ep.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-6 sm:p-8 rounded-xl bg-stone-900 text-white text-center mb-10">
        <h2 className="font-display font-bold text-2xl mb-2">Get All 6 Episodes</h2>
        <p className="text-stone-300 mb-2 text-sm">6 episodes · ~20 min · Lifetime access</p>
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
