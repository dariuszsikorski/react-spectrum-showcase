import { useState } from 'react'
import { RangeSlider, View, Flex, Text } from '@adobe/react-spectrum'

export function RangeSliderDemo() {
  const [range, setRange] = useState({ start: 25, end: 75 })

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <RangeSlider 
          label="Price Range"
          value={range}
          onChange={setRange}
          minValue={0}
          maxValue={100}
        />
        <RangeSlider 
          label="Time Range"
          defaultValue={{ start: 10, end: 90 }}
        />
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Range: {range.start} - {range.end}
        </Text>
      </Flex>
    </View>
  )
}

export default RangeSliderDemo
