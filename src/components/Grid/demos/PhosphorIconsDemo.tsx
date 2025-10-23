import { useState } from 'react'
import { View, Flex, Text } from '@adobe/react-spectrum'
import { useTheme } from '../../../contexts/theme-context'
import { 
  ChatCircle, 
  User, 
  Gear, 
  Moon, 
  Lightning, 
  Image, 
  Paperclip, 
  ArrowUp, 
  Sidebar,
  Heart,
  Star,
  Bell
} from '@phosphor-icons/react'

export function PhosphorIconsDemo() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null)
  const { colorScheme } = useTheme()

  const icons = [
    { component: ChatCircle, name: 'ChatCircle', adobeBlue: true },
    { component: User, name: 'User', adobeBlue: false },
    { component: Gear, name: 'Gear', adobeBlue: false },
    { component: Moon, name: 'Moon', adobeBlue: true },
    { component: Lightning, name: 'Lightning', adobeBlue: false },
    { component: Image, name: 'Image', adobeBlue: false },
    { component: Paperclip, name: 'Paperclip', adobeBlue: false },
    { component: ArrowUp, name: 'ArrowUp', adobeBlue: true },
    { component: Sidebar, name: 'Sidebar', adobeBlue: false },
    { component: Heart, name: 'Heart', adobeBlue: false },
    { component: Star, name: 'Star', adobeBlue: false },
    { component: Bell, name: 'Bell', adobeBlue: false }
  ]

  const isDark = colorScheme === 'dark'

  const getIconColor = (adobeBlue: boolean) => {
    if (adobeBlue) return '#0066cc'
    return isDark ? '#ffffff' : '#1a1a1a'
  }

  const getTextColor = () => {
    return isDark ? '#e0e0e0' : '#666666'
  }

  const getHoverBgColor = () => {
    if (colorScheme === 'light') return '#f0f0f0'
    if (colorScheme === 'dark') return '#333333'
    return '#1a1a1a'
  }

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%">
        <Flex 
          wrap 
          justifyContent="center"
          UNSAFE_style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            width: '100%',
            maxWidth: '360px',
            margin: '0 auto'
          }}
        >
          {icons.map(({ component: IconComponent, name, adobeBlue }) => (
            <div
              key={name}
              onClick={() => setSelectedIcon(selectedIcon === name ? null : name)}
              style={{
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                backgroundColor: selectedIcon === name ? getHoverBgColor() : 'transparent',
                transition: 'background-color 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                userSelect: 'none'
              }}
            >
              <IconComponent
                size={28}
                weight="regular"
                color={getIconColor(adobeBlue)}
              />
              <Text 
                UNSAFE_style={{ 
                  fontSize: '0.65rem', 
                  textAlign: 'center',
                  color: getTextColor(),
                  pointerEvents: 'none'
                }}
              >
                {name}
              </Text>
            </div>
          ))}
        </Flex>
        
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7, textAlign: 'center' }}>
          {selectedIcon ? `Selected: ${selectedIcon}` : 'Click an icon to select'}
        </Text>
      </Flex>
    </View>
  )
}

export default PhosphorIconsDemo
