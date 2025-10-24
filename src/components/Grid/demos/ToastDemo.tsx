import { useState } from 'react'
import { 
  ToastQueue,
  ToastContainer,
  Button, 
  View, 
  Flex, 
  Text 
} from '@adobe/react-spectrum'

export function ToastDemo() {
  const [count, setCount] = useState(0)

  const showToast = (type: 'positive' | 'negative' | 'info') => {
    setCount(prev => prev + 1)
    const messages = {
      positive: '✅ Success!',
      negative: '❌ Error!',
      info: 'ℹ️ Info'
    }
    ToastQueue[type](messages[type])
  }

  return (
    <>
      <ToastContainer />
      <View UNSAFE_className="GridItem_preview">
        <Flex direction="column" gap="size-100" width="100%">
          <Button variant="accent" onPress={() => showToast('positive')}>
            <Text>Show Success</Text>
          </Button>
          <Button variant="negative" onPress={() => showToast('negative')}>
            <Text>Show Error</Text>
          </Button>

          <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
            Shown: {count}
          </Text>
        </Flex>
      </View>
    </>
  )
}

export default ToastDemo
