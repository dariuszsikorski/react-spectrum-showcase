---
source: https://react-spectrum.adobe.com/react-spectrum/ActionBar.html
date: Thu, 16 Oct 2025 01:06:46 GMT
---

Action bars are used for single and bulk selection patterns when a user needs to perform actions on one or more items at the same time.

* * *

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(['photoshop'])
  );

  return (
    <ActionBarContainer height={300} maxWidth="size-6000">
      <ListView
        aria-label="ListView with action bar"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">Adobe Photoshop</Item>
        <Item key="illustrator">Adobe Illustrator</Item>
        <Item key="xd">Adobe XD</Item>
      </ListView>
      <ActionBar
        isEmphasized
        selectedItemCount={selectedKeys === 'all' ? 'all' : selectedKeys.size}
        onAction={(key) => alert(`Performing ${key} action...`)}
        onClearSelection={() => setSelectedKeys(new Set())}
      >
        <Item key="edit">
          <Edit />
          <Text>Edit</Text>
        </Item>
        <Item key="copy">
          <Copy />
          <Text>Copy</Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>Delete</Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
  );
}

<Example />
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [selectedKeys, setSelectedKeys] = React.useState<
    Selection
  >(new Set(['photoshop']));

  return (
    <ActionBarContainer height={300} maxWidth="size-6000">
      <ListView
        aria-label="ListView with action bar"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">Adobe Photoshop</Item>
        <Item key="illustrator">Adobe Illustrator</Item>
        <Item key="xd">Adobe XD</Item>
      </ListView>
      <ActionBar
        isEmphasized
        selectedItemCount={selectedKeys === 'all'
          ? 'all'
          : selectedKeys.size}
        onAction={(key) =>
          alert(`Performing ${key} action...`)}
        onClearSelection={() =>
          setSelectedKeys(new Set())}
      >
        <Item key="edit">
          <Edit />
          <Text>Edit</Text>
        </Item>
        <Item key="copy">
          <Copy />
          <Text>Copy</Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>Delete</Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
  );
}

<Example />
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [
    selectedKeys,
    setSelectedKeys
  ] = React.useState<
    Selection
  >(
    new Set([
      'photoshop'
    ])
  );

  return (
    <ActionBarContainer
      height={300}
      maxWidth="size-6000"
    >
      <ListView
        aria-label="ListView with action bar"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">
          Adobe Photoshop
        </Item>
        <Item key="illustrator">
          Adobe
          Illustrator
        </Item>
        <Item key="xd">
          Adobe XD
        </Item>
      </ListView>
      <ActionBar
        isEmphasized
        selectedItemCount={selectedKeys ===
            'all'
          ? 'all'
          : selectedKeys
            .size}
        onAction={(
          key
        ) =>
          alert(
            `Performing ${key} action...`
          )}
        onClearSelection={() =>
          setSelectedKeys(
            new Set()
          )}
      >
        <Item key="edit">
          <Edit />
          <Text>
            Edit
          </Text>
        </Item>
        <Item key="copy">
          <Copy />
          <Text>
            Copy
          </Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>
            Delete
          </Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
  );
}

<Example />
```

## Content[#](#content)

* * *

Shows an ActionBar component with labels pointing to its parts, including the clear button, selected item count, and action button group.224 selectedDeleteEditCopyAction group (quiet)Item counterClose button

An ActionBar is a companion component intended to facilitate bulk actions on selected items within a collection component. It consists of an ActionGroup, a clear button, and a count of selected items. It accepts a list of `[Item](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/collections/src/Item.ts:Item)` elements as children, each with a `key` prop. Alternatively, a function that returns `Item` elements is also supported as seen below. See the [collection components](https://react-spectrum.adobe.com/react-stately/collections.html) docs for more details about this API. These `Item` elements are used to populate the buttons in the ActionBar, and follows the [ActionGroup content guidelines](https://react-spectrum.adobe.com/react-spectrum/ActionGroup.html#content) for customization and labeling.

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let barItems = [
    { key: 'edit', label: 'Edit' },
    { key: 'copy', label: 'Copy' },
    { key: 'delete', label: 'Delete' }
  ];

  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(['photoshop'])
  );

  return (
    <ActionBarContainer height={300} maxWidth="size-6000">
      <ListView
        aria-label="ListView with action bar"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">Adobe Photoshop</Item>
        <Item key="illustrator">Adobe Illustrator</Item>
        <Item key="xd">Adobe XD</Item>
      </ListView>
      <ActionBar
        items={barItems}
        selectedItemCount={selectedKeys === 'all' ? 'all' : selectedKeys.size}
        onAction={(key) => alert(`Performing ${key} action...`)}
        onClearSelection={() => setSelectedKeys(new Set())}
        isEmphasized
      >
        {(item) => (
          <Item key={item.key}>
            {item.label}
          </Item>
        )}
      </ActionBar>
    </ActionBarContainer>
  );
}

<Example />
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let barItems = [
    { key: 'edit', label: 'Edit' },
    { key: 'copy', label: 'Copy' },
    { key: 'delete', label: 'Delete' }
  ];

  let [selectedKeys, setSelectedKeys] = React.useState<
    Selection
  >(new Set(['photoshop']));

  return (
    <ActionBarContainer height={300} maxWidth="size-6000">
      <ListView
        aria-label="ListView with action bar"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">Adobe Photoshop</Item>
        <Item key="illustrator">Adobe Illustrator</Item>
        <Item key="xd">Adobe XD</Item>
      </ListView>
      <ActionBar
        items={barItems}
        selectedItemCount={selectedKeys === 'all'
          ? 'all'
          : selectedKeys.size}
        onAction={(key) =>
          alert(`Performing ${key} action...`)}
        onClearSelection={() =>
          setSelectedKeys(new Set())}
        isEmphasized
      >
        {(item) => (
          <Item key={item.key}>
            {item.label}
          </Item>
        )}
      </ActionBar>
    </ActionBarContainer>
  );
}

<Example />
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let barItems = [
    {
      key: 'edit',
      label: 'Edit'
    },
    {
      key: 'copy',
      label: 'Copy'
    },
    {
      key: 'delete',
      label: 'Delete'
    }
  ];

  let [
    selectedKeys,
    setSelectedKeys
  ] = React.useState<
    Selection
  >(
    new Set([
      'photoshop'
    ])
  );

  return (
    <ActionBarContainer
      height={300}
      maxWidth="size-6000"
    >
      <ListView
        aria-label="ListView with action bar"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">
          Adobe Photoshop
        </Item>
        <Item key="illustrator">
          Adobe
          Illustrator
        </Item>
        <Item key="xd">
          Adobe XD
        </Item>
      </ListView>
      <ActionBar
        items={barItems}
        selectedItemCount={selectedKeys ===
            'all'
          ? 'all'
          : selectedKeys
            .size}
        onAction={(
          key
        ) =>
          alert(
            `Performing ${key} action...`
          )}
        onClearSelection={() =>
          setSelectedKeys(
            new Set()
          )}
        isEmphasized
      >
        {(item) => (
          <Item
            key={item
              .key}
          >
            {item.label}
          </Item>
        )}
      </ActionBar>
    </ActionBarContainer>
  );
}

<Example />
```

The contents of the ActionBar should follow the same accessibility guidelines as ActionGroup's items, see the [ActionGroup docs](https://react-spectrum.adobe.com/react-spectrum/ActionGroup.html#accessibility) for more details.

To internationalize an ActionBar, the content provided to all child items should be localized. A localized string for the selection count and clear button `aria-label` will be provided automatically. For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of the ActionBar is automatically flipped.

* * *

Use the `onClearSelection` prop as a callback to handle when the clear button in the ActionBar is pressed. Additionally, the `onAction` prop can be used as a callback for when the user presses any of the buttons in the ActionBar. The `key` from the pressed `<Item>` will be passed to the callback.

The following example clears row selection within the TableView when the clear button is pressed and alerts the user as to what action is being taken on the selected rows when the buttons are pressed.

```
import type {Selection} from '@adobe/react-spectrum';

function ActionBarActions(props) {
  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([2]));
  let rows = [
    { id: 1, name: 'Charizard', type: 'Fire, Flying', level: '67' },
    { id: 2, name: 'Blastoise', type: 'Water', level: '56' },
    { id: 3, name: 'Venusaur', type: 'Grass, Poison', level: '83' },
    { id: 4, name: 'Pikachu', type: 'Electric', level: '100' }
  ];

  return (
    <ActionBarContainer height="size-5000">
      <TableView
        aria-label="Table with action bar and controlled selection"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <TableHeader>
          <Column key="name">Name</Column>
          <Column key="type">Type</Column>
          <Column key="level" align="end">Level</Column>
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <Row>
              {(columnKey) => <Cell>{item[columnKey]}</Cell>}
            </Row>
          )}
        </TableBody>
      </TableView>
      <ActionBar
        isEmphasized
        selectedItemCount={selectedKeys === 'all' ? 'all' : selectedKeys.size}
        onClearSelection={() => {
          setSelectedKeys(new Set());
        }}
        onAction={(key) => alert(`Performing ${key} action...`)}      >
        <Item key="edit">
          <Edit />
          <Text>Edit</Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>Delete</Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function ActionBarActions(props) {
  let [selectedKeys, setSelectedKeys] = React.useState<
    Selection
  >(new Set([2]));
  let rows = [
    {
      id: 1,
      name: 'Charizard',
      type: 'Fire, Flying',
      level: '67'
    },
    {
      id: 2,
      name: 'Blastoise',
      type: 'Water',
      level: '56'
    },
    {
      id: 3,
      name: 'Venusaur',
      type: 'Grass, Poison',
      level: '83'
    },
    {
      id: 4,
      name: 'Pikachu',
      type: 'Electric',
      level: '100'
    }
  ];

  return (
    <ActionBarContainer height="size-5000">
      <TableView
        aria-label="Table with action bar and controlled selection"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <TableHeader>
          <Column key="name">Name</Column>
          <Column key="type">Type</Column>
          <Column key="level" align="end">Level</Column>
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <Row>
              {(columnKey) => <Cell>{item[columnKey]}
              </Cell>}
            </Row>
          )}
        </TableBody>
      </TableView>
      <ActionBar
        isEmphasized
        selectedItemCount={selectedKeys === 'all'
          ? 'all'
          : selectedKeys.size}
        onClearSelection={() => {
          setSelectedKeys(new Set());
        }}
        onAction={(key) =>
          alert(`Performing ${key} action...`)}      >
        <Item key="edit">
          <Edit />
          <Text>Edit</Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>Delete</Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function ActionBarActions(
  props
) {
  let [
    selectedKeys,
    setSelectedKeys
  ] = React.useState<
    Selection
  >(new Set([2]));
  let rows = [
    {
      id: 1,
      name: 'Charizard',
      type:
        'Fire, Flying',
      level: '67'
    },
    {
      id: 2,
      name: 'Blastoise',
      type: 'Water',
      level: '56'
    },
    {
      id: 3,
      name: 'Venusaur',
      type:
        'Grass, Poison',
      level: '83'
    },
    {
      id: 4,
      name: 'Pikachu',
      type: 'Electric',
      level: '100'
    }
  ];

  return (
    <ActionBarContainer height="size-5000">
      <TableView
        aria-label="Table with action bar and controlled selection"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <TableHeader>
          <Column key="name">
            Name
          </Column>
          <Column key="type">
            Type
          </Column>
          <Column
            key="level"
            align="end"
          >
            Level
          </Column>
        </TableHeader>
        <TableBody
          items={rows}
        >
          {(item) => (
            <Row>
              {(columnKey) => (
                <Cell>
                  {item[
                    columnKey
                  ]}
                </Cell>
              )}
            </Row>
          )}
        </TableBody>
      </TableView>
      <ActionBar
        isEmphasized
        selectedItemCount={selectedKeys ===
            'all'
          ? 'all'
          : selectedKeys
            .size}
        onClearSelection={() => {
          setSelectedKeys(
            new Set()
          );
        }}
        onAction={(key) =>
          alert(
            `Performing ${key} action...`
          )}      >
        <Item key="edit">
          <Edit />
          <Text>
            Edit
          </Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>
            Delete
          </Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
  );
}
```

* * *

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The contents of the ActionBarContainer. Should include a ActionBar and the renderable content it is associated with.

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

Name

Type

Default

Description

`children`

`[ItemElement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:ItemElement)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)> | [ItemElement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:ItemElement)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>[] | [ItemRenderer](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:ItemRenderer)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

—

An list of `Item` elements or a function. If the latter, a list of items must be provided using the `items` prop.

`selectedItemCount`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | 'all'`

—

The number of selected items that the ActionBar is currently linked to. If 0, the ActionBar is hidden.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

—

A list of items to display as children. Must be used with a function as the sole child.

`disabledKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

A list of keys to disable.

`isEmphasized`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the ActionBar should be displayed with a emphasized style.

`buttonLabelBehavior`

`'show' | 'collapse' | 'hide'`

`'collapse'`

Defines when the text within the buttons should be hidden and only the icon should be shown. When set to 'hide', the text is always shown in a tooltip. When set to 'collapse', the text is visible if space is available, and hidden when space is limited. The text is always visible when the item is collapsed into a menu.

Events

Name

Type

Description

`onClearSelection`

`() => void`

Handler that is called when the ActionBar clear button is pressed.

`onAction`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) )) => void`

Handler that is called when an ActionBar button is pressed.

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

`isEmphasized` should be applied to the ActionBar when it should call attention, such as when floating in a TableView. It should be omitted if the ActionBar should blend in with the rest of the UI, directing a user’s focus to elsewhere in a view.

```
import type {Selection} from '@adobe/react-spectrum';

function Example({ isEmphasized }: { isEmphasized?: boolean }) {
  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(['photoshop'])
  );

  return (
    <ActionBarContainer height={300} width="size-5000">
      <ListView
        aria-label="ListView with action bar"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">Adobe Photoshop</Item>
        <Item key="illustrator">Adobe Illustrator</Item>
        <Item key="xd">Adobe XD</Item>
      </ListView>
      <ActionBar
        isEmphasized={isEmphasized}        selectedItemCount={selectedKeys === 'all' ? 'all' : selectedKeys.size}
        onAction={(key) => alert(`Performing ${key} action...`)}
        onClearSelection={() => setSelectedKeys(new Set())}
      >
        <Item key="edit">
          <Edit />
          <Text>Edit</Text>
        </Item>
        <Item key="copy">
          <Copy />
          <Text>Copy</Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>Delete</Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
  );
}

<Flex direction="row" gap="size-200" wrap>
  <Example />
  <Example isEmphasized />
</Flex>
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example(
  { isEmphasized }: { isEmphasized?: boolean }
) {
  let [selectedKeys, setSelectedKeys] = React.useState<
    Selection
  >(new Set(['photoshop']));

  return (
    <ActionBarContainer height={300} width="size-5000">
      <ListView
        aria-label="ListView with action bar"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">Adobe Photoshop</Item>
        <Item key="illustrator">Adobe Illustrator</Item>
        <Item key="xd">Adobe XD</Item>
      </ListView>
      <ActionBar
        isEmphasized={isEmphasized}        selectedItemCount={selectedKeys === 'all'
          ? 'all'
          : selectedKeys.size}
        onAction={(key) =>
          alert(`Performing ${key} action...`)}
        onClearSelection={() => setSelectedKeys(new Set())}
      >
        <Item key="edit">
          <Edit />
          <Text>Edit</Text>
        </Item>
        <Item key="copy">
          <Copy />
          <Text>Copy</Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>Delete</Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
  );
}

<Flex direction="row" gap="size-200" wrap>
  <Example />
  <Example isEmphasized />
</Flex>
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example(
  { isEmphasized }: {
    isEmphasized?:
      boolean;
  }
) {
  let [
    selectedKeys,
    setSelectedKeys
  ] = React.useState<
    Selection
  >(
    new Set([
      'photoshop'
    ])
  );

  return (
    <ActionBarContainer
      height={300}
      width="size-5000"
    >
      <ListView
        aria-label="ListView with action bar"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">
          Adobe Photoshop
        </Item>
        <Item key="illustrator">
          Adobe
          Illustrator
        </Item>
        <Item key="xd">
          Adobe XD
        </Item>
      </ListView>
      <ActionBar
        isEmphasized={isEmphasized}        selectedItemCount={selectedKeys ===
            'all'
          ? 'all'
          : selectedKeys
            .size}
        onAction={(
          key
        ) =>
          alert(
            `Performing ${key} action...`
          )}
        onClearSelection={() =>
          setSelectedKeys(
            new Set()
          )}
      >
        <Item key="edit">
          <Edit />
          <Text>
            Edit
          </Text>
        </Item>
        <Item key="copy">
          <Copy />
          <Text>
            Copy
          </Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>
            Delete
          </Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
  );
}

<Flex
  direction="row"
  gap="size-200"
  wrap
>
  <Example />
  <Example
    isEmphasized
  />
</Flex>
```

To disable individual items, a list of disabledKeys can be provided.

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(['photoshop'])
  );

  return (
    <ActionBarContainer height={300} width="size-5000">
      <ListView
        aria-label="ListView with action bar"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">Adobe Photoshop</Item>
        <Item key="illustrator">Adobe Illustrator</Item>
        <Item key="xd">Adobe XD</Item>
      </ListView>
      <ActionBar
        disabledKeys={['edit']}        isEmphasized={true}
        selectedItemCount={selectedKeys === 'all' ? 'all' : selectedKeys.size}
        onAction={(key) => alert(`Performing ${key} action...`)}
        onClearSelection={() => setSelectedKeys(new Set())}
      >
        <Item key="edit">
          <Edit />
          <Text>Edit</Text>
        </Item>
        <Item key="copy">
          <Copy />
          <Text>Copy</Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>Delete</Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
  );
}

<Example />
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [selectedKeys, setSelectedKeys] = React.useState<
    Selection
  >(new Set(['photoshop']));

  return (
    <ActionBarContainer height={300} width="size-5000">
      <ListView
        aria-label="ListView with action bar"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">Adobe Photoshop</Item>
        <Item key="illustrator">Adobe Illustrator</Item>
        <Item key="xd">Adobe XD</Item>
      </ListView>
      <ActionBar
        disabledKeys={['edit']}        isEmphasized={true}
        selectedItemCount={selectedKeys === 'all'
          ? 'all'
          : selectedKeys.size}
        onAction={(key) =>
          alert(`Performing ${key} action...`)}
        onClearSelection={() => setSelectedKeys(new Set())}
      >
        <Item key="edit">
          <Edit />
          <Text>Edit</Text>
        </Item>
        <Item key="copy">
          <Copy />
          <Text>Copy</Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>Delete</Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
  );
}

<Example />
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [
    selectedKeys,
    setSelectedKeys
  ] = React.useState<
    Selection
  >(
    new Set([
      'photoshop'
    ])
  );

  return (
    <ActionBarContainer
      height={300}
      width="size-5000"
    >
      <ListView
        aria-label="ListView with action bar"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">
          Adobe Photoshop
        </Item>
        <Item key="illustrator">
          Adobe
          Illustrator
        </Item>
        <Item key="xd">
          Adobe XD
        </Item>
      </ListView>
      <ActionBar
        disabledKeys={[
          'edit'
        ]}        isEmphasized={true}
        selectedItemCount={selectedKeys ===
            'all'
          ? 'all'
          : selectedKeys
            .size}
        onAction={(
          key
        ) =>
          alert(
            `Performing ${key} action...`
          )}
        onClearSelection={() =>
          setSelectedKeys(
            new Set()
          )}
      >
        <Item key="edit">
          <Edit />
          <Text>
            Edit
          </Text>
        </Item>
        <Item key="copy">
          <Copy />
          <Text>
            Copy
          </Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>
            Delete
          </Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
  );
}

<Example />
```
