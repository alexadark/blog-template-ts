import { Link } from "@remix-run/react";
import MainMenu from "./MainMenu";
import Headroom from "react-headroom";

const Header = () => {
  return (
    // <Headroom className="z-10">
    <header className="sticky top-0 z-40 flex-none w-full py-2 border-b backdrop-blur border-light border-opacity-10 bg-dark lg:bg-transparent">
      <div className="flex justify-between center-container">
        <Link to="/">
          <h1 className="text-3xl font-bold">Alexandra Spalato</h1>
        </Link>
        <div className="flex justify-between gap-5">
          {/* <MainMenu /> */}
          {/* <Search /> */}
        </div>
      </div>
      {/* <SearchForm /> */}
    </header>
    // </Headroom>
  );
};

export default Header;
