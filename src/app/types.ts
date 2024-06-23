export type WritingMetadata = {
  title: string;
  description: string;
  published: Date;
  updated?: Date;
  tags?: string[];
  draft?: boolean;
};

export type Writing = {
  metadata: WritingMetadata;
  slug: string;
};
