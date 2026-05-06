import { Screen } from '@/components/screen';
import { Text } from 'react-native';

export function ProfileScreen() {
  return (
    <Screen title="Perfil" subtitle="Cuenta, suscripción y preferencias">
      <Text style={{ color: '#e2e8f0' }}>Estado de plan: Gratis/Premium.</Text>
      <Text style={{ color: '#e2e8f0' }}>Configuración de notificaciones y privacidad.</Text>
    </Screen>
  );
}
