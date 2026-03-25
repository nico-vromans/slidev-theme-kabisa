<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'default' },
})

const backgrounds: Record<string, string> = {
  default: '/backgrounds/page.svg',
  dark: '/backgrounds/page-dark.svg',
  light: '/backgrounds/page-light.svg',
}

const bg = computed(() => backgrounds[props.variant] || backgrounds.default)
const isLight = computed(() => props.variant === 'light')
</script>

<template>
  <div :class="['slidev-layout default', { 'default-light': isLight }]">
    <img :src="bg" class="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />

    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
