import { useState } from 'react'
import { TagGroup, Item, Text, Flex, View, Button } from '@adobe/react-spectrum'
import type { Key } from '@adobe/react-spectrum'
import { 
  Newspaper, 
  Airplane, 
  GameController, 
  ShoppingBag, 
  Link 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

export function TagGroupDemo() {
  const [tags, setTags] = useState([
    { id: '1', name: 'News' },
    { id: '2', name: 'Travel' },
    { id: '3', name: 'Gaming' },
    { id: '4', name: 'Shopping' },
    { id: '5', name: 'Tech' }
  ])

  const handleRemove = (keys: Set<Key>) => {
    setTags(prevTags => prevTags.filter(tag => !keys.has(tag.id)))
  }

  const handleAction = () => {
    setTags([])
  }

  const addRandomTag = () => {
    const randomTags = ['Sports', 'Music', 'Art', 'Food', 'Books', 'Movies', 'Fashion', 'Health']
    const availableTags = randomTags.filter(tag => !tags.some(t => t.name === tag))
    if (availableTags.length > 0) {
      const randomTag = availableTags[Math.floor(Math.random() * availableTags.length)]
      setTags(prev => [...prev, { id: Date.now().toString(), name: randomTag }])
    }
  }

  const getSelectedTags = () => {
    return tags
  }

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%" gap="size-150">
        {/* Basic TagGroup */}
        <TagGroup
          aria-label="Basic tags"
          UNSAFE_style={{ fontSize: '0.75rem' }}
        >
          <Item textValue="News">
            <Flex alignItems="center">
              <PhosphorIcon icon={Newspaper} />
              <Text>News</Text>
            </Flex>
          </Item>
          <Item textValue="Travel">
            <Flex alignItems="center">
              <PhosphorIcon icon={Airplane} />
              <Text>Travel</Text>
            </Flex>
          </Item>
          <Item textValue="Gaming">
            <Flex alignItems="center">
              <PhosphorIcon icon={GameController} />
              <Text>Gaming</Text>
            </Flex>
          </Item>
          <Item textValue="Shopping">
            <Flex alignItems="center">
              <PhosphorIcon icon={ShoppingBag} />
              <Text>Shopping</Text>
            </Flex>
          </Item>
        </TagGroup>

        {/* Removable TagGroup */}
        <TagGroup
          items={tags}
          onRemove={handleRemove}
          aria-label="Removable tags"
          UNSAFE_style={{ fontSize: '0.75rem' }}
        >
          {(item) => (
            <Item key={item.id} textValue={item.name}>
              <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                {item.name}
              </Text>
            </Item>
          )}
        </TagGroup>

        {/* TagGroup with action */}
        <TagGroup
          actionLabel="Clear All"
          onAction={handleAction}
          aria-label="Tags with action"
          UNSAFE_style={{ fontSize: '0.75rem' }}
        >
          <Item textValue="Adobe">
            <Flex alignItems="center">
              <PhosphorIcon icon={Link} />
              <Text>Adobe</Text>
            </Flex>
          </Item>
          <Item textValue="Apple">
            <Flex alignItems="center">
              <PhosphorIcon icon={Link} />
              <Text>Apple</Text>
            </Flex>
          </Item>
          <Item textValue="Google">
            <Flex alignItems="center">
              <PhosphorIcon icon={Link} />
              <Text>Google</Text>
            </Flex>
          </Item>
        </TagGroup>

        {/* Selection info */}
        <View backgroundColor="gray-200" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
            Total: {tags.length} tag{tags.length !== 1 ? 's' : ''}
          </Text>
          {tags.length > 0 && (
            <View UNSAFE_style={{ marginTop: '4px' }}>
              {getSelectedTags().map(tag => (
                <Text key={tag.id} UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.7, display: 'block' }}>
                  • {tag.name}
                </Text>
              ))}
            </View>
          )}
        </View>

        {/* Control buttons */}
        <Flex wrap gap="size-100">
          <Button
            variant="secondary"
            onPress={addRandomTag}
            isDisabled={tags.length >= 10}
          >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Add Tag</Text>
          </Button>
          <Button
            variant="secondary"
            onPress={() => setTags([])}
            isDisabled={tags.length === 0}
          >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Clear All</Text>
          </Button>
        </Flex>

        {/* Tag features info */}
        <View backgroundColor="gray-200" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.8 }}>
            Features: Removable, selectable, action buttons, links
          </Text>
        </View>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Categorization tags with actions
        </Text>
      </Flex>
    </View>
  )
}

export default TagGroupDemo

