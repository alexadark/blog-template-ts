import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
