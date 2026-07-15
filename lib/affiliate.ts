const AFFILIATE_URL = "https://www.trip.com/t/0NFNgjygWV2";

export function getAffiliateUrl(): string {
  return AFFILIATE_URL;
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
