import { Avatar, View, Flex, Text } from '@adobe/react-spectrum'

export function AvatarDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" gap="size-150" width="100%" maxWidth="100%" alignItems="center">
        <Flex gap="size-100">
          <Avatar src="https://i.pravatar.cc/100?img=1" alt="User 1" size="avatar-size-100" />
          <Avatar src="https://i.pravatar.cc/100?img=2" alt="User 2" size="avatar-size-200" />
          <Avatar src="https://i.pravatar.cc/100?img=3" alt="User 3" size="avatar-size-300" />
        </Flex>
        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          User avatars
        </Text>
      </Flex>
    </View>
  )
}

export default AvatarDemo

