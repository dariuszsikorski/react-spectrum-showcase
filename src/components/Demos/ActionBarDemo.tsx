import { useState } from 'react'
import type { Key } from '@adobe/react-spectrum'
import { ActionBar, ActionBarContainer, Item, Text, Flex, View, Button } from '@adobe/react-spectrum'
import { 
  PencilSimple, 
  Copy, 
  Trash 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function ActionBarDemo() {
  const [selectedItemCount, setSelectedItemCount] = useState(1)
  const [lastAction, setLastAction] = useState('None')

  const handleAction = (key: Key) => {
    setLastAction(String(key))
  }

  const handleClearSelection = () => {
    setSelectedItemCount(0)
  }

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-200" width="100%" maxWidth="100%">
        {/* ActionBar demo */}
        <ActionBarContainer height={180}>
          <View backgroundColor="gray-200" width="100%" height="100%">
            <Flex alignItems="center" justifyContent="center" height="100%" direction="column" gap="size-100">
              <Text UNSAFE_style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
                Content Area
              </Text>
              <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                ActionBar overlays this when items selected
              </Text>
            </Flex>
          </View>

          {selectedItemCount > 0 && (
            <ActionBar
              isEmphasized
              selectedItemCount={selectedItemCount}
              onAction={handleAction}
              onClearSelection={handleClearSelection}
            >
              <Item key="edit" textValue="Edit">
                <PhosphorIcon icon={PencilSimple} />
                <Text>Edit</Text>
              </Item>
              <Item key="copy" textValue="Copy">
                <PhosphorIcon icon={Copy} />
                <Text>Copy</Text>
              </Item>
              <Item key="delete" textValue="Delete">
                <PhosphorIcon icon={Trash} />
                <Text>Delete</Text>
              </Item>
            </ActionBar>
          )}
        </ActionBarContainer>

        {/* Status display */}
        <View backgroundColor="gray-200" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
            Selected: {selectedItemCount} | Last action: {lastAction}
          </Text>
        </View>

        {/* Control buttons */}
        <Flex gap="size-100" wrap>
          <Button
            variant="accent"
            onPress={() => setSelectedItemCount(1)}
            UNSAFE_style={{ fontSize: '0.75rem' }}
          >
            Select 1
          </Button>
          <Button
            variant="accent"
            onPress={() => setSelectedItemCount(3)}
            UNSAFE_style={{ fontSize: '0.75rem' }}
          >
            Select 3
          </Button>
          <Button
            variant="accent"
            onPress={() => setSelectedItemCount(0)}
            UNSAFE_style={{ fontSize: '0.75rem' }}
          >
            Clear
          </Button>
        </Flex>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          ActionBar appears when items are selected
        </Text>
      </Flex>
    </View>
  )
}

export default ActionBarDemo
