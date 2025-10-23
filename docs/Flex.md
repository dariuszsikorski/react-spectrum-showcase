---
source: https://react-spectrum.adobe.com/react-spectrum/Flex.html
date: Thu, 16 Oct 2025 01:04:51 GMT
---

A layout container using flexbox. Provides Spectrum dimension values, and supports the gap property to define consistent spacing between items.

* * *

The `Flex` component can be used to layout its children in one dimension with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox). Any React Spectrum component can be used as a child, and `Flex` components can be nested to create more complex layouts.

The `gap`, `rowGap` and `columnGap` can be defined with [Spectrum dimension variables](https://react-spectrum.adobe.com/react-spectrum/styling.html#dimension-values) to ensure consistency across applications, and allow the layout to adapt to different devices automatically. These values can be autocompleted in many IDEs for convenience.

All `Flex` props also support object syntax to define responsive layouts that change at certain breakpoints. See the [layout docs](https://react-spectrum.adobe.com/react-spectrum/layout.html#responsive-layout) for more details.

* * *

This example shows a simple vertical stack, with a gap between each item defined using a [Spectrum dimension variable](https://react-spectrum.adobe.com/react-spectrum/styling.html#dimension-values).

```
<Flex direction="column" width="size-2000" gap="size-100">
  <View backgroundColor="celery-600" height="size-800" />
  <View backgroundColor="blue-600" height="size-800" />
  <View backgroundColor="magenta-600" height="size-800" />
</Flex>
```

```
<Flex direction="column" width="size-2000" gap="size-100">
  <View backgroundColor="celery-600" height="size-800" />
  <View backgroundColor="blue-600" height="size-800" />
  <View backgroundColor="magenta-600" height="size-800" />
</Flex>
```

```
<Flex
  direction="column"
  width="size-2000"
  gap="size-100"
>
  <View
    backgroundColor="celery-600"
    height="size-800"
  />
  <View
    backgroundColor="blue-600"
    height="size-800"
  />
  <View
    backgroundColor="magenta-600"
    height="size-800"
  />
</Flex>
```

This example shows a horizontal stack.

```
<Flex direction="row" height="size-800" gap="size-100">
  <View backgroundColor="celery-600" width="size-800" />
  <View backgroundColor="blue-600" width="size-800" />
  <View backgroundColor="magenta-600" width="size-800" />
</Flex>
```

```
<Flex direction="row" height="size-800" gap="size-100">
  <View backgroundColor="celery-600" width="size-800" />
  <View backgroundColor="blue-600" width="size-800" />
  <View backgroundColor="magenta-600" width="size-800" />
</Flex>
```

```
<Flex
  direction="row"
  height="size-800"
  gap="size-100"
>
  <View
    backgroundColor="celery-600"
    width="size-800"
  />
  <View
    backgroundColor="blue-600"
    width="size-800"
  />
  <View
    backgroundColor="magenta-600"
    width="size-800"
  />
</Flex>
```

This example shows how you can nest flexboxes to create more complicated layouts. It also uses the `flex` prop on one of the children to expand it to fill the repaining space.

```
<Flex direction="column" gap="size-100">
  <View backgroundColor="celery-600" height="size-800" />
  <Flex direction="row" height="size-3000" gap="size-100">
    <View backgroundColor="indigo-600" width="size-2000" />
    <View backgroundColor="seafoam-600" flex />
  </Flex>
  <View backgroundColor="magenta-600" height="size-800" />
</Flex>
```

```
<Flex direction="column" gap="size-100">
  <View backgroundColor="celery-600" height="size-800" />
  <Flex direction="row" height="size-3000" gap="size-100">
    <View backgroundColor="indigo-600" width="size-2000" />
    <View backgroundColor="seafoam-600" flex />
  </Flex>
  <View backgroundColor="magenta-600" height="size-800" />
</Flex>
```

```
<Flex
  direction="column"
  gap="size-100"
>
  <View
    backgroundColor="celery-600"
    height="size-800"
  />
  <Flex
    direction="row"
    height="size-3000"
    gap="size-100"
  >
    <View
      backgroundColor="indigo-600"
      width="size-2000"
    />
    <View
      backgroundColor="seafoam-600"
      flex
    />
  </Flex>
  <View
    backgroundColor="magenta-600"
    height="size-800"
  />
</Flex>
```

This example shows how to enable wrapping of items into multiple rows. Resize your browser window to see the items reflow.

```
<Flex direction="row" gap="size-100" wrap>
  {colors.map((color) => (
    <View
      key={color}
      backgroundColor={color}
      width="size-800"
      height="size-800"
    />
  ))}
</Flex>
```

```
<Flex direction="row" gap="size-100" wrap>
  {colors.map((color) => (
    <View
      key={color}
      backgroundColor={color}
      width="size-800"
      height="size-800"
    />
  ))}
</Flex>
```

```
<Flex
  direction="row"
  gap="size-100"
  wrap
>
  {colors.map(
    (color) => (
      <View
        key={color}
        backgroundColor={color}
        width="size-800"
        height="size-800"
      />
    )
  )}
</Flex>
```

The `alignItems` prop can be used to align items along the cross axis. When `direction` is `"column"`, this refers to horizontal alignment, and when `direction` is `"row"` it refers to vertical alignment.

This example horizontally centers items in a vertical stack.

```
<Flex direction="column" gap="size-100" alignItems="center">
  <View backgroundColor="celery-600" width="size-800" height="size-800" />
  <View backgroundColor="blue-600" width="size-2000" height="size-800" />
  <View backgroundColor="magenta-600" width="size-800" height="size-800" />
</Flex>
```

```
<Flex
  direction="column"
  gap="size-100"
  alignItems="center"
>
  <View
    backgroundColor="celery-600"
    width="size-800"
    height="size-800"
  />
  <View
    backgroundColor="blue-600"
    width="size-2000"
    height="size-800"
  />
  <View
    backgroundColor="magenta-600"
    width="size-800"
    height="size-800"
  />
</Flex>
```

```
<Flex
  direction="column"
  gap="size-100"
  alignItems="center"
>
  <View
    backgroundColor="celery-600"
    width="size-800"
    height="size-800"
  />
  <View
    backgroundColor="blue-600"
    width="size-2000"
    height="size-800"
  />
  <View
    backgroundColor="magenta-600"
    width="size-800"
    height="size-800"
  />
</Flex>
```

**NOTE**: the default value for `alignItems` is `"stretch"` according to the CSS spec. This means that if your items do not have a size defined in the cross direction, then they will be stretched to fill the height of the container. This may be undesirable in some cases, e.g. a group of buttons with varying heights. Ensure you set an `alignItems` value to account for this.

The `justifyContent` prop can be used to align items along the main axis. When `direction` is `"column"`, this refers to vertical alignment, and when `direction` is `"row"` it refers to horizontal alignment.

This example vertically centers the stack of items within the available space defined by a container.

```
<View height="size-3000" borderWidth="thin" borderColor="dark">
  <Flex direction="column" gap="size-100" justifyContent="center" height="100%">
    <View backgroundColor="celery-600" width="size-800" height="size-800" />
    <View backgroundColor="blue-600" width="size-2000" height="size-800" />
    <View backgroundColor="magenta-600" width="size-800" height="size-800" />
  </Flex>
</View>
```

```
<View
  height="size-3000"
  borderWidth="thin"
  borderColor="dark"
>
  <Flex
    direction="column"
    gap="size-100"
    justifyContent="center"
    height="100%"
  >
    <View
      backgroundColor="celery-600"
      width="size-800"
      height="size-800"
    />
    <View
      backgroundColor="blue-600"
      width="size-2000"
      height="size-800"
    />
    <View
      backgroundColor="magenta-600"
      width="size-800"
      height="size-800"
    />
  </Flex>
</View>
```

```
<View
  height="size-3000"
  borderWidth="thin"
  borderColor="dark"
>
  <Flex
    direction="column"
    gap="size-100"
    justifyContent="center"
    height="100%"
  >
    <View
      backgroundColor="celery-600"
      width="size-800"
      height="size-800"
    />
    <View
      backgroundColor="blue-600"
      width="size-2000"
      height="size-800"
    />
    <View
      backgroundColor="magenta-600"
      width="size-800"
      height="size-800"
    />
  </Flex>
</View>
```

* * *

Name

Type

Default

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

Children of the flex container.

`direction`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<'row' | 'column' | 'row-reverse' | 'column-reverse'>`

`'row'`

The direction in which to layout children. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction).

`wrap`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'wrap' | 'nowrap' | 'wrap-reverse'>`

`false`

Whether to wrap items onto multiple lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap).

`justifyContent`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<'start' | 'end' | 'center' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center'>`

—

The distribution of space around items along the main axis. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).

`alignContent`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center'>`

—

The distribution of space around child items along the cross axis. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).

`alignItems`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<'start' | 'end' | 'center' | 'stretch' | 'self-start' | 'self-end' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center'>`

—

The alignment of children within their container. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).

`gap`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

—

The space to display between both rows and columns. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).

`columnGap`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

—

The space to display between columns. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap).

`rowGap`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

—

The space to display between rows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap).

Layout

Name

Type

Description

`flex`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>`

When used in a flex layout, specifies how the element will grow or shrink to fit the space available. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex).

`flexGrow`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>`

When used in a flex layout, specifies how the element will grow to fit the space available. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow).

`flexShrink`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>`

When used in a flex layout, specifies how the element will shrink to fit the space available. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink).

`flexBasis`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>`

When used in a flex layout, specifies the initial main size of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis).

`alignSelf`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<'auto' | 'normal' | 'start' | 'end' | 'center' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'stretch'>`

Overrides the `alignItems` property of a flex or grid container. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self).

`justifySelf`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<'auto' | 'normal' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'center' | 'left' | 'right' | 'stretch'>`

Specifies how the element is justified inside a flex or grid container. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self).

`order`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>`

The layout order for the element within a flex or grid container. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/order).

`gridArea`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>`

When used in a grid layout, specifies the named grid area that the element should be placed in within the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area).

`gridColumn`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>`

When used in a grid layout, specifies the column the element should be placed in within the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column).

`gridRow`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>`

When used in a grid layout, specifies the row the element should be placed in within the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row).

`gridColumnStart`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>`

When used in a grid layout, specifies the starting column to span within the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start).

`gridColumnEnd`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>`

When used in a grid layout, specifies the ending column to span within the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end).

`gridRowStart`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>`

When used in a grid layout, specifies the starting row to span within the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start).

`gridRowEnd`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>`

When used in a grid layout, specifies the ending row to span within the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end).

Spacing

Name

Type

Description

`margin`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The margin for all four sides of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin).

`marginTop`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The margin for the top side of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top).

`marginBottom`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The margin for the bottom side of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom).

`marginStart`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The margin for the logical start side of the element, depending on layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start).

`marginEnd`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The margin for the logical end side of an element, depending on layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end).

`marginX`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The margin for both the left and right sides of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin).

`marginY`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The margin for both the top and bottom sides of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin).

Sizing

Name

Type

Description

`width`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The width of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/width).

`minWidth`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The minimum width of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width).

`maxWidth`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The maximum width of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width).

`height`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The height of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/height).

`minHeight`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The minimum height of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height).

`maxHeight`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The maximum height of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height).

Positioning

Name

Type

Description

`position`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'>`

Specifies how the element is positioned. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position).

`top`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The top position for the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/top).

`bottom`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The bottom position for the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom).

`left`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The left position for the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/left). Consider using `start` instead for RTL support.

`right`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The right position for the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/right). Consider using `start` instead for RTL support.

`start`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The logical start position for the element, depending on layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start).

`end`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The logical end position for the element, depending on layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end).

`zIndex`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>`

The stacking order for the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index).

`isHidden`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>`

Hides the element.

Accessibility

Name

Type

Description

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

Advanced

Name

Type

Description

`UNSAFE_className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Sets the CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. Only use as a **last resort**. Use style props instead.

`UNSAFE_style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style)`

Sets inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. Only use as a **last resort**. Use style props instead.
