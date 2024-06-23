import * as NextMdx from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

const withMDX = NextMdx.default({
  options: {
    rehypePlugins: [rehypeHighlight],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
