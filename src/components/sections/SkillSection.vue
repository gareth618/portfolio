<script>
import Twemoji from '../elements/Twemoji.vue';
import CurveDivider from '../elements/CurveDivider.vue';

export default {
  props: {
    technologies: Array
  },
  components: {
    Twemoji,
    CurveDivider
  }
};
</script>

<template>
  <section>
    <CurveDivider />
    <h2><Twemoji emoji="💡" /> Tehnologii</h2>
    <div class="technologies">
      <article v-for="technology of technologies">
        <div class="back">
          <h3>{{ technology }}</h3>
        </div>
        <div class="front">
          <img :src="`/technologies/${technology.toLowerCase()}.svg`" :alt="technology" />
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
section {
  position: relative;
  padding-top: calc(1rem + 100px);
  background-image: linear-gradient(45deg, var(--blue-1), var(--blue-2));
}

h2 {
  margin-bottom: 2rem;
  padding-bottom: .1em;
  width: fit-content;
  font-size: 3rem;
  color: var(--white);
  border-bottom: .1em dashed var(--white);
}

.technologies {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
}

article {
  position: relative;
  aspect-ratio: 1 / 1;
}

:where(.front, .back) {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  border: 3px solid var(--white);
}

h3 {
  font-size: 1.25rem;
  color: var(--white);
}

article img {
  height: 3rem;
}
</style>
