<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'title' },
  logo: { type: [String, Boolean], default: 'full' },
  logoPosition: { type: String, default: 'bottom-right' },
  logoSize: { type: String, default: 'h-18' },
})

const background = computed(() => `/theme/backgrounds/${props.variant}.svg`)
const isLight = computed(() => props.variant === 'end')
</script>

<template>
  <div class="slidev-layout cover" :class="`cover-${variant}`">
    <KabisaLayout :background="background" :logo="logo" :logo-position="logoPosition" :logo-size="logoSize" :is-light="isLight" :layout-variant="variant">
      <slot />
    </KabisaLayout>
  </div>
</template>
