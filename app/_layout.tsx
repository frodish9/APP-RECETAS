import { Stack } from 'expo-router';
import { SessionProvider, useSession } from '@/lib/session-context';

function NavigationGate() {
  const { session, loading } = useSession();
  if (loading) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {session ? <Stack.Screen name="(tabs)" /> : <Stack.Screen name="auth" />}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <SessionProvider>
      <NavigationGate />
    </SessionProvider>
  );
}
