import Link from "next/link";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";

export const metadata = {
  title: "About Us — The Team Behind Datong Travel Guide",
  description:
    "We're independent travelers building the best English-language guide to Datong, China. No AI-generated fluff — real research, local knowledge, honest recommendations.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <header className="mb-10">
        <h1 className="font-display font-extrabold text-stone-900 mb-4">
          About Datong Guide
        </h1>
        <p className="text-lg text-stone-700 leading-relaxed">
          We noticed something: there are great English guides for Beijing, Xi&apos;an,
          and Shanghai. But Datong — a city with UNESCO caves, a temple on a cliff,
          and some of the best food in northern China — barely has a paragraph in
          most guidebooks. We&apos;re here to fix that.
        </p>
      </header>

      {/* Mission */}
      <section className="mb-10">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-3">
          Our Mission
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed">
          <p>
            Datong Travel Guide is the <strong>most detailed English-language guide to Datong</strong> on
            the internet. Every article is researched in person, fact-checked, and
            written for independent travelers — not mass tourists on a tour bus.
          </p>
          <p>
            We believe Datong deserves better than a few sentences in a Lonely Planet
            sidebar. The Yungang Grottoes rival the Mogao Caves. The Hanging Temple
            is one of the most remarkable buildings in the world. And Datong&apos;s
            knife-cut noodles (刀削面) are worth the trip alone.
          </p>
        </div>
      </section>

      {/* How We Make Money */}
      <section className="mb-10 p-6 rounded-xl border border-stone-200 bg-stone-100">
        <h2 className="font-display font-bold text-lg text-stone-900 mb-3">
          How We Make Money
        </h2>
        <p className="text-sm text-stone-700 leading-relaxed mb-3">
          This site is free and always will be. We earn a small commission when you
          book hotels, train tickets, or attractions through our Trip.com affiliate
          links — at <strong>no extra cost to you</strong>. This is how we fund our
          research trips and keep the site running.
        </p>
        <p className="text-sm text-stone-700 leading-relaxed">
          We never recommend anything we haven&apos;t personally tried. Our opinions
          are our own, and affiliate relationships never influence our recommendations.
          If a hotel is bad, we&apos;ll tell you — even if they have an affiliate program.
        </p>
      </section>

      {/* The Team */}
      <section className="mb-10">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4">
          The Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-stone-200 bg-white">
            <h3 className="font-semibold text-stone-900">Content & Research</h3>
            <p className="text-sm text-stone-700 mt-2 leading-relaxed">
              Based in Shanxi, we spend our weekends exploring Datong&apos;s alleys,
              testing routes, and eating an unreasonable amount of noodles. Every
              guide is written from firsthand experience.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-stone-200 bg-white">
            <h3 className="font-semibold text-stone-900">Growth & Marketing</h3>
            <p className="text-sm text-stone-700 mt-2 leading-relaxed">
              We handle SEO, social media, and partnerships to make sure this guide
              reaches the travelers who need it — before they give up and join a
              group tour.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-10">
        <h2 className="font-display font-bold text-xl text-stone-900 mb-3">
          Get in Touch
        </h2>
        <p className="text-stone-700 leading-relaxed mb-4">
          Found a mistake? Have a question about your trip? Want to collaborate?
          We&apos;d love to hear from you.
        </p>
        <p className="text-sm text-stone-700">
          📧 Email us at{" "}
          <a href="mailto:hello@datongguide.com" className="text-red-800 font-medium">
            hello@datongguide.com
          </a>
        </p>
      </section>

      <CTABanner variant="stone" />
    </div>
  );
}
