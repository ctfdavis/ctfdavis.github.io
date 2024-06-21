import type { Metadata } from "next";
import config from "@/config";

export const metadata: Metadata = {
  title: "about",
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
      <body>
        <div>Some Layout</div>
        {children}
      </body>
    </html>
  );
}
