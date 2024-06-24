import * as fs from "fs";
import path from "path";

const title = process.argv[2];

if (!title) {
  console.error("Please provide a title");
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9 ]/g, "")
  .replace(/\s+/g, "-");

const timestamp = new Date().getTime();
const folderName = `${timestamp}_${slug}`;

fs.mkdirSync(path.join(__dirname, "..", "public", folderName));
fs.mkdirSync(path.join(__dirname, "..", "src", "app", "blog", folderName));
fs.writeFileSync(
  path.join(__dirname, "..", "src", "app", "blog", folderName, "page.tsx"),
  `import Wrap from "@/app/components/Wrap";
import FrontMatter from "@/app/blog/FrontMatter";
import Content from "./content.mdx";
import { blogMetadata } from "./metadata";
export { metadata } from "./metadata";

export default function Page() {
  return (
    <Wrap>
      <>
        <FrontMatter blogMetadata={blogMetadata} />
        <hr />
        <Content />
      </>
    </Wrap>
  );
}
`
);
fs.writeFileSync(
  path.join(__dirname, "..", "src", "app", "blog", folderName, "content.mdx"),
  ``
);
fs.writeFileSync(
  path.join(__dirname, "..", "src", "app", "blog", folderName, "metadata.ts"),
  `import type { BlogMetadata } from "@/app/types";
import { createBlogDate, blogMeta2Meta } from "@/app/utils";

export const blogMetadata: BlogMetadata = {
  published: createBlogDate({ year: 2024, month: 6, day: 24 }),
  title: "${title}",
  description: "",
  tags: [],
};

export const metadata = blogMeta2Meta(blogMetadata);
`
);
