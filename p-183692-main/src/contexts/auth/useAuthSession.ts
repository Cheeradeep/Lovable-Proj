
import { useEffect } from "react";
import { supabase } from "@/lib/supabase-client";

export const useAuthSession = (
  setUser: React.Dispatch<React.SetStateAction<import("@supabase/supabase-js").User | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    // Check active session
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
      setIsLoading(false);
      
      // Set up auth listener
      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          setUser(session?.user || null);
          setIsLoading(false);
        }
      );

      return () => {
        authListener?.subscription.unsubscribe();
      };
    };

    checkSession();
  }, [setUser, setIsLoading]);
};
