import { useState } from 'react'
import { ComboBox, Item, View, Flex, Text } from '@adobe/react-spectrum'

export function ComboBoxDemo() {
  const [value, setValue] = useState('')

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <ComboBox 
          label="Country"
          inputValue={value}
          onInputChange={setValue}
        >
          <Item key="us">United States</Item>
          <Item key="uk">United Kingdom</Item>
          <Item key="de">Germany</Item>
          <Item key="fr">France</Item>
        </ComboBox>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Input: {value || 'empty'}
        </Text>
      </Flex>
    </View>
  )
}

export default ComboBoxDemo

