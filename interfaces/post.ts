type ContentType = {
  author: any;
  date: any;
  slug: string;
  title: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: ContentType[];
};

export default ContentType;
