# APP-RECETAS

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
