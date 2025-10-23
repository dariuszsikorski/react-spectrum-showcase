import { useState, useEffect } from 'react'
import { ProgressBar, View, Flex, Text } from '@adobe/react-spectrum'

export function ProgressBarDemo() {
  const [value, setValue] = useState(25)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(v => (v + 5) % 100)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <ProgressBar label="Loading" value={value} />
        <ProgressBar label="Indeterminate" isIndeterminate />
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Progress: {value}%
        </Text>
      </Flex>
    </View>
  )
}

export default ProgressBarDemo
