import React from 'react'
import { 
  Provider, 
  defaultTheme,
  Flex,
  Heading,
  View,
  Text
} from '@adobe/react-spectrum'
import { useTheme } from './contexts/theme-context'
import { useSpectrumScale } from './contexts/SpectrumScaleContext'
import { HighlightProvider } from './contexts/highlight-context'
import { useResponsive } from './hooks/useResponsive'
import { lighten, darken, getReadableContentColor } from './utils/color'
import { SidebarDemo } from './components/Sidebar'
import { GridGallery } from './components/Grid/GridGallery'
import './App.css'

function AppContent() {
  const { colorScheme } = useTheme()
  const { spectrumScale } = useSpectrumScale()
  const { isDesktop } = useResponsive()
  
  const getAccentStorageKey = (scheme: 'light' | 'dark') => `accentHex_${scheme}`
  const accentColorHex = React.useMemo(() => {
    try {
      return localStorage.getItem(getAccentStorageKey(colorScheme)) ?? '#5100FF'
    } catch {
      return '#5100FF'
    }
  }, [colorScheme])

  const accentCssVariablesMap: Record<string, string> = React.useMemo(() => {
    if (!accentColorHex) return {} as Record<string, string>
    const hoverHex = colorScheme === 'light' ? lighten(accentColorHex, 0.08) : lighten(accentColorHex, 0.06)
    const downHex = colorScheme === 'light' ? darken(accentColorHex, 0.10) : darken(accentColorHex, 0.12)
    const contentHex = getReadableContentColor(accentColorHex)
    return {
      ['--spectrum-accent-background-color-default']: accentColorHex,
      ['--spectrum-accent-background-color-hover']: hoverHex,
      ['--spectrum-accent-background-color-down']: downHex,
      ['--spectrum-accent-background-color-key-focus']: accentColorHex,
      ['--spectrum-accent-content-color-default']: contentHex,
    }
  }, [accentColorHex, colorScheme])

  // Theme mapping: Provider only accepts 'light' or 'dark'
  const providerColorScheme = colorScheme === 'light' ? 'light' : 'dark'

  return (
    <Provider theme={defaultTheme} colorScheme={providerColorScheme} scale={spectrumScale} UNSAFE_style={accentCssVariablesMap as unknown as React.CSSProperties}>
      <HighlightProvider>
        <SidebarDemo />
        <div 
          style={{ 
            marginLeft: isDesktop ? '280px' : '0',
            transition: 'margin-left 300ms ease',
            minHeight: '100vh'
          }}
        >
        <View 
          padding="size-400" 
          minHeight="100vh" 
          UNSAFE_style={{ 
            backgroundColor: colorScheme === 'light' ? '#ffffff' : '#1e1e1e'
          }}
        >
          <Flex direction="column" gap="size-300" width="100%" maxWidth="100%">
            <Flex direction="column" gap="size-200" width="100%" maxWidth="100%">
              <Heading level={1}>Component Gallery</Heading>
              <Text UNSAFE_style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px' }}>
                Explore the comprehensive collection of React Spectrum components in this interactive showcase. 
                Built on Adobe's design system, these components are accessible, adaptive, and support both 
                light and dark themes with internationalization for over 30 languages.
              </Text>
              <Flex direction="column" gap="size-100">
                <Text UNSAFE_style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                  Key Features:
                </Text>
                <Flex direction="column" gap="size-50" UNSAFE_style={{ paddingLeft: '16px' }}>
                  <Text UNSAFE_style={{ fontSize: '0.85rem' }}>
                    • <Text UNSAFE_style={{ fontWeight: 'bold' }}>Accessible:</Text> Full screen reader and keyboard navigation support
                  </Text>
                  <Text UNSAFE_style={{ fontSize: '0.85rem' }}>
                    • <Text UNSAFE_style={{ fontWeight: 'bold' }}>Adaptive:</Text> Works with mouse, touch, and keyboard interactions
                  </Text>
                  <Text UNSAFE_style={{ fontSize: '0.85rem' }}>
                    • <Text UNSAFE_style={{ fontWeight: 'bold' }}>Responsive:</Text> Built with responsive design principles for all devices
                  </Text>
                  <Text UNSAFE_style={{ fontSize: '0.85rem' }}>
                    • <Text UNSAFE_style={{ fontWeight: 'bold' }}>International:</Text> Support for right-to-left languages and locale formatting
                  </Text>
                </Flex>
                <Text UNSAFE_style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '8px' }}>
                  Need unstyled components? Check out <a href="https://react-spectrum.adobe.com/react-aria/index.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--spectrum-global-color-blue-600)', textDecoration: 'underline' }}>React Aria</a> for style-free, accessible components ready for your custom designs.
                </Text>
                <Text UNSAFE_style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '4px' }}>
                  Learn more at <a href="https://react-spectrum.adobe.com/react-spectrum/index.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--spectrum-global-color-blue-600)', textDecoration: 'underline' }}>react-spectrum.adobe.com</a>
                </Text>
              </Flex>
            </Flex>
            <GridGallery />
            
            {/* Footer attribution */}
            <Flex direction="column" gap="size-100" UNSAFE_style={{ paddingTop: '1rem', borderTop: '1px solid var(--spectrum-global-color-gray-300)' }}>
              <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.6, textAlign: 'center' }}>
                Built with React Spectrum by <a href="https://dariuszsikorski.pl/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--spectrum-global-color-blue-600)', textDecoration: 'underline' }}>Dariusz Sikorski</a>
              </Text>
              <Flex direction="row" gap="size-200" justifyContent="center" wrap>
                <a href="https://github.com/dariuszsikorski" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--spectrum-global-color-blue-600)', textDecoration: 'underline', fontSize: '0.75rem' }}>GitHub</a>
                <a href="https://www.linkedin.com/in/dariusz-sikorski-56281b3a/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--spectrum-global-color-blue-600)', textDecoration: 'underline', fontSize: '0.75rem' }}>LinkedIn</a>
                <a href="https://phicasso.ai/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--spectrum-global-color-blue-600)', textDecoration: 'underline', fontSize: '0.75rem' }}>Phicasso.ai</a>
              </Flex>
            </Flex>
          </Flex>
        </View>
        </div>
      </HighlightProvider>
    </Provider>
  )
}

function App() {
  return <AppContent />
}

export default App