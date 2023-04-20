import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import type { ContentStoryblok } from "../../../component-types-sb.d.ts";

const Content = ({ blok }: ContentStoryblok) => {
  const { _uid, text } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className="prose center-container"
    >
      {render(text)}
    </div>
  );
};

export default Content;
