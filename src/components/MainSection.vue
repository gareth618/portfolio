<script>
import HelloContent from './HelloContent.vue';
import StellarSystem from './StellarSystem.vue';

export default {
  props: {
    name: String,
    descriptions: Array,
    starCount: Number,
    layers: Array
  },
  components: {
    HelloContent,
    StellarSystem
  }
};
</script>

<template>
  <section>
    <HelloContent class="hello" :name="name" :descriptions="descriptions" />
    <StellarSystem class="animation" :starCount="starCount" :layers="layers" />
  </section>
</template>

<style scoped>
section {
	display: flex;
	justify-content: space-around;
	align-items: center;
  width: 100%;
	height: min(100vh, 800px);
	background-color: #111;
	overflow: hidden;
}

@media (max-width: 1150px) {
  section {
    flex-direction: column;
    justify-content: space-evenly;
	}

  :deep(.hello) {
    align-items: center;
	}

  :deep(.animation) {
    width: 370px;
    height: 370px;
  }

  :deep(.animation .layer:last-of-type) {
    display: none;
  }
}

@media (max-width: 700px) {
  section {
    padding: 3rem 0;
    height: fit-content;
    gap: 3rem;
  }

  :deep(.hello h1) {
    font-size: 3rem;
  }

  :deep(.hello p) {
    font-size: 1.8rem;
  }
}
</style>
