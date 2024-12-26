import { v4 as uuidv4 } from "uuid";

const ContentBlock = ({ title, paragraphs }) => {
  return (
    <div className="mt-8 font-serif">
      {title && <h3 className="mb-4 text-heading-l text-primary">{title}</h3>}
      {paragraphs &&
        paragraphs.map((paragraph) => (
          <p
            key={uuidv4()}
            className="mb-8 text-font-s text-grey sm:text-[20px]"
          >
            {paragraph}
          </p>
        ))}
    </div>
  );
};

export default ContentBlock;
