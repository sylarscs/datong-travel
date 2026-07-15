const AID = process.env.NEXT_PUBLIC_TRIPCOM_AFFILIATE_ID || "9288868";
const SID = process.env.NEXT_PUBLIC_TRIPCOM_SID || "324376718";
const TRIP_SUB3 = "D18694321";

export function getAffiliateUrl(destinationUrl: string, sid?: string): string {
  const url = new URL(destinationUrl);
  url.searchParams.set("Allianceid", AID);
  url.searchParams.set("SID", sid || SID);
  url.searchParams.set("trip_sub3", TRIP_SUB3);
  return url.toString();
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
  datongHotels: "https://www.trip.com/hotels/datong-hotels/",
  datongAttractions: "https://www.trip.com/travel-guide/datong/attractions/",
  chinaTrains: "https://www.trip.com/trains/china/",
  beijingToDatongTrain: "https://www.trip.com/trains/china/route/beijing-to-datong/",
} as const;
