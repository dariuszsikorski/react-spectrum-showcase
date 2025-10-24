import { Button, View, Text, Flex } from '@adobe/react-spectrum'
import { useTheme } from '../../contexts/theme-context'

export function ThemeToggleDemo() {
  const { colorScheme, cycleColorScheme } = useTheme()

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%">
        <Button variant="accent" onPress={cycleColorScheme}>
          Switch to {colorScheme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
        
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7, wordBreak: 'break-all' }}>
          Current: {colorScheme} mode
        </Text>
      </Flex>
    </View>
  )
}

export default ThemeToggleDemo
