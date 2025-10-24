import { Well, Text, Flex, View } from '@adobe/react-spectrum'
import { 
  ClipboardText 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function WellDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%">
        {/* Basic Well */}
        <Well>
          <Text UNSAFE_style={{ fontSize: '0.875rem' }}>Basic Well</Text>
          <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
            Content grouped with subtle background
          </Text>
        </Well>

        {/* Well with more content */}
        <Well>
          <Flex direction="column" gap="size-100">
            <Flex alignItems="center">
              <PhosphorIcon icon={ClipboardText} />
              <Text UNSAFE_style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>Information</Text>
            </Flex>
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
              Wells provide visual grouping for related content with a subtle background.
            </Text>
          </Flex>
        </Well>

        {/* Nested Wells */}
        <Well>
          <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Outer Well</Text>
          <Well UNSAFE_style={{ marginTop: '8px' }}>
            <Text UNSAFE_style={{ fontSize: '0.7rem' }}>Nested Well</Text>
          </Well>
        </Well>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Content grouping with subtle background
        </Text>
      </Flex>
    </View>
  )
}

export default WellDemo

