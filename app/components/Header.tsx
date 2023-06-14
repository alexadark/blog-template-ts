import { Link } from "@remix-run/react";
import SlideSidebar from "./SlideSidebar";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 flex-none w-full py-3 border-b backdrop-blur border-light border-opacity-10 bg-dark lg:bg-transparent">
      <div className="container flex justify-between mx-auto align-center px-7 xl:px-0">
        <Link to="/">
          <h1 className="my-0 text-3xl font-bold">Alexandra Spalato</h1>
        </Link>
        <div className="flex justify-between gap-5">
          <SlideSidebar className="mt-2 xl:hidden" />
          {/* <Search /> */}
        </div>
      </div>
      {/* <SearchForm /> */}
    </header>
  );
};

export default Header;
