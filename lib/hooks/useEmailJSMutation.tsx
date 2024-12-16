import emailjs from '@emailjs/browser';
import { useMutation } from '@tanstack/react-query';
import { FormValues } from '../../interfaces/form-values';

export const useEmailJSMutation = () => {
  return useMutation((formElement: FormValues) => {
    const emailToAdmin = emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAIL_JS_ADMIN_TEMPLATE_ID,
      formElement,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
      }
    );

    const autoReplyToUser = emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAIL_JS_USER_TEMPLATE_ID,
      formElement,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
      }
    );

    return Promise.all([emailToAdmin, autoReplyToUser]);
  });
};
