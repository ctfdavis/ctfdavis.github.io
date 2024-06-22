import type { Metadata } from "next";
import config from "@/app/config";

export const metadata: Metadata = {
  ...config.siteMeta.about,
};

export default function About() {
  return <div>About</div>;
}
