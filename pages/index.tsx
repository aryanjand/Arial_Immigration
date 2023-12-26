import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = () => {
  // Dummy data for allPosts
  const allPosts = [
    {
      title: "Exploring the Future of Technology",
      date: "2023-12-25",
      slug: "future-of-tech",
      author: "Jane Doe",
      coverImage: "tech-future-cover.jpg",
      excerpt: "An in-depth look at emerging technologies shaping our world.",
    },
    {
      title: "The Evolution of Artificial Intelligence",
      date: "2023-12-20",
      slug: "ai-evolution",
      author: "John Smith",
      coverImage: "ai-evolution-cover.jpg",
      excerpt:
        "Exploring the milestones in AI development and future prospects.",
    },
    {
      title: "Sustainable Energy Solutions for the 21st Century",
      date: "2023-12-18",
      slug: "sustainable-energy",
      author: "Alice Johnson",
      coverImage: "sustainable-energy-cover.jpg",
      excerpt: "A comprehensive look at green energy alternatives.",
    },
  ];

  return {
    props: { allPosts },
  };
};
