<script>
import Twemoji from '../elements/Twemoji.vue';
import ShapeDivider from '../elements/ShapeDivider.vue';

export default {
  props: {
    technologies: Array
  },
  components: {
    Twemoji,
    ShapeDivider
  }
};
</script>

<template>
  <section>
    <ShapeDivider />
    <h2><Twemoji emoji="💡" /> Tehnologii Folosite</h2>
    <main>
      <article v-for="technology of technologies" :style="{ '--color': technology.color }">
        <div class="card">
          <div class="back">
            <h3>{{ technology.name }}</h3>
          </div>
          <div class="front">
            <img :src="`/technologies/${technology.name.toLowerCase()}.svg`" :alt="technology.name.toLowerCase()" />
          </div>
        </div>
      </article>
    </main>
  </section>
</template>

<style scoped>
section {
  background-image: linear-gradient(45deg, var(--blue-1), var(--blue-2));
}

main {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
}

article {
  aspect-ratio: 1.618;
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform ease-out .5s;
}

article:hover .card {
  transform: rotateY(180deg);
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
  border: 3px solid var(--color);
  backface-visibility: hidden;
  user-select: none;
}

.back {
  transform: rotateY(180deg);
}

h3 {
  font-size: 1.25rem;
  color: var(--color);
}

article img {
  height: 3rem;
}
</style>
