import { useState } from 'react'
import { TextField, View, Flex, Text } from '@adobe/react-spectrum'

export function TextFieldDemo() {
  const [value, setValue] = useState('')

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%">
        <TextField 
          label="Name" 
          value={value}
          onChange={setValue}
        />
        <TextField 
          label="Email" 
          type="email"
          description="Enter your email address"
        />
        <TextField 
          label="Disabled" 
          isDisabled 
          value="Locked"
        />
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Value: {value || 'empty'}
        </Text>
      </Flex>
    </View>
  )
}

export default TextFieldDemo
