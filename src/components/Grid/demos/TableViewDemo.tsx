import { useState } from 'react'
import { TableView, TableHeader, TableBody, Column, Row, Cell, Text, Flex, View, Button } from '@adobe/react-spectrum'
import type { Selection, Key } from '@adobe/react-spectrum'
import { 
  Folder, 
  FileText, 
  Image, 
  ChartBar 
} from '@phosphor-icons/react'
import { PhosphorIcon } from '@/components/PhosphorIcon'

function isSetSelection(selection: Selection): selection is Set<Key> {
  return selection instanceof Set
}

export function TableViewDemo() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['1']))

  const columns = [
    { name: 'Name', uid: 'name' },
    { name: 'Type', uid: 'type' },
    { name: 'Size', uid: 'size' },
    { name: 'Modified', uid: 'modified' }
  ]

  const rows = [
    {
      id: '1',
      name: 'Documents',
      icon: Folder,
      type: 'Folder',
      size: '2.3 MB',
      modified: '2024-01-15'
    },
    {
      id: '2',
      name: 'report.pdf',
      icon: FileText,
      type: 'PDF',
      size: '1.2 MB',
      modified: '2024-01-14'
    },
    {
      id: '3',
      name: 'image.jpg',
      icon: Image,
      type: 'Image',
      size: '856 KB',
      modified: '2024-01-13'
    },
    {
      id: '4',
      name: 'data.xlsx',
      icon: ChartBar,
      type: 'Spreadsheet',
      size: '3.1 MB',
      modified: '2024-01-12'
    }
  ]

  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys)
  }

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%" gap="size-150">
        {/* TableView */}
        <View UNSAFE_style={{ maxHeight: '200px', overflow: 'auto' }}>
          <TableView
            aria-label="File browser table"
            selectionMode="multiple"
            selectedKeys={selectedKeys}
            onSelectionChange={handleSelectionChange}
            UNSAFE_style={{ fontSize: '0.75rem' }}
          >
            <TableHeader columns={columns}>
              {(column) => (
                <Column
                  key={column.uid}
                  align={column.uid === 'size' || column.uid === 'modified' ? 'end' : 'start'}
                >
                  <Text UNSAFE_style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>
                    {column.name}
                  </Text>
                </Column>
              )}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <Row key={item.id}>
                  {(columnKey) => {
                    if (columnKey === 'name') {
                      return (
                        <Cell>
                           <Flex alignItems="center">
                             <PhosphorIcon icon={item.icon} />
                            <Text UNSAFE_style={{ fontSize: '0.7rem' }}>
                              {item.name as string}
                            </Text>
                          </Flex>
                        </Cell>
                      )
                    }
                    
                    const displayValue = columnKey === 'type' 
                      ? item.type 
                      : columnKey === 'size' 
                      ? item.size 
                      : item.modified

                    return (
                      <Cell>
                        <Text UNSAFE_style={{ fontSize: '0.7rem' }}>
                          {displayValue as string}
                        </Text>
                      </Cell>
                    )
                  }}
                </Row>
              )}
            </TableBody>
          </TableView>
        </View>

        {/* Selection info */}
        <View backgroundColor="gray-200" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
            Selected: {isSetSelection(selectedKeys) ? selectedKeys.size : 0} item{isSetSelection(selectedKeys) && selectedKeys.size !== 1 ? 's' : !isSetSelection(selectedKeys) ? 's' : ''}
          </Text>
          {isSetSelection(selectedKeys) && selectedKeys.size > 0 && (
            <Text UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.7, marginTop: '4px' }}>
              {Array.from(selectedKeys).map(key => {
                const item = rows.find(r => r.id === key)
                return item?.name
              }).join(', ')}
            </Text>
          )}
        </View>

        {/* Action buttons */}
        <Flex wrap gap="size-100">
          <Button
            variant="secondary"
            onPress={() => setSelectedKeys(new Set())}
            isDisabled={!isSetSelection(selectedKeys) || selectedKeys.size === 0}
          >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Clear</Text>
          </Button>
          <Button
            variant="primary"
            onPress={() => setSelectedKeys(new Set(rows.map(r => r.id)))}
          >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Select All</Text>
          </Button>
        </Flex>

        {/* Table features info */}
        <View backgroundColor="gray-200" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.8 }}>
            Features: Multi-select, sorting, resizing
          </Text>
        </View>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Data table with selection
        </Text>
      </Flex>
    </View>
  )
}

export default TableViewDemo
