import { useState } from 'react'
import { DialogContainer, Dialog, Heading, Content, Divider, ButtonGroup, Button, Text, Flex, View } from '@adobe/react-spectrum'

export function DialogContainerDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const [lastAction, setLastAction] = useState('None')

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-200" width="100%" maxWidth="100%">
        <Button variant="primary" onPress={() => setIsOpen(true)}>
          Open Managed Dialog
        </Button>

        <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
          Dialog Container manages dialog stacking and focus.
        </Text>

        {/* Simulated dialog preview */}
        <View 
          backgroundColor="gray-200" 
          padding="size-200" 
          borderRadius="medium"
          UNSAFE_style={{ opacity: 0.8 }}
        >
          <Heading UNSAFE_style={{ fontSize: '0.875rem' }}>Dialog Preview</Heading>
          <Text UNSAFE_style={{ fontSize: '0.75rem', margin: '8px 0' }}>
            This would be a full dialog with proper focus management.
          </Text>
          <Flex gap="size-100">
            <View backgroundColor="gray-400" padding="size-50" borderRadius="small">
              <Text UNSAFE_style={{ fontSize: '0.7rem', color: 'white' }}>Cancel</Text>
            </View>
            <View backgroundColor="blue-600" padding="size-50" borderRadius="small">
              <Text UNSAFE_style={{ fontSize: '0.7rem', color: 'white' }}>Confirm</Text>
            </View>
          </Flex>
        </View>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Last action: {lastAction}
        </Text>

        <DialogContainer onDismiss={() => setIsOpen(false)}>
          {isOpen && (
            <Dialog>
              <Heading>Managed Dialog</Heading>
              <Divider />
              <Content>
                <Text>This dialog is managed by DialogContainer for proper stacking and focus.</Text>
              </Content>
              <ButtonGroup>
                <Button variant="secondary" onPress={() => {
                  setLastAction('Cancelled')
                  setIsOpen(false)
                }}>
                  Cancel
                </Button>
                <Button variant="accent" onPress={() => {
                  setLastAction('Confirmed')
                  setIsOpen(false)
                }}>
                  Confirm
                </Button>
              </ButtonGroup>
            </Dialog>
          )}
        </DialogContainer>
      </Flex>
    </View>
  )
}

export default DialogContainerDemo

