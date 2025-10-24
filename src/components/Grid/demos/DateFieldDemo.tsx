import { useState } from 'react'
import { 
  DateField,
  View,
  Flex,
  Text
} from '@adobe/react-spectrum'
import { parseDate } from '@internationalized/date'

export function DateFieldDemo() {
  const [selectedDate, setSelectedDate] = useState(parseDate('2024-06-15'))

  const handleDateChange = (value: any) => {
    if (value) setSelectedDate(value)
  }

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" alignItems="center">
        <DateField 
          label="Birth Date"
          value={selectedDate}
          onChange={handleDateChange}
        />

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          {selectedDate.toString()}
        </Text>
      </Flex>
    </View>
  )
}

export default DateFieldDemo

