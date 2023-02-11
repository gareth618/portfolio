<script>
import HelloContent from '../elements/HelloContent.vue';
import StellarSystem from '../elements/StellarSystem.vue';
import ScrollDownArrow from '../elements/ScrollDownArrow.vue';

export default {
  props: {
    name: String,
    descriptions: Array,
    starCount: Number,
    layers: Array
  },
  components: {
    HelloContent,
    StellarSystem,
    ScrollDownArrow
  }
};
</script>

<template>
  <section>
    <HelloContent class="hello" :name="name" :descriptions="descriptions" />
    <StellarSystem class="animation" :starCount="starCount" :layers="layers" />
    <ScrollDownArrow class="scroll" />
  </section>
</template>

<style scoped>
section {
  position: relative;
	display: flex;
	justify-content: space-around;
	align-items: center;
  padding: 0;
  width: 100%;
  height: clamp(700px, 100vh, 800px);
	background-color: var(--black);
	overflow: hidden;
}

.scroll {
  position: absolute;
  left: 50%;
  bottom: 6rem;
  translate: -50% 0;
}

@media (max-width: 1150px) {
  section {
    flex-direction: column;
    justify-content: space-evenly;
	}

  .hello {
    align-items: center;
	}

  .animation {
    width: 370px;
    height: 370px;
  }

  .animation:deep(.layer:last-of-type) {
    display: none;
  }

  .scroll {
    display: none;
  }
}

@media (max-width: 700px) {
  section {
    padding: 3rem 0;
    height: fit-content;
    gap: 3rem;
  }

  .hello:deep(h1) {
    font-size: 3rem;
  }

  .hello:deep(p) {
    font-size: 1.8rem;
  }
}
</style>
