import { Accordion, Disclosure, DisclosureTitle, DisclosurePanel, Text, Flex, View } from '@adobe/react-spectrum'
import { 
  User, 
  CreditCard, 
  Gear, 
  Question 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function AccordionDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-200" width="100%" maxWidth="100%">
        {/* Basic accordion */}
        <Accordion>
          <Disclosure id="personal">
            <DisclosureTitle>
              <Flex alignItems="center">
                <PhosphorIcon icon={User} />
                <Text UNSAFE_style={{ fontSize: '0.875rem' }}>Personal Info</Text>
              </Flex>
            </DisclosureTitle>
            <DisclosurePanel>
              <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                Name, email, phone details
              </Text>
            </DisclosurePanel>
          </Disclosure>
          
          <Disclosure id="billing">
            <DisclosureTitle>
              <Flex alignItems="center">
                <PhosphorIcon icon={CreditCard} />
                <Text UNSAFE_style={{ fontSize: '0.875rem' }}>Billing</Text>
              </Flex>
            </DisclosureTitle>
            <DisclosurePanel>
              <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                Address and payment info
              </Text>
            </DisclosurePanel>
          </Disclosure>
          
          <Disclosure id="preferences">
            <DisclosureTitle>
              <Flex alignItems="center">
                <PhosphorIcon icon={Gear} />
                <Text UNSAFE_style={{ fontSize: '0.875rem' }}>Settings</Text>
              </Flex>
            </DisclosureTitle>
            <DisclosurePanel>
              <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                Notifications, privacy options
              </Text>
            </DisclosurePanel>
          </Disclosure>
        </Accordion>

        {/* Compact accordion with different styling */}
        <Accordion isQuiet>
          <Disclosure id="help">
            <DisclosureTitle>
              <Flex alignItems="center">
                <PhosphorIcon icon={Question} />
                <Text UNSAFE_style={{ fontSize: '0.875rem' }}>Help</Text>
              </Flex>
            </DisclosureTitle>
            <DisclosurePanel>
              <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                FAQ and support links
              </Text>
            </DisclosurePanel>
          </Disclosure>
        </Accordion>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Grouped collapsible sections
        </Text>
      </Flex>
    </View>
  )
}

export default AccordionDemo

