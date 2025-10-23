import { useState } from 'react'
import { ContextualHelp, Heading, Content, Footer, Link, Text, Flex, View, Button } from '@adobe/react-spectrum'
import { 
  FloppyDisk, 
  Gear, 
  Upload, 
  Question 
} from '@phosphor-icons/react'

export function ContextualHelpDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-200" width="100%" maxWidth="100%">
        {/* Basic contextual help */}
        <Flex alignItems="center" gap="size-100">
          <Button variant="primary">Save</Button>
          <ContextualHelp variant="info">
            <Heading>
              <Text UNSAFE_style={{ fontSize: '0.875rem' }}>
                <FloppyDisk size={16} />
                Save Help
              </Text>
            </Heading>
            <Content>
              <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                Click to save your changes
              </Text>
            </Content>
          </ContextualHelp>
        </Flex>

        {/* Help variant with footer */}
        <Flex alignItems="center" gap="size-100">
          <Button variant="secondary">Settings</Button>
          <ContextualHelp variant="help">
            <Heading>
              <Text UNSAFE_style={{ fontSize: '0.875rem' }}>
                <Gear size={16} />
                Settings
              </Text>
            </Heading>
            <Content>
              <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                Configure your preferences
              </Text>
            </Content>
            <Footer>
              <Link>
                <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Learn more</Text>
              </Link>
            </Footer>
          </ContextualHelp>
        </Flex>

        {/* Different placement */}
        <Flex alignItems="center" gap="size-100">
          <Button variant="accent">Upload</Button>
          <ContextualHelp variant="info" placement="top start">
            <Heading>
              <Text UNSAFE_style={{ fontSize: '0.875rem' }}>
                <Upload size={16} />
                Upload
              </Text>
            </Heading>
            <Content>
              <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                Upload files here
              </Text>
            </Content>
          </ContextualHelp>
        </Flex>

        {/* Interactive state tracking */}
        <Flex alignItems="center" gap="size-100">
          <Button variant="secondary">Action</Button>
          <ContextualHelp
            variant="help"
            onOpenChange={(open) => setIsOpen(open)}
          >
            <Heading>
              <Text UNSAFE_style={{ fontSize: '0.875rem' }}>
                <Question size={16} />
                Help
              </Text>
            </Heading>
            <Content>
              <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                Get assistance with this feature
              </Text>
            </Content>
          </ContextualHelp>
        </Flex>

        {/* Status display */}
        <View backgroundColor="gray-100" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
            Help open: {isOpen ? 'Yes' : 'No'}
          </Text>
        </View>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Contextual help tooltips
        </Text>
      </Flex>
    </View>
  )
}

export default ContextualHelpDemo
