import { useState } from 'react'
import { Slider, View, Flex, Text } from '@adobe/react-spectrum'

export function SliderDemo() {
  const [value, setValue] = useState(50)

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <Slider 
          label="Volume"
          value={value}
          onChange={setValue}
          minValue={0}
          maxValue={100}
        />
        <Slider 
          label="Opacity"
          defaultValue={75}
          formatOptions={{ style: 'percent' }}
        />
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Volume: {value}%
        </Text>
      </Flex>
    </View>
  )
}

export default SliderDemo
