import ContactUsTags from './contact-us-tags';
import { ContactUsForm } from './contact-us-form';
import { CONTACT_US_SUBHEADING } from '../../../lib/constants';

type Props = {
  asPage?: boolean;
};

const ContactUs = ({ asPage = false }: Props) => {
  const Heading = asPage ? 'h1' : 'h2';

  return (
    <div id="contact" className="mb-16 md:mb-32 scroll-mt-24">
      <Heading className="mb-4 md:mb-8 text-3xl lg:text-5xl font-bold">
        {CONTACT_US_SUBHEADING}
      </Heading>
      <h3 className="mb-4 text-2xl lg:text-4xl leading-tight">
        Let's Talk Business
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 items-center">
        <ContactUsTags />
        <ContactUsForm />
      </div>
    </div>
  );
};
export default ContactUs;
