import { createContext, useContext, useState, type ReactNode } from 'react'

interface ViewModeContextType {
  viewMode: 'live' | 'screenshots'
  setViewMode: (mode: 'live' | 'screenshots') => void
}

export const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined)

export function useViewMode() {
  const context = useContext(ViewModeContext)
  if (!context) {
    throw new Error('useViewMode must be used within ViewModeProvider')
  }
  return context
}

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewMode] = useState<'live' | 'screenshots'>('live')

  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewModeContext.Provider>
  )
}
