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
    <ul className="space-y-6">
      {inputsArray.map((input) => (
        <li
          key={input.description}
          className="mt-10 font-medium flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 mr-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10 5l5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            <span className="text-xl mb-2">{input.heading}</span>
            <p className="font-light text-lg">{input.description}</p>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ContactUsTags;
