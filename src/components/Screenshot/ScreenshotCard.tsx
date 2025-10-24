import type { Component } from './types'

interface ScreenshotCardProps {
  component: Component
  onClick: () => void
}

export function ScreenshotCard({ component, onClick }: ScreenshotCardProps) {
  const imageUrl = `/screenshots/adobe-spectrum-v2/${component.defaultImage}`
  
  return (
    <div className="ScreenshotCard" onClick={onClick}>
      <div className="ScreenshotCard_wrapper">
        <img 
          src={imageUrl} 
          alt={component.title}
          loading="lazy"
        />
        <div className="ScreenshotCard_info">
          <h3>{component.title}</h3>
          <span className="ScreenshotCard_category">{component.category}</span>
        </div>
      </div>
    </div>
  )
}
