import React from 'react'
import { Heading, View, Text, Flex } from '@adobe/react-spectrum'
import { PhosphorIcon } from '@/components/PhosphorIcon'
import { BookOpen } from '@phosphor-icons/react'
import { useHighlight } from '../../contexts/highlight-context'

interface GridItemProps {
  title: string
  id?: string
  children?: React.ReactNode
  documentationUrl?: string
}

export function GridItem({ title, id, children, documentationUrl }: GridItemProps) {
  const { highlightedItemId } = useHighlight()
  const isHighlighted = highlightedItemId === id

  return (
    <div 
      className={`GridItem ${isHighlighted ? 'GridItem--highlighted' : ''}`}
      id={id}
      data-component-id={id}
    >
      <div className="GridItem_inner">
        <Flex direction="row" justifyContent="space-between" alignItems="center" marginBottom="size-200">
          <Heading level={3} UNSAFE_className="GridItem_title">
            {title}
          </Heading>
          {documentationUrl && (
            <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
              <a 
                href={documentationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--spectrum-global-color-blue-600)', 
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <PhosphorIcon 
                  icon={BookOpen} 
                  size="XS"
                  color="var(--spectrum-global-color-gray-600)"
                />
                Docs
              </a>
            </Text>
          )}
        </Flex>
        <View>
          {children}
        </View>
      </div>
    </div>
  )
}

export default GridItem
