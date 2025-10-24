import { useState } from 'react'
import { Picker, Item, View, Flex, Text } from '@adobe/react-spectrum'

export function PickerDemo() {
  const [selected, setSelected] = useState('medium')

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <Picker 
          label="Size"
          selectedKey={selected}
          onSelectionChange={(key) => setSelected(key as string)}
        >
          <Item key="small">Small</Item>
          <Item key="medium">Medium</Item>
          <Item key="large">Large</Item>
        </Picker>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Selected: {selected}
        </Text>
      </Flex>
    </View>
  )
}

export default PickerDemo
