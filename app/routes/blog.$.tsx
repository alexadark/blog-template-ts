import { json } from "@remix-run/node";
import { useStoryblokData } from "~/hooks";
import { getStoryblokApi } from "@storyblok/react";
import type { LoaderArgs } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";
import { getSeo } from "~/utils";

export const loader = async ({ params }: LoaderArgs) => {
  let slug = params["*"] ?? "home";
  const sbApi = getStoryblokApi();
  const resolveRelations = [
    "post.categories",
    "post.tags",
    "post.author",
    "post.comments",
  ];

  const { data } = await sbApi.get(`cdn/stories/blog/${slug}`, {
    version: "draft",
    resolve_relations: resolveRelations,
  });
  let page = Number.isNaN(Number(params.pageNumber))
    ? 1
    : Number(params.pageNumber);

  const { data: config } = await sbApi.get(`cdn/stories/config`, {
    version: "draft",
    resolve_links: "url",
  });

  let perPage = config?.story?.content?.posts_per_page;

  const { data: blog } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "blog/",
    per_page: perPage,
    page,
    is_startpage: 0,
    resolve_relations: resolveRelations,
  });

  let response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?token=${process.env.STORYBLOK_PREVIEW_TOKEN}&starts_with=blog/&version=draft/&per_page=20&is_startpage=false`
  );
  let total = await response?.headers.get("total");

  const seo = data?.story?.content?.seo_plugin;

  return json({
    story: data?.story,
    publishDate: data?.story?.published_at,
    id: data?.story?.id,
    name: data?.story?.name,
    posts: blog.stories,
    total,
    perPage,
    seo,
  });
};

export const meta: V2_MetaFunction = ({ data }) => {
  return getSeo(data.seo, data.story.name);
};

const PostPage = () => useStoryblokData();

export default PostPage;
