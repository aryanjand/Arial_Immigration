import { COMPANY_NAME } from '../../lib/constants';
import { breadcrumbJsonLd, organizationJsonLd, sitePath } from '../../lib/site';
import SeoHead from './seo-head';

const MetaInsight = () => {
  return (
    <SeoHead
      title="Immigration Insights"
      description="Stay informed with the latest news and insights on Canadian immigration policies, trends, and success stories."
      path="/insight"
      image="/assets/images/hero/hero-insight.png"
      jsonLd={[
        organizationJsonLd(),
        breadcrumbJsonLd([
          { name: 'Home', path: '/home' },
          { name: 'Insight', path: '/insight' },
        ]),
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Immigration Insights',
          description:
            'A collection of news, insights, and updates about Canadian immigration trends, policies, and success stories.',
          url: sitePath('/insight'),
          publisher: {
            '@type': 'Organization',
            name: COMPANY_NAME,
          },
        },
      ]}
    />
  );
};

export default MetaInsight;
