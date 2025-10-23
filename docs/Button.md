---
source: https://react-spectrum.adobe.com/react-spectrum/Button.html
date: Thu, 16 Oct 2025 01:05:38 GMT
---

Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.

* * *

```
<Button variant="accent">Save</Button>
```

```
<Button variant="accent">Save</Button>
```

```
<Button variant="accent">
  Save
</Button>
```

## Content[#](#content)

* * *

Buttons must have a visible label, and can optionally have an icon. Text only buttons accept a string as children. Icons can also be added as children, with a sibling [Text](https://react-spectrum.adobe.com/react-spectrum/Text.html) element for the label.

```
import {Text} from '@adobe/react-spectrum';

<Button variant="primary">
  <Bell />
  <Text>Icon + Label</Text>
</Button>
```

```
import {Text} from '@adobe/react-spectrum';

<Button variant="primary">
  <Bell />
  <Text>Icon + Label</Text>
</Button>
```

```
import {Text} from '@adobe/react-spectrum';

<Button variant="primary">
  <Bell />
  <Text>
    Icon + Label
  </Text>
</Button>
```

If no visible label is provided (e.g. an icon only button), an alternative text label must be provided to identify the control for accessibility. This should be added using the `aria-label` prop.

In order to internationalize a button, a localized string should be passed to the `children` or `aria-label` prop.

* * *

Buttons support user interactions via mouse, keyboard, and touch. You can handle all of these via the `onPress` prop.

The following example uses an `onPress` handler to update a counter stored in React state.

```
function Example() {
  let [count, setCount] = React.useState(0);

  return (
    <Button variant="primary" onPress={() => setCount((c) => c + 1)}>
      {count} Dogs
    </Button>
  );
}
```

```
function Example() {
  let [count, setCount] = React.useState(0);

  return (
    <Button
      variant="primary"
      onPress={() => setCount((c) => c + 1)}
    >
      {count} Dogs
    </Button>
  );
}
```

```
function Example() {
  let [count, setCount] =
    React.useState(0);

  return (
    <Button
      variant="primary"
      onPress={() =>
        setCount((c) =>
          c + 1
        )}
    >
      {count} Dogs
    </Button>
  );
}
```

* * *

Buttons can indicate that a quick progress task is taking place (e.g., saving settings on a server). After a 1 second delay, an indeterminate spinner will be displayed in place of the button label and icon. You can trigger this behavior with the `isPending` prop. Button events are disabled while `isPending` is true.

```
function Example() {
  let [isLoading, setIsLoading] = React.useState(false);

  let handlePress = () => {
    // Trigger button pending state
    setIsLoading(true);

    setTimeout(() => {
      // Cancel button pending state
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Button variant="primary" isPending={isLoading} onPress={handlePress}>
      Click me!
    </Button>
  );
}
```

```
function Example() {
  let [isLoading, setIsLoading] = React.useState(false);

  let handlePress = () => {
    // Trigger button pending state
    setIsLoading(true);

    setTimeout(() => {
      // Cancel button pending state
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Button
      variant="primary"
      isPending={isLoading}
      onPress={handlePress}
    >
      Click me!
    </Button>
  );
}
```

```
function Example() {
  let [
    isLoading,
    setIsLoading
  ] = React.useState(
    false
  );

  let handlePress =
    () => {
      // Trigger button pending state
      setIsLoading(true);

      setTimeout(() => {
        // Cancel button pending state
        setIsLoading(
          false
        );
      }, 3000);
    };

  return (
    <Button
      variant="primary"
      isPending={isLoading}
      onPress={handlePress}
    >
      Click me!
    </Button>
  );
}
```

* * *

Name

Type

Default

Description

`variant`

`'accent' | 'primary' | 'secondary' | 'negative' | [LegacyButtonVariant](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/button/src/index.d.ts:LegacyButtonVariant)`

—

The [visual style](https://spectrum.adobe.com/page/button/#Options) of the button.

`style`

`'fill' | 'outline'`

—

The background style of the button.

`staticColor`

`'white' | 'black'`

—

The static color style to apply. Useful when the button appears over a color background.

`isPending`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether to disable events immediately and display a loading spinner after a 1 second delay.

`type`

`'button' | 'submit' | 'reset'`

`'button'`

The behavior of the button when used in an HTML form.

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the button with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#form).

`formAction`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner.

`formEncType`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Indicates how to encode the form data that is submitted.

`formMethod`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Indicates the HTTP method used to submit the form.

`formNoValidate`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Indicates that the form is not to be validated when it is submitted.

`formTarget`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Overrides the target attribute of the button's form owner.

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Submitted as a pair with the button's value as part of the form data.

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The value associated with the button's name when it's submitted with the form data.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the button is disabled.

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The content to display in the button.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`href`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

A URL to link to if elementType="a".

`target`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The target window for the link.

`rel`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).

`elementType`

`ElementType | JSXElementConstructor<any>`

`'button'`

The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.

Events

Name

Type

Description

`onPress`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when the press is released over the target.

`onPressStart`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press interaction starts.

`onPressEnd`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press interaction ends, either over the target or when the pointer leaves the target.

`onPressChange`

`( (isPressed: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the press state changes.

`onPressUp`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press is released over the target, regardless of whether it started on the target or not.

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

`preventFocusOnPress`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to prevent focus from moving to the button when pressing it.

Caution, this can make the button inaccessible and should only be used when alternative keyboard interaction is provided, such as ComboBox's MenuTrigger or a NumberField's increment/decrement control.

`aria-disabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false'`

Indicates whether the element is disabled to users of assistive technology.

`aria-expanded`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false'`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

`aria-haspopup`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | 'true' | 'false'`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

`aria-controls`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

`aria-pressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false' | 'mixed'`

Indicates the current "pressed" state of toggle buttons.

`aria-current`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false' | 'page' | 'step' | 'location' | 'date' | 'time'`

Indicates whether this element represents the current item within a container or set of related elements.

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

[View guidelines](https://spectrum.adobe.com/page/button/#Accent-variant)

```
<Flex wrap gap="size-250">
  <Button variant="accent" style="fill">Save</Button>
  <Button variant="accent" style="outline">Save</Button>
</Flex>
```

```
<Flex wrap gap="size-250">
  <Button variant="accent" style="fill">Save</Button>
  <Button variant="accent" style="outline">Save</Button>
</Flex>
```

```
<Flex
  wrap
  gap="size-250"
>
  <Button
    variant="accent"
    style="fill"
  >
    Save
  </Button>
  <Button
    variant="accent"
    style="outline"
  >
    Save
  </Button>
</Flex>
```

[View guidelines](https://spectrum.adobe.com/page/button/#Primary-variant)

```
<Flex wrap gap="size-250">
  <Button variant="primary" style="fill">Save</Button>
  <Button variant="primary" style="outline">Save</Button>
</Flex>
```

```
<Flex wrap gap="size-250">
  <Button variant="primary" style="fill">Save</Button>
  <Button variant="primary" style="outline">Save</Button>
</Flex>
```

```
<Flex
  wrap
  gap="size-250"
>
  <Button
    variant="primary"
    style="fill"
  >
    Save
  </Button>
  <Button
    variant="primary"
    style="outline"
  >
    Save
  </Button>
</Flex>
```

[View guidelines](https://spectrum.adobe.com/page/button/#Secondary-variant)

```
<Flex wrap gap="size-250">
  <Button variant="secondary" style="fill">Save</Button>
  <Button variant="secondary" style="outline">Save</Button>
</Flex>
```

```
<Flex wrap gap="size-250">
  <Button variant="secondary" style="fill">Save</Button>
  <Button variant="secondary" style="outline">Save</Button>
</Flex>
```

```
<Flex
  wrap
  gap="size-250"
>
  <Button
    variant="secondary"
    style="fill"
  >
    Save
  </Button>
  <Button
    variant="secondary"
    style="outline"
  >
    Save
  </Button>
</Flex>
```

[View guidelines](https://spectrum.adobe.com/page/button/#Negative-variant)

```
<Flex wrap gap="size-250">
  <Button variant="negative" style="fill">Save</Button>
  <Button variant="negative" style="outline">Save</Button>
</Flex>
```

```
<Flex wrap gap="size-250">
  <Button variant="negative" style="fill">Save</Button>
  <Button variant="negative" style="outline">Save</Button>
</Flex>
```

```
<Flex
  wrap
  gap="size-250"
>
  <Button
    variant="negative"
    style="fill"
  >
    Save
  </Button>
  <Button
    variant="negative"
    style="outline"
  >
    Save
  </Button>
</Flex>
```

[View guidelines](https://spectrum.adobe.com/page/button/#Static-color)

```
<Flex wrap gap="size-250">
  <View backgroundColor="static-blue-700" padding="size-500">
    <Flex wrap gap="size-200">
      <Button variant="primary" staticColor="white" style="fill">Save</Button>
      <Button variant="primary" staticColor="white" style="outline">
        Save
      </Button>
    </Flex>
  </View>
  <View backgroundColor="static-yellow-400" padding="size-500">
    <Flex wrap gap="size-200">
      <Button variant="primary" staticColor="black" style="fill">Save</Button>
      <Button variant="primary" staticColor="black" style="outline">
        Save
      </Button>
    </Flex>
  </View>
</Flex>
```

```
<Flex wrap gap="size-250">
  <View
    backgroundColor="static-blue-700"
    padding="size-500"
  >
    <Flex wrap gap="size-200">
      <Button
        variant="primary"
        staticColor="white"
        style="fill"
      >
        Save
      </Button>
      <Button
        variant="primary"
        staticColor="white"
        style="outline"
      >
        Save
      </Button>
    </Flex>
  </View>
  <View
    backgroundColor="static-yellow-400"
    padding="size-500"
  >
    <Flex wrap gap="size-200">
      <Button
        variant="primary"
        staticColor="black"
        style="fill"
      >
        Save
      </Button>
      <Button
        variant="primary"
        staticColor="black"
        style="outline"
      >
        Save
      </Button>
    </Flex>
  </View>
</Flex>
```

```
<Flex
  wrap
  gap="size-250"
>
  <View
    backgroundColor="static-blue-700"
    padding="size-500"
  >
    <Flex
      wrap
      gap="size-200"
    >
      <Button
        variant="primary"
        staticColor="white"
        style="fill"
      >
        Save
      </Button>
      <Button
        variant="primary"
        staticColor="white"
        style="outline"
      >
        Save
      </Button>
    </Flex>
  </View>
  <View
    backgroundColor="static-yellow-400"
    padding="size-500"
  >
    <Flex
      wrap
      gap="size-200"
    >
      <Button
        variant="primary"
        staticColor="black"
        style="fill"
      >
        Save
      </Button>
      <Button
        variant="primary"
        staticColor="black"
        style="outline"
      >
        Save
      </Button>
    </Flex>
  </View>
</Flex>
```

[View guidelines](https://spectrum.adobe.com/page/button/#Disabled)

```
<Button variant="accent" isDisabled>Save</Button>
```

```
<Button variant="accent" isDisabled>Save</Button>
```

```
<Button
  variant="accent"
  isDisabled
>
  Save
</Button>
```

[View guidelines](https://spectrum.adobe.com/page/button/#Label-and-icon)

```
<Flex direction="row" gap={8}>
  <Button variant="accent" aria-label="Ring for service"><Bell /></Button>
  <Button variant="primary" aria-label="Ring for service"><Bell /></Button>
  <Button variant="secondary" aria-label="Ring for service"><Bell /></Button>
</Flex>
```

```
<Flex direction="row" gap={8}>
  <Button variant="accent" aria-label="Ring for service">
    <Bell />
  </Button>
  <Button variant="primary" aria-label="Ring for service">
    <Bell />
  </Button>
  <Button
    variant="secondary"
    aria-label="Ring for service"
  >
    <Bell />
  </Button>
</Flex>
```

```
<Flex
  direction="row"
  gap={8}
>
  <Button
    variant="accent"
    aria-label="Ring for service"
  >
    <Bell />
  </Button>
  <Button
    variant="primary"
    aria-label="Ring for service"
  >
    <Bell />
  </Button>
  <Button
    variant="secondary"
    aria-label="Ring for service"
  >
    <Bell />
  </Button>
</Flex>
```
