import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const WORDS_PER_MINUTE = 230;

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updated?: string;
  keyword?: string;
  tags: string[];
  draft: boolean;
  readingMinutes: number;
}

export interface Post extends PostMeta {
  html: string;
  faq: { q: string; a: string }[];
}

function readFile(slug: string) {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), 'utf8');
  return matter(raw);
}

function toMeta(slug: string, data: Record<string, unknown>, content: string): PostMeta {
  const required = ['title', 'description', 'date'] as const;
  for (const key of required) {
    if (!data[key]) throw new Error(`content/blog/${slug}.md is missing frontmatter "${key}"`);
  }
  const words = content.trim().split(/\s+/).length;
  const asDate = (v: unknown) =>
    v instanceof Date ? v.toISOString().slice(0, 10) : String(v);
  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: asDate(data.date),
    updated: data.updated ? asDate(data.updated) : undefined,
    keyword: data.keyword ? String(data.keyword) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: Boolean(data.draft),
    readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
  };
}

function slugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((f) => f.replace(/\.md$/, ''));
}

/** Published posts, newest first. Drafts and future-dated posts are hidden. */
export function getAllPosts(): PostMeta[] {
  const today = new Date().toISOString().slice(0, 10);
  return slugs()
    .map((slug) => {
      const { data, content } = readFile(slug);
      return toMeta(slug, data, content);
    })
    .filter((p) => !p.draft && p.date <= today)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  if (!getAllPosts().some((p) => p.slug === slug)) return null;
  const { data, content } = readFile(slug);
  const faq = Array.isArray(data.faq)
    ? data.faq
        .filter((f: { q?: string; a?: string }) => f?.q && f?.a)
        .map((f: { q: string; a: string }) => ({ q: String(f.q), a: String(f.a) }))
    : [];
  return {
    ...toMeta(slug, data, content),
    html: marked.parse(content, { async: false }) as string,
    faq,
  };
}
