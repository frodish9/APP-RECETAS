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
