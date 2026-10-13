import Layout from '../components/app/layout';
import { COMPANY_NAME } from '../lib/constants';
import { COMPANY_EMAIL, CONSULTANT_NAME } from '../lib/site';
import Meta from '../components/meta/meta';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Meta
        title="Privacy Policy"
        description={`How ${COMPANY_NAME} collects, uses, and retains personal information from website inquiries under PIPEDA.`}
        path="/privacy-policy"
        noIndex={false}
      />
      <div className="p-4 sm:p-8 font-sans bg-gray-50 text-gray-800">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          {COMPANY_NAME} (“we,” “us,” “our”) is a Canadian immigration
          consultancy led by {CONSULTANT_NAME}, RCIC. This policy explains how
          we handle personal information collected through this website, in line
          with the Personal Information Protection and Electronic Documents Act
          (PIPEDA).
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. What we collect</h2>
        <p className="mb-4">
          If you submit the inquiry form, we collect your name, email address,
          phone number, the immigration service you selected, and any message
          you choose to include. We do not ask for immigration file numbers,
          passport numbers, or other sensitive identity documents through this
          website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Why we collect it
        </h2>
        <p className="mb-4">
          We use this information only to respond to your inquiry, follow up
          about our services, and keep a record of the request. Submitting the
          form does not create a client-consultant relationship.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. How the form is sent
        </h2>
        <p className="mb-4">
          The form is delivered through EmailJS, a third-party email service.
          That means your inquiry is transmitted to EmailJS servers so it can be
          forwarded to {COMPANY_EMAIL} and so we can send you an automatic
          acknowledgement. EmailJS processes that data according to its own
          privacy terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Cookies and analytics
        </h2>
        <p className="mb-4">
          This site may use Vercel Speed Insights to understand page
          performance. That tool collects limited technical data about how pages
          load. We do not use the inquiry form to serve advertising.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Retention</h2>
        <p className="mb-4">
          Inquiry emails are kept only as long as needed to respond and, if you
          become a client, as required for professional record-keeping. If you
          do not become a client, we delete inquiry details when they are no
          longer needed for that follow-up.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Access, correction, and deletion
        </h2>
        <p className="mb-4">
          You may ask us for a copy of the personal information we hold about
          you from this website, ask us to correct it, or ask us to delete your
          inquiry. Email{' '}
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="text-blue-600 hover:underline"
          >
            {COMPANY_EMAIL}
          </a>{' '}
          with the subject line “Privacy request.” We will respond within 30
          days.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          7. We do not sell your information
        </h2>
        <p className="mb-4">
          We do not sell, rent, or share inquiry details with marketers. We
          share information only with service providers needed to operate the
          form (such as EmailJS) or when the law requires it.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact</h2>
        <p className="mb-4">
          Privacy questions can be sent to{' '}
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="text-blue-600 hover:underline"
          >
            {COMPANY_EMAIL}
          </a>
          .
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
