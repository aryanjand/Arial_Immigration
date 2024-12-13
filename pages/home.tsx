import Services from '../components/home/services/services';
import HeroPost from '../components/home/hero-post';
import Layout from '../components/app/layout';
import Post from '../interfaces/content-type';
import heroImage from '../public/assets/images/hero/hero-maple-leaf.png';
import work_image from '../public/assets/images/services/work-hero.png';
import study_image from '../public/assets/images/services/study-hero.png';
import sponsor_image from '../public/assets/images/services/sponsor.png';
import HeaderLink from '../interfaces/headerlink';
import ContactUs from '../components/home/contact-us/contact-us';
import SectionSeparator from '../components/shared/section-separator';
import MetaHome from '../components/meta/meta-home';

type Props = {
  allPosts: Post[];
  headerLinks: HeaderLink[];
};

// This is the main page of the website
const Home = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts;
  return (
    <Layout>
      <MetaHome />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          description={heroPost.description}
        />
      )}
      {morePosts.length > 0 && (
        <Services posts={morePosts.slice(1, morePosts.length)} />
      )}
      <SectionSeparator />
      <ContactUs />
    </Layout>
  );
};

export const getStaticProps = () => {
  const allPosts = [
    {
      title: 'Unlock the doors to new horizons',
      coverImage: heroImage,
      description: `We pave your path to Canada, embracing a world without borders.
        Committed to guiding you through each step, we help you seize opportunities, acquire skills, and forge a future in a global landscape. 
        Your journey to building a life overseas begins with us.`,
    },
    {
      title: 'Study',
      coverImage: study_image,
      description: `Embark on an educational journey with Arial Immigration.
        Elevate your learning experience beyond borders and immerse yourself in Canada's rich academic environment.
         We provide comprehensive assistance for students aspiring to study in Canada, equipping them for global career opportunities.`,
    },
    {
      title: 'Work',
      coverImage: work_image,
      description: `Transform Canada into your new workspace with Arial Immigration.
       Our tailored assistance programs are designed to facilitate your smooth transition to a thriving career in Canada.
       Let us guide you in navigating the path to successful migration and professional growth.`,
    },
    {
      title: 'Sponsor',
      coverImage: sponsor_image,
      description: `Reunite with your loved ones in Canada through Arial Immigration.
       We specialize in various Sponsorship Visas, making it possible for your family and relatives to join you and explore life in Canada.
       Let us help you bring your dear ones closer in this exciting new chapter.`,
    },
  ];

  return {
    props: { allPosts },
  };
};

export default Home;
