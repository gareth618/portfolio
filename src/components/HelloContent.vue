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
}

h1 {
	font-size: 5rem;
	color: transparent;
	background-clip: text;
	-webkit-background-clip: text;
	background-image: linear-gradient(to right, royalblue, dodgerblue);
}

p {
	padding-right: .2rem;
	width: fit-content;
	height: 1em;
	font-size: 2.8rem;
	color: #777;
	border-right-width: .1em;
	border-right-style: solid;
	animation: blinking .75s ease-in-out infinite alternate-reverse;
}

@keyframes blinking {
	from {
		border-color: #6495eddd;
	}
	to {
		border-color: #6495ed22;
	}
}
</style>
