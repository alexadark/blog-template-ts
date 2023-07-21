import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";
import tailwind from "./styles/tailwind.css";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";
import { json, redirect } from "@remix-run/node";
import {
  Page,
  Content,
  Post,
  SocialItem,
  Category,
  NavItem,
  Tag,
  LastPosts,
  AllPosts,
  Author,
  CodeBlock,
} from "./components/bloks";
import Layout from "./components/Layout";

const isServer = typeof window === "undefined";

const accessToken = isServer
  ? process.env.STORYBLOK_PREVIEW_TOKEN
  : //@ts-ignore
    window.env.STORYBLOK_PREVIEW_TOKEN;

export const action = async ({ request }: ActionArgs) => {
  const body = await request.formData();
  return redirect(`/search-results?query=${body.get("query")}`);
};

export const loader = async (args: LoaderArgs) => {
  const sbApi = getStoryblokApi();
  const { data: config } = await sbApi.get(`cdn/stories/config`, {
    version: "draft",
    resolve_links: "url",
  });
  return json({
    env: {
      STORYBLOK_PREVIEW_TOKEN: process.env.STORYBLOK_PREVIEW_TOKEN,
    },
    headerNav: config?.story?.content?.header_nav,
    socialItems: config?.story?.content?.social_items,
    footerText: config?.story?.content?.footer_text,
  });
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "My Super New Blog | Remix" },
    {
      property: "og:title",
      content: "Very cool blog",
    },
    {
      name: "description",
      content: "This blog is the best",
    },
  ];
};

const components = {
  content: Content,
  "last-posts": LastPosts,
  page: Page,
  post: Post,
  "nav-item": NavItem,
  "all-posts": AllPosts,
  category: Category,
  tag: Tag,
  "social-item": SocialItem,
  author: Author,
  "code-block": CodeBlock,
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
        <Layout>
          <Outlet />
        </Layout>
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
