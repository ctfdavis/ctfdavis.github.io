import type { Metadata } from "next";
import "./globals.scss";
import config from "@/config";

export const metadata: Metadata = {
  title: config.site.title,
  description: config.site.description,
  authors: [{ name: config.me.name, url: config.me.githubProfile }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
