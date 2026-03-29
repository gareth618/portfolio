<script setup lang="ts">
import { computed, ref } from 'vue'
import prism from 'prismjs'

import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-python'

import '~styles/prism.css'

prism.highlightAll = () => {}

type Props = {
  language: 'markdown' | 'python'
}

const props = defineProps<Props>()

const model = defineModel<string>()

const inputRef = ref<HTMLTextAreaElement>()
const outputRef = ref<HTMLPreElement>()

const syncOutputScroll = () => {
  outputRef.value!.scrollTop = inputRef.value!.scrollTop
}
const syncInputScroll = () => {
  inputRef.value!.scrollTop = outputRef.value!.scrollTop
}

const processedCode = computed(() => {
  const code = model.value ?? ''
  return code + (code.at(-1) === '\n' ? ' ' : '')
})

const highlightedCode = computed(() => {
  try {
    return prism.highlight(
      processedCode.value,
      prism.languages[props.language],
      props.language,
    )
  } catch (error) {
    console.error(error)
    return processedCode
  }
})
</script>

<template>
  <div>
    <pre
      ref="outputRef"
      class="scrollbar-2 scrollbar-transparent"
      @scroll="syncInputScroll"
    ><code :class="`language-${language}`" v-html="highlightedCode" /></pre>
    <textarea
      ref="inputRef"
      v-model="model"
      class="scrollbar-2 scrollbar-gray"
      :name="`${language}-editor`"
      @scroll="syncOutputScroll"
    />
  </div>
</template>

<style scoped>
div {
  position: relative;
  height: 288px;
  margin: 2rem 0;
}

textarea,
pre {
  position: absolute;
  inset: 0;
  padding: 1rem;
  margin: 0;
  overflow: auto;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}

textarea,
code {
  font-family: monospace;
  font-size: 1rem;
}

textarea {
  z-index: 10;
  color: transparent;
  caret-color: var(--code-fg);
  resize: none;
  background-color: transparent;
}

pre {
  user-select: none;
  background-color: var(--code-bg);
}

code {
  color: var(--code-fg);
}
</style>
