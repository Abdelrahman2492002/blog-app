import { useEffect, useState } from "react";
import CardList from "../siteBody/CardList";
import clsx from "clsx";

const Home = ({ articles, loading, error, setLimit, limit }) => {
  const [hasMore, setHasMore] = useState(true);

  const pageSizeHandler = () => {
    if (!articles.length) return;
    setLimit((prev) => prev + 9);
  };

  useEffect(() => {
    if (articles.length < limit) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  }, [articles, limit]);

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-1 items-center justify-center gap-5 px-4 sm:grid-cols-[repeat(2,minmax(0,_auto))] xl:grid-cols-[repeat(3,minmax(0,_auto))]">
        <CardList articles={articles} loading={loading} error={error} />
      </div>
      <button
        className={clsx(
          "mx-auto mt-6 block w-fit rounded-[6px] border border-[#696A754D] px-5 py-3",
          {
            "cursor-not-allowed opacity-50": !hasMore,
          },
        )}
        onClick={pageSizeHandler}
        disabled={!hasMore}
        type="button"
      >
        Load More
      </button>
    </main>
  );
};

export default Home;
