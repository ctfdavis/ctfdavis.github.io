import { BlogMetadata } from "@/app/types";
import { createBlogDate, blogMeta2Meta } from "@/app/utils";

export const blogMetadata: BlogMetadata = {
  published: createBlogDate({ year: 2024, month: 6, day: 26 }),
  updated: createBlogDate({ year: 2024, month: 6, day: 27 }),
  title: "Thoughts on the Boox Note Air 3",
  description:
    "My review on the Boox Note Air 3 e-reader from a student's and programmer's perspective.",
  tags: ["review", "boox", "e-reader"],
};

export const metadata = blogMeta2Meta(blogMetadata);
