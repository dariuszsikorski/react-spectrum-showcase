import { Text, View, Flex } from '@adobe/react-spectrum'

export function TextDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%">
        <Text>Default text</Text>
        <Text UNSAFE_style={{ fontWeight: 'bold' }}>Bold text</Text>
        <Text UNSAFE_style={{ fontSize: '0.875rem', opacity: 0.7 }}>
          Small text
        </Text>
      </Flex>
    </View>
  )
}

export default TextDemo
