module.exports = {
  compress: true,
  env: {
    SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : ''),
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/service',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/aboutus',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/insights',
        destination: '/insight',
        permanent: true,
      },
    ];
  },
  images: {
    loader: 'default',
    domains: ['github.com'],
  },
};
