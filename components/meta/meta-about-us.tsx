import Head from 'next/head';
import { COMPANY_NAME } from '../../lib/constants';

const MetaAboutUs = () => {
  return (
    <Head>
      {/* Favicon and App Icons */}
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
      <meta name="apple-mobile-web-app-title" content="Arial Immigration" />
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

      {/* SEO Meta */}
      <title>{COMPANY_NAME}</title>
      <meta
        name="description"
        content="Learn more about Arial Immigration, our mission, and how we help clients navigate complex immigration processes with confidence."
      />
      <link rel="canonical" href={`${process.env.SITE_URL}/about-us`} />

      {/* Open Graph Meta */}
      <meta property="og:title" content="About Us - Arial Immigration" />
      <meta
        property="og:description"
        content="Discover how Arial Immigration helps individuals and families achieve their immigration goals with expert consulting services."
      />
      <meta property="og:url" content={`${process.env.SITE_URL}/about-us`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`${process.env.SITE_URL}/assets/images/hero/hero-about-us.png`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Us - Arial Immigration" />
      <meta
        name="twitter:description"
        content="Discover how Arial Immigration helps individuals and families achieve their immigration goals with expert consulting services."
      />
      <meta
        name="twitter:image"
        content={`${process.env.SITE_URL}/assets/images/hero/hero-about-us.png`}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'About Us',
            url: `${process.env.SITE_URL}/about-us`,
            description:
              'Learn more about Arial Immigration, our mission, and how we help clients navigate complex immigration processes with confidence.',
            publisher: {
              '@type': 'Organization',
              name: 'Arial Immigration',
              logo: {
                '@type': 'ImageObject',
                url: `${process.env.SITE_URL}/assets/images/logo/logo.png`,
              },
            },
            areaServed: 'Canada',
          }),
        }}
      ></script>
    </Head>
  );
};

export default MetaAboutUs;
