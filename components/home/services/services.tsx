import ServicesPreview from './services-preview';
import type Post from '../../../interfaces/content-type';
import { OUR_SERVICES } from '../../../lib/constants';

type Props = {
  posts: Post[];
};

const Services = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold">{OUR_SERVICES}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-20 gap-x-10 mb-32">
        {posts.map((post) => (
          <ServicesPreview
            key={post.title}
            title={post.title}
            coverImage={post.coverImage}
            description={post.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
