import { Image, Text, Flex, View } from '@adobe/react-spectrum'

export function ImageDemo() {
  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%" gap="size-150">
        {/* Hero image */}
        <Image 
          src="https://picsum.photos/400/200?random=1"
          alt="Hero landscape image"
          width="100%"
          height="size-2000"
          objectFit="cover"
        />

        {/* Different aspect ratios with real photos */}
        <Flex direction="row" gap="size-100" wrap>
          <Image 
            src="https://picsum.photos/120/120?random=2"
            alt="Square nature image"
            width="size-1200"
            height="size-1200"
            objectFit="cover"
          />
          <Image 
            src="https://picsum.photos/180/120?random=3"
            alt="Landscape city image"
            width="size-1800"
            height="size-1200"
            objectFit="cover"
          />
          <Image 
            src="https://picsum.photos/90/120?random=4"
            alt="Portrait people image"
            width="size-900"
            height="size-1200"
            objectFit="cover"
          />
        </Flex>

        {/* Special effects images */}
        <Flex direction="row" gap="size-100" wrap>
          <Image 
            src="https://picsum.photos/150/100?grayscale&random=5"
            alt="Grayscale image"
            width="size-1500"
            height="size-1000"
            objectFit="cover"
          />
          <Image 
            src="https://picsum.photos/150/100?blur=2&random=6"
            alt="Blurred image"
            width="size-1500"
            height="size-1000"
            objectFit="cover"
          />
          <Image 
            src="https://picsum.photos/150/100?random=7"
            alt="Colorful image"
            width="size-1500"
            height="size-1000"
            objectFit="cover"
          />
        </Flex>

        {/* Responsive image with different fit */}
        <Image 
          src="https://picsum.photos/300/150?random=8"
          alt="Responsive nature image"
          width="100%"
          height="size-1000"
          objectFit="contain"
        />

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          High-quality placeholder images from Lorem Picsum
        </Text>
      </Flex>
    </View>
  )
}

export default ImageDemo
