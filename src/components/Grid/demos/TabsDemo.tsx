import { useState } from 'react'
import { Tabs, TabList, TabPanels, Item, View, Flex, Text } from '@adobe/react-spectrum'

export function TabsDemo() {
  const [selected, setSelected] = useState('tab1')

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <Tabs selectedKey={selected} onSelectionChange={(key) => setSelected(key as string)}>
          <TabList>
            <Item key="tab1">Tab 1</Item>
            <Item key="tab2">Tab 2</Item>
            <Item key="tab3">Tab 3</Item>
          </TabList>
          <TabPanels>
            <Item key="tab1">Content 1</Item>
            <Item key="tab2">Content 2</Item>
            <Item key="tab3">Content 3</Item>
          </TabPanels>
        </Tabs>
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Selected: {selected}
        </Text>
      </Flex>
    </View>
  )
}

export default TabsDemo
