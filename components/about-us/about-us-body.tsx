import Image from 'next/image';
import { ContentType } from '../../interfaces/content';
import cn from 'classnames';

type Props = {
  content: ContentType;
};

// Used in the about-us page
const AboutUsBody = ({ content }: Props) => {
  return (
    <>
      <div
        className={cn('max-w-6xl', 'mx-auto', 'grid grid-flow-row', {
          'gap-5 mt-10': content.title,
          'gap-1': content.subHeading,
          'gap-3': !content.title && !content.subHeading,
        })}
      >
        {content.title ? (
          <h2 className="text-3xl md:text-4xl font-light">{content.title}</h2>
        ) : (
          content.subHeading && (
            <h3 className="font-bold underline mt-3">{content.subHeading}</h3>
          )
        )}

        <div
          className={cn(
            'grid grid-cols-1 items-center gap-4',
            content.coverImage && 'md:grid-cols-3'
          )}
        >
          {content.coverImage && (
            <Image
              src={content.coverImage}
              alt={content.title || 'Arial Immigration certification'}
              width={300}
              height={630}
              className="w-full max-w-[220px] h-auto mx-auto md:mx-0"
            />
          )}
          {content.description && (
            <p
              className={cn(
                'self-center',
                content.coverImage && 'md:col-span-2'
              )}
            >
              {content.description}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutUsBody;
