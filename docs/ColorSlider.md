---
source: https://react-spectrum.adobe.com/react-spectrum/ColorSlider.html
date: Thu, 16 Oct 2025 01:11:30 GMT
---

ColorSliders allow users to adjust an individual channel of a color value.

* * *

```
<ColorSlider defaultValue="#7f0000" channel="red" />
```

```
<ColorSlider defaultValue="#7f0000" channel="red" />
```

```
<ColorSlider
  defaultValue="#7f0000"
  channel="red"
/>
```

* * *

A ColorSlider requires either an uncontrolled default value or a controlled value, provided using the `defaultValue` or `value` props respectively. The value provided to either of these props should be a color string or `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object. The `channel` prop must also be provided to specify which color channel the slider should display. This must be one of the channels included in the color value, for example, for RGB colors, the "red", "green", and "blue" channels are available. For a full list of supported channels, see the [Props](#props) table below.

In the example below, the `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from a HSL string so that `value`'s type remains consistent.

```
import {parseColor} from 'react-stately';

function Example() {
  let [value, setValue] = React.useState(parseColor('hsl(0, 100%, 50%)'));
  return (
    <Flex gap="size-300" wrap>
      <ColorSlider
        label="Hue (uncontrolled)"
        defaultValue="hsl(0, 100%, 50%)"
        channel="hue"
      />
      <ColorSlider
        label="Hue (controlled)"
        value={value}
        onChange={setValue}
        channel="hue"
      />
    </Flex>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [value, setValue] = React.useState(
    parseColor('hsl(0, 100%, 50%)')
  );
  return (
    <Flex gap="size-300" wrap>
      <ColorSlider
        label="Hue (uncontrolled)"
        defaultValue="hsl(0, 100%, 50%)"
        channel="hue"
      />
      <ColorSlider
        label="Hue (controlled)"
        value={value}
        onChange={setValue}
        channel="hue"
      />
    </Flex>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [value, setValue] =
    React.useState(
      parseColor(
        'hsl(0, 100%, 50%)'
      )
    );
  return (
    <Flex
      gap="size-300"
      wrap
    >
      <ColorSlider
        label="Hue (uncontrolled)"
        defaultValue="hsl(0, 100%, 50%)"
        channel="hue"
      />
      <ColorSlider
        label="Hue (controlled)"
        value={value}
        onChange={setValue}
        channel="hue"
      />
    </Flex>
  );
}
```

ColorSlider supports the `name` prop for integration with HTML forms. The value will be submitted as a number between the minimum and maximum value for the displayed channel.

```
<ColorSlider
  defaultValue="#7f0000"
  channel="red"
  name="red" />
```

```
<ColorSlider
  defaultValue="#7f0000"
  channel="red"
  name="red" />
```

```
<ColorSlider
  defaultValue="#7f0000"
  channel="red"
  name="red" />
```

* * *

The ColorSlider's channel name and value are shown above the ColorSlider by default. The label and value label can be hidden by providing `label={null}` and `showValueLabel={false}` to the ColorSlider, respectively. In addition, a custom label can be provided via the `label` prop.

```
<Flex gap="size-300" wrap alignItems="end">
  <ColorSlider
    channel="saturation"
    defaultValue="hsl(0, 100%, 50%)"
    label={null}
  />
  <ColorSlider
    channel="lightness"
    defaultValue="hsl(0, 100%, 50%)"
    showValueLabel={false}
  />
</Flex>
```

```
<Flex gap="size-300" wrap alignItems="end">
  <ColorSlider
    channel="saturation"
    defaultValue="hsl(0, 100%, 50%)"
    label={null}
  />
  <ColorSlider
    channel="lightness"
    defaultValue="hsl(0, 100%, 50%)"
    showValueLabel={false}
  />
</Flex>
```

```
<Flex
  gap="size-300"
  wrap
  alignItems="end"
>
  <ColorSlider
    channel="saturation"
    defaultValue="hsl(0, 100%, 50%)"
    label={null}
  />
  <ColorSlider
    channel="lightness"
    defaultValue="hsl(0, 100%, 50%)"
    showValueLabel={false}
  />
</Flex>
```

If the ColorSlider's label is hidden, a localized string for the channel name is used as the `aria-label` by default. The value of the ColorSlider is also automatically localized and provided to the input as `aria-valuetext` regardless of the value label's visibility. If you provide your own `aria-label` or `aria-labelledby`, be sure to localize the string or labeling element appropriately.

For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of the ColorSlider is automatically flipped. As mentioned previously, ColorSlider automatically uses the current locale to format the channel and value label.

* * *

ColorSlider supports two events: `onChange` and `onChangeEnd`. `onChange` is triggered whenever the ColorSlider's handle is dragged, and `onChangeEnd` is triggered when the user stops dragging the handle. Both events receive a `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object as a parameter.

The example below uses `onChange` and `onChangeEnd` to update two separate elements with the ColorSlider's value.

```
function Example() {
  let [currentValue, setCurrentValue] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );
  let [finalValue, setFinalValue] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );

  return (
    <div>
      <ColorSlider
        value={currentValue}
        channel="hue"
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
      />
      <pre>Current value: {currentValue.toString('hsl')}</pre>
      <pre>Final value: {finalValue.toString('hsl')}</pre>
    </div>
  );
}
```

```
function Example() {
  let [currentValue, setCurrentValue] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );
  let [finalValue, setFinalValue] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );

  return (
    <div>
      <ColorSlider
        value={currentValue}
        channel="hue"
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
      />
      <pre>Current value: {currentValue.toString('hsl')}</pre>
      <pre>Final value: {finalValue.toString('hsl')}</pre>
    </div>
  );
}
```

```
function Example() {
  let [
    currentValue,
    setCurrentValue
  ] = React.useState(
    parseColor(
      'hsl(50, 100%, 50%)'
    )
  );
  let [
    finalValue,
    setFinalValue
  ] = React.useState(
    parseColor(
      'hsl(50, 100%, 50%)'
    )
  );

  return (
    <div>
      <ColorSlider
        value={currentValue}
        channel="hue"
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
      />
      <pre>Current value: {currentValue.toString('hsl')}</pre>
      <pre>Final value: {finalValue.toString('hsl')}</pre>
    </div>
  );
}
```

* * *

This example shows how you could build an RGBA color picker using four color sliders bound to the same color value in state. The `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from a hex value, stored in state. The `value` and `onChange` props of ColorSlider are used to make the sliders controlled, so that they all update when the color is modified.

```
function Example() {
  let [color, setColor] = React.useState(parseColor('#ff00ff'));

  return (
    <Flex direction="column">
      <ColorSlider channel="red" value={color} onChange={setColor} />
      <ColorSlider channel="green" value={color} onChange={setColor} />
      <ColorSlider channel="blue" value={color} onChange={setColor} />
      <ColorSlider channel="alpha" value={color} onChange={setColor} />
    </Flex>
  );
}
```

```
function Example() {
  let [color, setColor] = React.useState(
    parseColor('#ff00ff')
  );

  return (
    <Flex direction="column">
      <ColorSlider
        channel="red"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="green"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="blue"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="alpha"
        value={color}
        onChange={setColor}
      />
    </Flex>
  );
}
```

```
function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        '#ff00ff'
      )
    );

  return (
    <Flex direction="column">
      <ColorSlider
        channel="red"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="green"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="blue"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="alpha"
        value={color}
        onChange={setColor}
      />
    </Flex>
  );
}
```

This example shows how to build a similar color picker to the one above, using HSLA colors instead.

```
function Example() {
  let [color, setColor] = React.useState(parseColor('hsla(0, 100%, 50%, 0.5)'));

  return (
    <Flex direction="column">
      <ColorSlider channel="hue" value={color} onChange={setColor} />
      <ColorSlider channel="saturation" value={color} onChange={setColor} />
      <ColorSlider channel="lightness" value={color} onChange={setColor} />
      <ColorSlider channel="alpha" value={color} onChange={setColor} />
    </Flex>
  );
}
```

```
function Example() {
  let [color, setColor] = React.useState(
    parseColor('hsla(0, 100%, 50%, 0.5)')
  );

  return (
    <Flex direction="column">
      <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="saturation"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="lightness"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="alpha"
        value={color}
        onChange={setColor}
      />
    </Flex>
  );
}
```

```
function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        'hsla(0, 100%, 50%, 0.5)'
      )
    );

  return (
    <Flex direction="column">
      <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="saturation"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="lightness"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="alpha"
        value={color}
        onChange={setColor}
      />
    </Flex>
  );
}
```

This example shows how to build an HSBA color picker.

```
function Example() {
  let [color, setColor] = React.useState(parseColor('hsba(0, 100%, 50%, 0.5)'));
  return (
    <>
      <ColorSlider channel="hue" value={color} onChange={setColor} />
      <ColorSlider channel="saturation" value={color} onChange={setColor} />
      <ColorSlider channel="brightness" value={color} onChange={setColor} />
      <ColorSlider channel="alpha" value={color} onChange={setColor} />
    </>
  );
}
```

```
function Example() {
  let [color, setColor] = React.useState(
    parseColor('hsba(0, 100%, 50%, 0.5)')
  );
  return (
    <>
      <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="saturation"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="brightness"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="alpha"
        value={color}
        onChange={setColor}
      />
    </>
  );
}
```

```
function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        'hsba(0, 100%, 50%, 0.5)'
      )
    );
  return (
    <>
      <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="saturation"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="brightness"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="alpha"
        value={color}
        onChange={setColor}
      />
    </>
  );
}
```

* * *

Name

Type

Default

Description

`channel`

`[ColorChannel](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:ColorChannel)`

—

The color channel that the slider manipulates.

`showValueLabel`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the value label is displayed. True by default if there is a label, false by default if not.

`contextualHelp`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

A ContextualHelp element to place next to the label.

`colorSpace`

`[ColorSpace](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:ColorSpace)`

—

The color space that the slider operates in. The `channel` must be in this color space. If not provided, this defaults to the color space of the `color` or `defaultColor` value.

`orientation`

`[Orientation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/orientation.d.ts:Orientation)`

`'horizontal'`

The orientation of the Slider.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the whole Slider is disabled.

`value`

`T`

—

The current value (controlled).

`defaultValue`

`T`

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

`onChange`

`( (value: [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color) )) => void`

Handler that is called when the value changes, as the user drags.

`onChangeEnd`

`( (value: [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color) )) => void`

Handler that is called when the user stops dragging.

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

[View guidelines](https://spectrum.adobe.com/page/color-slider/#Disabled)

```
<ColorSlider defaultValue="#7f0000" channel="red" isDisabled />
```

```
<ColorSlider
  defaultValue="#7f0000"
  channel="red"
  isDisabled
/>
```

```
<ColorSlider
  defaultValue="#7f0000"
  channel="red"
  isDisabled
/>
```

[View guidelines](https://spectrum.adobe.com/page/color-slider/#Orientation)

```
<ColorSlider defaultValue="#7f0000" channel="red" orientation="vertical" />
```

```
<ColorSlider
  defaultValue="#7f0000"
  channel="red"
  orientation="vertical"
/>
```

```
<ColorSlider
  defaultValue="#7f0000"
  channel="red"
  orientation="vertical"
/>
```

[View guidelines](https://spectrum.adobe.com/page/color-slider/#Length)

```
<Flex direction="column" gap="size-300">
  <ColorSlider
    defaultValue="#7f0000"
    channel="red"
    orientation="vertical"
    height="size-3600"
  />
  <ColorSlider
    defaultValue="#7f0000"
    channel="red"
    width="size-3600"
    maxWidth="100%"
  />
</Flex>
```

```
<Flex direction="column" gap="size-300">
  <ColorSlider
    defaultValue="#7f0000"
    channel="red"
    orientation="vertical"
    height="size-3600"
  />
  <ColorSlider
    defaultValue="#7f0000"
    channel="red"
    width="size-3600"
    maxWidth="100%"
  />
</Flex>
```

```
<Flex
  direction="column"
  gap="size-300"
>
  <ColorSlider
    defaultValue="#7f0000"
    channel="red"
    orientation="vertical"
    height="size-3600"
  />
  <ColorSlider
    defaultValue="#7f0000"
    channel="red"
    width="size-3600"
    maxWidth="100%"
  />
</Flex>
```

A [ContextualHelp](https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html) element may be placed next to the label to provide additional information or help about a ColorSlider.

```
import {Content, ContextualHelp, Heading} from '@adobe/react-spectrum';

<ColorSlider
  label="Accent Color"
  channel="hue"
  defaultValue="hsl(120, 100%, 50%)"
  contextualHelp={
    <ContextualHelp>
      <Heading>What is an accent color?</Heading>
      <Content>
        An accent color is the primary foreground color for your theme, used
        across all components.
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

<ColorSlider
  label="Accent Color"
  channel="hue"
  defaultValue="hsl(120, 100%, 50%)"
  contextualHelp={
    <ContextualHelp>
      <Heading>What is an accent color?</Heading>
      <Content>
        An accent color is the primary foreground color
        for your theme, used across all components.
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

<ColorSlider
  label="Accent Color"
  channel="hue"
  defaultValue="hsl(120, 100%, 50%)"
  contextualHelp={
    <ContextualHelp>
      <Heading>
        What is an
        accent color?
      </Heading>
      <Content>
        An accent color
        is the primary
        foreground
        color for your
        theme, used
        across all
        components.
      </Content>
    </ContextualHelp>
  }
/>
```

* * *

The ColorSlider features a draggable handle that the user can interact with to change its color value. Please see the following section in the testing docs for more information on how to simulate this action in your test suite.

[Simulating move event](https://react-spectrum.adobe.com/react-spectrum/testing.html#simulating-move-event)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/color/test/ColorArea.test.tsx) if you find that the above isn't sufficient when resolving issues in your own test cases.
