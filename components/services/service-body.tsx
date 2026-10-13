import Image from 'next/image';
import cn from 'classnames';
import { ContentType } from '../../interfaces/content';

type Props = {
  content: ContentType;
  index: number;
};

const ServiceBody = ({ content, index }: Props) => {
  const imageFirstOnDesktop = index % 2 === 0 && Boolean(content.coverImage);

  return (
    <div
      className={cn('max-w-6xl mx-auto grid grid-flow-row', {
        'gap-5 mt-10': content.title,
        'my-5': !content.title,
      })}
    >
      {content.title && (
        <h2 className="text-3xl md:text-4xl font-light">{content.title}</h2>
      )}

      <div
        className={cn(
          'grid grid-cols-1 items-center gap-4',
          content.coverImage && 'md:grid-cols-2'
        )}
      >
        <article
          className={cn(
            'flex flex-col gap-3',
            imageFirstOnDesktop ? 'md:order-2' : 'md:order-1'
          )}
        >
          {content.subHeading && (
            <h3 className="font-bold text-lg underline">
              {content.subHeading}
            </h3>
          )}
          {content.description && (
            <p className="self-start md:self-center">{content.description}</p>
          )}
        </article>
        {content.coverImage && (
          <Image
            className={cn(
              'hover:shadow-lg transition-shadow duration-200 w-full h-auto',
              imageFirstOnDesktop ? 'md:order-1' : 'md:order-2'
            )}
            src={content.coverImage}
            alt={content.subHeading || content.title || 'Service'}
            width={600}
            height={400}
          />
        )}
      </div>
    </div>
  );
};

export default ServiceBody;
