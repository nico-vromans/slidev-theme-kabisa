<script setup lang="ts">
defineProps({
  variant: { type: String, default: 'dark' },
  logo: { type: [String, Boolean], default: false },
  logoPosition: { type: String, default: 'bottom-right' },
})

const variantClasses: Record<string, string> = {
  dark: 'solid-dark',
  green: 'solid-green',
  white: 'solid-white',
}
</script>

<template>
  <div :class="['slidev-layout solid', variantClasses[variant] || 'solid-dark']">
    <KabisaLayout :logo="logo" :logo-position="logoPosition" :is-light="variant === 'white'">
      <slot />
    </KabisaLayout>
  </div>
</template>
