import { file, glob } from 'astro/loaders'
import { z } from 'astro/zod'

import { defineCollection, reference } from 'astro:content'

const technologies = defineCollection({
  loader: file('src/content/technologies.yaml'),
  schema: z.object({
    order: z.number(),
    name: z.string(),
  }),
})

const projects = defineCollection({
  loader: file('src/content/projects.yaml'),
  schema: z.object({
    order: z.number(),
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
    order: z.number(),
    title: z.string(),
    icon: z.emoji(),
    abstract: z.string(),
    link: z.string().optional(),
  }),
})

const categories = defineCollection({
  loader: file('src/content/categories.yaml'),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    icon: z.emoji(),
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
    category: reference('categories'),
    tags: z.array(z.string()),
    abstract: z.string(),
  }),
})

export const collections = {
  technologies,
  projects,
  papers,
  categories,
  pages,
  posts,
}
