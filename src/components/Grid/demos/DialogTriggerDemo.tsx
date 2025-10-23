import { useState } from 'react'
import { 
  DialogTrigger,
  ActionButton,
  Dialog,
  Heading,
  Divider,
  Content,
  Text,
  View,
  Flex
} from '@adobe/react-spectrum'
import { 
  HardDrive 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function DialogTriggerDemo() {
  const [triggerCount, setTriggerCount] = useState(0)

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%">
        <DialogTrigger type="popover">
          <ActionButton onPress={() => setTriggerCount(prev => prev + 1)} aria-label="Disk Status">
            <PhosphorIcon icon={HardDrive} />
            Disk Status
          </ActionButton>
          <Dialog>
            <Heading>Storage</Heading>
            <Divider />
            <Content>
              <Text>50% space remaining</Text>
            </Content>
          </Dialog>
        </DialogTrigger>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Triggered: {triggerCount}
        </Text>
      </Flex>
    </View>
  )
}

export default DialogTriggerDemo
