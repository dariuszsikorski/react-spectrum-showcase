---
source: https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html
date: Thu, 16 Oct 2025 01:29:05 GMT
---

DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's open state with the trigger's press state. Additionally, it allows you to customize the type and positioning of the Dialog.

* * *

```
<DialogTrigger type="popover">
  <ActionButton>Disk Status</ActionButton>
  <Dialog>
    <Heading>C://</Heading>
    <Divider />
    <Content>
      <Text>
        50% disk space remaining.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger type="popover">
  <ActionButton>Disk Status</ActionButton>
  <Dialog>
    <Heading>C://</Heading>
    <Divider />
    <Content>
      <Text>
        50% disk space remaining.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger type="popover">
  <ActionButton>
    Disk Status
  </ActionButton>
  <Dialog>
    <Heading>
      C://
    </Heading>
    <Divider />
    <Content>
      <Text>
        50% disk space
        remaining.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

## Content[#](#content)

* * *

The DialogTrigger accepts exactly two children: the element which triggers opening of the Dialog and the Dialog itself. The trigger must be the first child passed into the DialogTrigger and should be an element that supports press events.

If your Dialog has buttons within it that should close the Dialog when pressed, you must wrap the Dialog in a function in order to propagate the DialogTrigger's `close` function to the Dialog's children. Dialogs that do not contain such interactive elements can simply provide the Dialog component as is to the DialogTrigger as its second child.

The example below demonstrates how to pass the DialogTrigger's `close` function to the Dialog's buttons.

```
<DialogTrigger>
  <ActionButton>Checkout</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>Confirm checkout?</Heading>
      <Divider />
      <Content>
        <Text>
          You have 5 items in your cart. Proceed to checkout?
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button variant="accent" onPress={close} autoFocus>Confirm</Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Checkout</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>Confirm checkout?</Heading>
      <Divider />
      <Content>
        <Text>
          You have 5 items in your cart. Proceed to
          checkout?
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
          variant="accent"
          onPress={close}
          autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    Checkout
  </ActionButton>
  {(close) => (
    <Dialog>
      <Heading>
        Confirm
        checkout?
      </Heading>
      <Divider />
      <Content>
        <Text>
          You have 5
          items in your
          cart. Proceed
          to checkout?
        </Text>
      </Content>
      <ButtonGroup>
        <Button
          variant="secondary"
          onPress={close}
        >
          Cancel
        </Button>
        <Button
          variant="accent"
          onPress={close}
          autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

* * *

By providing a `type` prop, you can specify the type of Dialog that is rendered by your DialogTrigger. Note that pressing the Esc key will close the Dialog regardless of its `type`.

Modal Dialogs create an underlay that blocks access to the underlying user interface until the Dialog is closed. Sizing options can be found on the [Dialog page](https://react-spectrum.adobe.com/react-spectrum/Dialog.html#size). Focus is trapped inside the Modal as per the [accessibility guidelines](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/) laid out by W3C.

```
<DialogTrigger type="modal">
  <ActionButton>Unlink</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>Unlinking email</Heading>
      <Divider />
      <Content>
        <Text>
          This will unlink your email from your profile "TestUser". Are you
          sure?
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button variant="accent" onPress={close} autoFocus>Confirm</Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger type="modal">
  <ActionButton>Unlink</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>Unlinking email</Heading>
      <Divider />
      <Content>
        <Text>
          This will unlink your email from your profile
          "TestUser". Are you sure?
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
          variant="accent"
          onPress={close}
          autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger type="modal">
  <ActionButton>
    Unlink
  </ActionButton>
  {(close) => (
    <Dialog>
      <Heading>
        Unlinking email
      </Heading>
      <Divider />
      <Content>
        <Text>
          This will
          unlink your
          email from
          your profile
          "TestUser".
          Are you sure?
        </Text>
      </Content>
      <ButtonGroup>
        <Button
          variant="secondary"
          onPress={close}
        >
          Cancel
        </Button>
        <Button
          variant="accent"
          onPress={close}
          autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

If a Dialog without an underlay is needed, consider using a Popover Dialog. See [Dialog placement](#dialog-placement) for how you can customize the positioning. Note that popovers are automatically rendered as modals on mobile by default. See the [mobile type](#mobile-type) option for more information.

```
<DialogTrigger type="popover">
  <ActionButton>Info</ActionButton>
  <Dialog>
    <Heading>Version Info</Heading>
    <Divider />
    <Content>
      <Text>
        Version 1.0.0, Copyright 2020
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger type="popover">
  <ActionButton>Info</ActionButton>
  <Dialog>
    <Heading>Version Info</Heading>
    <Divider />
    <Content>
      <Text>
        Version 1.0.0, Copyright 2020
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger type="popover">
  <ActionButton>
    Info
  </ActionButton>
  <Dialog>
    <Heading>
      Version Info
    </Heading>
    <Divider />
    <Content>
      <Text>
        Version 1.0.0,
        Copyright 2020
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

Tray Dialogs are typically used to portray information on mobile devices or smaller screens.

```
<DialogTrigger type="tray">
  <ActionButton>Check Messages</ActionButton>
  <Dialog>
    <Heading>New Messages</Heading>
    <Divider />
    <Content>
      <Text>
        You have 5 new messages.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger type="tray">
  <ActionButton>Check Messages</ActionButton>
  <Dialog>
    <Heading>New Messages</Heading>
    <Divider />
    <Content>
      <Text>
        You have 5 new messages.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger type="tray">
  <ActionButton>
    Check Messages
  </ActionButton>
  <Dialog>
    <Heading>
      New Messages
    </Heading>
    <Divider />
    <Content>
      <Text>
        You have 5 new
        messages.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

Fullscreen Dialogs are a fullscreen variant of the Modal Dialog, only revealing a small portion of the page behind the underlay. Use this variant for more complex workflows that do not fit in the available Modal Dialog sizes. This variant does not support `isDismissible`.

```
<DialogTrigger type="fullscreen">
  <ActionButton>See Details</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>Package details</Heading>
      <Divider />
      <Content>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
          amet tristique risus. In sit amet suscipit lorem. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. In condimentum imperdiet metus non condimentum. Duis
          eu velit et quam accumsan tempus at id velit. Duis elementum
          elementum purus, id tempus mauris posuere a. Nunc vestibulum sapien
          pellentesque lectus commodo ornare.
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button variant="accent" onPress={close} autoFocus>Buy</Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger type="fullscreen">
  <ActionButton>See Details</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>Package details</Heading>
      <Divider />
      <Content>
        <Text>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Proin sit amet tristique risus.
          In sit amet suscipit lorem. Orci varius natoque
          penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. In condimentum imperdiet
          metus non condimentum. Duis eu velit et quam
          accumsan tempus at id velit. Duis elementum
          elementum purus, id tempus mauris posuere a.
          Nunc vestibulum sapien pellentesque lectus
          commodo ornare.
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
          variant="accent"
          onPress={close}
          autoFocus
        >
          Buy
        </Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger type="fullscreen">
  <ActionButton>
    See Details
  </ActionButton>
  {(close) => (
    <Dialog>
      <Heading>
        Package details
      </Heading>
      <Divider />
      <Content>
        <Text>
          Lorem ipsum
          dolor sit
          amet,
          consectetur
          adipiscing
          elit. Proin
          sit amet
          tristique
          risus. In sit
          amet suscipit
          lorem. Orci
          varius
          natoque
          penatibus et
          magnis dis
          parturient
          montes,
          nascetur
          ridiculus
          mus. In
          condimentum
          imperdiet
          metus non
          condimentum.
          Duis eu velit
          et quam
          accumsan
          tempus at id
          velit. Duis
          elementum
          elementum
          purus, id
          tempus mauris
          posuere a.
          Nunc
          vestibulum
          sapien
          pellentesque
          lectus
          commodo
          ornare.
        </Text>
      </Content>
      <ButtonGroup>
        <Button
          variant="secondary"
          onPress={close}
        >
          Cancel
        </Button>
        <Button
          variant="accent"
          onPress={close}
          autoFocus
        >
          Buy
        </Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

Fullscreen takeover Dialogs are similar to the fullscreen variant except that the Dialog covers the entire screen.

```
<DialogTrigger type="fullscreenTakeover">
  <ActionButton>Register</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>Register a new account</Heading>
      <Divider />
      <Content>
        <Form>
          <TextField label="Name" />
          <TextField label="Email address" />
          <Checkbox>Make profile private</Checkbox>
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button variant="accent" onPress={close} autoFocus>Confirm</Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger type="fullscreenTakeover">
  <ActionButton>Register</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>Register a new account</Heading>
      <Divider />
      <Content>
        <Form>
          <TextField label="Name" />
          <TextField label="Email address" />
          <Checkbox>Make profile private</Checkbox>
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
          variant="accent"
          onPress={close}
          autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger type="fullscreenTakeover">
  <ActionButton>
    Register
  </ActionButton>
  {(close) => (
    <Dialog>
      <Heading>
        Register a new
        account
      </Heading>
      <Divider />
      <Content>
        <Form>
          <TextField label="Name" />
          <TextField label="Email address" />
          <Checkbox>
            Make
            profile
            private
          </Checkbox>
        </Form>
      </Content>
      <ButtonGroup>
        <Button
          variant="secondary"
          onPress={close}
        >
          Cancel
        </Button>
        <Button
          variant="accent"
          onPress={close}
          autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

If your Modal Dialog doesn't require the user to make a confirmation, you can set `isDismissable` on the DialogTrigger. This adds a close button that the user can press to dismiss the Dialog.

```
<DialogTrigger isDismissable type="modal">
  <ActionButton>User Status</ActionButton>
  <Dialog>
    <Heading>Status: Bob</Heading>
    <Divider />
    <Content>
      <Text>
        Last Login: December 12, 1989
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger isDismissable type="modal">
  <ActionButton>User Status</ActionButton>
  <Dialog>
    <Heading>Status: Bob</Heading>
    <Divider />
    <Content>
      <Text>
        Last Login: December 12, 1989
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger
  isDismissable
  type="modal"
>
  <ActionButton>
    User Status
  </ActionButton>
  <Dialog>
    <Heading>
      Status: Bob
    </Heading>
    <Divider />
    <Content>
      <Text>
        Last Login:
        December 12,
        1989
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

The `mobileType` prop allows you to specify what kind of Dialog should be displayed when viewed on mobile devices or smaller viewports. Note that on mobile, Popovers are not supported and will display as modals by default.

The example below renders as a Popover on desktop but switches to a Tray on mobile.

```
<DialogTrigger type="popover" mobileType="tray">
  <ActionButton>Info</ActionButton>
  <Dialog>
    <Heading>Version Info</Heading>
    <Divider />
    <Content>
      <Text>
        Version 1.0.0, Copyright 2020
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger type="popover" mobileType="tray">
  <ActionButton>Info</ActionButton>
  <Dialog>
    <Heading>Version Info</Heading>
    <Divider />
    <Content>
      <Text>
        Version 1.0.0, Copyright 2020
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger
  type="popover"
  mobileType="tray"
>
  <ActionButton>
    Info
  </ActionButton>
  <Dialog>
    <Heading>
      Version Info
    </Heading>
    <Divider />
    <Content>
      <Text>
        Version 1.0.0,
        Copyright 2020
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

* * *

Popover Dialogs support a variety of placement options since they do not take over the user interface like Modal or Tray Dialogs.

By default, popovers anchor themselves to their associated trigger. This can be overridden by providing a separate ref to the `targetRef` prop.

```
function Example() {
  let ref = React.useRef(null)

  return (
    <Flex gap="size-1000">
      <DialogTrigger type="popover" targetRef={ref}>
        <ActionButton>Trigger</ActionButton>
        <Dialog>
          <Heading>The Heading</Heading>
          <Divider />
          <Content>
            <Text>
              This is a popover anchored to the span.
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
      <span
        ref={ref}
        style={{width: '100px'}}>
        Popover appears over here
      </span>
    </Flex>
  );
}
```

```
function Example() {
  let ref = React.useRef(null)

  return (
    <Flex gap="size-1000">
      <DialogTrigger type="popover" targetRef={ref}>
        <ActionButton>Trigger</ActionButton>
        <Dialog>
          <Heading>The Heading</Heading>
          <Divider />
          <Content>
            <Text>
              This is a popover anchored to the span.
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
      <span
        ref={ref}
        style={{width: '100px'}}>
        Popover appears over here
      </span>
    </Flex>
  );
}
```

```
function Example() {
  let ref = React.useRef(
    null
  );

  return (
    <Flex gap="size-1000">
      <DialogTrigger
        type="popover"
        targetRef={ref}
      >
        <ActionButton>
          Trigger
        </ActionButton>
        <Dialog>
          <Heading>
            The Heading
          </Heading>
          <Divider />
          <Content>
            <Text>
              This is a
              popover
              anchored to
              the span.
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
      <span
        ref={ref}
        style={{
          width: '100px'
        }}
      >
        Popover appears
        over here
      </span>
    </Flex>
  );
}
```

The popover's placement with respect to its anchor element can be adjusted using the `placement` prop. See the props table [below](#props) for a full list of available placement combinations.

```
<DialogTrigger type="popover" placement="right top">
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>The Heading</Heading>
    <Divider />
    <Content>
      <Text>
        This is a popover placed to the right of its
        trigger and offset so the arrow is at the top of the dialog.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger type="popover" placement="right top">
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>The Heading</Heading>
    <Divider />
    <Content>
      <Text>
        This is a popover placed to the right of its
        trigger and offset so the arrow is at the top of
        the dialog.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger
  type="popover"
  placement="right top"
>
  <ActionButton>
    Trigger
  </ActionButton>
  <Dialog>
    <Heading>
      The Heading
    </Heading>
    <Divider />
    <Content>
      <Text>
        This is a
        popover placed
        to the right of
        its trigger and
        offset so the
        arrow is at the
        top of the
        dialog.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

### Offset and cross offset[#](#offset-and-cross-offset)

The Popover Dialog's offset with respect to its anchor element can be adjusted using the `offset` and `crossOffset` props. The `offset` prop controls the spacing applied along the main axis between the element and its anchor element whereas the `crossOffset` prop handles the spacing applied along the cross axis.

Below is a popover offset by an additional 50px above the trigger.

```
<DialogTrigger type="popover" placement="top" offset={50}>
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>Offset</Heading>
    <Divider />
    <Content>
      <Text>
        Offset by an additional 50px.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger type="popover" placement="top" offset={50}>
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>Offset</Heading>
    <Divider />
    <Content>
      <Text>
        Offset by an additional 50px.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger
  type="popover"
  placement="top"
  offset={50}
>
  <ActionButton>
    Trigger
  </ActionButton>
  <Dialog>
    <Heading>
      Offset
    </Heading>
    <Divider />
    <Content>
      <Text>
        Offset by an
        additional
        50px.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

Below is a popover cross offset by an additional 100px to the right of the trigger.

```
<DialogTrigger type="popover" placement="top" crossOffset={100}>
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>Cross offset</Heading>
    <Divider />
    <Content>
      <Text>
        Offset by an additional 100px.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger
  type="popover"
  placement="top"
  crossOffset={100}
>
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>Cross offset</Heading>
    <Divider />
    <Content>
      <Text>
        Offset by an additional 100px.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger
  type="popover"
  placement="top"
  crossOffset={100}
>
  <ActionButton>
    Trigger
  </ActionButton>
  <Dialog>
    <Heading>
      Cross offset
    </Heading>
    <Divider />
    <Content>
      <Text>
        Offset by an
        additional
        100px.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

By default, DialogTrigger attempts to flip popovers on the main axis in situations where the original placement would cause it to render out of view. This can be overridden by setting `shouldFlip={false}`. To see the difference between the two options, scroll this page so that the example below is near the bottom of the window.

```
<Flex gap="size-100" wrap>
  <DialogTrigger type="popover" placement="bottom">
    <ActionButton>Default DialogTrigger</ActionButton>
    <Dialog>
      <Heading>The Heading</Heading>
      <Divider />
      <Content>
        <Text>
          This is a popover that will flip if it can't fully render below the
          button.
        </Text>
      </Content>
    </Dialog>
  </DialogTrigger>
   <DialogTrigger type="popover" placement="bottom" shouldFlip={false}>
    <ActionButton>DialogTrigger with shouldFlip=false</ActionButton>
    <Dialog>
      <Heading>The Heading</Heading>
      <Divider />
      <Content>
        <Text>
          This is a popover that won't flip if it can't fully render below the
          button.
        </Text>
      </Content>
    </Dialog>
  </DialogTrigger>
</Flex>
```

```
<Flex gap="size-100" wrap>
  <DialogTrigger type="popover" placement="bottom">
    <ActionButton>Default DialogTrigger</ActionButton>
    <Dialog>
      <Heading>The Heading</Heading>
      <Divider />
      <Content>
        <Text>
          This is a popover that will flip if it can't
          fully render below the button.
        </Text>
      </Content>
    </Dialog>
  </DialogTrigger>
   <DialogTrigger
    type="popover"
    placement="bottom"
    shouldFlip={false}
  >
    <ActionButton>
      DialogTrigger with shouldFlip=false
    </ActionButton>
    <Dialog>
      <Heading>The Heading</Heading>
      <Divider />
      <Content>
        <Text>
          This is a popover that won't flip if it can't
          fully render below the button.
        </Text>
      </Content>
    </Dialog>
  </DialogTrigger>
</Flex>
```

```
<Flex
  gap="size-100"
  wrap
>
  <DialogTrigger
    type="popover"
    placement="bottom"
  >
    <ActionButton>
      Default
      DialogTrigger
    </ActionButton>
    <Dialog>
      <Heading>
        The Heading
      </Heading>
      <Divider />
      <Content>
        <Text>
          This is a
          popover that
          will flip if
          it can't
          fully render
          below the
          button.
        </Text>
      </Content>
    </Dialog>
  </DialogTrigger>
   <DialogTrigger
    type="popover"
    placement="bottom"
    shouldFlip={false}
  >
    <ActionButton>
      DialogTrigger
      with
      shouldFlip=false
    </ActionButton>
    <Dialog>
      <Heading>
        The Heading
      </Heading>
      <Divider />
      <Content>
        <Text>
          This is a
          popover that
          won't flip if
          it can't
          fully render
          below the
          button.
        </Text>
      </Content>
    </Dialog>
  </DialogTrigger>
</Flex>
```

You can control the minimum padding required between the Popover Dialog and the surrounding container via the `containerPadding` prop. This affects the positioning breakpoints that determine when the Dialog will attempt to flip.

The example below will flip the Dialog from above the trigger button to below the trigger button if the Dialog cannot render fully while maintaining 50px of padding between itself and the top of the browser.

```
<DialogTrigger type="popover" placement="top" containerPadding={50}>
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>The Heading</Heading>
    <Divider />
    <Content>
      <Text>
        This is a popover.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger
  type="popover"
  placement="top"
  containerPadding={50}
>
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>The Heading</Heading>
    <Divider />
    <Content>
      <Text>
        This is a popover.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger
  type="popover"
  placement="top"
  containerPadding={50}
>
  <ActionButton>
    Trigger
  </ActionButton>
  <Dialog>
    <Heading>
      The Heading
    </Heading>
    <Divider />
    <Content>
      <Text>
        This is a
        popover.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

* * *

DialogTrigger accepts an `onOpenChange` handler which is triggered whenever the Dialog is opened or closed.

The example below uses `onOpenChange` to update a separate element with the current open state of the Dialog.

```
function Example() {
  let [state, setState] = React.useState(false);

  return (
    <Flex alignItems="center" gap="size-100">
      <DialogTrigger
        type="popover"
        placement="top"
        onOpenChange={(isOpen) => setState(isOpen)}
      >
        <ActionButton>Whispers</ActionButton>
        <Dialog>
          <Heading>Whispers and DMs</Heading>
          <Divider />
          <Content>
            <Text>
              You have 0 new messages.
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
      <Text>Current open state: {state.toString()}</Text>
    </Flex>
  );
}
```

```
function Example() {
  let [state, setState] = React.useState(false);

  return (
    <Flex alignItems="center" gap="size-100">
      <DialogTrigger
        type="popover"
        placement="top"
        onOpenChange={(isOpen) => setState(isOpen)}
      >
        <ActionButton>Whispers</ActionButton>
        <Dialog>
          <Heading>Whispers and DMs</Heading>
          <Divider />
          <Content>
            <Text>
              You have 0 new messages.
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
      <Text>Current open state: {state.toString()}</Text>
    </Flex>
  );
}
```

```
function Example() {
  let [state, setState] =
    React.useState(
      false
    );

  return (
    <Flex
      alignItems="center"
      gap="size-100"
    >
      <DialogTrigger
        type="popover"
        placement="top"
        onOpenChange={(
          isOpen
        ) =>
          setState(
            isOpen
          )}
      >
        <ActionButton>
          Whispers
        </ActionButton>
        <Dialog>
          <Heading>
            Whispers and
            DMs
          </Heading>
          <Divider />
          <Content>
            <Text>
              You have 0
              new
              messages.
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
      <Text>
        Current open
        state:{' '}
        {state
          .toString()}
      </Text>
    </Flex>
  );
}
```

* * *

Name

Type

Default

Description

`children`

`[ [ReactElement](https://reactjs.org/docs/rendering-elements.html), [SpectrumDialogClose](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/dialog/src/index.d.ts:SpectrumDialogClose) | [ReactElement](https://reactjs.org/docs/rendering-elements.html) ]`

—

The Dialog and its trigger element. See the DialogTrigger [Content section](#content) for more information on what to provide as children.

`type`

`'modal' | 'popover' | 'tray' | 'fullscreen' | 'fullscreenTakeover'`

`'modal'`

The type of Dialog that should be rendered. See the DialogTrigger [types section](#dialog-types) for an explanation on each.

`mobileType`

`'modal' | 'tray' | 'fullscreen' | 'fullscreenTakeover'`

—

The type of Dialog that should be rendered when on a mobile device. See DialogTrigger [types section](#dialog-types) for an explanation on each.

`hideArrow`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether a popover type Dialog's arrow should be hidden.

`targetRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

—

The ref of the element the Dialog should visually attach itself to. Defaults to the trigger button if not defined.

`isDismissable`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether a modal type Dialog should be dismissable.

`isKeyboardDismissDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether pressing the escape key to close the dialog should be disabled.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

`placement`

`[Placement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/overlays/src/index.d.ts:Placement)`

`'bottom'`

The placement of the element with respect to its anchor element.

`containerPadding`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`12`

The placement padding that should be applied between the element and its surrounding container.

`offset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The additional offset applied along the main axis between the element and its anchor element.

`crossOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The additional offset applied along the cross axis between the element and its anchor element.

`shouldFlip`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.

Events

Name

Type

Description

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the overlay's open state changes.

* * *

The DialogTrigger features an overlay that transitions in and out of the page as it is opened and closed. Please see the following sections in the testing docs for more information on how to handle these behaviors in your test suite.

[Timers](https://react-spectrum.adobe.com/react-spectrum/testing.html#timers)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/dialog/test/DialogTrigger.test.js) if you find that the above isn't sufficient when resolving issues in your own test cases.
