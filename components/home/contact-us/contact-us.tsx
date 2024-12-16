import ContactUsTags from './contact-us-tags';
import { ContactUsForm } from './contact-us-form';

const ContactUs = () => {
  return (
    <div className="mb-32">
      <h2 className="mb-8 text-3xl lg:text-5xl font-bold">Contact Us</h2>
      <h3 className="mb-4 text-2xl lg:text-4xl leading-tight">
        Let's Talk Business
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-5 gap-x-20 items-center">
        <div className="hidden md:block">
          <ContactUsTags />
        </div>
        <div>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
