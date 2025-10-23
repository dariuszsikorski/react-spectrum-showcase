import { useState, useEffect } from 'react'
import { getJson, setJson } from '../utils/storage'

const STORAGE_KEY = 'sidebar-disclosure-state'

export function useDisclosureState(categoryId: string, defaultExpanded = true) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  // Load from localStorage on mount
  useEffect(() => {
    const state = getJson<Record<string, boolean>>(STORAGE_KEY, {})
    if (categoryId in state) {
      setIsExpanded(state[categoryId])
      return
    }
    setIsExpanded(defaultExpanded)
  }, [categoryId, defaultExpanded])

  // Persist to localStorage
  const toggleExpanded = () => {
    setIsExpanded(prev => {
      const newState = !prev
      const state = getJson<Record<string, boolean>>(STORAGE_KEY, {})
      state[categoryId] = newState
      setJson(STORAGE_KEY, state)
      return newState
    })
  }

  return { isExpanded, toggleExpanded }
}
