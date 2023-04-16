import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

type Props = {
  blok: {
    _uid: string;
    body: any[];
  };
};

const Page = ({ blok }: Props) => {
  return (
    <main {...storyblokEditable(blok)} key={blok._uid}>
      {blok.body?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
