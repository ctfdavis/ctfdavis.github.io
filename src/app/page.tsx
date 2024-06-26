import clsx from "clsx";
import BlogPreviewCard from "@/app/blog/BlogPreviewCard";
import blogList from "@/app/blog/blog-list";

const recentThree = blogList.slice(0, 3);

export default function Home() {
  return (
    <main className="flex flex-col xl:flex-row xl:h-full xl:items-center px-2 pb-8 w-5xl max-w-full mx-auto flex-grow">
      {recentThree.map((blog, i) => {
        return (
          <div
            key={blog.slug}
            className={clsx(
              "hover:opacity-100 transition-opacity duration-300",
              `${
                i
                  ? "mt-4 xl:mt-0" +
                    (i === 1 && recentThree.length === 3
                      ? " xl:order-first xl:opacity-75"
                      : " xl:opacity-55 xl:ml-12")
                  : recentThree.length === 3
                  ? "xl:ml-12"
                  : ""
              }`
            )}
          >
            <BlogPreviewCard blog={blog} />
          </div>
        );
      })}
    </main>
  );
}
