import AboutUsBody from '../components/about-us/about-us-body';
import PostHeader from '../components/shared/page-hero-content/post-header';
import Layout from '../components/app/layout';
import CoverImage from '../public/assets/images/hero/hero-about-us.png';
import rcic_cric from '../public/assets/images/certifications/rcic-cric.png';
import MetaAboutUs from '../components/meta/meta-about-us';
import { ContentType } from '../interfaces/content';

type Props = {
  content: ContentType;
};

const AboutUs = ({ content }: Props) => {
  return (
    <Layout>
      <MetaAboutUs />
      <PostHeader title={content.title} coverImage={content.coverImage} />
      <article className="mb-32">
        {content.content.map((c) => (
          <AboutUsBody key={c.title} content={c} />
        ))}
      </article>
    </Layout>
  );
};

export async function getStaticProps() {
  const content = [
    // Top section
    {
      title: `Embark on a Journey of New Beginnings`,
      description: `As a proud member of the ICCRC (Immigration Consultants of Canada Regulatory Council), Arial Immigration is dedicated to providing genuine, transparent consultation services. We uphold the highest standards of integrity in all our dealings.
      Guided by our esteemed Managing Director, Mr. Yashpal Jand, a Regulated Canadian Immigration Consultant (RCIC), we ensure our clients are always updated with the latest immigration laws and procedures.`,
    },
    {
      description: `Our commitment to your journey is reflected in our comprehensive support, from initial profile assessment to offering tailored solutions that enhance your career prospects.
      At Arial Immigration, customer satisfaction is not just a goal, it's our promise. We address every query with a deep understanding of your emotional and financial considerations.
      Our consultancy is built on the pillars of honesty, consistency, and strict client confidentiality, making us a trusted partner in your immigration journey.`,
    },
    // rcic-cric logo
    {
      description: `As ICCRC-certified consultants, we adhere to rigorous standards set by the Canadian government to regulate immigration, citizenship, and international student advising services.
      Our role includes enforcing the Code of Professional Ethics, accrediting Immigration Practitioner Programs, administering Full Skills Exams, delivering Practice Management Education, and ensuring continual professional development.
      Trust Arial Immigration to guide you through every step of your immigration process with expertise and care.`,
      coverImage: rcic_cric,
    },
    // Values
    {
      title: `Values`,
    },
    {
      subHeading: `Integrity:`,
      description: `At Arial Immigration, integrity is at the core of our interactions and business approach. We maintain unwavering standards of reliability in every aspect of our work, ensuring trust and confidence in all our relationships.`,
    },
    {
      subHeading: `Reliability:`,
      description: `Our commitment to being reasonable, honest, courteous, and professional guides our interactions with clients. We support you throughout your immigration journey with dependable and sincere services.`,
    },
    {
      subHeading: `Our Team:`,
      description: `Our employees are the backbone of Arial Immigration. We are dedicated to fair and effective recruitment, development, and motivation in a supportive environment. This commitment enables us to achieve excellence in our services.`,
    },
    {
      subHeading: `Customer Satisfaction:`,
      description: `Exceeding customer expectations is our benchmark. At Arial Immigration, we are committed to building enduring customer relationships by continuously improving the quality and services we offer, seizing every opportunity to enhance your experience.`,
    },
    {
      subHeading: `Continuous Learning:`,
      description: `Excellence is our constant pursuit. We are committed to continuous self-improvement, ensuring that our team is always equipped to provide superior services to our clients and the community.`,
    },
  ];

  const pageContent = {
    title: 'About us',
    coverImage: CoverImage,
    content: content,
    slug: 'about-us',
  };

  return {
    props: {
      content: pageContent,
    },
  };
}

export default AboutUs;
