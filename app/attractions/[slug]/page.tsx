import { notFound } from "next/navigation";
import { getContentBySlug, getAllContent, generateTOC } from "@/lib/content";
import { generatePageMetadata, generateArticleJsonLd } from "@/lib/metadata";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { TableOfContents } from "@/components/content/TableOfContents";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const items = getAllContent("attractions");
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = await getContentBySlug("attractions", slug);
  if (!item) return {};

  return generatePageMetadata({
    title: item.frontmatter.title,
    description: item.frontmatter.description,
    slug: `attractions/${slug}`,
    image: item.frontmatter.image,
    publishedAt: item.frontmatter.publishedAt,
    updatedAt: item.frontmatter.updatedAt,
  });
}

export default async function AttractionPage({ params }: Props) {
  const { slug } = await params;
  const item = await getContentBySlug("attractions", slug);
  if (!item) notFound();

  const toc = generateTOC(item.content);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleJsonLd({
              title: item.frontmatter.title,
              description: item.frontmatter.description,
              slug: `attractions/${slug}`,
              image: item.frontmatter.image,
              publishedAt: item.frontmatter.publishedAt,
              updatedAt: item.frontmatter.updatedAt,
            })
          ),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Attractions", href: "/attractions" },
            { label: item.frontmatter.title },
          ]}
        />

        <header className="mb-8">
          <h1 className="font-display font-extrabold text-stone-900 leading-[1.15] mb-4">
            {item.frontmatter.title}
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            {item.frontmatter.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-sand-500 font-mono">
            <time>
              Updated{" "}
              {new Date(
                item.frontmatter.updatedAt || item.frontmatter.publishedAt
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>{item.readingTime} min read</span>
          </div>
        </header>

        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={toc} />
            </div>
          </aside>
          <div className="article-content min-w-0">
            <div className="lg:hidden mb-8">
              <TableOfContents items={toc} />
            </div>
            <MDXRemote source={item.content} components={mdxComponents} />
          </div>
        </div>
      </article>
    </>
  );
}
