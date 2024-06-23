import { WritingMetadata } from "@/app/types";
import { createWritingDate, writingMeta2Meta } from "@/app/utils";

export const writingMetadata: WritingMetadata = {
  published: createWritingDate({ year: 2024, month: 6, day: 24 }),
  title: "Thoughts on the Boox Note Air 3",
  description:
    "My review on the Boox Note Air 3 e-reader from a student's and programmer's perspective.",
  tags: ["review", "boox", "e-reader"],
};

export const metadata = writingMeta2Meta(writingMetadata);
