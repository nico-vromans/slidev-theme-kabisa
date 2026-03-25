<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '@slidev/client/layoutHelper.ts'

const props = defineProps({
  image: { type: String },
  dim: { type: Boolean, default: true },
  backgroundSize: { type: String, default: 'cover' },
})

const style = computed(() => handleBackground(props.image, props.dim, props.backgroundSize))
</script>

<template>
  <div class="slidev-layout full-image" :style="style">
    <div class="absolute inset-0 flex flex-col justify-end p-14 pb-20 z-10">
      <slot />
    </div>

    <!-- Logo placeholder (bottom-right) -->
    <div class="absolute bottom-8 right-14 z-10">
      <slot name="logo" />
    </div>
  </div>
</template>
