export type BlogMetadata = {
  title: string;
  description: string;
  published: Date;
  updated?: Date;
  tags?: string[];
  draft?: boolean;
};

export type Blog = {
  metadata: BlogMetadata;
  slug: string;
};
