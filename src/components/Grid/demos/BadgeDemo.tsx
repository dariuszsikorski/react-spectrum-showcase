import { Badge, View, Flex, Text } from '@adobe/react-spectrum'

export function BadgeDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <Flex wrap gap="size-100">
          <Badge variant="positive">New</Badge>
          <Badge variant="info">Beta</Badge>
          <Badge variant="negative">Error</Badge>
        </Flex>
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Notification badges
        </Text>
      </Flex>
    </View>
  )
}

export default BadgeDemo
