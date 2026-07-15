import Link from "next/link";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";

export const metadata = {
  title: "Free Datong Travel Checklist — Packing List, Phrases & Tips",
  description:
    "Download our free Datong travel checklist: what to pack, essential Chinese phrases, must-see attractions ranked, and app setup guide.",
};

export default function FreeGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Free Travel Checklist" },
        ]}
      />

      <header className="mb-10">
        <h1 className="font-display font-extrabold text-stone-900 text-3xl sm:text-4xl mb-3">
          Free Datong Travel Checklist
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed">
          Everything you need before you go — packing list, key phrases, essential
          apps, and our ranked must-see list.
        </p>
      </header>

      {/* Must-See Ranking */}
      <section className="mb-10">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">
          Must-See Attractions (Ranked)
        </h2>
        <div className="space-y-3">
          {[
            { rank: 1, name: "Yungang Grottoes", note: "Arrive 8:30 AM. Allow 3–4 hours.", priority: "Don't miss" },
            { rank: 2, name: "Hanging Temple", note: "1.5h drive from Datong. Leave by 7:30 AM.", priority: "Don't miss" },
            { rank: 3, name: "Huayan Temple", note: "Liao Dynasty, 1.5 hours. Inside ancient city.", priority: "Essential" },
            { rank: 4, name: "Datong City Wall", note: "Bike at sunset. Free entry, ¥30 bike rental.", priority: "Essential" },
            { rank: 5, name: "Nine Dragon Screen", note: "Oldest in China, 30 min. ¥10.", priority: "Quick stop" },
            { rank: 6, name: "Shanhua Temple", note: "Free, less crowded. Beautiful garden.", priority: "If you have time" },
            { rank: 7, name: "Yingxian Wooden Pagoda", note: "1h drive. Oldest wooden pagoda in the world.", priority: "Worth the trip" },
            { rank: 8, name: "Datong Museum", note: "Free, excellent English signage. 1–1.5h.", priority: "Rainy day" },
          ].map((item) => (
            <div
              key={item.rank}
              className="flex items-start gap-4 p-4 rounded-lg border border-stone-200 bg-white"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold">
                {item.rank}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-stone-900 text-sm">{item.name}</h3>
                  <span className="text-[10px] font-semibold uppercase text-red-800">
                    {item.priority}
                  </span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Audio Guide Promo — embedded in the free guide */}
      <section className="mb-10 p-6 rounded-xl bg-stone-900 text-white">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">🎧</span>
          <h2 className="font-display font-bold text-lg">
            Upgrade Your Visit with Audio Guides
          </h2>
        </div>
        <p className="text-sm text-stone-300 mb-4 leading-relaxed">
          This checklist tells you <em>where</em> to go. Our premium audio guides
          tell you <em>what you&apos;re looking at</em>. Cave-by-cave narration
          for Yungang, hall-by-hall for the Hanging Temple — written like a
          documentary, not a textbook. The official English guide at the sites is
          fine. This is better.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/premium/yungang"
            className="px-4 py-2 rounded-md bg-white text-stone-900 text-sm font-semibold hover:bg-stone-100 transition-colors text-center"
          >
            Yungang Guide — $7.99 (6 episodes)
          </Link>
          <Link
            href="/premium/xuankong"
            className="px-4 py-2 rounded-md border border-stone-400 text-white text-sm font-semibold hover:bg-white/10 transition-colors text-center"
          >
            Hanging Temple — $5.99 (4 episodes)
          </Link>
        </div>
      </section>

      {/* Packing List */}
      <section className="mb-10">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">
          Packing List
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              category: "Documents",
              items: "Passport (copy kept separate) · Printed hotel booking · Train e-tickets (screenshot) · Travel insurance card",
            },
            {
              category: "Tech",
              items: "Phone with VPN installed · Portable battery (20,000mAh) · Universal adapter · Offline map screenshots",
            },
            {
              category: "Payment",
              items: "Alipay setup with international card · ¥500 cash backup · WeChat Pay (optional) · Credit card for hotels",
            },
            {
              category: "Clothing",
              items: "Comfortable walking shoes (critical — you'll walk 8–12 km/day) · Layers for temple visits · Sun hat (summer) · Warm jacket (Nov–Mar)",
            },
            {
              category: "Health & Comfort",
              items: "Tissues & hand sanitizer · Any prescription meds · Sunscreen · Reusable water bottle · Snacks for day trips",
            },
            {
              category: "Chinese Phrases",
              items: "Screenshot or print from this page · Offline Google Translate (Chinese pack) · Note with hotel address in Chinese",
            },
          ].map((cat) => (
            <div key={cat.category} className="p-4 rounded-lg border border-stone-200 bg-white">
              <h3 className="font-semibold text-stone-900 text-sm mb-1">{cat.category}</h3>
              <p className="text-xs text-stone-500 leading-relaxed">{cat.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Essential Phrases */}
      <section className="mb-10">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">
          Essential Chinese Phrases
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="text-left py-2 px-3 text-stone-400 font-medium text-xs uppercase">English</th>
                <th className="text-left py-2 px-3 text-stone-400 font-medium text-xs uppercase">Chinese</th>
                <th className="text-left py-2 px-3 text-stone-400 font-medium text-xs uppercase">Pronunciation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Hello", "你好", "Nǐ hǎo"],
                ["Thank you", "谢谢", "Xiè xiè"],
                ["How much?", "多少钱？", "Duō shǎo qián?"],
                ["Where is the toilet?", "卫生间在哪？", "Wèi shēng jiān zài nǎ?"],
                ["Please take me to...", "请带我去...", "Qǐng dài wǒ qù..."],
                ["I don't understand", "我听不懂", "Wǒ tīng bù dǒng"],
                ["Delicious!", "好吃！", "Hǎo chī!"],
                ["Check, please", "买单", "Mǎi dān"],
                ["Yungang Grottoes", "云冈石窟", "Yún gāng shí kū"],
                ["Hanging Temple", "悬空寺", "Xuán kōng sì"],
                ["Datong Ancient City", "大同古城", "Dà tóng gǔ chéng"],
                ["Train station", "火车站", "Huǒ chē zhàn"],
              ].map(([en, zh, py], i) => (
                <tr key={i} className="border-b border-stone-100">
                  <td className="py-2 px-3 text-stone-700">{en}</td>
                  <td className="py-2 px-3 text-stone-900 font-medium">{zh}</td>
                  <td className="py-2 px-3 text-stone-400 text-xs font-mono">{py}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* App Setup */}
      <section className="mb-10">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">
          App Setup (Do Before You Arrive)
        </h2>
        <div className="space-y-4">
          {[
            { app: "Alipay", steps: "Download → Sign up with phone → Settings → Language → English → Add Bank Card → Verify passport", why: "Payment, Didi, bike sharing, train tickets — one app for everything" },
            { app: "VPN", steps: "Install BEFORE entering China → ExpressVPN or Astrill recommended → Test it works → Keep auto-connect ON", why: "Google, Gmail, Instagram, WhatsApp are all blocked" },
            { app: "Google Translate", steps: "Download app → Settings → Offline translation → Download Chinese pack", why: "Camera translation for menus and signs. Works offline." },
            { app: "Trip.com", steps: "Download app → Create account → Add passport info → Book trains in English", why: "English interface, international cards accepted. Book trains 1–2 days ahead." },
          ].map((app) => (
            <div key={app.app} className="p-4 rounded-lg border border-stone-200 bg-white">
              <h3 className="font-semibold text-stone-900 text-sm">{app.app}</h3>
              <p className="text-xs text-stone-500 mt-1 mb-2">{app.why}</p>
              <p className="text-xs text-stone-400 font-mono">{app.steps}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom audio CTA */}
      <div className="p-6 rounded-xl bg-stone-100 border border-stone-200 text-center">
        <p className="text-sm text-stone-600 mb-3">
          Got the checklist? Now make the most of your visit.
        </p>
        <Link
          href="/premium"
          className="inline-block px-5 py-3 rounded-md bg-red-800 text-white font-semibold hover:bg-red-900 transition-colors"
        >
          🎧 Browse Audio Guides →
        </Link>
      </div>
    </div>
  );
}
