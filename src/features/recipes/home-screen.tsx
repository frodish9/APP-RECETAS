import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function HomeScreen() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    supabase.from('recipes').select('id', { count: 'exact', head: true }).then(({ count }) => setCount(count ?? 0));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#0f172a', padding: 16 }}>
      <Text style={{ color: 'white', fontSize: 28, fontWeight: '700' }}>Feed de recetas</Text>
      <Text style={{ color: '#e2e8f0', marginTop: 12 }}>Total recetas guardadas: {count}</Text>
    </View>
  );
}
