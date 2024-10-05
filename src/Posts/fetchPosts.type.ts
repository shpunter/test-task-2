export type Posts = Post[];

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type PastsAsMap = Map<Post["id"], Post[]>;
