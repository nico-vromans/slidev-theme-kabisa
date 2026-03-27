<script setup lang="ts">
import { computed } from 'vue'
import { useLogo, type LogoVariant } from '../composables/useLogo'

const props = defineProps({
  background: { type: String, default: '' },
  logo: { type: [String, Boolean], default: false },
  logoPosition: { type: String, default: 'bottom-right' },
  logoSize: { type: String, default: 'h-18' },
  isLight: { type: Boolean, default: false },
  layoutVariant: { type: String, default: 'default' },
})

const logoSrc = useLogo(props.logo as LogoVariant | boolean, props.isLight)

const positionClasses: Record<string, Record<string, Record<string, string>>> = {
  default: {
    default: {
      'top-left': 'top-18 left-8',
      'top-right': 'top-18 right-8',
      'bottom-left': 'bottom-18 left-8',
      'bottom-right': 'bottom-18 right-8',
    },
    bare: {
      'top-left': 'top-12 left-18',
      'top-right': 'top-12 right-18',
      'bottom-left': 'bottom-12 left-18',
      'bottom-right': 'bottom-12 right-18',
    },
  },
  title: {
    default: {
      'top-left': 'top-18 left-8',
      'top-right': 'top-18 right-8',
      'bottom-left': 'bottom-18 left-8',
      'bottom-right': 'bottom-18 right-8',
    },
    bare: {
      'top-left': 'top-12 left-18',
      'top-right': 'top-12 right-18',
      'bottom-left': 'bottom-12 left-18',
      'bottom-right': 'bottom-12 right-18',
    },
  },
  end: {
    default: {
      'top-left': 'top-8 left-8',
      'top-right': 'top-8 right-8',
      'bottom-left': 'bottom-8 left-8',
      'bottom-right': 'bottom-8 right-8',
    },
    bare: {
      'top-left': 'top-12 left-18',
      'top-right': 'top-12 right-18',
      'bottom-left': 'bottom-12 left-18',
      'bottom-right': 'bottom-12 right-18',
    },
  },
}

const logoVariant = props.logo === true ? 'name' : props.logo === false ? 'none' : props.logo
const logoType = logoVariant === 'bare' ? 'bare' : 'default'
const layout = positionClasses[props.layoutVariant] || positionClasses['default']
const classes = layout[logoType]
const logoPositionClass = computed(() => classes[props.logoPosition] || classes['bottom-right'])
</script>

<template>
  <div class="h-full grid">
    <img
      v-if="background"
      :src="background"
      class="absolute inset-0 w-full h-full object-cover"
      aria-hidden="true"
    />

    <div class="kabisa-content relative z-10">
      <slot />
    </div>

    <div v-if="logoSrc" class="absolute z-10" :class="logoPositionClass">
      <img :src="logoSrc" :class="logoSize" alt="Kabisa" />
    </div>
  </div>
</template>
