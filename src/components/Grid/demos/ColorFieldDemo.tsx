import { useState } from 'react'
import { 
  ColorField,
  parseColor,
  View,
  Flex,
  Text
} from '@adobe/react-spectrum'

export function ColorFieldDemo() {
  const [hexColor, setHexColor] = useState(parseColor('#5100FF'))
  const [hslColor, setHslColor] = useState(parseColor('hsl(270, 100%, 50%)'))

  const handleHexChange = (color: any) => {
    if (color) setHexColor(color)
  }

  const handleHslChange = (color: any) => {
    if (color) setHslColor(color)
  }

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%">
        <ColorField 
          label="Hex Color"
          value={hexColor}
          onChange={handleHexChange}
        />

        <Flex gap="size-100">
          <ColorField 
            label="Hue"
            value={hslColor}
            onChange={handleHslChange}
            colorSpace="hsl"
            channel="hue"
          />
          <ColorField 
            label="Saturation"
            value={hslColor}
            onChange={handleHslChange}
            colorSpace="hsl"
            channel="saturation"
          />
        </Flex>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          HSL: {hslColor.toString('hsl')}
        </Text>
      </Flex>
    </View>
  )
}

export default ColorFieldDemo
