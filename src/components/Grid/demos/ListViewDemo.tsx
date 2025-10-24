import { useState } from 'react'
import { ListView, Item, Text, Flex, View, Button } from '@adobe/react-spectrum'
import type { Selection, Key } from '@adobe/react-spectrum'
import { 
  Folder, 
  FileText, 
  Image, 
  ChartBar, 
  MusicNote, 
  Video 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

function isSetSelection(selection: Selection): selection is Set<Key> {
  return selection instanceof Set
}

export function ListViewDemo() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['1']))

  const items = [
    { id: '1', name: 'Documents', icon: Folder, type: 'Folder' },
    { id: '2', name: 'report.pdf', icon: FileText, type: 'PDF' },
    { id: '3', name: 'image.jpg', icon: Image, type: 'Image' },
    { id: '4', name: 'data.xlsx', icon: ChartBar, type: 'Spreadsheet' },
    { id: '5', name: 'Pictures', icon: Folder, type: 'Folder' },
    { id: '6', name: 'notes.txt', icon: FileText, type: 'Text' },
    { id: '7', name: 'music.mp3', icon: MusicNote, type: 'Audio' },
    { id: '8', name: 'Videos', icon: Video, type: 'Folder' }
  ]

  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys)
  }

  const getSelectedItems = () => {
    if (!isSetSelection(selectedKeys)) return []
    return items.filter(item => selectedKeys.has(item.id))
  }

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%" gap="size-150">
        {/* ListView */}
        <View UNSAFE_style={{ maxHeight: '200px', overflow: 'auto' }}>
          <ListView
            items={items}
            selectionMode="multiple"
            selectedKeys={selectedKeys}
            onSelectionChange={handleSelectionChange}
            aria-label="File browser list"
            UNSAFE_style={{ fontSize: '0.75rem' }}
          >
            {(item) => (
              <Item key={item.id} textValue={item.name}>
                <Flex alignItems="center" gap="size-100" width="100%">
                  <PhosphorIcon icon={item.icon} weight="fill" />
                  <Flex direction="column" flex>
                    <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                      {item.name}
                    </Text>
                    <Text UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.6 }}>
                      {item.type}
                    </Text>
                  </Flex>
                </Flex>
              </Item>
            )}
          </ListView>
        </View>

        {/* Selection info */}
        <View backgroundColor="gray-200" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
            Selected: {isSetSelection(selectedKeys) ? selectedKeys.size : 0} item{isSetSelection(selectedKeys) && selectedKeys.size !== 1 ? 's' : !isSetSelection(selectedKeys) ? 's' : ''}
          </Text>
          {isSetSelection(selectedKeys) && selectedKeys.size > 0 && (
            <View UNSAFE_style={{ marginTop: '4px' }}>
              {getSelectedItems().map(item => (
                <Text key={item.id} UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.7, display: 'block' }}>
                  • {item.name}
                </Text>
              ))}
            </View>
          )}
        </View>

        {/* Action buttons */}
        <Flex gap="size-100" wrap>
          <Button
            variant="secondary"
            onPress={() => setSelectedKeys(new Set())}
            isDisabled={!isSetSelection(selectedKeys) || selectedKeys.size === 0}
          >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Clear</Text>
          </Button>
          <Button
            variant="primary"
            onPress={() => setSelectedKeys(new Set(items.map(i => i.id)))}
          >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Select All</Text>
          </Button>
        </Flex>

        {/* List features info */}
        <View backgroundColor="gray-200" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.8 }}>
            Features: Multi-select, navigation, actions
          </Text>
        </View>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Interactive list with selection
        </Text>
      </Flex>
    </View>
  )
}

export default ListViewDemo

