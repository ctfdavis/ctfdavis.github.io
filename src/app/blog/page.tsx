import Link from "next/link";
import { Metadata } from "next";
import clsx from "clsx";
import blogList from "./blog-list";
import { formatBlogDate } from "@/app/utils";
import config from "@/app/config";

export const metadata: Metadata = {
  ...config.siteMeta.blog,
};

export default function Blog() {
  return (
    <ol className="list-none mt-10 px-7 w-full max-w-[60rem] mx-auto">
      {blogList.map((blog, i) => {
        return (
          <li
            key={blog.slug}
            className={clsx(
              "flex flex-col font-light xl:flex-row xl:items-center w-full",
              i && "mt-12 xl:mt-6"
            )}
          >
            <div className="text-stone-400 text-sm xl:text-base">
              {formatBlogDate(blog.metadata.published)}
            </div>
            {blog.metadata.tags?.length && (
              <div className="uppercase text-xs w-fit border border-teal-50 p-1 mt-2 xl:ml-6 xl:mt-0">
                {blog.metadata.tags[0]}
              </div>
            )}
            <Link
              href={`/blog/${blog.slug}`}
              className="underline mt-2 text-lg font-light xl:text-right xl:ml-auto xl:mt-0 xl:max-w-[70%]"
            >
              {blog.metadata.title}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
