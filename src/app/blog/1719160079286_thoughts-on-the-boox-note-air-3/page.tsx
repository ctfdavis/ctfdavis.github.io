import Wrap from "@/app/components/Wrap";
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
