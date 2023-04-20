import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useLoaderData } from "@remix-run/react";
import type { NavItemStoryblok } from "../../component-types-sb.d.ts";

const MainMenu = () => {
  let { headerNav: nav } = useLoaderData();

  return (
    <div className="h-menu" {...storyblokEditable(nav)}>
      {nav.map((nestedBlok: NavItemStoryblok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default MainMenu;
