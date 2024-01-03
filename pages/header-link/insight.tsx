import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import type ContentType from "../../interfaces/content-type";
import CoverImage from "../../public/assets/images/hero/hero-insight.png";
import HeaderLink from "../../interfaces/headerlink";
import InsightBody from "../../components/insight-body";
const news = require("gnews");

type Props = {
  post: ContentType;
  headerLinks: HeaderLink[];
};

export default function Insight({ post, headerLinks }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        <Header headerLinks={headerLinks} slug={post.slug} />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <PostHeader title={post.title} coverImage={post.coverImage} />
            <h3 className="text-4xl font-light">Latest Immigration</h3>
            <div className="grid grid-cols-3 gap-5 mb-32">
              {post.newsContent.map((c) => (
                <InsightBody content={c} />
              ))}
            </div>
          </>
        )}
      </Container>
    </Layout>
  );
}
// If you need to fetch the post data statically, use getStaticProps
// This is just an example. Modify according to your data fetching logic.
export async function getStaticProps() {
  const immigrationNews = await news.search("Canadian Immigration CIC", {
    n: 6,
  });

  const post = {
    title: "Insight",
    coverImage: CoverImage,
    newsContent: immigrationNews,
    slug: "insight",
  };

  const headerLinks = [
    {
      title: "About Us",
      slug: "about-us",
    },
    {
      title: "Services",
      slug: "service",
    },
    {
      title: "Insight",
      slug: "insight",
    },
  ];

  return {
    props: { post, headerLinks },
  };
}
