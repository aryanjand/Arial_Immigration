import Layout from '../components/app/layout';
import ContactUs from '../components/home/contact-us/contact-us';
import MetaContact from '../components/meta/meta-contact';

const Contact = () => {
  return (
    <Layout>
      <MetaContact />
      <ContactUs asPage />
    </Layout>
  );
};

export default Contact;
