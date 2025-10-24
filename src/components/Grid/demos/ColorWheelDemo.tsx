import { useState } from 'react'
import { 
  ColorWheel,
  parseColor,
  View,
  Flex,
  Text
} from '@adobe/react-spectrum'

export function ColorWheelDemo() {
  const [color, setColor] = useState(parseColor('hsl(30, 100%, 50%)'))

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" alignItems="center">
        <ColorWheel
          value={color}
          onChange={setColor}
        />

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Hue: {Math.round(color.getChannelValue('hue'))}°
        </Text>
      </Flex>
    </View>
  )
}

export default ColorWheelDemo

