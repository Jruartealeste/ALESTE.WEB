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
- [ ] Autenticación con GitHub resuelta (push funcionando)
- [x] `PLAN.md` creado
- [ ] Commit inicial con `CLAUDE.md` original

### Fase 1 — Skill de screenshots
- [ ] Skill propia para capturar URL arbitraria (live site o dev server local) y guardar en `temporary screenshots/` sin sobreescribir

### Fase 2 — Auditoría visual del sitio actual
- [ ] Capturas de Home, Quiénes somos, Casos (listado + 1-2 internos), Contacto de aleste.ar
- [ ] Paleta de colores (hex exactos) documentada
- [ ] Tipografías/pesos documentados
- [ ] Espaciados/proporciones a conservar documentados

### Fase 3 — Adaptar CLAUDE.md al proyecto real
- [ ] Reemplazar flujo Puppeteer/HTML-Tailwind-CDN por Astro + `astro dev` + skill de screenshots propia
- [ ] Sección "Brand" con paleta/tipografía reales (Fase 2)
- [ ] Sección de stack: Astro, Vercel, Formspree
- [ ] Quitar referencias a rutas de `nateh`

### Fase 4 — Scaffold del proyecto Astro
- [ ] `npm create astro@latest`
- [ ] Integrar Tailwind (`astro add tailwind`)
- [ ] Colores/fuentes de marca en `tailwind.config`
- [ ] Páginas: `/`, `/servicios`, `/casos`, `/casos/[slug]`, `/quienes-somos`, `/contacto`
- [ ] Layout base con header sticky + footer
- [ ] Formspree en `/contacto`
- [ ] Config mínima de Vercel

### Fase 5 — Correcciones del diagnóstico

**P1 — Navegación y experiencia**
- [ ] Header sticky (logo izq, menú der: Inicio | Servicios | Casos | Quiénes somos | Contacto) + CTA "Hablemos / Consultar"
- [ ] Botón "← Volver a casos" + CTA de cierre en cada caso interno
- [ ] Botón flotante "subir" (↑)

**P2 — Servicios**
- [ ] Reordenar: Comunicación 360° → Identidad de marca → Campañas digitales → Campañas tradicionales → Diseño web y plataformas → Formadores de opinión
- [ ] Renombrar "Campañas 360°" → "Comunicación 360°"
- [ ] Grilla de 2-3 columnas con bajadas parejas (sección "Lo que hacemos")

**P3 — Casos**
- [ ] Filtros (Todos | Branding | Campañas | Digital | Web | Redes | Institucional)
- [ ] Tarjetas con Cliente + Tipo de trabajo + Año/categoría
- [ ] Plantilla estándar interna: Cliente / Desafío / Qué hicimos / Resultado / Piezas destacadas

**P4 — SEO y limpieza técnica**
- [ ] Eliminar/noindex páginas de prueba (lorem ipsum) — no migrar
- [ ] Meta títulos/descripciones + alt text
- [ ] Copy SEO en home

**Contacto**
- [ ] Copy persuasivo arriba del form
- [ ] Datos directos + botón WhatsApp debajo del form
- [ ] Formspree conectado y probado

**Quiénes somos**
- [ ] Bloques: frase destacada, "Sobre nosotros"/"En qué creemos" separados, placeholder foto equipo, grilla de clientes prolija, frase de cierre

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
