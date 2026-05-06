import { Screen } from '@/components/screen';
import { Text } from 'react-native';

export function RecipesScreen() {
  return (
    <Screen title="Mis recetas" subtitle="Búsqueda, filtros por categoría y favoritos">
      <Text style={{ color: '#e2e8f0' }}>Categorías: desayuno, comida, cena, snack, postres.</Text>
      <Text style={{ color: '#e2e8f0' }}>Buscador por ingredientes, nombre o red social.</Text>
    </Screen>
  );
}
