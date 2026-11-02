import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import './blog.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  alternates: { types: { 'application/rss+xml': `${SITE.url}/rss.xml` } },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="blog">
      <nav className="blog-nav">
        <div className="blog-wrap">
          <Link href="/blog" className="blog-brand">
            Solo<span>Pilot</span> blog
          </Link>
          <Link href={SITE.signupPath} className="blog-cta">
            Validate your idea
          </Link>
        </div>
      </nav>
      <main className="blog-wrap">{children}</main>
    </div>
  );
}
