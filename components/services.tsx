import ServicesPreview from "./services-preview";
import type Post from "../interfaces/content-type";

type Props = {
  posts: Post[];
};

const Services = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Our Services
      </h2>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:grid-cols-3 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32"
        }
      >
        {posts.map((post) => (
          <ServicesPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
