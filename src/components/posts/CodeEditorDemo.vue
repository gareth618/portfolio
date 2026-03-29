<script setup lang="ts">
import { ref } from 'vue'

import CodeEditor from './CodeEditor.vue'

const value = ref(
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
</script>

<template>
  <CodeEditor v-model="value" language="python" />
</template>
