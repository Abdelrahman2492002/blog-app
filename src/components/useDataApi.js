import { useEffect, useState } from "react";

export const useDataApi = (id = "") => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const [limit, setLimit] = useState(9);

  const getData = async () => {
    try {
      const url = id
        ? `http://localhost:3000/articles/${id}`
        : `http://localhost:3000/articles?_limit=${limit}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error getting articles");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message || "Network error occurred");
    }
  };

  useEffect(() => {
    setLoading(true);

    getData()
      .then((data) => {
        setArticles(data);
        setSearchItems(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, limit]);

  return {
    articles,
    setArticles,
    searchItems,
    setSearchItems,
    isLoading,
    error,
    setLimit,
    limit,
  };
};
