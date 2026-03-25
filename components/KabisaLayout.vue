<script setup lang="ts">
import { computed } from 'vue'
import { useLogo, type LogoVariant } from '../composables/useLogo'

const props = defineProps({
  background: { type: String, default: '' },
  logo: { type: [String, Boolean], default: false },
  logoPosition: { type: String, default: 'bottom-right' },
  isLight: { type: Boolean, default: false },
})

const logoSrc = useLogo(props.logo as LogoVariant | boolean, props.isLight)

const positionClasses: Record<string, string> = {
  'top-left': 'top-8 left-14',
  'top-right': 'top-8 right-14',
  'bottom-left': 'bottom-8 left-14',
  'bottom-right': 'bottom-8 right-14',
}

const logoPositionClass = computed(() => positionClasses[props.logoPosition] || positionClasses['bottom-right'])
</script>

<template>
  <div>
    <img
      v-if="background"
      :src="background"
      class="absolute inset-0 w-full h-full object-cover"
      aria-hidden="true"
    />

    <div class="my-auto w-full relative z-10">
      <slot />
    </div>

    <div v-if="logoSrc" class="absolute z-10" :class="logoPositionClass">
      <img :src="logoSrc" class="h-8" alt="Kabisa" />
    </div>
  </div>
</template>
