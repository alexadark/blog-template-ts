import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useLoaderData, NavLink } from "@remix-run/react";
import type { NavItemStoryblok } from "~/types";

const MainMenu = () => {
  let { headerNav: nav } = useLoaderData();

  return (
    <nav className="flex flex-col space-y-3" {...storyblokEditable(nav)}>
      <NavLink to="/" className="menu-item">
        Home
      </NavLink>
      {nav.map((nestedBlok: NavItemStoryblok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </nav>
  );
};

export default MainMenu;
