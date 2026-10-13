import { COMPANY_NAME } from '../../lib/constants';
import {
  breadcrumbJsonLd,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  organizationJsonLd,
  sitePath,
} from '../../lib/site';
import SeoHead from './seo-head';

const MetaContact = () => {
  return (
    <SeoHead
      title="Contact Us"
      description={`Contact ${COMPANY_NAME} for Canadian immigration advice. Call ${COMPANY_PHONE} or send a message to start your consultation.`}
      path="/contact"
      jsonLd={[
        organizationJsonLd(),
        breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]),
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: `Contact ${COMPANY_NAME}`,
          url: sitePath('/contact'),
          description: `Get in touch with ${COMPANY_NAME} by phone, email, or the inquiry form.`,
          mainEntity: {
            '@type': 'Organization',
            name: COMPANY_NAME,
            telephone: COMPANY_PHONE,
            email: COMPANY_EMAIL,
          },
        },
      ]}
    />
  );
};

export default MetaContact;
