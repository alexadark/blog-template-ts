import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { useLoaderData, Link, useParams } from "@remix-run/react";
import { format } from "date-fns";
import type { PostStoryblok, TagStoryblok } from "~/types";
import Categories from "~/components/Categories";
import Tags from "~/components/Tags";

const Post = ({ blok }: PostStoryblok) => {
  const { publishDate, id, name } = useLoaderData();
  const slug = useParams()["*"];

  const { headline, content, categories, image, tags, author } = blok;
  return (
    <article {...storyblokEditable(blok)} key={blok._uid} className="">
      <div className="flex flex-wrap justify-between align-middle mb-7">
        <div className="mr-5 text-lg font-bold text-primary">
          {format(new Date(publishDate), "MMMM dd, yyyy")}
        </div>
        <Categories categories={categories} className="space-x-2" />
      </div>
      {image && (
        <img
          src={`${image?.filename}/m/800x300/smart/filters:grayscale():quality(60)/`}
          alt={image?.alt}
        />
      )}
      <h1>{headline}</h1>
      <Tags tags={tags} className="space-x-2" />
      <div className="content">{render(content)}</div>
      <div>
        <h3>Tags</h3>
        {tags?.map((t: TagStoryblok) => (
          <Link to={`/${t.full_slug}`} key={t._uid}>
            <span>{t.name}</span>
          </Link>
        ))}
        <div className="flex justify-end">
          <Link
            to={`/${author.full_slug}`}
            className="text-sm font-semibold text-links"
          >
            Author . {author.name}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Post;
