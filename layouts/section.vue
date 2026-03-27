<script setup lang="ts">
import { useVariant } from '../composables/useVariant'

const props = defineProps({
  variant: { type: String, default: 'default' },
  logo: { type: [String, Boolean], default: false },
  logoPosition: { type: String, default: 'bottom-right' },
})

const { bg, isLight } = useVariant(props.variant, {
  default: '/theme/backgrounds/chapter-intro.svg',
  dark: '/theme/backgrounds/chapter-intro-dark.svg',
  light: '/theme/backgrounds/chapter-intro-light.svg',
})
</script>

<template>
  <div :class="['slidev-layout section', `section-${variant}`]">
    <KabisaLayout :background="bg" :logo="logo" :logo-position="logoPosition" :is-light="isLight">
      <slot />
    </KabisaLayout>
  </div>
</template>
