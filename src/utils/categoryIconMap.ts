import {
  Layout,
  Stack,
  Hand,
  Article,
  Compass,
  Target,
  Shield,
  Mouse,
  Database,
  PaintBrush,
  Camera,
  Clock,
  Sparkle,
} from '@phosphor-icons/react'

type IconMap = Record<string, React.ComponentType<any>>

export const categoryIconMap: IconMap = {
  // ACTUAL category names from GridGallery.tsx - ALL UNIQUE ICONS
  'Buttons': Mouse,              // Mouse for buttons/interaction
  'Collections': Database,       // Database for collections
  'Color': PaintBrush,           // Paint brush for colors
  'Date and Time': Clock,        // Clock for date/time
  'Drag and drop': Hand,         // Hand for drag/drop
  'Forms': Article,              // Document/article for forms
  'Layout': Layout,              // Layout grid
  'Navigation': Compass,         // Compass for navigation
  'Overlays': Stack,             // Stack for overlays
  'Pickers': Target,             // Target for pickers/selection
  'Status': Shield,              // Shield for status/protection
  'Content': Camera,             // Camera for content
  'Icons': Sparkle,              // Sparkle for icons
  // Fallback for unknown categories
  'default': Stack,
}

export function getCategoryIcon(categoryTitle: string): React.ComponentType<any> {
  return categoryIconMap[categoryTitle] || categoryIconMap['default']
}
