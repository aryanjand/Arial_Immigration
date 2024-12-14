import cn from 'classnames';
import NewsType from '../../interfaces/news';

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
        <svg
          width="15"
          height="10"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893L19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071C11.9024 13.3166 11.9024 12.6834 12.2929 12.2929L16.5858 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H16.5858L12.2929 1.70711C11.9024 1.31658 11.9024 0.683417 12.2929 0.292893Z"
            fill="black"
          />
        </svg>
      </a>
    </div>
  );
};

export default InsightCard;
