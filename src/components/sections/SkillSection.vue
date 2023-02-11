<script>
import CurveDivider from '../elements/CurveDivider.vue';

export default {
  components: {
    CurveDivider
  }
};
</script>

<template>
  <section>
    <CurveDivider />
    <h1>Skilluri & Cunoștințe</h1>
  </section>
</template>

<style scoped>
section {
	position: relative;
  padding-top: calc(1rem + 100px);
	background-image: linear-gradient(45deg, var(--blue-1), var(--blue-2));
}

h1 {
  font-size: 5rem;
  color: var(--white);
  text-underline-offset: .1em;
  text-decoration: underline solid var(--white) .1em;
}
</style>
