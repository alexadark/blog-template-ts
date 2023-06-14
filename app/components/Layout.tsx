import Header from "./Header";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <LeftSidebar />
        <main className="pt-5 pb-10 center-container">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
