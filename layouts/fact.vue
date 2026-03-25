<script setup lang="ts">
defineProps({
  light: { type: Boolean, default: false },
})
</script>

<template>
  <div :class="['slidev-layout fact', { 'fact-light': light }]">
    <div class="my-auto w-full relative z-10">
      <slot />
    </div>

    <!-- Logo placeholder (bottom-right) -->
    <div class="absolute bottom-8 right-14 z-10">
      <slot name="logo" />
    </div>
  </div>
</template>
