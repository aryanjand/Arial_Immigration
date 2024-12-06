import CoverImage from '../cover-image';
import PageTitle from './page-title';

type Props = {
  title: string;
  coverImage: string;
};

const PostHeader = ({ title, coverImage }: Props) => {
  return (
    <>
      <PageTitle>{title}</PageTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} width={1300} />
      </div>
    </>
  );
};

export default PostHeader;
