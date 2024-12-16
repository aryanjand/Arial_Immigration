import { z } from 'zod';

export const ContactFormSchema = z.object({
  customer_name: z.string().min(3, 'Name is required (Min 3 Characters).'),
  customer_email: z.string().email('Invalid email address.'),
  customer_phone_number: z
    .string()
    .regex(
      /^(\+?\d{1,4}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{3,4}$/,
      'Invalid phone number.'
    ),
  selected_service: z.string().min(1, 'Please select a service.'),
  message: z.string().optional(),
  terms: z.literal(true, {
    errorMap: () => ({
      message: 'You must agree to the terms and conditions.',
    }),
  }),
});

export type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;
