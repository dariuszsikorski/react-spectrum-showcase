import { useState } from 'react'
import { Checkbox, View, Flex, Text } from '@adobe/react-spectrum'

export function CheckboxDemo() {
  const [checked, setChecked] = useState(false)

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <Checkbox 
          isSelected={checked}
          onChange={setChecked}
        >
          Accept terms
        </Checkbox>
        <Checkbox isIndeterminate>
          Partial selection
        </Checkbox>
        <Checkbox isDisabled>
          Disabled option
        </Checkbox>
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Checked: {checked ? 'Yes' : 'No'}
        </Text>
      </Flex>
    </View>
  )
}

export default CheckboxDemo
