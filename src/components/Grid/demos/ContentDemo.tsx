import { Content, Text, Flex, View, Heading } from '@adobe/react-spectrum'
import { 
  FileText 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function ContentDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-200" width="100%" maxWidth="100%">
        {/* Basic Content */}
        <Content>
          <Text UNSAFE_style={{ fontSize: '0.875rem' }}>
            Basic content container
          </Text>
        </Content>

        {/* Content with different styling */}
        <View backgroundColor="gray-200" padding="size-100" borderRadius="small">
          <Content>
            <Flex alignItems="center" gap="size-50">
              <Heading UNSAFE_style={{ fontSize: '0.875rem', margin: 0 }}>
            <Flex alignItems="center">
              <PhosphorIcon icon={FileText} />
                  <Text>Document</Text>
                </Flex>
              </Heading>
            </Flex>
            <Text UNSAFE_style={{ fontSize: '0.75rem', marginTop: '8px' }}>
              Content receives styling from parent container
            </Text>
          </Content>
        </View>

        {/* Content in different contexts */}
        <Flex direction="row" gap="size-100">
          <View backgroundColor="blue-400" padding="size-100" borderRadius="small" flex="1">
            <Content>
              <Text UNSAFE_style={{ fontSize: '0.75rem', color: 'blue-700' }}>
                Left content
              </Text>
            </Content>
          </View>
          <View backgroundColor="green-400" padding="size-100" borderRadius="small" flex="1">
            <Content>
              <Text UNSAFE_style={{ fontSize: '0.75rem', color: 'green-700' }}>
                Right content
              </Text>
            </Content>
          </View>
        </Flex>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Content container for primary content
        </Text>
      </Flex>
    </View>
  )
}

export default ContentDemo
