import { useState } from 'react'
import { LogicButton, Text, Flex, View } from '@adobe/react-spectrum'

export function LogicButtonDemo() {
  const [currentVariant, setCurrentVariant] = useState<'and' | 'or'>('and')

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%" gap="size-150">
        {/* Basic logic buttons */}
        <Flex wrap gap="size-100" justifyContent="center">
          <LogicButton variant="and">
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>AND</Text>
          </LogicButton>
          
          <LogicButton variant="or" >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>OR</Text>
          </LogicButton>
        </Flex>

        {/* Interactive logic button */}
        <Flex justifyContent="center">
          <LogicButton
            variant={currentVariant}
            onPress={() => setCurrentVariant(currentVariant === 'or' ? 'and' : 'or')}
          >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
              {currentVariant.toUpperCase()}
            </Text>
          </LogicButton>
        </Flex>

        {/* Different states */}
        <Flex wrap gap="size-100" justifyContent="center">
          <LogicButton variant="and" isDisabled >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>AND</Text>
          </LogicButton>
          
          <LogicButton variant="or" >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>OR</Text>
          </LogicButton>
        </Flex>

        {/* Status display */}
        <View backgroundColor="gray-100" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
            Current: {currentVariant.toUpperCase()}
          </Text>
        </View>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Boolean logic operators
        </Text>
      </Flex>
    </View>
  )
}

export default LogicButtonDemo

