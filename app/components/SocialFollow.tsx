import { useLoaderData } from "@remix-run/react";
import SocialItem from "./bloks/SocialItem";
import type { SocialItemStoryblok } from "~/types";

const SocialFollow = () => {
  const { socialItems } = useLoaderData();
  return (
    <div>
      {socialItems.map((item: SocialItemStoryblok) => (
        <SocialItem
          key={item._uid}
          blok={item}
          _uid={item._uid}
          component={"social-item"}
        />
      ))}
    </div>
  );
};

export default SocialFollow;
