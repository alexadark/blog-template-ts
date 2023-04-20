import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import type { PageStoryblok } from "../../../component-types-sb.d.ts";

const Page = ({ blok }: PageStoryblok) => {
  return (
    <main {...storyblokEditable(blok)} key={blok._uid}>
      {blok.body?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
