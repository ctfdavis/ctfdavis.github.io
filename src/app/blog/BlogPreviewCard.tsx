import Link from "next/link";
import { Blog } from "@/app/types";
import { formatBlogDate } from "@/app/utils";

export default function BlogPreviewCard({ blog }: { blog: Blog }) {
  return (
    <div className="flex flex-col xl:min-h-96 w-96 max-w-full pt-16 pb-12 px-6 text-center">
      <aside className="text-sm">
        <div className="text-stone-300">
          {formatBlogDate(blog.metadata.published)}
        </div>
        {blog.metadata.tags?.length ? (
          <div className="mt-3 uppercase text-xs font-medium w-fit p-1 mx-auto text-stone-200 border border-teal-50">
            {blog.metadata.tags[0]}
          </div>
        ) : null}
      </aside>
      <h3 className="mt-4 text-2xl leading-relaxed">{blog.metadata.title}</h3>
      <p className="mt-4 pb-12 text-stone-400">{blog.metadata.description}</p>
      <Link
        className="mt-auto mx-auto py-2 w-24 text-sm border-b border-white"
        href={`/blog/${blog.slug}`}
      >
        Read →
      </Link>
    </div>
  );
}
