import { Grid, View, Text, Flex } from '@adobe/react-spectrum'

export function GridDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%">
        {/* Basic Grid Layout */}
        <Grid
          columns="repeat(3, 1fr)"
          rows="repeat(2, size-800)"
          gap="size-100"
          width="100%"
        >
          <View backgroundColor="indigo-600" padding="size-100">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem', fontWeight: 'bold' }}>1</Text>
          </View>
          <View backgroundColor="purple-600" padding="size-100">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem', fontWeight: 'bold' }}>2</Text>
          </View>
          <View backgroundColor="red-600" padding="size-100">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem', fontWeight: 'bold' }}>3</Text>
          </View>
          <View backgroundColor="blue-600" padding="size-100">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem', fontWeight: 'bold' }}>4</Text>
          </View>
          <View backgroundColor="blue-400" padding="size-100">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem', fontWeight: 'bold' }}>5</Text>
          </View>
          <View backgroundColor="green-600" padding="size-100">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem', fontWeight: 'bold' }}>6</Text>
          </View>
        </Grid>

        {/* Spacer between grids */}
        <View height="size-200" />

        {/* Grid with areas */}
        <Grid
          areas={['header header', 'sidebar content', 'footer footer']}
          columns="1fr 2fr"
          gap="size-100"
          width="100%"
        >
          <View gridArea="header" backgroundColor="gray-700" padding="size-100">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem' }}>Header</Text>
          </View>
          <View gridArea="sidebar" backgroundColor="gray-600" padding="size-100">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem' }}>Side</Text>
          </View>
          <View gridArea="content" backgroundColor="gray-500" padding="size-100">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem' }}>Content</Text>
          </View>
          <View gridArea="footer" backgroundColor="gray-700" padding="size-100">
            <Text UNSAFE_style={{ color: 'white', fontSize: '0.75rem' }}>Footer</Text>
          </View>
        </Grid>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          CSS Grid: columns, rows, areas
        </Text>
      </Flex>
    </View>
  )
}

export default GridDemo

