<script setup lang="ts">
import EmojiIcon from '~components/general/EmojiIcon.vue'

const layers = [
  ['🦆', '🐧'],
  ['🎧', '📚', '🚴‍♂️'],
  ['✍️', '👨‍💻', '🍎', '🍻', '🏔️'],
]
</script>

<template>
  <div class="io-atom aspect-square shrink-0 overflow-hidden">
    <div class="relative size-full">
      <div
        class="group absolute top-1/2 left-1/2 z-10 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
        style="height: 150px; border-color: #666"
      >
        <img
          class="absolute top-0 right-0 bottom-0 left-0 z-20 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
          :src="'/photo/0.webp'"
          alt="Gareth"
          draggable="false"
        />
        <img
          class="absolute top-0 right-0 bottom-0 left-0 rounded-full opacity-100 transition-opacity"
          :src="'/photo/1.webp'"
          alt="Iulian"
          draggable="false"
        />
      </div>
      <div
        v-for="(layer, index) of layers"
        :key="index"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        :class="{ 'max-sm:hidden': index > 0 }"
        :style="{
          '--io-diameter': `${150 + (index + 1) * 100}px`,
          '--io-color': `#${(5 - index).toString().repeat(3)}`,
          '--io-time': `${70 * Math.pow(1.618, index)}s`,
          '--io-opacity': 1 - index * 0.25,
        }"
      >
        <div
          class="aspect-square rounded-full border-2 border-dashed"
          style="
            height: var(--io-diameter);
            border-color: var(--io-color);
            animation: io-orbit-rotating var(--io-time) linear infinite;
          "
        />
        <div
          v-for="(electron, innerIndex) of layer"
          :key="innerIndex"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          :style="{ '--io-delay': `${(360 / layer.length) * innerIndex}deg` }"
        >
          <div
            class="aspect-square h-10 rounded-full border-2 bg-gray-950 p-2"
            style="
              border-color: var(--io-color);
              animation: io-electron-rotating calc(var(--io-time) / 5) linear
                infinite;
            "
          >
            <div style="opacity: var(--io-opacity)">
              <EmojiIcon :emoji="electron" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.io-atom {
  height: 500px;
}

@media not all and (width >= 640px) {
  .io-atom {
    height: 300px;
  }
}

@keyframes io-orbit-rotating {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}

@keyframes io-electron-rotating {
  from {
    transform: rotate(calc(0deg + var(--io-delay)))
      translateX(calc(var(--io-diameter) / 2))
      rotate(calc(360deg - var(--io-delay)));
  }

  to {
    transform: rotate(calc(360deg + var(--io-delay)))
      translateX(calc(var(--io-diameter) / 2))
      rotate(calc(0deg - var(--io-delay)));
  }
}
</style>
