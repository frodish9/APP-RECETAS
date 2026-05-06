import { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

type ScreenProps = PropsWithChildren<{ title: string; subtitle?: string }>;

export function Screen({ title, subtitle, children }: ScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        <View style={styles.content}>{children}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0f172a' },
  container: { flex: 1, padding: 16 },
  title: { color: 'white', fontSize: 28, fontWeight: '700' },
  subtitle: { color: '#94a3b8', marginTop: 8, fontSize: 16 },
  content: { marginTop: 24, gap: 12 }
});
