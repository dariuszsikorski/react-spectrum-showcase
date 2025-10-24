import { useState } from 'react'
import { 
  RangeCalendar,
  View,
  Flex,
  Text
} from '@adobe/react-spectrum'
import { parseDate } from '@internationalized/date'

export function RangeCalendarDemo() {
  const [dateRange, setDateRange] = useState({
    start: parseDate('2024-12-20'),
    end: parseDate('2024-12-27')
  })

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" alignItems="center">
        <RangeCalendar 
          aria-label="Trip dates"
          value={dateRange}
          onChange={setDateRange}
        />

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          {dateRange.start.toString()} → {dateRange.end.toString()}
        </Text>
      </Flex>
    </View>
  )
}

export default RangeCalendarDemo

