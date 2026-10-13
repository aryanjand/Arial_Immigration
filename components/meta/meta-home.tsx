import { COMPANY_NAME } from '../../lib/constants';
import {
  COMPANY_DESCRIPTION,
  organizationJsonLd,
  SITE_URL,
} from '../../lib/site';
import SeoHead from './seo-head';

const MetaHome = () => {
  return (
    <SeoHead
      title={`${COMPANY_NAME} | Canadian Immigration Consultants`}
      description={COMPANY_DESCRIPTION}
      path="/home"
      image="/assets/images/hero/hero-maple-leaf.png"
      jsonLd={[
        organizationJsonLd(),
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: COMPANY_NAME,
          url: SITE_URL,
        },
      ]}
    />
  );
};

export default MetaHome;
