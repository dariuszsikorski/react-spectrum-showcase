import { LabeledValue, Text, Flex, View, Divider } from '@adobe/react-spectrum'

export function LabeledValueDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        {/* Basic labeled values */}
        <LabeledValue label="Name" value="John Doe" />
        <LabeledValue label="Email" value="john@example.com" />
        <LabeledValue label="Status" value="Active" />

        <Divider />

        {/* Horizontal layout */}
        <Flex gap="size-200">
          <LabeledValue 
            label="ID" 
            value="12345" 
            labelPosition="side"
          />
          <LabeledValue 
            label="Type" 
            value="Premium" 
            labelPosition="side"
          />
        </Flex>

        <Divider />

        {/* Formatted values */}
        <LabeledValue 
          label="Price" 
          value="$99.99"
        />
        <LabeledValue 
          label="Date" 
          value="Oct 17, 2025"
        />

        {/* Custom styled preview */}
        <View backgroundColor="gray-100" padding="size-100" borderRadius="small">
          <Flex direction="column" gap="size-50">
            <Flex justifyContent="space-between">
              <Text UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.7 }}>Total:</Text>
              <Text UNSAFE_style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>$250.00</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.7 }}>Items:</Text>
              <Text UNSAFE_style={{ fontSize: '0.75rem' }}>5</Text>
            </Flex>
          </Flex>
        </View>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Label-value pairs for data display
        </Text>
      </Flex>
    </View>
  )
}

export default LabeledValueDemo

