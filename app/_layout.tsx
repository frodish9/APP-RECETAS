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
import { SessionProvider } from '@/lib/session-context';

export default function RootLayout() {
  return (
    <SessionProvider>
      <NavigationGate />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="auth" />
      </Stack>
    </SessionProvider>
  );
}
