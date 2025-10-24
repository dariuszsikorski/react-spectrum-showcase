import { useState } from 'react'
import { ToggleButton, Text, Flex, View } from '@adobe/react-spectrum'
import { 
  PushPin, 
  Star, 
  SpeakerSlash, 
  Prohibit 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function ToggleButtonDemo() {
  const [isPinned, setIsPinned] = useState(false)
  const [isStarred, setIsStarred] = useState(true)
  const [isMuted, setIsMuted] = useState(false)

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%">
        {/* Basic toggle buttons with icon + label */}
        <Flex wrap gap="size-100">
          <ToggleButton
            isSelected={isPinned}
            onChange={setIsPinned}
          >
            <Flex alignItems="center">
              <PhosphorIcon icon={PushPin} />
              <Text>Pin</Text>
            </Flex>
          </ToggleButton>
          
          <ToggleButton
            isSelected={isStarred}
            onChange={setIsStarred}
            isEmphasized
          >
            <Flex alignItems="center">
              <PhosphorIcon icon={Star} />
              <Text>Star</Text>
            </Flex>
          </ToggleButton>
        </Flex>

        {/* Different variants */}
        <Flex wrap gap="size-100">
          <ToggleButton
            isSelected={isMuted}
            onChange={setIsMuted}
            isQuiet
          >
            <Flex alignItems="center">
              <PhosphorIcon icon={SpeakerSlash} />
              <Text>Mute</Text>
            </Flex>
          </ToggleButton>
          
          <ToggleButton
            isDisabled
          >
            <Flex alignItems="center">
              <PhosphorIcon icon={Prohibit} />
              <Text>Disabled</Text>
            </Flex>
          </ToggleButton>
        </Flex>

        {/* Icon only buttons */}
        <Flex gap="size-100">
          <ToggleButton
            isSelected={isPinned}
            onChange={setIsPinned}
            aria-label="Pin"
          >
            <PhosphorIcon icon={PushPin} />
          </ToggleButton>
          
          <ToggleButton
            isSelected={isStarred}
            onChange={setIsStarred}
            aria-label="Star"
          >
            <PhosphorIcon icon={Star} />
          </ToggleButton>
        </Flex>

        {/* Status display */}
        <View backgroundColor="gray-100" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
            Pinned: {isPinned ? 'Yes' : 'No'} | 
            Starred: {isStarred ? 'Yes' : 'No'} | 
            Muted: {isMuted ? 'Yes' : 'No'}
          </Text>
        </View>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Toggle buttons for on/off states
        </Text>
      </Flex>
    </View>
  )
}

export default ToggleButtonDemo
