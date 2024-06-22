import { Metadata } from "next";
import config from "@/app/config";

export const metadata: Metadata = {
  ...config.siteMeta.global,
  authors: [{ name: config.me.name, url: config.me.githubProfile }],
};

export { default as default } from "./RootLayout";
