import { Link, View, Flex, Text } from '@adobe/react-spectrum'

export function LinkDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <Link>
          <a href="#">Default link</a>
        </Link>
        <Link isQuiet>
          <a href="#">Quiet link</a>
        </Link>
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Text links
        </Text>
      </Flex>
    </View>
  )
}

export default LinkDemo
