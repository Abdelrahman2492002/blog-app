import Loading from "../common/Loading";
import Card from "./Card";

const CardList = ({ error, loading, articles }) => {
  return (
    <>
      {error ? (
        <div className="text-red-500 col-span-full text-center">
          <h1 className="text-heading-l">Error: {error}</h1>
        </div>
      ) : loading ? (
        <Loading />
      ) : articles && articles.length > 0 ? (
        articles.map((article) => (
          <Card
            id={article.id}
            key={article.id}
            category={article.category}
            title={article.title}
            authorName={article.author.name}
            authorImage={article.author.image}
            date={article.author.date}
            image={article.image}
            contentBlocks={article.contentBlocks}
          />
        ))
      ) : (
        <p className="col-span-full text-center text-heading-l">
          No articles found.
        </p>
      )}
    </>
  );
};

export default CardList;
