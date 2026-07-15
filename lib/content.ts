import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ContentFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  image?: string;
  tags?: string[];
  featured?: boolean;
}

export interface ContentItem {
  slug: string;
  frontmatter: ContentFrontmatter;
  content: string;
  readingTime: number;
}

/**
 * Get a single MDX file's content and frontmatter
 */
export async function getContentBySlug(
  directory: string,
  slug: string
): Promise<ContentItem | null> {
  try {
    const fullPath = path.join(process.cwd(), "content", directory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const readingTime = Math.ceil(content.split(/\s+/).length / 200);

    return {
      slug,
      frontmatter: data as ContentFrontmatter,
      content,
      readingTime,
    };
  } catch {
    return null;
  }
}

/**
 * Get all MDX files from a directory with their frontmatter
 */
export function getAllContent(directory: string): ContentItem[] {
  const dirPath = path.join(process.cwd(), "content", directory);

  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".mdx"));

  const items = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(dirPath, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const readingTime = Math.ceil(content.split(/\s+/).length / 200);

    return {
      slug,
      frontmatter: data as ContentFrontmatter,
      content,
      readingTime,
    };
  });

  return items.sort(
    (a, b) =>
      new Date(b.frontmatter.publishedAt).getTime() -
      new Date(a.frontmatter.publishedAt).getTime()
  );
}

/**
 * Get featured content items
 */
export function getFeaturedContent(directory: string, count = 6): ContentItem[] {
  const all = getAllContent(directory);
  const featured = all.filter((item) => item.frontmatter.featured);
  if (featured.length >= count) return featured.slice(0, count);
  // Fill remaining with most recent
  const remaining = all.filter((item) => !item.frontmatter.featured);
  return [...featured, ...remaining].slice(0, count);
}

/**
 * Generate a table of contents from MDX content
 */
export function generateTOC(content: string): { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/[`*_~\[\]()]/g, "");
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    toc.push({ id, text, level });
  }

  return toc;
}
