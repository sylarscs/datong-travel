"use client";

import { getAffiliateUrl, trackAffiliateClick } from "@/lib/affiliate";

interface AffiliateCardProps {
  title: string;
  description: string;
  price: string;
  tripUrl: string;
  type: "hotel" | "ticket" | "train";
  image?: string;
  className?: string;
}

export function AffiliateCard({
  title,
  description,
  price,
  tripUrl,
  type,
  image,
  className = "",
}: AffiliateCardProps) {
  const affiliateUrl = getAffiliateUrl(tripUrl, `datong_${type}_${title.toLowerCase().replace(/\s+/g, "_")}`);

  const typeLabel = {
    hotel: "Book Room",
    ticket: "Buy Tickets",
    train: "Book Train",
  };

  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackAffiliateClick(type, title, affiliateUrl)}
      className={`group flex items-center gap-4 p-4 rounded-lg border border-sand-200 bg-sand-100 hover:bg-white hover:shadow-md transition-all duration-200 ${className}`}
    >
      {image && (
        <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden bg-sand-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-stone-900 group-hover:text-cinnabar transition-colors">
          {title}
        </h4>
        <p className="text-sm text-sand-500 mt-0.5 line-clamp-1">{description}</p>
        <p className="text-sm font-mono text-stone-900 mt-1">{price}</p>
      </div>
      <span className="flex-shrink-0 inline-flex items-center px-3 py-1.5 rounded-md bg-cinnabar text-white text-sm font-semibold group-hover:bg-cinnabar-hover transition-colors">
        {typeLabel[type]} →
      </span>
    </a>
  );
}

/**
 * Simplified hotel card — larger, with image
 */
export function AffiliateHotelCard({
  name,
  location,
  priceRange,
  tripUrl,
  image,
  rating,
}: {
  name: string;
  location: string;
  priceRange: string;
  tripUrl: string;
  image?: string;
  rating?: number;
}) {
  const affiliateUrl = getAffiliateUrl(tripUrl, `datong_hotel_${name.toLowerCase().replace(/\s+/g, "_")}`);

  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackAffiliateClick("hotel", name, affiliateUrl)}
      className="group block rounded-lg overflow-hidden border border-sand-200 bg-white hover:shadow-lg transition-all duration-200"
    >
      <div className="aspect-[16/10] bg-sand-200 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sand-300 text-sm">
            Hotel Photo
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold text-stone-900 group-hover:text-cinnabar transition-colors">
            {name}
          </h4>
          {rating && (
            <span className="flex-shrink-0 px-1.5 py-0.5 rounded text-xs font-mono bg-sand-100 text-stone-700">
              ★ {rating.toFixed(1)}
            </span>
          )}
        </div>
        <p className="text-sm text-sand-500 mt-1">{location}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-sm font-mono text-stone-900">{priceRange}</span>
          <span className="text-sm font-semibold text-cinnabar group-hover:translate-x-0.5 transition-transform">
            Check Availability →
          </span>
        </div>
      </div>
    </a>
  );
}

/**
 * Attraction ticket card — compact inline
 */
export function AffiliateTicketCard({
  name,
  description,
  price,
  tripUrl,
}: {
  name: string;
  description: string;
  price: string;
  tripUrl: string;
}) {
  const affiliateUrl = getAffiliateUrl(tripUrl, `datong_ticket_${name.toLowerCase().replace(/\s+/g, "_")}`);

  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackAffiliateClick("ticket", name, affiliateUrl)}
      className="group flex items-center justify-between p-4 rounded-lg border border-sand-200 bg-white hover:border-cinnabar/20 hover:shadow-sm transition-all duration-200"
    >
      <div>
        <h4 className="font-semibold text-stone-900 group-hover:text-cinnabar transition-colors">
          {name}
        </h4>
        <p className="text-sm text-sand-500 mt-0.5">{description}</p>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="text-sm font-mono text-stone-900">{price}</span>
        <span className="px-3 py-1.5 rounded-md bg-cinnabar text-white text-sm font-semibold group-hover:bg-cinnabar-hover transition-colors">
          Book →
        </span>
      </div>
    </a>
  );
}
