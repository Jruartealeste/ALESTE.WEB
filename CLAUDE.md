# CLAUDE.md — ALESTE Web (Astro)

## Stack
- **Framework:** Astro (`npm create astro@latest`) + integración Tailwind (`astro add tailwind`)
- **Deploy:** Vercel
- **Formulario de contacto:** Formspree (endpoint vía variable de entorno)
- Fuente de verdad operativa del proyecto: `PLAN.md`. Antes de empezar a trabajar, revisar qué fase está incompleta y continuar desde ahí.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- Leer `PLAN.md` y `BRAND-AUDIT.md` antes de tocar diseño o contenido.

## Reference Images
- Si se provee una imagen de referencia: igualar layout, espaciado, tipografía y color exactamente. Usar contenido placeholder (imágenes vía `https://placehold.co/`, copy genérico). No mejorar ni agregar al diseño.
- Si no hay imagen de referencia: diseñar desde cero con alto nivel de detalle (ver guardrails abajo), respetando siempre la sección Brand.
- Screenshot del resultado, comparar contra la referencia, corregir diferencias, volver a capturar. Mínimo 2 rondas de comparación. Detenerse solo cuando no queden diferencias visibles o el usuario lo indique.

## Local Server
- **Siempre servir en localhost** — nunca capturar una URL `file:///`.
- Levantar el servidor de desarrollo de Astro: `npm run dev` (por defecto en `http://localhost:4321`)
- Si el servidor ya está corriendo, no levantar una segunda instancia.

## Screenshot Workflow
- Skill propia de screenshots (ver Fase 1 de `PLAN.md`), basada en Puppeteer instalado en el proyecto (`node_modules`).
- **Siempre capturar desde localhost:** `node screenshot.mjs http://localhost:4321`
- Las capturas se guardan automáticamente en `./temporary screenshots/screenshot-N.png` (auto-incrementado, nunca se sobreescribe).
- Sufijo de etiqueta opcional: `node screenshot.mjs http://localhost:4321 label` → guarda como `screenshot-N-label.png`
- Flags opcionales: `--full` (página completa), `--width=N`, `--height=N`
- `screenshot.mjs` vive en la raíz del proyecto. Usarlo tal cual está.
- Después de capturar, leer el PNG de `temporary screenshots/` con la herramienta Read — Claude puede ver y analizar la imagen directamente.
- Al comparar, ser específico: "el heading mide 32px pero la referencia muestra ~24px", "el gap de la tarjeta es 16px pero debería ser 24px"
- Revisar: spacing/padding, tamaño/peso/line-height de fuente, colores (hex exacto), alineación, border-radius, sombras, tamaño de imágenes

## Output Defaults
- Proyecto Astro multi-página (`/`, `/servicios`, `/casos`, `/casos/[slug]`, `/quienes-somos`, `/contacto`), no HTML único
- Tailwind CSS vía integración de Astro (no CDN)
- Imágenes placeholder: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand
Paleta y tipografía documentadas en detalle en `BRAND-AUDIT.md` (Fase 2). Resumen:

- **Color de marca:** `#F73201` (naranja/rojo) — unificar, no usar la variante `#E13201` del sitio actual.
- **Fondo oscuro de marca:** `#251426`
- **Texto:** headings `#333333`, body `#666666`, placeholders `#999999`
- **Tipografía:** `Poppins` (único, sin pairing en el sitio original — evaluar en Fase 4 si conviene sumar una segunda familia para headings)
- **Pesos:** 400 (placeholders), 500 (body/nav/botones), 600 (subtítulos), 700 (headings destacados)
- Espaciados y proporciones específicos (botones, grillas, hero, footer) detallados en `BRAND-AUDIT.md` — respetarlos al portar a Tailwind config.
- Esta paleta y tipografía **deben conservarse** del sitio actual; el rediseño corrige estructura/contenido, no estos fundamentos visuales.

## Anti-Generic Guardrails
- **Shadows:** Nunca `shadow-md` plano. Usar sombras en capas, con tinte de color y opacidad baja.
- **Animaciones:** Animar solo `transform` y `opacity`. Nunca `transition-all`. Usar easing tipo spring.
- **Estados interactivos:** Todo elemento clickeable necesita hover, focus-visible y active. Sin excepciones.
- **Imágenes:** Agregar overlay de gradiente (`bg-gradient-to-t from-black/60`) y una capa de tratamiento de color con `mix-blend-multiply` donde aplique.
- **Spacing:** Usar tokens de espaciado intencionales y consistentes — no pasos aleatorios de Tailwind.
- **Depth:** Las superficies deben tener un sistema de capas (base → elevada → flotante), no todo en el mismo plano.

## Hard Rules
- No agregar secciones, features o contenido que no esté en la referencia o en el diagnóstico (`PLAN.md` Fase 5)
- No "mejorar" un diseño de referencia — igualarlo
- No detenerse después de una sola pasada de screenshots
- No usar `transition-all`
- No inventar colores de marca — usar los valores exactos de `BRAND-AUDIT.md`
