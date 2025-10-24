import { useState } from 'react'
import { 
  DialogTrigger,
  ActionButton,
  Dialog,
  Heading,
  Divider,
  Content,
  Text,
  ButtonGroup,
  Button,
  View,
  Flex
} from '@adobe/react-spectrum'
import { 
  FileText 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function DialogDemo() {
  const [openCount, setOpenCount] = useState(0)

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%">
        <DialogTrigger>
          <ActionButton onPress={() => setOpenCount(prev => prev + 1)} aria-label="Open Dialog">
            <Flex alignItems="center">
              <PhosphorIcon icon={FileText} />
              Open Dialog
            </Flex>
          </ActionButton>
          {(close) => (
            <Dialog>
              <Heading>Dialog Example</Heading>
              <Divider />
              <Content>
                <Text>This is a simple dialog.</Text>
              </Content>
              <ButtonGroup>
                <Button variant="secondary" onPress={close}>Cancel</Button>
                <Button variant="accent" onPress={close}>OK</Button>
              </ButtonGroup>
            </Dialog>
          )}
        </DialogTrigger>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Opened: {openCount}
        </Text>
      </Flex>
    </View>
  )
}

export default DialogDemo

