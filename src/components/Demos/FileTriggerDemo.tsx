import { useState } from 'react'
import { FileTrigger, Button, Text, Flex, View } from '@adobe/react-spectrum'
import { 
  Camera, 
  Folder, 
  FilePdf, 
  ChartBar 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function FileTriggerDemo() {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([])

  const handleSelect = (e: any) => {
    if (e && e.length > 0) {
      const fileNames = Array.from(e).map((file: any) => file.name)
      setSelectedFiles(fileNames)
    }
  }

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-200" width="100%" maxWidth="100%">
        {/* Single file trigger */}
        <FileTrigger
          onSelect={handleSelect}
          acceptedFileTypes={['image/*']}
        >
          <Button variant="primary">
            <Flex alignItems="center">
              <PhosphorIcon icon={Camera} />
              <Text>Upload Image</Text>
            </Flex>
          </Button>
        </FileTrigger>

        {/* Multiple files trigger */}
        <FileTrigger
          onSelect={handleSelect}
          allowsMultiple
        >
          <Button variant="secondary">
            <Flex alignItems="center">
              <PhosphorIcon icon={Folder} />
              <Text>Select Multiple Files</Text>
            </Flex>
          </Button>
        </FileTrigger>

        {/* Different trigger styles */}
        <Flex gap="size-100">
          <FileTrigger
            onSelect={handleSelect}
            acceptedFileTypes={['.pdf']}
          >
            <Button variant="accent" style="fill">
              <Flex alignItems="center">
                <PhosphorIcon icon={FilePdf} />
                <Text>PDF</Text>
              </Flex>
            </Button>
          </FileTrigger>
          
          <FileTrigger
            onSelect={handleSelect}
            acceptedFileTypes={['.csv', '.xlsx']}
          >
            <Button variant="secondary" style="outline">
              <Flex alignItems="center">
                <PhosphorIcon icon={ChartBar} />
                <Text>Data</Text>
              </Flex>
            </Button>
          </FileTrigger>
        </Flex>

        {/* Selected files display */}
        {selectedFiles.length > 0 && (
          <View backgroundColor="gray-100" padding="size-100" borderRadius="small">
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
              Selected: {selectedFiles.slice(0, 2).join(', ')}
              {selectedFiles.length > 2 && ` +${selectedFiles.length - 2} more`}
            </Text>
          </View>
        )}

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Files: {selectedFiles.length > 0 ? selectedFiles.length : 'None'}
        </Text>
      </Flex>
    </View>
  )
}

export default FileTriggerDemo
