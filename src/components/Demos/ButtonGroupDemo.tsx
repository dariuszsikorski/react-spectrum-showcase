import { useState } from 'react'
import { Button, View, Flex, Text } from '@adobe/react-spectrum'

export function ButtonGroupDemo() {
  const [selected, setSelected] = useState<string>('center')

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-200" width="100%" maxWidth="100%">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            maxWidth: '280px',
            alignItems: 'center',
            justifyItems: 'center',
            gap: '8px 0' // Add vertical spacing between rows
          }}
        >
          {/* Row 1 */}
          <div />
          <Button 
            variant={selected === 'top' ? 'accent' : 'primary'}
            onPress={() => setSelected('top')}
          >
            Top
          </Button>
          <div />
          
          {/* Row 2 */}
          <Button 
            variant={selected === 'left' ? 'accent' : 'primary'}
            onPress={() => setSelected('left')}
          >
            Left
          </Button>
          <Button 
            variant={selected === 'center' ? 'accent' : 'primary'}
            onPress={() => setSelected('center')}
          >
            Center
          </Button>
          <Button 
            variant={selected === 'right' ? 'accent' : 'primary'}
            onPress={() => setSelected('right')}
          >
            Right
          </Button>
          
          {/* Row 3 */}
          <div />
          <Button 
            variant={selected === 'bottom' ? 'accent' : 'primary'}
            onPress={() => setSelected('bottom')}
          >
            Bottom
          </Button>
          <div />
        </div>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Selected: {selected}
        </Text>
      </Flex>
    </View>
  )
}

export default ButtonGroupDemo
