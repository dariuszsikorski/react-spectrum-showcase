import { InlineAlert, Heading, Content, View, Flex, Text } from '@adobe/react-spectrum'
import { 
  CheckCircle, 
  WarningCircle 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function InlineAlertDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <InlineAlert variant="positive">
          <Heading>
            <Flex alignItems="center">
              <PhosphorIcon icon={CheckCircle} />
              <Text>Success</Text>
            </Flex>
          </Heading>
          <Content>Operation completed</Content>
        </InlineAlert>
        <InlineAlert variant="negative">
          <Heading>
            <Flex alignItems="center">
              <PhosphorIcon icon={WarningCircle} />
              <Text>Error</Text>
            </Flex>
          </Heading>
          <Content>Action failed</Content>
        </InlineAlert>
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Inline alerts
        </Text>
      </Flex>
    </View>
  )
}

export default InlineAlertDemo
