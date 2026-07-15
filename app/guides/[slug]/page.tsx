import { notFound } from "next/navigation";
import { getContentBySlug, getAllContent, generateTOC } from "@/lib/content";
import { generatePageMetadata, generateArticleJsonLd } from "@/lib/metadata";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { TableOfContents } from "@/components/content/TableOfContents";
import { CTABanner } from "@/components/ui/CTABanner";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const guides = getAllContent("guides");
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = await getContentBySlug("guides", slug);
  if (!guide) return {};

  return generatePageMetadata({
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    slug: `guides/${slug}`,
    image: guide.frontmatter.image,
    publishedAt: guide.frontmatter.publishedAt,
    updatedAt: guide.frontmatter.updatedAt,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = await getContentBySlug("guides", slug);

  if (!guide) notFound();

  const toc = generateTOC(guide.content);
  const jsonLd = generateArticleJsonLd({
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    slug: `guides/${slug}`,
    image: guide.frontmatter.image,
    publishedAt: guide.frontmatter.publishedAt,
    updatedAt: guide.frontmatter.updatedAt,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: guide.frontmatter.title },
          ]}
        />

        {/* Header */}
        <header className="mb-8">
          {guide.frontmatter.tags && (
            <div className="flex gap-2 mb-4">
              {guide.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="font-display font-extrabold text-stone-900 leading-[1.15] mb-4">
            {guide.frontmatter.title}
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed mb-4 max-w-2xl">
            {guide.frontmatter.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-stone-400 font-mono">
            <time dateTime={guide.frontmatter.publishedAt}>
              Updated{" "}
              {new Date(guide.frontmatter.updatedAt || guide.frontmatter.publishedAt).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </time>
            <span>{guide.readingTime} min read</span>
          </div>
        </header>

        {/* Two-column layout: TOC + Content */}
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-10">
          {/* Sidebar TOC — sticky on desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={toc} />
            </div>
          </aside>

          {/* Main content */}
          <div className="article-content min-w-0">
            {/* Mobile TOC */}
            <div className="lg:hidden mb-8">
              <TableOfContents items={toc} />
            </div>

            <MDXRemote source={guide.content} components={mdxComponents} />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12">
          <CTABanner variant="stone" />
        </div>

        {/* Related Guides */}
        <div className="mt-12 pt-8 border-t border-stone-200">
          <h3 className="font-display font-bold text-lg text-stone-900 mb-4">
            More Datong Guides
          </h3>
          <RelatedGuides currentSlug={slug} />
        </div>
      </article>
    </>
  );
}

async function RelatedGuides({ currentSlug }: { currentSlug: string }) {
  const all = getAllContent("guides")
    .filter((g) => g.slug !== currentSlug)
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {all.map((g) => (
        <Link
          key={g.slug}
          href={`/guides/${g.slug}`}
          className="p-4 rounded-lg border border-stone-200 bg-white hover:shadow-sm transition-all group"
        >
          <h4 className="font-semibold text-sm text-stone-900 group-hover:text-red-800 transition-colors">
            {g.frontmatter.title}
          </h4>
          <p className="text-xs text-stone-400 mt-1 line-clamp-2">
            {g.frontmatter.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
