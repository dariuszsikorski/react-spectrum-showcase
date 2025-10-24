import { useState } from 'react'
import { RadioGroup, Radio, View, Flex, Text } from '@adobe/react-spectrum'

export function RadioGroupDemo() {
  const [selected, setSelected] = useState('medium')

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <RadioGroup 
          label="Size"
          value={selected}
          onChange={setSelected}
        >
          <Radio value="small">Small</Radio>
          <Radio value="medium">Medium</Radio>
          <Radio value="large">Large</Radio>
        </RadioGroup>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Selected: {selected}
        </Text>
      </Flex>
    </View>
  )
}

export default RadioGroupDemo

