import { useLoaderData } from "@remix-run/react";
import SocialItem from "./bloks/SocialItem";
import type { SocialItemStoryblok } from "~/types";

const SocialShare = () => {
  const { socialItems } = useLoaderData();
  return (
    <div className="flex justify-center gap-3">
      {socialItems.map((item: SocialItemStoryblok) => (
        <SocialItem key={item._uid} blok={item} />
      ))}
    </div>
  );
};

export default SocialShare;
