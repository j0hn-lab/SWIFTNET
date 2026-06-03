-- 01_leads.sql
-- Leads table and CRUD functions for the site lead capture form.

create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  phone text not null,
  email text,
  area text not null,
  package text not null,
  status text not null default 'new',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_area_idx on public.leads(area);
create index if not exists leads_status_idx on public.leads(status);

create or replace function public.leads_create(
  _full_name text,
  _phone text,
  _email text,
  _area text,
  _package text,
  _notes text default null
)
returns public.leads as $$
  insert into public.leads (full_name, phone, email, area, package, notes)
  values (_full_name, _phone, _email, _area, _package, _notes)
  returning *;
$$ language sql stable;

create or replace function public.leads_read(
  _lead_id uuid
)
returns public.leads as $$
  select * from public.leads where id = _lead_id;
$$ language sql stable;

create or replace function public.leads_read_all()
returns setof public.leads as $$
  select * from public.leads order by created_at desc;
$$ language sql stable;

create or replace function public.leads_update(
  _lead_id uuid,
  _full_name text,
  _phone text,
  _email text,
  _area text,
  _package text,
  _status text,
  _notes text
)
returns public.leads as $$
  update public.leads
  set full_name = coalesce(_full_name, full_name),
      phone = coalesce(_phone, phone),
      email = coalesce(_email, email),
      area = coalesce(_area, area),
      package = coalesce(_package, package),
      status = coalesce(_status, status),
      notes = coalesce(_notes, notes),
      updated_at = now()
  where id = _lead_id
  returning *;
$$ language sql stable;

create or replace function public.leads_delete(
  _lead_id uuid
)
returns void as $$
  delete from public.leads where id = _lead_id;
$$ language sql stable;
