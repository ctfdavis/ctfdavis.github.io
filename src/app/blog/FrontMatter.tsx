import { BlogMetadata } from "../types";
import { formatBlogDate } from "../utils";

export default function FrontMatter({
  blogMetadata,
}: {
  blogMetadata: BlogMetadata;
}) {
  return (
    <aside className="text-center">
      <p className="text-sm">
        Published: {formatBlogDate(blogMetadata.published)}
      </p>
      {blogMetadata.updated && (
        <p className="text-sm">
          Updated: {formatBlogDate(blogMetadata.updated)}
        </p>
      )}
      {blogMetadata.tags?.length ? (
        <div className="flex flex-wrap items-center justify-center text-sm gap-2">
          <span>Tags:&nbsp;</span>
          <ul className="__unwrap-content flex flex-wrap items-baseline gap-2">
            {blogMetadata.tags.map((tag, i) => (
              <li
                key={tag}
                className="text-xs uppercase p-1 border border-teal-50"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <h1>{blogMetadata.title}</h1>
      <p className="text-sm text-slate-300">{blogMetadata.description}</p>
    </aside>
  );
}
