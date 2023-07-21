import { useLoaderData, Link } from "@remix-run/react";
import { getStoryblokApi } from "@storyblok/react";
import type { LoaderArgs } from "@remix-run/node";
import type { StoryblokStory } from "storyblok-generate-ts";
import type { PostStoryblok, PageStoryblok } from "~/types";

import PostCard from "~/components/PostCard";

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  const filter_query = {
    __or: [
      {
        body: {
          like: `*${query}*`,
        },
      },
      {
        headline: {
          like: `*${query}*`,
        },
      },
      {
        content: {
          like: `*${query}*`,
        },
      },
    ],
  };
  const resolveRelations = ["post.categories"];
  const { data } = await getStoryblokApi().get(`cdn/stories`, {
    version: "draft",
    filter_query,
    is_startpage: 0,
    resolve_relations: resolveRelations,
  });
  return { stories: data.stories };
};

const SearchResults = () => {
  const { stories } = useLoaderData();
  const pagesResults = stories.filter(
    (s: StoryblokStory<any>) => s.content.component === "page"
  );
  const postsResults = stories.filter(
    (s: StoryblokStory<any>) => s.content.component === "post"
  );
  if (stories.length === 0) return <h1>No results found</h1>;
  return (
    <>
      {pagesResults.length > 0 && <h3>Pages</h3>}
      {pagesResults?.map((page: PageStoryblok) => {
        return (
          <h4 key={page.id}>
            <Link
              to={`/${page.full_slug}`}
              className="text-links hover:text-secondary transition-colors duration-300 text-xl"
            >
              {page.name}
            </Link>
          </h4>
        );
      })}

      {postsResults.length > 0 && <h3>Posts</h3>}
      {postsResults?.map((post: PostStoryblok) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </>
  );
};

export default SearchResults;
