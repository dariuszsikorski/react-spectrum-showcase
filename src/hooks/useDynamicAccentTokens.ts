import { useLayoutEffect } from 'react'
import { lighten, darken, getReadableContentColor } from '../utils/color'

export function useDynamicAccentTokens(baseHex: string | null, colorScheme: 'light' | 'dark') {
  useLayoutEffect(() => {
    if (!baseHex) return

    const root = document.documentElement

    // Generate states. Slightly different deltas for light/dark to keep feedback visible.
    const hover = colorScheme === 'light' ? lighten(baseHex, 0.08) : lighten(baseHex, 0.06)
    const down = colorScheme === 'light' ? darken(baseHex, 0.10) : darken(baseHex, 0.12)
    const content = getReadableContentColor(baseHex)

    root.style.setProperty('--spectrum-accent-background-color-default', baseHex)
    root.style.setProperty('--spectrum-accent-background-color-hover', hover)
    root.style.setProperty('--spectrum-accent-background-color-down', down)
    root.style.setProperty('--spectrum-accent-background-color-key-focus', baseHex)
    root.style.setProperty('--spectrum-accent-content-color-default', content)

    try {
      localStorage.setItem('accentHex', baseHex)
    } catch (err) {
      console.warn('theme-persist:hook-accent', err as unknown)
    }

  }, [baseHex, colorScheme])
}


