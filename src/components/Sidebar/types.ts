import type { ReactNode } from 'react'

export interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
  topContent?: ReactNode
  centralContent?: ReactNode
  bottomContent?: ReactNode
  width?: string // default: '280px'
}

export interface HamburgerButtonProps {
  isOpen: boolean
  onPress: () => void
  className?: string
  floating?: boolean // true for floating button, false for sidebar button
}
