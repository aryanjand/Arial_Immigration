import CoverImage from '../shared/cover-image';

type Props = {
  title: string;
  coverImage: string;
  description: string;
};

const HeroPost = ({ title, coverImage, description }: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} width={1300} height={630} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <span className="mb-4 text-4xl lg:text-5xl leading-tight">{title}</span>
        <p className="text-lg leading-relaxed mb-4">{description}</p>
      </div>
    </section>
  );
};

export default HeroPost;
