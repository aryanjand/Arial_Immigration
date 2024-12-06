import Image from 'next/image';
import ContentType from '../../interfaces/content-type';
import cn from 'classnames';
import useScreenSize from '../../hooks/useScreenSize';

type Props = {
  content: ContentType;
  index: number;
};

const ServiceBody = ({ content, index }: Props) => {
  const screenSize = useScreenSize();
  return (
    <>
      <div
        className={cn('max-w-6xl', 'mx-auto', 'grid grid-flow-row', {
          'gap-5 mt-10': content.title,
          'my-5': screenSize.width < 768,
        })}
      >
        {content.title && (
          <h2 className="text-4xl font-light">{content.title}</h2>
        )}

        <div
          className={cn(
            'grid',
            content.coverImage && screenSize.width >= 768
              ? 'grid-cols-2'
              : 'grid-cols-1', // add content.coverImage && screenSize <= 768px
            'items-center',
            'gap-4'
          )}
        >
          {index % 2 === 0 && screenSize.width >= 768 ? ( // add screenSize <= 768px
            <>
              {content.coverImage && (
                <Image
                  className={cn(
                    'hover:shadow-lg',
                    'transition-shadow',
                    'duration-200'
                  )}
                  src={content.coverImage}
                  alt={content.title}
                  width={600}
                />
              )}
              <article className="flex flex-col gap-3">
                <h4 className="font-bold text-lg underline">
                  {content.subHeading}
                </h4>
                <p className="self-center">{content.description}</p>
              </article>
            </>
          ) : (
            <>
              <article className="flex flex-col gap-3">
                <h4 className="font-bold text-lg underline">
                  {content.subHeading}
                </h4>
                <p className="self-center">{content.description}</p>
              </article>
              {content.coverImage && (
                <Image
                  className={'hover:shadow-lg transition-shadow duration-200'}
                  src={content.coverImage}
                  alt={content.title}
                  width={600}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceBody;
