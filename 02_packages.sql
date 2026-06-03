-- 02_packages.sql
-- Packages table and CRUD functions for plan management.

create table if not exists public.packages (
  id text primary key,
  name text not null,
  swahili text,
  speed integer not null,
  unit text not null,
  price_kes integer not null,
  accent text,
  color text,
  perks jsonb not null default '[]'::jsonb,
  popular boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists packages_popular_idx on public.packages(popular);
create index if not exists packages_speed_idx on public.packages(speed);

create or replace function public.packages_create(
  _id text,
  _name text,
  _swahili text,
  _speed integer,
  _unit text,
  _price_kes integer,
  _accent text,
  _color text,
  _perks jsonb,
  _popular boolean default false
)
returns public.packages as $$
  insert into public.packages (
    id, name, swahili, speed, unit, price_kes, accent, color, perks, popular
  ) values (
    _id, _name, _swahili, _speed, _unit, _price_kes, _accent, _color, coalesce(_perks, '[]'::jsonb), _popular
  )
  returning *;
$$ language sql stable;

create or replace function public.packages_read(
  _package_id text
)
returns public.packages as $$
  select * from public.packages where id = _package_id;
$$ language sql stable;

create or replace function public.packages_read_all()
returns setof public.packages as $$
  select * from public.packages order by popular desc, speed asc;
$$ language sql stable;

create or replace function public.packages_update(
  _package_id text,
  _name text,
  _swahili text,
  _speed integer,
  _unit text,
  _price_kes integer,
  _accent text,
  _color text,
  _perks jsonb,
  _popular boolean
)
returns public.packages as $$
  update public.packages
  set name = coalesce(_name, name),
      swahili = coalesce(_swahili, swahili),
      speed = coalesce(_speed, speed),
      unit = coalesce(_unit, unit),
      price_kes = coalesce(_price_kes, price_kes),
      accent = coalesce(_accent, accent),
      color = coalesce(_color, color),
      perks = coalesce(_perks, perks),
      popular = coalesce(_popular, popular),
      updated_at = now()
  where id = _package_id
  returning *;
$$ language sql stable;

create or replace function public.packages_delete(
  _package_id text
)
returns void as $$
  delete from public.packages where id = _package_id;
$$ language sql stable;
