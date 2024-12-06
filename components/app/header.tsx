import Link from 'next/link';
import cn from 'classnames';
import HeaderLink from '../../interfaces/headerlink';
import { useRouter } from 'next/router';
import { COMPANY_NAME } from '../../lib/constants';

type Props = {
  headerLinks: HeaderLink[];
};

const Header = ({ headerLinks }: Props) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="mb-20 mt-8">
      <nav className="flex flex-wrap items-center justify-between">
        {headerLinks.map((link) => {
          // Determine if this is the company name link, home page link, or regular nav link
          const isCompanyName = link.title === COMPANY_NAME;
          const isHomePage = link.path === '/home' && pathname === '/home';
          const isActive = link.path === pathname && !isCompanyName;

          return (
            <Link
              key={link.path}
              href={`/${link.path}`}
              className={cn('hover:underline', {
                'underline font-bold': isActive,
                'text-2xl md:text-4xl font-bold tracking-tight': isCompanyName,
                'text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left':
                  isHomePage,
              })}
            >
              {link.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
