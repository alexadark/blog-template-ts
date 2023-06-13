import MainMenu from "./MainMenu";

const LeftSidebar = () => {
  return (
    <aside className="site-nav lg:block fixed z-30 inset-0 top-[61px] transition-all duration-300 left-[-240px] lg:left-[max(0px,calc(50%-45rem))] right-auto w-[14.5rem] pb-10 px-6 overflow-y-auto border-r border-r-outline bg-dark ">
      <MainMenu />
      <h3>Hello</h3>
    </aside>
  );
};

export default LeftSidebar;
