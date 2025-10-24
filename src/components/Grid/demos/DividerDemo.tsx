import { Divider, View, Flex, Text } from '@adobe/react-spectrum'

export function DividerDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <Text>Section 1</Text>
        <Divider />
        <Text>Section 2</Text>
        <Divider size="M" />
        <Text>Section 3</Text>
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Content dividers
        </Text>
      </Flex>
    </View>
  )
}

export default DividerDemo
