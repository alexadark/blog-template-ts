import { useLoaderData } from "@remix-run/react";
import { storyblokEditable } from "@storyblok/react";
import type { TagStoryblok } from "~/types";
import PostsList from "../PostsList";

const Tag = ({ blok }: TagStoryblok) => {
  const { story } = useLoaderData();
  const filterQuery = {
    tags: {
      in_array: story.uuid,
    },
  };
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <div className="mb-10">
        <h1>Posts for:{blok.headline}</h1>
        {blok.description && <p>{blok.description}</p>}
      </div>
      <PostsList grid={blok.grid} filterQuery={filterQuery} />
    </div>
  );
};

export default Tag;
