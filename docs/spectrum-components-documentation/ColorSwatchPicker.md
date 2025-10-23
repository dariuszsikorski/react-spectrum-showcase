---
source: https://react-spectrum.adobe.com/react-spectrum/ColorSwatchPicker.html
date: Thu, 16 Oct 2025 01:12:35 GMT
---

A ColorSwatchPicker displays a list of color swatches and allows a user to select one of them.

* * *

```
<ColorSwatchPicker>
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
  <ColorSwatch color="#08f" />
  <ColorSwatch color="#088" />
  <ColorSwatch color="#008" />
</ColorSwatchPicker>
```

```
<ColorSwatchPicker>
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
  <ColorSwatch color="#08f" />
  <ColorSwatch color="#088" />
  <ColorSwatch color="#008" />
</ColorSwatchPicker>
```

```
<ColorSwatchPicker>
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
  <ColorSwatch color="#08f" />
  <ColorSwatch color="#088" />
  <ColorSwatch color="#008" />
</ColorSwatchPicker>
```

* * *

ColorSwatchPicker accepts either an uncontrolled default value or a controlled value, provided using the `defaultValue` or `value` props respectively. The value provided to either of these props should be a color string or `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object. The value is matched against the color of each ColorSwatch, including equivalent colors in different color spaces.

In the example below, the `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from a HSL string so that `value`'s type remains consistent.

```
import {parseColor} from '@adobe/react-spectrum';

function Example() {
  let [color, setColor] = React.useState(parseColor('hsl(0, 100%, 33.33%)'));

  return (
    <ColorSwatchPicker value={color} onChange={setColor}>
      <ColorSwatch color="#A00" />
      <ColorSwatch color="#f80" />
      <ColorSwatch color="#080" />
    </ColorSwatchPicker>
  );
}
```

```
import {parseColor} from '@adobe/react-spectrum';

function Example() {
  let [color, setColor] = React.useState(
    parseColor('hsl(0, 100%, 33.33%)')
  );

  return (
    <ColorSwatchPicker value={color} onChange={setColor}>
      <ColorSwatch color="#A00" />
      <ColorSwatch color="#f80" />
      <ColorSwatch color="#080" />
    </ColorSwatchPicker>
  );
}
```

```
import {parseColor} from '@adobe/react-spectrum';

function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        'hsl(0, 100%, 33.33%)'
      )
    );

  return (
    <ColorSwatchPicker
      value={color}
      onChange={setColor}
    >
      <ColorSwatch color="#A00" />
      <ColorSwatch color="#f80" />
      <ColorSwatch color="#080" />
    </ColorSwatchPicker>
  );
}
```

**Note**: ColorSwatches rendered inside a ColorSwatchPicker must have unique colors, even between different color spaces. For example, the values `#f00`, `hsl(0, 100%, 50%)`, and `hsb(0, 100%, 100%)` are all equivalent and considered duplicates. This is required so that selection behavior works properly.

* * *

By default, `ColorSwatchPicker` has an `aria-label` with the localized string "Color swatches". This can be overridden with a more specific accessibility label using the `aria-label` or `aria-labelledby` props. All labels should be localized.

```
<ColorSwatchPicker aria-label="Fill color">
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
</ColorSwatchPicker>
```

```
<ColorSwatchPicker aria-label="Fill color">
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
</ColorSwatchPicker>
```

```
<ColorSwatchPicker aria-label="Fill color">
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
</ColorSwatchPicker>
```

* * *

ColorSwatchPicker accepts an `onChange` prop which is triggered whenever the value is edited by the user. It receives a `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object as a parameter.

The example below uses `onChange` to update a separate element with the color value as a string.

```
import {parseColor} from '@adobe/react-spectrum';

function Example() {
  let [value, setValue] = React.useState(parseColor('#A00'));

  return (
    <div>
      <ColorSwatchPicker value={value} onChange={setValue}>
        <ColorSwatch color="#A00" />
        <ColorSwatch color="#f80" />
        <ColorSwatch color="#080" />
        <ColorSwatch color="#08f" />
        <ColorSwatch color="#088" />
        <ColorSwatch color="#008" />
      </ColorSwatchPicker>
      <p>Selected color: {value.toString('rgb')}</p>
    </div>
  );
}
```

```
import {parseColor} from '@adobe/react-spectrum';

function Example() {
  let [value, setValue] = React.useState(
    parseColor('#A00')
  );

  return (
    <div>
      <ColorSwatchPicker value={value} onChange={setValue}>
        <ColorSwatch color="#A00" />
        <ColorSwatch color="#f80" />
        <ColorSwatch color="#080" />
        <ColorSwatch color="#08f" />
        <ColorSwatch color="#088" />
        <ColorSwatch color="#008" />
      </ColorSwatchPicker>
      <p>Selected color: {value.toString('rgb')}</p>
    </div>
  );
}
```

```
import {parseColor} from '@adobe/react-spectrum';

function Example() {
  let [value, setValue] =
    React.useState(
      parseColor('#A00')
    );

  return (
    <div>
      <ColorSwatchPicker
        value={value}
        onChange={setValue}
      >
        <ColorSwatch color="#A00" />
        <ColorSwatch color="#f80" />
        <ColorSwatch color="#080" />
        <ColorSwatch color="#08f" />
        <ColorSwatch color="#088" />
        <ColorSwatch color="#008" />
      </ColorSwatchPicker>
      <p>
        Selected color:
        {' '}
        {value.toString(
          'rgb'
        )}
      </p>
    </div>
  );
}
```

* * *

Name

Type

Default

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The ColorSwatches within the ColorSwatchPicker.

`density`

`'compact' | 'regular' | 'spacious'`

`"regular"`

The amount of padding between the swatches.

`size`

`'XS' | 'S' | 'M' | 'L'`

`"M"`

The size of the color swatches.

`rounding`

`'none' | 'default' | 'full'`

`"none"`

The corner rounding of the color swatches.

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)`

—

The current value (controlled).

`defaultValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)`

—

The default value (uncontrolled).

Events

Name

Type

Description

`onChange`

`( (value: [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color) )) => void`

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

[View guidelines](https://spectrum.adobe.com/page/swatch-group/#Size)

```
<ColorSwatchPicker size="XS">
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
  <ColorSwatch color="#08f" />
</ColorSwatchPicker>
```

```
<ColorSwatchPicker size="XS">
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
  <ColorSwatch color="#08f" />
</ColorSwatchPicker>
```

```
<ColorSwatchPicker size="XS">
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
  <ColorSwatch color="#08f" />
</ColorSwatchPicker>
```

[View guidelines](https://spectrum.adobe.com/page/swatch-group/#Density)

```
<ColorSwatchPicker density="compact">
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
  <ColorSwatch color="#08f" />
</ColorSwatchPicker>
```

```
<ColorSwatchPicker density="compact">
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
  <ColorSwatch color="#08f" />
</ColorSwatchPicker>
```

```
<ColorSwatchPicker density="compact">
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
  <ColorSwatch color="#08f" />
</ColorSwatchPicker>
```

[View guidelines](https://spectrum.adobe.com/page/swatch-group/#Corner-rounding-in-swatch-groups)

Only use rounded corners if the ColorSwatchPicker is displayed on a single row.

```
<ColorSwatchPicker rounding="full">
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
  <ColorSwatch color="#08f" />
</ColorSwatchPicker>
```

```
<ColorSwatchPicker rounding="full">
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
  <ColorSwatch color="#08f" />
</ColorSwatchPicker>
```

```
<ColorSwatchPicker rounding="full">
  <ColorSwatch color="#A00" />
  <ColorSwatch color="#f80" />
  <ColorSwatch color="#080" />
  <ColorSwatch color="#08f" />
</ColorSwatchPicker>
```
