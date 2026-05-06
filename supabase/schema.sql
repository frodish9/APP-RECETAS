create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  avatar_url text,
  plan text not null default 'free' check (plan in ('free', 'premium')),
  created_at timestamptz not null default now()
);

create table if not exists public.recipes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  source_platform text not null check (source_platform in ('instagram', 'tiktok', 'facebook', 'x', 'other')),
  source_url text not null,
  title text,
  thumbnail_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.ingredients (
  id bigserial primary key,
  recipe_id uuid not null references public.recipes(id) on delete cascade,
  ingredient text not null,
  quantity text
);

create table if not exists public.mealplans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  week_start date not null,
  created_at timestamptz not null default now()
);

create table if not exists public.shopping_lists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  mealplan_id uuid references public.mealplans(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.recipes enable row level security;
alter table public.ingredients enable row level security;
alter table public.mealplans enable row level security;
alter table public.shopping_lists enable row level security;

create policy "profiles owner" on public.profiles for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "recipes owner" on public.recipes for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "ingredients via recipe owner" on public.ingredients
for all using (
  exists (select 1 from public.recipes r where r.id = recipe_id and r.user_id = auth.uid())
) with check (
  exists (select 1 from public.recipes r where r.id = recipe_id and r.user_id = auth.uid())
);
create policy "mealplans owner" on public.mealplans for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "shopping owner" on public.shopping_lists for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
