import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PageTitle = ({ children }: Props) => {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  );
};

export default PageTitle;
