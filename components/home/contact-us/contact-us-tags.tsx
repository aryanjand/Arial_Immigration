import { ContentType } from '../../../interfaces/content';
import { Icons } from '../../shared/icon';

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
    <div className="hidden md:block">
      <ul className="space-y-10">
        {inputsArray.map((input) => (
          <li
            key={input.description}
            className="mt-10 font-medium flex items-center"
          >
            <Icons.RightArrowHead />
            <span>
              <span className="text-xl mb-2">{input.heading}</span>
              <p className="font-light text-lg">{input.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactUsTags;
