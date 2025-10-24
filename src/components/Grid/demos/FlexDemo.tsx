import { Flex, View, Text } from '@adobe/react-spectrum'

export function FlexDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        {/* Row layout with wrap */}
        <Flex direction="row" wrap gap="size-100">
          <View backgroundColor="purple-600" padding="size-100">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem' }}>Item 1</Text>
          </View>
          <View backgroundColor="blue-600" padding="size-100">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem' }}>Item 2</Text>
          </View>
          <View backgroundColor="green-600" padding="size-100">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem' }}>Item 3</Text>
          </View>
        </Flex>

        {/* Column layout with alignment */}
        <Flex direction="column" alignItems="center" gap="size-100">
          <View backgroundColor="red-600" padding="size-100" width="size-1600">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem' }}>Centered</Text>
          </View>
          <View backgroundColor="orange-600" padding="size-100" width="size-1200">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem' }}>Item</Text>
          </View>
        </Flex>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Flex: row/column, gap, wrap, align
        </Text>
      </Flex>
    </View>
  )
}

export default FlexDemo
