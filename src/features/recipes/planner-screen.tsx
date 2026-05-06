import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function PlannerScreen() {
  const [mealPlans, setMealPlans] = useState(0);
  const [lists, setLists] = useState(0);

  useEffect(() => {
    supabase.from('mealplans').select('id', { count: 'exact', head: true }).then(({ count }) => setMealPlans(count ?? 0));
    supabase.from('shopping_lists').select('id', { count: 'exact', head: true }).then(({ count }) => setLists(count ?? 0));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#0f172a', padding: 16 }}>
      <Text style={{ color: 'white', fontSize: 28, fontWeight: '700' }}>Planner</Text>
      <Text style={{ color: '#e2e8f0', marginTop: 12 }}>Meal plans: {mealPlans}</Text>
      <Text style={{ color: '#e2e8f0', marginTop: 8 }}>Shopping lists: {lists}</Text>
    </View>
  );
}
