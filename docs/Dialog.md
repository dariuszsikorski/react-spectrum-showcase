---
source: https://react-spectrum.adobe.com/react-spectrum/Dialog.html
date: Thu, 16 Oct 2025 01:28:21 GMT
---

Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface. Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.

* * *

```
import {ActionButton, Button, ButtonGroup, Content, Dialog, DialogTrigger, Divider, Header, Heading, Text} from '@adobe/react-spectrum';

<DialogTrigger>
  <ActionButton>Check connectivity</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>Internet Speed Test</Heading>
      <Header>Connection status: Connected</Header>
      <Divider />
      <Content>
        <Text>
          Start speed test?
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button variant="accent" onPress={close}>Confirm</Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

```
import {
  ActionButton,
  Button,
  ButtonGroup,
  Content,
  Dialog,
  DialogTrigger,
  Divider,
  Header,
  Heading,
  Text
} from '@adobe/react-spectrum';

<DialogTrigger>
  <ActionButton>Check connectivity</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>Internet Speed Test</Heading>
      <Header>Connection status: Connected</Header>
      <Divider />
      <Content>
        <Text>
          Start speed test?
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button variant="accent" onPress={close}>
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

```
import {
  ActionButton,
  Button,
  ButtonGroup,
  Content,
  Dialog,
  DialogTrigger,
  Divider,
  Header,
  Heading,
  Text
} from '@adobe/react-spectrum';

<DialogTrigger>
  <ActionButton>
    Check connectivity
  </ActionButton>
  {(close) => (
    <Dialog>
      <Heading>
        Internet Speed
        Test
      </Heading>
      <Header>
        Connection
        status:
        Connected
      </Header>
      <Divider />
      <Content>
        <Text>
          Start speed
          test?
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
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

## Content[#](#content)

* * *

A standard Dialog has the following anatomy:

Body areaTitle areaFooter content area (optional)Header content area (optional)Button group areaHeaderFooterBodyDivider

These sections can be populated by providing the following components to your Dialog as children: [Header](https://react-spectrum.adobe.com/react-spectrum/Header.html), [Heading](https://react-spectrum.adobe.com/react-spectrum/Heading.html) (title), [Divider](https://react-spectrum.adobe.com/react-spectrum/Divider.html), [Content](https://react-spectrum.adobe.com/react-spectrum/Content.html) (body), [ButtonGroup](https://react-spectrum.adobe.com/react-spectrum/ButtonGroup.html), and [Footer](https://react-spectrum.adobe.com/react-spectrum/Footer.html). Each of these components are required in a Spectrum compliant Dialog except for `Header`, `Footer`, and `Divider` so be sure to design your Dialog accordingly.

A typical Dialog with a title, contents, and action buttons can be created like so:

```
<DialogTrigger>
  <ActionButton>Publish</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>Publish 3 pages</Heading>
      <Divider />
      <Content>Confirm publish?</Content>
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
  <ActionButton>Publish</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>Publish 3 pages</Heading>
      <Divider />
      <Content>Confirm publish?</Content>
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
    Publish
  </ActionButton>
  {(close) => (
    <Dialog>
      <Heading>
        Publish 3 pages
      </Heading>
      <Divider />
      <Content>
        Confirm
        publish?
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

A dismissable Dialog forgoes its ButtonGroup in favor of rendering a close button at the top right of the Dialog.

```
<DialogTrigger isDismissable>
  <ActionButton>Status</ActionButton>
  <Dialog>
    <Heading>Status</Heading>
    <Divider />
    <Content>Printer Status: Connected</Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger isDismissable>
  <ActionButton>Status</ActionButton>
  <Dialog>
    <Heading>Status</Heading>
    <Divider />
    <Content>Printer Status: Connected</Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger
  isDismissable
>
  <ActionButton>
    Status
  </ActionButton>
  <Dialog>
    <Heading>
      Status
    </Heading>
    <Divider />
    <Content>
      Printer Status:
      Connected
    </Content>
  </Dialog>
</DialogTrigger>
```

It is important to note that the `Heading`, `Header`, `Content`, and `Footer` content elements accept any renderable node, not just strings. This allows you to create Dialogs for more complex workflows, such as including a form for the user to fill out or adding confirmation checkboxes.

```
<DialogTrigger>
  <ActionButton>Register</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>
        <Flex alignItems="center" gap="size-100">
          <Book size="S" />
          <Text>
            Register for newsletter
          </Text>
        </Flex>
      </Heading>
      <Header>
        <Link>
          <a href="//example.com" target="_blank">What is this?</a>
        </Link>
      </Header>
      <Divider />
      <Content>
        <Form>
          <TextField label="First Name" autoFocus />
          <TextField label="Last Name" />
          <TextField label="Street Address" />
          <TextField label="City" />
        </Form>
      </Content>
      <Footer>
        <Checkbox>
          I want to receive updates for exclusive offers in my area.
        </Checkbox>
      </Footer>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button variant="accent" onPress={close}>Register</Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Register</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>
        <Flex alignItems="center" gap="size-100">
          <Book size="S" />
          <Text>
            Register for newsletter
          </Text>
        </Flex>
      </Heading>
      <Header>
        <Link>
          <a href="//example.com" target="_blank">
            What is this?
          </a>
        </Link>
      </Header>
      <Divider />
      <Content>
        <Form>
          <TextField label="First Name" autoFocus />
          <TextField label="Last Name" />
          <TextField label="Street Address" />
          <TextField label="City" />
        </Form>
      </Content>
      <Footer>
        <Checkbox>
          I want to receive updates for exclusive offers
          in my area.
        </Checkbox>
      </Footer>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button variant="accent" onPress={close}>
          Register
        </Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    Register
  </ActionButton>
  {(close) => (
    <Dialog>
      <Heading>
        <Flex
          alignItems="center"
          gap="size-100"
        >
          <Book size="S" />
          <Text>
            Register
            for
            newsletter
          </Text>
        </Flex>
      </Heading>
      <Header>
        <Link>
          <a
            href="//example.com"
            target="_blank"
          >
            What is
            this?
          </a>
        </Link>
      </Header>
      <Divider />
      <Content>
        <Form>
          <TextField
            label="First Name"
            autoFocus
          />
          <TextField label="Last Name" />
          <TextField label="Street Address" />
          <TextField label="City" />
        </Form>
      </Content>
      <Footer>
        <Checkbox>
          I want to
          receive
          updates for
          exclusive
          offers in my
          area.
        </Checkbox>
      </Footer>
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
        >
          Register
        </Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
```

The example below illustrates how a Dialog with a hero image could be rendered via the `hero` slot:

```
<DialogTrigger>
  <ActionButton>Upload</ActionButton>
  {(close) => (
    <Dialog>
      <Image
        slot="hero"
        alt=""
        src="https://i.imgur.com/Z7AzH2c.png"
        objectFit="cover"
      />
      <Heading>Upload file</Heading>
      <Divider />
      <Content>Are you sure you want to upload this file?</Content>
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
  <ActionButton>Upload</ActionButton>
  {(close) => (
    <Dialog>
      <Image
        slot="hero"
        alt=""
        src="https://i.imgur.com/Z7AzH2c.png"
        objectFit="cover"
      />
      <Heading>Upload file</Heading>
      <Divider />
      <Content>
        Are you sure you want to upload this file?
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
    Upload
  </ActionButton>
  {(close) => (
    <Dialog>
      <Image
        slot="hero"
        alt=""
        src="https://i.imgur.com/Z7AzH2c.png"
        objectFit="cover"
      />
      <Heading>
        Upload file
      </Heading>
      <Divider />
      <Content>
        Are you sure
        you want to
        upload this
        file?
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

Keep in mind when creating your Dialog that the tab order within the Dialog follows the order of the children provided. You are also responsible for determining what component, if any, should be automatically focused when the Dialog opens.

* * *

The title of a Dialog is typically provided via its heading. By default, the Dialog sets its `aria-labelledby` to match the heading `id`, but this can be overridden by providing an `aria-labelledby` prop to the Dialog directly. If a visible label isn't specified, an `aria-label` must be provided instead.

* * *

For Dialogs, user defined callbacks should be chained with the DialogTrigger's `close` function in the `onPress` handler of the Dialog's action buttons. The following example alerts if the Dialog's save or cancel button is clicked.

```
function Example() {
  let alertSave = (close) => {
    close();
    alert('Profile saved!');
  };

  let alertCancel = (close) => {
    close();
    alert('Profile not saved!');
  };

  return (
    <DialogTrigger>
      <ActionButton>Set Profile</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Profile</Heading>
          <Divider />
          <ButtonGroup>
            <Button variant="secondary" onPress={() => alertCancel(close)}>
              Cancel
            </Button>
            <Button autoFocus variant="accent" onPress={() => alertSave(close)}>
              Save
            </Button>
          </ButtonGroup>
          <Content>
            <Form>
              <TextField label="Name" />
              <Checkbox>Make private</Checkbox>
            </Form>
          </Content>
        </Dialog>
      )}
    </DialogTrigger>
  );
}
```

```
function Example() {
  let alertSave = (close) => {
    close();
    alert('Profile saved!');
  };

  let alertCancel = (close) => {
    close();
    alert('Profile not saved!');
  };

  return (
    <DialogTrigger>
      <ActionButton>Set Profile</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Profile</Heading>
          <Divider />
          <ButtonGroup>
            <Button
              variant="secondary"
              onPress={() => alertCancel(close)}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              variant="accent"
              onPress={() => alertSave(close)}
            >
              Save
            </Button>
          </ButtonGroup>
          <Content>
            <Form>
              <TextField label="Name" />
              <Checkbox>Make private</Checkbox>
            </Form>
          </Content>
        </Dialog>
      )}
    </DialogTrigger>
  );
}
```

```
function Example() {
  let alertSave = (
    close
  ) => {
    close();
    alert(
      'Profile saved!'
    );
  };

  let alertCancel = (
    close
  ) => {
    close();
    alert(
      'Profile not saved!'
    );
  };

  return (
    <DialogTrigger>
      <ActionButton>
        Set Profile
      </ActionButton>
      {(close) => (
        <Dialog>
          <Heading>
            Profile
          </Heading>
          <Divider />
          <ButtonGroup>
            <Button
              variant="secondary"
              onPress={() =>
                alertCancel(
                  close
                )}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              variant="accent"
              onPress={() =>
                alertSave(
                  close
                )}
            >
              Save
            </Button>
          </ButtonGroup>
          <Content>
            <Form>
              <TextField label="Name" />
              <Checkbox>
                Make
                private
              </Checkbox>
            </Form>
          </Content>
        </Dialog>
      )}
    </DialogTrigger>
  );
}
```

Additionally, DialogTrigger accepts an `onOpenChange` prop which is triggered whenever the Dialog is opened or closed. For more information, see the [DialogTrigger docs](https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html#events).

Dismissable Dialogs support an optional `onDismiss` prop which is triggered whenever the Dialog's close button is clicked. Similar to non-dismissable dialogs, you must chain the DialogTrigger's `close` function with whatever callback you provide as `onDismiss`. If this event callback is not needed, the dismissiable dialog will behave as normal without passing this callback through.

```
function Example() {
  let alertDismiss = (close) => {
    close();
    alert('Dialog dismissed.');
  }
  return (
    <DialogTrigger isDismissable>
      <ActionButton>Info</ActionButton>
      {(close) => (
        <Dialog onDismiss={() => alertDismiss(close)}>
          <Heading>Version Info</Heading>
          <Divider />
          <Content>
            <Text>
              Version 1.0.0, Copyright 2020
            </Text>
          </Content>
        </Dialog>
        )}
    </DialogTrigger>
  );
}
```

```
function Example() {
  let alertDismiss = (close) => {
    close();
    alert('Dialog dismissed.');
  }
  return (
    <DialogTrigger isDismissable>
      <ActionButton>Info</ActionButton>
      {(close) => (
        <Dialog onDismiss={() => alertDismiss(close)}>
          <Heading>Version Info</Heading>
          <Divider />
          <Content>
            <Text>
              Version 1.0.0, Copyright 2020
            </Text>
          </Content>
        </Dialog>
        )}
    </DialogTrigger>
  );
}
```

```
function Example() {
  let alertDismiss = (
    close
  ) => {
    close();
    alert(
      'Dialog dismissed.'
    );
  };
  return (
    <DialogTrigger
      isDismissable
    >
      <ActionButton>
        Info
      </ActionButton>
      {(close) => (
        <Dialog
          onDismiss={() =>
            alertDismiss(
              close
            )}
        >
          <Heading>
            Version Info
          </Heading>
          <Divider />
          <Content>
            <Text>
              Version
              1.0.0,
              Copyright
              2020
            </Text>
          </Content>
        </Dialog>
      )}
    </DialogTrigger>
  );
}
```

**Note:** The `onDismiss` callback is optional. If you don't need to add a `onDismiss` handler to your dismissable Dialog, you may omit the wrapping `close` function surrounding the Dialog. An example of this can be found in the Examples section [above](#examples).

* * *

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The contents of the Dialog.

`size`

`'S' | 'M' | 'L'`

The size of the Dialog. Only applies to "modal" type Dialogs.

`isDismissable`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the Dialog is dismissable. See the [examples](#examples) for more details.

Events

Name

Type

Description

`onDismiss`

`() => void`

Handler that is called when the 'x' button of a dismissable Dialog is clicked.

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

Default

Description

`role`

`'dialog' | 'alertdialog'`

`'dialog'`

The accessibility role for the dialog.

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Defines a string value that labels the current element.

`aria-labelledby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Identifies the element (or elements) that labels the current element.

`aria-describedby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Identifies the element (or elements) that describes the object.

`aria-details`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

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

Dialogs can be rendered as modals, popovers, or trays. Note that popovers are displayed as modals by default on mobile. See the [DialogTrigger docs](https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html#dialog-types) for more information.

```
<DialogTrigger isDismissable type="modal">
  <ActionButton>Trigger Modal</ActionButton>
  <Dialog>
    <Heading>Modal</Heading>
    <Divider />
    <Content>
      <Text>
        This is a modal.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger isDismissable type="modal">
  <ActionButton>Trigger Modal</ActionButton>
  <Dialog>
    <Heading>Modal</Heading>
    <Divider />
    <Content>
      <Text>
        This is a modal.
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
    Trigger Modal
  </ActionButton>
  <Dialog>
    <Heading>
      Modal
    </Heading>
    <Divider />
    <Content>
      <Text>
        This is a
        modal.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger type="popover">
  <ActionButton>Trigger Popover</ActionButton>
  <Dialog>
    <Heading>Popover</Heading>
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
<DialogTrigger type="popover">
  <ActionButton>Trigger Popover</ActionButton>
  <Dialog>
    <Heading>Popover</Heading>
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
<DialogTrigger type="popover">
  <ActionButton>
    Trigger Popover
  </ActionButton>
  <Dialog>
    <Heading>
      Popover
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

```
<DialogTrigger type="tray">
  <ActionButton>Trigger Tray</ActionButton>
  <Dialog>
    <Heading>Tray</Heading>
    <Divider />
    <Content>
      <Text>
        This is a tray.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger type="tray">
  <ActionButton>Trigger Tray</ActionButton>
  <Dialog>
    <Heading>Tray</Heading>
    <Divider />
    <Content>
      <Text>
        This is a tray.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

```
<DialogTrigger type="tray">
  <ActionButton>
    Trigger Tray
  </ActionButton>
  <Dialog>
    <Heading>
      Tray
    </Heading>
    <Divider />
    <Content>
      <Text>
        This is a tray.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
```

Only `modal` type Dialogs support a user defined size prop. Note that the `fullscreen` and `fullscreenTakeover` sizes require the [DialogTrigger `type`](https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html#dialog-types) prop to be set to `fullscreen` or `fullscreenTakeover` respectively for container sizing considerations. Modal sizes on mobile devices are also unaffected by this prop due to screen constraints.

```
<DialogTrigger>
  <ActionButton>Small</ActionButton>
  {(close) => (
    <Dialog size="S">
      <Heading>Profile</Heading>
      <Divider />
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button autoFocus variant="accent" onPress={close}>Save</Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name" />
          <Checkbox>Make private</Checkbox>
        </Form>
      </Content>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Small</ActionButton>
  {(close) => (
    <Dialog size="S">
      <Heading>Profile</Heading>
      <Divider />
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
          autoFocus
          variant="accent"
          onPress={close}
        >
          Save
        </Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name" />
          <Checkbox>Make private</Checkbox>
        </Form>
      </Content>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    Small
  </ActionButton>
  {(close) => (
    <Dialog size="S">
      <Heading>
        Profile
      </Heading>
      <Divider />
      <ButtonGroup>
        <Button
          variant="secondary"
          onPress={close}
        >
          Cancel
        </Button>
        <Button
          autoFocus
          variant="accent"
          onPress={close}
        >
          Save
        </Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name" />
          <Checkbox>
            Make
            private
          </Checkbox>
        </Form>
      </Content>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Medium</ActionButton>
  {(close) => (
    <Dialog size="M">
      <Heading>Profile</Heading>
      <Divider />
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button autoFocus variant="accent" onPress={close}>Save</Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name" />
          <Checkbox>Make private</Checkbox>
        </Form>
      </Content>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Medium</ActionButton>
  {(close) => (
    <Dialog size="M">
      <Heading>Profile</Heading>
      <Divider />
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
          autoFocus
          variant="accent"
          onPress={close}
        >
          Save
        </Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name" />
          <Checkbox>Make private</Checkbox>
        </Form>
      </Content>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    Medium
  </ActionButton>
  {(close) => (
    <Dialog size="M">
      <Heading>
        Profile
      </Heading>
      <Divider />
      <ButtonGroup>
        <Button
          variant="secondary"
          onPress={close}
        >
          Cancel
        </Button>
        <Button
          autoFocus
          variant="accent"
          onPress={close}
        >
          Save
        </Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name" />
          <Checkbox>
            Make
            private
          </Checkbox>
        </Form>
      </Content>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Large</ActionButton>
  {(close) => (
    <Dialog size="L">
      <Heading>Profile</Heading>
      <Divider />
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button autoFocus variant="accent" onPress={close}>Save</Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name" />
          <Checkbox>Make private</Checkbox>
        </Form>
      </Content>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>Large</ActionButton>
  {(close) => (
    <Dialog size="L">
      <Heading>Profile</Heading>
      <Divider />
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
          autoFocus
          variant="accent"
          onPress={close}
        >
          Save
        </Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name" />
          <Checkbox>Make private</Checkbox>
        </Form>
      </Content>
    </Dialog>
  )}
</DialogTrigger>
```

```
<DialogTrigger>
  <ActionButton>
    Large
  </ActionButton>
  {(close) => (
    <Dialog size="L">
      <Heading>
        Profile
      </Heading>
      <Divider />
      <ButtonGroup>
        <Button
          variant="secondary"
          onPress={close}
        >
          Cancel
        </Button>
        <Button
          autoFocus
          variant="accent"
          onPress={close}
        >
          Save
        </Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name" />
          <Checkbox>
            Make
            private
          </Checkbox>
        </Form>
      </Content>
    </Dialog>
  )}
</DialogTrigger>
```
