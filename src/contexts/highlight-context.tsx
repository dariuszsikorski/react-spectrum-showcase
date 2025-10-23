import { createContext, useContext, useState, type ReactNode } from 'react'

interface HighlightContextType {
  highlightedItemId: string | null
  highlightItem: (itemId: string) => void
  clearHighlight: () => void
}

export const HighlightContext = createContext<HighlightContextType | undefined>(undefined)

export function useHighlight() {
  const context = useContext(HighlightContext)
  if (!context) {
    throw new Error('useHighlight must be used within HighlightProvider')
  }
  return context
}

export function HighlightProvider({ children }: { children: ReactNode }) {
  const [highlightedItemId, setHighlightedItemId] = useState<string | null>(null)

  const highlightItem = (itemId: string) => {
    setHighlightedItemId(itemId)
    // Auto-clear highlight after 3 seconds
    setTimeout(() => {
      setHighlightedItemId(null)
    }, 3000)
  }

  const clearHighlight = () => {
    setHighlightedItemId(null)
  }

  return (
    <HighlightContext.Provider value={{ highlightedItemId, highlightItem, clearHighlight }}>
      {children}
    </HighlightContext.Provider>
  )
}
