import Link from 'next/link';
import {
  ContactFormSchemaType,
  ContactFormSchema,
} from '../../../interfaces/schema/contact-form-schema';
import { useEmailJSMutation } from '../../../hooks/useEmailJSMutation';
import { useFormik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { FormValues } from '../../../interfaces/form-values';

export const ContactUsForm = () => {
  const sentEmailMutation = useEmailJSMutation();

  const formik = useFormik<ContactFormSchemaType>({
    initialValues: {
      customer_name: '',
      customer_email: '',
      customer_phone_number: '',
      selected_service: '',
      message: '',
      // @ts-ignore
      terms: false,
    },
    validate: withZodSchema(ContactFormSchema),
    onSubmit: (values) => {
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
          onSuccess: () => formik.resetForm(),
          onError: (error) => {
            console.error('Email mutation failed:', error);
          },
        });
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  if (sentEmailMutation.isSuccess) {
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
            href="mailto:arialimmigration@gmail.com"
            className="text-blue-600 hover:underline"
          >
            arialimmigration@gmail.com
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

      <div className="w-full ">
        <input
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
        <input
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
        <input
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
        <select
          name="selected_service"
          className="border p-3 rounded-md w-full"
          defaultValue=""
          {...formik.getFieldProps('selected_service')}
        >
          <option value="" disabled>
            Select a Service (Required)
          </option>
          <option value="migrate">Migrate</option>
          <option value="study">Study</option>
          <option value="business-immigration">Business Immigration</option>
          <option value="work">Work</option>
          <option value="visit">Visit</option>
        </select>
        {formik.errors.selected_service && formik.touched.selected_service && (
          <p className="text-red-500 text-xs mt-1">
            {formik.errors.selected_service}
          </p>
        )}
      </div>
      <textarea
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
            </Link>
            .
          </span>
        </label>
        {formik.errors.terms && formik.touched.terms && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.terms}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black text-white py-3 px-6 rounded-md h-15"
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
