import HeroPost from '../components/home/hero-post';
import Layout from '../components/app/layout';
import heroImage from '../public/assets/images/hero/hero-maple-leaf.png';
import work_image from '../public/assets/images/services/work-hero.png';
import study_image from '../public/assets/images/services/study-hero.png';
import sponsor_image from '../public/assets/images/services/sponsor.png';
import ContactUs from '../components/home/contact-us/contact-us';
import SectionSeparator from '../components/shared/section-separator';
import MetaHome from '../components/meta/meta-home';
import { HeaderNavLink } from '../interfaces/header-nav-link';
import { ContentType } from '../interfaces/content';
import ServicesPreview from '../components/home/services/services-preview';
import { OUR_SERVICES_HEADING } from '../lib/constants';

type Props = {
  content: ContentType[];
  headerLinks: HeaderNavLink[];
};

// This is the main page of the website
const Home = ({ content }: Props) => {
  const heroContent = content[0];
  const servicesContent = content.slice(1);
  return (
    <Layout>
      <MetaHome />
      {heroContent && (
        <HeroPost
          title={heroContent.title}
          coverImage={heroContent.coverImage}
          description={heroContent.description}
        />
      )}
      <section>
        <h2 className="mb-8 text-3xl font-bold">{OUR_SERVICES_HEADING}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-20 gap-x-10 mb-32">
          {servicesContent.map((post) => (
            <ServicesPreview
              key={post.title}
              title={post.title}
              coverImage={post.coverImage}
              description={post.description}
            />
          ))}
        </div>
      </section>
      <SectionSeparator />
      <ContactUs />
    </Layout>
  );
};

export const getStaticProps = () => {
  const contentSections = [
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
    props: { content: contentSections },
  };
};

export default Home;
