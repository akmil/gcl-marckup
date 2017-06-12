export interface User {
  id: number;
  avatar: string;
  name: string;
  nickname?: string;
  email?: string;
  confirmed?: boolean;
  steam_id?: number;
  manual_stats_update?: string;
  team?: {
    team_id: number,
    created_at: Date
  }
}
