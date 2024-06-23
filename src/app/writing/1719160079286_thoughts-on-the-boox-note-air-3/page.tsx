import Wrap from "@/app/components/Wrap";
import FrontMatter from "@/app/writing/FrontMatter";
import Content from "./content.mdx";
import { writingMetadata } from "./metadata";
export { metadata } from "./metadata";

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
