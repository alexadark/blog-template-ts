import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import type {
  FooterColumnStoryblok,
  NavItemStoryblok,
} from "../../../component-types-sb.d.ts";

const FooterColumn = ({ blok }: FooterColumnStoryblok) => {
  const { headline, footer_menu } = blok;
  return (
    <div {...storyblokEditable(blok)}>
      <h3>{headline}</h3>
      <div className="">
        {footer_menu?.map((nestedBlok: NavItemStoryblok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
