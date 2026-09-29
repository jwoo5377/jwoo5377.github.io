import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    year: z.string(),
    period: z.string(),
    category: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    role: z.string(),
    context: z.string(),
    credit: z.string(),
    tags: z.array(z.string()),
    hero: image().optional(),
    heroAlt: z.string().optional(),
    heroCaption: z.string().optional(),
    gallery: z.array(z.object({
      image: image(),
      alt: z.string(),
      caption: z.string(),
    })).default([]),
    resources: z.array(z.object({label: z.string(), href: z.string()})).default([]),
  }),
});

export const collections = { projects };
