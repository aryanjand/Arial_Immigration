import Link from "next/link";
import HeaderLink from "../interfaces/headerlink";

type Props = {
  headerLinks: HeaderLink[];
};

const Intro = ({ headerLinks }: Props) => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Arial Immigration
      </h1>
      {headerLinks.map((sn) => (
        <Link
          key={sn.slug}
          href="/posts/[slug]"
          as={`/posts/${sn.slug}`}
          className="hover:underline"
        >
          {sn.title}
        </Link>
      ))}
    </section>
  );
};

export default Intro;
