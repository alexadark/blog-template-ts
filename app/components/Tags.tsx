import type { TagStoryblok } from "~/types";
import { Link } from "@remix-run/react";

type TagsProps = {
  tags: TagStoryblok[];
} & React.HTMLAttributes<HTMLDivElement>;

const Tags = ({ tags, ...props }: TagsProps) => {
  return (
    <div {...props}>
      {tags?.map((t: TagStoryblok) => (
        <Link to={`/${t.full_slug}`} key={t._uid}>
          <span className="text-sm button">{t.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Tags;
