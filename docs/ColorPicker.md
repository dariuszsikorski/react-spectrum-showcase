---
source: https://react-spectrum.adobe.com/react-spectrum/ColorPicker.html
date: Thu, 16 Oct 2025 01:11:20 GMT
---

A ColorPicker combines a swatch with a customizable popover for editing a color.

* * *

```
<ColorPicker label="Fill" defaultValue="#5100FF">
  <ColorEditor />
</ColorPicker>
```

```
<ColorPicker label="Fill" defaultValue="#5100FF">
  <ColorEditor />
</ColorPicker>
```

```
<ColorPicker
  label="Fill"
  defaultValue="#5100FF"
>
  <ColorEditor />
</ColorPicker>
```

* * *

A ColorArea requires either an uncontrolled default value or a controlled value, provided using the `defaultValue` or `value` props respectively. The value provided to either of these props should be a color string or `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object.

In the example below, the `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from a HSL string so that `value`'s type remains consistent.

```
import {ColorPicker, Flex, parseColor} from '@adobe/react-spectrum';

function Example() {
  let [value, setValue] = React.useState(parseColor('hsl(25, 100%, 50%)'));
  return (
    <Flex gap="size-300" wrap>
      <ColorPicker
        label="Color Picker (uncontrolled)"
        defaultValue="hsl(25, 100%, 50%)"
      >        <ColorEditor />
      </ColorPicker>
      <ColorPicker
        label="Color Picker (controlled)"
        value={value}
        onChange={setValue}
      >        <ColorEditor />
      </ColorPicker>
    </Flex>
  );
}
```

```
import {
  ColorPicker,
  Flex,
  parseColor
} from '@adobe/react-spectrum';

function Example() {
  let [value, setValue] = React.useState(
    parseColor('hsl(25, 100%, 50%)')
  );
  return (
    <Flex gap="size-300" wrap>
      <ColorPicker
        label="Color Picker (uncontrolled)"
        defaultValue="hsl(25, 100%, 50%)"
      >        <ColorEditor />
      </ColorPicker>
      <ColorPicker
        label="Color Picker (controlled)"
        value={value}
        onChange={setValue}
      >        <ColorEditor />
      </ColorPicker>
    </Flex>
  );
}
```

```
import {
  ColorPicker,
  Flex,
  parseColor
} from '@adobe/react-spectrum';

function Example() {
  let [value, setValue] =
    React.useState(
      parseColor(
        'hsl(25, 100%, 50%)'
      )
    );
  return (
    <Flex
      gap="size-300"
      wrap
    >
      <ColorPicker
        label="Color Picker (uncontrolled)"
        defaultValue="hsl(25, 100%, 50%)"
      >        <ColorEditor />
      </ColorPicker>
      <ColorPicker
        label="Color Picker (controlled)"
        value={value}
        onChange={setValue}
      >        <ColorEditor />
      </ColorPicker>
    </Flex>
  );
}
```

* * *

A visual label should be provided for the ColorPicker using the `label` prop.

```
<ColorPicker label="Stroke color" defaultValue="#345">
  <ColorEditor />
</ColorPicker>
```

```
<ColorPicker label="Stroke color" defaultValue="#345">
  <ColorEditor />
</ColorPicker>
```

```
<ColorPicker
  label="Stroke color"
  defaultValue="#345"
>
  <ColorEditor />
</ColorPicker>
```

If a visible label isn't specified, an `aria-label` should be provided to the ColorPicker for accessibility. If the field is labeled by a separate element, an `aria-labelledby` prop must be provided using the `id` of the labeling element instead.

```
<ColorPicker aria-label="Fill color" defaultValue="#184">
  <ColorEditor />
</ColorPicker>
```

```
<ColorPicker aria-label="Fill color" defaultValue="#184">
  <ColorEditor />
</ColorPicker>
```

```
<ColorPicker
  aria-label="Fill color"
  defaultValue="#184"
>
  <ColorEditor />
</ColorPicker>
```

In addition to the visible or accessibility label, a ColorPicker also announces a description of the current color value (e.g. "dark vibrant blue") as a part of the label.

For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of the ColorPicker is automatically flipped.

* * *

ColorPicker accepts an `onChange` prop which is triggered whenever the value is edited by the user. It receives a `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object as a parameter.

The example below uses `onChange` to update a separate element with the color value as a string.

```
import {parseColor} from '@adobe/react-spectrum';

function Example() {
  let [value, setValue] = React.useState(parseColor('hsl(50, 100%, 50%)'));

  return (
    <div>
      <ColorPicker
        label="Color"
        value={value}
        onChange={setValue}
      >
        <ColorEditor />
      </ColorPicker>
      <p>Selected color: {value.toString('hsl')}</p>
    </div>
  );
}
```

```
import {parseColor} from '@adobe/react-spectrum';

function Example() {
  let [value, setValue] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );

  return (
    <div>
      <ColorPicker
        label="Color"
        value={value}
        onChange={setValue}
      >
        <ColorEditor />
      </ColorPicker>
      <p>Selected color: {value.toString('hsl')}</p>
    </div>
  );
}
```

```
import {parseColor} from '@adobe/react-spectrum';

function Example() {
  let [value, setValue] =
    React.useState(
      parseColor(
        'hsl(50, 100%, 50%)'
      )
    );

  return (
    <div>
      <ColorPicker
        label="Color"
        value={value}
        onChange={setValue}
      >
        <ColorEditor />
      </ColorPicker>
      <p>
        Selected color:
        {' '}
        {value.toString(
          'hsl'
        )}
      </p>
    </div>
  );
}
```

* * *

`ColorEditor` provides a default color picker layout including a color area for saturation and brightness, and color sliders for hue and alpha. It also includes ColorFields to view and enter an exact color value by number.

ColorPicker can be customized by providing any combination of color components as children, including [ColorArea](https://react-spectrum.adobe.com/react-spectrum/ColorArea.html), [ColorField](https://react-spectrum.adobe.com/react-spectrum/ColorField.html), [ColorSlider](https://react-spectrum.adobe.com/react-spectrum/ColorSlider.html), [ColorSwatchPicker](https://react-spectrum.adobe.com/react-spectrum/ColorSwatchPicker.html), and [ColorWheel](https://react-spectrum.adobe.com/react-spectrum/ColorWheel.html).

```
import {ColorArea, ColorWheel} from '@adobe/react-spectrum';

<ColorPicker label="Fill" defaultValue="#08f">
  <ColorWheel />
  <ColorArea
    colorSpace="hsb"
    xChannel="saturation"
    yChannel="brightness"
    size="size-400"
    position="absolute"
    top="calc(50% - size-400)"
    left="calc(50% - size-400)"
  />
</ColorPicker>
```

```
import {ColorArea, ColorWheel} from '@adobe/react-spectrum';

<ColorPicker label="Fill" defaultValue="#08f">
  <ColorWheel />
  <ColorArea
    colorSpace="hsb"
    xChannel="saturation"
    yChannel="brightness"
    size="size-400"
    position="absolute"
    top="calc(50% - size-400)"
    left="calc(50% - size-400)"
  />
</ColorPicker>
```

```
import {
  ColorArea,
  ColorWheel
} from '@adobe/react-spectrum';

<ColorPicker
  label="Fill"
  defaultValue="#08f"
>
  <ColorWheel />
  <ColorArea
    colorSpace="hsb"
    xChannel="saturation"
    yChannel="brightness"
    size="size-400"
    position="absolute"
    top="calc(50% - size-400)"
    left="calc(50% - size-400)"
  />
</ColorPicker>
```

* * *

Name

Type

Default

Description

`label`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

A visual label for the color picker.

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The contents of the color picker popover, e.g. `<ColorEditor />`.

`size`

`'XS' | 'S' | 'M' | 'L'`

`"M"`

The size of the color swatch.

`rounding`

`'default' | 'none' | 'full'`

`"default"`

The corner rounding of the color swatch.

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

Accessibility

Name

Type

Description

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

Name

Type

Description

`hideAlphaChannel`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to hide the alpha channel color slider and color field.

* * *

By default, `ColorEditor` includes a ColorSlider and ColorField for editing the alpha channel. This can be hidden with the `hideAlphaChannel` prop.

```
<ColorPicker label="Color" defaultValue="#f80">
  <ColorEditor hideAlphaChannel />
</ColorPicker>
```

```
<ColorPicker label="Color" defaultValue="#f80">
  <ColorEditor hideAlphaChannel />
</ColorPicker>
```

```
<ColorPicker
  label="Color"
  defaultValue="#f80"
>
  <ColorEditor
    hideAlphaChannel
  />
</ColorPicker>
```

A `ColorEditor` can be combined with additional color components such as a [ColorSwatchPicker](https://react-spectrum.adobe.com/react-spectrum/ColorSwatchPicker.html) to choose from a list of pre-defined colors.

```
import {ColorSwatch, ColorSwatchPicker} from '@adobe/react-spectrum';

<ColorPicker label="Color" defaultValue="#A00">
  <Flex direction="column" gap="size-300">
    <ColorEditor />
    <ColorSwatchPicker>
      <ColorSwatch color="#A00" />
      <ColorSwatch color="#f80" />
      <ColorSwatch color="#080" />
      <ColorSwatch color="#08f" />
      <ColorSwatch color="#088" />
      <ColorSwatch color="#008" />
    </ColorSwatchPicker>
  </Flex>
</ColorPicker>
```

```
import {
  ColorSwatch,
  ColorSwatchPicker
} from '@adobe/react-spectrum';

<ColorPicker label="Color" defaultValue="#A00">
  <Flex direction="column" gap="size-300">
    <ColorEditor />
    <ColorSwatchPicker>
      <ColorSwatch color="#A00" />
      <ColorSwatch color="#f80" />
      <ColorSwatch color="#080" />
      <ColorSwatch color="#08f" />
      <ColorSwatch color="#088" />
      <ColorSwatch color="#008" />
    </ColorSwatchPicker>
  </Flex>
</ColorPicker>
```

```
import {
  ColorSwatch,
  ColorSwatchPicker
} from '@adobe/react-spectrum';

<ColorPicker
  label="Color"
  defaultValue="#A00"
>
  <Flex
    direction="column"
    gap="size-300"
  >
    <ColorEditor />
    <ColorSwatchPicker>
      <ColorSwatch color="#A00" />
      <ColorSwatch color="#f80" />
      <ColorSwatch color="#080" />
      <ColorSwatch color="#08f" />
      <ColorSwatch color="#088" />
      <ColorSwatch color="#008" />
    </ColorSwatchPicker>
  </Flex>
</ColorPicker>
```

This example uses [ColorSlider](https://react-spectrum.adobe.com/react-spectrum/ColorSlider.html) to allow a user to adjust each channel of a color value, with a [Picker](https://react-spectrum.adobe.com/react-spectrum/Picker.html) to switch between color spaces.

```
import type {ColorSpace} from '@adobe/react-spectrum';
import {ColorSlider, getColorChannels, Item, Picker} from '@adobe/react-spectrum';

function Example() {
  let [space, setSpace] = React.useState<ColorSpace>('rgb');

  return (
    <ColorPicker label="Color" defaultValue="#184">
      <Flex direction="column" gap="size-100">
        <Picker
          aria-label="Color space"
          isQuiet
          selectedKey={space}
          onSelectionChange={(s) => setSpace(s as ColorSpace)}
        >
          <Item key="rgb">RGB</Item>
          <Item key="hsl">HSL</Item>
          <Item key="hsb">HSB</Item>
        </Picker>
        {getColorChannels(space).map((channel) => (
          <ColorSlider key={channel} colorSpace={space} channel={channel} />
        ))}
        <ColorSlider channel="alpha" />
      </Flex>
    </ColorPicker>
  );
}
```

```
import type {ColorSpace} from '@adobe/react-spectrum';
import {
  ColorSlider,
  getColorChannels,
  Item,
  Picker
} from '@adobe/react-spectrum';

function Example() {
  let [space, setSpace] = React.useState<ColorSpace>('rgb');

  return (
    <ColorPicker label="Color" defaultValue="#184">
      <Flex direction="column" gap="size-100">
        <Picker
          aria-label="Color space"
          isQuiet
          selectedKey={space}
          onSelectionChange={(s) =>
            setSpace(s as ColorSpace)}
        >
          <Item key="rgb">RGB</Item>
          <Item key="hsl">HSL</Item>
          <Item key="hsb">HSB</Item>
        </Picker>
        {getColorChannels(space).map((channel) => (
          <ColorSlider
            key={channel}
            colorSpace={space}
            channel={channel}
          />
        ))}
        <ColorSlider channel="alpha" />
      </Flex>
    </ColorPicker>
  );
}
```

```
import type {ColorSpace} from '@adobe/react-spectrum';
import {
  ColorSlider,
  getColorChannels,
  Item,
  Picker
} from '@adobe/react-spectrum';

function Example() {
  let [space, setSpace] =
    React.useState<
      ColorSpace
    >('rgb');

  return (
    <ColorPicker
      label="Color"
      defaultValue="#184"
    >
      <Flex
        direction="column"
        gap="size-100"
      >
        <Picker
          aria-label="Color space"
          isQuiet
          selectedKey={space}
          onSelectionChange={(s) =>
            setSpace(
              s as ColorSpace
            )}
        >
          <Item key="rgb">
            RGB
          </Item>
          <Item key="hsl">
            HSL
          </Item>
          <Item key="hsb">
            HSB
          </Item>
        </Picker>
        {getColorChannels(
          space
        ).map(
          (channel) => (
            <ColorSlider
              key={channel}
              colorSpace={space}
              channel={channel}
            />
          )
        )}
        <ColorSlider channel="alpha" />
      </Flex>
    </ColorPicker>
  );
}
```

The rounding of the color swatch can be controlled with the `rounding` prop.

```
<Flex direction="column" gap="size-100">
  <ColorPicker label="None" rounding="none" defaultValue="#A00">
    <ColorEditor />
  </ColorPicker>
  <ColorPicker label="Default" rounding="default" defaultValue="#080">
    <ColorEditor />
  </ColorPicker>
  <ColorPicker label="Full" rounding="full" defaultValue="#00F">
    <ColorEditor />
  </ColorPicker>
</Flex>
```

```
<Flex direction="column" gap="size-100">
  <ColorPicker
    label="None"
    rounding="none"
    defaultValue="#A00"
  >
    <ColorEditor />
  </ColorPicker>
  <ColorPicker
    label="Default"
    rounding="default"
    defaultValue="#080"
  >
    <ColorEditor />
  </ColorPicker>
  <ColorPicker
    label="Full"
    rounding="full"
    defaultValue="#00F"
  >
    <ColorEditor />
  </ColorPicker>
</Flex>
```

```
<Flex
  direction="column"
  gap="size-100"
>
  <ColorPicker
    label="None"
    rounding="none"
    defaultValue="#A00"
  >
    <ColorEditor />
  </ColorPicker>
  <ColorPicker
    label="Default"
    rounding="default"
    defaultValue="#080"
  >
    <ColorEditor />
  </ColorPicker>
  <ColorPicker
    label="Full"
    rounding="full"
    defaultValue="#00F"
  >
    <ColorEditor />
  </ColorPicker>
</Flex>
```

The size of the color swatch can be controlled with the `size` prop. The default size is "S".

```
<Flex direction="column" gap="size-100">
  <ColorPicker label="Extra small" size="XS" defaultValue="#A00">
    <ColorEditor />
  </ColorPicker>
  <ColorPicker label="Small" size="S" defaultValue="#080">
    <ColorEditor />
  </ColorPicker>
  <ColorPicker label="Medium" size="M" defaultValue="#FB0">
    <ColorEditor />
  </ColorPicker>
  <ColorPicker label="Large" size="L" defaultValue="#00F">
    <ColorEditor />
  </ColorPicker>
</Flex>
```

```
<Flex direction="column" gap="size-100">
  <ColorPicker
    label="Extra small"
    size="XS"
    defaultValue="#A00"
  >
    <ColorEditor />
  </ColorPicker>
  <ColorPicker label="Small" size="S" defaultValue="#080">
    <ColorEditor />
  </ColorPicker>
  <ColorPicker
    label="Medium"
    size="M"
    defaultValue="#FB0"
  >
    <ColorEditor />
  </ColorPicker>
  <ColorPicker label="Large" size="L" defaultValue="#00F">
    <ColorEditor />
  </ColorPicker>
</Flex>
```

```
<Flex
  direction="column"
  gap="size-100"
>
  <ColorPicker
    label="Extra small"
    size="XS"
    defaultValue="#A00"
  >
    <ColorEditor />
  </ColorPicker>
  <ColorPicker
    label="Small"
    size="S"
    defaultValue="#080"
  >
    <ColorEditor />
  </ColorPicker>
  <ColorPicker
    label="Medium"
    size="M"
    defaultValue="#FB0"
  >
    <ColorEditor />
  </ColorPicker>
  <ColorPicker
    label="Large"
    size="L"
    defaultValue="#00F"
  >
    <ColorEditor />
  </ColorPicker>
</Flex>
```
