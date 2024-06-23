import Link from "next/link";
import { Writing } from "./types";
import { formatWritingDate } from "./utils";

export default function WritingPreviewCard({ writing }: { writing: Writing }) {
  return (
    <div className="flex flex-col xl:min-h-96 w-96 max-w-full pt-16 pb-12 px-6 text-center">
      <aside className="text-sm">
        <div className="text-stone-300">
          {formatWritingDate(writing.metadata.published)}
        </div>
        {writing.metadata.tags?.length ? (
          <div className="mt-3 uppercase text-xs font-medium w-fit p-1 mx-auto text-stone-200 border border-teal-50">
            {writing.metadata.tags[0]}
          </div>
        ) : null}
      </aside>
      <h3 className="mt-4 text-2xl leading-relaxed">
        {writing.metadata.title}
      </h3>
      <p className="mt-4 pb-12 text-stone-400">
        {writing.metadata.description}
      </p>
      <Link
        className="mt-auto mx-auto py-2 w-24 text-sm border-b border-white"
        href={`/writing/${writing.slug}`}
      >
        Read →
      </Link>
    </div>
  );
}
