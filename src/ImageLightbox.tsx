"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

type ImageProps = {
  src?: string;
  alt?: string;
};

const Lightbox = dynamic(() => import("@/Lightbox"));

export const ImageLightbox = ({ src, alt }: ImageProps) => {
  const [open, setOpen] = useState<boolean>();

  return (
    <>
      <img
        className="cursor-pointer"
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
      />
      {open !== undefined && src && (
        <Lightbox
          slides={[{ src, alt }]}
          close={() => setOpen(false)}
          open={open}
          styles={{
            navigationPrev: { display: "none" },
            navigationNext: { display: "none" },
          }}
        />
      )}
    </>
  );
};
