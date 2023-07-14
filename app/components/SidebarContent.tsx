import MainMenu from "./MainMenu";
import SocialFollow from "./SocialFollow";

const SidebarContent = () => {
  return (
    <>
      <MainMenu />
      <div className="border-b border-dark-25 my-7" />
      <SocialFollow />
    </>
  );
};

export default SidebarContent;
