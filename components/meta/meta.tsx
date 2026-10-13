import SeoHead from './seo-head';

type Props = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

const Meta = ({
  title = 'Page Not Found',
  description = 'Page not found. Please return to the homepage or check back later.',
  path = '/404',
  noIndex = true,
}: Props) => {
  return (
    <SeoHead
      title={title}
      description={description}
      path={path}
      noIndex={noIndex}
    />
  );
};

export default Meta;
