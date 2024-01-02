import Image from "next/image";
import ContentType from "../interfaces/content-type";
import cn from "classnames";

type Props = {
  content: ContentType;
};

const ServiceBody = ({ content }: Props) => {
  return (
    <>
      <div
        className={cn("max-w-6xl", "mx-auto", "grid grid-flow-row", {
          "gap-5 mt-10": content.title,
          "gap-1": content.subHeading,
          "gap-3": !content.title && !content.subHeading,
        })}
      >
        {content.title ? (
          <h2 className="text-4xl font-light">{content.title}</h2>
        ) : (
          <h4 className="font-bold underline mt-3">{content.subHeading}</h4>
        )}

        <div
          className={`grid ${
            content.coverImage ? "grid-cols-3" : "grid-cols-1"
          } items-center gap-4`}
        >
          {content.coverImage && (
            <Image
              src={content.coverImage}
              alt={content.title}
              width={300}
              height={630}
            />
          )}
          <p className="self-center col-span-2">{content.excerpt}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceBody;
