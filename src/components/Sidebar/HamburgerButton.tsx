import { ActionButton } from '@adobe/react-spectrum'
import { useResponsive } from '../../hooks/useResponsive'
import { useTheme } from '../../contexts/theme-context'
import type { HamburgerButtonProps } from './types'

// Simple hamburger icon SVG
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <rect
      x="2"
      y={isOpen ? "9" : "4"}
      width="16"
      height="2"
      rx="1"
      transform={isOpen ? "rotate(45 10 10)" : "rotate(0 10 10)"}
      style={{ transition: 'all 0.2s ease' }}
    />
    <rect
      x="2"
      y="9"
      width="16"
      height="2"
      rx="1"
      opacity={isOpen ? 0 : 1}
      style={{ transition: 'opacity 0.2s ease' }}
    />
    <rect
      x="2"
      y={isOpen ? "9" : "14"}
      width="16"
      height="2"
      rx="1"
      transform={isOpen ? "rotate(-45 10 10)" : "rotate(0 10 10)"}
      style={{ transition: 'all 0.2s ease' }}
    />
  </svg>
)

export function HamburgerButton({ isOpen, onPress, className, floating = false }: HamburgerButtonProps) {
  const { isMobile } = useResponsive()
  const { colorScheme } = useTheme()

  // Only render on mobile
  if (!isMobile) {
    return null
  }

  const isDark = colorScheme === 'dark'

  return (
    <ActionButton
      onPress={onPress}
      aria-label="Toggle navigation menu"
      UNSAFE_className={className}
      UNSAFE_style={floating ? {
        position: 'fixed',
        top: '16px',
        left: '16px',
        zIndex: 2147483649,
        padding: '8px',
        minWidth: 'auto',
        width: '40px',
        height: '40px',
        backgroundColor: isDark ? 'var(--spectrum-global-color-gray-75)' : 'var(--spectrum-global-color-gray-100)',
        border: `1px solid ${isDark ? 'var(--spectrum-global-color-gray-200)' : 'var(--spectrum-global-color-gray-300)'}`,
        borderRadius: '6px',
        boxShadow: isDark ? '0 2px 8px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.15)'
      } : {
        padding: '8px',
        minWidth: 'auto',
        width: '40px',
        height: '40px'
      }}
    >
      <HamburgerIcon isOpen={isOpen} />
    </ActionButton>
  )
}
