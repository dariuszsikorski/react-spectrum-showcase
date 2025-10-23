---
source: https://react-spectrum.adobe.com/react-spectrum/ColorArea.html
date: Thu, 16 Oct 2025 01:10:23 GMT
---

ColorArea allows users to adjust two channels of an RGB, HSL or HSB color value against a two-dimensional gradient background.

* * *

```
<ColorArea defaultValue="#7f0000" />
```

```
<ColorArea defaultValue="#7f0000" />
```

```
<ColorArea defaultValue="#7f0000" />
```

* * *

A ColorArea requires either an uncontrolled default value or a controlled value, provided using the `defaultValue` or `value` props respectively. The value provided to either of these props should be a color string or `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object. `xChannel` and `yChannel` props may also be provided to specify which color channels the color area should display, and the direction of each channel in the color gradient. This must be one of the channels included in the color value, for example, for RGB colors, the "red", "green", and "blue" channels are available. For a full list of supported channels, see the [Props](#props) table below.

In the example below, the `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from a HSL string so that `value`'s type remains consistent.

```
import {parseColor} from 'react-stately';
import {ColorArea, Flex, Label} from '@adobe/react-spectrum';

function Example() {
  let [value, setValue] = React.useState(parseColor('hsl(0, 100%, 50%)'));
  return (
    <Flex gap="size-300" wrap>
      <div>
        <Label id="hsl-uncontrolled-id">
          x: Saturation, y: Lightness (uncontrolled)
        </Label>
        <ColorArea
          aria-labelledby="hsl-uncontrolled-id"
          defaultValue={value}
          xChannel="saturation"
          yChannel="lightness"
        />
      </div>
      <div>
        <Label id="hsl-controlled-id">
          x: Saturation, y: Lightness (controlled)
        </Label>
        <ColorArea
          aria-labelledby="hsl-controlled-id"
          value={value}
          onChange={setValue}
          xChannel="saturation"
          yChannel="lightness"
        />
      </div>
    </Flex>
  );
}
```

```
import {parseColor} from 'react-stately';
import {
  ColorArea,
  Flex,
  Label
} from '@adobe/react-spectrum';

function Example() {
  let [value, setValue] = React.useState(
    parseColor('hsl(0, 100%, 50%)')
  );
  return (
    <Flex gap="size-300" wrap>
      <div>
        <Label id="hsl-uncontrolled-id">
          x: Saturation, y: Lightness (uncontrolled)
        </Label>
        <ColorArea
          aria-labelledby="hsl-uncontrolled-id"
          defaultValue={value}
          xChannel="saturation"
          yChannel="lightness"
        />
      </div>
      <div>
        <Label id="hsl-controlled-id">
          x: Saturation, y: Lightness (controlled)
        </Label>
        <ColorArea
          aria-labelledby="hsl-controlled-id"
          value={value}
          onChange={setValue}
          xChannel="saturation"
          yChannel="lightness"
        />
      </div>
    </Flex>
  );
}
```

```
import {parseColor} from 'react-stately';
import {
  ColorArea,
  Flex,
  Label
} from '@adobe/react-spectrum';

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
      <div>
        <Label id="hsl-uncontrolled-id">
          x: Saturation,
          y: Lightness
          (uncontrolled)
        </Label>
        <ColorArea
          aria-labelledby="hsl-uncontrolled-id"
          defaultValue={value}
          xChannel="saturation"
          yChannel="lightness"
        />
      </div>
      <div>
        <Label id="hsl-controlled-id">
          x: Saturation,
          y: Lightness
          (controlled)
        </Label>
        <ColorArea
          aria-labelledby="hsl-controlled-id"
          value={value}
          onChange={setValue}
          xChannel="saturation"
          yChannel="lightness"
        />
      </div>
    </Flex>
  );
}
```

ColorArea supports the `xName` and `yName` props for integration with HTML forms. The values will be submitted as numbers between the minimum and maximum value for the corresponding channel in the X and Y direction.

```
<ColorArea xName="red" yName="green" />
```

```
<ColorArea xName="red" yName="green" />
```

```
<ColorArea
  xName="red"
  yName="green"
/>
```

* * *

By default, ColorArea uses an `aria-label` for the localized string "Color Picker", which labels the visually hidden `<input>` elements for the two color channels, or on mobile devices, the group containing them. If you wish to override this with a more specific label, an `aria-label` or `aria-labelledby` prop may be passed to further identify the element to assistive technologies. For example, for a ColorArea that adjusts a background color you might pass the `aria-label` prop, "Background color", which ColorArea will return as the `aria-label` prop "Background color, Color picker". If you provide your own `aria-label` or `aria-labelledby`, be sure to localize the string or labeling element appropriately.

Note that like [ColorWheel](https://react-spectrum.adobe.com/react-spectrum/ColorWheel.html), ColorArea does not include an integrated visible label or a `label` prop. Use `aria-labelledby` to label the ColorArea using the IDREF assigned to a visible label.

```
import {ColorArea, Flex, Label} from '@adobe/react-spectrum';

<Flex gap="size-300" wrap alignItems="end">
  <ColorArea
    aria-label="Background color"
    defaultValue="hsl(0, 100%, 50%)"
    xChannel="saturation"
    yChannel="lightness"
  />
  <div>
    <Label id="hsl-aria-labelledby-id">Background color</Label>
    <ColorArea
      aria-labelledby="hsl-aria-labelledby-id"
      defaultValue="hsl(0, 100%, 50%)"
      xChannel="saturation"
      yChannel="lightness"
    />
  </div>
</Flex>
```

```
import {
  ColorArea,
  Flex,
  Label
} from '@adobe/react-spectrum';

<Flex gap="size-300" wrap alignItems="end">
  <ColorArea
    aria-label="Background color"
    defaultValue="hsl(0, 100%, 50%)"
    xChannel="saturation"
    yChannel="lightness"
  />
  <div>
    <Label id="hsl-aria-labelledby-id">
      Background color
    </Label>
    <ColorArea
      aria-labelledby="hsl-aria-labelledby-id"
      defaultValue="hsl(0, 100%, 50%)"
      xChannel="saturation"
      yChannel="lightness"
    />
  </div>
</Flex>
```

```
import {
  ColorArea,
  Flex,
  Label
} from '@adobe/react-spectrum';

<Flex
  gap="size-300"
  wrap
  alignItems="end"
>
  <ColorArea
    aria-label="Background color"
    defaultValue="hsl(0, 100%, 50%)"
    xChannel="saturation"
    yChannel="lightness"
  />
  <div>
    <Label id="hsl-aria-labelledby-id">
      Background color
    </Label>
    <ColorArea
      aria-labelledby="hsl-aria-labelledby-id"
      defaultValue="hsl(0, 100%, 50%)"
      xChannel="saturation"
      yChannel="lightness"
    />
  </div>
</Flex>
```

In order to communicate to a screen reader user that the ColorArea adjusts in two dimensions, ColorArea provides an `aria-roledescription`, using the localized string "2D Slider", on each of the visually hidden `<input>` elements.

The `aria-valuetext` of each `<input>` element within the ColorArea is formatted according to the user's locale automatically. It will include the localized color channel name and current value for each channel, with the channel name and value that the `<input>` element controls coming before the channel name and value for the adjacent `<input>` element. For example, for an RGB ColorArea where the `xChannel` is "blue", the `yChannel` is "green", when the current selected color is yellow (`rgb(255, 255, 0)`), the `<input>` representing the blue channel will have `aria-valuetext` to announce as "Blue: 0, Green: 255", and the `<input>` representing the green channel will have `aria-valuetext` to announce as "Green: 255, Blue: 0".

For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of the ColorArea is automatically flipped. As mentioned previously, ColorArea automatically uses the current locale to format the `aria-valuetext` for each of the `<input>` element with the channel name and current value.

* * *

ColorArea supports two events: `onChange` and `onChangeEnd`. `onChange` is triggered whenever the ColorArea's handle is dragged, and `onChangeEnd` is triggered when the user stops dragging the handle. Both events receive a `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object as a parameter.

The example below uses `onChange` and `onChangeEnd` to update two separate elements with the ColorArea's value.

```
import {parseColor} from 'react-stately';
import {ColorArea} from '@adobe/react-spectrum';

function Example() {
  let [currentValue, setCurrentValue] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );
  let [finalValue, setFinalValue] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );

  return (
    <div>
      <ColorArea
        value={currentValue}
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
import {parseColor} from 'react-stately';
import {ColorArea} from '@adobe/react-spectrum';

function Example() {
  let [currentValue, setCurrentValue] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );
  let [finalValue, setFinalValue] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );

  return (
    <div>
      <ColorArea
        value={currentValue}
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
import {parseColor} from 'react-stately';
import {ColorArea} from '@adobe/react-spectrum';

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
      <ColorArea
        value={currentValue}
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

To build a fully functional color picker, combine a ColorArea, which adjusts two channels of a color value stored in state, with a separate control, like a [ColorSlider](https://react-spectrum.adobe.com/react-spectrum/ColorSlider.html) or [ColorWheel](https://react-spectrum.adobe.com/react-spectrum/ColorWheel.html), for adjusting the value of the third channel within the color space for the color value stored in state. The current color space for a color can be returned using the `color.getColorSpace` method. An array of channel names for a color can be returned using the `color.getColorChannels` method. To get a localized channel name to use as a label, you can use the `color.getChannelName` method.

This example shows how you could build an RGB color picker using a color area and color sliders bound to the same color value in state. The `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from a hex value, stored in state. The `value` and `onChange` props of both the ColorArea and ColorSlider are used to make the components controlled, so that they both update when the color is modified.

```
import {parseColor} from 'react-stately';
import {ColorArea, ColorSlider, Flex, Label} from '@adobe/react-spectrum';

function Example() {
  let [color, setColor] = React.useState(parseColor('#ff00ff'));
  let [redChannel, greenChannel, blueChannel] = color.getColorChannels();
  return (
    <fieldset style={{ border: 0 }}>
      <legend>{color.getColorSpace().toUpperCase()}A Example</legend>
      <Flex direction="column">
        <ColorArea
          xChannel={redChannel}
          yChannel={greenChannel}
          value={color}
          onChange={setColor}
        />
        <ColorSlider channel={blueChannel} value={color} onChange={setColor} />
        <ColorSlider channel="alpha" value={color} onChange={setColor} />
        <p>Current value: {color.toString('css')}</p>
      </Flex>
    </fieldset>
  );
}
```

```
import {parseColor} from 'react-stately';
import {
  ColorArea,
  ColorSlider,
  Flex,
  Label
} from '@adobe/react-spectrum';

function Example() {
  let [color, setColor] = React.useState(
    parseColor('#ff00ff')
  );
  let [redChannel, greenChannel, blueChannel] = color
    .getColorChannels();
  return (
    <fieldset style={{ border: 0 }}>
      <legend>
        {color.getColorSpace().toUpperCase()}A Example
      </legend>
      <Flex direction="column">
        <ColorArea
          xChannel={redChannel}
          yChannel={greenChannel}
          value={color}
          onChange={setColor}
        />
        <ColorSlider
          channel={blueChannel}
          value={color}
          onChange={setColor}
        />
        <ColorSlider
          channel="alpha"
          value={color}
          onChange={setColor}
        />
        <p>Current value: {color.toString('css')}</p>
      </Flex>
    </fieldset>
  );
}
```

```
import {parseColor} from 'react-stately';
import {
  ColorArea,
  ColorSlider,
  Flex,
  Label
} from '@adobe/react-spectrum';

function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        '#ff00ff'
      )
    );
  let [
    redChannel,
    greenChannel,
    blueChannel
  ] = color
    .getColorChannels();
  return (
    <fieldset
      style={{
        border: 0
      }}
    >
      <legend>
        {color
          .getColorSpace()
          .toUpperCase()}A
        Example
      </legend>
      <Flex direction="column">
        <ColorArea
          xChannel={redChannel}
          yChannel={greenChannel}
          value={color}
          onChange={setColor}
        />
        <ColorSlider
          channel={blueChannel}
          value={color}
          onChange={setColor}
        />
        <ColorSlider
          channel="alpha"
          value={color}
          onChange={setColor}
        />
        <p>
          Current value:
          {' '}
          {color
            .toString(
              'css'
            )}
        </p>
      </Flex>
    </fieldset>
  );
}
```

This example shows how to build a similar color picker to the one above, using HSLA colors instead, and a ColorWheel instead of a ColorSlider for the Hue channel.

```
import {parseColor} from 'react-stately';
import {ColorArea, ColorSlider, ColorWheel, Flex, Grid, Label, View} from '@adobe/react-spectrum';

function Example() {
  let [color, setColor] = React.useState(parseColor('hsla(0, 100%, 50%, 0.5)'));
  let [, saturationChannel, lightnessChannel] = color.getColorChannels();
  return (
    <fieldset style={{ border: 0 }}>
      <legend>HSLA Example</legend>
      <Flex direction="column">
        <View
          position="relative"
          width="size-2400"
        >
          <Grid
            position="absolute"
            justifyContent="center"
            alignContent="center"
            width="100%"
            height="100%"
          >
            <ColorArea
              xChannel={saturationChannel}
              yChannel={lightnessChannel}
              value={color}
              onChange={setColor}
              size="size-1200"
            />
          </Grid>
          <ColorWheel
            value={color}
            onChange={setColor}
            size="size-2400"
          />
        </View>
        <ColorSlider channel="alpha" value={color} onChange={setColor} />
        <p>Current value: {color.toString('hsla')}</p>
      </Flex>
    </fieldset>
  );
}
```

```
import {parseColor} from 'react-stately';
import {
  ColorArea,
  ColorSlider,
  ColorWheel,
  Flex,
  Grid,
  Label,
  View
} from '@adobe/react-spectrum';

function Example() {
  let [color, setColor] = React.useState(
    parseColor('hsla(0, 100%, 50%, 0.5)')
  );
  let [, saturationChannel, lightnessChannel] = color
    .getColorChannels();
  return (
    <fieldset style={{ border: 0 }}>
      <legend>HSLA Example</legend>
      <Flex direction="column">
        <View
          position="relative"
          width="size-2400"
        >
          <Grid
            position="absolute"
            justifyContent="center"
            alignContent="center"
            width="100%"
            height="100%"
          >
            <ColorArea
              xChannel={saturationChannel}
              yChannel={lightnessChannel}
              value={color}
              onChange={setColor}
              size="size-1200"
            />
          </Grid>
          <ColorWheel
            value={color}
            onChange={setColor}
            size="size-2400"
          />
        </View>
        <ColorSlider
          channel="alpha"
          value={color}
          onChange={setColor}
        />
        <p>Current value: {color.toString('hsla')}</p>
      </Flex>
    </fieldset>
  );
}
```

```
import {parseColor} from 'react-stately';
import {
  ColorArea,
  ColorSlider,
  ColorWheel,
  Flex,
  Grid,
  Label,
  View
} from '@adobe/react-spectrum';

function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        'hsla(0, 100%, 50%, 0.5)'
      )
    );
  let [
    ,
    saturationChannel,
    lightnessChannel
  ] = color
    .getColorChannels();
  return (
    <fieldset
      style={{
        border: 0
      }}
    >
      <legend>
        HSLA Example
      </legend>
      <Flex direction="column">
        <View
          position="relative"
          width="size-2400"
        >
          <Grid
            position="absolute"
            justifyContent="center"
            alignContent="center"
            width="100%"
            height="100%"
          >
            <ColorArea
              xChannel={saturationChannel}
              yChannel={lightnessChannel}
              value={color}
              onChange={setColor}
              size="size-1200"
            />
          </Grid>
          <ColorWheel
            value={color}
            onChange={setColor}
            size="size-2400"
          />
        </View>
        <ColorSlider
          channel="alpha"
          value={color}
          onChange={setColor}
        />
        <p>
          Current value:
          {' '}
          {color
            .toString(
              'hsla'
            )}
        </p>
      </Flex>
    </fieldset>
  );
}
```

This example shows how to build an HSBA color picker.

```
import {parseColor} from 'react-stately';
import {ColorArea, ColorSlider, ColorWheel, Flex, Grid, Label, View} from '@adobe/react-spectrum';

function Example() {
  let [color, setColor] = React.useState(parseColor('hsba(0, 100%, 50%, 0.5)'));
  let [, saturationChannel, brightnessChannel] = color.getColorChannels();
  return (
    <fieldset style={{ border: 0 }}>
      <legend>HSBA Example</legend>
      <Flex direction="column">
        <View
          position="relative"
          width="size-2400"
        >
          <Grid
            position="absolute"
            justifyContent="center"
            alignContent="center"
            width="100%"
            height="100%"
          >
            <ColorArea
              xChannel={saturationChannel}
              yChannel={brightnessChannel}
              value={color}
              onChange={setColor}
              size="size-1200"
            />
          </Grid>
          <ColorWheel
            value={color}
            onChange={setColor}
            size="size-2400"
          />
        </View>
        <ColorSlider channel="alpha" value={color} onChange={setColor} />
        <p>Current value: {color.toString('hsba')}</p>
      </Flex>
    </fieldset>
  );
}
```

```
import {parseColor} from 'react-stately';
import {
  ColorArea,
  ColorSlider,
  ColorWheel,
  Flex,
  Grid,
  Label,
  View
} from '@adobe/react-spectrum';

function Example() {
  let [color, setColor] = React.useState(
    parseColor('hsba(0, 100%, 50%, 0.5)')
  );
  let [, saturationChannel, brightnessChannel] = color
    .getColorChannels();
  return (
    <fieldset style={{ border: 0 }}>
      <legend>HSBA Example</legend>
      <Flex direction="column">
        <View
          position="relative"
          width="size-2400"
        >
          <Grid
            position="absolute"
            justifyContent="center"
            alignContent="center"
            width="100%"
            height="100%"
          >
            <ColorArea
              xChannel={saturationChannel}
              yChannel={brightnessChannel}
              value={color}
              onChange={setColor}
              size="size-1200"
            />
          </Grid>
          <ColorWheel
            value={color}
            onChange={setColor}
            size="size-2400"
          />
        </View>
        <ColorSlider
          channel="alpha"
          value={color}
          onChange={setColor}
        />
        <p>Current value: {color.toString('hsba')}</p>
      </Flex>
    </fieldset>
  );
}
```

```
import {parseColor} from 'react-stately';
import {
  ColorArea,
  ColorSlider,
  ColorWheel,
  Flex,
  Grid,
  Label,
  View
} from '@adobe/react-spectrum';

function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        'hsba(0, 100%, 50%, 0.5)'
      )
    );
  let [
    ,
    saturationChannel,
    brightnessChannel
  ] = color
    .getColorChannels();
  return (
    <fieldset
      style={{
        border: 0
      }}
    >
      <legend>
        HSBA Example
      </legend>
      <Flex direction="column">
        <View
          position="relative"
          width="size-2400"
        >
          <Grid
            position="absolute"
            justifyContent="center"
            alignContent="center"
            width="100%"
            height="100%"
          >
            <ColorArea
              xChannel={saturationChannel}
              yChannel={brightnessChannel}
              value={color}
              onChange={setColor}
              size="size-1200"
            />
          </Grid>
          <ColorWheel
            value={color}
            onChange={setColor}
            size="size-2400"
          />
        </View>
        <ColorSlider
          channel="alpha"
          value={color}
          onChange={setColor}
        />
        <p>
          Current value:
          {' '}
          {color
            .toString(
              'hsba'
            )}
        </p>
      </Flex>
    </fieldset>
  );
}
```

* * *

Name

Type

Description

`size`

`[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)`

Size of the Color Area.

`xName`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The name of the x channel input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`yName`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The name of the y channel input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The `<form>` element to associate the ColorArea with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`colorSpace`

`[ColorSpace](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:ColorSpace)`

The color space that the color area operates in. The `xChannel` and `yChannel` must be in this color space. If not provided, this defaults to the color space of the `color` or `defaultColor` value.

`xChannel`

`[ColorChannel](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:ColorChannel)`

Color channel for the horizontal axis.

`yChannel`

`[ColorChannel](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:ColorChannel)`

Color channel for the vertical axis.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the ColorArea is disabled.

`value`

`T`

The current value (controlled).

`defaultValue`

`T`

The default value (uncontrolled).

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

`minWidth`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The minimum width of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width).

`maxWidth`

`[Responsive](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/style.d.ts:Responsive)<[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)>`

The maximum width of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width).

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

[View guidelines](https://spectrum.adobe.com/page/color-area/#Disabled)

```
import {ColorArea} from '@adobe/react-spectrum';

<ColorArea defaultValue="#7f0000" isDisabled />
```

```
import {ColorArea} from '@adobe/react-spectrum';

<ColorArea defaultValue="#7f0000" isDisabled />
```

```
import {ColorArea} from '@adobe/react-spectrum';

<ColorArea
  defaultValue="#7f0000"
  isDisabled
/>
```

[View guidelines](https://spectrum.adobe.com/page/color-area/#Width)

```
import {ColorArea, Flex} from '@adobe/react-spectrum';

<Flex direction="column" gap="size-300">
  <ColorArea defaultValue="#7f0000" size="size-3600" maxWidth="100%" />
</Flex>
```

```
import {ColorArea, Flex} from '@adobe/react-spectrum';

<Flex direction="column" gap="size-300">
  <ColorArea
    defaultValue="#7f0000"
    size="size-3600"
    maxWidth="100%"
  />
</Flex>
```

```
import {
  ColorArea,
  Flex
} from '@adobe/react-spectrum';

<Flex
  direction="column"
  gap="size-300"
>
  <ColorArea
    defaultValue="#7f0000"
    size="size-3600"
    maxWidth="100%"
  />
</Flex>
```

* * *

The ColorArea features a draggable handle that the user can interact with to change its color value. Please see the following section in the testing docs for more information on how to simulate this action in your test suite.

[Simulating move event](https://react-spectrum.adobe.com/react-spectrum/testing.html#simulating-move-event)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/color/test/ColorArea.test.tsx) if you find that the above isn't sufficient when resolving issues in your own test cases.
