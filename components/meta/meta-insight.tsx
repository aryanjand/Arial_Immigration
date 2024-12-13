import Head from 'next/head';
import { COMPANY_NAME } from '../../lib/constants';

const MetaInsight = () => {
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
        content="Stay informed with the latest news and insights on Canadian immigration policies, trends, and success stories."
      />
      <link rel="canonical" href="https://www.arialimmigration.ca/insight" />

      {/* Open Graph Meta */}
      <meta
        property="og:title"
        content="Immigration Insights - Arial Immigration"
      />
      <meta
        property="og:description"
        content="Explore news and updates on Canadian immigration. Stay updated on policies, trends, and inspiring stories with Arial Immigration Insights."
      />
      <meta
        property="og:url"
        content="https://www.arialimmigration.ca/insight"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://www.arialimmigration.ca/assets/images/hero/hero-insight.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Immigration Insights - Arial Immigration"
      />
      <meta
        name="twitter:description"
        content="Stay informed with Canadian immigration news, trends, and stories brought to you by Arial Immigration."
      />
      <meta
        name="twitter:image"
        content="https://www.arialimmigration.ca/assets/images/hero/hero-insight.png"
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Immigration Insights',
            description:
              'A collection of news, insights, and updates about Canadian immigration trends, policies, and success stories.',
            url: 'https://www.arialimmigration.ca/insight',
            publisher: {
              '@type': 'Organization',
              name: 'Arial Immigration',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.arialimmigration.ca/assets/images/logo/logo.png',
              },
            },
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Canadian Immigration News',
                  url: 'https://www.arialimmigration.ca/insight',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Canadian Immigration Trends',
                  url: 'https://www.arialimmigration.ca/insight',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Inspiring Immigration Stories',
                  url: 'https://www.arialimmigration.ca/insight',
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'Study Visa Opportunities',
                  url: 'https://www.arialimmigration.ca/insight',
                },
                {
                  '@type': 'ListItem',
                  position: 5,
                  name: 'Visitor Visa Updates',
                  url: 'https://www.arialimmigration.ca/insight',
                },
                {
                  '@type': 'ListItem',
                  position: 6,
                  name: 'Work Visa Insights',
                  url: 'https://www.arialimmigration.ca/insight',
                },
              ],
            },
          }),
        }}
      ></script>
    </Head>
  );
};

export default MetaInsight;
