import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { COMPANY_NAME } from '../../lib/constants';
import { useState } from 'react';
import { HeaderNavLink } from '../../interfaces/header-nav-link';
import { Icons } from '../shared/icon';

type Props = {
  headerLinks: HeaderNavLink[];
};

const Header = ({ headerLinks }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { pathname } = useRouter();

  const title = headerLinks[0];
  const isCompanyName = title.title === COMPANY_NAME;
  const isHomePage = title.path === '/home' && pathname === '/home';

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  const renderNavLinks = (isMobile: boolean) => (
    <ul
      className={cn({
        'flex-col items-center min-h-[250px]': isMobile,
        'hidden lg:flex space-x-20': !isMobile,
      })}
    >
      {headerLinks.slice(1).map((link) => (
        <li
          key={link.title}
          className={cn({
            'font-bold my-8': isMobile,
          })}
        >
          <Link
            key={link.path}
            href={`${link.path}`}
            className={cn('hover:underline', {
              'underline font-bold': link.path === pathname,
            })}
          >
            {link.title.charAt(0).toUpperCase() +
              link.title.slice(1).toLowerCase()}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="mb-20 mt-8">
      <nav className="flex flex-wrap items-center justify-between">
        <Link
          href={`/${title.path}`}
          className={cn('hover:underline', {
            'text-5xl md:text-6xl font-bold tracking-tight': isCompanyName,
            'text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left':
              isHomePage,
          })}
        >
          <h1>{title.title}</h1>
        </Link>

        <section className="MOBILE-MENU flex lg:hidden">
          <div className="HAMBURGER-ICON space-y-2" onClick={toggleNav}>
            <Icons.Hamburger />
          </div>

          {isNavOpen && (
            <div className="absolute top-0 left-0 w-full h-full bg-neutral-50 z-10 flex flex-col justify-evenly items-center">
              <div
                className="absolute top-0 right-0 px-10 py-10"
                onClick={toggleNav}
              >
                <Icons.Close />
              </div>
              {renderNavLinks(true)}
            </div>
          )}
        </section>
        {renderNavLinks(false)}
      </nav>
    </header>
  );
};

export default Header;
