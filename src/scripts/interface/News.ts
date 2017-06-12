import { User } from "./User";

export interface News {
  id: number;
  title: string;
  content: string;
  created_at: string;
  tags?: Array<string>;
  like_count: number;
  views_count: number;
  share_count: number;
  published?: boolean;
  whoShared?: User[];
  bgImage?: string;
}
