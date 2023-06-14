import { useLoaderData, Link } from "@remix-run/react";
import { storyblokEditable } from "@storyblok/react";
import type { AuthorStoryblok, PostStoryblok } from "~/types";

const Author = ({ blok }: AuthorStoryblok) => {
  const { postsByAuthor, story } = useLoaderData();
  console.log(postsByAuthor, story);

  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h1>Posts from: {story.name}</h1>
      {blok.bio && <p>{blok.bio}</p>}
      {postsByAuthor?.map((p: PostStoryblok) => {
        return (
          <article key={p._uid}>
            <Link to={`/blog/${p.slug}`}>
              <h2>{p.content.headline}</h2>
            </Link>
            <div>{p.content.teaser}</div>
          </article>
        );
      })}
    </div>
  );
};

export default Author;
