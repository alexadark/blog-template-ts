import { storyblokEditable } from "@storyblok/react";
import { useLoaderData } from "@remix-run/react";
import type { AllPostsStoryblok, PostStoryblok } from "~/types";
import { render } from "storyblok-rich-text-react-renderer";
import PostCard from "./PostCard";

const AllPosts = ({ blok }: AllPostsStoryblok) => {
  const { posts } = useLoaderData();
  console.log(posts);

  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <div className="mb-10">
        <h1>{blok.headline}</h1>
        <p>{render(blok.intro)}</p>
      </div>

      {posts?.map((p: PostStoryblok) => {
        const post = p.content;
        return <PostCard post={p} key={post._uid} />;
      })}
    </div>
  );
};

export default AllPosts;
