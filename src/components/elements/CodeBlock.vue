<script>
import prism from 'prismjs';

import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';

prism.highlightAll = () => { };

export default {
  props: {
    code: Array,
    language: String
  },
  computed: {
    highlighted() {
      return prism.highlight(this.code.join('\n'), prism.languages[this.language], this.language);
    }
  }
};
</script>

<template>
  <div class="window">
    <div class="topbar">
      <div />
      <div />
      <div />
    </div>
    <pre><code :class="`language-${language}`" v-html="highlighted" /></pre>
  </div>
</template>

<style scoped>
.window {
  color: var(--white);
  background-color: #222;
  border-radius: .5rem;
}

.topbar {
  display: flex;
  gap: .25rem;
  padding: .5rem;
  background-color: var(--black);
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
}

.topbar div {
  width: .75rem;
  height: .75rem;
  border-radius: 50%;
}

.topbar div:nth-child(1) { background-color: #ff605c; }
.topbar div:nth-child(2) { background-color: #ffbd44; }
.topbar div:nth-child(3) { background-color: #00ca4e; }

pre {
  margin: 0;
  padding: 1rem;
  font-size: .75rem;
  line-height: 1.4;
  overflow-x: scroll;
}

pre::-webkit-scrollbar {
  height: .5rem;
}

pre::-webkit-scrollbar-thumb {
  background-color: #666;
  border-radius: .5rem;
}
</style>
