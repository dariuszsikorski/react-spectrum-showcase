import { useState } from 'react'
import { ActionButton, View, Flex, Text } from '@adobe/react-spectrum'
import { 
  FloppyDisk, 
  PencilSimple, 
  Trash, 
  Gear, 
  X 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function ActionButtonDemo() {
  const [count, setCount] = useState(0)

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <Flex wrap gap="size-100">
          <ActionButton onPress={() => setCount(c => c + 1)} aria-label="Save">
            <PhosphorIcon icon={FloppyDisk} />
          </ActionButton>
          <ActionButton aria-label="Edit">
            <PhosphorIcon icon={PencilSimple} />
          </ActionButton>
          <ActionButton aria-label="Delete">
            <PhosphorIcon icon={Trash} />
          </ActionButton>
        </Flex>
        <Flex wrap gap="size-100">
          <ActionButton isQuiet aria-label="Settings">
            <Flex alignItems="center">
              <PhosphorIcon icon={Gear} />
              <Text>Settings</Text>
            </Flex>
          </ActionButton>
          <ActionButton isDisabled aria-label="Disabled">
            <Flex alignItems="center">
              <PhosphorIcon icon={X} />
              <Text>Disabled</Text>
            </Flex>
          </ActionButton>
        </Flex>
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Pressed: {count}
        </Text>
      </Flex>
    </View>
  )
}

export default ActionButtonDemo

