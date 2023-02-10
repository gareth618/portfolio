<script>
export default {
  props: {
    name: String,
    descriptions: Array
  }
};
</script>

<template>
  <main>
    <h1>{{ name }}</h1>
    <p>{{ descriptions[0] }}</p>
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
}

h1 {
	font-size: 5rem;
	color: transparent;
	background-clip: text;
	-webkit-background-clip: text;
	background-image: linear-gradient(to right, royalblue, dodgerblue);
}

p {
	font-size: 3rem;
	color: #777;
}
</style>
