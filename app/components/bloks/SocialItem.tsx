import { storyblokEditable } from "@storyblok/react";
import type { SocialItemStoryblok } from "../../../component-types-sb.d.ts";

const SocialItem = ({ blok }: SocialItemStoryblok) => {
  const { icon, url } = blok;
  return (
    <a
      href={url.cached_url}
      target="_blank"
      rel="noopener noreferrer"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <img src={`${icon.filename}/m/30x30`} alt={icon.alt} />
    </a>
  );
};

export default SocialItem;
