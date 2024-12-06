import PostHeader from '../components/shared/page-hero-content/post-header';
import Layout from '../components/app/layout';
import type ContentType from '../interfaces/content-type';
import CoverImage from '../public/assets/images/hero/hero-services.png';
import study_image from '../public/assets/images/services/study.png';
import vist_image from '../public/assets/images/services/vistor-visa.png';
import work_image from '../public/assets/images/services/work.png';
import lmia_image from '../public/assets/images/services/lmia.png';
import citizenship_image from '../public/assets/images/services/citizenship.png';
import express_image from '../public/assets/images/services/express-entry.png';
import ServiceBody from '../components/services/service-body';

type Props = {
  post: ContentType;
};

export default function Service({ post }: Props) {
  return (
    <Layout>
      <article className="mb-32">
        <PostHeader title={post.title} coverImage={post.coverImage} />
        {post.content.map((c, index) => (
          <ServiceBody key={c.coverImage} content={c} index={index} />
        ))}
      </article>
    </Layout>
  );
}

export async function getStaticProps() {
  const content = [
    {
      description: `At Arial Immigration, we prioritize exceptional service quality and client satisfaction. Our expert team provides tailored guidance in Canadian immigration law, ensuring a strong success record through meticulous case handling.`,
    },
    {
      description: `As ICCRC members, we uphold ethical standards and stay updated on immigration policies to offer effective advice. We are your trusted partner in achieving your Canadian dream, committed to transparency and reliability.`,
    },
    {
      title: `Our Services`,
    },
    {
      subHeading: 'Study Visa',
      description: `Choose Canada for its world-class education. Arial Immigration guides students to the right universities and courses, offering opportunities for research and the ability to work while studying.`,
      coverImage: study_image,
    },
    {
      subHeading: 'Visitor Visa',
      description: `Experience Canada's beauty with our Visitor Visa assistance. Whether for tourism or family visits, we ensure a smooth application process for unforgettable adventures.`,
      coverImage: vist_image,
    },
    {
      subHeading: 'Work Visa',
      description: `Achieve your career goals in Canada with our Work Visa assistance. We connect you to job opportunities and provide personalized support for a successful transition.`,
      coverImage: work_image,
    },
    {
      subHeading: 'LMIA (Labour Market Impact Assessment)',
      description: `We assist with Labour Market Impact Assessments (LMIA), essential for employers hiring foreign workers. Our guidance ensures compliance and facilitates work visa processes.`,
      coverImage: lmia_image,
    },
    {
      subHeading: 'Citizenship',
      description: `We help you navigate the Canadian citizenship journey, providing support through the application process and ensuring you understand your rights and responsibilities.`,
      coverImage: citizenship_image,
    },
    {
      subHeading: 'Express Entry',
      description: `Specializing in the Express Entry system, we optimize your profile to enhance selection chances. Our team ensures a smooth process from assessment to application, helping you fast-track your move to Canada.`,
      coverImage: express_image,
    },
  ];

  const post = {
    title: 'Services',
    coverImage: CoverImage,
    content: content,
    slug: 'service',
  };

  return {
    props: { post },
  };
}
