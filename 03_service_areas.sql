-- 03_service_areas.sql
-- Service area table and CRUD functions for covered Nairobi neighborhoods.

create table if not exists public.service_areas (
  id serial primary key,
  name text not null unique,
  description text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists service_areas_active_idx on public.service_areas(is_active);

create or replace function public.service_areas_create(
  _name text,
  _description text,
  _is_active boolean default true
)
returns public.service_areas as $$
  insert into public.service_areas (name, description, is_active)
  values (_name, _description, _is_active)
  returning *;
$$ language sql stable;

create or replace function public.service_areas_read(
  _area_id int
)
returns public.service_areas as $$
  select * from public.service_areas where id = _area_id;
$$ language sql stable;

create or replace function public.service_areas_read_all()
returns setof public.service_areas as $$
  select * from public.service_areas order by name;
$$ language sql stable;

create or replace function public.service_areas_update(
  _area_id int,
  _name text,
  _description text,
  _is_active boolean
)
returns public.service_areas as $$
  update public.service_areas
  set name = coalesce(_name, name),
      description = coalesce(_description, description),
      is_active = coalesce(_is_active, is_active),
      updated_at = now()
  where id = _area_id
  returning *;
$$ language sql stable;

create or replace function public.service_areas_delete(
  _area_id int
)
returns void as $$
  delete from public.service_areas where id = _area_id;
$$ language sql stable;
