<template>
  <div class="slidev-layout end">
    <img src="/backgrounds/end.svg" class="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />

    <!-- Content -->
    <div class="my-auto w-full text-center relative z-10">
      <slot />
    </div>

    <!-- Logo (bottom-right) -->
    <div class="absolute bottom-8 right-14 z-10">
      <img src="/logos/logo-on-dark-no-payoff.svg" class="h-8" alt="Kabisa" />
    </div>
  </div>
</template>
