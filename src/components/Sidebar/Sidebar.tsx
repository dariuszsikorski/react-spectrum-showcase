import { useRef, useEffect } from 'react'
import { Flex, View } from '@adobe/react-spectrum'
import { useResponsive } from '../../hooks/useResponsive'
import { useTheme } from '../../contexts/theme-context'
import type { SidebarProps } from './types'
import './Sidebar.css'

export function Sidebar({
  isOpen,
  onToggle,
  topContent,
  centralContent,
  bottomContent,
  width = '280px',
}: SidebarProps) {
  const sidebarRef = useRef<HTMLElement>(null)
  const { isMobile } = useResponsive()
  const { colorScheme } = useTheme()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen && isMobile) {
        onToggle()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, isMobile, onToggle])

  const sidebarClasses = [
    'sidebar',
    isOpen ? 'open' : '',
  ].filter(Boolean).join(' ')

  const overlayClasses = [
    'sidebar-overlay',
    isOpen && isMobile ? 'open' : '',
  ].filter(Boolean).join(' ')

  const sidebarStyle = {
    width,
    transform: isMobile && !isOpen ? 'translateX(-100%)' : 'translateX(0)',
    opacity: isMobile && !isOpen ? 0 : 1,
    transition: 'transform 300ms ease, opacity 300ms ease',
  }

  return (
    <div className="sidebar-container">
      {/* Overlay - Always present, controls visibility */}
      <div
        className={overlayClasses}
        onClick={onToggle}
        aria-hidden="true"
      />
      
      {/* Sidebar - Inside the same container as overlay */}
      <aside
        ref={sidebarRef}
        className={sidebarClasses}
        role="navigation"
        aria-label="Main navigation"
        tabIndex={-1}
        style={sidebarStyle}
        data-color-scheme={colorScheme}
      >
        <Flex direction="column" height="100dvh">
          {/* Top Section */}
          {topContent && (
            <View
              padding="size-200"
              borderBottomWidth="thin"
              borderBottomColor="gray-300"
              UNSAFE_style={{ 
                boxSizing: 'border-box',
                borderBottomStyle: 'solid'
              }}
            >
              {topContent}
            </View>
          )}

          {/* Central Content Section */}
          <View flex padding="size-100" UNSAFE_className="sidebar-content">
            {centralContent}
          </View>

          {/* Bottom Section */}
          {bottomContent && (
            <View
              padding="size-300"
              borderTopWidth="thin"
              borderTopColor="gray-300"
              UNSAFE_style={{ 
                boxSizing: 'border-box',
                borderTopStyle: 'solid'
              }}
            >
              {bottomContent}
            </View>
          )}
        </Flex>
      </aside>
    </div>
  )
}