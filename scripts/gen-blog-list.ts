import fs from "fs";
import path from "path";
import { Blog, BlogMetadata } from "@/app/types";

let blogList: Blog[] = [];

const blogFolder = path.join(__dirname, "..", "src", "app", "blog");

const files = fs.readdirSync(blogFolder);

files.forEach((file) => {
  if (file.endsWith(".ts") || file.endsWith(".tsx") || file.endsWith(".scss")) {
    return;
  }

  const filePath = path.join(blogFolder, file, "metadata.ts");
  // check if file exists
  if (!fs.existsSync(filePath)) {
    return;
  }

  const metadata: BlogMetadata = require(filePath).blogMetadata;

  blogList.push({
    metadata,
    slug: file,
  });
});

// sort blogList by date in the metadata, then by slug
blogList.sort((a, b) => {
  if (a.metadata.published < b.metadata.published) {
    return 1;
  } else if (a.metadata.published > b.metadata.published) {
    return -1;
  } else {
    return a.slug.localeCompare(b.slug);
  }
});

fs.writeFileSync(
  path.join(__dirname, "..", "src", "app", "blog", "blog-list.ts"),
  `import { Blog } from "@/app/types";
${blogList
  .map(
    (blog) =>
      `import { blogMetadata as bm_${blog.slug.replace(
        /-/g,
        "_"
      )} } from "@/app/blog/${blog.slug}/metadata";`
  )
  .join("\n")}

const blogList: Blog[] = [
    ${blogList
      .map(
        (blog) =>
          `{
        "metadata": bm_${blog.slug.replace(/-/g, "_")},
        "slug": "${blog.slug}"
    }`
      )
      .join(",\n  ")}
]
export default blogList;
`
);
