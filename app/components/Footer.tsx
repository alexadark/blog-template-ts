import { useLoaderData } from "@remix-run/react";
import { render } from "storyblok-rich-text-react-renderer";
import SocialShare from "./SocialShare";

const Footer = () => {
  const { footerText } = useLoaderData();
  return (
    <footer className="py-10">
      <div className="center-container">
        <div className="text-center">{render(footerText)}</div>
        <SocialShare />
      </div>
    </footer>
  );
};

export default Footer;
