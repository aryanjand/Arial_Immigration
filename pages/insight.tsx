import PostHeader from '../components/shared/page-hero-content/post-header';
import Layout from '../components/app/layout';
import type ContentType from '../interfaces/content-type';
import CoverImage from '../public/assets/images/hero/hero-insight.png';
import InsightCard from '../components/insight/insight-card';
import { INSIGHT_HEADING } from '../lib/constants';
import MetaInsight from '../components/meta/meta-insight';
const news = require('gnews');

type Props = {
  post: ContentType;
};

export default function Insight({ post }: Props) {
  return (
    <Layout>
      <MetaInsight />
      <PostHeader title={post.title} coverImage={post.coverImage} />
      <h3 className="text-4xl font-light">{INSIGHT_HEADING}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-32">
        {post.newsContent.map((c) => (
          <InsightCard content={c} />
        ))}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const immigrationNews = await news.search(
    'Positive Canadian Immigration News (CIC)',
    {
      n: 6,
    }
  );

  const post = {
    title: 'Insight',
    coverImage: CoverImage,
    newsContent: immigrationNews,
    slug: 'insight',
  };

  return {
    props: { post },
  };
};
