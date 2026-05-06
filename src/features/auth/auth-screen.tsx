import { Screen } from '@/components/screen';
import { Text } from 'react-native';

export function AuthScreen() {
  return (
    <Screen title="Iniciar sesión" subtitle="Email + OAuth social con Supabase Auth">
      <Text style={{ color: '#e2e8f0' }}>Flujo base: registro, login, recuperación de contraseña.</Text>
      <Text style={{ color: '#e2e8f0' }}>Roles: free (limitado) y premium (sin límites).</Text>
    </Screen>
  );
}
