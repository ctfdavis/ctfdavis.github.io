import type { Metadata } from "next";
import config from "@/app/config";
import Wrap from "@/app/components/Wrap";

export const metadata: Metadata = {
  ...config.siteMeta.about,
};

export default function About() {
  return (
    <Wrap>
      <p className="text-3xl leading-relaxed text-center">
        {config.me.description}
      </p>
    </Wrap>
  );
}
