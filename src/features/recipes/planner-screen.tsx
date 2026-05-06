import { Screen } from '@/components/screen';
import { Text } from 'react-native';

export function PlannerScreen() {
  return (
    <Screen title="Planificador" subtitle="Vista diaria / semanal / mensual + lista de la compra">
      <Text style={{ color: '#e2e8f0' }}>Menú semanal arrastrando recetas al calendario.</Text>
      <Text style={{ color: '#e2e8f0' }}>Lista de compra generada automáticamente por ingredientes.</Text>
    </Screen>
  );
}
