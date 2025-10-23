import { useState } from 'react'
import { Button, View, Flex, Text } from '@adobe/react-spectrum'

export function ButtonDemo() {
  const [clicks, setClicks] = useState(0)

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <Flex wrap gap="size-100">
          <Button variant="accent" onPress={() => setClicks(c => c + 1)}>Accent</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="negative">Delete</Button>
        </Flex>
        <Flex wrap gap="size-100">
          <Button variant="accent" style="outline">Outline</Button>
          <Button variant="primary" isPending>Loading</Button>
          <Button variant="secondary" isDisabled>Disabled</Button>
        </Flex>
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Clicks: {clicks}
        </Text>
      </Flex>
    </View>
  )
}

export default ButtonDemo
