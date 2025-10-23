import { IllustratedMessage, Heading, Content, Text, Flex, View } from '@adobe/react-spectrum'
import { 
  MagnifyingGlass, 
  Warning, 
  CheckCircle 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function IllustratedMessageDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-200" width="100%" maxWidth="100%">
        {/* No results state */}
        <IllustratedMessage>
          <PhosphorIcon icon={MagnifyingGlass} size="XL" />
          <Heading UNSAFE_style={{ fontSize: '0.875rem' }}>No results</Heading>
          <Content>
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
              Try adjusting your search
            </Text>
          </Content>
        </IllustratedMessage>

        {/* Error state */}
        <IllustratedMessage>
          <PhosphorIcon icon={Warning} size="XL" />
          <Heading UNSAFE_style={{ fontSize: '0.875rem' }}>Error</Heading>
          <Content>
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
              Something went wrong
            </Text>
          </Content>
        </IllustratedMessage>

        {/* Success state */}
        <IllustratedMessage>
          <PhosphorIcon icon={CheckCircle} size="XL" />
          <Heading UNSAFE_style={{ fontSize: '0.875rem' }}>Success!</Heading>
          <Content>
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
              Task completed
            </Text>
          </Content>
        </IllustratedMessage>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Empty states with illustrations
        </Text>
      </Flex>
    </View>
  )
}

export default IllustratedMessageDemo
