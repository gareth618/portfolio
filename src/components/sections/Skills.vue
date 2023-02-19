<script>
import Twemoji from '../elements/Twemoji.vue';

export default {
  props: {
    skills: Array
  },
  data() {
    return {
      nodes: [
        [-10, 15],
        [0, 0],
        [10, 15],
        [0, 30],
        [20, 30]
      ],
      edges: [
        [1, 0],
        [1, 2],
        [2, 3],
        [2, 4]
      ]
    };
  },
  components: {
    Twemoji
  }
};
</script>

<template>
  <section>
    <h2><Twemoji emoji="🧠" /> Skilluri</h2>
    <ul>
      <li v-for="skill of skills"><Twemoji :emoji="skill.icon" /> {{ skill.name }}</li>
    </ul>
    <svg viewBox="-15 -5 40 40">
      <line v-for="edge of edges" :x1="nodes[edge[0]][0]" :y1="nodes[edge[0]][1]" :x2="nodes[edge[1]][0]" :y2="nodes[edge[1]][1]" />
      <circle v-for="node of nodes" :cx="node[0]" :cy="node[1]" r="4" />
    </svg>
  </section>
</template>

<style scoped>
section {
  position: relative;
  background-image: linear-gradient(-45deg, limegreen, forestgreen);
}

ul {
  display: flex;
  flex-direction: column;
  gap: .25em;
  font-size: var(--font-size);
  color: var(--white);
  list-style: none;
}

li:hover img {
  rotate: 360deg;
}

li img {
  margin-right: .25em;
  user-select: none;
  transition: rotate ease-in-out .5s;
}

svg {
  position: absolute;
  top: 50%;
  right: 5%;
  height: 50%;
  translate: 0 -50%;
  rotate: 10deg;
}

svg line {
  stroke: #777;
  --dasharray: 20;
}

svg circle {
  fill: #aaa;
  stroke: #777;
  --dasharray: 30;
}

svg :where(line, circle) {
  stroke-dasharray: var(--dasharray);
  animation: dash 10s ease-in-out alternate infinite;
}

@keyframes dash {
  0% {
    stroke-dashoffset: var(--dasharray);
  }
  20% {
    stroke-dashoffset: 0;
  }
  80% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: var(--dasharray);
  }
}

@media (max-width: 350px) {
  svg {
    display: none;
  }
}
</style>
