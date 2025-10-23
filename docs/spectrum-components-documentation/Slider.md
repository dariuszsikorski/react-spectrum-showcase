---
source: https://react-spectrum.adobe.com/react-spectrum/Slider.html
date: Thu, 16 Oct 2025 01:25:01 GMT
---

Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.

* * *

```
<Slider label="Cookies to buy" defaultValue={12} />
```

```
<Slider label="Cookies to buy" defaultValue={12} />
```

```
<Slider
  label="Cookies to buy"
  defaultValue={12}
/>
```

* * *

Sliders are controlled with the `value` prop and uncontrolled with the `defaultValue` prop. This value must fall between the Slider's minimum and maximum values, which default to 0 and 100 respectively.

```
function Example() {
  let [value, setValue] = React.useState(25);
  return (
    <Flex gap="size-150" wrap>
      <Slider
        label="Cookies to buy (Uncontrolled)"
        defaultValue={25} />
      <Slider
        label="Cookies to buy (Controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}
```

```
function Example() {
  let [value, setValue] = React.useState(25);
  return (
    <Flex gap="size-150" wrap>
      <Slider
        label="Cookies to buy (Uncontrolled)"
        defaultValue={25} />
      <Slider
        label="Cookies to buy (Controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}
```

```
function Example() {
  let [value, setValue] =
    React.useState(25);
  return (
    <Flex
      gap="size-150"
      wrap
    >
      <Slider
        label="Cookies to buy (Uncontrolled)"
        defaultValue={25}
      />
      <Slider
        label="Cookies to buy (Controlled)"
        value={value}
        onChange={setValue}
      />
    </Flex>
  );
}
```

Alternatively, a different scale can be used by setting the `minValue` and `maxValue` props.

```
<Slider
  label="Cookies to buy"
  minValue={50}
  maxValue={150}
  defaultValue={100} />
```

```
<Slider
  label="Cookies to buy"
  minValue={50}
  maxValue={150}
  defaultValue={100} />
```

```
<Slider
  label="Cookies to buy"
  minValue={50}
  maxValue={150}
  defaultValue={100} />
```

The slider value can be formatted by using the `formatOptions` prop. `formatOptions` is compatible with the option parameter of [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) and is applied based on the current locale.

```
<Slider
  label="Currency"
  formatOptions={{style: 'currency', currency: 'JPY'}}
  defaultValue={60} />
```

```
<Slider
  label="Currency"
  formatOptions={{style: 'currency', currency: 'JPY'}}
  defaultValue={60} />
```

```
<Slider
  label="Currency"
  formatOptions={{
    style: 'currency',
    currency: 'JPY'
  }}
  defaultValue={60}
/>
```

Slider supports the `name` prop for integration with HTML forms.

```
<Slider
  label="Opacity"
  defaultValue={50}
  name="opacity" />
```

```
<Slider
  label="Opacity"
  defaultValue={50}
  name="opacity" />
```

```
<Slider
  label="Opacity"
  defaultValue={50}
  name="opacity" />
```

* * *

Value labels are shown above the Slider by default, but they can also be moved to the side or hidden as needed. The label text should be in sentence case.

```
<Flex direction="column" maxWidth="size-5000" gap="size-300">
  <Slider label="Cookies to buy" defaultValue={25} />
  <Slider label="Donuts to buy" labelPosition="side" defaultValue={25} />
  <Slider label="Pastries to buy" showValueLabel={false} defaultValue={25} />
</Flex>
```

```
<Flex
  direction="column"
  maxWidth="size-5000"
  gap="size-300"
>
  <Slider label="Cookies to buy" defaultValue={25} />
  <Slider
    label="Donuts to buy"
    labelPosition="side"
    defaultValue={25}
  />
  <Slider
    label="Pastries to buy"
    showValueLabel={false}
    defaultValue={25}
  />
</Flex>
```

```
<Flex
  direction="column"
  maxWidth="size-5000"
  gap="size-300"
>
  <Slider
    label="Cookies to buy"
    defaultValue={25}
  />
  <Slider
    label="Donuts to buy"
    labelPosition="side"
    defaultValue={25}
  />
  <Slider
    label="Pastries to buy"
    showValueLabel={false}
    defaultValue={25}
  />
</Flex>
```

By default, the value label is formatted as a plain number. This can be customized using the following props.

-   `showValueLabel`: Allows you to display or hide the value label.
-   `formatOptions`: Allows you to customize the format of the value.
-   `getValueLabel`: Allows you to provide a custom function to format the value label.

```
<Flex direction="column" maxWidth="size-3000" gap="size-300">
  <Slider
    label="Cookies to buy"
    showValueLabel={false}
    defaultValue={90} />
  <Slider
    label="Percent donus eaten"
    maxValue={1}
    step={0.001}
    formatOptions={{style: 'percent', minimumFractionDigits: 1}}
    defaultValue={0.891} />
  <Slider
    label="Donuts to buy"
    maxValue={60}
    getValueLabel={donuts => `${donuts} of 60 Donuts`} />
</Flex>
```

```
<Flex
  direction="column"
  maxWidth="size-3000"
  gap="size-300"
>
  <Slider
    label="Cookies to buy"
    showValueLabel={false}
    defaultValue={90}
  />
  <Slider
    label="Percent donus eaten"
    maxValue={1}
    step={0.001}
    formatOptions={{
      style: 'percent',
      minimumFractionDigits: 1
    }}
    defaultValue={0.891}
  />
  <Slider
    label="Donuts to buy"
    maxValue={60}
    getValueLabel={(donuts) => `${donuts} of 60 Donuts`}
  />
</Flex>
```

```
<Flex
  direction="column"
  maxWidth="size-3000"
  gap="size-300"
>
  <Slider
    label="Cookies to buy"
    showValueLabel={false}
    defaultValue={90}
  />
  <Slider
    label="Percent donus eaten"
    maxValue={1}
    step={0.001}
    formatOptions={{
      style: 'percent',
      minimumFractionDigits:
        1
    }}
    defaultValue={0.891}
  />
  <Slider
    label="Donuts to buy"
    maxValue={60}
    getValueLabel={(donuts) =>
      `${donuts} of 60 Donuts`}
  />
</Flex>
```

Depending on the visualization being used (i.e. depending on the `showValueLabel` prop), a `label`, `aria-label`, or `aria-labelledby` prop is required.

To internationalize a Slider, a localized string should be passed to the `label` prop, `aria-label` prop, or value of the associated `aria-labelledby` element.

For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of the slider is automatically flipped. In addition, Slider automatically uses the current locale to format the value label.

* * *

Name

Type

Default

Description

`isFilled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether a fill color is shown between the start of the slider and the current value.

`fillOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The offset from which to start the fill.

`trackGradient`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

—

The background of the track, specified as the stops for a CSS background: `linear-gradient(to right/left, ...trackGradient)`.

`formatOptions`

`[Intl.NumberFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)`

—

The display format of the value label.

`labelPosition`

`[LabelPosition](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/labelable.d.ts:LabelPosition)`

`'top'`

The label's overall position relative to the element it is labeling.

`showValueLabel`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the value's label is displayed. True by default if there's a `label`, false by default if not.

`getValueLabel`

`( (value: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) )) => [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

A function that returns the content to display as the value's label. Overrides default formatted number.

`contextualHelp`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

A ContextualHelp element to place next to the label.

`orientation`

`[Orientation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/orientation.d.ts:Orientation)`

`'horizontal'`

The orientation of the Slider.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the whole Slider is disabled.

`minValue`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The slider's minimum value.

`maxValue`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`100`

The slider's maximum value.

`step`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`1`

The slider's step value.

`value`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The current value (controlled).

`defaultValue`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The default value (uncontrolled).

`label`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The content to display as the label.

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

Events

Name

Type

Description

`onChangeEnd`

`( (value: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) )) => void`

Fired when the slider stops moving, due to being let go.

`onChange`

`( (value: T )) => void`

Handler that is called when the value changes.

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

[View guidelines](https://spectrum.adobe.com/page/slider/#Fill)

```
<Flex direction="column" gap="size-300">
  <Slider
    label="Opacity"
    maxValue={1}
    formatOptions={{ style: 'percent' }}
    defaultValue={0.9}
    step={0.01}
    isFilled
  />
  <Slider
    label="Exposure"
    minValue={-5}
    maxValue={5}
    defaultValue={1.83}
    formatOptions={{ signDisplay: 'always' }}
    step={0.01}
    fillOffset={0}
    isFilled
  />
</Flex>
```

```
<Flex direction="column" gap="size-300">
  <Slider
    label="Opacity"
    maxValue={1}
    formatOptions={{ style: 'percent' }}
    defaultValue={0.9}
    step={0.01}
    isFilled
  />
  <Slider
    label="Exposure"
    minValue={-5}
    maxValue={5}
    defaultValue={1.83}
    formatOptions={{ signDisplay: 'always' }}
    step={0.01}
    fillOffset={0}
    isFilled
  />
</Flex>
```

```
<Flex
  direction="column"
  gap="size-300"
>
  <Slider
    label="Opacity"
    maxValue={1}
    formatOptions={{
      style: 'percent'
    }}
    defaultValue={0.9}
    step={0.01}
    isFilled
  />
  <Slider
    label="Exposure"
    minValue={-5}
    maxValue={5}
    defaultValue={1.83}
    formatOptions={{
      signDisplay:
        'always'
    }}
    step={0.01}
    fillOffset={0}
    isFilled
  />
</Flex>
```

[View guidelines](https://spectrum.adobe.com/page/slider/#Gradient)

```
<Slider
  label="Filter density"
  trackGradient={['white', 'rgba(177,141,32,1)']}
  defaultValue={.3}
  maxValue={1}
  step={0.01}
  formatOptions={{ style: 'percent' }}
  isFilled
/>
```

```
<Slider
  label="Filter density"
  trackGradient={['white', 'rgba(177,141,32,1)']}
  defaultValue={.3}
  maxValue={1}
  step={0.01}
  formatOptions={{ style: 'percent' }}
  isFilled
/>
```

```
<Slider
  label="Filter density"
  trackGradient={[
    'white',
    'rgba(177,141,32,1)'
  ]}
  defaultValue={.3}
  maxValue={1}
  step={0.01}
  formatOptions={{
    style: 'percent'
  }}
  isFilled
/>
```

A [ContextualHelp](https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html) element may be placed next to the label to provide additional information or help about a Slider.

```
import {Content, ContextualHelp, Heading} from '@adobe/react-spectrum';

<Slider
  label="Exposure"
  minValue={-100}
  maxValue={100}
  defaultValue={0}
  formatOptions={{signDisplay: 'always'}}
  isFilled
  fillOffset={0}
  contextualHelp={
    <ContextualHelp>
      <Heading>What is exposure?</Heading>
      <Content>Exposure adjusts how bright the image is.</Content>
    </ContextualHelp>
  } />
```

```
import {
  Content,
  ContextualHelp,
  Heading
} from '@adobe/react-spectrum';

<Slider
  label="Exposure"
  minValue={-100}
  maxValue={100}
  defaultValue={0}
  formatOptions={{ signDisplay: 'always' }}
  isFilled
  fillOffset={0}
  contextualHelp={
    <ContextualHelp>
      <Heading>What is exposure?</Heading>
      <Content>
        Exposure adjusts how bright the image is.
      </Content>
    </ContextualHelp>
  }
/>
```

```
import {
  Content,
  ContextualHelp,
  Heading
} from '@adobe/react-spectrum';

<Slider
  label="Exposure"
  minValue={-100}
  maxValue={100}
  defaultValue={0}
  formatOptions={{
    signDisplay:
      'always'
  }}
  isFilled
  fillOffset={0}
  contextualHelp={
    <ContextualHelp>
      <Heading>
        What is
        exposure?
      </Heading>
      <Content>
        Exposure
        adjusts how
        bright the
        image is.
      </Content>
    </ContextualHelp>
  }
/>
```

[View guidelines](https://spectrum.adobe.com/page/slider/#Disabled)

```
<Slider label="Cookies to share" defaultValue={25} isDisabled />
```

```
<Slider
  label="Cookies to share"
  defaultValue={25}
  isDisabled
/>
```

```
<Slider
  label="Cookies to share"
  defaultValue={25}
  isDisabled
/>
```

* * *

The Slider features a draggable handle that the user can interact with to change its value. Please see the following section in the testing docs for more information on how to simulate this action in your test suite.

[Simulating move event](https://react-spectrum.adobe.com/react-spectrum/testing.html#simulating-move-event)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/color/test/ColorArea.test.tsx) if you find that the above isn't sufficient when resolving issues in your own test cases.
