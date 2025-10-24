import { useEffect, useState } from 'react'
import {
  Heading,
  Divider,
  Button,
  ProgressCircle
} from '@adobe/react-spectrum'
import { getAssetPath } from '../../utils/paths'
import type { Component } from './types'

interface ScreenshotModalProps {
  component: Component | null
  isOpen: boolean
  onClose: () => void
}

export function ScreenshotModal({ component, isOpen, onClose }: ScreenshotModalProps) {
  const [imageLoadingStates, setImageLoadingStates] = useState<Record<string, boolean>>({})

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Initialize loading states when component changes
  useEffect(() => {
    if (component) {
      const initialStates: Record<string, boolean> = {}
      component.variants.forEach(variant => {
        initialStates[variant.filename] = true
      })
      setImageLoadingStates(initialStates)
    }
  }, [component])

  const handleImageLoad = (filename: string) => {
    setImageLoadingStates(prev => ({
      ...prev,
      [filename]: false
    }))
  }

  if (!component || !isOpen) return null
  
  return (
    <div className="ScreenshotModal_overlay" onClick={onClose}>
      <div className="ScreenshotModal_container" onClick={(e) => e.stopPropagation()}>
        <div className="ScreenshotModal_header">
          <Heading level={2}>{component.title} Variants</Heading>
          <button className="ScreenshotModal_close" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>
        <Divider />
        <div className="ScreenshotModal_content">
          <div className="ScreenshotModal_variants">
            {component.variants.map((variant) => {
              // Remove leading dashes from variant name
              const cleanVariantName = variant.name.replace(/^-+/, '')
              const isLoading = imageLoadingStates[variant.filename]
              return (
                <div key={variant.name} className="ScreenshotModal_variant">
                  <p className="ScreenshotModal_variantName">{cleanVariantName}</p>
                  <div className="ScreenshotModal_imageContainer">
                    {isLoading && (
                      <div className="ScreenshotModal_imageLoading">
                        <ProgressCircle aria-label="Loading image..." isIndeterminate size="S" />
                      </div>
                    )}
                    <img 
                      src={getAssetPath(`/screenshots/adobe-spectrum-v2/${variant.filename}`)}
                      alt={`${component.title} - ${cleanVariantName}`}
                      loading="lazy"
                      onLoad={() => handleImageLoad(variant.filename)}
                      style={{ opacity: isLoading ? 0 : 1 }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="ScreenshotModal_footer">
          <div className="ScreenshotModal_actions">
            {component.links.reactSpectrum && (
              <Button variant="secondary">
                <a 
                  href={component.links.reactSpectrum} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  React Spectrum Docs
                </a>
              </Button>
            )}
            {component.links.storybook && (
              <Button variant="secondary">
                <a 
                  href={component.links.storybook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Storybook Demo
                </a>
              </Button>
            )}
            {component.links.webComponent && (
              <Button variant="secondary">
                <a 
                  href={component.links.webComponent} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Web Component Docs
                </a>
              </Button>
            )}
          </div>
          <Button variant="primary" onPress={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
