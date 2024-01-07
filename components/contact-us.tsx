import Link from "next/link";
import ContactUsTags from "./contact-us-tags";

const ContactUs = () => {
  return (
    <div className="mb-32">
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Contact Us
      </h2>
      <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
        Let's Talk Business
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-5 gap-x-20">
        <div className="hidden md:block">
          <ContactUsTags />
        </div>
        <div>
          <form className="grid grid-cols-1 gap-y-5">
            <p className="text-lg font-medium">
              Fill in the form, so we can contact you and start our journey
              together.
            </p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border p-3 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-3 rounded-md"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="border p-3 rounded-md"
            />
            <select name="service" className="border p-3 rounded-md">
              <option value="" disabled selected>
                Select a Service
              </option>
              <option value="migrate">Migrate</option>
              <option value="study">Study</option>
              <option value="business-immigration">Business Immigration</option>
              <option value="work">Work</option>
              <option value="visit">Visit</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              className="border p-3 rounded-md"
            />
            <label className="flex gap-5">
              <input type="checkbox" name="terms" />
              <Link href={""} className="hover:underline">
                I agree to the terms and conditions
              </Link>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
