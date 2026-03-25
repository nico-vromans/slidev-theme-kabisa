<script setup lang="ts">
defineProps({
  logo: { type: [String, Boolean], default: 'full' },
  logoPosition: { type: String, default: 'bottom-right' },
})
</script>

<template>
  <div class="slidev-layout end">
    <KabisaLayout background="/backgrounds/end.svg" :logo="logo" :logo-position="logoPosition" :is-light="true">
      <div class="text-center">
        <slot />
      </div>
    </KabisaLayout>
  </div>
</template>
