import { useState } from 'react'
import { DropZone, IllustratedMessage, Heading, Text, Flex, View, Button } from '@adobe/react-spectrum'
import { 
  Download, 
  CheckCircle, 
  Upload, 
  FileText, 
  Image, 
  ChartBar 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function DropZoneDemo() {
  const [isFilled, setIsFilled] = useState(false)
  const [dragState, setDragState] = useState<'idle' | 'drag-over' | 'dropped'>('idle')
  const [dropCount, setDropCount] = useState(0)

  const handleDrop = () => {
    setIsFilled(true)
    setDragState('dropped')
    setDropCount(prev => prev + 1)
  }

  const handleDragEnter = () => {
    setDragState('drag-over')
  }

  const handleDragLeave = () => {
    setDragState('idle')
  }

  const resetDropZone = () => {
    setIsFilled(false)
    setDragState('idle')
    setDropCount(0)
  }

  const getDropZoneContent = () => {
    if (dragState === 'drag-over') {
      return {
        icon: <PhosphorIcon icon={Download} size="L" />,
        title: 'Drop it here!',
        description: 'Release to upload'
      }
    }
    
    if (isFilled) {
      return {
        icon: <PhosphorIcon icon={CheckCircle} size="L" />,
        title: 'Files uploaded!',
        description: `Dropped ${dropCount} file${dropCount > 1 ? 's' : ''}`
      }
    }
    
    return {
      icon: <PhosphorIcon icon={Upload} size="L" />,
      title: 'Drag files here',
      description: 'Or click to browse'
    }
  }

  const content = getDropZoneContent()

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-200" width="100%" maxWidth="100%">
        {/* DropZone */}
        <DropZone
          isFilled={isFilled}
          onDrop={handleDrop}
          onDropEnter={handleDragEnter}
          onDropExit={handleDragLeave}
          UNSAFE_style={{
            minHeight: '120px',
            border: dragState === 'drag-over' 
              ? '2px dashed var(--spectrum-global-color-blue-500)' 
              : '2px dashed var(--spectrum-global-color-gray-400)',
            backgroundColor: dragState === 'drag-over' 
              ? 'var(--spectrum-global-color-blue-100)' 
              : isFilled 
                ? 'var(--spectrum-global-color-green-100)' 
                : 'var(--spectrum-global-color-gray-100)',
            borderRadius: '8px',
            transition: 'all 0.2s ease'
          }}
        >
          <IllustratedMessage>
            <View UNSAFE_style={{ marginBottom: '8px' }}>
              {content.icon}
            </View>
            <Heading>
              <Text UNSAFE_style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
                {content.title}
              </Text>
            </Heading>
            <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
              {content.description}
            </Text>
          </IllustratedMessage>
        </DropZone>

        {/* Simulated file items */}
        <View backgroundColor="gray-300" padding="size-100" borderRadius="small">
          <Flex direction="column" gap="size-50">
            <Text UNSAFE_style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>
              Simulated Files:
            </Text>
            <Flex alignItems="center" UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.8 }}>
              <PhosphorIcon icon={FileText} />
              <Text>document.pdf</Text>
            </Flex>
            <Flex alignItems="center" UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.8 }}>
              <PhosphorIcon icon={Image} />
              <Text>image.jpg</Text>
            </Flex>
            <Flex alignItems="center" UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.8 }}>
              <PhosphorIcon icon={ChartBar} />
              <Text>data.xlsx</Text>
            </Flex>
          </Flex>
        </View>

        {/* Control buttons */}
        <Flex gap="size-100" wrap>
          <Button
            variant="secondary"
            onPress={resetDropZone}
            isDisabled={!isFilled}
          >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Reset</Text>
          </Button>
          <Button
            variant="primary"
            onPress={() => handleDrop()}
          >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Simulate Drop</Text>
          </Button>
        </Flex>

        {/* Status display */}
        <View backgroundColor="gray-300" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
            State: {dragState} | Drops: {dropCount}
          </Text>
        </View>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          File drop zone with drag states
        </Text>
      </Flex>
    </View>
  )
}

export default DropZoneDemo

