import { Hash } from "lucide-react";
import { ReactNode } from "react";
import type { MDXComponents } from "mdx/types";
import { ImageLightbox } from "./ImageLightbox";

type HeadingProps = {
  id?: string;
  children?: ReactNode;
};

const heading = (As: "h2" | "h3" | "h4" | "h5" | "h6") => {
  const Heading = ({ id, children }: HeadingProps) => (
    <a href={`#${id}`} className="block group relative !no-underline">
      <Hash className="hidden" />
      <As id={id}>{children}</As>
    </a>
  );
  Heading.displayName = As;
  return Heading;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: heading("h2"),
    h3: heading("h3"),
    h4: heading("h4"),
    h5: heading("h5"),
    h6: heading("h6"),
    img: ImageLightbox,
  };
}
