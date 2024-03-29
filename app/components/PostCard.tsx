import { Link } from "@remix-run/react";
import type { PostStoryblok } from "~/types";
import Categories from "./Categories";
import { format } from "date-fns";

interface PostCardType {
  post: PostStoryblok;
  grid?: boolean;
}

const PostCard = ({ post, grid }: PostCardType) => {
  const { headline, teaser, categories, image } = post.content;

  return (
    <article
      className={`${
        !grid && "mb-7"
      } bg-dark-50 border border-dark-25  px-5 py-7 rounded-lg shadow-sm translate duration-500 hover:-translate-y-1 hover:shadow-primary relative`}
    >
      <Link to={`/${post.full_slug}`}>
        <div
          className={` ${
            grid ? "space-y-3" : "flex flex-wrap"
          } justify-between items-center gap-3 mb-4`}
        >
          <div className="mr-5 text-lg font-bold text-primary">
            {format(new Date(post.created_at), "MMMM dd, yyyy")}
          </div>
          <div className="">
            <Categories categories={categories} />
          </div>
        </div>
        <div className={`${!grid && "md:flex justify-between gap-5"}`}>
          {image && (
            <div className="flex items-center">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={`${image?.filename}/m/400x200/smart/filters:quality(60)/`}
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={`${image?.filename}/m/767x380/smart/filters:quality(60)/`}
                />
                <source
                  media="(max-width: 400px)"
                  srcSet={`${image?.filename}/m/400x200/smart/filters:quality(60)/`}
                />
                <img
                  src={`${image?.filename}/m/750x400/smart/filters:quality(60)/`}
                  alt={image?.alt}
                  className="rounded-lg"
                />
              </picture>
            </div>
          )}
          <div>
            <h2 className="font-bold text-2xl mb-2">{headline}</h2>
            <p>{teaser}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
