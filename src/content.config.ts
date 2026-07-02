import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const casos = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/casos' }),
  schema: ({ image }) => z.object({
    cliente: z.string(),
    tipoTrabajo: z.string(),
    anio: z.string().optional(),
    categoria: z.enum(['Branding', 'Campañas', 'Digital', 'Web', 'Redes', 'Institucional']),
    coverImage: image().optional(),
    galeria: z.array(image()).optional(),
    videos: z.array(z.string()).optional(),
    heroFocus: z.string().optional(),
    orden: z.number().default(99),
  }),
});

export const collections = { casos };
