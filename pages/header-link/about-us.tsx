import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import type ContentType from "../../interfaces/post";
import CoverImage from "../../public/assets/images/hero/hero-about-us.png";
import rcic_cric from "../../public/assets/images/hero/rcic-cric.png";
import HeaderLink from "../../interfaces/headerlink";

type Props = {
  post: ContentType;
  headerLinks: HeaderLink[];
};

export default function Post({ post, headerLinks }: Props) {
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
          <article className="mb-32">
            <PostHeader title={post.title} coverImage={post.coverImage} />
            {post.content.map((c) => (
              <PostBody content={c} />
            ))}
          </article>
        )}
      </Container>
    </Layout>
  );
}
// If you need to fetch the post data statically, use getStaticProps
// This is just an example. Modify according to your data fetching logic.
export async function getStaticProps() {
  const content = [
    {
      title: `Embark on a Journey of New Beginnings`,
      excerpt: `As a proud member of the ICCRC (Immigration Consultants of Canada Regulatory Council), Arial Immigration is dedicated to providing genuine, transparent consultation services. We uphold the highest standards of integrity in all our dealings.
      Guided by our esteemed Managing Director, Mr. Yashpal Jand, a Regulated Canadian Immigration Consultant (RCIC), we ensure our clients are always updated with the latest immigration laws and procedures.`,
      coverImage: "",
    },
    {
      title: "",
      excerpt: `Our commitment to your journey is reflected in our comprehensive support, from initial profile assessment to offering tailored solutions that enhance your career prospects.
      At Arial Immigration, customer satisfaction is not just a goal, it's our promise. We address every query with a deep understanding of your emotional and financial considerations.
      Our consultancy is built on the pillars of honesty, consistency, and strict client confidentiality, making us a trusted partner in your immigration journey.`,
      coverImage: "",
    },
    {
      title: "",
      excerpt: `As ICCRC-certified consultants, we adhere to rigorous standards set by the Canadian government to regulate immigration, citizenship, and international student advising services.
      Our role includes enforcing the Code of Professional Ethics, accrediting Immigration Practitioner Programs, administering Full Skills Exams, delivering Practice Management Education, and ensuring continual professional development.
      Trust Arial Immigration to guide you through every step of your immigration process with expertise and care.`,
      coverImage: rcic_cric,
    },
    {
      title: `Values`,
      excerpt: `Imagine living in one of the world's most picturesque countries, with a thriving economy and advanced amenities. Arial Immigration invites you to turn your dream of a new life in Canada into reality. Experience the beauty of becoming a Permanent Resident in this magnificent land.`,
      coverImage: "",
    },
    {
      subHeading: `Integrity:`,
      excerpt: `At Arial Immigration, integrity is at the core of our interactions and business approach. We maintain unwavering standards of reliability in every aspect of our work, ensuring trust and confidence in all our relationships.`,
      coverImage: "",
    },
    {
      subHeading: `Reliability:`,
      excerpt: `Our commitment to being reasonable, honest, courteous, and professional guides our interactions with clients. We support you throughout your immigration journey with dependable and sincere services.`,
      coverImage: "",
    },
    {
      subHeading: `Our Team:`,
      excerpt: `Our employees are the backbone of Arial Immigration. We are dedicated to fair and effective recruitment, development, and motivation in a supportive environment. This commitment enables us to achieve excellence in our services.`,
      coverImage: "",
    },
    {
      subHeading: `Customer Satisfaction:`,
      excerpt: `Exceeding customer expectations is our benchmark. At Arial Immigration, we are committed to building enduring customer relationships by continuously improving the quality and services we offer, seizing every opportunity to enhance your experience.`,
      coverImage: "",
    },
    {
      subHeading: `Continuous Learning:`,
      excerpt: `Excellence is our constant pursuit. We are committed to continuous self-improvement, ensuring that our team is always equipped to provide superior services to our clients and the community.`,
      coverImage: "",
    },
  ];

  const post = {
    title: "About us",
    coverImage: CoverImage,
    content: content,
    slug: "about-us",
  };

  const headerLinks = [
    {
      title: "About Us",
      slug: "about-us",
    },
    {
      title: "Contact Us",
      slug: "contact-us",
    },
    {
      title: "Services",
      slug: "services",
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
