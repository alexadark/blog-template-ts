import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }: any) => {
  return (
    <main {...storyblokEditable(blok)} key={blok._uid}>
      {blok.body?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
