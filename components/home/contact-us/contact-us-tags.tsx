import ContentType from '../../../interfaces/content-type';

const ContactUsTags = () => {
  const inputsArray: ContentType[] = [
    {
      heading: 'Let’s help you live your dream',
      description: 'in Canada',
    },
    {
      heading: 'Prepare for the future',
      description: 'By studying in Canada',
    },
    {
      heading: 'Save for the future',
      description: 'By working in Canada',
    },
    {
      heading: 'Find peace for the future',
      description: 'By permanently settling in Canada',
    },
  ];

  return (
    <>
      {inputsArray.map((input) => (
        <div key={input.description} className="m-10">
          <h5 className="font-medium">{input.heading}</h5>
          <p className="font-light">{input.description}</p>
        </div>
      ))}
    </>
  );
};

export default ContactUsTags;
