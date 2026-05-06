import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

type SessionContextValue = { session: Session | null };

const SessionContext = createContext<SessionContextValue>({ session: null });

export function SessionProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  return <SessionContext.Provider value={{ session }}>{children}</SessionContext.Provider>;
}

export function useSession() {
  return useContext(SessionContext);
}
