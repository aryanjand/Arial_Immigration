import { DEFAULT_SITE_URL, INDEXABLE_PATHS } from './site';

const sitemapLoc = (path: string) =>
  path === '/' ? `${DEFAULT_SITE_URL}/` : `${DEFAULT_SITE_URL}${path}`;

export const buildSitemapXml = () => {
  const lastmod = new Date().toISOString().split('T')[0];
  const urls = INDEXABLE_PATHS.map((path) => {
    const priority = path === '/' ? '1.0' : '0.7';
    const changefreq = path === '/' ? 'weekly' : 'monthly';
    return `  <url>
    <loc>${sitemapLoc(path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

export const buildRobotsTxt = () => `User-agent: *
Allow: /

Sitemap: ${DEFAULT_SITE_URL}/sitemap.xml
`;
