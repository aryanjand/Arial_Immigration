import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { COMPANY_NAME } from '../../lib/constants';
import { HeaderNavLink } from '../../interfaces/header-nav-link';
import { Icons } from '../shared/icon';

type Props = {
  headerLinks: HeaderNavLink[];
};

const Header = ({ headerLinks }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { pathname } = useRouter();

  const title = headerLinks[0];
  const isHomePage = pathname === '/';

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  const renderNavLinks = (isMobile: boolean) => (
    <ul
      className={cn({
        'flex flex-col items-center min-h-[250px]': isMobile,
        'hidden lg:flex space-x-10 xl:space-x-16': !isMobile,
      })}
    >
      {headerLinks.slice(1).map((link) => (
        <li
          key={link.title}
          className={cn({
            'font-bold my-6': isMobile,
          })}
        >
          <Link
            href={link.path}
            onClick={closeNav}
            className={cn('hover:underline py-2 px-1 text-lg', {
              'underline font-bold': link.path === pathname,
            })}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="mb-10 mt-4 md:mb-20 md:mt-8">
      <nav className="flex items-center justify-between gap-4">
        <Link
          href={title.path}
          className="hover:underline min-w-0 shrink"
          onClick={closeNav}
        >
          {isHomePage ? (
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {title.title}
            </h1>
          ) : (
            <span className="block text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {COMPANY_NAME}
            </span>
          )}
        </Link>

        <section className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center"
            onClick={toggleNav}
            aria-expanded={isNavOpen}
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
          >
            <Icons.Hamburger />
          </button>

          {isNavOpen && (
            <div className="fixed inset-0 bg-neutral-50 z-30 flex flex-col justify-center items-center px-6">
              <button
                type="button"
                className="absolute top-6 right-6 inline-flex h-11 w-11 items-center justify-center"
                onClick={closeNav}
                aria-label="Close menu"
              >
                <Icons.Close />
              </button>
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
