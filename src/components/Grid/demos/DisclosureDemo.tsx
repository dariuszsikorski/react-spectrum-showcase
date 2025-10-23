import { Disclosure, DisclosureTitle, DisclosurePanel, Text, Flex, View } from '@adobe/react-spectrum'
import { 
  ClipboardText
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function DisclosureDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-200" width="100%" maxWidth="100%">
        {/* Basic disclosure */}
        <Disclosure>
          <DisclosureTitle>
            <Flex alignItems="center" gap="size-50">
              <PhosphorIcon icon={ClipboardText} />
              <Text UNSAFE_style={{ fontSize: '0.875rem' }}>
                System Requirements
              </Text>
            </Flex>
          </DisclosureTitle>
          <DisclosurePanel>
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
              Windows 10+, macOS 10.15+, or Linux Ubuntu 18.04+
            </Text>
          </DisclosurePanel>
        </Disclosure>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Collapsible content sections
        </Text>
      </Flex>
    </View>
  )
}

export default DisclosureDemo
