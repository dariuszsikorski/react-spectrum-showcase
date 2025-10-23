import { useState } from 'react'
import { 
  TimeField,
  View,
  Flex,
  Text
} from '@adobe/react-spectrum'
import { Time } from '@internationalized/date'

export function TimeFieldDemo() {
  const [selectedTime, setSelectedTime] = useState(new Time(14, 30))

  const handleTimeChange = (value: any) => {
    if (value) setSelectedTime(value)
  }

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" alignItems="center">
        <TimeField 
          label="Meeting Time"
          value={selectedTime}
          onChange={handleTimeChange}
        />

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          {selectedTime.toString()}
        </Text>
      </Flex>
    </View>
  )
}

export default TimeFieldDemo
