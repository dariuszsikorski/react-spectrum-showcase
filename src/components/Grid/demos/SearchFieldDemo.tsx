import { useState } from 'react'
import { SearchField, View, Flex, Text } from '@adobe/react-spectrum'

export function SearchFieldDemo() {
  const [value, setValue] = useState('')

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <SearchField 
          label="Search" 
          value={value}
          onChange={setValue}
          onClear={() => setValue('')}
          description="Enter search terms"
        />
        <SearchField 
          label="Disabled Search"
          isDisabled
          defaultValue="Locked"
          description="This field is disabled"
        />
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Query: {value || 'empty'}
        </Text>
      </Flex>
    </View>
  )
}

export default SearchFieldDemo

