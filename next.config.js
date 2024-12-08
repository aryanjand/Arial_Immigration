module.exports = {
  compress: true,
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
