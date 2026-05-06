import { supabase } from '@/lib/supabase';
import { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

export function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) Alert.alert('Error login', error.message);
  };

  const signUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) Alert.alert('Error registro', error.message);
    else Alert.alert('Revisa tu correo para confirmar la cuenta.');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0f172a', padding: 16, justifyContent: 'center', gap: 12 }}>
      <Text style={{ color: 'white', fontSize: 28, fontWeight: '700' }}>Iniciar sesión</Text>
      <TextInput placeholder="Email" placeholderTextColor="#94a3b8" value={email} onChangeText={setEmail} autoCapitalize="none" style={{ backgroundColor: '#1e293b', color: 'white', borderRadius: 8, padding: 12 }} />
      <TextInput placeholder="Password" placeholderTextColor="#94a3b8" value={password} onChangeText={setPassword} secureTextEntry style={{ backgroundColor: '#1e293b', color: 'white', borderRadius: 8, padding: 12 }} />
      <Button title={loading ? 'Cargando...' : 'Entrar'} onPress={signIn} disabled={loading} />
      <Button title="Crear cuenta" onPress={signUp} disabled={loading} />
    </View>
  );
}
