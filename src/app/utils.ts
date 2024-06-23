import { Metadata } from "next";
import { WritingMetadata } from "./types";

export function writingMeta2Meta(writingMeta: WritingMetadata): Metadata {
  return {
    title: writingMeta.title,
    description: writingMeta.description,
    category: writingMeta.tags?.join(", "),
  };
}

export function createWritingDate({
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

export function formatWritingDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
