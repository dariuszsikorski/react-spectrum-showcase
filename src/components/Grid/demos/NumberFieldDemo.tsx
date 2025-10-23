import { useState } from 'react'
import { NumberField, View, Flex, Text } from '@adobe/react-spectrum'

export function NumberFieldDemo() {
  const [value, setValue] = useState(10)

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <NumberField 
          label="Quantity" 
          value={value}
          onChange={setValue}
          minValue={0}
          maxValue={100}
        />
        <NumberField 
          label="Price" 
          formatOptions={{
            style: 'currency',
            currency: 'USD'
          }}
          defaultValue={9.99}
        />
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Value: {value}
        </Text>
      </Flex>
    </View>
  )
}

export default NumberFieldDemo
