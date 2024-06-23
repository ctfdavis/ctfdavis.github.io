import { WritingMetadata } from "@/app/types";
import { createWritingDate, writingMeta2Meta } from "@/app/utils";
import Wrap from "@/app/components/Wrap";
import FrontMatter from "@/app/writing/FrontMatter";
import Content from "./content.mdx";

export const writingMetadata: WritingMetadata = {
  published: createWritingDate({ year: 2024, month: 6, day: 24 }),
  title: "Thoughts on the Boox Note Air 3",
  description:
    "My review on the Boox Note Air 3 e-reader from a student's and programmer's perspective.",
  tags: ["review", "boox", "e-reader"],
};

export const metadata = writingMeta2Meta(writingMetadata);

export default function Page() {
  return (
    <Wrap>
      <>
        <FrontMatter writingMetadata={writingMetadata} />
        <hr />
        <Content />
      </>
    </Wrap>
  );
}
