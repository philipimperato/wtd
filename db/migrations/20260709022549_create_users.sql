-- migrate:up
create table users (
  id bigint generated always as identity primary key,
  google_sub text not null unique,
  email text not null unique,
  name text not null,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- migrate:down
drop table users;
