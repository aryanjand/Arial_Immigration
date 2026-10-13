import { COMPANY_NAME } from '../../lib/constants';
import { breadcrumbJsonLd, organizationJsonLd, sitePath } from '../../lib/site';
import SeoHead from './seo-head';

const MetaAboutUs = () => {
  return (
    <SeoHead
      title="About Us"
      description={`Learn about ${COMPANY_NAME}, our RCIC-led team, and how we help clients navigate Canadian immigration with integrity.`}
      path="/about-us"
      image="/assets/images/hero/hero-about-us.png"
      jsonLd={[
        organizationJsonLd(),
        breadcrumbJsonLd([
          { name: 'Home', path: '/home' },
          { name: 'About Us', path: '/about-us' },
        ]),
        {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: `About ${COMPANY_NAME}`,
          url: sitePath('/about-us'),
          description: `Learn more about ${COMPANY_NAME}, our mission, and how we help clients navigate complex immigration processes with confidence.`,
        },
      ]}
    />
  );
};

export default MetaAboutUs;
