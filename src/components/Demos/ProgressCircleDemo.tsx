import { ProgressCircle, View, Flex, Text } from '@adobe/react-spectrum'

export function ProgressCircleDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%" alignItems="center">
        <ProgressCircle aria-label="Loading" value={60} />
        <ProgressCircle aria-label="Indeterminate" isIndeterminate />
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Circular progress
        </Text>
      </Flex>
    </View>
  )
}

export default ProgressCircleDemo
