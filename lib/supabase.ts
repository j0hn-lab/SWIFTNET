import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const isValidUrl = (url?: string): url is string => {
  if (!url || typeof url !== "string") return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
};

const isValidKey = (key?: string): key is string =>
  typeof key === "string" && key.trim().length > 0 && !key.includes("your_supabase");

export const supabase: SupabaseClient | null =
  isValidUrl(supabaseUrl) && isValidKey(supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Types for our tables
export type LeadForm = {
  id?: string;
  full_name: string;
  phone: string;
  email: string;
  area: string;
  package: string;
  created_at?: string;
};