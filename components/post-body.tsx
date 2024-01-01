import Image from "next/image";
import ContentType from "../interfaces/post";

type Props = {
  content: ContentType;
};

const PostBody = ({ content }: Props) => {
  return (
    <>
      <div className="max-w-6xl mx-auto grid gap-5">
        <h2 className="text-4xl font-light">{content.title}</h2>
        <div
          className={`grid ${
            content.coverImage ? "grid-cols-2" : "grid-cols-1"
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
          <p className="self-center">{content.excerpt}</p>
        </div>
      </div>
    </>
  );
};

export default PostBody;
