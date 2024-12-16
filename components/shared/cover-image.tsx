import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  slug?: string;
  width?: number;
  height?: number;
};

const CoverImage = ({ title, src, slug, width, height }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={'hover:shadow-lg transition-shadow duration-200 w-full'}
      width={width ? width : 1300}
      height={height ? height : 630}
    />
  );
  return <div className="sm:mx-0">{image}</div>;
};

export default CoverImage;
