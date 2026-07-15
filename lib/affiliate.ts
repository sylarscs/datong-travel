const AID = process.env.NEXT_PUBLIC_TRIPCOM_AFFILIATE_ID || "9288868";
const SID = process.env.NEXT_PUBLIC_TRIPCOM_SID || "324376718";
const TRIP_SUB3 = "D18694321";

/**
 * Build a Trip.com affiliate URL.
 * Uses the user's real affiliate format with hk.trip.com base.
 */
export function getAffiliateUrl(destinationUrl: string, sid?: string): string {
  try {
    const url = new URL(destinationUrl);
    // Rewrite to hk.trip.com if using www.trip.com (user's affiliate account is HK-based)
    if (url.hostname === "www.trip.com") {
      url.hostname = "hk.trip.com";
    }
    url.searchParams.set("Allianceid", AID);
    url.searchParams.set("SID", sid || SID);
    url.searchParams.set("trip_sub3", TRIP_SUB3);
    return url.toString();
  } catch {
    // Fallback: if URL parsing fails, return as-is
    return destinationUrl;
  }
}

export function trackAffiliateClick(
  type: "hotel" | "ticket" | "train" | "general",
  name: string,
  url: string
) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "affiliate_click", {
      event_category: "affiliate",
      event_label: type,
      value: name,
      destination: url,
    });
  }
}

export const TRIPCOM_LINKS = {
  datongHotels: "https://hk.trip.com/hotels/datong-hotels/",
  datongAttractions: "https://hk.trip.com/travel-guide/datong/attractions/",
  chinaTrains: "https://hk.trip.com/trains/china/",
  beijingToDatongTrain: "https://hk.trip.com/trains/china/route/beijing-to-datong/",
} as const;
