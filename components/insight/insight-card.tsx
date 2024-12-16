import cn from 'classnames';
import { Icons } from '../shared/icon';
import { NewsType } from '../../interfaces/news';

type Props = {
  content: NewsType;
};

const InsightCard = ({ content }: Props) => {
  return (
    <div
      className={cn(
        'max-w-6xl',
        'mx-auto',
        'grid grid-flow-row',
        'gap-5 mt-10',
        'hover:shadow-lg',
        'transition-shadow',
        'duration-200',
        'p-5'
      )}
    >
      <h2 className="text-2xl font-light">{content.title}</h2>
      <article className="flex flex-col gap-3">
        <p>{content.contentSnippet}</p>
      </article>
      <a
        href={content.link}
        target="_blank"
        className="hover:underline flex flex-row items-center gap-1 mt-auto py-2 px-4 rounded"
      >
        Details
        <Icons.RightArrow />
      </a>
    </div>
  );
};

export default InsightCard;
