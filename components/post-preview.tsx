import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import type Author from "../interfaces/author";
import ContentDescription from "./content-description";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
};

const PostPreview = ({ title, coverImage, date, excerpt, author }: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug hover:underline">{title}</h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <ContentDescription description={author.name} />
    </div>
  );
};

export default PostPreview;
