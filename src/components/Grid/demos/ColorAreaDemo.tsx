import { useState } from 'react'
import { 
  ColorArea,
  parseColor,
  View,
  Flex,
  Text
} from '@adobe/react-spectrum'

export function ColorAreaDemo() {
  const [color, setColor] = useState(parseColor('hsl(0, 100%, 50%)'))

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-100" width="100%" alignItems="center">
        <ColorArea 
          value={color}
          onChange={setColor}
          xChannel="saturation"
          yChannel="lightness"
        />

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          {color.toString('hex')}
        </Text>
      </Flex>
    </View>
  )
}

export default ColorAreaDemo

