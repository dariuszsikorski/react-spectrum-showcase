import { Heading, View, Flex, Text } from '@adobe/react-spectrum'

export function HeadingDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Heading levels
        </Text>
      </Flex>
    </View>
  )
}

export default HeadingDemo

