type Props = {
  description: string;
};

const ContentDescription = ({ description }: Props) => {
  return (
    <div className="flex items-center">
      <div className="text-xl font-bold">{description}</div>
    </div>
  );
};

export default ContentDescription;
