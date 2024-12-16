import Head from 'next/head';
import { COMPANY_NAME } from '../../lib/constants';

const Meta = () => {
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
      <meta name="apple-mobile-web-app-title" content={`${COMPANY_NAME}`} />
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
        content="Page not found. Please return to the homepage or check back later."
      />
    </Head>
  );
};

export default Meta;
