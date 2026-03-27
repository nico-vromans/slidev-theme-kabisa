import { computed } from 'vue'

export type LogoVariant = 'none' | 'bare' | 'name' | 'full'

const logos: Record<string, Record<string, string>> = {
  dark: {
    bare: '/theme/logos/logo.svg',
    name: '/theme/logos/logo-on-dark-no-payoff.svg',
    full: '/theme/logos/logo-on-dark.svg',
  },
  light: {
    bare: '/theme/logos/logo.svg',
    name: '/theme/logos/logo-on-light-no-payoff.svg',
    full: '/theme/logos/logo-on-light.svg',
  },
}

export function useLogo(logo: LogoVariant | boolean, isLight: boolean) {
  return computed(() => {
    // Handle boolean for convenience (true = 'name', false = 'none')
    const variant = logo === true ? 'name' : logo === false ? 'none' : logo
    if (variant === 'none') return null
    const theme = isLight ? 'light' : 'dark'
    return logos[theme]?.[variant] || null
  })
}
