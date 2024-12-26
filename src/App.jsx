import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import CardDetail from "./components/cardDetail/CardDetail";
import Home from "./components/pages/Home";
import { useDataApi } from "./components/useDataApi";
import NoPage from "./components/pages/NoPage";
function App() {
  const {
    articles,
    searchItems,
    setSearchItems,
    isLoading,
    error,
    setLimit,
    limit,
  } = useDataApi("");

  return (
    <BrowserRouter>
      <div className="font-work">
        <Header articles={articles} setSearchItems={setSearchItems} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                articles={searchItems}
                searchItems={searchItems}
                loading={isLoading}
                error={error}
                setLimit={setLimit}
                limit={limit}
              />
            }
          />
          <Route path=":id" element={<CardDetail />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
