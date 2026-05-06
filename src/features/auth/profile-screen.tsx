import { useSession } from '@/lib/session-context';
import { supabase } from '@/lib/supabase';
import { Button, Text, View } from 'react-native';

export function ProfileScreen() {
  const { session } = useSession();

  return (
    <View style={{ flex: 1, backgroundColor: '#0f172a', padding: 16, gap: 12 }}>
      <Text style={{ color: 'white', fontSize: 28, fontWeight: '700' }}>Perfil</Text>
      <Text style={{ color: '#e2e8f0' }}>{session?.user.email}</Text>
      <Button title="Cerrar sesión" onPress={() => supabase.auth.signOut()} />
    </View>
  );
}
