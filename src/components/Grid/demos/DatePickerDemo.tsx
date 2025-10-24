import { useState } from 'react'
import { 
  DatePicker,
  View,
  Flex,
  Text
} from '@adobe/react-spectrum'
import { parseDate } from '@internationalized/date'
import { 
  Calendar 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function DatePickerDemo() {
  const [selectedDate, setSelectedDate] = useState(parseDate('2024-12-25'))

  const handleDateChange = (value: any) => {
    if (value) setSelectedDate(value)
  }

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" alignItems="center">
        <Flex alignItems="center" gap="size-100">
          <PhosphorIcon icon={Calendar} />
          <Text UNSAFE_style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
            Event Date
          </Text>
        </Flex>
        
        <DatePicker 
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

export default DatePickerDemo

