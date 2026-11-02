import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPost } from '@/lib/blog';
import { SITE } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: `${post.title} — ${SITE.name}`,
    description: post.description,
    keywords: post.keyword ? [post.keyword, ...post.tags] : post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      siteName: SITE.name,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [SITE.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: SITE.twitter,
    },
  };
}

const fmt = (d: string) =>
  new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      author: { '@type': 'Person', name: SITE.author },
      publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
      mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
      keywords: [post.keyword, ...post.tags].filter(Boolean).join(', '),
    },
  ];
  if (post.faq.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Link href="/blog" className="blog-back">
        ← All posts
      </Link>
      <header className="blog-header" style={{ paddingTop: 20 }}>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <div className="blog-meta">
          {SITE.author} · {fmt(post.date)} · {post.readingMinutes} min read
        </div>
        {post.tags.length > 0 && (
          <div className="blog-tags">
            {post.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        )}
      </header>

      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />

      {post.faq.length > 0 && (
        <section className="blog-faq">
          <h2>FAQ</h2>
          {post.faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>
      )}

      <aside className="blog-cta-box">
        <h2>Test your idea before you build it</h2>
        <p>
          SoloPilot turns your idea into a falsifiable hypothesis, gathers evidence from real
          market signals, and gives you a go / no-go verdict.
        </p>
        <Link href={`${SITE.signupPath}?utm_source=blog&utm_medium=cta&utm_campaign=${post.slug}`}>
          Validate my idea →
        </Link>
      </aside>
    </article>
  );
}
