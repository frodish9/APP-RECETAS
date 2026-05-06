export type Profile = {
  id: string;
  username: string | null;
  plan: 'free' | 'premium';
};

export type Recipe = {
  id: string;
  user_id: string;
  title: string | null;
  source_url: string;
  source_platform: string;
  thumbnail_url: string | null;
  created_at: string;
};
