import Link from "next/link";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InfoBox } from "@/components/ui/InfoBox";
import { FAQ } from "@/components/ui/FAQ";

export const metadata = {
  title: "Practical Info — Visas, Weather, Money & Apps for Datong",
  description:
    "Everything you need to know before visiting Datong: China visa policy, weather by season, money and payment apps, SIM cards, and essential travel tips.",
};

const faqItems = [
  {
    question: "Do I need a visa to visit Datong?",
    answer:
      "It depends on your nationality. China now offers 240-hour (10-day) transit visa-free entry for travelers from 54 countries at major entry points including Beijing. If you enter via Beijing and travel to Datong, you may qualify. For longer stays, you'll need a tourist (L) visa. Always check the latest policy with your nearest Chinese embassy before traveling.",
  },
  {
    question: "Can I use credit cards in Datong?",
    answer:
      "International credit cards (Visa, Mastercard) are accepted at major hotels and some tourist sites, but many local restaurants, shops, and smaller attractions only accept WeChat Pay or Alipay. We strongly recommend setting up Alipay with your international card before arriving — Alipay now supports foreign cards and has an English interface.",
  },
  {
    question: "Do people speak English in Datong?",
    answer:
      "Very little. Taxi drivers, restaurant staff, and even hotel front desks may not speak English. Download a translation app (Google Translate with offline Chinese pack, or Baidu Translate) and have your destinations written in Chinese characters. Key phrase: 'Nǐ hǎo' (Hello), 'Xiè xiè' (Thank you).",
  },
  {
    question: "Is Datong safe for tourists?",
    answer:
      "Yes, Datong is very safe. Violent crime against tourists is extremely rare. Standard precautions apply: watch your belongings in crowded areas, use official taxis or Didi, and keep your passport secure. The biggest risk is traffic — look both ways when crossing streets, even at crosswalks.",
  },
  {
    question: "What's the best time to visit Datong?",
    answer:
      "April–June and September–October are ideal: mild temperatures (15–25°C), clear skies, and fewer crowds than summer. July–August is peak domestic tourism (hot and crowded). November–March is cold (down to -15°C) but offers snow-dusted grottoes and almost no tourists — magical if you don't mind the cold.",
  },
  {
    question: "Do I need a VPN in China?",
    answer:
      "Yes. Google, Instagram, WhatsApp, Facebook, and many Western sites are blocked. Install a reliable VPN on your phone and laptop before arriving in China — VPN websites are often blocked, so you can't download one after you arrive. ExpressVPN and Astrill are popular choices.",
  },
];

export default function PracticalInfoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Practical Info" },
        ]}
      />

      <header className="mb-10">
        <h1 className="font-display font-extrabold text-stone-900 mb-3">
          Practical Info
        </h1>
        <p className="text-lg text-stone-700 leading-relaxed max-w-2xl">
          What to know before you go — visas, weather, money, apps, and all the
          little things that make a trip to Datong smoother.
        </p>
      </header>

      {/* Weather */}
      <section className="mb-10" id="weather">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">
          Weather & When to Go
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { season: "Spring", months: "Mar–May", temp: "5–22°C", icon: "🌸", verdict: "Great" },
            { season: "Summer", months: "Jun–Aug", temp: "18–32°C", icon: "☀️", verdict: "Hot & Busy" },
            { season: "Autumn", months: "Sep–Nov", temp: "3–20°C", icon: "🍂", verdict: "Best Time" },
            { season: "Winter", months: "Dec–Feb", temp: "-15–0°C", icon: "❄️", verdict: "Quiet & Cold" },
          ].map((s) => (
            <div key={s.season} className="p-4 rounded-xl border border-stone-200 bg-white text-center">
              <span className="text-2xl">{s.icon}</span>
              <h3 className="mt-2 font-semibold text-stone-900 text-sm">{s.season}</h3>
              <p className="text-xs text-stone-400 mt-1">{s.months}</p>
              <p className="text-xs font-mono text-stone-700 mt-1">{s.temp}</p>
              <p className="text-[10px] font-semibold uppercase text-teal-600 mt-1">{s.verdict}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Essential Apps */}
      <section className="mb-10" id="apps">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">
          Essential Apps
        </h2>
        <div className="space-y-4">
          {[
            {
              name: "Alipay (支付宝)",
              why: "Payment, ride-hailing, bike sharing, train tickets — this one app does everything. Link your international card before arriving.",
              tip: "Set up in English: Me → Settings → Language. Add your card in 'Bank Cards'.",
            },
            {
              name: "Didi (滴滴出行)",
              why: "Chinese Uber. Available inside Alipay (no separate app needed for basic use). Shows destination in Chinese for the driver.",
              tip: "Alipay mini-app: search 'Didi' inside Alipay. Set up before leaving your hotel WiFi.",
            },
            {
              name: "Google Translate / Baidu Translate",
              why: "Camera translation for menus and signs. Download Chinese offline pack before your trip.",
              tip: "Baidu Translate has better Chinese↔English results than Google. Both support photo translation.",
            },
            {
              name: "Maps: Apple Maps or Amap (高德地图)",
              why: "Google Maps has poor China coverage. Apple Maps works well. For Android, Amap is the best but Chinese-only.",
              tip: "Save your hotel and key attractions before going out. Screenshot routes as backup.",
            },
          ].map((app) => (
            <div key={app.name} className="p-5 rounded-xl border border-stone-200 bg-white">
              <h3 className="font-semibold text-stone-900">{app.name}</h3>
              <p className="text-sm text-stone-700 mt-1">{app.why}</p>
              <p className="text-xs text-teal-600 font-medium mt-2">💡 {app.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Money */}
      <section className="mb-10">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">
          Money & Payments
        </h2>
        <InfoBox type="warning" title="Key Advice">
          <p>China is nearly cashless. Mobile payment (Alipay / WeChat Pay) is used everywhere — from street food stalls to tourist attractions. Set up Alipay with your international card before arriving. Carry ¥200–500 cash as backup for the rare vendor who doesn&apos;t accept foreign-linked Alipay.</p>
        </InfoBox>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-lg border border-stone-200 bg-white">
            <h4 className="font-semibold text-stone-900">Currency</h4>
            <p className="text-stone-700 mt-1">Chinese Yuan (CNY / RMB / ¥). Roughly 1 USD ≈ 7.2 CNY (check current rates).</p>
          </div>
          <div className="p-4 rounded-lg border border-stone-200 bg-white">
            <h4 className="font-semibold text-stone-900">ATMs</h4>
            <p className="text-stone-700 mt-1">Major bank ATMs (ICBC, Bank of China) accept international cards. Look for the Visa/Mastercard logo. Withdrawals have fees.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">
          Frequently Asked Questions
        </h2>
        <FAQ items={faqItems} />
      </section>
    </div>
  );
}
