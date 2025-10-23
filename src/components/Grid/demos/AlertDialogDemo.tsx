import { useState } from 'react'
import { 
  DialogTrigger,
  ActionButton,
  AlertDialog,
  View,
  Flex,
  Text
} from '@adobe/react-spectrum'
import { 
  Warning 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function AlertDialogDemo() {
  const [confirmed, setConfirmed] = useState(false)

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-100" width="100%">
        <DialogTrigger>
          <ActionButton aria-label="Delete File">
            <Flex alignItems="center">
              <PhosphorIcon icon={Warning} />
              <Text>Delete File</Text>
            </Flex>
          </ActionButton>
          <AlertDialog
            title="Delete File?"
            variant="warning"
            primaryActionLabel="Delete"
            cancelLabel="Cancel"
            onPrimaryAction={() => setConfirmed(true)}
          >
            This action cannot be undone.
          </AlertDialog>
        </DialogTrigger>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Confirmed: {confirmed ? 'Yes' : 'No'}
        </Text>
      </Flex>
    </View>
  )
}

export default AlertDialogDemo
