import { Recipe } from '@/lib/types';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Text, TextInput, View } from 'react-native';

export function RecipesScreen() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const loadRecipes = async () => {
    const { data, error } = await supabase.from('recipes').select('*').order('created_at', { ascending: false });
    if (error) return Alert.alert(error.message);
    setRecipes(data as Recipe[]);
  };

  const addRecipe = async () => {
    const { data: auth } = await supabase.auth.getUser();
    if (!auth.user) return;
    const { error } = await supabase.from('recipes').insert({
      user_id: auth.user.id,
      title,
      source_url: url,
      source_platform: 'other'
    });
    if (error) return Alert.alert(error.message);
    setTitle('');
    setUrl('');
    loadRecipes();
  };

  const deleteRecipe = async (id: string) => {
    const { error } = await supabase.from('recipes').delete().eq('id', id);
    if (error) return Alert.alert(error.message);
    loadRecipes();
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#0f172a', padding: 16, gap: 10 }}>
      <Text style={{ color: 'white', fontSize: 24, fontWeight: '700' }}>Mis recetas</Text>
      <TextInput value={title} onChangeText={setTitle} placeholder="Título" placeholderTextColor="#94a3b8" style={{ backgroundColor: '#1e293b', color: 'white', padding: 10, borderRadius: 8 }} />
      <TextInput value={url} onChangeText={setUrl} placeholder="URL" placeholderTextColor="#94a3b8" style={{ backgroundColor: '#1e293b', color: 'white', padding: 10, borderRadius: 8 }} />
      <Button title="Guardar receta" onPress={addRecipe} />
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: '#1e293b', padding: 10, borderRadius: 8, marginTop: 8 }}>
            <Text style={{ color: 'white', fontWeight: '700' }}>{item.title ?? 'Sin título'}</Text>
            <Text style={{ color: '#cbd5e1' }}>{item.source_url}</Text>
            <Button title="Eliminar" onPress={() => deleteRecipe(item.id)} />
          </View>
        )}
      />
    </View>
  );
}
