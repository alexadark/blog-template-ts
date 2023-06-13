import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useLoaderData } from "@remix-run/react";
import type { NavItemStoryblok } from "~/types";

const MainMenu = () => {
  let { headerNav: nav } = useLoaderData();

  return (
    <div className="" {...storyblokEditable(nav)}>
      {nav.map((nestedBlok: NavItemStoryblok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default MainMenu;
