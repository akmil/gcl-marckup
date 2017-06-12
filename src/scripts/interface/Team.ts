import { User } from './User';

export interface Team {
  id?: number,
  name: string,
  game: string,
  created_at?: Date,
  owner?: User,
  users?: Array<User>,
}
