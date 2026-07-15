import Link from "next/link";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InfoBox } from "@/components/ui/InfoBox";
import { AffiliateCard } from "@/components/affiliate/AffiliateCard";
import { trainRoutes } from "@/lib/data";
import { getAffiliateUrl } from "@/lib/affiliate";

export const metadata = {
  title: "How to Get to Datong — Trains, Flights & Buses",
  description:
    "Complete transportation guide for Datong: high-speed trains from Beijing (under 2 hours), flights to Datong Yungang Airport, and local transport tips.",
};

export default function TransportationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Transportation" },
        ]}
      />

      <header className="mb-10">
        <h1 className="font-display font-extrabold text-stone-900 mb-3">
          Getting to Datong
        </h1>
        <p className="text-lg text-stone-700 leading-relaxed max-w-2xl">
          Datong is one of the easiest cities to reach in northern China, with
          high-speed trains from Beijing taking under 2 hours.
        </p>
      </header>

      {/* Train Routes */}
      <section className="mb-12">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">
          By Train (Recommended)
        </h2>
        <p className="text-stone-700 leading-relaxed mb-6">
          High-speed trains are the best way to reach Datong. They&apos;re fast,
          comfortable, and run frequently from major cities. All trains arrive at{" "}
          <strong>Datong South Railway Station (大同南站)</strong>, about 8km from
          the ancient city.
        </p>

        <div className="space-y-4">
          {trainRoutes.map((route) => (
            <AffiliateCard
              key={`${route.from}-${route.to}`}
              title={`${route.from} → Datong`}
              description={`${route.duration}. ${route.frequency}.`}
              price={route.priceRange}
              tripUrl={route.tripUrl}
              type="train"
            />
          ))}
        </div>
      </section>

      {/* By Air */}
      <section className="mb-12">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">
          By Air
        </h2>
        <p className="text-stone-700 leading-relaxed mb-4">
          <strong>Datong Yungang Airport (DAT)</strong> has domestic flights from
          major Chinese cities including Beijing, Shanghai, Guangzhou, Chengdu, and
          Xi&apos;an. International travelers typically fly into Beijing and take
          the train.
        </p>
        <InfoBox type="info" title="Note">
          The airport is 18km from the city center. Take the airport shuttle bus
          (¥15, 40 min) or a taxi (¥50–70, 30 min).
        </InfoBox>
      </section>

      {/* Getting Around */}
      <section className="mb-12">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">
          Getting Around Datong
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Public Bus",
              detail: "¥1–2 per ride. Routes cover all major attractions. Bus 3 goes to Yungang Grottoes. Useful but signs are Chinese-only.",
            },
            {
              title: "Taxi / Didi",
              detail: "Taxis start at ¥8. Didi (Chinese Uber) is convenient — download the app before you arrive. Most rides within the city cost ¥10–25.",
            },
            {
              title: "Bicycle",
              detail: "Rent a bike on the ancient city wall (¥30). Shared bikes (Meituan/Hellobike) are available throughout the city via Alipay mini-apps.",
            },
            {
              title: "To Hanging Temple",
              detail: "The temple is 65km from Datong. Take a bus from Datong Bus Station (¥30, 1.5h) or hire a private car for the day (¥400–600 round trip).",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl border border-stone-200 bg-white"
            >
              <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-sm text-stone-700 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Book Train CTA */}
      <div className="rounded-xl bg-stone-100 border border-stone-200 p-6 text-center">
        <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
          Ready to Book?
        </h3>
        <p className="text-sm text-stone-700 mb-4">
          Check train schedules and book tickets on Trip.com — English interface,
          international payment accepted.
        </p>
        <a
          href={getAffiliateUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-5 py-2.5 rounded-md bg-red-800 text-white text-sm font-semibold hover:bg-red-900 transition-colors"
        >
          Search Train Tickets →
        </a>
      </div>
    </div>
  );
}
