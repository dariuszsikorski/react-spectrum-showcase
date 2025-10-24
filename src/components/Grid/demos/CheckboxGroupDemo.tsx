import { useState } from 'react'
import { CheckboxGroup, Checkbox, View, Flex, Text } from '@adobe/react-spectrum'

export function CheckboxGroupDemo() {
  const [selected, setSelected] = useState<string[]>(['js'])

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <CheckboxGroup 
          label="Skills"
          value={selected}
          onChange={setSelected}
        >
          <Checkbox value="js">JavaScript</Checkbox>
          <Checkbox value="ts">TypeScript</Checkbox>
          <Checkbox value="react">React</Checkbox>
        </CheckboxGroup>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Selected: {selected.join(', ')}
        </Text>
      </Flex>
    </View>
  )
}

export default CheckboxGroupDemo

