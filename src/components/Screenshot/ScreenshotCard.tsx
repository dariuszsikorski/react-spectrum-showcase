import { useState } from 'react'
import { ProgressCircle } from '@adobe/react-spectrum'
import { getAssetPath } from '../../utils/paths'
import type { Component } from './types'

interface ScreenshotCardProps {
  component: Component
  onClick: () => void
}

export function ScreenshotCard({ component, onClick }: ScreenshotCardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const imageUrl = getAssetPath(`/screenshots/adobe-spectrum-v2/${component.defaultImage}`)
  
  return (
    <div className="ScreenshotCard" onClick={onClick}>
      <div className="ScreenshotCard_wrapper">
        {isLoading && (
          <div className="ScreenshotCard_loading">
            <ProgressCircle aria-label="Loading image..." isIndeterminate size="S" />
          </div>
        )}
        <img 
          src={imageUrl} 
          alt={component.title}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          style={{ opacity: isLoading ? 0 : 1 }}
        />
        <div className="ScreenshotCard_info">
          <h3>{component.title}</h3>
          <span className="ScreenshotCard_category">{component.category}</span>
        </div>
      </div>
    </div>
  )
}
