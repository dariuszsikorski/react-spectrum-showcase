import { useState, useMemo } from 'react'
import { View, Heading } from '@adobe/react-spectrum'
import { ScreenshotCard } from './ScreenshotCard'
import { ScreenshotModal } from './ScreenshotModal'
import { useResponsive } from '../../hooks/useResponsive'
import type { Component } from './types'
import componentsData from '../../data/components.json'
import './Screenshot.css'

interface ScreenshotGalleryProps {
  selectedCategory?: string
  searchQuery?: string
}

export function ScreenshotGallery({
  selectedCategory,
  searchQuery: externalSearchQuery
}: ScreenshotGalleryProps) {
  const { isMobile } = useResponsive()
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const responsiveClass = isMobile ? 'is-mobile' : 'is-desktop'
  const searchQuery = externalSearchQuery
  
  const filteredComponents = useMemo(() => {
    let filtered = componentsData.components as Component[]
    
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase()
      filtered = filtered.filter(c => 
        c.title.toLowerCase().includes(lowerQuery) ||
        c.category.toLowerCase().includes(lowerQuery)
      )
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(c => c.category === selectedCategory)
    }
    
    return filtered
  }, [searchQuery, selectedCategory])
  
  const componentsByCategory = useMemo(() => {
    const grouped: Record<string, Component[]> = {}
    
    filteredComponents.forEach(component => {
      if (!grouped[component.category]) {
        grouped[component.category] = []
      }
      grouped[component.category].push(component)
    })
    
    return grouped
  }, [filteredComponents])
  
  const handleCardClick = (component: Component) => {
    setSelectedComponent(component)
    setIsModalOpen(true)
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedComponent(null), 300)
  }
  
  return (
    <View width="100%" maxWidth="100%">
      <div className={`ScreenshotGallery ${responsiveClass}`}>
          {Object.entries(componentsByCategory).map(([category, components]) => (
            <div key={category} className="ScreenshotGallery_category">
              <Heading level={3} marginBottom="size-200">
                {category}
              </Heading>
              <div className="ScreenshotGallery_grid">
                {components.map(component => (
                  <ScreenshotCard
                    key={component.id}
                    component={component}
                    onClick={() => handleCardClick(component)}
                  />
                ))}
              </div>
            </div>
          ))}
          
          {filteredComponents.length === 0 && (
            <View padding="size-600">
              <Heading level={3}>No components found</Heading>
            </View>
          )}
      </div>
      
      <ScreenshotModal
        component={selectedComponent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </View>
  )
}
