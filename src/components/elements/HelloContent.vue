<script>
export default {
  props: {
    name: String,
    descriptions: Array
  },
  data() {
    return {
      descriptionId: 0,
      letterCount: 0,
      increasing: true,
      delta: 100
    };
  },
  mounted() {
    const fun = () => {
      this.letterCount += this.increasing ? +1 : -1;
      if (this.letterCount === this.descriptions[this.descriptionId].length) {
        this.delta = 5000;
        this.increasing = false;
      }
      else if (this.letterCount === 0) {
        this.delta = 100;
        this.increasing = true;
        this.descriptionId = (this.descriptionId + 1) % this.descriptions.length;
      }
      else if (this.increasing && this.letterCount === 1) {
        this.delta = 100;
      }
      else if (!this.increasing && this.letterCount === this.descriptions[this.descriptionId].length - 1) {
        this.delta = 100;
      }
      else {
        this.delta *= .95;
      }
      setTimeout(fun, this.delta);
    };
    setTimeout(fun, 1618);
  }
};
</script>

<template>
  <main>
    <h1>{{ name }}</h1>
    <p>{{ descriptions[descriptionId].slice(0, letterCount) }}</p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 1rem;
  line-height: 1;
  font-family: 'Merienda', cursive;
  user-select: none;
}

h1 {
  font-size: clamp(3rem, 10vw, 5rem);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(to right, var(--blue-2), var(--blue-1));
}

p {
  padding-right: .2rem;
  width: fit-content;
  height: 1em;
  font-size: clamp(1.8rem, 6vw, 2.8rem);
  color: var(--gray);
  border-right-width: .1em;
  border-right-style: solid;
  animation: blinking .75s ease-in-out infinite alternate-reverse;
}

@keyframes blinking {
  from {
    border-color: var(--cursor-1);
  }
  to {
    border-color: var(--cursor-2);
  }
}
</style>
