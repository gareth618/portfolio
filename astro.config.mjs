import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import vue from '@astrojs/vue'

import { linkPlugin } from './remark/link.mjs'
import { textPlugin } from './remark/text.mjs'

export default defineConfig({
  integrations: [mdx(), vue()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [linkPlugin, textPlugin],
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
  site: 'https://ioleniuc.ro/',
  trailingSlash: 'always',
})
