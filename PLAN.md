# Plan: Rediseño web ALESTE (Astro + Vercel + Formspree)

Repo: https://github.com/Jruartealeste/ALESTE.WEB

## Contexto

La web actual (https://aleste.ar/) está desactualizada en estructura/contenido aunque su paleta de colores y tipografía funcionan bien y deben conservarse. Se hizo un diagnóstico detallado (navegación, servicios, casos, contacto, "quiénes somos", SEO) y se va a reconstruir el sitio desde cero con Astro, deploy en Vercel y formulario de contacto vía Formspree.

Este archivo es la fuente de verdad operativa del proyecto. Se actualiza marcando checkboxes a medida que se completan fases, para poder retomar el trabajo en cualquier sesión sin releer el chat original.

## Fases

### Fase 0 — Base del repo
- [x] `git init` local
- [x] `.gitignore`
- [x] Remoto conectado a `github.com/Jruartealeste/ALESTE.WEB`
- [x] Autenticación con GitHub resuelta (push funcionando)
- [x] `PLAN.md` creado
- [x] Commit inicial con `CLAUDE.md` original (mergeado con README/gitignore del remoto)

### Fase 1 — Skill de screenshots
- [x] Skill propia para capturar URL arbitraria (live site o dev server local) y guardar en `temporary screenshots/` sin sobreescribir

### Fase 2 — Auditoría visual del sitio actual
- [x] Capturas de Home, Quiénes somos, Casos (listado + 1-2 internos), Contacto de aleste.ar
- [x] Paleta de colores (hex exactos) documentada
- [x] Tipografías/pesos documentados
- [x] Espaciados/proporciones a conservar documentados

Resultado en `BRAND-AUDIT.md`.

### Fase 3 — Adaptar CLAUDE.md al proyecto real
- [x] Reemplazar flujo Puppeteer/HTML-Tailwind-CDN por Astro + `astro dev` + skill de screenshots propia
- [x] Sección "Brand" con paleta/tipografía reales (Fase 2)
- [x] Sección de stack: Astro, Vercel, Formspree
- [x] Quitar referencias a rutas de `nateh`

### Fase 4 — Scaffold del proyecto Astro
- [x] `npm create astro@latest`
- [x] Integrar Tailwind (`astro add tailwind`)
- [x] Colores/fuentes de marca (Tailwind 4, `@theme` en `src/styles/global.css`; Poppins vía Google Fonts en `Layout.astro`)
- [x] Páginas: `/`, `/servicios`, `/casos`, `/casos/[slug]`, `/quienes-somos`, `/contacto`
- [x] Layout base con header sticky + footer
- [x] Formspree en `/contacto` (endpoint vía `PUBLIC_FORMSPREE_ENDPOINT`, ver `.env.example`)
- [x] Config mínima de Vercel (`vercel.json`)

Todas las páginas son placeholders de estructura — contenido real pendiente de Fase 5.

### Fase 5 — Correcciones del diagnóstico

**P1 — Navegación y experiencia**
- [x] Header sticky (logo izq, menú der: Inicio | Servicios | Casos | Quiénes somos | Contacto) + CTA "Hablemos / Consultar"
- [x] Botón "← Volver a casos" + CTA de cierre en cada caso interno
- [x] Botón flotante "subir" (↑)

**P2 — Servicios**
- [x] Reordenar: Comunicación 360° → Identidad de marca → Campañas digitales → Campañas tradicionales → Diseño web y plataformas → Formadores de opinión
- [x] Renombrar "Campañas 360°" → "Comunicación 360°"
- [x] Grilla de 2-3 columnas con bajadas parejas (sección "Lo que hacemos")

**P3 — Casos**
- [x] Filtros (Todos | Branding | Campañas | Digital | Web | Redes | Institucional)
- [x] Tarjetas con Cliente + Tipo de trabajo + Año/categoría
- [x] Plantilla estándar interna: Cliente / Desafío / Qué hicimos / Resultado / Piezas destacadas

**P4 — SEO y limpieza técnica**
- [x] Eliminar/noindex páginas de prueba (lorem ipsum) — no migrar (no se encontraron páginas de prueba en el scaffold)
- [x] Meta títulos/descripciones + alt text
- [x] Copy SEO en home

**Contacto**
- [x] Copy persuasivo arriba del form
- [x] Datos directos + botón WhatsApp debajo del form
- [ ] Formspree conectado y probado (pendiente: configurar `PUBLIC_FORMSPREE_ENDPOINT` real y probar envío)

**Quiénes somos**
- [x] Bloques: frase destacada, "Sobre nosotros"/"En qué creemos" separados, placeholder foto equipo, grilla de clientes prolija, frase de cierre

### Fase 5.5 — CMS liviano (Tina CMS)
**Esperar a que el diseño esté más estable antes de empezar** — si la estructura de las secciones sigue cambiando, recablear los campos del CMS implica retrabajo. Retomar cuando el diseño quede firme.

- [ ] Migrar textos hardcodeados de `src/pages/*.astro` y `src/data/casos.ts` a Astro Content Collections (Markdown/JSON)
- [ ] Instalar Tina CMS y conectar cuenta de TinaCloud (gratis, sin backend de auth propio)
- [ ] Definir esquema de campos editables por página/sección
- [ ] Probar flujo: equipo edita en `/admin`, publica, Vercel redeploya solo

### Fase 6 — Deploy
- [ ] Conectar repo a Vercel
- [ ] Variable de entorno del endpoint Formspree
- [ ] Build de producción verificado
- [ ] Envío de prueba real por el formulario confirmado

### Fase 7 — QA final
- [ ] Revisión responsive (mobile/tablet/desktop)
- [ ] Estados focus/hover en todos los elementos clickeables
- [ ] Accesibilidad básica y performance

## Cómo retomar
Si se reabre esta conversación en otra sesión: leer este archivo, ver qué checkboxes faltan, y continuar desde la primera fase incompleta.
