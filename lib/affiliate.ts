const AID = process.env.NEXT_PUBLIC_TRIPCOM_AFFILIATE_ID || "9288868";
const SID = process.env.NEXT_PUBLIC_TRIPCOM_SID || "324376718";
const TRIP_SUB3 = "D18695875";

export function getAffiliateUrl(): string {
  return `https://hk.trip.com/?Allianceid=${AID}&SID=${SID}&trip_sub1=&trip_sub3=${TRIP_SUB3}`;
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
