
import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Check if Supabase credentials are available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock client if credentials are missing
let supabase: SupabaseClient;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase credentials are missing. Using mock client. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables."
  );
  
  // Create a mock client that doesn't do anything but doesn't crash
  supabase = {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signUp: async () => ({ data: null, error: { message: "Mock: Supabase not configured" } }),
      signInWithPassword: async () => ({ data: null, error: { message: "Mock: Supabase not configured" } }),
      signOut: async () => ({ error: null }),
      resetPasswordForEmail: async () => ({ error: null }),
    },
    from: () => ({
      insert: async () => ({ error: { message: "Mock: Supabase not configured" } }),
    }),
  } as unknown as SupabaseClient;
} else {
  // Create the real client if credentials exist
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };
