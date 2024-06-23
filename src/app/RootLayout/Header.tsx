"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const handleMouseEnter = () => {
    document.body.setAttribute("data-logo-hover", "");
  };
  const handleMouseLeave = () => {
    document.body.removeAttribute("data-logo-hover");
  };
  return (
    <header id="__site-header" className="py-4">
      <Link
        href="/"
        className="mx-auto block w-fit"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/lambda-dragon-logo.svg"
          width={65}
          height={65}
          alt="λ/dragon"
        />
      </Link>
    </header>
  );
}
