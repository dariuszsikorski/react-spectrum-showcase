import { useState } from 'react'
import { TreeView, TreeViewItem, TreeViewItemContent, Text, Flex, View, Button } from '@adobe/react-spectrum'
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

export function TreeViewDemo() {
  const [expandedKeys, setExpandedKeys] = useState<Selection>(new Set(['documents', 'photos']))
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['document-1']))

  const handleExpandedChange = (keys: Selection) => {
    if (keys instanceof Set) {
      setExpandedKeys(keys)
    }
  }

  const handleSelectionChange = (keys: Selection) => {
    if (keys instanceof Set) {
      setSelectedKeys(keys)
    }
  }

  const expandAll = () => {
    setExpandedKeys(new Set(['documents', 'photos', 'project-a', 'reports']))
  }

  const collapseAll = () => {
    setExpandedKeys(new Set())
  }

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%" gap="size-150">
        {/* TreeView */}
        <View UNSAFE_style={{ maxHeight: '200px', overflow: 'auto' }}>
          <TreeView
            aria-label="File system tree"
            expandedKeys={expandedKeys}
            onExpandedChange={handleExpandedChange}
            selectedKeys={selectedKeys}
            onSelectionChange={handleSelectionChange}
            UNSAFE_style={{ fontSize: '0.75rem' }}
          >
            <TreeViewItem id="documents" textValue="Documents">
              <TreeViewItemContent>
                <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                  <Flex alignItems="center">
                    <PhosphorIcon icon={Folder} />
                    <Text>Documents</Text>
                  </Flex>
                </Text>
              </TreeViewItemContent>
              <TreeViewItem id="project-a" textValue="Project A">
                <TreeViewItemContent>
                  <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                    <Flex alignItems="center" gap="size-50">
                      <PhosphorIcon icon={Folder} />
                      <Text>Project A</Text>
                    </Flex>
                  </Text>
                </TreeViewItemContent>
                <TreeViewItem id="weekly-report" textValue="Weekly-Report">
                  <TreeViewItemContent>
                    <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                      <Flex alignItems="center" gap="size-50">
                        <PhosphorIcon icon={FileText} />
                        <Text>Weekly Report</Text>
                      </Flex>
                    </Text>
                  </TreeViewItemContent>
                </TreeViewItem>
              </TreeViewItem>
              <TreeViewItem id="document-1" textValue="Document 1">
                <TreeViewItemContent>
                  <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                    <Flex alignItems="center">
                      <PhosphorIcon icon={FileText} />
                      <Text>Document 1</Text>
                    </Flex>
                  </Text>
                </TreeViewItemContent>
              </TreeViewItem>
              <TreeViewItem id="document-2" textValue="Document 2">
                <TreeViewItemContent>
                  <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                    <Flex alignItems="center">
                      <PhosphorIcon icon={FileText} />
                      <Text>Document 2</Text>
                    </Flex>
                  </Text>
                </TreeViewItemContent>
              </TreeViewItem>
            </TreeViewItem>
            <TreeViewItem id="photos" textValue="Photos">
              <TreeViewItemContent>
                <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                  <Flex alignItems="center">
                    <PhosphorIcon icon={Folder} />
                    <Text>Photos</Text>
                  </Flex>
                </Text>
              </TreeViewItemContent>
              <TreeViewItem id="image-1" textValue="Image 1">
                <TreeViewItemContent>
                  <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                    <Flex alignItems="center">
                      <PhosphorIcon icon={Image} />
                      <Text>Image 1</Text>
                    </Flex>
                  </Text>
                </TreeViewItemContent>
              </TreeViewItem>
              <TreeViewItem id="image-2" textValue="Image 2">
                <TreeViewItemContent>
                  <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                    <Flex alignItems="center">
                      <PhosphorIcon icon={Image} />
                      <Text>Image 2</Text>
                    </Flex>
                  </Text>
                </TreeViewItemContent>
              </TreeViewItem>
            </TreeViewItem>
            <TreeViewItem id="reports" textValue="Reports">
              <TreeViewItemContent>
                <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                  <Flex alignItems="center">
                    <PhosphorIcon icon={Folder} />
                    <Text>Reports</Text>
                  </Flex>
                </Text>
              </TreeViewItemContent>
              <TreeViewItem id="report-1" textValue="Report 1">
                <TreeViewItemContent>
                  <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
                    <Flex alignItems="center">
                      <PhosphorIcon icon={ChartBar} />
                      <Text>Report 1</Text>
                    </Flex>
                  </Text>
                </TreeViewItemContent>
              </TreeViewItem>
            </TreeViewItem>
          </TreeView>
        </View>

        {/* Status info */}
        <View backgroundColor="gray-200" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
            Expanded: {isSetSelection(expandedKeys) ? expandedKeys.size : 0} | Selected: {isSetSelection(selectedKeys) ? selectedKeys.size : 0}
          </Text>
          {isSetSelection(selectedKeys) && selectedKeys.size > 0 && (
            <Text UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.7, marginTop: '4px' }}>
              {Array.from(selectedKeys).join(', ')}
            </Text>
          )}
        </View>

        {/* Control buttons */}
        <Flex wrap gap="size-100">
          <Button
            variant="secondary"
            onPress={expandAll}
          >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Expand All</Text>
          </Button>
          <Button
            variant="secondary"
            onPress={collapseAll}
          >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Collapse All</Text>
          </Button>
          <Button
            variant="secondary"
            onPress={() => setSelectedKeys(new Set())}
            isDisabled={!isSetSelection(selectedKeys) || selectedKeys.size === 0}
          >
            <Text UNSAFE_style={{ fontSize: '0.75rem' }}>Clear Selection</Text>
          </Button>
        </Flex>

        {/* Tree features info */}
        <View backgroundColor="gray-200" padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.7rem', opacity: 0.8 }}>
            Features: Hierarchical navigation, expand/collapse, selection
          </Text>
        </View>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Hierarchical tree navigation
        </Text>
      </Flex>
    </View>
  )
}

export default TreeViewDemo

