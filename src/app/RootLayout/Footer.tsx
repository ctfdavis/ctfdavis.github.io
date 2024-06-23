"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import config from "@/app/config";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer id="__site-footer" className="mt-auto py-4 text-center text-sm">
      <nav>
        <ul className="list-none">
          {config.footerLinks.map((link) => (
            <li
              key={link.href}
              className="inline-block mx-2 text-stone-400 uppercase"
            >
              {link.newTab ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className={pathname === link.href ? "text-stone-100" : ""}
                >
                  {link.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <a
        className="inline-block text-stone-500 mt-4"
        href={`mailto:${config.me.email}`}
      >
        {config.me.email}
      </a>
    </footer>
  );
}
