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
console.log(folderName);

fs.mkdirSync(path.join(__dirname, "..", "src", "app", "writing", folderName));
fs.writeFileSync(
  path.join(__dirname, "..", "src", "app", "writing", folderName, "page.tsx"),
  `import { WritingMetadata } from "@/app/types";
import { createWritingDate, writingMeta2Meta } from "@/app/utils";
import Wrap from "@/app/components/Wrap";
import FrontMatter from "@/app/writing/FrontMatter";
import Content from "./content.mdx";

export const writingMetadata: WritingMetadata = {
  published: createWritingDate({ year: ${new Date().getFullYear()}, month: ${
    new Date().getMonth() + 1
  }, day: ${new Date().getDate()} }),
  title: "${title}",
  description: "",
  tags: [],
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
`
);
fs.writeFileSync(
  path.join(
    __dirname,
    "..",
    "src",
    "app",
    "writing",
    folderName,
    "content.mdx"
  ),
  ``
);
