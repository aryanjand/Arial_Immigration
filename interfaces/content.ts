import { NewsType } from './news';

export type ContentType = {
  title?: string;
  heading?: string;
  subHeading?: string;
  coverImage?: string;
  description?: string;
  content?: ContentType[];
  newsContent?: NewsType[];
};
