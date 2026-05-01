import { defineCollection, z } from 'astro:content';

const writingBaseSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.date().optional(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
});

export const collections = {
  'case-studies': defineCollection({
    type: 'content',
    schema: writingBaseSchema.extend({
      project: z.string().optional(),
    }),
  }),
  notes: defineCollection({
    type: 'content',
    schema: writingBaseSchema,
  }),
};
