import { useNavigate, useParams } from "react-router-dom";
import AuthorInfo from "../common/authorInfo";
import { useDataApi } from "../useDataApi";
import { v4 as uuidv4 } from "uuid";
import Image from "../common/Image";
import Loading from "../common/Loading";
import { AdComponent, ContentBlock, WisdomParagraph } from "./index.js";

const CardDetail = () => {
  const { id } = useParams();
  const { articles, error, isLoading } = useDataApi(id);
  const navigate = useNavigate();

  if (error) {
    navigate("*");
    return null;
  }

  if (isLoading) {
    return (
      <div className="mx-auto flex max-w-[805px] flex-col px-4">
        <Loading />
      </div>
    );
  }

  return (
    articles && (
      <div className="mx-auto flex max-w-[805px] flex-col px-4">
        <span className="mb-4 w-fit rounded-md bg-[#4B6BFB] px-3 py-2 text-font-s text-[#fff]">
          {articles.category}
        </span>

        <h2 className="text-heading-l sm:text-heading-xl">{articles.title}</h2>

        <AuthorInfo
          name={articles.authorName}
          image={articles.authorImage}
          date={articles.date}
        />

        <Image image={articles.image} width="800px" height="362px" />

        {articles.contentBlocks &&
          articles.contentBlocks.map((data) => (
            <ContentBlock
              key={uuidv4()}
              title={data.title}
              paragraphs={data.paragraphs}
            />
          ))}

        <WisdomParagraph />

        <Image image={articles.image} width="800px" height="362px" />

        <AdComponent />

        {articles.contentBlocks &&
          articles.contentBlocks.map((data) => (
            <ContentBlock
              key={uuidv4()}
              title={data.title}
              paragraphs={data.paragraphs}
            />
          ))}
      </div>
    )
  );
};

export default CardDetail;
