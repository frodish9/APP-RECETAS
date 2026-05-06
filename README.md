# APP-RECETAS

App Expo + Supabase para guardar recetas en video.

## 1) Variables `.env`

Este proyecto ya incluye `.env` con:

```env
EXPO_PUBLIC_SUPABASE_URL=https://wrhmzxjvkkwjukgkajfu.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_tUGodnUMqhnnDfENB69g0A_LHPQEYK4
```

> Nota: aunque te pasaron URL con `/rest/v1/`, el cliente la normaliza automáticamente para que `supabase-js` funcione bien.

## 2) Cliente Supabase funcional

- `src/lib/supabase.ts` crea el cliente con `createClient`.
- Usa `AsyncStorage` para persistir sesión en móvil.

## 3) Autenticación email/password

- `AuthScreen` permite registro (`signUp`) e inicio de sesión (`signInWithPassword`).
- `ProfileScreen` permite cerrar sesión (`signOut`).

## 4) Navegación protegida por sesión

- `app/_layout.tsx` usa `SessionProvider` + `NavigationGate`.
- Sin sesión: va a `auth`.
- Con sesión: entra a tabs.

## 5) CRUD real de `recipes`

- `RecipesScreen`:
  - `SELECT` lista recetas del usuario.
  - `INSERT` crea receta.
  - `DELETE` elimina receta.

## 6) Tablas de base de datos

Archivo: `supabase/schema.sql`

Incluye:
- `profiles`
- `recipes`
- `ingredients`
- `mealplans`
- `shopping_lists`
- Trigger para crear `profiles` al registrar usuario en `auth.users`
- RLS + policies por dueño.

## 7) Ejecutar con Expo

```bash
npm install
npm run start
```

Para abrir en dispositivos/simulador:

```bash
npm run android
npm run ios
npm run web
```
