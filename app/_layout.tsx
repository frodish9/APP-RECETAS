import { Stack } from 'expo-router';
import { SessionProvider } from '@/lib/session-context';

export default function RootLayout() {
  return (
    <SessionProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="auth" />
      </Stack>
    </SessionProvider>
  );
}
