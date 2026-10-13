import Link from 'next/link';
import { useRef, useState } from 'react';
import {
  ContactFormSchemaType,
  ContactFormSchema,
} from '../../../interfaces/schema/contact-form-schema';
import { useFormik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { FormValues } from '../../../interfaces/form-values';
import { useEmailJSMutation } from '../../../lib/hooks/useEmailJSMutation';
import { COMPANY_EMAIL, CONSULTING_SERVICES } from '../../../lib/site';

const SUBMIT_COOLDOWN_MS = 60_000;
const MIN_FILL_MS = 2000;

export const ContactUsForm = () => {
  const sentEmailMutation = useEmailJSMutation();
  const startedAt = useRef(Date.now());
  const [isBotSubmission, setIsBotSubmission] = useState(false);

  const formik = useFormik<ContactFormSchemaType>({
    initialValues: {
      customer_name: '',
      customer_email: '',
      customer_phone_number: '',
      selected_service: '',
      message: '',
      website: '',
      // @ts-ignore
      terms: false,
    },
    validate: withZodSchema(ContactFormSchema),
    onSubmit: (values) => {
      if (values.website) {
        setIsBotSubmission(true);
        return;
      }

      const lastSubmit = Number(
        window.sessionStorage.getItem('contact-submit-at') || 0
      );
      if (Date.now() - lastSubmit < SUBMIT_COOLDOWN_MS) {
        formik.setStatus(
          'Please wait a minute before sending another inquiry.'
        );
        return;
      }

      if (Date.now() - startedAt.current < MIN_FILL_MS) {
        formik.setStatus('Please take a moment to complete the form.');
        return;
      }

      try {
        const formValues: FormValues = {
          customer_name: values.customer_name,
          customer_email: values.customer_email,
          customer_phone_number: values.customer_phone_number,
          selected_service: values.selected_service,
          message: values.message,
          terms: values.terms,
        };

        sentEmailMutation.mutate(formValues, {
          onSuccess: () => {
            window.sessionStorage.setItem(
              'contact-submit-at',
              String(Date.now())
            );
            formik.resetForm();
          },
          onError: (error) => {
            console.error('Email mutation failed:', error);
          },
        });
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  if (sentEmailMutation.isSuccess || isBotSubmission) {
    return (
      <div className="bg-grey-100 border border-grey-300 p-4 rounded-md">
        <p className="font-medium">
          Thank you for contacting us. We will get back to you soon.
        </p>
      </div>
    );
  }

  if (sentEmailMutation.isError) {
    return (
      <div className="bg-red-100 border border-red-300 p-4 rounded-md">
        <p className="text-red-600">
          Oops, an error occurred. Please try again later, or contact us at{' '}
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="text-blue-600 hover:underline"
          >
            {COMPANY_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-y-5">
      <p className="text-md font-medium">
        Fill in the form, so we can contact you and start our journey together.
      </p>

      <div
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Company website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...formik.getFieldProps('website')}
        />
      </div>

      <div className="w-full">
        <label htmlFor="customer_name" className="sr-only">
          Name
        </label>
        <input
          id="customer_name"
          type="text"
          name="customer_name"
          placeholder="Name (Required)"
          className="border p-3 rounded-md w-full"
          {...formik.getFieldProps('customer_name')}
        />
        {formik.errors.customer_name && formik.touched.customer_name && (
          <p className="text-red-500 text-xs mt-1">
            {formik.errors.customer_name}
          </p>
        )}
      </div>

      <div className="w-full">
        <label htmlFor="customer_email" className="sr-only">
          Email
        </label>
        <input
          id="customer_email"
          type="email"
          name="customer_email"
          placeholder="Email (Required)"
          className="border p-3 rounded-md w-full"
          {...formik.getFieldProps('customer_email')}
        />
        {formik.errors.customer_email && formik.touched.customer_email && (
          <p className="text-red-500 text-xs mt-1">
            {formik.errors.customer_email}
          </p>
        )}
      </div>

      <div className="w-full">
        <label htmlFor="customer_phone_number" className="sr-only">
          Phone number
        </label>
        <input
          id="customer_phone_number"
          type="tel"
          name="customer_phone_number"
          placeholder="Phone Number (Required)"
          className="border p-3 rounded-md w-full"
          {...formik.getFieldProps('customer_phone_number')}
        />
        {formik.errors.customer_phone_number &&
          formik.touched.customer_phone_number && (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.customer_phone_number}
            </p>
          )}
      </div>

      <div className="w-full">
        <label htmlFor="selected_service" className="sr-only">
          Service
        </label>
        <select
          id="selected_service"
          name="selected_service"
          className="border p-3 rounded-md w-full"
          {...formik.getFieldProps('selected_service')}
        >
          <option value="" disabled>
            Select a Service (Required)
          </option>
          {CONSULTING_SERVICES.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
        {formik.errors.selected_service && formik.touched.selected_service && (
          <p className="text-red-500 text-xs mt-1">
            {formik.errors.selected_service}
          </p>
        )}
      </div>
      <label htmlFor="message" className="sr-only">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        className="border h-32 p-3 rounded-md"
        {...formik.getFieldProps('message')}
      />

      <div>
        <label className="flex gap-3 items-center">
          <input
            type="checkbox"
            name="terms"
            {...formik.getFieldProps('terms')}
          />
          <span>
            I agree to the{' '}
            <Link
              href="/terms-conditions"
              className="hover:underline text-blue-600"
            >
              terms and conditions
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy-policy"
              className="hover:underline text-blue-600"
            >
              privacy policy
            </Link>
            .
          </span>
        </label>
        {formik.errors.terms && formik.touched.terms && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.terms}</p>
        )}
      </div>

      {formik.status && <p className="text-red-500 text-sm">{formik.status}</p>}

      <button
        type="submit"
        disabled={sentEmailMutation.isLoading}
        className="bg-black text-white py-3 px-6 rounded-md h-12 disabled:opacity-70"
      >
        {sentEmailMutation.isLoading ? (
          <div className="flex justify-center items-center">
            <div className="w-4 h-4 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <span>Submit</span>
        )}
      </button>
    </form>
  );
};
