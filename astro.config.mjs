import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import tailwindcss from '@tailwindcss/vite'
import vue from '@astrojs/vue'

import { linkPlugin } from './remark/link.mjs'
import { textPlugin } from './remark/text.mjs'

export default defineConfig({
  integrations: [mdx(), vue()],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['pyodide'],
    },
  },
  markdown: {
    remarkPlugins: [remarkMath, linkPlugin, textPlugin],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
  site: 'https://ioleniuc.ro/',
  trailingSlash: 'always',
})
