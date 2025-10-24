import { DialogTrigger, Dialog, Heading, Content, Divider, ActionButton, Text, Flex, View, Button, ButtonGroup } from '@adobe/react-spectrum'
import { 
  HardDrive, 
  Info, 
  Gear, 
  ChartBar 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function PopoverDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%">
        {/* Popover buttons in a grid */}
        <Flex wrap gap="size-100" width="100%">
          {/* Basic Popover */}
          <DialogTrigger type="popover">
            <ActionButton aria-label="Disk Status">
              <Flex alignItems="center">
                <PhosphorIcon icon={HardDrive} />
                <Text>Disk Status</Text>
              </Flex>
            </ActionButton>
            <Dialog>
              <Heading>
                <Text UNSAFE_style={{ fontSize: '0.875rem' }}>C://</Text>
              </Heading>
              <Divider />
              <Content>
                <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                  50% disk space remaining.
                </Text>
              </Content>
            </Dialog>
          </DialogTrigger>

          {/* Popover with different placement */}
          <DialogTrigger type="popover" placement="right top">
            <ActionButton aria-label="Info">
              <Flex alignItems="center">
                <PhosphorIcon icon={Info} />
                <Text>Info</Text>
              </Flex>
            </ActionButton>
            <Dialog>
              <Heading>
                <Text UNSAFE_style={{ fontSize: '0.875rem' }}>Information</Text>
              </Heading>
              <Divider />
              <Content>
                <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                  This is a popover placed to the right.
                </Text>
              </Content>
            </Dialog>
          </DialogTrigger>

          {/* Popover with action buttons */}
          <DialogTrigger type="popover">
            <ActionButton aria-label="Settings">
              <Flex alignItems="center">
                <PhosphorIcon icon={Gear} />
                <Text>Settings</Text>
              </Flex>
            </ActionButton>
            {(close) => (
              <Dialog>
                <Heading>
                  <Text UNSAFE_style={{ fontSize: '0.875rem' }}>Settings</Text>
                </Heading>
                <Divider />
                <Content>
                  <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                    Configure your preferences here.
                  </Text>
                </Content>
                <ButtonGroup>
                  <Button variant="secondary" onPress={close}>
                    <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Cancel</Text>
                  </Button>
                  <Button variant="accent" onPress={close} autoFocus>
                    <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Save</Text>
                  </Button>
                </ButtonGroup>
              </Dialog>
            )}
          </DialogTrigger>

          {/* Popover with offset */}
          <DialogTrigger type="popover" placement="top" offset={20}>
            <ActionButton aria-label="Stats">
              <Flex alignItems="center">
                <PhosphorIcon icon={ChartBar} />
                <Text>Stats</Text>
              </Flex>
            </ActionButton>
            <Dialog>
              <Heading>
                <Text UNSAFE_style={{ fontSize: '0.875rem' }}>Statistics</Text>
              </Heading>
              <Divider />
              <Content>
                <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                  Views: 1,234 | Clicks: 567
                </Text>
              </Content>
            </Dialog>
          </DialogTrigger>
        </Flex>

        {/* Status display */}
        <View backgroundColor="gray-100" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
            Click buttons to open popovers
          </Text>
        </View>

        {/* Popover features info */}
        <View backgroundColor="gray-100" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.8 }}>
            Features: Different placements, offsets, action buttons, auto-flip
          </Text>
        </View>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Floating content overlays
        </Text>
      </Flex>
    </View>
  )
}

export default PopoverDemo
