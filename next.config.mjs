import * as NextMdx from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import rehypeExternalLinks from "rehype-external-links";

const withMDX = NextMdx.default({
  options: {
    rehypePlugins: [
      rehypeHighlight,
      [
        rehypeExternalLinks,
        { target: "_blank", rel: ["noopener", "noreferrer"] },
      ],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
