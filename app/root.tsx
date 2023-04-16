import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import tailwind from "./styles/tailwind-build.css";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";
import { json, redirect } from "@remix-run/node";
import Page from "./components/bloks/Page";
import Content from "./components/bloks/Content";

const isServer = typeof window === "undefined";

const accessToken = isServer
  ? process.env.STORYBLOK_PREVIEW_TOKEN
  : //@ts-ignore
    window.env.STORYBLOK_PREVIEW_TOKEN;

export const loader = async (args: LoaderArgs) => {
  // const sbApi = getStoryblokApi();
  // const { data: config } = await sbApi.get(`cdn/stories/config`, {
  //   version: "draft",
  //   resolve_links: "url",
  // });
  return json({
    env: {
      STORYBLOK_PREVIEW_TOKEN: process.env.STORYBLOK_PREVIEW_TOKEN,
    },
    // headerNav: config?.story?.content?.header_nav,
    // socialItems: config?.story?.content?.social_items,
    // footerText: config?.story?.content?.footer_text,
    // footerColumns: config?.story?.content?.footer_columns,
  });
};

const components = {
  content: Content,
  // "last-posts": LastPosts,
  page: Page,
  // post: Post,
  // "nav-item": MenuItem,
  // "all-posts": AllPosts,
  // "all-categories": AllCategories,
  // category: Category,
  // tag: Tag,
  // "social-item": SocialItem,
  // "footer-column": FooterColumn,
};

storyblokInit({
  accessToken,
  use: [apiPlugin],
  components,
});
export default function App() {
  const { env } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
export const links = () => {
  return [{ rel: "stylesheet", href: tailwind }];
};
