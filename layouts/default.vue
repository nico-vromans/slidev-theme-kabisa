<script setup lang="ts">
import { useVariant } from '../composables/useVariant'

const props = defineProps({
  variant: { type: String, default: 'default' },
  logo: { type: [String, Boolean], default: 'full' },
  logoPosition: { type: String, default: 'bottom-right' },
})

const { bg, isLight } = useVariant(props.variant, {
  default: '/backgrounds/page.svg',
  dark: '/backgrounds/page-dark.svg',
  light: '/backgrounds/page-light.svg',
})
</script>

<template>
  <div :class="['slidev-layout default', { 'default-light': isLight }]">
    <KabisaLayout :background="bg" :logo="logo" :logo-position="logoPosition" :is-light="isLight">
      <slot />
    </KabisaLayout>
  </div>
</template>
