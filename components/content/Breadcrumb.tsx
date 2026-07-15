import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href
        ? `https://datong-travel.vercel.app${item.href}`
        : `https://datong-travel.vercel.app/${items
            .slice(0, index + 1)
            .map((i) => i.href || "")
            .join("/")}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="flex items-center gap-1.5 text-xs text-stone-400 mb-6 overflow-x-auto whitespace-nowrap">
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-stone-300 flex-shrink-0"
              >
                <path d="M4.5 2.5L7.5 6L4.5 9.5" />
              </svg>
            )}
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-red-800 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={index === items.length - 1 ? "text-stone-700 font-medium" : ""}>
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
