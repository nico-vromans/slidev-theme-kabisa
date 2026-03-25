import { computed } from 'vue'

export function useVariant(
  variant: string,
  backgrounds: Record<string, string>,
) {
  const bg = computed(() => backgrounds[variant] || backgrounds.default)
  const isLight = computed(() => variant === 'light')
  return { bg, isLight }
}
