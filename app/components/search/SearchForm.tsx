import { useEffect, useRef } from "react";
import type { Dispatch, SetStateAction, FC } from "react";
import { useFetcher } from "@remix-run/react";
import clsx from "clsx";

type SetStateBool = Dispatch<SetStateAction<boolean>>;

interface SearchFormProps {
  setOpen: SetStateBool;
  setOpenOverlay: SetStateBool;
}

const SearchForm: FC<SearchFormProps> = ({ setOpen, setOpenOverlay }) => {
  let inputRef = useRef<HTMLInputElement>(null);
  const fetcher = useFetcher();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (fetcher.state !== "idle") {
      setOpenOverlay(true);
    } else {
      setOpenOverlay(false);
    }
    if (fetcher.type === "done") {
      setOpen(false);
    }
  }, [fetcher, setOpenOverlay, setOpen]);

  return (
    <fetcher.Form
      method="post"
      className="flex justify-between md:w-[90%] relative "
    >
      <input
        ref={inputRef}
        type="text"
        minLength={3}
        name="query"
        placeholder="Search..."
        className={clsx(
          "w-full h-12",
          "bg-dark-50",
          "border-0 border-l-8 border-teal-200 focus:border-secondary",
          "text-teal-100",
          "text-xl tracking-wide",
          "focus:outline-none focus:ring-transparent  placeholder-teal-100"
        )}
      />
    </fetcher.Form>
  );
};

export default SearchForm;
