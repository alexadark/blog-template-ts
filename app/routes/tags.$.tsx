import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";
import { getSeo } from "~/utils";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

export const loader = async ({ params }: LoaderArgs) => {
  let slug = params["*"] ?? "home";

  const resolveRelations = ["post.categories", "post.tags", "post.author"];
  const sbApi = getStoryblokApi();

  const { data } = await getStoryblokApi().get(`cdn/stories/tags/${slug}`, {
    version: "draft",
  });

  const { data: postsByTag } = await sbApi.get(`cdn/stories/`, {
    version: "draft",
    starts_with: "blog/",
    is_startpage: 0,
    resolve_relations: resolveRelations,
    filter_query: {
      tags: {
        in_array: data.story.uuid,
      },
    },
  });

  return json({
    story: data?.story,
    postsByTag: postsByTag?.stories,
  });
};

export const meta: V2_MetaFunction = ({ data }) => {
  return getSeo(data.seo, data.story.name);
};

const TagPage = () => {
  let { story } = useLoaderData();
  story = useStoryblokState(story);

  return (
    <div>
      <StoryblokComponent blok={story.content} />
    </div>
  );
};

export default TagPage;
