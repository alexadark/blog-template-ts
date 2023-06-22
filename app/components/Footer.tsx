import { useLoaderData } from "@remix-run/react";
import { render } from "storyblok-rich-text-react-renderer";

const Footer = () => {
  const { footerText } = useLoaderData();
  return (
    <footer className="py-10 ">
      <div className="center-container">
        <div>
          {render(footerText)} &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
