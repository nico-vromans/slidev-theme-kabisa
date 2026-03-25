<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '@slidev/client/layoutHelper.ts'

const props = defineProps({
  image: { type: String },
  backgroundSize: { type: String, default: 'cover' },
})

const style = computed(() => handleBackground(props.image, false, props.backgroundSize))
</script>

<template>
  <div class="slidev-layout quote">
    <div :class="['grid my-auto w-full h-full items-center', props.image ? 'grid-cols-2 gap-8' : 'grid-cols-1']">
      <!-- Quote content -->
      <div class="relative z-10">
        <slot />
      </div>

      <!-- Image (right) -->
      <div
        v-if="props.image"
        class="w-full h-full rounded-3xl overflow-hidden"
        :style="style"
      />
    </div>
  </div>
</template>
