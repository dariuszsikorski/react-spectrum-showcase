import { View, Text, Flex } from '@adobe/react-spectrum'

export function ViewDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        {/* Different background colors */}
        <Flex direction="row" wrap gap="size-100">
          <View backgroundColor="blue-600" padding="size-100" borderRadius="regular">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem' }}>Blue BG</Text>
          </View>
          <View backgroundColor="green-600" padding="size-100" borderRadius="regular">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem' }}>Green BG</Text>
          </View>
        </Flex>

        {/* Different padding and borders */}
        <View 
          backgroundColor="gray-200" 
          padding="size-200" 
          borderWidth="thick"
          borderColor="default"
          borderRadius="medium"
        >
          <Text UNSAFE_style={{ fontSize: '0.75rem' }}>With border & padding</Text>
        </View>

        {/* Nested Views */}
        <View backgroundColor="purple-400" padding="size-100">
          <View backgroundColor="purple-400" padding="size-100">
            <View backgroundColor="purple-600" padding="size-100">
              <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem' }}>Nested</Text>
            </View>
          </View>
        </View>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Container: backgrounds, padding, borders
        </Text>
      </Flex>
    </View>
  )
}

export default ViewDemo
