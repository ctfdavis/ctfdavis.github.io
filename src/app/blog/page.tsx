import Link from "next/link";
import { Metadata } from "next";
import clsx from "clsx";
import writingList from "./blog-list";
import { formatBlogDate } from "@/app/utils";
import config from "@/app/config";

export const metadata: Metadata = {
  ...config.siteMeta.writing,
};

export default function Writing() {
  return (
    <ol className="list-none mt-10 px-7 w-full max-w-[60rem] mx-auto">
      {writingList.map((writing, i) => {
        return (
          <li
            key={writing.slug}
            className={clsx(
              "flex flex-col font-light xl:flex-row xl:items-center w-full",
              i && "mt-12 xl:mt-6"
            )}
          >
            <div className="text-stone-400 text-sm xl:text-base">
              {formatBlogDate(writing.metadata.published)}
            </div>
            {writing.metadata.tags?.length && (
              <div className="uppercase text-xs w-fit border border-teal-50 p-1 mt-2 xl:ml-6 xl:mt-0">
                {writing.metadata.tags[0]}
              </div>
            )}
            <Link
              href={`/writing/${writing.slug}`}
              className="underline mt-2 text-lg font-light xl:text-right xl:ml-auto xl:mt-0 xl:max-w-[70%]"
            >
              {writing.metadata.title}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
