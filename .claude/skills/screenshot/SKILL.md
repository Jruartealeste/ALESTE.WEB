---
name: screenshot
description: Captura screenshots de cualquier URL (sitio en vivo como aleste.ar, o servidor local) usando Puppeteer, sin sobreescribir capturas previas. Usar para auditoría visual del sitio actual o para comparar el diseño nuevo contra referencias.
---

# Screenshot

Captura una URL arbitraria y guarda el PNG en `temporary screenshots/` (auto-incrementado, nunca sobreescribe).

## Setup (una sola vez por entorno)

```
npm install
```

(instala Puppeteer como devDependency; ya está en `package.json`)

## Uso

```
node screenshot.mjs <url> [label] [--full] [--width=N] [--height=N]
```

- `<url>`: URL completa, incluyendo protocolo. Puede ser un sitio en vivo (`https://aleste.ar/`) o un servidor local (`http://localhost:3000`).
- `[label]`: sufijo opcional para identificar la captura (ej. `home`, `contacto`).
- `--full`: captura la página completa (scroll incluido), no solo el viewport.
- `--width=N` / `--height=N`: tamaño de viewport (default 1440x900, desktop).

Ejemplos:

```
node screenshot.mjs https://aleste.ar/ home --full
node screenshot.mjs https://aleste.ar/quienes-somos quienes-somos --full
node screenshot.mjs http://localhost:3000 home-local --full --width=375 --height=812
```

## Después de capturar

Leer el PNG resultante en `temporary screenshots/` con la herramienta Read para analizarlo visualmente (colores, tipografía, espaciados, layout).

## Notas

- No iniciar un servidor local para auditar el sitio en vivo: apuntar directo a la URL pública.
- Para mobile, usar `--width=375 --height=812` (o el viewport que corresponda).
- Cada llamada lanza y cierra su propio navegador headless; no hace falta gestionar procesos.
