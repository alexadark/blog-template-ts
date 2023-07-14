import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { useLoaderData, Link } from "@remix-run/react";
import { format } from "date-fns";
import type { PostStoryblok } from "~/types";
import Categories from "~/components/Categories";
import Tags from "~/components/Tags";
import DisqusComments from "~/components/DisqusComments";
import SocialShare from "~/components/SocialShare";

const Post = ({ blok }: PostStoryblok) => {
  const { publishDate, id, name } = useLoaderData();

  const { headline, content, categories, image, tags, author, post_content } =
    blok;
  return (
    <>
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
        {post_content?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
        <div>
          <div className="flex justify-end">
            <Link
              to={`/${author.full_slug}`}
              className="text-sm font-semibold text-links"
            >
              Author . {author.name}
            </Link>
          </div>
        </div>
        <SocialShare />
      </article>
      <DisqusComments
        shortname="remix-blog"
        identifier={id}
        title={name}
        url={`${window.location.href}`}
      />
    </>
  );
};

export default Post;
