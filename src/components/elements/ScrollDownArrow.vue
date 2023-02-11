<template>
  <div class="container">
    <div v-for="_ in 2" class="arrow">
      <div class="left" />
      <div class="right" />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

.arrow {
  position: absolute;
  opacity: 0;
  animation: scrolling 4s linear infinite;
}

.arrow:last-child {
  animation-delay: 2s;
}

:where(.left, .right) {
  position: absolute;
  width: .4rem;
  height: 3rem;
  border-radius: 100vh;
  transform-origin: bottom;
}

.left {
  transform: rotate(+45deg) translateX(-.2rem);
}

.right {
  transform: rotate(-45deg) translateX(+.2rem);
}

.arrow:first-child :where(.left, .right) {
  background-color: var(--blue-1);
}

.arrow:last-child :where(.left, .right) {
  background-color: var(--blue-2);
}

@keyframes scrolling {
  0% {
    opacity: 0;
    translate: 0 -1.25rem;
  }
  30% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    translate: 0 +1.25rem;
  }
}
</style>
