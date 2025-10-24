import React from 'react'
import { ColorPicker, ColorEditor, View, Text, Flex } from '@adobe/react-spectrum'
import { parseColor } from '@adobe/react-spectrum'
import { useTheme } from '../../../contexts/theme-context'

export function SurfaceColorDemo() {
  const { colorScheme } = useTheme()
  const [surfaceColorHex, setSurfaceColorHex] = React.useState<string>('#ffffff')

  const getSurfaceStorageKey = (scheme: 'light' | 'dark') => `surfaceHex_${scheme}`

  // Load persisted values for current scheme
  React.useEffect(() => {
    try {
      const savedSurfaceHex = localStorage.getItem(getSurfaceStorageKey(colorScheme))
      setSurfaceColorHex(savedSurfaceHex ?? (colorScheme === 'light' ? '#ffffff' : '#000000'))
    } catch (err) {
      console.warn('theme-persist:load', err as unknown)
      setSurfaceColorHex(colorScheme === 'light' ? '#ffffff' : '#000000')
    }
  }, [colorScheme])

  // Persist surface changes
  React.useEffect(() => {
    if (!surfaceColorHex) return
    try { 
      localStorage.setItem(getSurfaceStorageKey(colorScheme), surfaceColorHex) 
    } catch (err) {
      console.warn('theme-persist:surface', err as unknown)
    }
  }, [surfaceColorHex, colorScheme])

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%">
        <ColorPicker 
          label="Surface Color"
          value={parseColor(surfaceColorHex)}
          onChange={(c) => {
            const selectedHex = c.toString('hex')
            setSurfaceColorHex(selectedHex)
          }}
        >
          <ColorEditor />
        </ColorPicker>
        
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7, wordBreak: 'break-all' }}>
          {surfaceColorHex}
        </Text>
      </Flex>
    </View>
  )
}

export default SurfaceColorDemo

