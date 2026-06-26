# Auditoría visual — aleste.ar (sitio actual)

Fuente: capturas en `temporary screenshots/` (screenshot-2 a screenshot-7) + estilos computados extraídos en vivo. Este documento es la referencia para Fase 3 (CLAUDE.md) y Fase 4 (Tailwind config).

## Capturas tomadas
- `screenshot-2-home.png` — Home
- `screenshot-3-quienes-somos.png` — Quiénes somos
- `screenshot-4-casos.png` — Casos (listado)
- `screenshot-5-contacto.png` — Contacto
- `screenshot-6-caso-fate.png` — Caso interno: Fate (Comunicación corporativa)
- `screenshot-7-caso-malba.png` — Caso interno: Malba (Creación de marca gráfica)

## Paleta de colores (hex exactos)

| Uso | RGB | Hex |
|---|---|---|
| Naranja/rojo de marca (acentos, links, fondos hero, botones) | `rgb(247, 50, 1)` | `#F73201` |
| Variante naranja en texto sobre fondo oscuro (contacto h1) | `rgb(225, 50, 1)` | `#E13201` |
| Fondo oscuro / sección "Sobre nosotros" (quiénes somos) | `rgb(37, 20, 38)` | `#251426` |
| Texto body / nav | `rgb(102, 102, 102)` | `#666666` |
| Texto headings oscuro | `rgb(51, 51, 51)` | `#333333` |
| Texto negro puro (algunos párrafos) | `rgb(0, 0, 0)` | `#000000` |
| Placeholder de inputs | `rgb(153, 153, 153)` | `#999999` |
| Fondo blanco (base) | `rgb(255, 255, 255)` | `#FFFFFF` |

**Nota:** hay dos tonos de naranja casi idénticos (`#F73201` en links/botones/fondos, `#E13201` en el h1 de Contacto) — probablemente inconsistencia del sitio actual más que decisión de diseño. Para el rediseño, unificar en **`#F73201`** como color de marca único.

## Tipografía

- **Familia única:** `Poppins` (fallback: Helvetica, Arial, Lucida, sans-serif) — se usa para todo, headings y body. No hay pairing de dos fuentes.
- **Pesos usados:** 400 (placeholders de input), 500 (body, nav, botones), 600 (subtítulo "Sobre nosotros"), 700 (h3 de servicios, h1 de Contacto).

| Elemento | Tamaño | Peso | Line-height |
|---|---|---|---|
| Body / nav / footer | 16px | 500 | 27.2px (1.7) |
| Párrafo de servicio (home) | 18px | 500 | 25.2px (1.4) |
| H3 "Campañas digitales" (home) | 34px | 700 | 34px (1.0) |
| "Sobre nosotros" (quiénes somos) | 32px | 600 | 38.4px (1.2) |
| "Contacto" (h1 contacto) | 32px | 700 | 27.2px (0.85, ajustado) |
| Botón "Enviar" | 17px | 500 | 28.9px |
| Input/textarea | 15px | 400 | normal |

## Espaciados / proporciones a conservar

- Botón "Enviar": padding vertical ~5px, padding horizontal 42px (botón ancho, bajo).
- Inputs/textarea: padding 16px en las 4 direcciones.
- H3 de servicios: padding-bottom 10px antes de la bajada de texto.
- Layout de servicios en home: grilla de 2 columnas alternando ícono/ilustración a la izquierda o derecha, con bloques apilados verticalmente con espaciado generoso entre secciones.
- Hero de home: bloque de fondo naranja sólido full-width con el copy principal, sin imagen de fondo.
- Quiénes somos: bloque oscuro (`#251426`) → bloque naranja (`#F73201`) → grilla de logos de clientes en gris placeholder (4 columnas).
- Casos (listado): grilla de 3 columnas, tarjetas con imagen full-bleed sin texto superpuesto (el nombre del cliente está dentro de la imagen en algunos casos, ej. "fate", "MALBA", "NORDELTA").
- Caso interno: título + bajada arriba (2 columnas: título corto izq, descripción larga der), luego imagen hero full-width, luego piezas individuales apiladas centradas.
- Footer: minimalista, dirección + redes sociales (Facebook/Instagram) alineadas a la derecha.

## Conclusión

La paleta y tipografía actuales (naranja `#F73201` + Poppins + grises neutros) **funcionan bien y deben conservarse**, tal como indica el diagnóstico original. El rediseño debe corregir estructura/contenido (navegación, casos, SEO) sin tocar estos fundamentos visuales. Pendiente: decidir si se introduce una segunda familia tipográfica para diferenciar headings de body (actualmente ambos usan Poppins) — evaluar en Fase 4.
