import React from 'react';
import Layout from '../components/app/layout';
import { COMPANY_NAME } from '../lib/constants';

const TermsAndConditions: React.FC = () => {
  return (
    <Layout>
      <div className="p-8 font-sans bg-gray-50 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">
          Terms and Conditions for Submitting an Inquiry
        </h1>

        <h2 className="text-xl font-semibold mt-4 mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By submitting an inquiry to{' '}
          <span className="font-medium">[Agency Name]</span> ("we," "us,"
          "our"), you agree to these terms and conditions. If you do not agree,
          please refrain from submitting an inquiry.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">
          2. Purpose of Inquiry
        </h2>
        <p className="mb-4">
          The purpose of submitting an inquiry is to receive general information
          about our immigration consulting services. Submission of an inquiry
          does not create a client-consultant relationship between you and
          <span className="font-medium"> {COMPANY_NAME}</span>.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">
          3. Accuracy of Information
        </h2>
        <p className="mb-4">
          You agree to provide accurate, current, and complete information when
          submitting your inquiry.
          <span className="font-medium"> {COMPANY_NAME}</span> is not
          responsible for any issues arising from incorrect or incomplete
          information provided by you.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">4. Contact Us</h2>
        <p className="mb-4">
          For any questions regarding these terms and conditions, please contact
          us at
          <a
            href="mailto:arialimmigration@gmail.com"
            className="text-blue-600 hover:underline"
          >
            {' '}
            arialimmigration@gmail.com
          </a>
          .
        </p>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;
