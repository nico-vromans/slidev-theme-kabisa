<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'default' },
})

const backgrounds: Record<string, string> = {
  default: '/backgrounds/highlight.svg',
  dark: '/backgrounds/highlight-dark.svg',
  light: '/backgrounds/highlight-light.svg',
}

const bg = computed(() => backgrounds[props.variant] || backgrounds.default)
const isLight = computed(() => props.variant === 'light')
</script>

<template>
  <div :class="['slidev-layout highlight', { 'highlight-light': isLight }]">
    <img :src="bg" class="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />

    <div class="my-auto w-full relative z-10">
      <slot />
    </div>
  </div>
</template>
