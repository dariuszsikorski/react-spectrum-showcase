---
source: https://react-spectrum.adobe.com/react-spectrum/ActionMenu.html
date: Thu, 16 Oct 2025 01:07:09 GMT
---

ActionMenu combines an ActionButton with a Menu for simple "more actions" use cases.

* * *

```
<ActionMenu>
  <Item>Cut</Item>
  <Item>Copy</Item>
  <Item>Paste</Item>
</ActionMenu>
```

```
<ActionMenu>
  <Item>Cut</Item>
  <Item>Copy</Item>
  <Item>Paste</Item>
</ActionMenu>
```

```
<ActionMenu>
  <Item>Cut</Item>
  <Item>Copy</Item>
  <Item>Paste</Item>
</ActionMenu>
```

## Content[#](#content)

* * *

ActionMenu follows the [Collection Components](https://react-spectrum.adobe.com/react-stately/collections.html) API, accepting both static and dynamic collections. See [Menu](https://react-spectrum.adobe.com/react-spectrum/Menu.html#content) for further explanation.

```
function Example() {
  let actionMenuItems = [
    {name: 'Cut'},
    {name: 'Copy'},
    {name: 'Paste'},
    {name: 'Select All'}
  ];

  return (
    <ActionMenu items={actionMenuItems}>
      {item => <Item key={item.name}>{item.name}</Item>}
    </ActionMenu>
  );
}
```

```
function Example() {
  let actionMenuItems = [
    {name: 'Cut'},
    {name: 'Copy'},
    {name: 'Paste'},
    {name: 'Select All'}
  ];

  return (
    <ActionMenu items={actionMenuItems}>
      {item => <Item key={item.name}>{item.name}</Item>}
    </ActionMenu>
  );
}
```

```
function Example() {
  let actionMenuItems = [
    { name: 'Cut' },
    { name: 'Copy' },
    { name: 'Paste' },
    {
      name: 'Select All'
    }
  ];

  return (
    <ActionMenu
      items={actionMenuItems}
    >
      {(item) => (
        <Item
          key={item.name}
        >
          {item.name}
        </Item>
      )}
    </ActionMenu>
  );
}
```

On mobile, ActionMenus automatically display in a tray instead of a popover to improve usability.

In order to internationalize an ActionMenu, the content provided to all child items should be localized. For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of the ActionMenu is flipped.

* * *

ActionMenu supports the `onAction` prop, which is called when the user presses a menu item. It receives the key of the item as an argument, which can be used to perform the relevant action.

```
function Example() {
  let [action, setAction] = React.useState(null);

  return (
    <>
      <ActionMenu onAction={setAction}>
        <Item key="cut">Cut</Item>
        <Item key="copy">Copy</Item>
        <Item key="paste">Paste</Item>
      </ActionMenu>
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
      <ActionMenu onAction={setAction}>
        <Item key="cut">Cut</Item>
        <Item key="copy">Copy</Item>
        <Item key="paste">Paste</Item>
      </ActionMenu>
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
      <ActionMenu
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
      </ActionMenu>
      <p>
        Action: {action}
      </p>
    </>
  );
}
```

* * *

By default, interacting with an item in an ActionMenu triggers `onAction`. Items may also be links to another page or website. This can be achieved by passing the `href` prop to the `<Item>` component.

```
<ActionMenu>
  <Item href="https://adobe.com/" target="_blank">Adobe</Item>
  <Item href="https://apple.com/" target="_blank">Apple</Item>
  <Item href="https://google.com/" target="_blank">Google</Item>
  <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
</ActionMenu>
```

```
<ActionMenu>
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
</ActionMenu>
```

```
<ActionMenu>
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
</ActionMenu>
```

The `<Item>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Spectrum components that support links, this works via the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-spectrum/routing.html) to learn how to set this up.

* * *

ActionMenu supports sections in order to group options. Sections can be used by wrapping groups of Items in a `Section` component. Each `Section` takes a `title` and `key` prop.

```
<ActionMenu>
  <Section title="File">
    <Item key="new">New</Item>
    <Item key="open">Open...</Item>
  </Section>
  <Section title="Save">
    <Item key="save">Save</Item>
    <Item key="saveAs">Save As...</Item>
    <Item key="saveAll">Save All</Item>
  </Section>
</ActionMenu>
```

```
<ActionMenu>
  <Section title="File">
    <Item key="new">New</Item>
    <Item key="open">Open...</Item>
  </Section>
  <Section title="Save">
    <Item key="save">Save</Item>
    <Item key="saveAs">Save As...</Item>
    <Item key="saveAll">Save All</Item>
  </Section>
</ActionMenu>
```

```
<ActionMenu>
  <Section title="File">
    <Item key="new">
      New
    </Item>
    <Item key="open">
      Open...
    </Item>
  </Section>
  <Section title="Save">
    <Item key="save">
      Save
    </Item>
    <Item key="saveAs">
      Save As...
    </Item>
    <Item key="saveAll">
      Save All
    </Item>
  </Section>
</ActionMenu>
```

Sections used with dynamic items are populated from a hierarchical data structure. Similarly to the props on ActionMenu, `<Section>` takes an array of data using the `items` prop.

```
function Example() {
  let openWindows = [
    {
      name: 'Reversion',
      id: 'reversion',
      children: [
        {id: 'undo', name: 'Undo'},
        {id: 'redo', name: 'Redo'}
      ]
    },
    {
      name: 'Clipboard',
      id: 'clipboard',
      children: [
        {id: 'cut', name: 'Cut'},
        {id: 'copy', name: 'Copy'},
        {id: 'paste', name: 'Paste'}
      ]
    }
  ];

  return (
    <ActionMenu
      items={openWindows}>
      {item => (
        <Section items={item.children} title={item.name}>
          {item => <Item>{item.name}</Item>}
        </Section>
      )}
    </ActionMenu>
  );
}
```

```
function Example() {
  let openWindows = [
    {
      name: 'Reversion',
      id: 'reversion',
      children: [
        {id: 'undo', name: 'Undo'},
        {id: 'redo', name: 'Redo'}
      ]
    },
    {
      name: 'Clipboard',
      id: 'clipboard',
      children: [
        {id: 'cut', name: 'Cut'},
        {id: 'copy', name: 'Copy'},
        {id: 'paste', name: 'Paste'}
      ]
    }
  ];

  return (
    <ActionMenu
      items={openWindows}>
      {item => (
        <Section items={item.children} title={item.name}>
          {item => <Item>{item.name}</Item>}
        </Section>
      )}
    </ActionMenu>
  );
}
```

```
function Example() {
  let openWindows = [
    {
      name: 'Reversion',
      id: 'reversion',
      children: [
        {
          id: 'undo',
          name: 'Undo'
        },
        {
          id: 'redo',
          name: 'Redo'
        }
      ]
    },
    {
      name: 'Clipboard',
      id: 'clipboard',
      children: [
        {
          id: 'cut',
          name: 'Cut'
        },
        {
          id: 'copy',
          name: 'Copy'
        },
        {
          id: 'paste',
          name: 'Paste'
        }
      ]
    }
  ];

  return (
    <ActionMenu
      items={openWindows}
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
              {item.name}
            </Item>
          )}
        </Section>
      )}
    </ActionMenu>
  );
}
```

Sections without a `title` must provide an `aria-label` for accessibility.

* * *

Items within ActionMenu also allow for additional content used to better communicate options. Icons and descriptions can be added to the `children` of `Item` as shown in the example below. If a description is added, the prop `slot="description"` must be used to distinguish the different `<Text>` elements.

```
import {Keyboard, Text} from '@adobe/react-spectrum';
<ActionMenu>
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
</ActionMenu>
```

```
import {Keyboard, Text} from '@adobe/react-spectrum';
<ActionMenu>
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
</ActionMenu>
```

```
import {
  Keyboard,
  Text
} from '@adobe/react-spectrum';
<ActionMenu>
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
    <Text>Paste</Text>
    <Keyboard>
      ⌘V
    </Keyboard>
  </Item>
</ActionMenu>
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

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the button is disabled.

`isQuiet`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the button should be displayed with a [quiet style](https://spectrum.adobe.com/page/action-button/#Quiet).

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

—

Item objects in the collection.

`disabledKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.

`align`

`[Alignment](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/labelable.d.ts:Alignment)`

`'start'`

Alignment of the menu relative to the trigger.

`direction`

`'bottom' | 'top' | 'left' | 'right' | 'start' | 'end'`

`'bottom'`

Where the Menu opens relative to its trigger.

`shouldFlip`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the menu should automatically flip direction when space is limited.

`closeOnSelect`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the Menu closes when a selection is made.

`trigger`

`[MenuTriggerType](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/menu/src/index.d.ts:MenuTriggerType)`

`'press'`

How the menu is triggered.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

Events

Name

Type

Description

`onAction`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) )) => void`

Handler that is called when an item is selected.

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the overlay's open state changes.

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

* * *

[View guidelines](https://spectrum.adobe.com/page/action-button/#Quiet)

```
<ActionMenu
  isQuiet
  items={[
    {name: 'Cut', id: 'cut'},
    {name: 'Copy', id: 'copy'},
    {name: 'Paste', id: 'paste'}
  ]}>
  {item => <Item>{item.name}</Item>}
</ActionMenu>
```

```
<ActionMenu
  isQuiet
  items={[
    {name: 'Cut', id: 'cut'},
    {name: 'Copy', id: 'copy'},
    {name: 'Paste', id: 'paste'}
  ]}>
  {item => <Item>{item.name}</Item>}
</ActionMenu>
```

```
<ActionMenu
  isQuiet
  items={[
    {
      name: 'Cut',
      id: 'cut'
    },
    {
      name: 'Copy',
      id: 'copy'
    },
    {
      name: 'Paste',
      id: 'paste'
    }
  ]}
>
  {(item) => (
    <Item>
      {item.name}
    </Item>
  )}
</ActionMenu>
```

Applying `autoFocus` to the ActionMenu sets focus to the ActionMenu trigger.

```
<ActionMenu
  items={[
    {name: 'Undo', id: 'undo'},
    {name: 'Redo', id: 'redo'},
    {name: 'Cut', id: 'cut'},
    {name: 'Copy', id: 'copy'},
    {name: 'Paste', id: 'paste'}
  ]}
  isDisabled>
  {item => <Item>{item.name}</Item>}
</ActionMenu>
```

```
<ActionMenu
  items={[
    {name: 'Undo', id: 'undo'},
    {name: 'Redo', id: 'redo'},
    {name: 'Cut', id: 'cut'},
    {name: 'Copy', id: 'copy'},
    {name: 'Paste', id: 'paste'}
  ]}
  isDisabled>
  {item => <Item>{item.name}</Item>}
</ActionMenu>
```

```
<ActionMenu
  items={[
    {
      name: 'Undo',
      id: 'undo'
    },
    {
      name: 'Redo',
      id: 'redo'
    },
    {
      name: 'Cut',
      id: 'cut'
    },
    {
      name: 'Copy',
      id: 'copy'
    },
    {
      name: 'Paste',
      id: 'paste'
    }
  ]}
  isDisabled
>
  {(item) => (
    <Item>
      {item.name}
    </Item>
  )}
</ActionMenu>
```

```
<ActionMenu
  items={[
    {name: 'Undo', id: 'undo'},
    {name: 'Redo', id: 'redo'},
    {name: 'Cut', id: 'cut'},
    {name: 'Copy', id: 'copy'},
    {name: 'Paste', id: 'paste'}
  ]}
  disabledKeys={['redo', 'paste']}>
  {item => <Item>{item.name}</Item>}
</ActionMenu>
```

```
<ActionMenu
  items={[
    {name: 'Undo', id: 'undo'},
    {name: 'Redo', id: 'redo'},
    {name: 'Cut', id: 'cut'},
    {name: 'Copy', id: 'copy'},
    {name: 'Paste', id: 'paste'}
  ]}
  disabledKeys={['redo', 'paste']}>
  {item => <Item>{item.name}</Item>}
</ActionMenu>
```

```
<ActionMenu
  items={[
    {
      name: 'Undo',
      id: 'undo'
    },
    {
      name: 'Redo',
      id: 'redo'
    },
    {
      name: 'Cut',
      id: 'cut'
    },
    {
      name: 'Copy',
      id: 'copy'
    },
    {
      name: 'Paste',
      id: 'paste'
    }
  ]}
  disabledKeys={[
    'redo',
    'paste'
  ]}
>
  {(item) => (
    <Item>
      {item.name}
    </Item>
  )}
</ActionMenu>
```

### Align and direction[#](#align-and-direction)

[View guidelines](https://spectrum.adobe.com/page/popover/#Placement)

The `align` prop aligns the ActionMenu menu relative to the trigger and the `direction` prop controls the direction the ActionMenu will render.

```
<Flex gap="size-100">
  <ActionMenu align="start">
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu align="end" direction="top" shouldFlip={false}>
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu direction="start" align="start">
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu direction="end" align="end">
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
</Flex>
```

```
<Flex gap="size-100">
  <ActionMenu align="start">
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu
    align="end"
    direction="top"
    shouldFlip={false}
  >
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu direction="start" align="start">
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu direction="end" align="end">
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
</Flex>
```

```
<Flex gap="size-100">
  <ActionMenu align="start">
    <Item key="cut">
      Cut
    </Item>
    <Item key="copy">
      Copy
    </Item>
    <Item key="paste">
      Paste
    </Item>
  </ActionMenu>
  <ActionMenu
    align="end"
    direction="top"
    shouldFlip={false}
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
  </ActionMenu>
  <ActionMenu
    direction="start"
    align="start"
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
  </ActionMenu>
  <ActionMenu
    direction="end"
    align="end"
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
  </ActionMenu>
</Flex>
```

By default, the ActionMenu menu flips direction automatically upon opening when space is limited. To change this, set the `shouldFlip` prop to `false`. Try scrolling the viewport close to the edge of the trigger in the example to see this in action.

```
<Flex gap="size-100">
  <ActionMenu shouldFlip>
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu shouldFlip={false}>
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
</Flex>
```

```
<Flex gap="size-100">
  <ActionMenu shouldFlip>
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu shouldFlip={false}>
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
</Flex>
```

```
<Flex gap="size-100">
  <ActionMenu
    shouldFlip
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
  </ActionMenu>
  <ActionMenu
    shouldFlip={false}
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
  </ActionMenu>
</Flex>
```

The `isOpen` and `defaultOpen` props on the ActionMenu control whether the menu is open by default. They apply controlled and uncontrolled behavior on the Menu respectively.

```
function Example() {
  let [open, setOpen] = React.useState(false);

  return (
    <ActionMenu
      isOpen={open}
      onOpenChange={setOpen}>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </ActionMenu>
  );
}
```

```
function Example() {
  let [open, setOpen] = React.useState(false);

  return (
    <ActionMenu
      isOpen={open}
      onOpenChange={setOpen}>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </ActionMenu>
  );
}
```

```
function Example() {
  let [open, setOpen] =
    React.useState(
      false
    );

  return (
    <ActionMenu
      isOpen={open}
      onOpenChange={setOpen}
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
    </ActionMenu>
  );
}
```

* * *

The ActionMenu features an overlay that transitions in and out of the page as it is opened and closed. Depending on your configuration, this overlay may render as a tray or a dropdown. Please see the following sections in the testing docs for more information on how to handle these behaviors in your test suite.

[Timers](https://react-spectrum.adobe.com/react-spectrum/testing.html#timers)

[Desktop vs Mobile](https://react-spectrum.adobe.com/react-spectrum/testing.html#desktop-vs-mobile)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/menu/test/ActionMenu.test.js) if you find that the above isn't sufficient when resolving issues in your own test cases.
