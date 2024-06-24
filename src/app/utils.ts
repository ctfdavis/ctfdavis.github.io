import { Metadata } from "next";
import { BlogMetadata } from "./types";

export function blogMeta2Meta(blogMeta: BlogMetadata): Metadata {
  return {
    title: blogMeta.title,
    description: blogMeta.description,
    category: blogMeta.tags?.join(", "),
  };
}

export function createBlogDate({
  year,
  month,
  day,
}: {
  year: number;
  month: number;
  day: number;
}): Date {
  return new Date(Date.UTC(year, month - 1, day));
}

export function formatBlogDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
