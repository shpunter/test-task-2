export type Comments = Comment[];

export type Comment = {
  id: number;
  postId: number;
  name: string;
  body: string;
  email: string;
};
