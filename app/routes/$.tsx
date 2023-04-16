import { json } from "@remix-run/node";
import { getStoryblokApi } from "@storyblok/react";
import { useStoryblokData } from "~/hooks";
import type { LoaderArgs } from "@remix-run/node";

export const loader = async ({ params }: LoaderArgs) => {
  let slug = params["*"] ?? "home";

  const sbApi = getStoryblokApi();

  const resolveRelations = ["post.categories", "post.tags", "post.author"];

  const { data } = await sbApi.get(`cdn/stories/${slug}`, {
    version: "draft",
    resolve_relations: resolveRelations,
  });

  const numberOfPosts = data.story.content.body?.find(
    (item: { component: string }) => item.component === "last-posts"
  )?.number_of_posts;

  const { data: blog } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "blog/",
    per_page: 20,
    is_startpage: 0,
  });

  const { data: lastPosts } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "blog/",
    per_page: numberOfPosts,
    is_startpage: 0,
    resolve_relations: resolveRelations,
  });

  return json({
    story: data?.story,
    posts: blog.stories,
    lastPosts: lastPosts.stories,
  });
};

const RootPage = () => useStoryblokData();

export default RootPage;
