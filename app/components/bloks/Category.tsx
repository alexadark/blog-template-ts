import { useLoaderData } from "@remix-run/react";
import { storyblokEditable } from "@storyblok/react";
import type { CategoryStoryblok, PostStoryblok } from "~/types";
import PostCard from "./PostCard";

const Category = ({ blok }: CategoryStoryblok) => {
  const { postsByCategory } = useLoaderData();

  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <div className="mb-10">
        <h1>Posts for:{blok.headline}</h1>
        {blok.description && <p>{blok.description}</p>}
      </div>
      {postsByCategory.map((p: PostStoryblok) => {
        return <PostCard post={p} key={p.content._uid} />;
      })}
    </div>
  );
};

export default Category;
