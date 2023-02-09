<script>
export default {
  props: {
    starCount: Number,
    layers: Array
  },
  data() {
    return {
      star: 1
    };
  },
  mounted() {
    setInterval(() => {
      while (true) {
        const nextStar = Math.floor(Math.random() * this.starCount) + 1;
        if (nextStar !== this.star) {
          this.star = nextStar;
          break;
        }
      }
    }, 1618);
  }
};
</script>

<template>
  <div class="system">
    <img
      v-for="index of starCount"
      class="star" alt="iulian" draggable="false"
      :src="`/photos/${index}.png`"
      :class="{ active: index === star }"
    />
    <div v-for="(layer, index) of layers" class="layer" :style="{
      '--diameter': `${150 * Math.pow(1.5, index + 1)}px`,
      '--color': `#${(4 - index).toString().repeat(3)}`,
      '--time': `${70 * Math.pow(1.618, index)}s`,
      '--opacity': 1 - index * .25,
      '--scale': 1 - Math.pow(.314, index + 1)
    }">
      <div class="orbit" />
      <div v-for="(planet, index) of layer" class="planet" :style="{
        '--delay': `${360 / layer.length * index}deg`
      }">
        <div class="emoji">
          <img :src="`https://abs-0.twimg.com/emoji/v2/svg/${planet}.svg`" :alt="planet" draggable="false" />
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

.system :where(.star, .orbit, .planet) {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  translate: -50% -50%;
}

.system .star {
  width: 150px;
  height: 150px;
  border: 3px solid #555;
  user-select: none;
  transition: opacity .25s;
}

.system .star.active {
  opacity: 1;
}

.system .star:not(.active) {
  opacity: 0;
}

.system .orbit {
  width: var(--diameter);
  height: var(--diameter);
  border: 3px dashed var(--color);
  animation: orbit-rotating var(--time) linear infinite;
}

.system .planet {
  z-index: 1;
  animation: planet-rotating calc(var(--time) / 5) linear infinite;
}

.system .planet .emoji {
  padding: 10px;
  width: 30px;
  height: 30px;
  border: 3px solid var(--color);
  border-radius: 50%;
  background-color: #111;
  scale: var(--scale);
  transition: scale .25s;
}

.system .planet .emoji:hover {
  scale: calc(var(--scale) * 1.25);
}

.system .planet .emoji img {
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
