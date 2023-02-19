<script>
import Twemoji from '../elements/Twemoji.vue';
import CodeBlock from '../elements/CodeBlock.vue';

export default {
  props: {
    languages: Array
  },
  components: {
    Twemoji,
    CodeBlock
  }
};
</script>

<template>
  <section>
    <h2><Twemoji emoji="🦉" /> Limbaje Cunoscute</h2>
    <main>
      <div class="languages">
        <article v-for="language of languages">
          <img :src="`/languages/${language.name.toLowerCase()}.svg`" :alt="language.name" draggable="false" />
          <div class="content">
            <h3>{{ language.name }}</h3>
            <CodeBlock :code="language.code" :language="language.name === 'C++' ? 'cpp' : language.name.toLowerCase()" />
          </div>
        </article>
      </div>
    </main>
  </section>
</template>

<style scoped>
section {
  background-image: linear-gradient(45deg, darkorchid, rebeccapurple);
}

main {
  margin-top: -1rem;
  padding: 1.5rem .75rem 1rem .75rem;
  overflow-x: scroll;
}

main::-webkit-scrollbar {
  height: .75rem;
}

main::-webkit-scrollbar-thumb {
  background-color: violet;
  border-radius: 100vh;
}

.languages {
  display: flex;
  width: fit-content;
  align-items: stretch;
}

article {
  display: flex;
  align-items: end;
  gap: 1rem;
  padding: 1rem;
  width: min(400px, 80vw);
  background-color: violet;
  border-radius: 1rem;
  box-shadow: -.2rem 0 .6rem rebeccapurple;
  transition: transform .25s;
}

article:hover {
  transform: translateY(-1rem);
}

article:hover ~ article {
  transform: translateX(calc(min(400px, 80vw) - 50px - 2rem));
}

article:not(:first-child) {
  margin-left: calc(max(-400px, -80vw) + 50px + 2rem);
}

article img {
  width: 50px;
  user-select: none;
}

.content {
  min-width: 0;
  width: 100%;
}

.content h3 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
