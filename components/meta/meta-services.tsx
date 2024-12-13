import Head from 'next/head';
import { COMPANY_NAME } from '../../lib/constants';

const MetaServices = () => {
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

      {/* SEO Meta */}
      <title>{COMPANY_NAME}</title>

      <meta
        name="description"
        content={`Explore a wide range of services at ${COMPANY_NAME}, including Study Visas, Visitor Visas, Work Visas, Express Entry, Citizenship, and more. Let us help you achieve your Canadian dream.`}
      />
      <link rel="canonical" href={`${process.env.SITE_URL}/services`} />

      {/* Open Graph Meta */}
      <meta property="og:title" content={`Our Services - ${COMPANY_NAME}`} />
      <meta
        property="og:description"
        content={`${COMPANY_NAME} provides expert guidance for Study Visas, Visitor Visas, Work Visas, LMIA, Citizenship, and Express Entry. Explore our services today!`}
      />
      <meta property="og:site_name" content={COMPANY_NAME} />
      <meta property="og:url" content={`${process.env.SITE_URL}/services`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`${process.env.SITE_URL}/assets/images/hero/hero-services.png`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Our Services - ${COMPANY_NAME}`} />
      <meta
        name="twitter:description"
        content={`Discover a wide range of immigration services, including Study Visas, Visitor Visas, Work Visas, and more, at ${COMPANY_NAME}.`}
      />
      <meta
        name="twitter:image"
        content={`${process.env.SITE_URL}/assets/images/hero/hero-services.png`}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Immigration Services',
            description: `${COMPANY_NAME} provides expert immigration consulting for Study Visas, Visitor Visas, Work Visas, Express Entry, Citizenship, and LMIA support.`,
            url: `${process.env.SITE_URL}/services`,
            provider: {
              '@type': 'Organization',
              name: `${COMPANY_NAME}`,
              url: `${process.env.SITE_URL}`,
              logo: `${process.env.SITE_URL}/assets/images/logo/logo.png`,
            },
            areaServed: 'Canada',
          }),
        }}
      ></script>
    </Head>
  );
};

export default MetaServices;
