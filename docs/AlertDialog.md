---
source: https://react-spectrum.adobe.com/react-spectrum/AlertDialog.html
date: Thu, 16 Oct 2025 01:27:40 GMT
---

AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.

* * *

```
<DialogTrigger>
  <ActionButton>Save</ActionButton>
  <AlertDialog
    title="Low Disk Space"
    variant="warning"
    primaryActionLabel="Confirm">
    You are running low on disk space.
    Delete unnecessary files to free up space.
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Save</ActionButton>
  <AlertDialog
    title="Low Disk Space"
    variant="warning"
    primaryActionLabel="Confirm">
    You are running low on disk space.
    Delete unnecessary files to free up space.
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    Save
  </ActionButton>
  <AlertDialog
    title="Low Disk Space"
    variant="warning"
    primaryActionLabel="Confirm"
  >
    You are running low
    on disk space.
    Delete unnecessary
    files to free up
    space.
  </AlertDialog>
</DialogTrigger>
```

## Content[#](#content)

* * *

Unlike [Dialog](https://react-spectrum.adobe.com/react-spectrum/Dialog.html), the layout in AlertDialog is very deliberate. The body of an AlertDialog can be provided by passing children to the component. The AlertDialog also supports having up to three buttons in its footer: a primary button, a secondary button, and a cancel button. Each button can be rendered by providing a string to the `primaryActionLabel`, `secondaryActionLabel`, and `cancelLabel` respectively. Be sure to localize any strings provided to the AlertDialog and to the button labels as well. AlertDialogs do not support a Fullscreen mode.

AlertDialogs should always have a visible title, specified by passing a string as the `title` prop. This string should be localized so that it is properly internationalized.

```
<DialogTrigger>
  <ActionButton>Exit</ActionButton>
  <AlertDialog
    variant="information"
    title="Register profile"
    primaryActionLabel="Register"
    secondaryActionLabel="Remind me later"
    cancelLabel="Cancel">
    You have not saved your profile information
    for this account. Would you like to register now?
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Exit</ActionButton>
  <AlertDialog
    variant="information"
    title="Register profile"
    primaryActionLabel="Register"
    secondaryActionLabel="Remind me later"
    cancelLabel="Cancel">
    You have not saved your profile information
    for this account. Would you like to register now?
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    Exit
  </ActionButton>
  <AlertDialog
    variant="information"
    title="Register profile"
    primaryActionLabel="Register"
    secondaryActionLabel="Remind me later"
    cancelLabel="Cancel"
  >
    You have not saved
    your profile
    information for
    this account. Would
    you like to
    register now?
  </AlertDialog>
</DialogTrigger>
```

If any of the buttons in the AlertDialog's footer should be focused when it opens, specify which one via the `autoFocusButton` prop.

```
<DialogTrigger>
  <ActionButton>Save</ActionButton>
  <AlertDialog
    variant="confirmation"
    title="Save file"
    primaryActionLabel="Save"
    cancelLabel="Cancel"
    autoFocusButton="primary">
    A file with the same name already exists. Overwrite?
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Save</ActionButton>
  <AlertDialog
    variant="confirmation"
    title="Save file"
    primaryActionLabel="Save"
    cancelLabel="Cancel"
    autoFocusButton="primary">
    A file with the same name already exists. Overwrite?
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    Save
  </ActionButton>
  <AlertDialog
    variant="confirmation"
    title="Save file"
    primaryActionLabel="Save"
    cancelLabel="Cancel"
    autoFocusButton="primary"
  >
    A file with the
    same name already
    exists. Overwrite?
  </AlertDialog>
</DialogTrigger>
```

* * *

AlertDialog accepts an `onPrimaryAction`, `onSecondaryAction` and `onCancel` prop, triggered when the AlertDialog's confirm or cancel buttons are pressed respectively.

The example below uses `onPrimaryAction`, `onSecondaryAction` and `onCancel` to tell the user which button was pressed to close the AlertDialog.

```
function Example() {
  let onPrimaryAction = () => alert('Primary button pressed.');
  let onSecondaryAction = () => alert('Secondary button pressed.');
  let alertCancel = () => alert('Cancel button pressed.');

  return (
    <DialogTrigger>
      <ActionButton>
        Publish
      </ActionButton>
      <AlertDialog
        variant="confirmation"
        title="Confirm Publish"
        primaryActionLabel="Publish"
        secondaryActionLabel="Save as draft"
        cancelLabel="Cancel"
        onCancel={alertCancel}
        onPrimaryAction={onPrimaryAction}
        onSecondaryAction={onSecondaryAction}>
        Are you sure you want to publish this document?
      </AlertDialog>
    </DialogTrigger>
  );
}
```

```
function Example() {
  let onPrimaryAction = () =>
    alert('Primary button pressed.');
  let onSecondaryAction = () =>
    alert('Secondary button pressed.');
  let alertCancel = () => alert('Cancel button pressed.');

  return (
    <DialogTrigger>
      <ActionButton>
        Publish
      </ActionButton>
      <AlertDialog
        variant="confirmation"
        title="Confirm Publish"
        primaryActionLabel="Publish"
        secondaryActionLabel="Save as draft"
        cancelLabel="Cancel"
        onCancel={alertCancel}
        onPrimaryAction={onPrimaryAction}
        onSecondaryAction={onSecondaryAction}
      >
        Are you sure you want to publish this document?
      </AlertDialog>
    </DialogTrigger>
  );
}
```

```
function Example() {
  let onPrimaryAction =
    () =>
      alert(
        'Primary button pressed.'
      );
  let onSecondaryAction =
    () =>
      alert(
        'Secondary button pressed.'
      );
  let alertCancel = () =>
    alert(
      'Cancel button pressed.'
    );

  return (
    <DialogTrigger>
      <ActionButton>
        Publish
      </ActionButton>
      <AlertDialog
        variant="confirmation"
        title="Confirm Publish"
        primaryActionLabel="Publish"
        secondaryActionLabel="Save as draft"
        cancelLabel="Cancel"
        onCancel={alertCancel}
        onPrimaryAction={onPrimaryAction}
        onSecondaryAction={onSecondaryAction}
      >
        Are you sure you
        want to publish
        this document?
      </AlertDialog>
    </DialogTrigger>
  );
}
```

* * *

Name

Type

Description

`title`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The title of the AlertDialog.

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The contents of the AlertDialog.

`primaryActionLabel`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The label to display within the confirm button.

`variant`

`'confirmation' | 'information' | 'destructive' | 'error' | 'warning'`

The [visual style](https://spectrum.adobe.com/page/alert-dialog/#Options) of the AlertDialog.

`cancelLabel`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The label to display within the cancel button.

`secondaryActionLabel`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The label to display within the secondary button.

`isPrimaryActionDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the primary button is disabled.

`isSecondaryActionDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the secondary button is disabled.

`autoFocusButton`

`'cancel' | 'primary' | 'secondary'`

Button to focus by default when the dialog opens.

Events

Name

Type

Description

`onCancel`

`() => void`

Handler that is called when the cancel button is pressed.

`onPrimaryAction`

`() => void`

Handler that is called when the primary button is pressed.

`onSecondaryAction`

`() => void`

Handler that is called when the secondary button is pressed.

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

[View guidelines](https://spectrum.adobe.com/page/alert-dialog/#Options)

**Confirmation**

```
<DialogTrigger>
  <ActionButton>Exit</ActionButton>
  <AlertDialog
    variant="confirmation"
    title="Exit instance?"
    primaryActionLabel="Confirm"
    cancelLabel="Cancel">
    Exit dungeon instance and return to main hub?
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Exit</ActionButton>
  <AlertDialog
    variant="confirmation"
    title="Exit instance?"
    primaryActionLabel="Confirm"
    cancelLabel="Cancel">
    Exit dungeon instance and return to main hub?
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    Exit
  </ActionButton>
  <AlertDialog
    variant="confirmation"
    title="Exit instance?"
    primaryActionLabel="Confirm"
    cancelLabel="Cancel"
  >
    Exit dungeon
    instance and return
    to main hub?
  </AlertDialog>
</DialogTrigger>
```

**Information**

```
<DialogTrigger>
  <ActionButton>New file</ActionButton>
  <AlertDialog
    variant="information"
    title="Connect your account"
    primaryActionLabel="Continue"
    cancelLabel="Cancel">
    Please connect an existing account to sync any new files.
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>New file</ActionButton>
  <AlertDialog
    variant="information"
    title="Connect your account"
    primaryActionLabel="Continue"
    cancelLabel="Cancel"
  >
    Please connect an existing account to sync any new
    files.
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    New file
  </ActionButton>
  <AlertDialog
    variant="information"
    title="Connect your account"
    primaryActionLabel="Continue"
    cancelLabel="Cancel"
  >
    Please connect an
    existing account to
    sync any new files.
  </AlertDialog>
</DialogTrigger>
```

**Destructive**

```
<DialogTrigger>
  <ActionButton>Delete</ActionButton>
  <AlertDialog
    variant="destructive"
    title="Delete file"
    primaryActionLabel="Delete"
    cancelLabel="Cancel">
    This will permanently delete the selected file. Continue?
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Delete</ActionButton>
  <AlertDialog
    variant="destructive"
    title="Delete file"
    primaryActionLabel="Delete"
    cancelLabel="Cancel"
  >
    This will permanently delete the selected file.
    Continue?
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    Delete
  </ActionButton>
  <AlertDialog
    variant="destructive"
    title="Delete file"
    primaryActionLabel="Delete"
    cancelLabel="Cancel"
  >
    This will
    permanently delete
    the selected file.
    Continue?
  </AlertDialog>
</DialogTrigger>
```

**Error**

```
<DialogTrigger>
  <ActionButton>Login</ActionButton>
  <AlertDialog
    variant="error"
    title="Unable to connect"
    primaryActionLabel="Retry"
    cancelLabel="Cancel">
    Something went wrong while connecting to the server.
    Please try again in a couple minutes.
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Login</ActionButton>
  <AlertDialog
    variant="error"
    title="Unable to connect"
    primaryActionLabel="Retry"
    cancelLabel="Cancel">
    Something went wrong while connecting to the server.
    Please try again in a couple minutes.
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    Login
  </ActionButton>
  <AlertDialog
    variant="error"
    title="Unable to connect"
    primaryActionLabel="Retry"
    cancelLabel="Cancel"
  >
    Something went
    wrong while
    connecting to the
    server. Please try
    again in a couple
    minutes.
  </AlertDialog>
</DialogTrigger>
```

**Warning**

```
<DialogTrigger>
  <ActionButton>Enter</ActionButton>
  <AlertDialog
    variant="warning"
    title="Raid instance"
    primaryActionLabel="Confirm"
    cancelLabel="Cancel">
    The following encounter meant for parties of 4 or more. Enter anyways?
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Enter</ActionButton>
  <AlertDialog
    variant="warning"
    title="Raid instance"
    primaryActionLabel="Confirm"
    cancelLabel="Cancel"
  >
    The following encounter meant for parties of 4 or
    more. Enter anyways?
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    Enter
  </ActionButton>
  <AlertDialog
    variant="warning"
    title="Raid instance"
    primaryActionLabel="Confirm"
    cancelLabel="Cancel"
  >
    The following
    encounter meant for
    parties of 4 or
    more. Enter
    anyways?
  </AlertDialog>
</DialogTrigger>
```

Disables the primary button.

```
<DialogTrigger>
  <ActionButton>Upgrade</ActionButton>
  <AlertDialog
    isPrimaryActionDisabled
    variant="confirmation"
    title="Upgrade subscription"
    primaryActionLabel="Upgrade"
    cancelLabel="Cancel">
    Upgrade subscription for an additional $14.99 a month?
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Upgrade</ActionButton>
  <AlertDialog
    isPrimaryActionDisabled
    variant="confirmation"
    title="Upgrade subscription"
    primaryActionLabel="Upgrade"
    cancelLabel="Cancel">
    Upgrade subscription for an additional $14.99 a month?
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    Upgrade
  </ActionButton>
  <AlertDialog
    isPrimaryActionDisabled
    variant="confirmation"
    title="Upgrade subscription"
    primaryActionLabel="Upgrade"
    cancelLabel="Cancel"
  >
    Upgrade
    subscription for an
    additional $14.99 a
    month?
  </AlertDialog>
</DialogTrigger>
```

Disables the secondary button.

```
<DialogTrigger>
  <ActionButton>Upgrade</ActionButton>
  <AlertDialog
    isSecondaryActionDisabled
    variant="confirmation"
    title="Upgrade subscription"
    primaryActionLabel="Upgrade"
    secondaryActionLabel="Apply Coupon"
    cancelLabel="Cancel">
    Upgrade subscription for an additional $14.99 a month?
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Upgrade</ActionButton>
  <AlertDialog
    isSecondaryActionDisabled
    variant="confirmation"
    title="Upgrade subscription"
    primaryActionLabel="Upgrade"
    secondaryActionLabel="Apply Coupon"
    cancelLabel="Cancel">
    Upgrade subscription for an additional $14.99 a month?
  </AlertDialog>
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    Upgrade
  </ActionButton>
  <AlertDialog
    isSecondaryActionDisabled
    variant="confirmation"
    title="Upgrade subscription"
    primaryActionLabel="Upgrade"
    secondaryActionLabel="Apply Coupon"
    cancelLabel="Cancel"
  >
    Upgrade
    subscription for an
    additional $14.99 a
    month?
  </AlertDialog>
</DialogTrigger>
```

* * *

The AlertDialog features an overlay that transitions in and out of the page as it is opened and closed. Please see the following sections in the testing docs for more information on how to handle these behaviors in your test suite.

[Timers](https://react-spectrum.adobe.com/react-spectrum/testing.html#timers)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/contextualhelp/test/ContextualHelp.test.js) if you find that the above isn't sufficient when resolving issues in your own test cases.

To identify a particular instance of the cancel, secondary, or confirm button, you can use the following data-testid's respectively:

-   `"rsp-AlertDialog-cancelButton"`
-   `"rsp-AlertDialog-secondaryButton"`
-   `"rsp-AlertDialog-confirmButton"`
