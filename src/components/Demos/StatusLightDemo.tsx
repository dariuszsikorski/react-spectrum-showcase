import { StatusLight, View, Flex, Text } from '@adobe/react-spectrum'

export function StatusLightDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <StatusLight variant="positive">Active</StatusLight>
        <StatusLight variant="notice">Warning</StatusLight>
        <StatusLight variant="negative">Error</StatusLight>
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Status indicators
        </Text>
      </Flex>
    </View>
  )
}

export default StatusLightDemo
