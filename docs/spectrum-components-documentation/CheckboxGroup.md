---
source: https://react-spectrum.adobe.com/react-spectrum/CheckboxGroup.html
date: Thu, 16 Oct 2025 01:23:59 GMT
---

A CheckboxGroup allows users to select one or more items from a list of choices.

* * *

```
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
```

## Content[#](#content)

* * *

CheckboxGroup accepts multiple [Checkbox](https://react-spectrum.adobe.com/react-spectrum/Checkbox.html) elements as children. Each Checkbox represents an option that can be selected, labeled by its children.

* * *

CheckboxGroup supports selecting zero or more items. An initial, uncontrolled value can be provided to the CheckboxGroup using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop. Both of these props accept an array of selected items, which map to the `value` prop on each item.

```
function Example() {
  let [selected, setSelected] = React.useState(['soccer', 'baseball']);

  return (
    <Flex gap="size-300">
      <CheckboxGroup
        label="Favorite sports (uncontrolled)"
        defaultValue={['soccer', 'baseball']}
      >
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup
        label="Favorite sports (controlled)"
        value={selected}
        onChange={setSelected}
      >
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
    </Flex>
  );
}
```

```
function Example() {
  let [selected, setSelected] = React.useState([
    'soccer',
    'baseball'
  ]);

  return (
    <Flex gap="size-300">
      <CheckboxGroup
        label="Favorite sports (uncontrolled)"
        defaultValue={['soccer', 'baseball']}
      >
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup
        label="Favorite sports (controlled)"
        value={selected}
        onChange={setSelected}
      >
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
    </Flex>
  );
}
```

```
function Example() {
  let [
    selected,
    setSelected
  ] = React.useState([
    'soccer',
    'baseball'
  ]);

  return (
    <Flex gap="size-300">
      <CheckboxGroup
        label="Favorite sports (uncontrolled)"
        defaultValue={[
          'soccer',
          'baseball'
        ]}
      >
        <Checkbox value="soccer">
          Soccer
        </Checkbox>
        <Checkbox value="baseball">
          Baseball
        </Checkbox>
        <Checkbox value="basketball">
          Basketball
        </Checkbox>
      </CheckboxGroup>

      <CheckboxGroup
        label="Favorite sports (controlled)"
        value={selected}
        onChange={setSelected}
      >
        <Checkbox value="soccer">
          Soccer
        </Checkbox>
        <Checkbox value="baseball">
          Baseball
        </Checkbox>
        <Checkbox value="basketball">
          Basketball
        </Checkbox>
      </CheckboxGroup>
    </Flex>
  );
}
```

CheckboxGroup supports the `name` prop, paired with the Checkbox `value` prop, for integration with HTML forms.

```
<CheckboxGroup label="Condiments" name="condiments">
  <Checkbox value="mayo">Mayo</Checkbox>
  <Checkbox value="mustart">Mustard</Checkbox>
  <Checkbox value="ketchup">Ketchup</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup label="Condiments" name="condiments">
  <Checkbox value="mayo">Mayo</Checkbox>
  <Checkbox value="mustart">Mustard</Checkbox>
  <Checkbox value="ketchup">Ketchup</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Condiments"
  name="condiments"
>
  <Checkbox value="mayo">
    Mayo
  </Checkbox>
  <Checkbox value="mustart">
    Mustard
  </Checkbox>
  <Checkbox value="ketchup">
    Ketchup
  </Checkbox>
</CheckboxGroup>
```

* * *

A visual label should be provided for the CheckboxGroup using the `label` prop. If the CheckboxGroup requires an option to be selected by the user, the `isRequired` and `necessityIndicator` props can be used to show a required state.

```
<Flex gap="size-300" wrap>
  <CheckboxGroup label="Favorite sports">
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
  <CheckboxGroup label="Favorite sports" isRequired necessityIndicator="icon">
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
  <CheckboxGroup label="Favorite sports" isRequired necessityIndicator="label">
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
  <CheckboxGroup label="Favorite sports" necessityIndicator="label">
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
</Flex>
```

```
<Flex gap="size-300" wrap>
  <CheckboxGroup label="Favorite sports">
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
  <CheckboxGroup
    label="Favorite sports"
    isRequired
    necessityIndicator="icon"
  >
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
  <CheckboxGroup
    label="Favorite sports"
    isRequired
    necessityIndicator="label"
  >
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
  <CheckboxGroup
    label="Favorite sports"
    necessityIndicator="label"
  >
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
</Flex>
```

```
<Flex
  gap="size-300"
  wrap
>
  <CheckboxGroup label="Favorite sports">
    <Checkbox value="soccer">
      Soccer
    </Checkbox>
    <Checkbox value="baseball">
      Baseball
    </Checkbox>
    <Checkbox value="basketball">
      Basketball
    </Checkbox>
  </CheckboxGroup>
  <CheckboxGroup
    label="Favorite sports"
    isRequired
    necessityIndicator="icon"
  >
    <Checkbox value="soccer">
      Soccer
    </Checkbox>
    <Checkbox value="baseball">
      Baseball
    </Checkbox>
    <Checkbox value="basketball">
      Basketball
    </Checkbox>
  </CheckboxGroup>
  <CheckboxGroup
    label="Favorite sports"
    isRequired
    necessityIndicator="label"
  >
    <Checkbox value="soccer">
      Soccer
    </Checkbox>
    <Checkbox value="baseball">
      Baseball
    </Checkbox>
    <Checkbox value="basketball">
      Basketball
    </Checkbox>
  </CheckboxGroup>
  <CheckboxGroup
    label="Favorite sports"
    necessityIndicator="label"
  >
    <Checkbox value="soccer">
      Soccer
    </Checkbox>
    <Checkbox value="baseball">
      Baseball
    </Checkbox>
    <Checkbox value="basketball">
      Basketball
    </Checkbox>
  </CheckboxGroup>
</Flex>
```

If a visible label isn't specified for a CheckboxGroup, an `aria-label` must be provided for accessibility. If the field is labeled by a separate element, an `aria-labelledby` prop must be provided using the id of the labeling element instead.

Checkbox elements within a group should always have a visible label.

To internationalize a CheckboxGroup, a localized string should be passed to the `label` prop and as the child content of the Checkbox elements. For languages that are read right-to-left (e.g. Hebrew and Arabic), the Checkbox is automatically placed on the right side of the text. When the necessityIndicator prop is set to "label", a localized string will be provided for "(required)" or "(optional)" automatically.

* * *

CheckboxGroup accepts an `onChange` prop, which is triggered when a user adds or removes an item from the selection. The example below uses `onChange` to log how the user is interacting with the component.

```
function Example() {
  let [selected, setSelected] = React.useState([]);

  return (
    <>
      <CheckboxGroup
        label="Favorite sports"
        value={selected}
        onChange={setSelected}
      >
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
      <div>You have selected: {selected.join(', ')}</div>
    </>
  );
}
```

```
function Example() {
  let [selected, setSelected] = React.useState([]);

  return (
    <>
      <CheckboxGroup
        label="Favorite sports"
        value={selected}
        onChange={setSelected}
      >
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
      <div>You have selected: {selected.join(', ')}</div>
    </>
  );
}
```

```
function Example() {
  let [
    selected,
    setSelected
  ] = React.useState([]);

  return (
    <>
      <CheckboxGroup
        label="Favorite sports"
        value={selected}
        onChange={setSelected}
      >
        <Checkbox value="soccer">
          Soccer
        </Checkbox>
        <Checkbox value="baseball">
          Baseball
        </Checkbox>
        <Checkbox value="basketball">
          Basketball
        </Checkbox>
      </CheckboxGroup>
      <div>
        You have
        selected:{' '}
        {selected.join(
          ', '
        )}
      </div>
    </>
  );
}
```

* * *

CheckboxGroup supports the `isRequired` prop to ensure the user selects at least one item, as well as custom client and server-side validation. Individual checkboxes also support validation, and errors from all checkboxes are aggregated at the group level. CheckboxGroup can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-spectrum/forms.html) guide to learn more.

The `isRequired` prop at the `CheckboxGroup` level requires that at least one item is selected. When the [Form](https://react-spectrum.adobe.com/react-spectrum/Form.html) component has the `validationBehavior="native"` prop, validation errors block form submission and are displayed as help text automatically.

```
import {Form, ButtonGroup, Button} from '@adobe/react-spectrum';

<Form validationBehavior="native">
  <CheckboxGroup label="Sandwich condiments" name="condiments" isRequired>    <Checkbox value="lettuce">Lettuce</Checkbox>
    <Checkbox value="tomato">Tomato</Checkbox>
    <Checkbox value="onion">Onion</Checkbox>
    <Checkbox value="sprouts">Sprouts</Checkbox>
  </CheckboxGroup>
  <ButtonGroup>
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

<Form validationBehavior="native">
  <CheckboxGroup
    label="Sandwich condiments"
    name="condiments"
    isRequired
  >    <Checkbox value="lettuce">Lettuce</Checkbox>
    <Checkbox value="tomato">Tomato</Checkbox>
    <Checkbox value="onion">Onion</Checkbox>
    <Checkbox value="sprouts">Sprouts</Checkbox>
  </CheckboxGroup>
  <ButtonGroup>
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

<Form validationBehavior="native">
  <CheckboxGroup
    label="Sandwich condiments"
    name="condiments"
    isRequired
  >    <Checkbox value="lettuce">
      Lettuce
    </Checkbox>
    <Checkbox value="tomato">
      Tomato
    </Checkbox>
    <Checkbox value="onion">
      Onion
    </Checkbox>
    <Checkbox value="sprouts">
      Sprouts
    </Checkbox>
  </CheckboxGroup>
  <ButtonGroup>
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

By default, `CheckboxGroup` displays default validation messages provided by the browser. See [Customizing error messages](https://react-spectrum.adobe.com/react-spectrum/forms.html#customizing-error-messages) in the Forms guide to learn how to provide your own custom errors.

To require that specific checkboxes are checked, set the `isRequired` prop at the `Checkbox` level instead of the `CheckboxGroup`. The following example shows how to require that all items are selected.

```
<Form validationBehavior="native">
  <CheckboxGroup label="Agree to the following" isRequired>
    <Checkbox value="terms" isRequired>Terms and conditions</Checkbox>
    <Checkbox value="privacy" isRequired>Privacy policy</Checkbox>
    <Checkbox value="cookies" isRequired>Cookie policy</Checkbox>  </CheckboxGroup>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
```

```
<Form validationBehavior="native">
  <CheckboxGroup
    label="Agree to the following"
    isRequired
  >
    <Checkbox value="terms" isRequired>
      Terms and conditions
    </Checkbox>
    <Checkbox value="privacy" isRequired>
      Privacy policy
    </Checkbox>
    <Checkbox value="cookies" isRequired>
      Cookie policy
    </Checkbox>  </CheckboxGroup>
  <ButtonGroup>
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
<Form validationBehavior="native">
  <CheckboxGroup
    label="Agree to the following"
    isRequired
  >
    <Checkbox
      value="terms"
      isRequired
    >
      Terms and
      conditions
    </Checkbox>
    <Checkbox
      value="privacy"
      isRequired
    >
      Privacy policy
    </Checkbox>
    <Checkbox
      value="cookies"
      isRequired
    >
      Cookie policy
    </Checkbox>  </CheckboxGroup>
  <ButtonGroup>
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

* * *

Name

Type

Default

Description

`children`

`[ReactElement](https://reactjs.org/docs/rendering-elements.html)<[CheckboxProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/checkbox/src/index.d.ts:CheckboxProps)> | [ReactElement](https://reactjs.org/docs/rendering-elements.html)<[CheckboxProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/checkbox/src/index.d.ts:CheckboxProps)>[]`

—

The Checkboxes contained within the CheckboxGroup.

`orientation`

`[Orientation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/orientation.d.ts:Orientation)`

`'vertical'`

The axis the checkboxes should align with.

`isEmphasized`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

By default, checkboxes are not emphasized (gray). The emphasized (blue) version provides visual prominence.

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

—

The current value (controlled).

`defaultValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

—

The default value (uncontrolled).

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input is disabled.

`isReadOnly`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input can be selected but not changed by the user.

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

`isRequired`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether user input is required on the input before form submission.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input value is invalid.

`validationBehavior`

`'aria' | 'native'`

`'aria'`

Whether to use native HTML form validation to prevent form submission when the value is missing or invalid, or mark the field as required or invalid via ARIA.

`validate`

`( (value: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[] )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if `validationBehavior="native"`. For realtime validation, use the `isInvalid` prop instead.

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

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

`showErrorIcon`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether an error icon is rendered.

Events

Name

Type

Description

`onChange`

`( (value: T )) => void`

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

CheckboxGroups are vertically oriented by default. The `orientation` prop can be used to change the orientation to horizontal.

```
<CheckboxGroup label="Favorite sports" orientation="horizontal">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  orientation="horizontal"
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  orientation="horizontal"
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
```

### Label position and alignment[#](#label-position-and-alignment)

By default, the label is positioned above the CheckboxGroup. The `labelPosition` prop can be used to position the label to the side. The `labelAlign` prop can be used to align the label as "start" or "end". For left-to-right (LTR) languages, "start" refers to the left most edge of the CheckboxGroup and "end" refers to the right most edge. For right-to-left (RTL) languages, this is flipped.

```
<CheckboxGroup label="Favorite sports" labelPosition="side" labelAlign="end">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  labelPosition="side"
  labelAlign="end"
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  labelPosition="side"
  labelAlign="end"
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
```

[View guidelines](https://spectrum.adobe.com/page/checkbox-group/#Help-text-\(description-and-error-message\))

Both a description and an error message can be supplied to a CheckboxGroup. The description is always visible unless the `isInvalid` is true and an error message is provided. The error message can be used to help the user fix their input quickly and should be specific to the detected error. All strings should be localized.

```
function Example() {
  let [checked, setChecked] = React.useState(['dogs', 'dragons']);
  let isValid = checked.length === 2 && checked.includes('dogs') &&
    checked.includes('dragons');

  return (
    <CheckboxGroup
      label="Pets"
      onChange={setChecked}
      value={checked}
      isInvalid={!isValid}
      description="Select your pets."
      errorMessage={checked.includes('cats')
        ? 'No cats allowed.'
        : 'Select only dogs and dragons.'}
    >
      <Checkbox value="dogs">Dogs</Checkbox>
      <Checkbox value="cats">Cats</Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
    </CheckboxGroup>
  );
}
```

```
function Example() {
  let [checked, setChecked] = React.useState([
    'dogs',
    'dragons'
  ]);
  let isValid = checked.length === 2 &&
    checked.includes('dogs') && checked.includes('dragons');

  return (
    <CheckboxGroup
      label="Pets"
      onChange={setChecked}
      value={checked}
      isInvalid={!isValid}
      description="Select your pets."
      errorMessage={checked.includes('cats')
        ? 'No cats allowed.'
        : 'Select only dogs and dragons.'}
    >
      <Checkbox value="dogs">Dogs</Checkbox>
      <Checkbox value="cats">Cats</Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
    </CheckboxGroup>
  );
}
```

```
function Example() {
  let [
    checked,
    setChecked
  ] = React.useState([
    'dogs',
    'dragons'
  ]);
  let isValid =
    checked.length ===
      2 &&
    checked.includes(
      'dogs'
    ) &&
    checked.includes(
      'dragons'
    );

  return (
    <CheckboxGroup
      label="Pets"
      onChange={setChecked}
      value={checked}
      isInvalid={!isValid}
      description="Select your pets."
      errorMessage={checked
          .includes(
            'cats'
          )
        ? 'No cats allowed.'
        : 'Select only dogs and dragons.'}
    >
      <Checkbox value="dogs">
        Dogs
      </Checkbox>
      <Checkbox value="cats">
        Cats
      </Checkbox>
      <Checkbox value="dragons">
        Dragons
      </Checkbox>
    </CheckboxGroup>
  );
}
```

A [ContextualHelp](https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html) element may be placed next to the label to provide additional information or help about a CheckboxGroup.

```
import {Content, ContextualHelp, Heading} from '@adobe/react-spectrum';

<CheckboxGroup
  label="Favorite genres"
  contextualHelp={
    <ContextualHelp>
      <Heading>What does this do?</Heading>
      <Content>
        Your musical taste is used to train our machine learning
        recommendation algorithm.
      </Content>
    </ContextualHelp>
  }
>
  <Checkbox value="rock">Rock</Checkbox>
  <Checkbox value="pop">Pop</Checkbox>
  <Checkbox value="classical">Classical</Checkbox>
</CheckboxGroup>
```

```
import {
  Content,
  ContextualHelp,
  Heading
} from '@adobe/react-spectrum';

<CheckboxGroup
  label="Favorite genres"
  contextualHelp={
    <ContextualHelp>
      <Heading>What does this do?</Heading>
      <Content>
        Your musical taste is used to train our machine
        learning recommendation algorithm.
      </Content>
    </ContextualHelp>
  }
>
  <Checkbox value="rock">Rock</Checkbox>
  <Checkbox value="pop">Pop</Checkbox>
  <Checkbox value="classical">Classical</Checkbox>
</CheckboxGroup>
```

```
import {
  Content,
  ContextualHelp,
  Heading
} from '@adobe/react-spectrum';

<CheckboxGroup
  label="Favorite genres"
  contextualHelp={
    <ContextualHelp>
      <Heading>
        What does this
        do?
      </Heading>
      <Content>
        Your musical
        taste is used
        to train our
        machine
        learning
        recommendation
        algorithm.
      </Content>
    </ContextualHelp>
  }
>
  <Checkbox value="rock">
    Rock
  </Checkbox>
  <Checkbox value="pop">
    Pop
  </Checkbox>
  <Checkbox value="classical">
    Classical
  </Checkbox>
</CheckboxGroup>
```

[View guidelines](https://spectrum.adobe.com/page/checkbox/#Disabled)

```
<CheckboxGroup label="Favorite sports" isDisabled>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup label="Favorite sports" isDisabled>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  isDisabled
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball" isDisabled>Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball" isDisabled>Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox
    value="baseball"
    isDisabled
  >
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
```

[View guidelines](https://spectrum.adobe.com/page/checkbox/#Read-only)

The `isReadOnly` prop makes the selection immutable. Unlike `isDisabled`, the CheckboxGroup remains focusable. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```
<CheckboxGroup label="Favorite sports" defaultValue={['baseball']} isReadOnly>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  defaultValue={['baseball']}
  isReadOnly
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  defaultValue={[
    'baseball'
  ]}
  isReadOnly
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
```

[View guidelines](https://spectrum.adobe.com/page/checkbox/#Emphasis)

```
<CheckboxGroup
  label="Favorite sports"
  defaultValue={['soccer', 'baseball']}
  isEmphasized
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  defaultValue={['soccer', 'baseball']}
  isEmphasized
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  defaultValue={[
    'soccer',
    'baseball'
  ]}
  isEmphasized
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
```
