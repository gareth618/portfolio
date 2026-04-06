<script setup lang="ts">
import { type PyodideAPI, loadPyodide } from 'pyodide'
import { onMounted, ref, watch } from 'vue'

import CodeEditor from './CodeEditor.vue'

const pyodide = ref<PyodideAPI | null>(null)

onMounted(() => {
  setTimeout(async () => {
    pyodide.value = await loadPyodide()
  }, 1000)
})

const code = ref(
  [
    'n = int(input())',
    't1 = 0',
    't2 = 1',
    'for i in range(n):',
    '  t3 = t1 + t2',
    '  t1 = t2',
    '  t2 = t3',
    'print(t1)',
  ].join('\n'),
)

const input = ref('10')
const output = ref('')

watch([input, code, pyodide], async ([newInput, newCode, newPyodide]) => {
  if (newPyodide) {
    try {
      newPyodide.setStdin({ stdin: () => newInput })
      newPyodide.setStdout({ batched: text => (output.value += text) })
      output.value = ''
      await newPyodide.runPythonAsync(newCode)
    } catch (error) {
      output.value = error as string
    }
  }
})
</script>

<template>
  <p v-if="!pyodide">Loading Pyodide…</p>
  <div v-else class="grid grid-cols-2 grid-rows-2 gap-4">
    <CodeEditor
      v-model="code"
      language="python"
      class="editor max-sm:col-span-2 sm:row-span-2"
    />
    <textarea
      v-model="input"
      name="python-input"
      class="scrollbar-2 scrollbar-gray max-sm:mb-8 sm:mt-8"
    />
    <textarea
      name="python-output"
      :value="output"
      :disabled="true"
      class="scrollbar-2 scrollbar-gray mb-8"
    />
  </div>
</template>

<style scoped>
textarea {
  padding: 1rem;
  overflow: auto;
  font-family: monospace;
  font-size: 1rem;
  color: var(--code-fg);
  overflow-wrap: break-word;
  white-space: pre-wrap;
  resize: none;
  background-color: var(--code-bg);
}

@media (width < 640px) {
  .editor {
    margin-bottom: 0;
  }
}
</style>
