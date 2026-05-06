-- USERS / PROFILE
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  avatar_url text,
  plan text not null default 'free' check (plan in ('free', 'premium')),
  created_at timestamptz not null default now()
);

-- VIDEO RECIPES
create table if not exists public.recipes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  source_platform text not null check (source_platform in ('instagram', 'tiktok', 'facebook', 'x', 'youtube', 'other')),
  source_url text not null,
  title text,
  thumbnail_url text,
  description text,
  servings int,
  prep_time_minutes int,
  created_at timestamptz not null default now()
);

create table if not exists public.recipe_steps (
  id bigserial primary key,
  recipe_id uuid not null references public.recipes(id) on delete cascade,
  step_number int not null,
  instruction text not null
);

create table if not exists public.recipe_ingredients (
  id bigserial primary key,
  recipe_id uuid not null references public.recipes(id) on delete cascade,
  ingredient text not null,
  quantity text,
  normalized_name text
);

create table if not exists public.categories (
  id bigserial primary key,
  name text not null unique
);

create table if not exists public.recipe_categories (
  recipe_id uuid not null references public.recipes(id) on delete cascade,
  category_id bigint not null references public.categories(id) on delete cascade,
  primary key (recipe_id, category_id)
);

-- MEAL PLANNER
create table if not exists public.meal_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  week_start date not null,
  created_at timestamptz not null default now()
);

create table if not exists public.meal_plan_entries (
  id bigserial primary key,
  meal_plan_id uuid not null references public.meal_plans(id) on delete cascade,
  recipe_id uuid not null references public.recipes(id) on delete cascade,
  meal_date date not null,
  meal_slot text not null check (meal_slot in ('breakfast', 'lunch', 'dinner', 'snack'))
);

-- SHOPPING LIST
create table if not exists public.shopping_lists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  meal_plan_id uuid references public.meal_plans(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.shopping_list_items (
  id bigserial primary key,
  shopping_list_id uuid not null references public.shopping_lists(id) on delete cascade,
  item_name text not null,
  quantity text,
  checked boolean not null default false
);

alter table public.profiles enable row level security;
alter table public.recipes enable row level security;
alter table public.recipe_steps enable row level security;
alter table public.recipe_ingredients enable row level security;
alter table public.recipe_categories enable row level security;
alter table public.meal_plans enable row level security;
alter table public.meal_plan_entries enable row level security;
alter table public.shopping_lists enable row level security;
alter table public.shopping_list_items enable row level security;

create policy "Profile owner" on public.profiles
  for all using (auth.uid() = id) with check (auth.uid() = id);

create policy "Recipes owner" on public.recipes
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
