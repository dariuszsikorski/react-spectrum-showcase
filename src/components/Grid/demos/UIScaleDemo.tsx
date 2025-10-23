import { Slider, ButtonGroup, Button, View, Text, Badge, Flex } from '@adobe/react-spectrum'
import { useResponsive } from '../../../hooks/useResponsive'

export function UIScaleDemo() {
  const { scale, isDesktop, viewportWidth, setScale } = useResponsive()

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%">
        <Flex direction="row" alignItems="center" wrap>
          <Badge variant={isDesktop ? 'info' : 'neutral'}>
            {isDesktop ? 'Desktop' : 'Mobile'}
          </Badge>
          <Text>Scale: {(scale * 100).toFixed(0)}%</Text>
        </Flex>

        <Slider 
          label="UI Scale"
          minValue={50}
          maxValue={200}
          step={5}
          value={scale * 100}
          onChange={(value) => setScale(value / 100)}
        />

        <ButtonGroup>
          <Button variant="secondary" onPress={() => setScale(0.5)}>50%</Button>
          <Button variant="secondary" onPress={() => setScale(1.0)}>100%</Button>
          <Button variant="secondary" onPress={() => setScale(1.5)}>150%</Button>
        </ButtonGroup>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7, wordBreak: 'break-all' }}>
          Viewport: {viewportWidth}px
        </Text>
      </Flex>
    </View>
  )
}

export default UIScaleDemo
