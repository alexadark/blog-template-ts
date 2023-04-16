import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { useLoaderData, Link, useParams } from "@remix-run/react";

import { format } from "date-fns";

interface Category {
  name: string;
  full_slug: string;
  _uid: string;
}

interface Tag {
  name: string;
  full_slug: string;
  _uid: string;
}

interface sbComponentProps {
  _uid: string;
  component: string;
  [key: string]: any;
}

interface PostProps {
  blok: {
    _uid: string;
    headline: string;
    content: any;
    categories: Category[];
    author: {
      name: string;
    };
    image: {
      filename: string;
    };
    tags: Tag[];
  };
}

const Post = ({ blok }: PostProps) => {
  const { publishDate, id, name } = useLoaderData();
  const slug = useParams()["*"];

  const { headline, content, categories, image, tags, author } = blok;
  return (
    <>
      <article {...storyblokEditable(blok)} key={blok._uid}>
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
        {render(content)}
        <div>
          <h3>Categories</h3>
          {categories?.map((c: Category) => (
            <Link to={`/${c.full_slug}`} key={c._uid}>
              <span>{c.name}</span>
            </Link>
          ))}
          <h3>Tags</h3>
          {tags?.map((t: Tag) => (
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
