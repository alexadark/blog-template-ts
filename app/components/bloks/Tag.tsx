import { useLoaderData } from "@remix-run/react";
import { storyblokEditable } from "@storyblok/react";
import type { TagStoryblok, PostStoryblok } from "~/types";
import PostCard from "../PostCard";

const Tag = ({ blok }: TagStoryblok) => {
  const { postsByTag } = useLoaderData();
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <div className="mb-10">
        <h1>Posts for:{blok.headline}</h1>
        {blok.description && <p>{blok.description}</p>}
      </div>
      {postsByTag.map((p: PostStoryblok) => {
        return <PostCard post={p} key={p.content?._uid} grid={blok.grid} />;
      })}
    </div>
  );
};

export default Tag;
