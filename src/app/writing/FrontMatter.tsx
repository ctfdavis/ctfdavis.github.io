import { WritingMetadata } from "../types";
import { formatWritingDate } from "../utils";

export default function FrontMatter({
  writingMetadata,
}: {
  writingMetadata: WritingMetadata;
}) {
  return (
    <aside className="text-center">
      <p className="text-sm">
        Published: {formatWritingDate(writingMetadata.published)}
      </p>
      {writingMetadata.updated && (
        <p className="text-sm">
          Updated: {formatWritingDate(writingMetadata.updated)}
        </p>
      )}
      {writingMetadata.tags?.length ? (
        <div className="flex flex-wrap items-center justify-center text-sm gap-2">
          <span>Tags:&nbsp;</span>
          <ul className="__unwrap-content flex flex-wrap items-baseline gap-2">
            {writingMetadata.tags.map((tag, i) => (
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
      <h1>{writingMetadata.title}</h1>
      <p className="text-sm text-slate-300">{writingMetadata.description}</p>
    </aside>
  );
}
