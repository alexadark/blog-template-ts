import type { CategoryStoryblok } from "~/types";
import { Link } from "@remix-run/react";

type CategoriesProps = {
  categories: CategoryStoryblok[];
} & React.HTMLAttributes<HTMLDivElement>;

const Categories = ({ categories, ...props }: CategoriesProps) => {
  return (
    <div {...props}>
      Categories:{" "}
      {categories?.map((c: CategoryStoryblok) => (
        <Link to={`/${c.full_slug}`} key={c._uid}>
          <span className="button">{c.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
