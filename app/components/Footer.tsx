import { useLoaderData } from "@remix-run/react";
import { render } from "storyblok-rich-text-react-renderer";
import SocialShare from "./SocialShare";
import { StoryblokComponent } from "@storyblok/react";

type footerCol = {
  _uid: string;
  headline: string;
  footer_menu: any[];
};

const Footer = () => {
  const { footerText, footerColumns } = useLoaderData();

  return (
    <footer className="py-10 text-white bg-black">
      <div className="center-container">
        <div className="text-center">{render(footerText)}</div>
        {footerColumns.map((column: footerCol) => (
          <StoryblokComponent blok={column} key={column._uid} />
        ))}
        <SocialShare />
      </div>
    </footer>
  );
};

export default Footer;
