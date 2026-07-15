import type { MDXComponents } from "mdx/types";
import { InfoBox } from "@/components/ui/InfoBox";
import { CTABanner } from "@/components/ui/CTABanner";
import { FAQ } from "@/components/ui/FAQ";
import {
  AffiliateCard,
  AffiliateHotelCard,
  AffiliateTicketCard,
} from "@/components/affiliate/AffiliateCard";
import { ItineraryDay } from "@/components/content/ItineraryDay";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, ...props }) => (
      <h2
        id={children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, "-")}
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        id={children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, "-")}
        {...props}
      >
        {children}
      </h3>
    ),
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          {...props}
        >
          {children}
        </a>
      );
    },
    InfoBox,
    CTABanner,
    FAQ,
    AffiliateCard,
    AffiliateHotelCard,
    AffiliateTicketCard,
    ItineraryDay,
    ...components,
  };
}
