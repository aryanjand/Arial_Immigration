const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:8080');

const siteUrl = rawSiteUrl.replace(/\/home\/?$/, '').replace(/\/$/, '');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500'],
  transform: async (config, path) => ({
    loc: path,
    changefreq: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
  }),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
