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
Implementación inicial funcional conectada a Supabase.

## Incluye

- Auth con email/password (login + registro).
- Navegación protegida por sesión.
- Persistencia de sesión móvil con `AsyncStorage`.
- CRUD básico de recetas contra tabla real de Supabase.
- Esquema SQL con tablas: `profiles`, `recipes`, `ingredients`, `mealplans`, `shopping_lists`.

## Variables de entorno

Crear `.env`:

```
EXPO_PUBLIC_SUPABASE_URL=...
EXPO_PUBLIC_SUPABASE_ANON_KEY=...
```

## Ejecutar

```bash
npm install
npm run start
```

## Flujo

1. Usuario abre app y ve auth si no hay sesión.
2. Hace login/registro.
3. Entra a tabs protegidos.
4. Crea y elimina recetas en Supabase en tiempo real de lectura manual (fetch después de mutar).
App móvil moderna para guardar, organizar y planificar recetas en video desde RRSS.

## Stack inicial

- **Mobile frontend**: React Native + Expo Router (preparado para escalar a web).
- **Backend**: Supabase (Auth, Postgres, RLS).
- **Diseño**: navegación principal tipo feed (inspiración TikTok/Pinterest).

## Estructura creada

- `app/`: rutas y navegación principal.
- `src/features/auth`: pantallas de autenticación y perfil.
- `src/features/recipes`: feed, biblioteca de recetas y planner.
- `src/lib`: cliente de Supabase y contexto de sesión.
- `supabase/schema.sql`: esquema inicial de base de datos.

## Navegación principal (tabs)

1. **Inicio**: feed de recetas en video guardadas/recomendadas.
2. **Recetas**: buscador y categorías.
3. **Planner**: calendario diario/semanal/mensual + menú semanal + lista compra.
4. **Perfil**: cuenta, suscripción free/premium y ajustes.

## Autenticación (base)

- Cliente Supabase configurado para sesión persistente.
- Contexto global para escuchar cambios de sesión.
- Pantalla inicial `AuthScreen` para login/registro/OAuth.

## Próximos pasos sugeridos

- Crear UI real de tarjeta de receta (thumbnail, título, plataforma y CTA).
- Implementar parsing/extracción con Edge Functions + IA para ingredientes/pasos.
- Completar políticas RLS restantes por tabla hija.
- Añadir pasarela de pagos para premium (Stripe).
