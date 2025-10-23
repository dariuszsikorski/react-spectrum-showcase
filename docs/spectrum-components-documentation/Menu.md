---
source: https://react-spectrum.adobe.com/react-spectrum/Menu.html
date: Thu, 16 Oct 2025 01:07:57 GMT
---

Menus display a list of actions or options that a user can choose.

* * *

```
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu onAction={(key) => alert(key)}>
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
    <Item key="replace">Replace</Item>
  </Menu>
</MenuTrigger>
```

```
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu onAction={(key) => alert(key)}>
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
    <Item key="replace">Replace</Item>
  </Menu>
</MenuTrigger>
```

```
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu
    onAction={(key) =>
      alert(key)}
  >
    <Item key="cut">
      Cut
    </Item>
    <Item key="copy">
      Copy
    </Item>
    <Item key="paste">
      Paste
    </Item>
    <Item key="replace">
      Replace
    </Item>
  </Menu>
</MenuTrigger>
```

## Content[#](#content)

* * *

Menu follows the [Collection Components](https://react-spectrum.adobe.com/react-stately/collections.html) API, accepting both static and dynamic collections. Similar to [Picker](https://react-spectrum.adobe.com/react-spectrum/Picker.html), Menu accepts `<Item>` elements as children, each with a `key` prop. Basic usage of Menu, seen in the example above, shows multiple items populated with a string. Static collections, as in this example, can be used when the full list of items is known ahead of time.

Dynamic collections, as shown below, can be used when the items come from an external data source such as an API call, or update over time. Providing the data in this way allows for Menu to automatically cache the rendering of each item, which dramatically improves performance.

As seen below, an iterable list of items is passed to the Menu using the `items` prop. Each item accepts a `key` prop, which is passed to the event handler to identify the selected item. Alternatively, if the item objects contain an id property, this is then used automatically and a key prop is not required. See the [Events](#events) section for more detail on selection and actions.

```
function Example() {
  let menuItems = [
    {name: 'Cut'},
    {name: 'Copy'},
    {name: 'Paste'},
    {name: 'Replace'}
  ];

  return (
    <MenuTrigger>
      <ActionButton>
        Edit
      </ActionButton>
      <Menu items={menuItems}>
        {item => <Item key={item.name}>{item.name}</Item>}
      </Menu>
    </MenuTrigger>
  );
}
```

```
function Example() {
  let menuItems = [
    {name: 'Cut'},
    {name: 'Copy'},
    {name: 'Paste'},
    {name: 'Replace'}
  ];

  return (
    <MenuTrigger>
      <ActionButton>
        Edit
      </ActionButton>
      <Menu items={menuItems}>
        {item => <Item key={item.name}>{item.name}</Item>}
      </Menu>
    </MenuTrigger>
  );
}
```

```
function Example() {
  let menuItems = [
    { name: 'Cut' },
    { name: 'Copy' },
    { name: 'Paste' },
    { name: 'Replace' }
  ];

  return (
    <MenuTrigger>
      <ActionButton>
        Edit
      </ActionButton>
      <Menu
        items={menuItems}
      >
        {(item) => (
          <Item
            key={item
              .name}
          >
            {item.name}
          </Item>
        )}
      </Menu>
    </MenuTrigger>
  );
}
```

On mobile, Menus automatically display in a tray instead of a popover to improve usability.

In order to internationalize a Menu, the content provided to all child items should be localized. For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of the Menu is flipped.

* * *

Use the `onSelectionChange` prop as a callback to handle press events on items when selectionMode is either single or multiple. See [Selection](#selection) for more information.

Menu also supports the `onAction` callback when `selectionMode` is `none` (default).

```
function Example() {
  let [action, setAction] = React.useState(null);

  return (
    <>
      <MenuTrigger>
        <ActionButton>
          Edit
        </ActionButton>
        <Menu onAction={setAction}>
          <Item key="cut">Cut</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
        </Menu>
      </MenuTrigger>
      <p>Action: {action}</p>
    </>
  );
}
```

```
function Example() {
  let [action, setAction] = React.useState(null);

  return (
    <>
      <MenuTrigger>
        <ActionButton>
          Edit
        </ActionButton>
        <Menu onAction={setAction}>
          <Item key="cut">Cut</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
        </Menu>
      </MenuTrigger>
      <p>Action: {action}</p>
    </>
  );
}
```

```
function Example() {
  let [
    action,
    setAction
  ] = React.useState(
    null
  );

  return (
    <>
      <MenuTrigger>
        <ActionButton>
          Edit
        </ActionButton>
        <Menu
          onAction={setAction}
        >
          <Item key="cut">
            Cut
          </Item>
          <Item key="copy">
            Copy
          </Item>
          <Item key="paste">
            Paste
          </Item>
        </Menu>
      </MenuTrigger>
      <p>
        Action: {action}
      </p>
    </>
  );
}
```

* * *

Menu supports multiple selection modes. By default, selection is disabled, however this can be changed using the `selectionMode` prop. Use `defaultSelectedKeys` to provide a default set of selected items (uncontrolled) and `selectedKeys` to set the selected items (controlled). The value of the selected keys must match the `key` prop of the items. See the `react-stately` [Selection docs](https://react-spectrum.adobe.com/react-stately/selection.html#selected-key-data-type) for caveats regarding selection prop typing.

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(new Set(['middle']));

  return (
    <>
      <MenuTrigger>
        <ActionButton>
          Align
        </ActionButton>
        <Menu
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <Item key="left">Left</Item>
          <Item key="middle">Middle</Item>
          <Item key="right">Right</Item>
        </Menu>
      </MenuTrigger>
      <p>Current selection (controlled): {[...selected]}</p>
    </>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(['middle'])
  );

  return (
    <>
      <MenuTrigger>
        <ActionButton>
          Align
        </ActionButton>
        <Menu
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <Item key="left">Left</Item>
          <Item key="middle">Middle</Item>
          <Item key="right">Right</Item>
        </Menu>
      </MenuTrigger>
      <p>Current selection (controlled): {[...selected]}</p>
    </>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [
    selected,
    setSelected
  ] = React.useState<
    Selection
  >(new Set(['middle']));

  return (
    <>
      <MenuTrigger>
        <ActionButton>
          Align
        </ActionButton>
        <Menu
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <Item key="left">
            Left
          </Item>
          <Item key="middle">
            Middle
          </Item>
          <Item key="right">
            Right
          </Item>
        </Menu>
      </MenuTrigger>
      <p>
        Current selection
        (controlled):
        {' '}
        {[...selected]}
      </p>
    </>
  );
}
```

Set `selectionMode` prop to `multiple` to allow more than one selection.

```
function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(['Sidebar', 'Console'])
  );

  return (
    <>
      <MenuTrigger closeOnSelect={false}>
        <ActionButton>
          Show
        </ActionButton>
        <Menu
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <Item key="Sidebar">Sidebar</Item>
          <Item key="Searchbar">Searchbar</Item>
          <Item key="Tools">Tools</Item>
          <Item key="Console">Console</Item>
        </Menu>
      </MenuTrigger>
      <p>
        Current selection (controlled):{' '}
        {selected === 'all' ? 'all' : [...selected].join(', ')}
      </p>
    </>
  );
}
```

```
function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(['Sidebar', 'Console'])
  );

  return (
    <>
      <MenuTrigger closeOnSelect={false}>
        <ActionButton>
          Show
        </ActionButton>
        <Menu
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <Item key="Sidebar">Sidebar</Item>
          <Item key="Searchbar">Searchbar</Item>
          <Item key="Tools">Tools</Item>
          <Item key="Console">Console</Item>
        </Menu>
      </MenuTrigger>
      <p>
        Current selection (controlled): {selected === 'all'
          ? 'all'
          : [...selected].join(', ')}
      </p>
    </>
  );
}
```

```
function Example() {
  let [
    selected,
    setSelected
  ] = React.useState<
    Selection
  >(
    new Set([
      'Sidebar',
      'Console'
    ])
  );

  return (
    <>
      <MenuTrigger
        closeOnSelect={false}
      >
        <ActionButton>
          Show
        </ActionButton>
        <Menu
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <Item key="Sidebar">
            Sidebar
          </Item>
          <Item key="Searchbar">
            Searchbar
          </Item>
          <Item key="Tools">
            Tools
          </Item>
          <Item key="Console">
            Console
          </Item>
        </Menu>
      </MenuTrigger>
      <p>
        Current selection
        (controlled):
        {' '}
        {selected ===
            'all'
          ? 'all'
          : [...selected]
            .join(', ')}
      </p>
    </>
  );
}
```

* * *

By default, interacting with an item in a Menu triggers `onAction` and optionally `onSelectionChange` depending on the `selectionMode`. Alternatively, items may be links to another page or website. This can be achieved by passing the `href` prop to the `<Item>` component. Link items in a menu are not selectable.

```
<MenuTrigger>
  <ActionButton>Links</ActionButton>
  <Menu>
    <Item href="https://adobe.com/" target="_blank">Adobe</Item>
    <Item href="https://apple.com/" target="_blank">Apple</Item>
    <Item href="https://google.com/" target="_blank">Google</Item>
    <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
  </Menu>
</MenuTrigger>
```

```
<MenuTrigger>
  <ActionButton>Links</ActionButton>
  <Menu>
    <Item href="https://adobe.com/" target="_blank">
      Adobe
    </Item>
    <Item href="https://apple.com/" target="_blank">
      Apple
    </Item>
    <Item href="https://google.com/" target="_blank">
      Google
    </Item>
    <Item href="https://microsoft.com/" target="_blank">
      Microsoft
    </Item>
  </Menu>
</MenuTrigger>
```

```
<MenuTrigger>
  <ActionButton>
    Links
  </ActionButton>
  <Menu>
    <Item
      href="https://adobe.com/"
      target="_blank"
    >
      Adobe
    </Item>
    <Item
      href="https://apple.com/"
      target="_blank"
    >
      Apple
    </Item>
    <Item
      href="https://google.com/"
      target="_blank"
    >
      Google
    </Item>
    <Item
      href="https://microsoft.com/"
      target="_blank"
    >
      Microsoft
    </Item>
  </Menu>
</MenuTrigger>
```

The `<Item>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Spectrum components that support links, this works via the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-spectrum/routing.html) to learn how to set this up.

* * *

Menu supports sections in order to group options. Sections can be used by wrapping groups of Items in a `Section` component. Each `Section` takes a `title` and `key` prop.

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(['bold', 'left'])
  );

  return (
    <MenuTrigger>
      <ActionButton>
        Edit
      </ActionButton>
      <Menu
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Section title="Styles">
          <Item key="bold">Bold</Item>
          <Item key="underline">Underline</Item>
        </Section>
        <Section title="Align">
          <Item key="left">Left</Item>
          <Item key="middle">Middle</Item>
          <Item key="right">Right</Item>
        </Section>
      </Menu>
    </MenuTrigger>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(['bold', 'left'])
  );

  return (
    <MenuTrigger>
      <ActionButton>
        Edit
      </ActionButton>
      <Menu
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Section title="Styles">
          <Item key="bold">Bold</Item>
          <Item key="underline">Underline</Item>
        </Section>
        <Section title="Align">
          <Item key="left">Left</Item>
          <Item key="middle">Middle</Item>
          <Item key="right">Right</Item>
        </Section>
      </Menu>
    </MenuTrigger>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [
    selected,
    setSelected
  ] = React.useState<
    Selection
  >(
    new Set([
      'bold',
      'left'
    ])
  );

  return (
    <MenuTrigger>
      <ActionButton>
        Edit
      </ActionButton>
      <Menu
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Section title="Styles">
          <Item key="bold">
            Bold
          </Item>
          <Item key="underline">
            Underline
          </Item>
        </Section>
        <Section title="Align">
          <Item key="left">
            Left
          </Item>
          <Item key="middle">
            Middle
          </Item>
          <Item key="right">
            Right
          </Item>
        </Section>
      </Menu>
    </MenuTrigger>
  );
}
```

Sections used with dynamic items are populated from a hierarchical data structure. Similarly to the props on Menu, `<Section>` takes an array of data using the `items` prop.

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(new Set([1,3]));
  let openWindows = [
    {
      name: 'Left Panel',
      id: 'left',
      children: [
        {id: 1, name: 'Final Copy (1)'}
      ]
    },
    {
      name: 'Right Panel',
      id: 'right',
      children: [
        {id: 2, name: 'index.ts'},
        {id: 3, name: 'package.json'},
        {id: 4, name: 'license.txt'}
      ]
    }
  ];

  return (
    <MenuTrigger>
      <ActionButton>
        Window
      </ActionButton>
      <Menu
        items={openWindows}
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}>
        {item => (
          <Section items={item.children} title={item.name}>
            {item => <Item>{item.name}</Item>}
          </Section>
        )}
      </Menu>
    </MenuTrigger>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set([1, 3])
  );
  let openWindows = [
    {
      name: 'Left Panel',
      id: 'left',
      children: [
        { id: 1, name: 'Final Copy (1)' }
      ]
    },
    {
      name: 'Right Panel',
      id: 'right',
      children: [
        { id: 2, name: 'index.ts' },
        { id: 3, name: 'package.json' },
        { id: 4, name: 'license.txt' }
      ]
    }
  ];

  return (
    <MenuTrigger>
      <ActionButton>
        Window
      </ActionButton>
      <Menu
        items={openWindows}
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        {(item) => (
          <Section items={item.children} title={item.name}>
            {(item) => <Item>{item.name}</Item>}
          </Section>
        )}
      </Menu>
    </MenuTrigger>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [
    selected,
    setSelected
  ] = React.useState<
    Selection
  >(new Set([1, 3]));
  let openWindows = [
    {
      name: 'Left Panel',
      id: 'left',
      children: [
        {
          id: 1,
          name:
            'Final Copy (1)'
        }
      ]
    },
    {
      name:
        'Right Panel',
      id: 'right',
      children: [
        {
          id: 2,
          name:
            'index.ts'
        },
        {
          id: 3,
          name:
            'package.json'
        },
        {
          id: 4,
          name:
            'license.txt'
        }
      ]
    }
  ];

  return (
    <MenuTrigger>
      <ActionButton>
        Window
      </ActionButton>
      <Menu
        items={openWindows}
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        {(item) => (
          <Section
            items={item
              .children}
            title={item
              .name}
          >
            {(item) => (
              <Item>
                {item
                  .name}
              </Item>
            )}
          </Section>
        )}
      </Menu>
    </MenuTrigger>
  );
}
```

Sections without a `title` must provide an `aria-label` for accessibility.

* * *

Items within Menu also allow for additional content used to better communicate options. Icons and descriptions can be added to the `children` of `Item` as shown in the example below. If a description is added, the prop `slot="description"` must be used to distinguish the different `<Text>` elements.

```
import {Keyboard, Text} from '@adobe/react-spectrum';
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item key="cut" textValue="cut">
      <Cut />
      <Text>Cut</Text>
      <Keyboard>⌘X</Keyboard>
    </Item>
    <Item key="copy" textValue="copy">
      <Copy />
      <Text>Copy</Text>
      <Keyboard>⌘C</Keyboard>
    </Item>
    <Item key="paste" textValue="paste">
      <Paste />
      <Text>Paste</Text>
      <Keyboard>⌘V</Keyboard>
    </Item>
  </Menu>
</MenuTrigger>
```

```
import {Keyboard, Text} from '@adobe/react-spectrum';
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item key="cut" textValue="cut">
      <Cut />
      <Text>Cut</Text>
      <Keyboard>⌘X</Keyboard>
    </Item>
    <Item key="copy" textValue="copy">
      <Copy />
      <Text>Copy</Text>
      <Keyboard>⌘C</Keyboard>
    </Item>
    <Item key="paste" textValue="paste">
      <Paste />
      <Text>Paste</Text>
      <Keyboard>⌘V</Keyboard>
    </Item>
  </Menu>
</MenuTrigger>
```

```
import {
  Keyboard,
  Text
} from '@adobe/react-spectrum';
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item
      key="cut"
      textValue="cut"
    >
      <Cut />
      <Text>Cut</Text>
      <Keyboard>
        ⌘X
      </Keyboard>
    </Item>
    <Item
      key="copy"
      textValue="copy"
    >
      <Copy />
      <Text>Copy</Text>
      <Keyboard>
        ⌘C
      </Keyboard>
    </Item>
    <Item
      key="paste"
      textValue="paste"
    >
      <Paste />
      <Text>
        Paste
      </Text>
      <Keyboard>
        ⌘V
      </Keyboard>
    </Item>
  </Menu>
</MenuTrigger>
```

* * *

ContextualHelpTrigger disables a menu item's action and replaces it with a popover with information on why the item is unavailable and may link users to more information elsewhere.

The ContextualHelpTrigger accepts exactly two children: the `Item` which triggers opening of the Dialog and the Dialog itself. The trigger must be the first child passed into the ContextualHelpTrigger and should be an `Item`. Similar to ContextualHelp, the layout of the Dialog is very deliberate. See [ContextualHelp](https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html#content) for further explanation.

By default, a ContextualHelpTrigger's Dialog is opened by hovering, pressing the trigger element or activating it via the Space, Enter, or Right Arrow keys. Hovering another item or pressing the Esc key will close the Dialog and leave the Menu open.

Setting the `isUnavailable` prop on the ContextualHelpTrigger makes the menu item unavailable and enables the Dialog with contextual help, allowing for programmatic control.

Note that the Menu's `onAction` and `onSelectionChange` callbacks will not fire for items made unavailable by a ContextualHelpTrigger.

The example below illustrates how one would setup a Menu to use ContextualHelpTrigger.

```
import {Content, Dialog, Heading} from '@adobe/react-spectrum';
import {ContextualHelpTrigger} from '@react-spectrum/menu';

<MenuTrigger>
  <ActionButton>Edit</ActionButton>
  <Menu>
    <Item key="undo">Undo</Item>
    <Item key="redo">Redo</Item>
    <ContextualHelpTrigger isUnavailable>
      <Item key="cut">Cut</Item>
      <Dialog>
        <Heading>Cut</Heading>
        <Content>Please select text for 'Cut' to be enabled.</Content>
      </Dialog>
    </ContextualHelpTrigger>
    <ContextualHelpTrigger isUnavailable>
      <Item key="copy">Copy</Item>
      <Dialog>
        <Heading>Copy</Heading>
        <Content>Please select text for 'Copy' to be enabled.</Content>
      </Dialog>
    </ContextualHelpTrigger>
    <ContextualHelpTrigger>
      <Item key="paste">Paste</Item>
      <Dialog>
        <Heading>Paste</Heading>
        <Content>You have nothing to 'Paste'.</Content>
      </Dialog>
    </ContextualHelpTrigger>
  </Menu>
</MenuTrigger>
```

```
import {
  Content,
  Dialog,
  Heading
} from '@adobe/react-spectrum';
import {ContextualHelpTrigger} from '@react-spectrum/menu';

<MenuTrigger>
  <ActionButton>Edit</ActionButton>
  <Menu>
    <Item key="undo">Undo</Item>
    <Item key="redo">Redo</Item>
    <ContextualHelpTrigger isUnavailable>
      <Item key="cut">Cut</Item>
      <Dialog>
        <Heading>Cut</Heading>
        <Content>
          Please select text for 'Cut' to be enabled.
        </Content>
      </Dialog>
    </ContextualHelpTrigger>
    <ContextualHelpTrigger isUnavailable>
      <Item key="copy">Copy</Item>
      <Dialog>
        <Heading>Copy</Heading>
        <Content>
          Please select text for 'Copy' to be enabled.
        </Content>
      </Dialog>
    </ContextualHelpTrigger>
    <ContextualHelpTrigger>
      <Item key="paste">Paste</Item>
      <Dialog>
        <Heading>Paste</Heading>
        <Content>You have nothing to 'Paste'.</Content>
      </Dialog>
    </ContextualHelpTrigger>
  </Menu>
</MenuTrigger>
```

```
import {
  Content,
  Dialog,
  Heading
} from '@adobe/react-spectrum';
import {ContextualHelpTrigger} from '@react-spectrum/menu';

<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item key="undo">
      Undo
    </Item>
    <Item key="redo">
      Redo
    </Item>
    <ContextualHelpTrigger
      isUnavailable
    >
      <Item key="cut">
        Cut
      </Item>
      <Dialog>
        <Heading>
          Cut
        </Heading>
        <Content>
          Please select
          text for
          'Cut' to be
          enabled.
        </Content>
      </Dialog>
    </ContextualHelpTrigger>
    <ContextualHelpTrigger
      isUnavailable
    >
      <Item key="copy">
        Copy
      </Item>
      <Dialog>
        <Heading>
          Copy
        </Heading>
        <Content>
          Please select
          text for
          'Copy' to be
          enabled.
        </Content>
      </Dialog>
    </ContextualHelpTrigger>
    <ContextualHelpTrigger>
      <Item key="paste">
        Paste
      </Item>
      <Dialog>
        <Heading>
          Paste
        </Heading>
        <Content>
          You have
          nothing to
          'Paste'.
        </Content>
      </Dialog>
    </ContextualHelpTrigger>
  </Menu>
</MenuTrigger>
```

* * *

Submenus can be created by wrapping an item and a menu in a `SubmenuTrigger`. The `SubmenuTrigger` accepts exactly two children: the `Item` which triggers opening of the submenu, and the `Menu` itself. Each submenu's Menu accepts its own set of menu props, allowing you to customize its user action and selection behavior.

```
import {SubmenuTrigger} from '@react-spectrum/menu';

<MenuTrigger>
  <ActionButton>Actions</ActionButton>
  <Menu onAction={(key) => alert(`Root menu ${key} action`)}>
    <Item key="Copy">Copy</Item>
    <Item key="Cut">Cut</Item>
    <Item key="Paste">Paste</Item>
    <SubmenuTrigger>
      <Item key="Share">Share</Item>
      <Menu onAction={(key) => alert(`Share menu ${key} action`)}>
        <Item key="Copy Link">Copy Link</Item>
        <SubmenuTrigger>
          <Item key="Email">Email</Item>
          <Menu onAction={(key) => alert(`Email menu ${key} action`)}>
            <Item key="Attachment">Email as Attachment</Item>
            <Item key="Link">Email as Link</Item>
          </Menu>
        </SubmenuTrigger>
        <Item key="SMS">SMS</Item>
      </Menu>
    </SubmenuTrigger>
    <Item key="Delete">Delete</Item>
  </Menu>
</MenuTrigger>
```

```
import {SubmenuTrigger} from '@react-spectrum/menu';

<MenuTrigger>
  <ActionButton>Actions</ActionButton>
  <Menu
    onAction={(key) => alert(`Root menu ${key} action`)}
  >
    <Item key="Copy">Copy</Item>
    <Item key="Cut">Cut</Item>
    <Item key="Paste">Paste</Item>
    <SubmenuTrigger>
      <Item key="Share">Share</Item>
      <Menu
        onAction={(key) =>
          alert(`Share menu ${key} action`)}
      >
        <Item key="Copy Link">Copy Link</Item>
        <SubmenuTrigger>
          <Item key="Email">Email</Item>
          <Menu
            onAction={(key) =>
              alert(`Email menu ${key} action`)}
          >
            <Item key="Attachment">
              Email as Attachment
            </Item>
            <Item key="Link">Email as Link</Item>
          </Menu>
        </SubmenuTrigger>
        <Item key="SMS">SMS</Item>
      </Menu>
    </SubmenuTrigger>
    <Item key="Delete">Delete</Item>
  </Menu>
</MenuTrigger>
```

```
import {SubmenuTrigger} from '@react-spectrum/menu';

<MenuTrigger>
  <ActionButton>
    Actions
  </ActionButton>
  <Menu
    onAction={(key) =>
      alert(
        `Root menu ${key} action`
      )}
  >
    <Item key="Copy">
      Copy
    </Item>
    <Item key="Cut">
      Cut
    </Item>
    <Item key="Paste">
      Paste
    </Item>
    <SubmenuTrigger>
      <Item key="Share">
        Share
      </Item>
      <Menu
        onAction={(
          key
        ) =>
          alert(
            `Share menu ${key} action`
          )}
      >
        <Item key="Copy Link">
          Copy Link
        </Item>
        <SubmenuTrigger>
          <Item key="Email">
            Email
          </Item>
          <Menu
            onAction={(
              key
            ) =>
              alert(
                `Email menu ${key} action`
              )}
          >
            <Item key="Attachment">
              Email as
              Attachment
            </Item>
            <Item key="Link">
              Email as
              Link
            </Item>
          </Menu>
        </SubmenuTrigger>
        <Item key="SMS">
          SMS
        </Item>
      </Menu>
    </SubmenuTrigger>
    <Item key="Delete">
      Delete
    </Item>
  </Menu>
</MenuTrigger>
```

You can define a recursive function to render the nested menu items dynamically.

```
import {SubmenuTrigger} from '@react-spectrum/menu';

let items = [
  { name: 'Copy' },
  { name: 'Cut' },
  { name: 'Paste' },
  {
    name: 'Share',
    children: [
      { name: 'Copy Link' },
      {
        name: 'Email',
        children: [
          { name: 'Email as Attachment' },
          { name: 'Email as Link' }
        ]
      },
      { name: 'SMS' }
    ]
  },
  { name: 'Delete' }
];

<MenuTrigger>
  <ActionButton>Actions</ActionButton>
  <Menu items={items}>
    {function renderSubmenu(item) {
      if (item.children) {
        return (
          <SubmenuTrigger>
            <Item key={item.name}>{item.name}</Item>
            <Menu items={item.children}>
              {(item) => renderSubmenu(item)}
            </Menu>
          </SubmenuTrigger>
        );
      } else {
        return <Item key={item.name}>{item.name}</Item>;
      }
    }}
  </Menu>
</MenuTrigger>
```

```
import {SubmenuTrigger} from '@react-spectrum/menu';

let items = [
  { name: 'Copy' },
  { name: 'Cut' },
  { name: 'Paste' },
  {
    name: 'Share',
    children: [
      { name: 'Copy Link' },
      {
        name: 'Email',
        children: [
          { name: 'Email as Attachment' },
          { name: 'Email as Link' }
        ]
      },
      { name: 'SMS' }
    ]
  },
  { name: 'Delete' }
];

<MenuTrigger>
  <ActionButton>Actions</ActionButton>
  <Menu items={items}>
    {function renderSubmenu(item) {
      if (item.children) {
        return (
          <SubmenuTrigger>
            <Item key={item.name}>{item.name}</Item>
            <Menu items={item.children}>
              {(item) => renderSubmenu(item)}
            </Menu>
          </SubmenuTrigger>
        );
      } else {
        return <Item key={item.name}>{item.name}</Item>;
      }
    }}
  </Menu>
</MenuTrigger>
```

```
import {SubmenuTrigger} from '@react-spectrum/menu';

let items = [
  { name: 'Copy' },
  { name: 'Cut' },
  { name: 'Paste' },
  {
    name: 'Share',
    children: [
      {
        name: 'Copy Link'
      },
      {
        name: 'Email',
        children: [
          {
            name:
              'Email as Attachment'
          },
          {
            name:
              'Email as Link'
          }
        ]
      },
      { name: 'SMS' }
    ]
  },
  { name: 'Delete' }
];

<MenuTrigger>
  <ActionButton>
    Actions
  </ActionButton>
  <Menu items={items}>
    {function renderSubmenu(
      item
    ) {
      if (
        item.children
      ) {
        return (
          <SubmenuTrigger>
            <Item
              key={item
                .name}
            >
              {item
                .name}
            </Item>
            <Menu
              items={item
                .children}
            >
              {(
                item
              ) =>
                renderSubmenu(
                  item
                )}
            </Menu>
          </SubmenuTrigger>
        );
      } else {
        return (
          <Item
            key={item
              .name}
          >
            {item.name}
          </Item>
        );
      }
    }}
  </Menu>
</MenuTrigger>
```

* * *

Name

Type

Default

Description

`children`

`[CollectionChildren](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:CollectionChildren)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

—

The contents of the collection.

`escapeKeyBehavior`

`'clearSelection' | 'none'`

`'clearSelection'`

Whether pressing the escape key should clear selection in the menu or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to easily clear selection. Only use if the escape key is being handled externally or should not trigger selection clearing contextually.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [FocusStrategy](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:FocusStrategy)`

—

Where the focus should be set.

`shouldFocusWrap`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether keyboard navigation is circular.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

—

Item objects in the collection.

`disabledKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.

`selectionMode`

`[SelectionMode](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:SelectionMode)`

—

The type of selection that is allowed in the collection.

`disallowEmptySelection`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the collection allows empty selection.

`selectedKeys`

`'all' | [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The currently selected keys in the collection (controlled).

`defaultSelectedKeys`

`'all' | [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The initial selected keys in the collection (uncontrolled).

Events

Name

Type

Description

`onAction`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) )) => void`

Handler that is called when an item is selected.

`onClose`

`() => void`

Handler that is called when the menu should close after selecting an item.

`onSelectionChange`

`( (keys: [Selection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:Selection) )) => void`

Handler that is called when the selection changes.

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

Name

Type

Description

`children`

`[ [ReactElement](https://reactjs.org/docs/rendering-elements.html), [ReactElement](https://reactjs.org/docs/rendering-elements.html) ]`

The triggering Item and the Dialog, respectively.

`isUnavailable`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the menu item is currently unavailable.

Name

Type

Description

`children`

`[ReactElement](https://reactjs.org/docs/rendering-elements.html)<any>[]`

The contents of the SubmenuTrigger - an Item and a Menu.

* * *

Applying `autoFocus` to the Menu of the MenuTrigger sets focus to a Menu Item within the Menu upon opening.

```
<MenuTrigger>
  <ActionButton>
    Filter
  </ActionButton>
  <Menu
    items={[
      {name: 'tiff', id: 'a1b2c3'},
      {name: 'png', id: 'g5h1j9'},
      {name: 'jpg', id: 'p8k3i4'},
      {name: 'PDF', id: 'j7i3a0'}
    ]}
    disabledKeys={['a1b2c3', 'p8k3i4']}>
    {item => <Item>{item.name}</Item>}
  </Menu>
</MenuTrigger>
```

```
<MenuTrigger>
  <ActionButton>
    Filter
  </ActionButton>
  <Menu
    items={[
      {name: 'tiff', id: 'a1b2c3'},
      {name: 'png', id: 'g5h1j9'},
      {name: 'jpg', id: 'p8k3i4'},
      {name: 'PDF', id: 'j7i3a0'}
    ]}
    disabledKeys={['a1b2c3', 'p8k3i4']}>
    {item => <Item>{item.name}</Item>}
  </Menu>
</MenuTrigger>
```

```
<MenuTrigger>
  <ActionButton>
    Filter
  </ActionButton>
  <Menu
    items={[
      {
        name: 'tiff',
        id: 'a1b2c3'
      },
      {
        name: 'png',
        id: 'g5h1j9'
      },
      {
        name: 'jpg',
        id: 'p8k3i4'
      },
      {
        name: 'PDF',
        id: 'j7i3a0'
      }
    ]}
    disabledKeys={[
      'a1b2c3',
      'p8k3i4'
    ]}
  >
    {(item) => (
      <Item>
        {item.name}
      </Item>
    )}
  </Menu>
</MenuTrigger>
```
