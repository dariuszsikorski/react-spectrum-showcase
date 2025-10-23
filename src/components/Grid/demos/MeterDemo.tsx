import { Meter, View, Flex, Text } from '@adobe/react-spectrum'

export function MeterDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <Meter label="Storage" variant="positive" value={30} />
        <Meter label="CPU" variant="warning" value={70} />
        <Meter label="Memory" variant="critical" value={90} />
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Status indicators
        </Text>
      </Flex>
    </View>
  )
}

export default MeterDemo
