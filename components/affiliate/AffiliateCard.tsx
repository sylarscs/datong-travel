"use client";

import { getAffiliateUrl, trackAffiliateClick } from "@/lib/affiliate";

const AFFILIATE_URL = getAffiliateUrl();

interface AffiliateCardProps {
  title: string;
  description: string;
  price: string;
  tripUrl?: string;
  type: "hotel" | "ticket" | "train";
  image?: string;
  className?: string;
}

export function AffiliateCard({
  title,
  description,
  price,
  type,
  image,
  className = "",
}: AffiliateCardProps) {

  const typeLabel = {
    hotel: "Book Room",
    ticket: "Buy Tickets",
    train: "Book Train",
  };

  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackAffiliateClick(type, title, AFFILIATE_URL)}
      className={`group flex items-center gap-4 p-4 rounded-lg border border-stone-200 bg-stone-100 hover:bg-white hover:shadow-md transition-all duration-200 ${className}`}
    >
      {image && (
        <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden bg-stone-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-stone-900 group-hover:text-red-700 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-stone-400 mt-0.5 line-clamp-1">{description}</p>
        <p className="text-sm font-mono text-stone-900 mt-1">{price}</p>
      </div>
      <span className="flex-shrink-0 inline-flex items-center px-3 py-1.5 rounded-md bg-red-700 text-white text-sm font-semibold group-hover:bg-red-700 transition-colors">
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
  image,
  rating,
}: {
  name: string;
  location: string;
  priceRange: string;
  tripUrl?: string;
  image?: string;
  rating?: number;
}) {
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackAffiliateClick("hotel", name, AFFILIATE_URL)}
      className="group block rounded-lg overflow-hidden border border-stone-200 bg-white hover:shadow-lg transition-all duration-200"
    >
      <div className="aspect-[16/10] bg-stone-200 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-300 text-sm">
            Hotel Photo
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold text-stone-900 group-hover:text-red-700 transition-colors">
            {name}
          </h4>
          {rating && (
            <span className="flex-shrink-0 px-1.5 py-0.5 rounded text-xs font-mono bg-stone-100 text-stone-700">
              ★ {rating.toFixed(1)}
            </span>
          )}
        </div>
        <p className="text-sm text-stone-400 mt-1">{location}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-sm font-mono text-stone-900">{priceRange}</span>
          <span className="text-sm font-semibold text-red-700 group-hover:translate-x-0.5 transition-transform">
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
}: {
  name: string;
  description: string;
  price: string;
  tripUrl?: string;
}) {
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackAffiliateClick("ticket", name, AFFILIATE_URL)}
      className="group flex items-center justify-between p-4 rounded-lg border border-stone-200 bg-white hover:border-red-700/20 hover:shadow-sm transition-all duration-200"
    >
      <div>
        <h4 className="font-semibold text-stone-900 group-hover:text-red-700 transition-colors">
          {name}
        </h4>
        <p className="text-sm text-stone-400 mt-0.5">{description}</p>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="text-sm font-mono text-stone-900">{price}</span>
        <span className="px-3 py-1.5 rounded-md bg-red-700 text-white text-sm font-semibold group-hover:bg-red-700 transition-colors">
          Book →
        </span>
      </div>
    </a>
  );
}
