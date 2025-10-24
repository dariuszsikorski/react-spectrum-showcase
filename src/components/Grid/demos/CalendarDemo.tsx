import { useState } from 'react'
import { Calendar, View, Text, Flex } from '@adobe/react-spectrum'
import type { DateValue } from '@internationalized/date'

export function CalendarDemo() {
  const [calendarDate, setCalendarDate] = useState<DateValue | null>(null)

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-200" width="100%" maxWidth="100%">
        <Calendar 
          aria-label="Select a date"
          value={calendarDate}
          onChange={setCalendarDate}
        />
        
        {calendarDate && (
          <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7, wordBreak: 'break-all' }}>
            Selected: {calendarDate.toString()}
          </Text>
        )}
      </Flex>
    </View>
  )
}

export default CalendarDemo

