import { useState } from 'react'
import { 
  DateRangePicker,
  View,
  Flex,
  Text
} from '@adobe/react-spectrum'
import { parseDate } from '@internationalized/date'
import { 
  CalendarBlank 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function DateRangePickerDemo() {
  const [dateRange, setDateRange] = useState({
    start: parseDate('2024-06-01'),
    end: parseDate('2024-06-15')
  })

  const handleRangeChange = (value: any) => {
    if (value) setDateRange(value)
  }

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" alignItems="center">
        <Flex alignItems="center" gap="size-100">
          <PhosphorIcon icon={CalendarBlank} />
          <Text UNSAFE_style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
            Vacation Period
          </Text>
        </Flex>
        
        <DateRangePicker 
          label="Vacation Period"
          value={dateRange}
          onChange={handleRangeChange}
        />

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          {dateRange.start.toString()} → {dateRange.end.toString()}
        </Text>
      </Flex>
    </View>
  )
}

export default DateRangePickerDemo
