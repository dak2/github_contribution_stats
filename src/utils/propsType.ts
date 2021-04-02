export type Commits = {
  id: string;
  type: string;
  created_at: Date;
  actor: Record<string, unknown>;
  repo: Record<string, unknown>;
  payload: Record<string, unknown>;
};

export type User = {
  avatar_url: string;
  login: string;
  url: string;
};
