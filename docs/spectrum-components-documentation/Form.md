---
source: https://react-spectrum.adobe.com/react-spectrum/Form.html
date: Thu, 16 Oct 2025 01:24:16 GMT
---

Forms allow users to enter data that can be submitted while providing alignment and styling for form fields.

* * *

```
<Form maxWidth="size-3600">
  <TextField label="Email" />
  <TextField label="Password" />
  <Checkbox>Remember me</Checkbox>
</Form>
```

```
<Form maxWidth="size-3600">
  <TextField label="Email" />
  <TextField label="Password" />
  <Checkbox>Remember me</Checkbox>
</Form>
```

```
<Form maxWidth="size-3600">
  <TextField label="Email" />
  <TextField label="Password" />
  <Checkbox>
    Remember me
  </Checkbox>
</Form>
```

## Content[#](#content)

* * *

Form accepts one or more children to render as its form elements. Label alignment, positioning, and other [properties](#visual-options) are set on the Form itself and propagated to its children to generate a cohesive design. To override these top level Form props on individual children, set them directly on the child instead.

```
<Form maxWidth="size-3600" isRequired necessityIndicator="label">
  <TextField label="Name" />
  <TextField label="Email" />
  <TextField label="Address" isRequired={false} />
</Form>
```

```
<Form
  maxWidth="size-3600"
  isRequired
  necessityIndicator="label"
>
  <TextField label="Name" />
  <TextField label="Email" />
  <TextField label="Address" isRequired={false} />
</Form>
```

```
<Form
  maxWidth="size-3600"
  isRequired
  necessityIndicator="label"
>
  <TextField label="Name" />
  <TextField label="Email" />
  <TextField
    label="Address"
    isRequired={false}
  />
</Form>
```

* * *

A label should be provided to the Form by adding either the `aria-label` or `aria-labelledby` prop, so that the element will be identified to assistive technology as a form landmark region to which assistive technology can navigate.

```
<h3 id="label-3">Personal Information</h3>
<Form maxWidth="size-3600" aria-labelledby="label-3">
  <TextField label="First Name" />
  <TextField label="Last Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
    <Radio value="dragons">Dragons</Radio>
  </RadioGroup>
</Form>
```

```
<h3 id="label-3">Personal Information</h3>
<Form maxWidth="size-3600" aria-labelledby="label-3">
  <TextField label="First Name" />
  <TextField label="Last Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
    <Radio value="dragons">Dragons</Radio>
  </RadioGroup>
</Form>
```

```
<h3 id="label-3">
  Personal Information
</h3>
<Form
  maxWidth="size-3600"
  aria-labelledby="label-3"
>
  <TextField label="First Name" />
  <TextField label="Last Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
    <Radio value="dragons">
      Dragons
    </Radio>
  </RadioGroup>
</Form>
```

* * *

React Spectrum supports native HTML constraint validation with customizable UI, custom validation functions, realtime validation, and integration with server-side validation errors. The `Form` component facilitates server-side validation by providing error messages to the fields within it.

To provide validation errors, the `validationErrors` prop should be set to an object that maps each field's `name` prop to a string or array of strings representing one or more errors. These are displayed to the user as soon as the `validationErrors` prop is set, and cleared after the user modifies each field's value.

```
<Form
  validationErrors={{ username: 'Sorry, this username is taken.' }}
  maxWidth="size-3000"
>
  <TextField label="Username" name="username" />
</Form>
```

```
<Form
  validationErrors={{
    username: 'Sorry, this username is taken.'
  }}
  maxWidth="size-3000"
>
  <TextField label="Username" name="username" />
</Form>
```

```
<Form
  validationErrors={{
    username:
      'Sorry, this username is taken.'
  }}
  maxWidth="size-3000"
>
  <TextField
    label="Username"
    name="username"
  />
</Form>
```

See the [Forms](https://react-spectrum.adobe.com/react-spectrum/forms.html) guide to learn more about form validation in React Spectrum, including client-side validation, and integration with other frameworks and libraries.

By default, validation errors are displayed to the user in realtime as the value is edited, and do not block form submission. To enable native HTML form validation and prevent form submission when fields are invalid, set the `validationBehavior` prop to `"native"`.

```
import {ButtonGroup, Button} from '@adobe/react-spectrum';

<Form validationBehavior="native" maxWidth="size-3000">
  <TextField label="Email" name="email" type="email" isRequired />
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
```

```
import {Button, ButtonGroup} from '@adobe/react-spectrum';

<Form validationBehavior="native" maxWidth="size-3000">
  <TextField
    label="Email"
    name="email"
    type="email"
    isRequired
  />
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
  ButtonGroup
} from '@adobe/react-spectrum';

<Form
  validationBehavior="native"
  maxWidth="size-3000"
>
  <TextField
    label="Email"
    name="email"
    type="email"
    isRequired
  />
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

By default, after a user submits a form with validation errors, the first invalid field will be focused. You can prevent this by calling `preventDefault` during the `onInvalid` event, and move focus yourself.

This example shows how to move focus to an [InlineAlert](https://react-spectrum.adobe.com/react-spectrum/InlineAlert.html) using the `autoFocus` prop when displaying validation errors at the top of a form.

```
import {InlineAlert, Heading, Content} from '@adobe/react-spectrum';

function Example() {
  let [isInvalid, setInvalid] = React.useState(false);

  return (
    <Form
      validationBehavior="native"
      onInvalid={e => {
        e.preventDefault();
        setInvalid(true);
      }}      onSubmit={e => {
        e.preventDefault();
        setInvalid(false);
      }}
      onReset={() => setInvalid(false)}
      maxWidth="size-3600">
      {isInvalid &&
        <InlineAlert variant="negative" autoFocus>          <Heading>Unable to submit</Heading>
          <Content>
            Please fix the validation errors below, and re-submit the form.
          </Content>
        </InlineAlert>
      }
      <TextField label="First Name" isRequired />
      <TextField label="Last Name" isRequired />
      <ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
    </Form>
  );
}
```

```
import {
  Content,
  Heading,
  InlineAlert
} from '@adobe/react-spectrum';

function Example() {
  let [isInvalid, setInvalid] = React.useState(false);

  return (
    <Form
      validationBehavior="native"
      onInvalid={(e) => {
        e.preventDefault();
        setInvalid(true);
      }}      onSubmit={(e) => {
        e.preventDefault();
        setInvalid(false);
      }}
      onReset={() => setInvalid(false)}
      maxWidth="size-3600"
    >
      {isInvalid &&
        <InlineAlert variant="negative" autoFocus>          <Heading>Unable to submit</Heading>
          <Content>
            Please fix the validation errors below, and
            re-submit the form.
          </Content>
        </InlineAlert>}
      <TextField label="First Name" isRequired />
      <TextField label="Last Name" isRequired />
      <ButtonGroup>
        <Button type="submit" variant="primary">
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </ButtonGroup>
    </Form>
  );
}
```

```
import {
  Content,
  Heading,
  InlineAlert
} from '@adobe/react-spectrum';

function Example() {
  let [
    isInvalid,
    setInvalid
  ] = React.useState(
    false
  );

  return (
    <Form
      validationBehavior="native"
      onInvalid={(e) => {
        e.preventDefault();
        setInvalid(true);
      }}      onSubmit={(e) => {
        e.preventDefault();
        setInvalid(
          false
        );
      }}
      onReset={() =>
        setInvalid(
          false
        )}
      maxWidth="size-3600"
    >
      {isInvalid &&
        <InlineAlert
          variant="negative"
          autoFocus
        >          <Heading>
            Unable to
            submit
          </Heading>
          <Content>
            Please fix
            the
            validation
            errors below,
            and re-submit
            the form.
          </Content>
        </InlineAlert>}
      <TextField
        label="First Name"
        isRequired
      />
      <TextField
        label="Last Name"
        isRequired
      />
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
  );
}
```

* * *

Name

Type

Default

Description

`children`

`[ReactElement](https://reactjs.org/docs/rendering-elements.html)<[SpectrumLabelableProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/labelable.d.ts:SpectrumLabelableProps)> | [ReactElement](https://reactjs.org/docs/rendering-elements.html)<[SpectrumLabelableProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/labelable.d.ts:SpectrumLabelableProps)>[]`

—

The contents of the Form.

`isQuiet`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the Form elements are displayed with their quiet style.

`isEmphasized`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the Form elements are rendered with their emphasized style.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the Form elements are disabled.

`isRequired`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether user input is required on each of the Form elements before Form submission.

`isReadOnly`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the Form elements can be selected but not changed by the user.

`validationState`

`[ValidationState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationState)`

`'valid'`

Whether the Form elements should display their "valid" or "invalid" visual styling.

`validationBehavior`

`'aria' | 'native'`

`'aria'`

Whether to use native HTML form validation to prevent form submission when a field value is missing or invalid, or mark fields as required or invalid via ARIA.

`validationErrors`

`[ValidationErrors](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationErrors)`

—

Validation errors for the form, typically returned by a server. This should be set to an object mapping from input names to errors.

`action`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | FormHTMLAttributes<[HTMLFormElement](https://developer.mozilla.org/docs/Web/API/HTMLFormElement)>['action']`

—

Where to send the form-data when the form is submitted. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#action).

`encType`

`'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'`

—

The enctype attribute specifies how the form-data should be encoded when submitting it to the server. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#enctype).

`method`

`'get' | 'post' | 'dialog'`

—

The HTTP method to submit the form with. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#method).

`target`

`'_blank' | '_self' | '_parent' | '_top'`

—

The target attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#target).

`autoComplete`

`'off' | 'on'`

—

Indicates whether input elements can by default have their values automatically completed by the browser. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#autocomplete).

`autoCapitalize`

`'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'`

—

Controls whether inputted text is automatically capitalized and, if so, in what manner. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize).

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

Events

Name

Type

Description

`onSubmit`

`( (event: FormEvent<[HTMLFormElement](https://developer.mozilla.org/docs/Web/API/HTMLFormElement)> )) => void`

Triggered when a user submits the form.

`onReset`

`( (event: FormEvent<[HTMLFormElement](https://developer.mozilla.org/docs/Web/API/HTMLFormElement)> )) => void`

Triggered when a user resets the form.

`onInvalid`

`( (event: FormEvent<[HTMLFormElement](https://developer.mozilla.org/docs/Web/API/HTMLFormElement)> )) => void`

Triggered for each invalid field when a user submits the form.

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

`role`

`'search' | 'presentation'`

An ARIA role override to apply to the form element.

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

### Label position and alignment[#](#label-position-and-alignment)

Top label position, start label alignment

```
<Form
  labelPosition="top"
  labelAlign="start"
  aria-label="Top position, start alignment example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  labelPosition="top"
  labelAlign="start"
  aria-label="Top position, start alignment example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  labelPosition="top"
  labelAlign="start"
  aria-label="Top position, start alignment example"
  maxWidth="size-3600"
>
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
```

Side label position, start label alignment

```
<Form
  labelPosition="side"
  labelAlign="start"
  aria-label="Side position, start alignment example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  labelPosition="side"
  labelAlign="start"
  aria-label="Side position, start alignment example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  labelPosition="side"
  labelAlign="start"
  aria-label="Side position, start alignment example"
  maxWidth="size-3600"
>
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
```

Side label position, end label alignment

```
<Form
  labelPosition="side"
  labelAlign="end"
  aria-label="Side position, end alignment example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  labelPosition="side"
  labelAlign="end"
  aria-label="Side position, end alignment example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  labelPosition="side"
  labelAlign="end"
  aria-label="Side position, end alignment example"
  maxWidth="size-3600"
>
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
```

```
<Form
  isQuiet
  aria-label="Quiet example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <TextField label="Address" />
</Form>
```

```
<Form
  isQuiet
  aria-label="Quiet example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <TextField label="Address" />
</Form>
```

```
<Form
  isQuiet
  aria-label="Quiet example"
  maxWidth="size-3600"
>
  <TextField label="Name" />
  <TextField label="Address" />
</Form>
```

```
<Form
  isEmphasized
  aria-label="Emphasized example"
  maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet" defaultValue="dogs">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  isEmphasized
  aria-label="Emphasized example"
  maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet" defaultValue="dogs">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  isEmphasized
  aria-label="Emphasized example"
  maxWidth="size-3600"
>
  <TextField label="Name" />
  <RadioGroup
    label="Favorite pet"
    defaultValue="dogs"
  >
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
```

```
<Form
  isDisabled
  aria-label="Disabled example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  isDisabled
  aria-label="Disabled example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  isDisabled
  aria-label="Disabled example"
  maxWidth="size-3600"
>
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
```

### Required and necessity indicator[#](#required-and-necessity-indicator)

Optional label

```
<Form
  necessityIndicator="label"
  aria-label="Optional with label example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  necessityIndicator="label"
  aria-label="Optional with label example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  necessityIndicator="label"
  aria-label="Optional with label example"
  maxWidth="size-3600"
>
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
```

Required label

```
<Form
  isRequired
  necessityIndicator="label"
  aria-label="Required with label example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  isRequired
  necessityIndicator="label"
  aria-label="Required with label example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  isRequired
  necessityIndicator="label"
  aria-label="Required with label example"
  maxWidth="size-3600"
>
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
```

Required with asterisk

```
<Form
  isRequired
  necessityIndicator="icon"
  aria-label="Required with asterisk example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  isRequired
  necessityIndicator="icon"
  aria-label="Required with asterisk example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  isRequired
  necessityIndicator="icon"
  aria-label="Required with asterisk example"
  maxWidth="size-3600"
>
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
```

```
<Form
  isReadOnly
  aria-label="isReadOnly example"
  maxWidth="size-3600">
  <TextField label="Name" value="John Smith" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  isReadOnly
  aria-label="isReadOnly example"
  maxWidth="size-3600">
  <TextField label="Name" value="John Smith" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  isReadOnly
  aria-label="isReadOnly example"
  maxWidth="size-3600"
>
  <TextField
    label="Name"
    value="John Smith"
  />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
```

```
<Form
  validationState="invalid"
  aria-label="Invalid validationState example"
  maxWidth="size-3600"
  marginBottom="size-300">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  validationState="invalid"
  aria-label="Invalid validationState example"
  maxWidth="size-3600"
  marginBottom="size-300">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  validationState="invalid"
  aria-label="Invalid validationState example"
  maxWidth="size-3600"
  marginBottom="size-300"
>
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
```

```
<Form
  validationState="valid"
  aria-label="Valid validationState example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  validationState="valid"
  aria-label="Valid validationState example"
  maxWidth="size-3600">
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
```

```
<Form
  validationState="valid"
  aria-label="Valid validationState example"
  maxWidth="size-3600"
>
  <TextField label="Name" />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
```
