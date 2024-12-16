import Head from 'next/head';
import { COMPANY_NAME } from '../../lib/constants';

const MetaHome = () => {
  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content={COMPANY_NAME} />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000000" />

      <title>{COMPANY_NAME}</title>
      {/* SEO Meta */}
      <meta
        name="description"
        content={`${COMPANY_NAME} offers expert immigration consulting services to help you navigate the complexities of immigration processes with ease and confidence.`}
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <link rel="canonical" href={`${process.env.SITE_URL}/home`} />
      {/* Open Graph Meta */}
      <meta property="og:title" content={COMPANY_NAME} />
      <meta
        property="og:description"
        content={`Get professional guidance for your immigration needs with ${COMPANY_NAME}.`}
      />
      <meta property="og:site_name" content={COMPANY_NAME} />
      <meta property="og:url" content={`${process.env.SITE_URL}`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`${process.env.SITE_URL}/assets/images/hero/hero-maple-leaf.png`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={COMPANY_NAME} />
      <meta
        name="twitter:description"
        content={`Get professional guidance for your immigration needs with ${COMPANY_NAME}.`}
      />
      <meta
        name="twitter:image"
        content={`${process.env.SITE_URL}/assets/images/hero/hero-maple-leaf.png`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: `${COMPANY_NAME}`,
            url: `${process.env.SITE_URL}`,
            logo: `${process.env.SITE_URL}/assets/images/logo/logo.png`,
            description: `${COMPANY_NAME} offers expert immigration consulting services to help you navigate the complexities of immigration processes with ease and confidence.`,
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: `+1-604-368-6092`,
              contactType: 'Customer Service',
            },
            areaServed: 'Canada',
          }),
        }}
      ></script>
    </Head>
  );
};

export default MetaHome;
