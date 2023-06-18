import { Link } from "@remix-run/react";
import type { PostStoryblok } from "~/types";
import Categories from "../Categories";
import { format } from "date-fns";

const PostCard = ({ post }: PostStoryblok) => {
  const { headline, teaser, categories, image } = post.content;

  return (
    <article className="mb-7 bg-dark-50 border border-dark-25  px-5 pt-14 pb-10 rounded-lg shadow-sm translate duration-500 hover:-translate-y-1 hover:shadow-primary relative">
      <Link to={`/${post.full_slug}`}>
        <div className="mr-5 text-lg font-bold text-primary absolute top-3 left-5">
          {format(new Date(post.created_at), "MMMM dd, yyyy")}
        </div>
        <div className="flex justify-between gap-5">
          {image && (
            <div className="flex items-center">
              <img
                src={`${image?.filename}/m/300x160/smart/filters:quality(60)/`}
                alt={image?.alt}
                className="rounded-lg"
              />
            </div>
          )}
          <div>
            <div className="absolute right-5 top-5">
              <Categories categories={categories} />
            </div>
            <h2 className="font-bold text-2xl mb-2">{headline}</h2>
            <p>{teaser}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
