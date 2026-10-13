import { COMPANY_NAME } from '../../lib/constants';
import { breadcrumbJsonLd, organizationJsonLd, sitePath } from '../../lib/site';
import SeoHead from './seo-head';

const MetaServices = () => {
  return (
    <SeoHead
      title="Immigration Services"
      description={`Explore Study Visas, Visitor Visas, Work Visas, Express Entry, Citizenship, and LMIA support at ${COMPANY_NAME}.`}
      path="/services"
      image="/assets/images/hero/hero-services.png"
      jsonLd={[
        organizationJsonLd(),
        breadcrumbJsonLd([
          { name: 'Home', path: '/home' },
          { name: 'Services', path: '/services' },
        ]),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Canadian Immigration Services',
          description: `${COMPANY_NAME} provides expert immigration consulting for Study Visas, Visitor Visas, Work Visas, Express Entry, Citizenship, and LMIA support.`,
          url: sitePath('/services'),
          provider: {
            '@type': 'Organization',
            name: COMPANY_NAME,
            url: sitePath('/'),
          },
          areaServed: 'Canada',
          serviceType: [
            'Study Visa',
            'Visitor Visa',
            'Work Visa',
            'LMIA',
            'Citizenship',
            'Express Entry',
          ],
        },
      ]}
    />
  );
};

export default MetaServices;
