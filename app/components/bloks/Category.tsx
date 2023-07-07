import { useLoaderData } from "@remix-run/react";
import { storyblokEditable } from "@storyblok/react";
import type { CategoryStoryblok } from "~/types";
import PostsList from "../PostsList";

const Category = ({ blok }: CategoryStoryblok) => {
  const { story } = useLoaderData();
  const filterQuery = {
    categories: {
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

export default Category;
