import Link from 'next/link';
import CoverImage from '../../shared/cover-image';

type Props = {
  title: string;
  coverImage: string;
  description: string;
};

const ServicesPreview = ({ title, coverImage, description }: Props) => {
  return (
    <Link href="/services" className="block group">
      <div className="mb-5">
        <CoverImage title={title} src={coverImage} />
      </div>
      <h3 className="text-2xl lg:text-3xl mb-3 leading-snug group-hover:underline">
        {title}
      </h3>
      <p className="text-lg leading-relaxed mb-4">{description}</p>
    </Link>
  );
};

export default ServicesPreview;
