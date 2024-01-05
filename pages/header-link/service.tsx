import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import type ContentType from "../../interfaces/content-type";
import CoverImage from "../../public/assets/images/hero/hero-services.png";
import study_image from "../../public/assets/images/services/study.png";
import vist_image from "../../public/assets/images/services/vistor-visa.png";
import work_image from "../../public/assets/images/services/work.png";
import lmia_image from "../../public/assets/images/services/lmia.png";
import citizenship_image from "../../public/assets/images/services/citizenship.png";
import express_image from "../../public/assets/images/services/express-entry.png";
import HeaderLink from "../../interfaces/headerlink";
import ServiceBody from "../../components/service-body";

type Props = {
  post: ContentType;
  headerLinks: HeaderLink[];
};

export default function Service({ post, headerLinks }: Props) {
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
            {post.content.map((c, index) => (
              <ServiceBody key={c.coverImage} content={c} index={index} />
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
      title: `Why Choose Arial Immigration?`,
      excerpt: `At Arial Immigration, we're known for our exceptional service quality, deeply rooted in client satisfaction and a results-focused approach.
      Our expert team, proficient in Canadian immigration law, delivers tailored, comprehensive guidance for each client's unique needs.
      We boast a strong success record, thanks to our meticulous case handling and proactive strategies.`,
      coverImage: "",
    },
    {
      title: "",
      excerpt: `Our ICCRC affiliation reflects our commitment to ethical and professional standards. 
      Keeping up-to-date with immigration policy changes, we offer the latest, most effective advice.
      We're more than a service provider; we're your trusted partner in achieving your Canadian dream, ensuring a smooth journey with our transparency, reliability, and dedication to continuous learning.`,
      coverImage: "",
    },
    {
      title: `Our Services`,
      excerpt: ``,
      coverImage: "",
    },
    {
      title: "",
      subHeading: "Study Visa",
      excerpt: `Choose Canada for its world-class education and vibrant campus life. 
      Arial Immigration expertly guides students to Canadian universities, matching their aspirations with the right courses and institutions.
      Benefit from innovative research opportunities and a safe, inclusive community. Plus, enjoy the unique advantage of working while studying.
      Start your global career with Arial Immigration.`,
      coverImage: study_image,
    },
    {
      title: "",
      subHeading: "Visitor Visa",
      excerpt: `Discover the beauty and diversity of Canada with Arial Immigration's Visitor Visa assistance.
      Whether it's for tourism, family visits, or short-term business trips, we ensure a smooth, hassle-free visa application process.
      Experience Canada's stunning landscapes, multicultural cities, and warm hospitality.
      Let Arial Immigration be your gateway to unforgettable Canadian adventures.`,
      coverImage: vist_image,
    },
    {
      title: "",
      subHeading: "Work Visa",
      excerpt: `Turn your professional aspirations into reality in Canada with Arial Immigration's Work Visa assistance.
       We provide expert guidance for securing work visas, connecting you with Canada's diverse job market.
        Whether you're seeking career advancement or new opportunities, Canada offers a dynamic work environment and a high quality of life.
       Begin your professional journey in Canada confidently with Arial Immigration's personalized support.`,
      coverImage: work_image,
    },
    {
      title: "",
      subHeading: "LMIA (Labour Market Impact Assessment)",
      excerpt: `Arial Immigration provides expert assistance with Labour Market Impact Assessments (LMIA), a crucial step for employers in Canada to hire foreign workers.
       We guide you through the LMIA process, ensuring compliance with Canadian labor market requirements and facilitating a smoother path for securing work visas. 
      Our expertise in LMIA helps bridge the gap between Canadian employers and international talent, paving the way for successful employment opportunities in Canada.`,
      coverImage: lmia_image,
    },
    {
      title: "",
      subHeading: "Citizenship",
      excerpt: `Arial Immigration is dedicated to helping you navigate the journey to Canadian citizenship.
       We provide comprehensive support and guidance through the application process, ensuring you meet all the requirements and understand the rights and responsibilities of Canadian citizenship.
       Our expertise simplifies the path to becoming a Canadian citizen, allowing you to fully embrace the opportunities and privileges of life in Canada.`,
      coverImage: citizenship_image,
    },
    {
      title: "",
      subHeading: "Express Entry",
      excerpt: `Arial Immigration specializes in the Express Entry system, Canada's streamlined pathway for skilled immigrants.
       We provide expert guidance to optimize your profile and improve your chances of selection. From eligibility assessment to final application, our team ensures a smooth, efficient process, helping you fast-track your move to Canada.
       Trust Arial Immigration to navigate the Express Entry system and bring you closer to your Canadian dream.`,
      coverImage: express_image,
    },
  ];

  const post = {
    title: "Services",
    coverImage: CoverImage,
    content: content,
    slug: "service",
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
