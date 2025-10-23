import { useState } from 'react'
import { MenuTrigger, ActionButton, Menu, Item, View, Flex, Text } from '@adobe/react-spectrum'
import { 
  Folder, 
  File, 
  FolderOpen, 
  FloppyDisk 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function MenuDemo() {
  const [action, setAction] = useState('none')

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" alignItems="start">
        <MenuTrigger>
          <ActionButton aria-label="File">
            <Flex alignItems="center">
              <PhosphorIcon icon={Folder} />
              <Text>File</Text>
            </Flex>
          </ActionButton>
          <Menu onAction={(key) => setAction(key as string)}>
            <Item key="new" textValue="New">
              <PhosphorIcon icon={File} />
              <Text>New</Text>
            </Item>
            <Item key="open" textValue="Open">
              <PhosphorIcon icon={FolderOpen} />
              <Text>Open</Text>
            </Item>
            <Item key="save" textValue="Save">
              <PhosphorIcon icon={FloppyDisk} />
              <Text>Save</Text>
            </Item>
          </Menu>
        </MenuTrigger>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Action: {action}
        </Text>
      </Flex>
    </View>
  )
}

export default MenuDemo
