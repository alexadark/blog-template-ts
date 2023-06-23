import { storyblokEditable } from "@storyblok/react";
import { useLoaderData } from "@remix-run/react";
import type { AllPostsStoryblok, PostStoryblok } from "~/types";
import { render } from "storyblok-rich-text-react-renderer";
import PostCard from "./PostCard";
import { Link } from "@remix-run/react";

const AllPosts = ({ blok }: AllPostsStoryblok) => {
  const { posts } = useLoaderData();
  const { _uid, headline, intro, grid } = blok;
  return (
    <div {...storyblokEditable(blok)} key={_uid}>
      <div className="mb-10">
        <h1>{headline}</h1>
        <p>{render(intro)}</p>
      </div>

      <div className={grid && "grid grid-cols-2 gap-5"}>
        {posts?.map((p: PostStoryblok) => {
          const post = p.content;
          return <PostCard post={p} key={post._uid} grid={grid} />;
        })}
      </div>
    </div>
  );
};

export default AllPosts;
