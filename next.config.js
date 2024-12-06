module.exports = {
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
    ];
  },
  images: {
    loader: 'default',
    domains: ['github.com'],
  },
};
