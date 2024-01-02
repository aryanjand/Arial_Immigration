import Image from "next/image";
import ContentType from "../interfaces/content-type";
import cn from "classnames";

type Props = {
  content: ContentType;
  index: number;
};

const ServiceBody = ({ content, index }: Props) => {
  return (
    <>
      <div
        className={cn("max-w-6xl", "mx-auto", "grid grid-flow-row", {
          "gap-5 mt-10": content.title,
        })}
      >
        {content.title && (
          <h2 className="text-4xl font-light">{content.title}</h2>
        )}

        <div
          className={`grid ${
            content.coverImage ? "grid-cols-2" : "grid-cols-1"
          } items-center gap-4`}
        >
          {index % 2 === 0 ? (
            <>
              {content.coverImage && (
                <Image
                  className={"hover:shadow-lg transition-shadow duration-200"}
                  src={content.coverImage}
                  alt={content.title}
                  width={600}
                />
              )}
              <article className="flex flex-col gap-3">
                <h4 className="font-bold text-lg underline">
                  {content.subHeading}
                </h4>
                <p className="self-center">{content.excerpt}</p>
              </article>
            </>
          ) : (
            <>
              <article className="flex flex-col gap-3">
                <h4 className="font-bold text-lg underline">
                  {content.subHeading}
                </h4>
                <p className="self-center">{content.excerpt}</p>
              </article>
              {content.coverImage && (
                  <Image
                  className={"hover:shadow-lg transition-shadow duration-200"}
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
