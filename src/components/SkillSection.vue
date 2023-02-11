<script>
import CurveDivider from './CurveDivider.vue';

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
  padding: calc(min(10vh, 15vw) + 2rem) 3rem 2rem 3rem;
	background-image: linear-gradient(45deg, dodgerblue, royalblue);
}

h1 {
  font-size: 5rem;
  color: white;
  text-underline-offset: .1em;
  text-decoration: underline solid #ccc .1em;
}
</style>
