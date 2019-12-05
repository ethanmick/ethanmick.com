CREATE EXTENSION pgcrypto;
CREATE EXTENSION pg_stat_statements;

begin transaction;

create table comments (
  id serial not null primary key,
  body text not null,
  -- Model Objects
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone
);

create table pictures (
  id serial not null primary key,
  -- Array of src urls ['image.jpg']
  src jsonb not null,
  -- Model Objects
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone
);

create table links (
  id serial not null primary key,
  link text not null,
  title text,
  author text,
  date_published timestamp without time zone,
  lead_image_url text,
  domain text,
  read boolean default false,
  -- Model Objects
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone
);

create table magic_ranks (
  id serial not null primary key,
  rank text not null,
  -- Model Objects
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone
);

create table stars (
  id integer not null,
  name text not null,
  owner text not null,
  full_name text not null,
  description text,
  url text not null,
  language text,
  forks integer,
  stargazers_count integer,
  last_updated_at timestamp without time zone,
  -- Model Objects
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone
);

create table tweets (
  -- Tweet Properties
  id text not null primary key,
  text text not null,
  -- User Properties 
  user_name text not null,
  user_screen_name text not null,
  user_profile_image_url text not null,
  entities jsonb,
  -- Model Objects
  created_at timestamp without time zone not null default now(),
  updated_at timestamp without time zone
);

commit;
