import { useState } from 'react'
import { 
  ColorSlider,
  parseColor,
  View,
  Flex,
  Text
} from '@adobe/react-spectrum'

export function ColorSliderDemo() {
  const [color, setColor] = useState(parseColor('hsl(0, 100%, 50%)'))

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%">
        <ColorSlider 
          label="Hue"
          value={color}
          onChange={setColor}
          channel="hue"
        />
        <ColorSlider 
          label="Saturation"
          value={color}
          onChange={setColor}
          channel="saturation"
        />

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          {color.toString('hsl')}
        </Text>
      </Flex>
    </View>
  )
}

export default ColorSliderDemo
