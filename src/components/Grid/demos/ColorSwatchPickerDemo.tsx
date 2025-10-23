import { useState } from 'react'
import { 
  ColorSwatchPicker,
  ColorSwatch,
  parseColor,
  View,
  Flex,
  Text
} from '@adobe/react-spectrum'

export function ColorSwatchPickerDemo() {
  const [selectedColor, setSelectedColor] = useState(parseColor('#A00'))

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" alignItems="center">
        <ColorSwatchPicker 
          value={selectedColor} 
          onChange={setSelectedColor}
          aria-label="Color palette"
        >
          <ColorSwatch color="#A00" />
          <ColorSwatch color="#f80" />
          <ColorSwatch color="#080" />
          <ColorSwatch color="#08f" />
          <ColorSwatch color="#088" />
          <ColorSwatch color="#008" />
        </ColorSwatchPicker>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          {selectedColor.toString('hex')}
        </Text>
      </Flex>
    </View>
  )
}

export default ColorSwatchPickerDemo
