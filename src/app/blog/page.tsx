import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: `Blog — ${SITE.name}`,
  description: SITE.description,
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    title: `${SITE.name} blog`,
    description: SITE.description,
    url: '/blog',
    siteName: SITE.name,
  },
};

const fmt = (d: string) =>
  new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <>
      <header className="blog-header">
        <h1>Playbooks for solo founders</h1>
        <p>{SITE.description}</p>
      </header>
      {posts.length === 0 ? (
        <p className="blog-empty">First post coming soon.</p>
      ) : (
        <ul className="blog-list">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`}>
                <h2>{p.title}</h2>
                <p>{p.description}</p>
                <div className="blog-meta">
                  {fmt(p.date)} · {p.readingMinutes} min read
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
