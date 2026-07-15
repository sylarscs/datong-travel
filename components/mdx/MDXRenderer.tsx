import type { MDXComponents } from "mdx/types";
import { InfoBox } from "@/components/ui/InfoBox";
import { CTABanner } from "@/components/ui/CTABanner";
import { FAQ } from "@/components/ui/FAQ";
import { AffiliateCard, AffiliateHotelCard, AffiliateTicketCard } from "@/components/affiliate/AffiliateCard";
import { ItineraryDay } from "@/components/content/ItineraryDay";

export const mdxComponents: MDXComponents = {
  // Typography
  h2: ({ children, ...props }) => (
    <h2 id={generateId(children as string)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 id={generateId(children as string)} {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-5 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-red-700 hover:text-red-700 underline underline-offset-2 decoration-stone-300 hover:decoration-red-600 transition-colors"
        {...props}
      >
        {children}
      </a>
    );
  },
  ul: ({ children, ...props }) => (
    <ul className="mb-5 space-y-1.5" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mb-5 space-y-1.5 list-decimal pl-5" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed pl-1" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-[3px] border-stone-300 pl-5 py-1 my-6 bg-stone-100 rounded-r-md italic text-stone-800"
      {...props}
    >
      {children}
    </blockquote>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-stone-900" {...props}>
      {children}
    </strong>
  ),

  // Custom components (available in MDX without import)
  InfoBox,
  CTABanner,
  FAQ,
  AffiliateCard,
  AffiliateHotelCard,
  AffiliateTicketCard,
  ItineraryDay,
};

function generateId(text: unknown): string {
  if (typeof text !== "string") return "";
  return text
    .toLowerCase()
    .replace(/[`*_~\[\]()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
