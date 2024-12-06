import NewsType from "./news";

type ContentType = {
  title?: string;
  heading?: string;
  subHeading?: string;
  coverImage?: string;
  description?: string;
  content?: ContentType[];
  newsContent?: NewsType[];
};

export default ContentType;
