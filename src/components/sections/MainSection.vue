<script>
import HelloContent from '../elements/HelloContent.vue';
import StellarSystem from '../elements/StellarSystem.vue';
import ScrollDownArrow from '../elements/ScrollDownArrow.vue';

export default {
  components: {
    HelloContent,
    StellarSystem,
    ScrollDownArrow
  }
};
</script>

<template>
  <section>
    <HelloContent
      class="hello"
      name="Iulian Oleniuc"
      :descriptions="[
        'student la informatică',
        'pasionat de algoritmică',
        'full-stack web developer',
        'biciclist amator',
        'din păcate perfecționist',
        'fan al culturii hip-hop'
      ]"
    />
    <StellarSystem
      class="animation"
      :starCount="10"
      :layers="[
        [
          { icon: '🐧', text: 'linux' },
          { icon: '🦆', text: 'rațe' }
        ],
        [
          { icon: '🎧', text: 'rap' },
          { icon: '🚴‍♂️', text: 'ciclism' },
          { icon: '🏔️', text: 'călătorii' }
        ],
        [
          { icon: '📚', text: 'citit' },
          { icon: '🍻', text: 'ieșiri' },
          { icon: '🍎', text: 'apple' },
          { icon: '✍️', text: 'scris' },
          { icon: '👨‍💻', text: 'codat' }
        ]
      ]"
    />
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
}
</style>
