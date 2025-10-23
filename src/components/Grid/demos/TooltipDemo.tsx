import { useState } from 'react'
import { 
  TooltipTrigger,
  ActionButton,
  Tooltip,
  View,
  Flex,
  Text
} from '@adobe/react-spectrum'
import { 
  PencilSimple, 
  Trash 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function TooltipDemo() {
  const [hoverCount, setHoverCount] = useState(0)

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" alignItems="center" gap="size-150">
        <TooltipTrigger>
          <ActionButton 
            aria-label="Edit" 
            onPress={() => setHoverCount(prev => prev + 1)}
          >
            <Flex alignItems="center">
              <PhosphorIcon icon={PencilSimple} />
              <Text>Edit</Text>
            </Flex>
          </ActionButton>
          <Tooltip>Edit this item</Tooltip>
        </TooltipTrigger>

        <TooltipTrigger delay={0}>
          <ActionButton aria-label="Delete">
            <Flex alignItems="center">
              <PhosphorIcon icon={Trash} />
              <Text>Delete</Text>
            </Flex>
          </ActionButton>
          <Tooltip>Delete this item</Tooltip>
        </TooltipTrigger>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Clicks: {hoverCount}
        </Text>
      </Flex>
    </View>
  )
}

export default TooltipDemo
