import Container from "../components/container";
import Services from "../components/services";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Post from "../interfaces/post";
import heroImage from "../public/assets/images/hero/heroCost.png";
import HeaderLink from "../interfaces/headerlink";

type Props = {
  allPosts: Post[];
  headerLinks: HeaderLink[];
};

export default function Index({ allPosts, headerLinks }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Container>
          <Intro headerLinks={headerLinks} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && (
            <Services posts={morePosts.slice(1, morePosts.length)} />
          )}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = () => {
  // Dummy data for allPosts
  const allPosts = [
    {
      title: "Unlock the doors to new horizons",
      date: "2023-12-25",
      slug: "future-of-tech",
      author: "Jane Doe",
      coverImage: heroImage,
      excerpt: `We pave your path to Canada, embracing a world without borders.
        Committed to guiding you through each step, we help you seize opportunities, acquire skills, and forge a future in a global landscape. 
        Your journey to building a life overseas begins with us.`,
    },
    {
      title: "Study",
      date: "2023-12-20",
      slug: "ai-evolution",
      author: "John Smith",
      coverImage: heroImage,
      excerpt: `Embark on an educational journey with Arial Immigration.
        Elevate your learning experience beyond borders and immerse yourself in Canada's rich academic environment.
         We provide comprehensive assistance for students aspiring to study in Canada, equipping them for global career opportunities.`,
    },
    {
      title: "Work",
      date: "2023-12-18",
      slug: "sustainable-energy",
      author: "Alice Johnson",
      coverImage: heroImage,
      excerpt: `Transform Canada into your new workspace with Arial Immigration.
       Our tailored assistance programs are designed to facilitate your smooth transition to a thriving career in Canada.
       Let us guide you in navigating the path to successful migration and professional growth.`,
    },
    {
      title: "Sponsor",
      date: "2023-12-18",
      slug: "sustainable-energy",
      author: "Alice Johnson",
      coverImage: heroImage,
      excerpt: `Reunite with your loved ones in Canada through Arial Immigration.
       We specialize in various Sponsorship Visas, making it possible for your family and relatives to join you and explore life in Canada.
       Let us help you bring your dear ones closer in this exciting new chapter.`,
    },
  ];

  const headerLinks = [
    {
      title: "About Us",
      slug: "future-of-tech",
    },
    {
      title: "Services",
      slug: "future-of-tech",
    },
    {
      title: "Insight",
      slug: "future-of-tech",
    },
  ];

  return {
    props: { allPosts, headerLinks },
  };
};
