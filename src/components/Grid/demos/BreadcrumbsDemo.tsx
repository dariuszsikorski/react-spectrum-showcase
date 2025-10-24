import { Breadcrumbs, Item, View, Flex, Text } from '@adobe/react-spectrum'

export function BreadcrumbsDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%">
        <Breadcrumbs>
          <Item key="home">Home</Item>
          <Item key="docs">Docs</Item>
          <Item key="guide">Guide</Item>
        </Breadcrumbs>
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Navigation trail
        </Text>
      </Flex>
    </View>
  )
}

export default BreadcrumbsDemo

