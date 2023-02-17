<script>
import Twemoji from '../elements/Twemoji.vue';

export default {
  props: {
    languages: Array
  }
};
</script>

<template>
  <section>
    <h2><Twemoji emoji="🦉" /> Limbaje Cunoscute</h2>
    <!-- <main>
      <article v-for="language of languages">{{ language }}</article>
    </main> -->
  </section>
</template>

<style scoped>
section {
  background-image: linear-gradient(45deg, var(--purple-1), var(--purple-2));
}

/* main {
  display: flex;
}

article {
  width: 300px;
  aspect-ratio: .618;
  padding: 1rem;
  background-color: var(--white);
  box-shadow: -1rem 0 3rem var(--black);
  border-radius: 1rem;
} */
</style>
