import type { SeoStoryblok } from "~/types";

export function getSeo(seo: SeoStoryblok) {
  const {
    title,
    og_image,
    og_title,
    description,
    twitter_image,
    twitter_title,
    og_description,
    twitter_description,
  } = seo;

  return [
    { title },
    {
      property: "og:title",
      content: og_title,
    },
    {
      property: "og:image",
      content: og_image,
    },
    {
      property: "og:description",
      content: og_description,
    },
    {
      property: "twitter:image",
      content: twitter_image,
    },
    {
      property: "twitter:title",
      content: twitter_title,
    },
    {
      property: "twitter:description",
      content: twitter_description,
    },
    {
      name: "description",
      content: description,
    },
  ];
}
