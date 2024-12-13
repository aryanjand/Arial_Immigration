import { COMPANY_NAME } from '../../lib/constants';
import Footer from './footer';
import Header from './header';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const headerLinks = [
    {
      title: COMPANY_NAME,
      path: '/home',
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
  ];
  return (
    <>
      <div className="min-h-screen">
        <main>
          <div className="container mx-auto px-5 my-20">
            <Header headerLinks={headerLinks} />
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
