import { useState } from 'react'
import { Switch, View, Flex, Text } from '@adobe/react-spectrum'

export function SwitchDemo() {
  const [enabled, setEnabled] = useState(false)

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <Switch 
          isSelected={enabled}
          onChange={setEnabled}
        >
          Enable notifications
        </Switch>
        <Switch defaultSelected>
          Auto-save
        </Switch>
        <Switch isDisabled>
          Disabled switch
        </Switch>
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Enabled: {enabled ? 'Yes' : 'No'}
        </Text>
      </Flex>
    </View>
  )
}

export default SwitchDemo
