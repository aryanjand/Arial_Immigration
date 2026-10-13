import { SpeedInsights } from '@vercel/speed-insights/next';
import { COMPANY_NAME } from '../../lib/constants';
import Footer from './footer';
import Header from './header';
import MobileContactBar from './mobile-contact-bar';
import RcicBanner from './rcic-banner';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const headerLinks = [
    {
      title: COMPANY_NAME,
      path: '/',
    },
    {
      title: 'About Us',
      path: '/about-us',
    },
    {
      title: 'Services',
      path: '/services',
    },
    {
      title: 'Insight',
      path: '/insight',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ];
  return (
    <>
      <SpeedInsights />
      <div className="min-h-screen">
        <main>
          <div className="container mx-auto px-5 py-8 md:py-20 pb-24 lg:pb-20">
            <RcicBanner />
            <Header headerLinks={headerLinks} />
            {children}
          </div>
        </main>
      </div>
      <Footer />
      <MobileContactBar />
    </>
  );
};

export default Layout;
