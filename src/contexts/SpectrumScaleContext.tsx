import React, { useState, useEffect, type ReactNode } from 'react'
import { SpectrumScaleContext, type SpectrumScale } from './spectrum-scale-context'

export function SpectrumScaleProvider({ children }: { children: ReactNode }) {
  const [spectrumScale, setSpectrumScale] = useState<SpectrumScale>('medium')

  // Load saved scale from localStorage on mount
  useEffect(() => {
    try {
      const savedScale = localStorage.getItem('spectrum-scale')
      if (savedScale === 'large' || savedScale === 'medium') {
        setSpectrumScale(savedScale)
      }
    } catch (err) {
      console.warn('Failed to load spectrum scale from localStorage:', err)
    }
  }, [])

  // Persist scale changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('spectrum-scale', spectrumScale)
    } catch (err) {
      console.warn('Failed to save spectrum scale to localStorage:', err)
    }
  }, [spectrumScale])

  return (
    <SpectrumScaleContext.Provider value={{ spectrumScale, setSpectrumScale }}>
      {children}
    </SpectrumScaleContext.Provider>
  )
}

export function useSpectrumScale() {
  const context = React.useContext(SpectrumScaleContext)
  if (!context) {
    throw new Error('useSpectrumScale must be used within SpectrumScaleProvider')
  }
  return context
}
