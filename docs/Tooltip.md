---
source: https://react-spectrum.adobe.com/react-spectrum/Tooltip.html
date: Thu, 16 Oct 2025 01:29:50 GMT
---

Display container for Tooltip content. Has a directional arrow dependent on its placement.

* * *

```
<TooltipTrigger>
  <ActionButton aria-label="Edit Name"><Edit /></ActionButton>
  <Tooltip>Change Name</Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger>
  <ActionButton aria-label="Edit Name">
    <Edit />
  </ActionButton>
  <Tooltip>Change Name</Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger>
  <ActionButton aria-label="Edit Name">
    <Edit />
  </ActionButton>
  <Tooltip>
    Change Name
  </Tooltip>
</TooltipTrigger>
```

## Content[#](#content)

* * *

The TooltipTrigger accepts exactly two children: the element which triggers the display of the Tooltip and the Tooltip itself. The trigger element must be the first child passed into the TooltipTrigger. All content should be internationalized.

Tooltip triggers must be focusable and hoverable in order to ensure that all users can activate them. When displayed, TooltipTrigger automatically associates the tooltip with the trigger element so that it is described by the tooltip content.

* * *

Tooltips should appear after a short delay when hovering the trigger, or instantly when using keyboard focus. This delay can be adjusted for hover. [View guidelines](https://spectrum.adobe.com/page/tooltip/#Immediate-or-delayed-appearance)

```
<TooltipTrigger delay={0}>
  <ActionButton aria-label="Save"><Save /></ActionButton>
  <Tooltip>Saving applies your new settings right away.</Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger delay={0}>
  <ActionButton aria-label="Save">
    <Save />
  </ActionButton>
  <Tooltip>
    Saving applies your new settings right away.
  </Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger
  delay={0}
>
  <ActionButton aria-label="Save">
    <Save />
  </ActionButton>
  <Tooltip>
    Saving applies your
    new settings right
    away.
  </Tooltip>
</TooltipTrigger>
```

Tooltips have a warm up and cool down period, [see guidelines](https://spectrum.adobe.com/page/tooltip/#Warmup-and-cooldown). Only one tooltip can be open at a time.

```
<Flex gap="size-200">
  <TooltipTrigger>
    <ActionButton>Hover me</ActionButton>
    <Tooltip>I come up after a delay.</Tooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <ActionButton>Then hover me</ActionButton>
    <Tooltip>If you did it quickly, I appear immediately.</Tooltip>
  </TooltipTrigger>
</Flex>
```

```
<Flex gap="size-200">
  <TooltipTrigger>
    <ActionButton>Hover me</ActionButton>
    <Tooltip>I come up after a delay.</Tooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <ActionButton>Then hover me</ActionButton>
    <Tooltip>
      If you did it quickly, I appear immediately.
    </Tooltip>
  </TooltipTrigger>
</Flex>
```

```
<Flex gap="size-200">
  <TooltipTrigger>
    <ActionButton>
      Hover me
    </ActionButton>
    <Tooltip>
      I come up after a
      delay.
    </Tooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <ActionButton>
      Then hover me
    </ActionButton>
    <Tooltip>
      If you did it
      quickly, I appear
      immediately.
    </Tooltip>
  </TooltipTrigger>
</Flex>
```

* * *

Tooltips support a variety of placement options.

The Tooltip's placement with respect to its trigger element can be adjusted using the `placement` prop. See the props table [below](#tooltiptrigger-props) for a full list of available placement combinations.

```
<TooltipTrigger placement="end">
  <ActionButton aria-label="Foo">Placement</ActionButton>
  <Tooltip>
    In left-to-right, this is on the right. In right-to-left, this is on the
    left.
  </Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger placement="end">
  <ActionButton aria-label="Foo">Placement</ActionButton>
  <Tooltip>
    In left-to-right, this is on the right. In
    right-to-left, this is on the left.
  </Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger placement="end">
  <ActionButton aria-label="Foo">
    Placement
  </ActionButton>
  <Tooltip>
    In left-to-right,
    this is on the
    right. In
    right-to-left, this
    is on the left.
  </Tooltip>
</TooltipTrigger>
```

### Offset and cross offset[#](#offset-and-cross-offset)

The Tooltip's offset with respect to its trigger can be adjusted using the `offset` and `crossOffset` props. The `offset` prop controls the spacing applied along the main axis between the element and its trigger whereas the `crossOffset` prop handles the spacing applied along the cross axis.

Below is a tooltip offset by an additional 50px above the trigger.

```
<TooltipTrigger offset={50}>
  <ActionButton aria-label="Offset from trigger">Offset</ActionButton>
  <Tooltip>This will shift up.</Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger offset={50}>
  <ActionButton aria-label="Offset from trigger">
    Offset
  </ActionButton>
  <Tooltip>This will shift up.</Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger
  offset={50}
>
  <ActionButton aria-label="Offset from trigger">
    Offset
  </ActionButton>
  <Tooltip>
    This will shift up.
  </Tooltip>
</TooltipTrigger>
```

Below is a tooltip cross offset by an additional 100px to the right of the trigger.

```
<TooltipTrigger crossOffset={100} placement="bottom">
  <ActionButton aria-label="Cross Offset from trigger">
    Cross Offset
  </ActionButton>
  <Tooltip>This will shift over to the right.</Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger crossOffset={100} placement="bottom">
  <ActionButton aria-label="Cross Offset from trigger">
    Cross Offset
  </ActionButton>
  <Tooltip>This will shift over to the right.</Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger
  crossOffset={100}
  placement="bottom"
>
  <ActionButton aria-label="Cross Offset from trigger">
    Cross Offset
  </ActionButton>
  <Tooltip>
    This will shift
    over to the right.
  </Tooltip>
</TooltipTrigger>
```

* * *

TooltipTrigger accepts an `onOpenChange` handler which is triggered whenever the Tooltip is shown or hidden.

The example below uses `onOpenChange` to update a separate element with the current open state of the Dialog.

```
function Example() {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <Flex alignItems="center" gap="size-100">
      <TooltipTrigger isOpen={isOpen} onOpenChange={setOpen}>
        <ActionButton aria-label="Resize"><Resize /></ActionButton>
        <Tooltip>Resize text.</Tooltip>
      </TooltipTrigger>
      <Text>Tooltip is {isOpen ? 'showing' : 'not showing'}</Text>
    </Flex>
  );
}
```

```
function Example() {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <Flex alignItems="center" gap="size-100">
      <TooltipTrigger
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <ActionButton aria-label="Resize">
          <Resize />
        </ActionButton>
        <Tooltip>Resize text.</Tooltip>
      </TooltipTrigger>
      <Text>
        Tooltip is {isOpen ? 'showing' : 'not showing'}
      </Text>
    </Flex>
  );
}
```

```
function Example() {
  let [isOpen, setOpen] =
    React.useState(
      false
    );

  return (
    <Flex
      alignItems="center"
      gap="size-100"
    >
      <TooltipTrigger
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <ActionButton aria-label="Resize">
          <Resize />
        </ActionButton>
        <Tooltip>
          Resize text.
        </Tooltip>
      </TooltipTrigger>
      <Text>
        Tooltip is{' '}
        {isOpen
          ? 'showing'
          : 'not showing'}
      </Text>
    </Flex>
  );
}
```

* * *

Name

Type

Default

Description

`children`

`[ [ReactElement](https://reactjs.org/docs/rendering-elements.html), [ReactElement](https://reactjs.org/docs/rendering-elements.html) ]`

—

`offset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`7`

The additional offset applied along the main axis between the element and its anchor element.

`placement`

`[Placement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/overlays/src/index.d.ts:Placement)`

`'top'`

The placement of the tooltip with respect to the trigger.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the tooltip should be disabled, independent from the trigger.

`delay`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`1500`

The delay time for the tooltip to show up. [See guidelines](https://spectrum.adobe.com/page/tooltip/#Immediate-or-delayed-appearance).

`trigger`

`'hover' | 'focus'`

`'hover'`

By default, opens for both focus and hover. Can be made to open only for focus.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

`containerPadding`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`12`

The placement padding that should be applied between the element and its surrounding container.

`crossOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The additional offset applied along the cross axis between the element and its anchor element.

`shouldFlip`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.

Events

Name

Type

Description

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the overlay's open state changes.

Name

Type

Default

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

`variant`

`'neutral' | 'positive' | 'negative' | 'info'`

—

The [visual style](https://spectrum.adobe.com/page/tooltip/#Semantic-variants) of the Tooltip.

`placement`

`'start' | 'end' | 'right' | 'left' | 'top' | 'bottom'`

`'top'`

The placement of the element with respect to its anchor element.

`showIcon`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element is rendered.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

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

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Defines a string value that labels the current element.

`aria-labelledby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) that labels the current element.

`aria-describedby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) that describes the object.

`aria-details`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) that provide a detailed, extended description for the object.

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

* * *

[View guidelines](https://spectrum.adobe.com/page/tooltip/#Table-of-options)

**Positive**

```
<TooltipTrigger>
  <ActionButton aria-label="Approve"><ThumbUp /></ActionButton>
  <Tooltip variant="positive" showIcon>Approve workflow.</Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger>
  <ActionButton aria-label="Approve">
    <ThumbUp />
  </ActionButton>
  <Tooltip variant="positive" showIcon>
    Approve workflow.
  </Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger>
  <ActionButton aria-label="Approve">
    <ThumbUp />
  </ActionButton>
  <Tooltip
    variant="positive"
    showIcon
  >
    Approve workflow.
  </Tooltip>
</TooltipTrigger>
```

**Information**

```
<TooltipTrigger>
  <ActionButton aria-label="Information"><Question /></ActionButton>
  <Tooltip variant="info" showIcon>More information menu.</Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger>
  <ActionButton aria-label="Information">
    <Question />
  </ActionButton>
  <Tooltip variant="info" showIcon>
    More information menu.
  </Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger>
  <ActionButton aria-label="Information">
    <Question />
  </ActionButton>
  <Tooltip
    variant="info"
    showIcon
  >
    More information
    menu.
  </Tooltip>
</TooltipTrigger>
```

**Negative**

```
<TooltipTrigger>
  <ActionButton aria-label="Danger Will Robinson"><Delete /></ActionButton>
  <Tooltip variant="negative" showIcon>Dangerous action.</Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger>
  <ActionButton aria-label="Danger Will Robinson">
    <Delete />
  </ActionButton>
  <Tooltip variant="negative" showIcon>
    Dangerous action.
  </Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger>
  <ActionButton aria-label="Danger Will Robinson">
    <Delete />
  </ActionButton>
  <Tooltip
    variant="negative"
    showIcon
  >
    Dangerous action.
  </Tooltip>
</TooltipTrigger>
```

* * *

A TooltipTrigger can be disabled without disabling the trigger it displays on.

**isDisabled**

```
<TooltipTrigger isDisabled>
  <ActionButton
    aria-label="Danger Will Robinson"
    onPress={() => alert('pressed trigger')}
  >
    <Delete />
  </ActionButton>
  <Tooltip variant="negative" showIcon>Dangerous action.</Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger isDisabled>
  <ActionButton
    aria-label="Danger Will Robinson"
    onPress={() => alert('pressed trigger')}
  >
    <Delete />
  </ActionButton>
  <Tooltip variant="negative" showIcon>
    Dangerous action.
  </Tooltip>
</TooltipTrigger>
```

```
<TooltipTrigger
  isDisabled
>
  <ActionButton
    aria-label="Danger Will Robinson"
    onPress={() =>
      alert(
        'pressed trigger'
      )}
  >
    <Delete />
  </ActionButton>
  <Tooltip
    variant="negative"
    showIcon
  >
    Dangerous action.
  </Tooltip>
</TooltipTrigger>
```

* * *

Tooltips need to be accessible to keyboard and screen reader users, so we ensure that they are only placed on focusable and hoverable elements. For example, plain text and disabled buttons aren't focusable, meaning keyboard and screen reader users would be unable to access the information in that tooltip.

If you need to display some additional context, consider using [ContextualHelp](https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html).

```
import {Content, ContextualHelp, Flex, Heading} from '@adobe/react-spectrum';

<Flex gap="size-100" alignItems="center">
  <TooltipTrigger>
    <ActionButton isDisabled>Delete resource</ActionButton>
    <Tooltip variant="negative" showIcon>Dangerous action.</Tooltip>
  </TooltipTrigger>
  <ContextualHelp variant="info">
    <Heading>Permission required</Heading>
    <Content>
      Your admin must grant you permission before you can delete resources.
    </Content>
  </ContextualHelp>
</Flex>
```

```
import {
  Content,
  ContextualHelp,
  Flex,
  Heading
} from '@adobe/react-spectrum';

<Flex gap="size-100" alignItems="center">
  <TooltipTrigger>
    <ActionButton isDisabled>
      Delete resource
    </ActionButton>
    <Tooltip variant="negative" showIcon>
      Dangerous action.
    </Tooltip>
  </TooltipTrigger>
  <ContextualHelp variant="info">
    <Heading>Permission required</Heading>
    <Content>
      Your admin must grant you permission before you can
      delete resources.
    </Content>
  </ContextualHelp>
</Flex>
```

```
import {
  Content,
  ContextualHelp,
  Flex,
  Heading
} from '@adobe/react-spectrum';

<Flex
  gap="size-100"
  alignItems="center"
>
  <TooltipTrigger>
    <ActionButton
      isDisabled
    >
      Delete resource
    </ActionButton>
    <Tooltip
      variant="negative"
      showIcon
    >
      Dangerous action.
    </Tooltip>
  </TooltipTrigger>
  <ContextualHelp variant="info">
    <Heading>
      Permission
      required
    </Heading>
    <Content>
      Your admin must
      grant you
      permission before
      you can delete
      resources.
    </Content>
  </ContextualHelp>
</Flex>
```

* * *

The TooltipTrigger features an popover that transitions in and out of the page as it is opened and closed. It also has a warmup and cooldown time that you've have to account for when interacting with it. Please see the following sections in the testing docs for more information on how to handle these behaviors in your test suite.

[Timers](https://react-spectrum.adobe.com/react-spectrum/testing.html#timers)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/tooltip/test/TooltipTrigger.test.js) if you find that the above isn't sufficient when resolving issues in your own test cases.
