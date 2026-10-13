import { COMPANY_NAME } from './constants';

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:8080');

export const SITE_URL = rawSiteUrl.replace(/\/home\/?$/, '').replace(/\/$/, '');

export const COMPANY_PHONE = '+1-604-368-6092';
export const COMPANY_PHONE_DISPLAY = '+1 (604) 368-6092';
export const COMPANY_EMAIL = 'arialimmigration@gmail.com';
export const COMPANY_DESCRIPTION = `${COMPANY_NAME} offers expert immigration consulting services to help you navigate Canadian immigration with confidence.`;

export const sitePath = (path: string) =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

export const organizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness', 'Organization'],
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: sitePath('/assets/images/logo/logo.png'),
  image: sitePath('/assets/images/hero/hero-maple-leaf.png'),
  description: COMPANY_DESCRIPTION,
  telephone: COMPANY_PHONE,
  email: COMPANY_EMAIL,
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    contactType: 'customer service',
    availableLanguage: ['English'],
    areaServed: 'CA',
  },
  knowsAbout: [
    'Canadian immigration',
    'Study visa',
    'Work visa',
    'Visitor visa',
    'Express Entry',
    'Family sponsorship',
    'Canadian citizenship',
    'LMIA',
  ],
});

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: sitePath(item.path),
  })),
});
