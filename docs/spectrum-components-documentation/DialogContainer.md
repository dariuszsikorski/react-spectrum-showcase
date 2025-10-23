---
source: https://react-spectrum.adobe.com/react-spectrum/DialogContainer.html
date: Thu, 16 Oct 2025 01:28:39 GMT
---

A DialogContainer accepts a single Dialog as a child, and manages showing and hiding it in a modal. Useful in cases where there is no trigger element or when the trigger unmounts while the dialog is open.

* * *

```
function Example(props) {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <ActionButton onPress={() => setOpen(true)}>
        <Delete />
        <Text>Delete</Text>
      </ActionButton>
      <DialogContainer onDismiss={() => setOpen(false)} {...props}>
        {isOpen &&
          <AlertDialog
            title="Delete"
            variant="destructive"
            primaryActionLabel="Delete">
            Are you sure you want to delete this item?
          </AlertDialog>
        }
      </DialogContainer>
    </>
  );
}
```

```
function Example(props) {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <ActionButton onPress={() => setOpen(true)}>
        <Delete />
        <Text>Delete</Text>
      </ActionButton>
      <DialogContainer
        onDismiss={() => setOpen(false)}
        {...props}
      >
        {isOpen &&
          (
            <AlertDialog
              title="Delete"
              variant="destructive"
              primaryActionLabel="Delete"
            >
              Are you sure you want to delete this item?
            </AlertDialog>
          )}
      </DialogContainer>
    </>
  );
}
```

```
function Example(props) {
  let [isOpen, setOpen] =
    React.useState(
      false
    );

  return (
    <>
      <ActionButton
        onPress={() =>
          setOpen(true)}
      >
        <Delete />
        <Text>
          Delete
        </Text>
      </ActionButton>
      <DialogContainer
        onDismiss={() =>
          setOpen(false)}
        {...props}
      >
        {isOpen &&
          (
            <AlertDialog
              title="Delete"
              variant="destructive"
              primaryActionLabel="Delete"
            >
              Are you
              sure you
              want to
              delete this
              item?
            </AlertDialog>
          )}
      </DialogContainer>
    </>
  );
}
```

* * *

DialogContainer is useful over a [DialogTrigger](https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html) when your have a trigger that can unmount while the dialog is open. For example, placing a DialogTrigger around a menu item would not work because the menu closes when pressing an item, thereby unmounting the DialogTrigger. When the trigger unmounts, so does the Dialog. In these cases, it is useful to place the dialog _outside_ the tree that unmounts, so that the dialog is not also removed.

The following example shows a [MenuTrigger](https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html) containing a [Menu](https://react-spectrum.adobe.com/react-spectrum/Menu.html) with two actions: "edit" and "delete". Each menu item opens a different dialog. This is implemented by using a DialogContainer that displays the edit dialog, delete dialog, or no dialog depending on the current value stored in local state. Pressing a menu item triggers the menu's `onAction` prop, which sets the state to the type of dialog to display, based on the menu item's `key`. This causes the associated dialog to be rendered within the DialogContainer.

This example also demonstrates the use of the `useDialogContainer` hook, which allows the dialog to dismiss itself when a user presses one of the buttons inside it. This triggers the DialogContainer's `onDismiss` event, which resets the state storing the open dialog back to `null`. In addition, the user can close the dialog using the Escape key (unless the `isKeyboardDismissDisabled` prop is set), or by clicking outside (if the `isDismissable` prop is set).

```
import {useDialogContainer} from '@adobe/react-spectrum';

function Example() {
  let [dialog, setDialog] = React.useState(null);

  return (
    <>
      <MenuTrigger>
        <ActionButton aria-label="Actions">
          <More />
        </ActionButton>
        <Menu onAction={setDialog}>
          <Item key="edit">Edit...</Item>
          <Item key="delete">Delete...</Item>
        </Menu>
      </MenuTrigger>
      <DialogContainer onDismiss={() => setDialog(null)}>
        {dialog === 'edit' &&
          <EditDialog />}
        {dialog === 'delete' &&
          (
            <AlertDialog
              title="Delete"
              variant="destructive"
              primaryActionLabel="Delete"
            >
              Are you sure you want to delete this item?
            </AlertDialog>
          )}
      </DialogContainer>
    </>
  );
}

function EditDialog() {
  // This hook allows us to dismiss the dialog when the user
  // presses one of the buttons (below).
  let dialog = useDialogContainer();

  return (
    <Dialog>
      <Heading>Edit</Heading>
      <Divider />
      <Content>
        <Form labelPosition="side" width="100%">
          <TextField autoFocus label="First Name" defaultValue="John" />
          <TextField label="Last Name" defaultValue="Smith" />
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={dialog.dismiss}>Cancel</Button>
        <Button variant="accent" onPress={dialog.dismiss}>Save</Button>
      </ButtonGroup>
    </Dialog>
  );
}
```

```
import {useDialogContainer} from '@adobe/react-spectrum';

function Example() {
  let [dialog, setDialog] = React.useState(null);

  return (
    <>
      <MenuTrigger>
        <ActionButton aria-label="Actions">
          <More />
        </ActionButton>
        <Menu onAction={setDialog}>
          <Item key="edit">Edit...</Item>
          <Item key="delete">Delete...</Item>
        </Menu>
      </MenuTrigger>
      <DialogContainer onDismiss={() => setDialog(null)}>
        {dialog === 'edit' &&
          <EditDialog />}
        {dialog === 'delete' &&
          (
            <AlertDialog
              title="Delete"
              variant="destructive"
              primaryActionLabel="Delete"
            >
              Are you sure you want to delete this item?
            </AlertDialog>
          )}
      </DialogContainer>
    </>
  );
}

function EditDialog() {
  // This hook allows us to dismiss the dialog when the user
  // presses one of the buttons (below).
  let dialog = useDialogContainer();

  return (
    <Dialog>
      <Heading>Edit</Heading>
      <Divider />
      <Content>
        <Form labelPosition="side" width="100%">
          <TextField
            autoFocus
            label="First Name"
            defaultValue="John"
          />
          <TextField
            label="Last Name"
            defaultValue="Smith"
          />
        </Form>
      </Content>
      <ButtonGroup>
        <Button
          variant="secondary"
          onPress={dialog.dismiss}
        >
          Cancel
        </Button>
        <Button variant="accent" onPress={dialog.dismiss}>
          Save
        </Button>
      </ButtonGroup>
    </Dialog>
  );
}
```

```
import {useDialogContainer} from '@adobe/react-spectrum';

function Example() {
  let [
    dialog,
    setDialog
  ] = React.useState(
    null
  );

  return (
    <>
      <MenuTrigger>
        <ActionButton aria-label="Actions">
          <More />
        </ActionButton>
        <Menu
          onAction={setDialog}
        >
          <Item key="edit">
            Edit...
          </Item>
          <Item key="delete">
            Delete...
          </Item>
        </Menu>
      </MenuTrigger>
      <DialogContainer
        onDismiss={() =>
          setDialog(
            null
          )}
      >
        {dialog ===
            'edit' &&
          <EditDialog />}
        {dialog ===
            'delete' &&
          (
            <AlertDialog
              title="Delete"
              variant="destructive"
              primaryActionLabel="Delete"
            >
              Are you
              sure you
              want to
              delete this
              item?
            </AlertDialog>
          )}
      </DialogContainer>
    </>
  );
}

function EditDialog() {
  // This hook allows us to dismiss the dialog when the user
  // presses one of the buttons (below).
  let dialog =
    useDialogContainer();

  return (
    <Dialog>
      <Heading>
        Edit
      </Heading>
      <Divider />
      <Content>
        <Form
          labelPosition="side"
          width="100%"
        >
          <TextField
            autoFocus
            label="First Name"
            defaultValue="John"
          />
          <TextField
            label="Last Name"
            defaultValue="Smith"
          />
        </Form>
      </Content>
      <ButtonGroup>
        <Button
          variant="secondary"
          onPress={dialog
            .dismiss}
        >
          Cancel
        </Button>
        <Button
          variant="accent"
          onPress={dialog
            .dismiss}
        >
          Save
        </Button>
      </ButtonGroup>
    </Dialog>
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

The Dialog to display, if any.

`type`

`'modal' | 'fullscreen' | 'fullscreenTakeover'`

`'modal'`

The type of Dialog that should be rendered. See the visual options below for examples of each.

`isDismissable`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the Dialog is dismissable. See the [Dialog docs](https://react-spectrum.adobe.com/react-spectrum/Dialog.html#dismissable-dialogs) for more details.

`isKeyboardDismissDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether pressing the escape key to close the dialog should be disabled.

Events

Name

Type

Description

`onDismiss`

`() => void`

Handler that is called when the 'x' button of a dismissable Dialog is clicked.

* * *

The `useDialogContainer` hook can be used to allow a custom dialog component to access the `type` of container the dialog is rendered in (e.g. `modal`, `popover`, `fullscreen`, etc.), and also to dismiss the dialog programmatically. It works with both `DialogContainer` and [DialogTrigger](https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html).

`useDialogContainer(): [DialogContainerValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/dialog/src/useDialogContainer.ts:DialogContainerValue)`

* * *

The `type` prop allows setting the type of modal to display. Set it to `"fullscreen"` to display a full screen dialog, which only reveals a small portion of the page behind the underlay. Use this variant for more complex workflows that do not fit in the available modal dialog [sizes](https://react-spectrum.adobe.com/react-spectrum/Dialog.html#size).

```
function Example(props) {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <ActionButton onPress={() => setOpen(true)}>
        <Edit />
        <Text>Edit</Text>
      </ActionButton>
      <DialogContainer
        type="fullscreen"
        onDismiss={() => setOpen(false)}
        {...props}
      >
        {isOpen &&
          <EditDialog />}
      </DialogContainer>
    </>
  );
}
```

```
function Example(props) {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <ActionButton onPress={() => setOpen(true)}>
        <Edit />
        <Text>Edit</Text>
      </ActionButton>
      <DialogContainer
        type="fullscreen"
        onDismiss={() => setOpen(false)}
        {...props}
      >
        {isOpen &&
          <EditDialog />}
      </DialogContainer>
    </>
  );
}
```

```
function Example(props) {
  let [isOpen, setOpen] =
    React.useState(
      false
    );

  return (
    <>
      <ActionButton
        onPress={() =>
          setOpen(true)}
      >
        <Edit />
        <Text>Edit</Text>
      </ActionButton>
      <DialogContainer
        type="fullscreen"
        onDismiss={() =>
          setOpen(false)}
        {...props}
      >
        {isOpen &&
          <EditDialog />}
      </DialogContainer>
    </>
  );
}
```

Fullscreen takeover dialogs are similar to the fullscreen variant except that the dialog covers the entire screen.

```
function Example(props) {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <ActionButton onPress={() => setOpen(true)}>
        <Edit />
        <Text>Edit</Text>
      </ActionButton>
      <DialogContainer
        type="fullscreenTakeover"
        onDismiss={() => setOpen(false)}
        {...props}
      >
        {isOpen &&
          <EditDialog />}
      </DialogContainer>
    </>
  );
}
```

```
function Example(props) {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <ActionButton onPress={() => setOpen(true)}>
        <Edit />
        <Text>Edit</Text>
      </ActionButton>
      <DialogContainer
        type="fullscreenTakeover"
        onDismiss={() => setOpen(false)}
        {...props}
      >
        {isOpen &&
          <EditDialog />}
      </DialogContainer>
    </>
  );
}
```

```
function Example(props) {
  let [isOpen, setOpen] =
    React.useState(
      false
    );

  return (
    <>
      <ActionButton
        onPress={() =>
          setOpen(true)}
      >
        <Edit />
        <Text>Edit</Text>
      </ActionButton>
      <DialogContainer
        type="fullscreenTakeover"
        onDismiss={() =>
          setOpen(false)}
        {...props}
      >
        {isOpen &&
          <EditDialog />}
      </DialogContainer>
    </>
  );
}
```

* * *

The DialogContainer features an overlay that transitions in and out of the page as it is opened and closed. Please see the following sections in the testing docs for more information on how to handle these behaviors in your test suite.

[Timers](https://react-spectrum.adobe.com/react-spectrum/testing.html#timers)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/dialog/test/DialogContainer.test.js) if you find that the above isn't sufficient when resolving issues in your own test cases.
