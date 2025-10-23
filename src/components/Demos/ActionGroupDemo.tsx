import { useState } from 'react'
import { ActionGroup, Item, View, Text } from '@adobe/react-spectrum'
import { 
  PencilSimple, 
  Eye, 
  Trash, 
  ArrowCounterClockwise, 
  ArrowClockwise 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function ActionGroupDemo() {
  const [selected, setSelected] = useState<Set<string>>(new Set(['edit']))

  return (
    <View UNSAFE_className="GridItem_preview">
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '12px' }}>
        <ActionGroup 
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={(keys) => setSelected(keys as Set<string>)}
        >
          <Item key="edit" textValue="Edit">
            <PhosphorIcon icon={PencilSimple} />
            <Text>Edit</Text>
          </Item>
          <Item key="view" textValue="View">
            <PhosphorIcon icon={Eye} />
            <Text>View</Text>
          </Item>
          <Item key="delete" textValue="Delete">
            <PhosphorIcon icon={Trash} />
            <Text>Delete</Text>
          </Item>
        </ActionGroup>

        <ActionGroup isDisabled>
          <Item key="undo" textValue="Undo">
            <PhosphorIcon icon={ArrowCounterClockwise} />
            <Text>Undo</Text>
          </Item>
          <Item key="redo" textValue="Redo">
            <PhosphorIcon icon={ArrowClockwise} />
            <Text>Redo</Text>
          </Item>
        </ActionGroup>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Selected: {Array.from(selected).join(', ')}
        </Text>
      </div>
    </View>
  )
}

export default ActionGroupDemo
