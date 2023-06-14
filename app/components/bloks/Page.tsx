import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import type { PageStoryblok } from "~/types";

const Page = ({ blok }: PageStoryblok) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      {blok.body?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Page;
