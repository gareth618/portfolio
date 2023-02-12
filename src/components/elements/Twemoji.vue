<script>
import twemoji from 'twemoji';

export default {
  props: {
    emoji: String
  },
  computed: {
    source() {
      return twemoji.parse(this.emoji, {
        folder: 'svg',
        ext: '.svg'
      }).match(/(?<=src=").+(?=")/)[0];
    }
  }
};
</script>

<template>
  <img :src="source" :alt="emoji" draggable="false" />
</template>

<style scoped>
img {
  width: 1em;
  height: 1em;
  vertical-align: -.2em;
}
</style>
