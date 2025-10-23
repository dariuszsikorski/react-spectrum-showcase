import { createContext } from 'react'

export type SpectrumScale = 'medium' | 'large'

export interface SpectrumScaleContextType {
  spectrumScale: SpectrumScale
  setSpectrumScale: (scale: SpectrumScale) => void
}

export const SpectrumScaleContext = createContext<SpectrumScaleContextType | undefined>(undefined)
