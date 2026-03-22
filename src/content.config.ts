import { file, glob } from 'astro/loaders'
import { z } from 'astro/zod'

import { defineCollection } from 'astro:content'

const technologies = defineCollection({
  loader: file('src/content/technologies.yaml'),
  schema: z.object({
    name: z.string(),
  }),
})

const projects = defineCollection({
  loader: file('src/content/projects.yaml'),
  schema: z.object({
    title: z.string(),
    icon: z.emoji(),
    abstract: z.string(),
    github: z.url().optional(),
    link: z.url().optional(),
  }),
})

const papers = defineCollection({
  loader: file('src/content/papers.yaml'),
  schema: z.object({
    title: z.string(),
    icon: z.emoji(),
    abstract: z.string(),
    link: z.string().optional(),
  }),
})

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
})

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    icon: z.emoji(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
})

export const collections = {
  technologies,
  projects,
  papers,
  pages,
  posts,
}
