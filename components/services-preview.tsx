import CoverImage from "./cover-image";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
};

const ServicesPreview = ({ title, coverImage, excerpt }: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug hover:underline">{title}</h3>
      <div className="text-lg mb-4"></div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
};

export default ServicesPreview;
