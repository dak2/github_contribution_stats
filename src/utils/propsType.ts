export type Events = {
  id: string;
  type: string;
  created_at: Date;
  actor: Record<string, unknown>;
  repo: Record<string, unknown>;
  payload: Commits;
};

export type Commits = {
  before: string;
  commits: any[];
  distinct_size: number;
  head: string;
  push_id: number;
  ref: string;
  size: number;
};

export type User = {
  avatar_url: string;
  login: string;
  url: string;
};

export type Repos = {
  name: string;
  language: string;
  fork: boolean;
};
