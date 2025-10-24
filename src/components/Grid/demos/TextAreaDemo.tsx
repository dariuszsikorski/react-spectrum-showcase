import { useState } from 'react'
import { TextArea, View, Flex, Text } from '@adobe/react-spectrum'

export function TextAreaDemo() {
  const [value, setValue] = useState('')

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%">
        <TextArea 
          label="Description" 
          value={value}
          onChange={setValue}
          description="Enter your description here"
        />
        <TextArea 
          label="Notes" 
          maxLength={50}
          isDisabled
        />
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Length: {value.length}
        </Text>
      </Flex>
    </View>
  )
}

export default TextAreaDemo

