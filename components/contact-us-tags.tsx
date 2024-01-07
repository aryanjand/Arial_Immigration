import ContentType from "../interfaces/content-type";

const ContactUsTags = () => {
  const inputsArray: ContentType[] = [
    {
      heading: "Let’s help you live your dream",
      excerpt: "in Canada",
    },
    {
      heading: "Prepare for the future",
      excerpt: "By studying in Canada",
    },
    {
      heading: "Save for the future",
      excerpt: "By working in Canada",
    },
    {
      heading: "Find peace for the future",
      excerpt: "By permanently settling in Canada",
    },
  ];

  return (
    <>
      {inputsArray.map((input) => (
        <div key={input.excerpt} className="m-10">
          <h5 className="font-medium">{input.heading}</h5>
          <p className="font-light">{input.excerpt}</p>
        </div>
      ))}
    </>
  );
};

export default ContactUsTags;
