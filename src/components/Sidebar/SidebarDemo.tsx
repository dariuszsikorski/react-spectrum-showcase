import React, { useState, useEffect, useMemo } from 'react'
import { 
  Flex, 
  View, 
  Text, 
  Heading, 
  ActionButton, 
  Button,
  DialogTrigger,
  Dialog,
  Content,
  Divider,
  Switch,
  Badge,
  Disclosure,
  DisclosureTitle,
  DisclosurePanel,
  SearchField,
  Icon
} from '@adobe/react-spectrum'
import { Sidebar } from './Sidebar'
import { HamburgerButton } from './HamburgerButton'
import { useTheme } from '../../contexts/theme-context'
import { useSpectrumScale } from '../../contexts/SpectrumScaleContext'
import { useHighlight } from '../../contexts/highlight-context'
import { useResponsive } from '../../hooks/useResponsive'
import { useDisclosureState } from '../../hooks/useDisclosureState'
import { useDebounce } from '../../hooks/useDebounce'
import { Gear } from '@phosphor-icons/react'
import { getCategoryIcon } from '../../utils/categoryIconMap'
import { PhosphorIcon } from '../PhosphorIcon'
import { generateComponentId, componentCategories } from '../Grid/GridGallery'
import { scrollToComponent, handleInitialHash } from '../../utils/scroll'

type CategoryWithFiltered = typeof componentCategories[0] & { filteredComponents: typeof componentCategories[0]['components'] }

export function SidebarDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const { colorScheme, cycleColorScheme } = useTheme()
  const { setSpectrumScale } = useSpectrumScale()
  const { scale, setScale } = useResponsive()
  const { highlightItem } = useHighlight()
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  // Handle initial hash on mount
  useEffect(() => {
    handleInitialHash()
  }, [])

  // Handle component link clicks
  const handleComponentClick = (event: React.MouseEvent, componentId: string) => {
    event.preventDefault()
    scrollToComponent(componentId)
    if (isOpen) {
      setIsOpen(false)
    }
    // Highlight the clicked component
    highlightItem(componentId)
  }

  // Filter logic - normalize search term
  const normalizeText = (text: string): string => {
    const lower = text.toLowerCase()
    const noDiacritics = lower.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    return noDiacritics.replace(/\s+/g, ' ').trim()
  }

  // Filter categories and components based on search
  const filteredCategories = useMemo(() => {
    if (!debouncedSearchTerm) {
      return componentCategories.map(cat => ({
        ...cat,
        filteredComponents: cat.components
      }))
    }

    const normalized = normalizeText(debouncedSearchTerm)
    
    return componentCategories
      .map(cat => ({
        ...cat,
        filteredComponents: cat.components.filter(demo =>
          normalizeText(demo.title).includes(normalized)
        )
      }))
      .filter(cat => cat.filteredComponents.length > 0)
  }, [debouncedSearchTerm])

  // Calculate total filtered components
  const filteredComponentCount = useMemo(() =>
    filteredCategories.reduce((sum, cat) => sum + cat.filteredComponents.length, 0),
    [filteredCategories]
  )

  // Top section content
  const topContent = (
    <Flex direction="column" gap="size-150" width="100%">
      <Flex direction="row" alignItems="center" gap="size-150" width="100%">
        <HamburgerButton isOpen={isOpen} onPress={handleToggle} />
        <Flex direction="column" flex>
          <Heading level={3} margin={0}>
            Spectrum Components
          </Heading>
          <Text UNSAFE_style={{ fontSize: '12px', color: 'var(--spectrum-global-color-gray-600)' }}>
            Component Gallery
          </Text>
        </Flex>
      </Flex>
      
      {/* Search Field - Fixed at top */}
      <SearchField
        label="Search components"
        value={searchTerm}
        onChange={setSearchTerm}
        UNSAFE_style={{ fontSize: '11px' }}
      />

    </Flex>
  )

  // Central content - Grouped component list
  const centralContent = (
    <Flex direction="column" gap="size-0">
      {/* Disclosure Groups - No gaps between them */}
      {filteredCategories.map((category, categoryIndex) => (
        <CategoryDisclosure
          key={categoryIndex}
          category={category}
          onComponentClick={handleComponentClick}
          searchTerm={searchTerm}
        />
      ))}

      {/* Empty State */}
      {filteredComponentCount === 0 && (
        <Text UNSAFE_style={{ fontSize: '11px', color: 'var(--spectrum-global-color-gray-500)', fontStyle: 'italic', marginTop: '8px' }}>
          No components match your search
        </Text>
      )}
    </Flex>
  )

  // Bottom section content - Settings popover
  const bottomContent = (
    <Flex direction="column" gap="size-150">
      {/* Settings Button with Popover */}
      <View>
        <DialogTrigger type="popover" placement="right">
          <ActionButton width="100%" aria-label="UI Settings">
            <Flex alignItems="center">
              <Icon>
                <Gear />
              </Icon>
              UI Settings
            </Flex>
          </ActionButton>
          {() => (
            <Dialog width="320px">
              <Content>
                <Flex direction="column" gap="size-300">
                  {/* Theme Toggle */}
                  <View>
                    <Text marginBottom="size-200" UNSAFE_style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                      Color Scheme
                    </Text>

                    <Button 
                      variant="accent" 
                      onPress={cycleColorScheme}
                      width="100%"
                      UNSAFE_style={{ marginTop: 20 }}
                    >
                      {colorScheme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
                    </Button>
                  </View>

                  {/* Spacer */}
                  <Divider size="S" marginY="size-200" />
                  
                  {/* Combined Scale Control */}
                  <View>
                    <Flex direction="row" justifyContent="space-between" alignItems="center" marginBottom="size-100">
                      <Text UNSAFE_style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                        App Scale
                      </Text>
                      <Badge variant={scale === 1.25 ? 'positive' : 'neutral'}>
                        {scale === 1.25 ? '125%' : '100%'}
                      </Badge>
                    </Flex>
                    <Switch 
                      isSelected={scale === 1.25}
                      onChange={(selected) => {
                        if (selected) {
                          setScale(1.25)
                          setSpectrumScale('large')
                        } else {
                          setScale(1.0)
                          setSpectrumScale('medium')
                        }
                      }}
                    >
                      Use Large Scale
                    </Switch>
                  </View>
                </Flex>
              </Content>
            </Dialog>
          )}
        </DialogTrigger>
      </View>
    </Flex>
  )

  return (
    <>
      {/* Mobile Hamburger Button - Fixed Position (only when sidebar is closed) */}
      {!isOpen && <HamburgerButton isOpen={isOpen} onPress={handleToggle} floating={true} />}
      
      <Sidebar
        isOpen={isOpen}
        onToggle={handleToggle}
        topContent={topContent}
        centralContent={centralContent}
        bottomContent={bottomContent}
      />
    </>
  )
}

// Separate component for each disclosure to manage its own state
function CategoryDisclosure({
  category,
  onComponentClick,
  searchTerm
}: {
  category: CategoryWithFiltered
  onComponentClick: (event: React.MouseEvent, componentId: string) => void
  searchTerm: string
}) {
  const { isExpanded, toggleExpanded } = useDisclosureState(category.title, true)
  const IconComponent = getCategoryIcon(category.title)
  
  // Auto-expand when searching (searchTerm has at least 1 character)
  const shouldExpand = searchTerm.length > 0 || isExpanded

  return (
    <Disclosure key={category.title} isExpanded={shouldExpand} onExpandedChange={toggleExpanded}>
      <DisclosureTitle UNSAFE_className="sidebar-disclosure-title">
        <Flex alignItems="center">
          <PhosphorIcon icon={IconComponent as any} size="S" />
          <Text UNSAFE_style={{ fontSize: '11px', fontWeight: '600', marginLeft: '0.25rem' }}>
            {category.title}
          </Text>
        </Flex>
      </DisclosureTitle>
      <DisclosurePanel>
        <Flex direction="column" gap="size-50" marginTop="size-75">
          {category.filteredComponents.map((demo, index) => {
            const componentId = generateComponentId(demo.title)
            return (
              <a
                key={index}
                href={`#${componentId}`}
                onClick={(e) => onComponentClick(e, componentId)}
                className="sidebar-component-link"
              >
                {demo.title}
              </a>
            )
          })}
        </Flex>
      </DisclosurePanel>
    </Disclosure>
  )
}
