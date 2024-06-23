import fs from "fs";
import path from "path";
import { Writing, WritingMetadata } from "@/app/types";

let writingList: Writing[] = [];

const writingFolder = path.join(__dirname, "..", "src", "app", "writing");

const files = fs.readdirSync(writingFolder);

files.forEach((file) => {
  if (file.endsWith(".ts") || file.endsWith(".tsx") || file.endsWith(".scss")) {
    return;
  }

  const filePath = path.join(writingFolder, file, "metadata.ts");
  // check if file exists
  if (!fs.existsSync(filePath)) {
    return;
  }

  const metadata: WritingMetadata = require(filePath).writingMetadata;

  writingList.push({
    metadata,
    slug: file,
  });
});

// sort writingList by date in the metadata, then by slug
writingList.sort((a, b) => {
  if (a.metadata.published < b.metadata.published) {
    return 1;
  } else if (a.metadata.published > b.metadata.published) {
    return -1;
  } else {
    return a.slug.localeCompare(b.slug);
  }
});

fs.writeFileSync(
  path.join(__dirname, "..", "src", "app", "writing", "writingList.ts"),
  `import { Writing } from "@/app/types";
${writingList
  .map(
    (writing) =>
      `import { writingMetadata as wm_${writing.slug.replace(
        /-/g,
        "_"
      )} } from "@/app/writing/${writing.slug}/page";`
  )
  .join("\n")}

const writingList: Writing[] = [
    ${writingList
      .map(
        (writing) =>
          `{
        "metadata": wm_${writing.slug.replace(/-/g, "_")},
        "slug": "${writing.slug}"
    }`
      )
      .join(",\n  ")}
]
export default writingList;
`
);
