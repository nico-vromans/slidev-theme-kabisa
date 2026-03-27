<script setup lang="ts">
import { useVariant } from '../composables/useVariant'

const props = defineProps({
  variant: { type: String, default: 'default' },
  logo: { type: [String, Boolean], default: 'full' },
  logoPosition: { type: String, default: 'bottom-right' },
})

const { bg, isLight } = useVariant(props.variant, {
  default: '/theme/backgrounds/page.svg',
  dark: '/theme/backgrounds/page-dark.svg',
  light: '/theme/backgrounds/page-light.svg',
})
</script>

<template>
  <div :class="['slidev-layout default', `default-${variant}`]">
    <KabisaLayout :background="bg" :logo="logo" :logo-position="logoPosition" :is-light="isLight">
      <slot />
    </KabisaLayout>
  </div>
</template>
