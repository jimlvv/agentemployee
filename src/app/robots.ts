import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/projects', '/agents', '/settings', '/onboarding'],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
