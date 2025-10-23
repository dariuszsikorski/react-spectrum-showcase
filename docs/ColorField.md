---
source: https://react-spectrum.adobe.com/react-spectrum/ColorField.html
date: Thu, 16 Oct 2025 01:10:32 GMT
---

A color field allows users to edit a hex color or individual color channel value.

* * *

```
<ColorField label="Primary Color" />
```

```
<ColorField label="Primary Color" />
```

```
<ColorField label="Primary Color" />
```

* * *

A ColorField's `value` is empty by default, but an initial, uncontrolled, value can be provided using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop. The value provided to either of these props should be a color string or `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object.

In the example below, the `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from a hex value, stored in state.

```
import {parseColor} from 'react-stately';

function Example() {
  let [value, setValue] = React.useState(parseColor('#e73623'));

  return (
    <Flex gap="size-150" wrap>
      <ColorField
        label="Primary Color (Uncontrolled)"
        defaultValue="#e21"
      />

      <ColorField
        label="Primary Color (Controlled)"
        value={value}
        onChange={setValue}
      />
    </Flex>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [value, setValue] = React.useState(
    parseColor('#e73623')
  );

  return (
    <Flex gap="size-150" wrap>
      <ColorField
        label="Primary Color (Uncontrolled)"
        defaultValue="#e21"
      />

      <ColorField
        label="Primary Color (Controlled)"
        value={value}
        onChange={setValue}
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
        '#e73623'
      )
    );

  return (
    <Flex
      gap="size-150"
      wrap
    >
      <ColorField
        label="Primary Color (Uncontrolled)"
        defaultValue="#e21"
      />

      <ColorField
        label="Primary Color (Controlled)"
        value={value}
        onChange={setValue}
      />
    </Flex>
  );
}
```

ColorField supports the `name` prop for integration with HTML forms. The value will be submitted to the server as a hex color string. When a `channel` prop is provided, the value will be submitted as a number instead.

```
<ColorField label="Color" name="color" />
```

```
<ColorField label="Color" name="color" />
```

```
<ColorField
  label="Color"
  name="color"
/>
```

* * *

By default, ColorField allows the user to edit the color as a hex value. When the `colorSpace` and `channel` props are provided, ColorField displays the value for that channel formatted as a number instead. Rendering multiple ColorFields together can allow a user to edit a color.

```
function Example() {
  let [color, setColor] = React.useState(parseColor('#7f007f'));
  return (
    <>
      <div style={{ display: 'flex', gap: 8 }}>
        <ColorField
          label="Hue"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="hue"
        />
        <ColorField
          label="Saturation"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="saturation"
        />
        <ColorField
          label="Lightness"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="lightness"
        />
      </div>
      <p>Current color value: {color?.toString('hex')}</p>
    </>
  );
}
```

```
function Example() {
  let [color, setColor] = React.useState(
    parseColor('#7f007f')
  );
  return (
    <>
      <div style={{ display: 'flex', gap: 8 }}>
        <ColorField
          label="Hue"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="hue"
        />
        <ColorField
          label="Saturation"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="saturation"
        />
        <ColorField
          label="Lightness"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="lightness"
        />
      </div>
      <p>Current color value: {color?.toString('hex')}</p>
    </>
  );
}
```

```
function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        '#7f007f'
      )
    );
  return (
    <>
      <div
        style={{
          display:
            'flex',
          gap: 8
        }}
      >
        <ColorField
          label="Hue"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="hue"
        />
        <ColorField
          label="Saturation"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="saturation"
        />
        <ColorField
          label="Lightness"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="lightness"
        />
      </div>
      <p>
        Current color
        value:{' '}
        {color?.toString(
          'hex'
        )}
      </p>
    </>
  );
}
```

* * *

A visual label should be provided for the ColorField using the `label` prop. If the ColorField is required, the `isRequired` and `necessityIndicator` props can be used to show a required state.

```
<Flex gap="size-150" wrap>
  <ColorField label="Primary Color" />
  <ColorField label="Primary Color" isRequired />
  <ColorField label="Primary Color" isRequired necessityIndicator="label" />
  <ColorField label="Primary Color" necessityIndicator="label" />
</Flex>
```

```
<Flex gap="size-150" wrap>
  <ColorField label="Primary Color" />
  <ColorField label="Primary Color" isRequired />
  <ColorField
    label="Primary Color"
    isRequired
    necessityIndicator="label"
  />
  <ColorField
    label="Primary Color"
    necessityIndicator="label"
  />
</Flex>
```

```
<Flex
  gap="size-150"
  wrap
>
  <ColorField label="Primary Color" />
  <ColorField
    label="Primary Color"
    isRequired
  />
  <ColorField
    label="Primary Color"
    isRequired
    necessityIndicator="label"
  />
  <ColorField
    label="Primary Color"
    necessityIndicator="label"
  />
</Flex>
```

If a visible label isn't specified, an `aria-label` must be provided to the ColorField for accessibility. If the field is labeled by a separate element, an `aria-labelledby` prop must be provided using the `id` of the labeling element instead.

In order to internationalize a ColorField, a localized string should be passed to the `label` or `aria-label` prop. When the `necessityIndicator` prop is set to `"label"`, a localized string will be provided for `"(required)"` or `"(optional)"` automatically.

* * *

ColorField supports the `isRequired` prop to ensure the user enters a value, as well as custom validation functions, realtime validation, and server-side validation. It can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-spectrum/forms.html) guide to learn more.

When the [Form](https://react-spectrum.adobe.com/react-spectrum/Form.html) component has the `validationBehavior="native"` prop, validation errors block form submission and are displayed as help text automatically. Errors are displayed when the user blurs the color field or submits the form.

```
import {Form, ButtonGroup, Button} from '@adobe/react-spectrum';

<Form validationBehavior="native" maxWidth="size-3000">
  <ColorField label="Color" name="color" isRequired />  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
```

```
import {
  Button,
  ButtonGroup,
  Form
} from '@adobe/react-spectrum';

<Form validationBehavior="native" maxWidth="size-3000">
  <ColorField label="Color" name="color" isRequired />  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
```

```
import {
  Button,
  ButtonGroup,
  Form
} from '@adobe/react-spectrum';

<Form
  validationBehavior="native"
  maxWidth="size-3000"
>
  <ColorField
    label="Color"
    name="color"
    isRequired
  />  <ButtonGroup>
    <Button
      type="submit"
      variant="primary"
    >
      Submit
    </Button>
    <Button
      type="reset"
      variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
```

By default, `ColorField` displays default validation messages provided by the browser. See [Customizing error messages](https://react-spectrum.adobe.com/react-spectrum/forms.html#customizing-error-messages) in the Forms guide to learn how to provide your own custom errors.

* * *

Name

Type

Default

Description

`channel`

`[ColorChannel](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:ColorChannel)`

—

The color channel that this field edits. If not provided, the color is edited as a hex value.

`colorSpace`

`[ColorSpace](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:ColorSpace)`

—

The color space that the color field operates in if a `channel` prop is provided. If no `channel` is provided, the color field always displays the color as an RGB hex value.

`isQuiet`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the ColorField should be displayed with a quiet style.

`isWheelDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Enables or disables changing the value with scroll.

`value`

`T`

—

The current value (controlled).

`defaultValue`

`T`

—

The default value (uncontrolled).

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input is disabled.

`isReadOnly`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input can be selected but not changed by the user.

`isRequired`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether user input is required on the input before form submission.

`validationBehavior`

`'aria' | 'native'`

`'aria'`

Whether to use native HTML form validation to prevent form submission when the value is missing or invalid, or mark the field as required or invalid via ARIA.

`validate`

`( (value: [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if `validationBehavior="native"`. For realtime validation, use the `isInvalid` prop instead.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`label`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The content to display as the label.

`description`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

A description for the field. Provides a hint such as specific requirements for what to choose.

`errorMessage`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | ( (v: [ValidationResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationResult) )) => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

An error message for the field.

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`validationState`

`[ValidationState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationState)`

—

Whether the input should display its "valid" or "invalid" visual styling.

`labelPosition`

`[LabelPosition](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/labelable.d.ts:LabelPosition)`

`'top'`

The label's overall position relative to the element it is labeling.

`labelAlign`

`[Alignment](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/labelable.d.ts:Alignment)`

`'start'`

The label's horizontal alignment relative to the element it is labeling.

`necessityIndicator`

`[NecessityIndicator](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/labelable.d.ts:NecessityIndicator)`

`'icon'`

Whether the required state should be shown as an icon or text.

`contextualHelp`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

A ContextualHelp element to place next to the label.

Events

Name

Type

Description

`onChange`

`( (color: [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => void`

Handler that is called when the value changes.

`onFocus`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element receives focus.

`onBlur`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element loses focus.

`onFocusChange`

`( (isFocused: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the element's focus status changes.

`onKeyDown`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is pressed.

`onKeyUp`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is released.

`onCopy`

`ClipboardEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when the user copies text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncopy).

`onCut`

`ClipboardEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when the user cuts text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncut).

`onPaste`

`ClipboardEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when the user pastes text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onpaste).

`onCompositionStart`

`CompositionEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when a text composition system starts a new text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event).

`onCompositionEnd`

`CompositionEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when a text composition system completes or cancels the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event).

`onCompositionUpdate`

`CompositionEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when a new character is received in the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event).

`onSelect`

`ReactEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when text in the input is selected. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event).

`onBeforeInput`

`FormEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when the input value is about to be modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event).

`onInput`

`FormEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when the input value is modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).

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

`excludeFromTabOrder`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to exclude the element from the sequential tab order. If true, the element will not be focusable via the keyboard by tabbing. This should be avoided except in rare scenarios where an alternative means of accessing the element or its functionality via the keyboard is available.

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

`aria-errormessage`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element that provides an error message for the object.

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

```
<ColorField label="Primary Color" isQuiet />
```

```
<ColorField label="Primary Color" isQuiet />
```

```
<ColorField
  label="Primary Color"
  isQuiet
/>
```

```
<ColorField label="Primary Color" isDisabled defaultValue="#e73623" />
```

```
<ColorField
  label="Primary Color"
  isDisabled
  defaultValue="#e73623"
/>
```

```
<ColorField
  label="Primary Color"
  isDisabled
  defaultValue="#e73623"
/>
```

The `isReadOnly` boolean prop makes the ColorField's text content immutable. Unlike `isDisabled`, the ColorField remains focusable and the contents can still be copied. See [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```
<ColorField label="Primary Color" isReadOnly defaultValue="#e73623" />
```

```
<ColorField
  label="Primary Color"
  isReadOnly
  defaultValue="#e73623"
/>
```

```
<ColorField
  label="Primary Color"
  isReadOnly
  defaultValue="#e73623"
/>
```

### Label alignment and position[#](#label-alignment-and-position)

[View guidelines](https://spectrum.adobe.com/page/text-field/#Label-position)

By default, the label is positioned above the ColorField. The `labelPosition` prop can be used to position the label to the side. The `labelAlign` prop can be used to align the label as "start" or "end". For left-to-right (LTR) languages, "start" refers to the left most edge of the ColorField and "end" refers to the right most edge. For right-to-left (RTL) languages, this is flipped.

```
<ColorField label="Primary Color" labelPosition="side" labelAlign="end" />
```

```
<ColorField
  label="Primary Color"
  labelPosition="side"
  labelAlign="end"
/>
```

```
<ColorField
  label="Primary Color"
  labelPosition="side"
  labelAlign="end"
/>
```

[View guidelines](https://spectrum.adobe.com/page/help-text/)

Both a description and an error message can be supplied to a ColorField. The description is always visible unless the `validationState` is “invalid” and an error message is provided. The error message can be used to help the user fix their input quickly and should be specific to the detected error. All strings should be localized.

```
<Flex gap="size-100" wrap>
  <ColorField
    label="Color"
    defaultValue="#abc"
    validationState="valid"
    description="Enter your favorite color."
  />
  <ColorField
    label="Color"
    validationState="invalid"
    errorMessage="Empty input is not allowed."
  />
</Flex>
```

```
<Flex gap="size-100" wrap>
  <ColorField
    label="Color"
    defaultValue="#abc"
    validationState="valid"
    description="Enter your favorite color."
  />
  <ColorField
    label="Color"
    validationState="invalid"
    errorMessage="Empty input is not allowed."
  />
</Flex>
```

```
<Flex
  gap="size-100"
  wrap
>
  <ColorField
    label="Color"
    defaultValue="#abc"
    validationState="valid"
    description="Enter your favorite color."
  />
  <ColorField
    label="Color"
    validationState="invalid"
    errorMessage="Empty input is not allowed."
  />
</Flex>
```

A [ContextualHelp](https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html) element may be placed next to the label to provide additional information or help about a ColorField.

```
import {Content, ContextualHelp, Heading} from '@adobe/react-spectrum';

<ColorField
  label="Accent Color"
  defaultValue="#e73623"
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

<ColorField
  label="Accent Color"
  defaultValue="#e73623"
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

<ColorField
  label="Accent Color"
  defaultValue="#e73623"
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

[View guidelines](https://spectrum.adobe.com/page/text-field/#Width)

```
<ColorField label="Primary Color" width="size-3600" maxWidth="100%" />
```

```
<ColorField
  label="Primary Color"
  width="size-3600"
  maxWidth="100%"
/>
```

```
<ColorField
  label="Primary Color"
  width="size-3600"
  maxWidth="100%"
/>
```
