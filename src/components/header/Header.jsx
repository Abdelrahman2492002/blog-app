import { HomeLink, Logo, SearchBar } from "./index.js";

const Header = (props) => {
  return (
    <header className="mb-12 flex h-24 items-center">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Logo />
          <HomeLink />
          <SearchBar {...props} />
        </div>
      </div>
    </header>
  );
};

export default Header;
