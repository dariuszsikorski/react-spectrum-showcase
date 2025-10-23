import { createContext, useContext, useState, type ReactNode } from 'react'

export type ColorScheme = 'light' | 'dark'

export interface ThemeContextType {
  colorScheme: ColorScheme
  cycleColorScheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')

  const cycleColorScheme = () => {
    setColorScheme(prevScheme => {
      if (prevScheme === 'light') return 'dark'
      return 'light'
    })
  }

  return (
    <ThemeContext.Provider value={{ colorScheme, cycleColorScheme }}>
      {children}
    </ThemeContext.Provider>
  )
}


