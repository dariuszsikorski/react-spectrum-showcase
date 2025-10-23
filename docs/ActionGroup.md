---
source: https://react-spectrum.adobe.com/react-spectrum/ActionGroup.html
date: Thu, 16 Oct 2025 01:05:23 GMT
---

An ActionGroup is a grouping of ActionButtons that are related to one another.

* * *

```
function Example() {
  let [action, setAction] = React.useState(null);

  return (
    <>
      <ActionGroup onAction={setAction}>
        <Item key="add">Add</Item>
        <Item key="delete">Delete</Item>
        <Item key="edit">Edit</Item>
      </ActionGroup>
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
      <ActionGroup onAction={setAction}>
        <Item key="add">Add</Item>
        <Item key="delete">Delete</Item>
        <Item key="edit">Edit</Item>
      </ActionGroup>
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
      <ActionGroup
        onAction={setAction}
      >
        <Item key="add">
          Add
        </Item>
        <Item key="delete">
          Delete
        </Item>
        <Item key="edit">
          Edit
        </Item>
      </ActionGroup>
      <p>
        Action: {action}
      </p>
    </>
  );
}
```

## Content[#](#content)

* * *

ActionGroups accept a list of `[Item](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/collections/src/Item.ts:Item)` elements as children, each with a `key` prop. Alternatively, a function that returns `Item` elements is also supported. See the [collection components](https://react-spectrum.adobe.com/react-stately/collections.html) docs for more details about this API.

```
const items = [
  {label: 'React', name: 'React'},
  {label: 'Add', name: 'Add'},
  {label: 'Delete', name: 'Delete'}
];

<ActionGroup items={items}>
  {item => <Item key={item.name}>{item.label}</Item>}
</ActionGroup>
```

```
const items = [
  {label: 'React', name: 'React'},
  {label: 'Add', name: 'Add'},
  {label: 'Delete', name: 'Delete'}
];

<ActionGroup items={items}>
  {item => <Item key={item.name}>{item.label}</Item>}
</ActionGroup>
```

```
const items = [
  {
    label: 'React',
    name: 'React'
  },
  {
    label: 'Add',
    name: 'Add'
  },
  {
    label: 'Delete',
    name: 'Delete'
  }
];

<ActionGroup
  items={items}
>
  {(item) => (
    <Item
      key={item.name}
    >
      {item.label}
    </Item>
  )}
</ActionGroup>
```

Icons can be added to ActionGroup items by wrapping the label in a [Text](https://react-spectrum.adobe.com/react-spectrum/Text.html) element, and adding the icon as a sibling.

```
import {Text} from '@adobe/react-spectrum';
import Draw from '@spectrum-icons/workflow/Draw';
import Copy from '@spectrum-icons/workflow/Copy';
import Delete from '@spectrum-icons/workflow/Delete';

<ActionGroup>
  <Item key="edit">
    <Draw />
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
</ActionGroup>
```

```
import {Text} from '@adobe/react-spectrum';
import Draw from '@spectrum-icons/workflow/Draw';
import Copy from '@spectrum-icons/workflow/Copy';
import Delete from '@spectrum-icons/workflow/Delete';

<ActionGroup>
  <Item key="edit">
    <Draw />
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
</ActionGroup>
```

```
import {Text} from '@adobe/react-spectrum';
import Draw from '@spectrum-icons/workflow/Draw';
import Copy from '@spectrum-icons/workflow/Copy';
import Delete from '@spectrum-icons/workflow/Delete';

<ActionGroup>
  <Item key="edit">
    <Draw />
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
</ActionGroup>
```

You can also hide the label text within the buttons using the `buttonLabelBehavior` prop. When set to `"hide"`, the label is hidden and automatically shown in a tooltip on hover.

```
<ActionGroup buttonLabelBehavior="hide">
  <Item key="edit">
    <Draw />
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
</ActionGroup>
```

```
<ActionGroup buttonLabelBehavior="hide">
  <Item key="edit">
    <Draw />
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
</ActionGroup>
```

```
<ActionGroup buttonLabelBehavior="hide">
  <Item key="edit">
    <Draw />
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
</ActionGroup>
```

Icon only ActionGroups should usually include a tooltip to describe the button via the `buttonLabelBehavior` prop as described above. This also automatically handles labeling the button for assistive technology users.

In rare cases where no tooltip is desired, an alternative text label must be provided to identify the control for accessibility. This should be added using the `aria-label` prop to each Item.

```
<ActionGroup>
  <Item key="brush" aria-label="Brush"><Brush /></Item>
  <Item key="select" aria-label="Select"><Select /></Item>
  <Item key="regionSelect" aria-label="Select Region"><RegionSelect /></Item>
</ActionGroup>
```

```
<ActionGroup>
  <Item key="brush" aria-label="Brush">
    <Brush />
  </Item>
  <Item key="select" aria-label="Select">
    <Select />
  </Item>
  <Item key="regionSelect" aria-label="Select Region">
    <RegionSelect />
  </Item>
</ActionGroup>
```

```
<ActionGroup>
  <Item
    key="brush"
    aria-label="Brush"
  >
    <Brush />
  </Item>
  <Item
    key="select"
    aria-label="Select"
  >
    <Select />
  </Item>
  <Item
    key="regionSelect"
    aria-label="Select Region"
  >
    <RegionSelect />
  </Item>
</ActionGroup>
```

In order to internationalize an ActionGroup, the content provided to all child items should be localized.

* * *

ActionGroup supports multiple selection modes. By default, selection is disabled, however this can be changed using the `selectionMode` prop. Use `defaultSelectedKeys` to provide a default set of selected items (uncontrolled) and `selectedKeys` to set the selected items (controlled). The value of the selected keys must match the `key` prop of the items. See the `react-stately` [Selection docs](https://react-spectrum.adobe.com/react-stately/selection.html#selected-key-data-type) for caveats regarding selection prop typing.

```
<ActionGroup selectionMode="single" defaultSelectedKeys={['list']}>
  <Item key="grid">Grid view</Item>
  <Item key="list">List view</Item>
  <Item key="gallery">Gallery view</Item>
</ActionGroup>
```

```
<ActionGroup
  selectionMode="single"
  defaultSelectedKeys={['list']}
>
  <Item key="grid">Grid view</Item>
  <Item key="list">List view</Item>
  <Item key="gallery">Gallery view</Item>
</ActionGroup>
```

```
<ActionGroup
  selectionMode="single"
  defaultSelectedKeys={[
    'list'
  ]}
>
  <Item key="grid">
    Grid view
  </Item>
  <Item key="list">
    List view
  </Item>
  <Item key="gallery">
    Gallery view
  </Item>
</ActionGroup>
```

The `selectedKeys` prop can be used to make the selected state controlled.

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(new Set(['list']));

  return (
    <>
      <ActionGroup
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Item key="grid">Grid view</Item>
        <Item key="list">List view</Item>
        <Item key="gallery">Gallery view</Item>
      </ActionGroup>
      <p>Current selection (controlled): {[...selected]}</p>
    </>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(['list'])
  );

  return (
    <>
      <ActionGroup
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Item key="grid">Grid view</Item>
        <Item key="list">List view</Item>
        <Item key="gallery">Gallery view</Item>
      </ActionGroup>
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
  >(new Set(['list']));

  return (
    <>
      <ActionGroup
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Item key="grid">
          Grid view
        </Item>
        <Item key="list">
          List view
        </Item>
        <Item key="gallery">
          Gallery view
        </Item>
      </ActionGroup>
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
  let [selected, setSelected] = React.useState<Selection>(new Set(['list']));

  return (
    <>
      <ActionGroup
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Item key="grid">Grid view</Item>
        <Item key="list">List view</Item>
        <Item key="gallery">Gallery view</Item>
      </ActionGroup>
      <p>Current selections (controlled): {[...selected].join(', ')}</p>
    </>
  );
}
```

```
function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(['list'])
  );

  return (
    <>
      <ActionGroup
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Item key="grid">Grid view</Item>
        <Item key="list">List view</Item>
        <Item key="gallery">Gallery view</Item>
      </ActionGroup>
      <p>
        Current selections (controlled):{' '}
        {[...selected].join(', ')}
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
  >(new Set(['list']));

  return (
    <>
      <ActionGroup
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Item key="grid">
          Grid view
        </Item>
        <Item key="list">
          List view
        </Item>
        <Item key="gallery">
          Gallery view
        </Item>
      </ActionGroup>
      <p>
        Current
        selections
        (controlled):
        {' '}
        {[...selected]
          .join(', ')}
      </p>
    </>
  );
}
```

* * *

Use the `onSelectionChange` prop as a callback to handle press events on items when selectionMode is either `single` or `multiple`. The `key` prop from the selected item will be passed into the callback.

To continue to capturing actions when `selectionMode` is `none`, utilize the `onAction` prop.

```
import type {Key} from '@adobe/react-spectrum';

function Example() {
  let [actionKey, setActionKey] = React.useState<Key>('');
  return (
    <>
      <ActionGroup onAction={setActionKey}>
        <Item key="add">Add</Item>
        <Item key="delete">Delete</Item>
        <Item key="edit">Edit</Item>
      </ActionGroup>
      <p>Action: {actionKey}</p>
    </>
  );
}
```

```
import type {Key} from '@adobe/react-spectrum';

function Example() {
  let [actionKey, setActionKey] = React.useState<Key>('');
  return (
    <>
      <ActionGroup onAction={setActionKey}>
        <Item key="add">Add</Item>
        <Item key="delete">Delete</Item>
        <Item key="edit">Edit</Item>
      </ActionGroup>
      <p>Action: {actionKey}</p>
    </>
  );
}
```

```
import type {Key} from '@adobe/react-spectrum';

function Example() {
  let [
    actionKey,
    setActionKey
  ] = React.useState<
    Key
  >('');
  return (
    <>
      <ActionGroup
        onAction={setActionKey}
      >
        <Item key="add">
          Add
        </Item>
        <Item key="delete">
          Delete
        </Item>
        <Item key="edit">
          Edit
        </Item>
      </ActionGroup>
      <p>
        Action:{' '}
        {actionKey}
      </p>
    </>
  );
}
```

* * *

By default, ActionGroup items wrap to form a new line when horizontal space is limited. However, this can cause content to shift below the ActionGroup. If the ActionGroup should always appear in a single line, the `overflowMode` prop can be set to `collapse`. In this mode, when horizontal space is limited, the ActionGroup will collapse into a menu. The exact behavior depends on the `selectionMode`.

When selection is not enabled, ActionGroup displays as many items as possible and collapses the remaining items into a more actions menu.

```
<ActionGroup overflowMode="collapse" maxWidth={250}>
  <Item key="edit">
    <Draw />
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
  <Item key="move">
    <Move />
    <Text>Move</Text>
  </Item>
  <Item key="duplicate">
    <Duplicate />
    <Text>Duplicate</Text>
  </Item>
</ActionGroup>
```

```
<ActionGroup overflowMode="collapse" maxWidth={250}>
  <Item key="edit">
    <Draw />
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
  <Item key="move">
    <Move />
    <Text>Move</Text>
  </Item>
  <Item key="duplicate">
    <Duplicate />
    <Text>Duplicate</Text>
  </Item>
</ActionGroup>
```

```
<ActionGroup
  overflowMode="collapse"
  maxWidth={250}
>
  <Item key="edit">
    <Draw />
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
  <Item key="move">
    <Move />
    <Text>Move</Text>
  </Item>
  <Item key="duplicate">
    <Duplicate />
    <Text>
      Duplicate
    </Text>
  </Item>
</ActionGroup>
```

When selection is enabled, ActionGroup collapses all items into a menu together when space is limited. The menu button indicates when one of the options within it is selected by showing a highlighted state. A `summaryIcon` should be specified to visually communicate the purpose of the ActionGroup when collapsed, and an `aria-label` should be provided to describe the ActionGroup to assistive technology.

This example shows a multi-selectable ActionGroup that can be used to select text styles. When space is limited, it collapses into a dropdown menu, and displays the `TextStyle` icon passed to the `summaryIcon` prop.

```
import TextStyle from '@spectrum-icons/workflow/TextStyle';

<ActionGroup
  aria-label="Text style"
  overflowMode="collapse"
  selectionMode="multiple"
  isEmphasized
  summaryIcon={<TextStyle />}
  maxWidth={100}>
  <Item key="bold">
    <TagBold />
    <Text>Bold</Text>
  </Item>
  <Item key="italic">
    <TagItalic />
    <Text>Italic</Text>
  </Item>
  <Item key="underline">
    <TagUnderline />
    <Text>Underline</Text>
  </Item>
  <Item key="strike">
    <TextStrikethrough />
    <Text>Strikethrough</Text>
  </Item>
</ActionGroup>
```

```
import TextStyle from '@spectrum-icons/workflow/TextStyle';

<ActionGroup
  aria-label="Text style"
  overflowMode="collapse"
  selectionMode="multiple"
  isEmphasized
  summaryIcon={<TextStyle />}
  maxWidth={100}>
  <Item key="bold">
    <TagBold />
    <Text>Bold</Text>
  </Item>
  <Item key="italic">
    <TagItalic />
    <Text>Italic</Text>
  </Item>
  <Item key="underline">
    <TagUnderline />
    <Text>Underline</Text>
  </Item>
  <Item key="strike">
    <TextStrikethrough />
    <Text>Strikethrough</Text>
  </Item>
</ActionGroup>
```

```
import TextStyle from '@spectrum-icons/workflow/TextStyle';

<ActionGroup
  aria-label="Text style"
  overflowMode="collapse"
  selectionMode="multiple"
  isEmphasized
  summaryIcon={
    <TextStyle />
  }
  maxWidth={100}
>
  <Item key="bold">
    <TagBold />
    <Text>Bold</Text>
  </Item>
  <Item key="italic">
    <TagItalic />
    <Text>Italic</Text>
  </Item>
  <Item key="underline">
    <TagUnderline />
    <Text>
      Underline
    </Text>
  </Item>
  <Item key="strike">
    <TextStrikethrough />
    <Text>
      Strikethrough
    </Text>
  </Item>
</ActionGroup>
```

A special case where a `summaryIcon` is not needed is a single selectable ActionGroup (`selectionMode="single"`) which enforces that an item is always selected (`disallowEmptySelection`). In this case, the selected item is displayed inside the menu button when collapsed.

```
<ActionGroup
  aria-label="Text alignment"
  overflowMode="collapse"
  selectionMode="single"
  defaultSelectedKeys={['left']}
  disallowEmptySelection
  buttonLabelBehavior="hide"
  isEmphasized
  maxWidth={100}>
  <Item key="left">
    <TextAlignLeft />
    <Text>Align Left</Text>
  </Item>
  <Item key="center">
    <TextAlignCenter />
    <Text>Align Center</Text>
  </Item>
  <Item key="right">
    <TextAlignRight />
    <Text>Align Right</Text>
  </Item>
  <Item key="justify">
    <TextAlignJustify />
    <Text>Justify</Text>
  </Item>
</ActionGroup>
```

```
<ActionGroup
  aria-label="Text alignment"
  overflowMode="collapse"
  selectionMode="single"
  defaultSelectedKeys={['left']}
  disallowEmptySelection
  buttonLabelBehavior="hide"
  isEmphasized
  maxWidth={100}>
  <Item key="left">
    <TextAlignLeft />
    <Text>Align Left</Text>
  </Item>
  <Item key="center">
    <TextAlignCenter />
    <Text>Align Center</Text>
  </Item>
  <Item key="right">
    <TextAlignRight />
    <Text>Align Right</Text>
  </Item>
  <Item key="justify">
    <TextAlignJustify />
    <Text>Justify</Text>
  </Item>
</ActionGroup>
```

```
<ActionGroup
  aria-label="Text alignment"
  overflowMode="collapse"
  selectionMode="single"
  defaultSelectedKeys={[
    'left'
  ]}
  disallowEmptySelection
  buttonLabelBehavior="hide"
  isEmphasized
  maxWidth={100}
>
  <Item key="left">
    <TextAlignLeft />
    <Text>
      Align Left
    </Text>
  </Item>
  <Item key="center">
    <TextAlignCenter />
    <Text>
      Align Center
    </Text>
  </Item>
  <Item key="right">
    <TextAlignRight />
    <Text>
      Align Right
    </Text>
  </Item>
  <Item key="justify">
    <TextAlignJustify />
    <Text>
      Justify
    </Text>
  </Item>
</ActionGroup>
```

In addition to collapsing items that don't fit into a menu, the button labels can also be automatically hidden when space is limited. This keeps more buttons visible at a time before needing to collapse into a menu. This behavior can be enabled by setting the `buttonLabelBehavior` prop to `"collapse"`. The labels will be automatically shown in tooltips when collapsed.

```
<ActionGroup
  overflowMode="collapse"
  buttonLabelBehavior="collapse"
  maxWidth={180}
>
  <Item key="edit">
    <Draw />
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
  <Item key="move">
    <Move />
    <Text>Move</Text>
  </Item>
  <Item key="duplicate">
    <Duplicate />
    <Text>Duplicate</Text>
  </Item>
</ActionGroup>
```

```
<ActionGroup
  overflowMode="collapse"
  buttonLabelBehavior="collapse"
  maxWidth={180}
>
  <Item key="edit">
    <Draw />
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
  <Item key="move">
    <Move />
    <Text>Move</Text>
  </Item>
  <Item key="duplicate">
    <Duplicate />
    <Text>Duplicate</Text>
  </Item>
</ActionGroup>
```

```
<ActionGroup
  overflowMode="collapse"
  buttonLabelBehavior="collapse"
  maxWidth={180}
>
  <Item key="edit">
    <Draw />
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
  <Item key="move">
    <Move />
    <Text>Move</Text>
  </Item>
  <Item key="duplicate">
    <Duplicate />
    <Text>
      Duplicate
    </Text>
  </Item>
</ActionGroup>
```

Non-selectable vertical ActionGroups also support collapsing when the height is too small to fit all of the buttons. The behavior is the same as for horizontal ActionGroups, except for the positioning of the tooltips and menu.

Vertical ActionGroups with selection do not currently support collapsing. When selection is enabled, we recommend placing the ActionGroup in a scrollable container so that the user can access all items.

```
<ActionGroup
  overflowMode="collapse"
  orientation="vertical"
  buttonLabelBehavior="hide"
  maxHeight={150}
>
  <Item key="edit">
    <Draw />
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
  <Item key="move">
    <Move />
    <Text>Move</Text>
  </Item>
  <Item key="duplicate">
    <Duplicate />
    <Text>Duplicate</Text>
  </Item>
</ActionGroup>
```

```
<ActionGroup
  overflowMode="collapse"
  orientation="vertical"
  buttonLabelBehavior="hide"
  maxHeight={150}
>
  <Item key="edit">
    <Draw />
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
  <Item key="move">
    <Move />
    <Text>Move</Text>
  </Item>
  <Item key="duplicate">
    <Duplicate />
    <Text>Duplicate</Text>
  </Item>
</ActionGroup>
```

```
<ActionGroup
  overflowMode="collapse"
  orientation="vertical"
  buttonLabelBehavior="hide"
  maxHeight={150}
>
  <Item key="edit">
    <Draw />
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
  <Item key="move">
    <Move />
    <Text>Move</Text>
  </Item>
  <Item key="duplicate">
    <Duplicate />
    <Text>
      Duplicate
    </Text>
  </Item>
</ActionGroup>
```

* * *

Name

Type

Default

Description

`children`

`[ItemElement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:ItemElement)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)> | [ItemElement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:ItemElement)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>[] | [ItemRenderer](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:ItemRenderer)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

—

An list of `Item` elements or a function. If the latter, a list of items must be provided using the `items` prop.

`isEmphasized`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the ActionButtons should be displayed with a [emphasized style](https://spectrum.adobe.com/page/action-button/#Emphasis).

`density`

`'compact' | 'regular'`

`'regular'`

Sets the amount of space between buttons.

`isJustified`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the ActionButtons should be justified in their container.

`isQuiet`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether ActionButtons should use the [quiet style](https://spectrum.adobe.com/page/action-button/#Quiet).

`staticColor`

`'white' | 'black'`

—

The static color style to apply. Useful when the ActionGroup appears over a color background.

`overflowMode`

`'wrap' | 'collapse'`

`'wrap'`

Defines the behavior of the ActionGroup when the buttons do not fit in the available space. When set to 'wrap', the items wrap to form a new line. When set to 'collapse', the items that do not fit are collapsed into a dropdown menu.

`buttonLabelBehavior`

`'show' | 'collapse' | 'hide'`

`'show'`

Defines when the text within the buttons should be hidden and only the icon should be shown. When set to 'hide', the text is always shown in a tooltip. When set to 'collapse', the text is visible if space is available, and hidden when space is limited. The text is always visible when the item is collapsed into a menu.

`summaryIcon`

`[ReactElement](https://reactjs.org/docs/rendering-elements.html)`

—

The icon displayed in the dropdown menu button when a selectable ActionGroup is collapsed.

`orientation`

`[Orientation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/orientation.d.ts:Orientation)`

`'horizontal'`

The axis the ActionGroup should align with.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

—

A list of items to display as children. Must be used with a function as the sole child.

`disabledKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

A list of keys to disable.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the ActionGroup is disabled. Shows that a selection exists, but is not available in that circumstance.

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

Invoked when an action is taken on a child. Especially useful when `selectionMode` is none. The sole argument `key` is the key for the item.

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

* * *

```
<ActionGroup isQuiet>
  <Item key="add">Add</Item>
  <Item key="delete">Delete</Item>
  <Item key="edit">Edit</Item>
</ActionGroup>
```

```
<ActionGroup isQuiet>
  <Item key="add">Add</Item>
  <Item key="delete">Delete</Item>
  <Item key="edit">Edit</Item>
</ActionGroup>
```

```
<ActionGroup isQuiet>
  <Item key="add">
    Add
  </Item>
  <Item key="delete">
    Delete
  </Item>
  <Item key="edit">
    Edit
  </Item>
</ActionGroup>
```

The additional styling provided by the `isEmphasized` prop is only applied when items are selected.

```
<ActionGroup
  isEmphasized
  selectionMode="single"
  defaultSelectedKeys={['list']}>
  <Item key="grid">Grid view</Item>
  <Item key="list">List view</Item>
  <Item key="gallery">Gallery view</Item>
</ActionGroup>
```

```
<ActionGroup
  isEmphasized
  selectionMode="single"
  defaultSelectedKeys={['list']}>
  <Item key="grid">Grid view</Item>
  <Item key="list">List view</Item>
  <Item key="gallery">Gallery view</Item>
</ActionGroup>
```

```
<ActionGroup
  isEmphasized
  selectionMode="single"
  defaultSelectedKeys={[
    'list'
  ]}
>
  <Item key="grid">
    Grid view
  </Item>
  <Item key="list">
    List view
  </Item>
  <Item key="gallery">
    Gallery view
  </Item>
</ActionGroup>
```

The `staticColor` prop can be used when the ActionGroup is displayed over a color background. When selected, the icon and text in each button automatically take on the color of the background. You are responsible for choosing the static color variant that ensures the text meets an [accessible contrast ratio](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) with the background.

```
<Flex wrap gap="size-250">
  <View backgroundColor="static-blue-700" padding="size-500">
    <ActionGroup staticColor="white">
      <Item key="edit">
        <Draw />
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
    </ActionGroup>
  </View>
  <View backgroundColor="static-yellow-400" padding="size-500">
    <ActionGroup
      staticColor="black"
      isQuiet
      buttonLabelBehavior="hide"
      selectionMode="single"
      disallowEmptySelection
      defaultSelectedKeys={['list']}>
      <Item key="list">
        <ViewList />
        <Text>List view</Text>
      </Item>
      <Item key="grid">
        <ViewGrid />
        <Text>Grid view</Text>
      </Item>
      <Item key="gallery">
        <ViewCard />
        <Text>Gallery view</Text>
      </Item>
    </ActionGroup>
  </View>
</Flex>
```

```
<Flex wrap gap="size-250">
  <View
    backgroundColor="static-blue-700"
    padding="size-500"
  >
    <ActionGroup staticColor="white">
      <Item key="edit">
        <Draw />
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
    </ActionGroup>
  </View>
  <View
    backgroundColor="static-yellow-400"
    padding="size-500"
  >
    <ActionGroup
      staticColor="black"
      isQuiet
      buttonLabelBehavior="hide"
      selectionMode="single"
      disallowEmptySelection
      defaultSelectedKeys={['list']}
    >
      <Item key="list">
        <ViewList />
        <Text>List view</Text>
      </Item>
      <Item key="grid">
        <ViewGrid />
        <Text>Grid view</Text>
      </Item>
      <Item key="gallery">
        <ViewCard />
        <Text>Gallery view</Text>
      </Item>
    </ActionGroup>
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
    <ActionGroup staticColor="white">
      <Item key="edit">
        <Draw />
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
    </ActionGroup>
  </View>
  <View
    backgroundColor="static-yellow-400"
    padding="size-500"
  >
    <ActionGroup
      staticColor="black"
      isQuiet
      buttonLabelBehavior="hide"
      selectionMode="single"
      disallowEmptySelection
      defaultSelectedKeys={[
        'list'
      ]}
    >
      <Item key="list">
        <ViewList />
        <Text>
          List view
        </Text>
      </Item>
      <Item key="grid">
        <ViewGrid />
        <Text>
          Grid view
        </Text>
      </Item>
      <Item key="gallery">
        <ViewCard />
        <Text>
          Gallery view
        </Text>
      </Item>
    </ActionGroup>
  </View>
</Flex>
```

To disable the entire ActionGroup, use the `isDisabled` prop on the root.

```
<ActionGroup isDisabled>
  <Item key="add">Add</Item>
  <Item key="delete">Delete</Item>
  <Item key="edit">Edit</Item>
</ActionGroup>
```

```
<ActionGroup isDisabled>
  <Item key="add">Add</Item>
  <Item key="delete">Delete</Item>
  <Item key="edit">Edit</Item>
</ActionGroup>
```

```
<ActionGroup
  isDisabled
>
  <Item key="add">
    Add
  </Item>
  <Item key="delete">
    Delete
  </Item>
  <Item key="edit">
    Edit
  </Item>
</ActionGroup>
```

To disable individual items, a list of `disabledKeys` can be provided.

```
<ActionGroup disabledKeys={['add', 'delete']}>
  <Item key="add">Add</Item>
  <Item key="delete">Delete</Item>
  <Item key="edit">Edit</Item>
</ActionGroup>
```

```
<ActionGroup disabledKeys={['add', 'delete']}>
  <Item key="add">Add</Item>
  <Item key="delete">Delete</Item>
  <Item key="edit">Edit</Item>
</ActionGroup>
```

```
<ActionGroup
  disabledKeys={[
    'add',
    'delete'
  ]}
>
  <Item key="add">
    Add
  </Item>
  <Item key="delete">
    Delete
  </Item>
  <Item key="edit">
    Edit
  </Item>
</ActionGroup>
```

Using the `orientation` prop with value `vertical` changes the alignment of the items to follow the y-axis.

```
<ActionGroup orientation="vertical">
  <Item key="brush" aria-label="Brush"><Brush /></Item>
  <Item key="select" aria-label="Select"><Select /></Item>
  <Item key="regionSelect" aria-label="Select Region"><RegionSelect /></Item>
</ActionGroup>
```

```
<ActionGroup orientation="vertical">
  <Item key="brush" aria-label="Brush">
    <Brush />
  </Item>
  <Item key="select" aria-label="Select">
    <Select />
  </Item>
  <Item key="regionSelect" aria-label="Select Region">
    <RegionSelect />
  </Item>
</ActionGroup>
```

```
<ActionGroup orientation="vertical">
  <Item
    key="brush"
    aria-label="Brush"
  >
    <Brush />
  </Item>
  <Item
    key="select"
    aria-label="Select"
  >
    <Select />
  </Item>
  <Item
    key="regionSelect"
    aria-label="Select Region"
  >
    <RegionSelect />
  </Item>
</ActionGroup>
```

Using the `density` prop with value `compact` changes the margins between the buttons. In the default case, this merges the borders of neighboring ActionButtons. In the quiet case, it just reduces the margin size between the buttons.

```
<ActionGroup density="compact">
  <Item key="brush" aria-label="Brush"><Brush /></Item>
  <Item key="select" aria-label="Select"><Select /></Item>
  <Item key="regionSelect" aria-label="Select Region"><RegionSelect /></Item>
</ActionGroup>
```

```
<ActionGroup density="compact">
  <Item key="brush" aria-label="Brush">
    <Brush />
  </Item>
  <Item key="select" aria-label="Select">
    <Select />
  </Item>
  <Item key="regionSelect" aria-label="Select Region">
    <RegionSelect />
  </Item>
</ActionGroup>
```

```
<ActionGroup density="compact">
  <Item
    key="brush"
    aria-label="Brush"
  >
    <Brush />
  </Item>
  <Item
    key="select"
    aria-label="Select"
  >
    <Select />
  </Item>
  <Item
    key="regionSelect"
    aria-label="Select Region"
  >
    <RegionSelect />
  </Item>
</ActionGroup>
```

```
<ActionGroup isQuiet density="compact">
  <Item key="brush" aria-label="Brush"><Brush /></Item>
  <Item key="select" aria-label="Select"><Select /></Item>
  <Item key="regionSelect" aria-label="Select Region"><RegionSelect /></Item>
</ActionGroup>
```

```
<ActionGroup isQuiet density="compact">
  <Item key="brush" aria-label="Brush">
    <Brush />
  </Item>
  <Item key="select" aria-label="Select">
    <Select />
  </Item>
  <Item key="regionSelect" aria-label="Select Region">
    <RegionSelect />
  </Item>
</ActionGroup>
```

```
<ActionGroup
  isQuiet
  density="compact"
>
  <Item
    key="brush"
    aria-label="Brush"
  >
    <Brush />
  </Item>
  <Item
    key="select"
    aria-label="Select"
  >
    <Select />
  </Item>
  <Item
    key="regionSelect"
    aria-label="Select Region"
  >
    <RegionSelect />
  </Item>
</ActionGroup>
```

The `isJustified` prop will divide all available horizontal space evenly among the buttons.

```
<Flex width="size-2000" direction="column">
  <ActionGroup isJustified>
    <Item key="brush" aria-label="Brush"><Brush /></Item>
    <Item key="select" aria-label="Select"><Select /></Item>
    <Item key="regionSelect" aria-label="Select Region"><RegionSelect /></Item>
  </ActionGroup>
</Flex>
```

```
<Flex width="size-2000" direction="column">
  <ActionGroup isJustified>
    <Item key="brush" aria-label="Brush">
      <Brush />
    </Item>
    <Item key="select" aria-label="Select">
      <Select />
    </Item>
    <Item key="regionSelect" aria-label="Select Region">
      <RegionSelect />
    </Item>
  </ActionGroup>
</Flex>
```

```
<Flex
  width="size-2000"
  direction="column"
>
  <ActionGroup
    isJustified
  >
    <Item
      key="brush"
      aria-label="Brush"
    >
      <Brush />
    </Item>
    <Item
      key="select"
      aria-label="Select"
    >
      <Select />
    </Item>
    <Item
      key="regionSelect"
      aria-label="Select Region"
    >
      <RegionSelect />
    </Item>
  </ActionGroup>
</Flex>
```
