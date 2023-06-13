import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { useLoaderData, Link, useParams } from "@remix-run/react";
import { format } from "date-fns";
import type { PostStoryblok, CategoryStoryblok, TagStoryblok } from "~/types";

const Post = ({ blok }: PostStoryblok) => {
  const { publishDate, id, name } = useLoaderData();
  const slug = useParams()["*"];

  const { headline, content, categories, image, tags, author } = blok;
  return (
    <>
      <article
        {...storyblokEditable(blok)}
        key={blok._uid}
        className="container mx-auto max-w-[750px]"
      >
        <div>
          {/* <Date date={publishDate} /> */}
          {format(new Date(publishDate), "MMMM dd, yyyy")}
        </div>
        {image && (
          <img
            src={`${image?.filename}/m/1200x400/smart/filters:grayscale():quality(60)/`}
            alt=""
          />
        )}
        <h1>{headline}</h1>
        <div className="prose text-light max-w-none prose-headings:text-primary prose-img:rounded-xl ">
          {render(content)}
        </div>
        <div>
          <h3>Categories</h3>
          {categories?.map((c: CategoryStoryblok) => (
            <Link to={`/${c.full_slug}`} key={c._uid}>
              <span>{c.name}</span>
            </Link>
          ))}
          <h3>Tags</h3>
          {tags?.map((t: TagStoryblok) => (
            <Link to={`/${t.full_slug}`} key={t._uid}>
              <span>{t.name}</span>
            </Link>
          ))}
        </div>
        <h3>Author</h3>
        <div>{author.name}</div>
      </article>
    </>
  );
};

export default Post;
