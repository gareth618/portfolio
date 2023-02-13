<script>
import Twemoji from '../elements/Twemoji.vue';

export default {
  props: {
    concepts: Array
  },
  components: {
    Twemoji
  }
};
</script>

<template>
  <section>
    <h2><Twemoji emoji="🧠" /> Cunoștințe</h2>
    <p v-for="concept of concepts">{{ concept }}</p>
  </section>
</template>

<style scoped>
section {
  position: relative;
  background-image: linear-gradient(-45deg, limegreen, forestgreen);
}

p {
  position: absolute;
  top: 10rem;
  width: fit-content;
  padding: 1rem;
  color: var(--white);
  background-color: var(--black);
  font-size: 1.5rem;
  font-weight: bold;
  border: 2px solid var(--white);
  border-radius: 100vh;
  animation: move 5s linear infinite;
}

@keyframes move {
  from {
    right: -10%;
  }
  to {
    right: 110%;
  }
}
</style>
