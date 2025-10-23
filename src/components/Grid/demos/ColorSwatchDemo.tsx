import { useState } from 'react'
import { 
  ColorSwatch,
  ColorSlider,
  parseColor,
  View,
  Flex,
  Text
} from '@adobe/react-spectrum'

export function ColorSwatchDemo() {
  const [color, setColor] = useState(parseColor('hsl(180, 100%, 50%)'))

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" alignItems="center">
        <ColorSlider
          value={color}
          onChange={setColor}
          channel="hue"
          width="100%"
        />

        <Flex gap="size-100">
          <ColorSwatch color={color} size="XS" />
          <ColorSwatch color={color} size="S" />
          <ColorSwatch color={color} size="M" />
          <ColorSwatch color={color} size="L" />
        </Flex>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          {color.toString('hsl')}
        </Text>
      </Flex>
    </View>
  )
}

export default ColorSwatchDemo
