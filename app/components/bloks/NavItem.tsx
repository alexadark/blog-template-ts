import { NavLink } from "@remix-run/react";
import { storyblokEditable } from "@storyblok/react";
import type { NavItemStoryblok } from "../../../component-types-sb.d.ts";

const NavItem = ({ blok }: NavItemStoryblok) => {
  const { label, link, _uid } = blok;

  return (
    <>
      {link.linktype === "story" ? (
        <NavLink
          key={_uid}
          to={`/${link.cached_url}`}
          {...storyblokEditable(blok)}
          className="menu-item"
        >
          {label}
        </NavLink>
      ) : (
        <a
          href={link.url}
          target={link.target}
          {...storyblokEditable(blok)}
          className="menu-item"
        >
          {label}
        </a>
      )}
    </>
  );
};

export default NavItem;
