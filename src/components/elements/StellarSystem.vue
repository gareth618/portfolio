<script>
import Twemoji from './Twemoji.vue';

export default {
  props: {
    starCount: Number,
    layers: Array
  },
  data() {
    return {
      starId: 1
    };
  },
  components: {
    Twemoji
  },
  mounted() {
    setInterval(() => {
      while (true) {
        const nextStarId = Math.floor(Math.random() * this.starCount) + 1;
        if (nextStarId !== this.starId) {
          this.starId = nextStarId;
          break;
        }
      }
    }, 1618);
  }
};
</script>

<template>
  <div class="system">
    <div class="core">
      <img
        src="/photos/0.webp"
        class="star" alt="gareth" draggable="false"
      />
      <img
        v-for="index of starCount"
        :src="`/photos/${index}.webp`"
        class="star" alt="iulian" draggable="false"
        :class="{ active: index === starId }"
      />
    </div>
    <div v-for="(layer, index) of layers" class="layer" :style="{
      '--diameter': `${150 * Math.pow(1.5, index + 1)}px`,
      '--color': `#${(4 - index).toString().repeat(3)}`,
      '--time': `${70 * Math.pow(1.618, index)}s`,
      '--opacity': 1 - index * .25,
      '--scale': 1 - Math.pow(.314, index + 1)
    }">
      <div class="orbit" />
      <div v-for="(planet, index) of layer" class="planet" :style="{
        '--delay': `${360 / layer.length * index}deg`,
        '--text': `'${planet.text}'`
      }">
        <div class="emoji">
          <Twemoji :emoji="planet.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.system {
  position: relative;
  width: 560px;
  height: 560px;
}

:where(.star, .orbit, .planet) {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  translate: -50% -50%;
}

.star {
  width: 150px;
  height: 150px;
  border: 3px solid #555;
  user-select: none;
  opacity: 0;
  transition: opacity .25s;
}

.star.active {
  opacity: 1;
}

.orbit {
  width: var(--diameter);
  height: var(--diameter);
  border: 3px dashed var(--color);
  animation: orbit-rotating var(--time) linear infinite;
}

.star:first-child {
  z-index: 1;
}

.core:hover .star:first-child {
  opacity: 1;
}

.planet {
  z-index: 2;
  animation: planet-rotating calc(var(--time) / 5) linear infinite;
}

.emoji {
  padding: 10px;
  width: 55px;
  height: 55px;
  border: 3px solid var(--color);
  border-radius: 50%;
  background-color: #111;
  scale: var(--scale);
  transition: scale .25s;
}

.emoji:hover {
  scale: calc(var(--scale) * 1.25);
}

.emoji::after {
  content: var(--text);
  position: absolute;
  top: 50%;
  left: 60px;
  padding: .5rem;
  color: var(--white);
  background-color: var(--black);
  border-radius: 100vh;
  border: 3px solid var(--color);
  translate: 0 -50%;
  opacity: 0;
  visibility: hidden;
  transition-duration: .25s;
  transition-property: opacity, visibility;
}

.emoji:hover::after {
  opacity: 1;
  visibility: visible;
}

.emoji img {
  width: initial;
  height: initial;
  user-select: none;
  opacity: var(--opacity);
}

@keyframes orbit-rotating {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes planet-rotating {
  from {
    transform: rotate(calc(0deg + var(--delay))) translateX(calc(var(--diameter) / 2)) rotate(calc(360deg - var(--delay)));
  }
  to {
    transform: rotate(calc(360deg + var(--delay))) translateX(calc(var(--diameter) / 2)) rotate(calc(0deg - var(--delay)));
  }
}
</style>
