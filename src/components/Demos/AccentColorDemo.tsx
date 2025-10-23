import React from 'react'
import { ColorPicker, ColorEditor, View, Text, Flex } from '@adobe/react-spectrum'
import { parseColor } from '@adobe/react-spectrum'
import { useTheme } from '../../contexts/theme-context'

export function AccentColorDemo() {
  const { colorScheme } = useTheme()
  const [accentColorHex, setAccentColorHex] = React.useState<string>('#5100FF')

  const getAccentStorageKey = (scheme: 'light' | 'dark') => `accentHex_${scheme}`

  // Load persisted values for current scheme
  React.useEffect(() => {
    try {
      const savedAccentHex = localStorage.getItem(getAccentStorageKey(colorScheme))
      setAccentColorHex(savedAccentHex ?? '#5100FF')
    } catch (err) {
      console.warn('theme-persist:load', err as unknown)
      setAccentColorHex('#5100FF')
    }
  }, [colorScheme])

  // Persist accent changes
  React.useEffect(() => {
    if (!accentColorHex) return
    try { 
      localStorage.setItem(getAccentStorageKey(colorScheme), accentColorHex) 
    } catch (err) {
      console.warn('theme-persist:accent', err as unknown)
    }
  }, [accentColorHex, colorScheme])

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-200" width="100%" maxWidth="100%">
        <ColorPicker 
          label="Accent Color"
          value={accentColorHex ? parseColor(accentColorHex) : parseColor('#5100FF')}
          onChange={(c) => {
            const selectedHex = c.toString('hex')
            setAccentColorHex(selectedHex)
          }}
        >
          <ColorEditor />
        </ColorPicker>
        
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7, wordBreak: 'break-all' }}>
          {accentColorHex}
        </Text>
      </Flex>
    </View>
  )
}

export default AccentColorDemo
