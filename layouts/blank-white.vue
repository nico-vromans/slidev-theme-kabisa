<script setup lang="ts">
defineProps({
  logo: { type: [String, Boolean], default: 'full' },
  logoPosition: { type: String, default: 'bottom-right' },
})
</script>

<template>
  <div class="slidev-layout blank-white">
    <KabisaLayout :logo="logo" :logo-position="logoPosition" :is-light="true">
      <slot />
    </KabisaLayout>
  </div>
</template>
