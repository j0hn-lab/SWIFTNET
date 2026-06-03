-- 04_coverage_zones.sql
-- Coverage zone table and CRUD functions for deployment coverage map content.

create table if not exists public.coverage_zones (
  id serial primary key,
  region text not null unique,
  description text,
  highlight text,
  is_live boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists coverage_zones_live_idx on public.coverage_zones(is_live);

create or replace function public.coverage_zones_create(
  _region text,
  _description text,
  _highlight text,
  _is_live boolean default true
)
returns public.coverage_zones as $$
  insert into public.coverage_zones (region, description, highlight, is_live)
  values (_region, _description, _highlight, _is_live)
  returning *;
$$ language sql stable;

create or replace function public.coverage_zones_read(
  _zone_id int
)
returns public.coverage_zones as $$
  select * from public.coverage_zones where id = _zone_id;
$$ language sql stable;

create or replace function public.coverage_zones_read_all()
returns setof public.coverage_zones as $$
  select * from public.coverage_zones order by region;
$$ language sql stable;

create or replace function public.coverage_zones_update(
  _zone_id int,
  _region text,
  _description text,
  _highlight text,
  _is_live boolean
)
returns public.coverage_zones as $$
  update public.coverage_zones
  set region = coalesce(_region, region),
      description = coalesce(_description, description),
      highlight = coalesce(_highlight, highlight),
      is_live = coalesce(_is_live, is_live),
      updated_at = now()
  where id = _zone_id
  returning *;
$$ language sql stable;

create or replace function public.coverage_zones_delete(
  _zone_id int
)
returns void as $$
  delete from public.coverage_zones where id = _zone_id;
$$ language sql stable;
