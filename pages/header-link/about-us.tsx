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
    <Layout /* preview={preview} - Remove or define `preview` */>
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
      coverImage: ``,
    },
    {
      title: ``,
      excerpt: `Our commitment to your journey is reflected in our comprehensive support, from initial profile assessment to offering tailored solutions that enhance your career prospects.
      At Arial Immigration, customer satisfaction is not just a goal, it's our promise. We address every query with a deep understanding of your emotional and financial considerations.
      Our consultancy is built on the pillars of honesty, consistency, and strict client confidentiality, making us a trusted partner in your immigration journey.`,
      coverImage: ``,
    },
    {
      title: ``,
      excerpt: `As ICCRC-certified consultants, we adhere to rigorous standards set by the Canadian government to regulate immigration, citizenship, and international student advising services.
      Our role includes enforcing the Code of Professional Ethics, accrediting Immigration Practitioner Programs, administering Full Skills Exams, delivering Practice Management Education, and ensuring continual professional development.
      Trust Arial Immigration to guide you through every step of your immigration process with expertise and care.`,
      coverImage: rcic_cric,
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
