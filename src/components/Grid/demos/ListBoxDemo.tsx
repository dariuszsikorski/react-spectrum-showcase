import { useState } from 'react'
import { ListBox, Item, View, Flex, Text } from '@adobe/react-spectrum'

export function ListBoxDemo() {
  const [selected, setSelected] = useState<Set<string>>(new Set(['item2']))

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <ListBox 
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={(keys) => setSelected(keys as Set<string>)}
        >
          <Item key="item1">Item 1</Item>
          <Item key="item2">Item 2</Item>
          <Item key="item3">Item 3</Item>
        </ListBox>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Selected: {Array.from(selected).join(', ')}
        </Text>
      </Flex>
    </View>
  )
}

export default ListBoxDemo

