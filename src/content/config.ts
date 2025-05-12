import { z, defineCollection } from 'astro:content'

const technology = z.string()

const project = z.object({
  title: z.string(),
  icon: z.string().emoji(),
  abstract: z.string(),
  github: z.string().url().optional(),
  link: z.string().url().optional(),
})

const paper = z.object({
  title: z.string(),
  icon: z.string().emoji(),
  abstract: z.string(),
  link: z.string(),
})

const categories = defineCollection({
  type: 'data',
  schema: z.union([z.array(technology), z.array(project), z.array(paper)]),
})

const pages = defineCollection({
  type: 'content',
})

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string().emoji(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
})

export const collections = {
  categories,
  pages,
  posts,
}

export type Technology = z.infer<typeof technology>
export type Project = z.infer<typeof project>
export type Paper = z.infer<typeof paper>
