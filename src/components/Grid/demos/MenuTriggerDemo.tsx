import { useState } from 'react'
import { 
  MenuTrigger, 
  ActionButton, 
  Menu, 
  Item, 
  View, 
  Flex, 
  Text 
} from '@adobe/react-spectrum'
import { 
  Gear, 
  Scissors, 
  Copy, 
  FileText 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function MenuTriggerDemo() {
  const [lastAction, setLastAction] = useState<string>('None')

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" alignItems="start">
        <MenuTrigger>
          <ActionButton aria-label="Actions">
            <Flex alignItems="center">
              <PhosphorIcon icon={Gear} />
              <Text>Actions</Text>
            </Flex>
          </ActionButton>
          <Menu onAction={(key) => setLastAction(String(key))}>
            <Item key="cut" textValue="Cut">
              <PhosphorIcon icon={Scissors} />
              <Text>Cut</Text>
            </Item>
            <Item key="copy" textValue="Copy">
              <PhosphorIcon icon={Copy} />
              <Text>Copy</Text>
            </Item>
            <Item key="paste" textValue="Paste">
              <PhosphorIcon icon={FileText} />
              <Text>Paste</Text>
            </Item>
          </Menu>
        </MenuTrigger>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Last: {lastAction}
        </Text>
      </Flex>
    </View>
  )
}

export default MenuTriggerDemo
