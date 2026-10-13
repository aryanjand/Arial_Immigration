import Head from 'next/head';
import { COMPANY_NAME } from '../../lib/constants';
import { SITE_URL, sitePath } from '../../lib/site';

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

type Props = {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: JsonLd;
  noIndex?: boolean;
};

const SeoHead = ({
  title,
  description,
  path,
  image = '/assets/images/hero/hero-maple-leaf.png',
  jsonLd,
  noIndex = false,
}: Props) => {
  const canonical = sitePath(path);
  const ogImage = image.startsWith('http') ? image : sitePath(image);
  const fullTitle = title.includes(COMPANY_NAME)
    ? title
    : `${title} | ${COMPANY_NAME}`;

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
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />

      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow'}
      />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={COMPANY_NAME} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      )}
      <link
        rel="sitemap"
        type="application/xml"
        href={`${SITE_URL}/sitemap.xml`}
      />
    </Head>
  );
};

export default SeoHead;
