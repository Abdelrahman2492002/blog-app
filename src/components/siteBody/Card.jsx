import { Link } from "react-router-dom";
import AuthorInfo from "../common/authorInfo";
import Image from "../common/Image";

const Card = (props) => {
  const { id, category, title, authorName, authorImage, date, image } = props;
  return (
    <div className="mx-auto flex h-full max-w-[392px] flex-col rounded-xl border border-[#E8E8EA] p-4 shadow">
      <Image image={image} height="264px" />
      <div className="flex flex-1 flex-col gap-4 p-2">
        <span className="w-fit bg-[#4B6BFB0D] px-2 py-1 text-font-s text-[#4B6BFD]">
          {category}
        </span>
        <Link to={id} className="flex-1 hover:underline">
          <h3 className="text-font-m text-heading-l text-primary md:text-heading-l">
            {title}
          </h3>
        </Link>
        <AuthorInfo name={authorName} image={authorImage} date={date} />
      </div>
    </div>
  );
};

export default Card;
