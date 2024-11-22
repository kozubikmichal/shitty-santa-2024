import { createServerClient } from "@supabase/ssr";

export default () =>
  createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get: (name) => {
          return null;
        },
        set: (name, value, options) => {
          return null;
        },
      },
    }
  );
