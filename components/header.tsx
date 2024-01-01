import Link from "next/link";
import cn from "classnames";
import HeaderLink from "../interfaces/headerlink";

type Props = {
  headerLinks: HeaderLink[];
  slug: string;
};

const Header = ({ headerLinks, slug }: Props) => {
  return (
    <header className="mb-20 mt-8">
      <nav className="flex flex-wrap items-center justify-between">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/" className="hover:underline">
            Arial Immigration
          </Link>
        </h2>
        {headerLinks.map((link) => (
          <Link
            key={link.slug}
            href={`/header-link/${link.slug}`}
            className={cn(
              "hover:underline",
              "mr-4",
              { underline: link.slug === slug }, // Conditionally apply "underline" class
            )}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
