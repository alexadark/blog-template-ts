import MainMenu from "./MainMenu";
import SocialShare from "./SocialShare";

const SidebarContent = () => {
  return (
    <>
      <MainMenu />
      <div className="border-b border-dark-25 my-7" />
      <SocialShare />
    </>
  );
};

export default SidebarContent;
