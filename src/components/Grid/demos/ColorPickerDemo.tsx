import { useState } from 'react'
import { 
  ColorPicker,
  ColorEditor,
  parseColor,
  View,
  Flex,
  Text
} from '@adobe/react-spectrum'

export function ColorPickerDemo() {
  const [color, setColor] = useState(parseColor('#5100FF'))

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%">
        <ColorPicker 
          label="Fill Color"
          value={color}
          onChange={setColor}
        >
          <ColorEditor />
        </ColorPicker>

        <View backgroundColor="gray-200" padding="size-100" borderRadius="small" marginTop="size-100">
          <Text UNSAFE_style={{ fontSize: '0.75rem', fontFamily: 'monospace' }}>
            {color.toString('hex').toUpperCase()}
          </Text>
        </View>
      </Flex>
    </View>
  )
}

export default ColorPickerDemo
