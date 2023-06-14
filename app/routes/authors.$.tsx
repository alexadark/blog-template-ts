import { json } from "@remix-run/node";
import { useStoryblokData } from "~/hooks";
import { getStoryblokApi } from "@storyblok/react";
import type { LoaderArgs } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";
import { getSeo } from "~/utils";

export const loader = async ({ params }: LoaderArgs) => {
  let slug = params["*"] ?? "home";
  const sbApi = getStoryblokApi();
  const resolveRelations = ["post.categories", "post.tags", "post.author"];

  const { data } = await sbApi.get(`cdn/stories/authors/${slug}`, {
    version: "draft",
  });

  const { data: authors } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "authors/",
    is_startpage: 0,
  });

  const seo = data?.story?.content?.seo_plugin;

  const { data: postsByAuthor } = await sbApi.get(`cdn/stories/`, {
    version: "draft",
    starts_with: "blog/",
    is_startpage: 0,
    resolve_relations: resolveRelations,
    filter_query: {
      authors: {
        in_array: data.story.uuid,
      },
    },
  });
  console.log("pbyh", postsByAuthor, "story", data?.story);
  return json({
    story: data?.story,
    postsByAuthor: postsByAuthor?.stories,
    categories: authors?.stories,
    seo,
  });
};

export const meta: V2_MetaFunction = ({ data }) => {
  return getSeo(data.seo, data.story.name);
};

const AuthorPage = () => useStoryblokData();

export default AuthorPage;
