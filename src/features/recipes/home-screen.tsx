import { Screen } from '@/components/screen';
import { Text } from 'react-native';

export function HomeScreen() {
  return (
    <Screen
      title="Feed de recetas"
      subtitle="Estilo TikTok/Pinterest con videos guardados y recomendaciones"
    >
      <Text style={{ color: '#e2e8f0' }}>• Guardar link de Instagram, TikTok, Facebook, X</Text>
      <Text style={{ color: '#e2e8f0' }}>• Miniatura + título + extracción automática de ingredientes</Text>
    </Screen>
  );
}
