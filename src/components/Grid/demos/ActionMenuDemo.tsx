import { useState } from 'react'
import { ActionMenu, Item, View, Flex, Text } from '@adobe/react-spectrum'
import { 
  Copy, 
  Scissors, 
  Clipboard,
  FloppyDisk,
  Export,
  Printer
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function ActionMenuDemo() {
  const [action, setAction] = useState<string>('none')

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <ActionMenu onAction={(key) => setAction(key as string)}>
          <Item key="copy" textValue="Copy">
            <PhosphorIcon icon={Copy} />
            <Text>Copy</Text>
          </Item>
          <Item key="cut" textValue="Cut">
            <PhosphorIcon icon={Scissors} />
            <Text>Cut</Text>
          </Item>
          <Item key="paste" textValue="Paste">
            <PhosphorIcon icon={Clipboard} />
            <Text>Paste</Text>
          </Item>
        </ActionMenu>

        <ActionMenu>
          <Item key="save" textValue="Save">
            <PhosphorIcon icon={FloppyDisk} />
            <Text>Save</Text>
          </Item>
          <Item key="export" textValue="Export">
            <PhosphorIcon icon={Export} />
            <Text>Export</Text>
          </Item>
          <Item key="print" textValue="Print">
            <PhosphorIcon icon={Printer} />
            <Text>Print</Text>
          </Item>
        </ActionMenu>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Last: {action}
        </Text>
      </Flex>
    </View>
  )
}

export default ActionMenuDemo

