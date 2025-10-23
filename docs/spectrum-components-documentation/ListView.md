---
source: https://react-spectrum.adobe.com/react-spectrum/ListView.html
date: Thu, 16 Oct 2025 01:07:44 GMT
---

A ListView displays a list of interactive items, and allows a user to navigate, select, or perform an action.

* * *

```
<ListView
  selectionMode="multiple"
  aria-label="Static ListView items example"
  maxWidth="size-6000"
>
  <Item>Adobe Photoshop</Item>
  <Item>Adobe InDesign</Item>
  <Item>Adobe AfterEffects</Item>
  <Item>Adobe Illustrator</Item>
  <Item>Adobe Lightroom</Item>
</ListView>
```

```
<ListView
  selectionMode="multiple"
  aria-label="Static ListView items example"
  maxWidth="size-6000"
>
  <Item>Adobe Photoshop</Item>
  <Item>Adobe InDesign</Item>
  <Item>Adobe AfterEffects</Item>
  <Item>Adobe Illustrator</Item>
  <Item>Adobe Lightroom</Item>
</ListView>
```

```
<ListView
  selectionMode="multiple"
  aria-label="Static ListView items example"
  maxWidth="size-6000"
>
  <Item>
    Adobe Photoshop
  </Item>
  <Item>
    Adobe InDesign
  </Item>
  <Item>
    Adobe AfterEffects
  </Item>
  <Item>
    Adobe Illustrator
  </Item>
  <Item>
    Adobe Lightroom
  </Item>
</ListView>
```

## Content[#](#content)

* * *

ListView is a [collection component](https://react-spectrum.adobe.com/react-stately/collections.html) that provides users with a way to view, select, navigate, or drag and drop items in a list. While it may feel similar to the [ListBox](https://react-spectrum.adobe.com/react-spectrum/ListBox.html) component, ListView offers greater flexibility in the contents it can render and can distinguish between row selection and actions performed on a row. This makes ListView an ideal component for use cases such as file managers.

Basic usage of ListView, seen in the example above, shows the use of a static collection where the contents of the ListView are hard coded. Dynamic collections, as shown below, can be used when the options come from an external data source such as an API, or update over time. Providing the data dynamically allows ListView to automatically cache the rendering of each item, which dramatically improves performance.

Each item has a unique key defined by the data. In the example below, the `key` of each row element is implicitly defined by the id property of the row object. See [collections](https://react-spectrum.adobe.com/react-stately/collections.html#unique-keys) to learn more about keys in dynamic collections.

```
const items = [
  { id: 1, name: 'Adobe Photoshop' },
  { id: 2, name: 'Adobe XD' },
  { id: 3, name: 'Adobe InDesign' },
  { id: 4, name: 'Adobe AfterEffects' },
  { id: 5, name: 'Adobe Illustrator' },
  { id: 6, name: 'Adobe Lightroom' },
  { id: 7, name: 'Adobe Premiere Pro' },
  { id: 8, name: 'Adobe Fresco' },
  { id: 9, name: 'Adobe Dreamweaver' }
];

<ListView
  items={items}
  selectionMode="multiple"
  maxWidth="size-6000"
  height="250px"
  aria-label="Dynamic ListView items example"
>
  {(item) => <Item>{item.name}</Item>}
</ListView>
```

```
const items = [
  { id: 1, name: 'Adobe Photoshop' },
  { id: 2, name: 'Adobe XD' },
  { id: 3, name: 'Adobe InDesign' },
  { id: 4, name: 'Adobe AfterEffects' },
  { id: 5, name: 'Adobe Illustrator' },
  { id: 6, name: 'Adobe Lightroom' },
  { id: 7, name: 'Adobe Premiere Pro' },
  { id: 8, name: 'Adobe Fresco' },
  { id: 9, name: 'Adobe Dreamweaver' }
];

<ListView
  items={items}
  selectionMode="multiple"
  maxWidth="size-6000"
  height="250px"
  aria-label="Dynamic ListView items example"
>
  {(item) => <Item>{item.name}</Item>}
</ListView>
```

```
const items = [
  {
    id: 1,
    name:
      'Adobe Photoshop'
  },
  {
    id: 2,
    name: 'Adobe XD'
  },
  {
    id: 3,
    name:
      'Adobe InDesign'
  },
  {
    id: 4,
    name:
      'Adobe AfterEffects'
  },
  {
    id: 5,
    name:
      'Adobe Illustrator'
  },
  {
    id: 6,
    name:
      'Adobe Lightroom'
  },
  {
    id: 7,
    name:
      'Adobe Premiere Pro'
  },
  {
    id: 8,
    name: 'Adobe Fresco'
  },
  {
    id: 9,
    name:
      'Adobe Dreamweaver'
  }
];

<ListView
  items={items}
  selectionMode="multiple"
  maxWidth="size-6000"
  height="250px"
  aria-label="Dynamic ListView items example"
>
  {(item) => (
    <Item>
      {item.name}
    </Item>
  )}
</ListView>
```

To internationalize a ListView, all text content within the ListView should be localized. This includes the `aria-label` provided to the ListView if any. For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of ListView is automatically flipped.

* * *

An `aria-label` must be provided to the ListView for accessibility. If the ListView is labeled by a separate element, an `aria-labelledby` prop must be provided using the id of the labeling element instead.

* * *

ListView supports loading data asynchronously, and will display a progress circle reflecting the current load state, set by the `loadingState` prop. It also supports infinite scrolling to load more data on demand as the user scrolls, via the `onLoadMore` prop.

This example uses the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook to handle loading the data. See the docs for more information.

```
import {useAsyncList} from '@adobe/react-spectrum';

interface Character {
  name: string;
}

function AsyncList() {
  let list = useAsyncList<Character>({
    async load({ signal, cursor }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      let res = await fetch(
        cursor || `https://swapi.py4e.com/api/people/?search=`,
        { signal }
      );
      let json = await res.json();

      return {
        items: json.results,
        cursor: json.next
      };
    }
  });

  return (
    <ListView
      selectionMode="multiple"
      aria-label="Async loading ListView example"
      maxWidth="size-6000"
      height="size-3000"
      items={list.items}
      loadingState={list.loadingState}
      onLoadMore={list.loadMore}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ListView>
  );
}
```

```
import {useAsyncList} from '@adobe/react-spectrum';

interface Character {
  name: string;
}

function AsyncList() {
  let list = useAsyncList<Character>({
    async load({ signal, cursor }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      let res = await fetch(
        cursor ||
          `https://swapi.py4e.com/api/people/?search=`,
        { signal }
      );
      let json = await res.json();

      return {
        items: json.results,
        cursor: json.next
      };
    }
  });

  return (
    <ListView
      selectionMode="multiple"
      aria-label="Async loading ListView example"
      maxWidth="size-6000"
      height="size-3000"
      items={list.items}
      loadingState={list.loadingState}
      onLoadMore={list.loadMore}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ListView>
  );
}
```

```
import {useAsyncList} from '@adobe/react-spectrum';

interface Character {
  name: string;
}

function AsyncList() {
  let list =
    useAsyncList<
      Character
    >({
      async load(
        {
          signal,
          cursor
        }
      ) {
        if (cursor) {
          cursor = cursor
            .replace(
              /^http:\/\//i,
              'https://'
            );
        }

        let res =
          await fetch(
            cursor ||
              `https://swapi.py4e.com/api/people/?search=`,
            { signal }
          );
        let json =
          await res
            .json();

        return {
          items:
            json.results,
          cursor:
            json.next
        };
      }
    });

  return (
    <ListView
      selectionMode="multiple"
      aria-label="Async loading ListView example"
      maxWidth="size-6000"
      height="size-3000"
      items={list.items}
      loadingState={list
        .loadingState}
      onLoadMore={list
        .loadMore}
    >
      {(item) => (
        <Item
          key={item.name}
        >
          {item.name}
        </Item>
      )}
    </ListView>
  );
}
```

* * *

Shows a list view with labels pointing to its parts, including a parent list view item, a child list view item, and a selected listview item.Actions(optional)Justify end →← Justify startContext area(optional)Navigation icon(optional)Checkbox(optional)Drag icon(optional)Label areaDescription area (optional)

Items within a ListView also allow for additional content used to add context or provide additional actions to items. Descriptions, illustrations, and thumbnails can be added to the children of `<Item>` as shown in the example below. If a description is added, the prop `slot="description"` must be used to distinguish the different `<Text>` elements. Additionally, components such as `<ActionButton>`, `<ActionGroup>`, and `<ActionMenu>` will be styled appropriately if included within an item. Providing the `hasChildItems` prop to an `<Item>` will add a chevron icon to the end of the row to visually indicate that the row has children.

```
import File from '@spectrum-icons/illustrations/File';
import Folder from '@spectrum-icons/illustrations/Folder';

<ListView
  selectionMode="multiple"
  maxWidth="size-6000"
  aria-label="ListView example with complex items"
  onAction={(key) => alert(`Triggering action on item ${key}`)}
>
  <Item key="1" textValue="Utilities" hasChildItems>
    <Folder />
    <Text>Utilities</Text>
    <Text slot="description">16 items</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit />
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete />
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item key="2" textValue="Glasses Dog">
    <Image
      src="https://random.dog/1a0535a6-ca89-4059-9b3a-04a554c0587b.jpg"
      alt="Shiba Inu with glasses"
    />
    <Text>Glasses Dog</Text>
    <Text slot="description">JPG</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit />
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete />
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item key="3" textValue="readme">
    <File />
    <Text>readme.txt</Text>
    <Text slot="description">TXT</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit />
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete />
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item key="4" textValue="Onboarding">
    <File />
    <Text>Onboarding</Text>
    <Text slot="description">PDF</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit />
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete />
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
</ListView>
```

```
import File from '@spectrum-icons/illustrations/File';
import Folder from '@spectrum-icons/illustrations/Folder';

<ListView
  selectionMode="multiple"
  maxWidth="size-6000"
  aria-label="ListView example with complex items"
  onAction={(key) =>
    alert(`Triggering action on item ${key}`)}
>
  <Item key="1" textValue="Utilities" hasChildItems>
    <Folder />
    <Text>Utilities</Text>
    <Text slot="description">16 items</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit />
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete />
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item key="2" textValue="Glasses Dog">
    <Image
      src="https://random.dog/1a0535a6-ca89-4059-9b3a-04a554c0587b.jpg"
      alt="Shiba Inu with glasses"
    />
    <Text>Glasses Dog</Text>
    <Text slot="description">JPG</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit />
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete />
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item key="3" textValue="readme">
    <File />
    <Text>readme.txt</Text>
    <Text slot="description">TXT</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit />
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete />
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item key="4" textValue="Onboarding">
    <File />
    <Text>Onboarding</Text>
    <Text slot="description">PDF</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit />
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete />
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
</ListView>
```

```
import File from '@spectrum-icons/illustrations/File';
import Folder from '@spectrum-icons/illustrations/Folder';

<ListView
  selectionMode="multiple"
  maxWidth="size-6000"
  aria-label="ListView example with complex items"
  onAction={(key) =>
    alert(
      `Triggering action on item ${key}`
    )}
>
  <Item
    key="1"
    textValue="Utilities"
    hasChildItems
  >
    <Folder />
    <Text>
      Utilities
    </Text>
    <Text slot="description">
      16 items
    </Text>
    <ActionMenu>
      <Item
        key="edit"
        textValue="Edit"
      >
        <Edit />
        <Text>
          Edit
        </Text>
      </Item>
      <Item
        key="delete"
        textValue="Delete"
      >
        <Delete />
        <Text>
          Delete
        </Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item
    key="2"
    textValue="Glasses Dog"
  >
    <Image
      src="https://random.dog/1a0535a6-ca89-4059-9b3a-04a554c0587b.jpg"
      alt="Shiba Inu with glasses"
    />
    <Text>
      Glasses Dog
    </Text>
    <Text slot="description">
      JPG
    </Text>
    <ActionMenu>
      <Item
        key="edit"
        textValue="Edit"
      >
        <Edit />
        <Text>
          Edit
        </Text>
      </Item>
      <Item
        key="delete"
        textValue="Delete"
      >
        <Delete />
        <Text>
          Delete
        </Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item
    key="3"
    textValue="readme"
  >
    <File />
    <Text>
      readme.txt
    </Text>
    <Text slot="description">
      TXT
    </Text>
    <ActionMenu>
      <Item
        key="edit"
        textValue="Edit"
      >
        <Edit />
        <Text>
          Edit
        </Text>
      </Item>
      <Item
        key="delete"
        textValue="Delete"
      >
        <Delete />
        <Text>
          Delete
        </Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item
    key="4"
    textValue="Onboarding"
  >
    <File />
    <Text>
      Onboarding
    </Text>
    <Text slot="description">
      PDF
    </Text>
    <ActionMenu>
      <Item
        key="edit"
        textValue="Edit"
      >
        <Edit />
        <Text>
          Edit
        </Text>
      </Item>
      <Item
        key="delete"
        textValue="Delete"
      >
        <Delete />
        <Text>
          Delete
        </Text>
      </Item>
    </ActionMenu>
  </Item>
</ListView>
```

* * *

By default, ListView doesn't allow row selection, but this can be enabled using the `selectionMode` prop. Use `defaultSelectedKeys` to provide a default set of selected rows. Note that the value of the selected keys must match the `key` prop of the Item.

The example below enables multiple selection mode, and uses `defaultSelectedKeys` to select the rows with keys "Charizard" and "Venusaur".

```
<ListView
  maxWidth="size-6000"
  selectionMode="multiple"
  defaultSelectedKeys={['Charizard', 'Venusaur']}
  aria-label="ListView multiple selection example"
>
  <Item key="Charizard">
    Charizard
  </Item>
  <Item key="Blastoise">
    Blastoise
  </Item>
  <Item key="Venusaur">
    Venusaur
  </Item>
  <Item key="Pikachu">
    Pikachu
  </Item>
</ListView>
```

```
<ListView
  maxWidth="size-6000"
  selectionMode="multiple"
  defaultSelectedKeys={['Charizard', 'Venusaur']}
  aria-label="ListView multiple selection example"
>
  <Item key="Charizard">
    Charizard
  </Item>
  <Item key="Blastoise">
    Blastoise
  </Item>
  <Item key="Venusaur">
    Venusaur
  </Item>
  <Item key="Pikachu">
    Pikachu
  </Item>
</ListView>
```

```
<ListView
  maxWidth="size-6000"
  selectionMode="multiple"
  defaultSelectedKeys={[
    'Charizard',
    'Venusaur'
  ]}
  aria-label="ListView multiple selection example"
>
  <Item key="Charizard">
    Charizard
  </Item>
  <Item key="Blastoise">
    Blastoise
  </Item>
  <Item key="Venusaur">
    Venusaur
  </Item>
  <Item key="Pikachu">
    Pikachu
  </Item>
</ListView>
```

To programmatically control row selection, use the `selectedKeys` prop paired with the `onSelectionChange` callback. The `key` prop from the selected rows will be passed into the callback when the row is pressed, allowing you to update state accordingly. Note that the value of the selected keys must match the `key` prop of the Item.

Here is how you would control selection for the above example.

```
import type {SpectrumListViewProps} from '@adobe/react-spectrum';

function PokemonList<T>(props: Omit<SpectrumListViewProps<T>, 'children'>) {
  let rows = [
    { id: 1, name: 'Charizard' },
    { id: 2, name: 'Blastoise' },
    { id: 3, name: 'Venusaur' },
    { id: 4, name: 'Pikachu' }
  ];

  let [selectedKeys, setSelectedKeys] = React.useState(
    props.defaultSelectedKeys || new Set([2])
  );

  return (
    <ListView
      maxWidth="size-6000"
      aria-label="ListView with controlled selection"
      selectionMode="multiple"
      {...props}
      items={rows}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      {(item) => (
        <Item>
          {item.name}
        </Item>
      )}
    </ListView>
  );
}
```

```
import type {SpectrumListViewProps} from '@adobe/react-spectrum';

function PokemonList<T>(
  props: Omit<SpectrumListViewProps<T>, 'children'>
) {
  let rows = [
    { id: 1, name: 'Charizard' },
    { id: 2, name: 'Blastoise' },
    { id: 3, name: 'Venusaur' },
    { id: 4, name: 'Pikachu' }
  ];

  let [selectedKeys, setSelectedKeys] = React.useState(
    props.defaultSelectedKeys || new Set([2])
  );

  return (
    <ListView
      maxWidth="size-6000"
      aria-label="ListView with controlled selection"
      selectionMode="multiple"
      {...props}
      items={rows}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      {(item) => (
        <Item>
          {item.name}
        </Item>
      )}
    </ListView>
  );
}
```

```
import type {SpectrumListViewProps} from '@adobe/react-spectrum';

function PokemonList<T>(
  props: Omit<
    SpectrumListViewProps<
      T
    >,
    'children'
  >
) {
  let rows = [
    {
      id: 1,
      name: 'Charizard'
    },
    {
      id: 2,
      name: 'Blastoise'
    },
    {
      id: 3,
      name: 'Venusaur'
    },
    {
      id: 4,
      name: 'Pikachu'
    }
  ];

  let [
    selectedKeys,
    setSelectedKeys
  ] = React.useState(
    props
      .defaultSelectedKeys ||
      new Set([2])
  );

  return (
    <ListView
      maxWidth="size-6000"
      aria-label="ListView with controlled selection"
      selectionMode="multiple"
      {...props}
      items={rows}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      {(item) => (
        <Item>
          {item.name}
        </Item>
      )}
    </ListView>
  );
}
```

To limit users to selecting only a single item at a time, `selectionMode` can be set to `single`.

```
// Using the same list as above
<PokemonList
  selectionMode="single"
  selectionStyle="highlight"
  aria-label="ListView with single selection"
/>
```

```
// Using the same list as above
<PokemonList
  selectionMode="single"
  selectionStyle="highlight"
  aria-label="ListView with single selection"
/>
```

```
// Using the same list as above
<PokemonList
  selectionMode="single"
  selectionStyle="highlight"
  aria-label="ListView with single selection"
/>
```

ListView also supports a `disallowEmptySelection` prop which forces the user to have at least one row in the ListView selected at all times. In this mode, if a single row is selected and the user presses it, it will not be deselected.

```
// Using the same list as above
<PokemonList
  disallowEmptySelection
  aria-label="ListView with empty selection disallowed"
/>
```

```
// Using the same list as above
<PokemonList
  disallowEmptySelection
  aria-label="ListView with empty selection disallowed"
/>
```

```
// Using the same list as above
<PokemonList
  disallowEmptySelection
  aria-label="ListView with empty selection disallowed"
/>
```

You can disable specific rows by providing an array of keys to ListView via the `disabledKeys` prop. This will disable all interactions on disabled rows, unless the `disabledBehavior` prop is used to change this behavior.

```
// Using the same list as above
<PokemonList disabledKeys={[3]} aria-label="ListView with disabled rows" />
```

```
// Using the same list as above
<PokemonList
  disabledKeys={[3]}
  aria-label="ListView with disabled rows"
/>
```

```
// Using the same list as above
<PokemonList
  disabledKeys={[3]}
  aria-label="ListView with disabled rows"
/>
```

If you set the `disabledBehavior` prop to `selection`, interactions such as focus, dragging, or actions can still be performed on disabled rows.

```
<Flex wrap gap="size-300">
  <PokemonList
    disabledKeys={[3]}
    defaultSelectedKeys={[]}
    disabledBehavior="all"
    aria-label="ListView with all interaction disabled for disabled rows"
    width="size-2400"
    onAction={key => alert(`Opening item ${key}...`)}
  />
  <PokemonList
    disabledKeys={[3]}
    defaultSelectedKeys={[]}
    disabledBehavior="selection"
    aria-label="ListView with selection disabled for disabled rows"
    width="size-2400"
    onAction={key => alert(`Opening item ${key}...`)}
  />
</Flex>
```

```
<Flex wrap gap="size-300">
  <PokemonList
    disabledKeys={[3]}
    defaultSelectedKeys={[]}
    disabledBehavior="all"
    aria-label="ListView with all interaction disabled for disabled rows"
    width="size-2400"
    onAction={(key) => alert(`Opening item ${key}...`)}
  />
  <PokemonList
    disabledKeys={[3]}
    defaultSelectedKeys={[]}
    disabledBehavior="selection"
    aria-label="ListView with selection disabled for disabled rows"
    width="size-2400"
    onAction={(key) => alert(`Opening item ${key}...`)}
  />
</Flex>
```

```
<Flex
  wrap
  gap="size-300"
>
  <PokemonList
    disabledKeys={[3]}
    defaultSelectedKeys={[]}
    disabledBehavior="all"
    aria-label="ListView with all interaction disabled for disabled rows"
    width="size-2400"
    onAction={(key) =>
      alert(
        `Opening item ${key}...`
      )}
  />
  <PokemonList
    disabledKeys={[3]}
    defaultSelectedKeys={[]}
    disabledBehavior="selection"
    aria-label="ListView with selection disabled for disabled rows"
    width="size-2400"
    onAction={(key) =>
      alert(
        `Opening item ${key}...`
      )}
  />
</Flex>
```

By default, ListView uses the checkbox selection style, which includes a checkbox in each row for selection. When the selectionStyle prop is set to `"highlight"`, the checkboxes are hidden, and the selected rows are displayed with a highlighted background instead.

In addition to changing the appearance, the selection behavior also changes depending on the `selectionStyle` prop. In the default checkbox selection style, clicking, tapping, or pressing the Space or Enter keys toggles selection for the focused row. Using the arrow keys moves focus but does not change selection.

In the highlight selection style, however, clicking a row with the mouse _replaces_ the selection with only that row. Using the arrow keys moves both focus and selection. To select multiple rows, modifier keys such as Ctrl, Cmd, and Shift can be used. On touch screen devices, selection always behaves as toggle since modifier keys may not be available.

These selection styles implement the behaviors defined in [Aria Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/#keyboardinteraction).

```
// Using the same list as above
<PokemonList
  selectionStyle="highlight"
  aria-label="Highlight selection ListView"
/>
```

```
// Using the same list as above
<PokemonList
  selectionStyle="highlight"
  aria-label="Highlight selection ListView"
/>
```

```
// Using the same list as above
<PokemonList
  selectionStyle="highlight"
  aria-label="Highlight selection ListView"
/>
```

* * *

ListView supports row actions via the `onAction` prop, which is useful for functionality such as navigation. When nothing is selected, the ListView performs actions by default when clicking or tapping a row. Items may be selected using the checkbox, or by long pressing on touch devices. When at least one item is selected, the ListView is in selection mode, and clicking or tapping a row toggles the selection. Actions may also be triggered via the Enter key, and selection using the Space key.

This behavior is slightly different in the highlight selection style, where single clicking selects the row and actions are performed via double click. Touch and keyboard behaviors are unaffected.

```
// Checkbox selection with onAction
<Flex wrap gap="size-300">
  <PokemonList
    onAction={(key) => alert(`Opening item ${key}...`)}
    aria-label="Checkbox selection ListView with row actions"
    width="size-2400"
  />
  <PokemonList
    selectionStyle="highlight"
    onAction={(key) => alert(`Opening item ${key}...`)}
    aria-label="Highlight selection ListView with row actions"
    width="size-2400"
  />
</Flex>
```

```
// Checkbox selection with onAction
<Flex wrap gap="size-300">
  <PokemonList
    onAction={(key) => alert(`Opening item ${key}...`)}
    aria-label="Checkbox selection ListView with row actions"
    width="size-2400"
  />
  <PokemonList
    selectionStyle="highlight"
    onAction={(key) => alert(`Opening item ${key}...`)}
    aria-label="Highlight selection ListView with row actions"
    width="size-2400"
  />
</Flex>
```

```
// Checkbox selection with onAction
<Flex
  wrap
  gap="size-300"
>
  <PokemonList
    onAction={(key) =>
      alert(
        `Opening item ${key}...`
      )}
    aria-label="Checkbox selection ListView with row actions"
    width="size-2400"
  />
  <PokemonList
    selectionStyle="highlight"
    onAction={(key) =>
      alert(
        `Opening item ${key}...`
      )}
    aria-label="Highlight selection ListView with row actions"
    width="size-2400"
  />
</Flex>
```

Items in a ListView may also be links to another page or website. This can be achieved by passing the `href` prop to the `<Item>` component. Links behave the same way as described above for row actions depending on the `selectionMode` and `selectionStyle`.

```
<ListView aria-label="Links" selectionMode="multiple">
  <Item href="https://adobe.com/" target="_blank">Adobe</Item>
  <Item href="https://apple.com/" target="_blank">Apple</Item>
  <Item href="https://google.com/" target="_blank">Google</Item>
  <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
</ListView>
```

```
<ListView aria-label="Links" selectionMode="multiple">
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
</ListView>
```

```
<ListView
  aria-label="Links"
  selectionMode="multiple"
>
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
</ListView>
```

The `<Item>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Spectrum components that support links, this works via the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-spectrum/routing.html) to learn how to set this up.

## Drag and drop[#](#drag-and-drop)

* * *

To enable drag and drop in a ListView, you must provide the drag and drop hooks sourced from `[useDragAndDrop](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/dnd/src/useDragAndDrop.ts:useDragAndDrop)` to the ListView's `dragAndDropHooks` prop. See the examples below for various common drag and drop use cases. For more information on `useDragAndDrop` and the various supported ways to perform a drag and drop interaction, please see the [drag and drop documentation](https://react-spectrum.adobe.com/react-spectrum/dnd.html).

### Draggable ListView and droppable ListView[#](#draggable-listview-and-droppable-listview)

The example below demonstrates how to create a draggable ListView and a droppable ListView.

Show code

```
import type {DragAndDropOptions, TextDropItem} from '@adobe/react-spectrum';
import {useDragAndDrop} from '@adobe/react-spectrum';
import type {ListData} from '@adobe/react-spectrum';
import {useListData} from '@adobe/react-spectrum';

interface Item {
  name: string;
  type?: string;
  childNodes?: Item[];
}

interface DndListViewProps extends DragAndDropOptions {
  list: ListData<Item>;
}

function DraggableListView(props: DndListViewProps) {
  let { list, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only allow move operations when dropping items from this list
    getAllowedDropOperations: () => ['move'],
    getItems: (keys) =>
      [...keys].map((key) => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type': JSON.stringify(item),
          'text/plain': item.name
        };
      }),
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys
      } = e;

      if (dropOperation === 'move') {
        list.remove(...keys);
      }
    },
    ...otherProps
  });
  return (
    <ListView
      aria-label="Draggable ListView in drag into list example"
      selectionMode="multiple"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

function DroppableListView(props: DndListViewProps) {
  let { list, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only accept items with the following drag type
    acceptedDragTypes: ['custom-app-type'],
    onInsert: async (e) => {
      let {
        items,
        target
      } = e;

      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(await (item as TextDropItem).getText('custom-app-type'))
        )
      );

      if (target.dropPosition === 'before') {
        list.insertBefore(target.key, ...processedItems);
      } else if (target.dropPosition === 'after') {
        list.insertAfter(target.key, ...processedItems);
      }
    },
    onRootDrop: async (e) => {
      let {
        items
      } = e;
      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(await (item as TextDropItem).getText('custom-app-type'))
        )
      );
      list.append(...processedItems);
    },
    ...otherProps
  });
  return (
    <ListView
      aria-label="Droppable ListView in drag into list example"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

function DragIntoList() {
  let sourceList = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'file', name: 'Adobe InDesign' },
      { id: '4', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let targetList = useListData({
    initialItems: [
      { id: '5', type: 'file', name: 'Adobe Dreamweaver' },
      { id: '6', type: 'file', name: 'Adobe Fresco' },
      { id: '7', type: 'file', name: 'Adobe Connect' },
      { id: '8', type: 'file', name: 'Adobe Lightroom' }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableListView list={sourceList} />
      <DroppableListView list={targetList} />
    </Flex>
  );
}
```

```
import type {
  DragAndDropOptions,
  TextDropItem
} from '@adobe/react-spectrum';
import {useDragAndDrop} from '@adobe/react-spectrum';
import type {ListData} from '@adobe/react-spectrum';
import {useListData} from '@adobe/react-spectrum';

interface Item {
  name: string;
  type?: string;
  childNodes?: Item[];
}

interface DndListViewProps extends DragAndDropOptions {
  list: ListData<Item>;
}

function DraggableListView(props: DndListViewProps) {
  let { list, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only allow move operations when dropping items from this list
    getAllowedDropOperations: () => ['move'],
    getItems: (keys) =>
      [...keys].map((key) => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type': JSON.stringify(item),
          'text/plain': item.name
        };
      }),
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys
      } = e;

      if (dropOperation === 'move') {
        list.remove(...keys);
      }
    },
    ...otherProps
  });
  return (
    <ListView
      aria-label="Draggable ListView in drag into list example"
      selectionMode="multiple"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

function DroppableListView(props: DndListViewProps) {
  let { list, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only accept items with the following drag type
    acceptedDragTypes: ['custom-app-type'],
    onInsert: async (e) => {
      let {
        items,
        target
      } = e;

      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText(
              'custom-app-type'
            )
          )
        )
      );

      if (target.dropPosition === 'before') {
        list.insertBefore(target.key, ...processedItems);
      } else if (target.dropPosition === 'after') {
        list.insertAfter(target.key, ...processedItems);
      }
    },
    onRootDrop: async (e) => {
      let {
        items
      } = e;
      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText(
              'custom-app-type'
            )
          )
        )
      );
      list.append(...processedItems);
    },
    ...otherProps
  });
  return (
    <ListView
      aria-label="Droppable ListView in drag into list example"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

function DragIntoList() {
  let sourceList = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'file', name: 'Adobe InDesign' },
      { id: '4', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let targetList = useListData({
    initialItems: [
      { id: '5', type: 'file', name: 'Adobe Dreamweaver' },
      { id: '6', type: 'file', name: 'Adobe Fresco' },
      { id: '7', type: 'file', name: 'Adobe Connect' },
      { id: '8', type: 'file', name: 'Adobe Lightroom' }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableListView list={sourceList} />
      <DroppableListView list={targetList} />
    </Flex>
  );
}
```

```
import type {
  DragAndDropOptions,
  TextDropItem
} from '@adobe/react-spectrum';
import {useDragAndDrop} from '@adobe/react-spectrum';
import type {ListData} from '@adobe/react-spectrum';
import {useListData} from '@adobe/react-spectrum';

interface Item {
  name: string;
  type?: string;
  childNodes?: Item[];
}

interface DndListViewProps
  extends
    DragAndDropOptions {
  list: ListData<Item>;
}

function DraggableListView(
  props: DndListViewProps
) {
  let {
    list,
    ...otherProps
  } = props;
  let {
    dragAndDropHooks
  } = useDragAndDrop({
    // Only allow move operations when dropping items from this list
    getAllowedDropOperations:
      () => ['move'],
    getItems: (keys) =>
      [...keys].map(
        (key) => {
          let item = list
            .getItem(
              key
            );
          // Setup the drag types and associated info for each dragged item.
          return {
            'custom-app-type':
              JSON
                .stringify(
                  item
                ),
            'text/plain':
              item.name
          };
        }
      ),
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys
      } = e;

      if (
        dropOperation ===
          'move'
      ) {
        list.remove(
          ...keys
        );
      }
    },
    ...otherProps
  });
  return (
    <ListView
      aria-label="Draggable ListView in drag into list example"
      selectionMode="multiple"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}      items={list.items}
    >
      {(item) => (
        <Item
          textValue={item
            .name}
        >
          <Text>
            {item.name}
          </Text>
        </Item>
      )}
    </ListView>
  );
}

function DroppableListView(
  props: DndListViewProps
) {
  let {
    list,
    ...otherProps
  } = props;
  let {
    dragAndDropHooks
  } = useDragAndDrop({
    // Only accept items with the following drag type
    acceptedDragTypes: [
      'custom-app-type'
    ],
    onInsert: async (
      e
    ) => {
      let {
        items,
        target
      } = e;

      let processedItems =
        await Promise
          .all(
            items.map(
              async (
                item
              ) =>
                JSON
                  .parse(
                    await (item as TextDropItem)
                      .getText(
                        'custom-app-type'
                      )
                  )
            )
          );

      if (
        target
          .dropPosition ===
          'before'
      ) {
        list
          .insertBefore(
            target.key,
            ...processedItems
          );
      } else if (
        target
          .dropPosition ===
          'after'
      ) {
        list.insertAfter(
          target.key,
          ...processedItems
        );
      }
    },
    onRootDrop: async (
      e
    ) => {
      let {
        items
      } = e;
      let processedItems =
        await Promise
          .all(
            items.map(
              async (
                item
              ) =>
                JSON
                  .parse(
                    await (item as TextDropItem)
                      .getText(
                        'custom-app-type'
                      )
                  )
            )
          );
      list.append(
        ...processedItems
      );
    },
    ...otherProps
  });
  return (
    <ListView
      aria-label="Droppable ListView in drag into list example"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}      items={list.items}
    >
      {(item) => (
        <Item
          textValue={item
            .name}
        >
          <Text>
            {item.name}
          </Text>
        </Item>
      )}
    </ListView>
  );
}

function DragIntoList() {
  let sourceList =
    useListData({
      initialItems: [
        {
          id: '1',
          type: 'file',
          name:
            'Adobe Photoshop'
        },
        {
          id: '2',
          type: 'file',
          name:
            'Adobe XD'
        },
        {
          id: '3',
          type: 'file',
          name:
            'Adobe InDesign'
        },
        {
          id: '4',
          type: 'file',
          name:
            'Adobe AfterEffects'
        }
      ]
    });

  let targetList =
    useListData({
      initialItems: [
        {
          id: '5',
          type: 'file',
          name:
            'Adobe Dreamweaver'
        },
        {
          id: '6',
          type: 'file',
          name:
            'Adobe Fresco'
        },
        {
          id: '7',
          type: 'file',
          name:
            'Adobe Connect'
        },
        {
          id: '8',
          type: 'file',
          name:
            'Adobe Lightroom'
        }
      ]
    });

  return (
    <Flex
      wrap
      gap="size-300"
    >
      <DraggableListView
        list={sourceList}
      />
      <DroppableListView
        list={targetList}
      />
    </Flex>
  );
}
```

```
<DragIntoList />
```

```
<DragIntoList />
```

```
<DragIntoList />
```

### Handling folder drops[#](#handling-folder-drops)

The example below replicates the previous example but demonstrates how to handle on item drops.

Show code

```
function DraggableListViewFolder(props: DndListViewProps) {
  let { list, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only allow move operations when dropping items from this list
    getAllowedDropOperations: () => ['move'],
    getItems: (keys) =>
      [...keys].map((key) => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type-folder-drop': JSON.stringify(item),
          'text/plain': item.name
        };
      }),
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys
      } = e;

      if (dropOperation === 'move') {
        list.remove(...keys);
      }
    },

    ...otherProps
  });

  return (
    <ListView
      aria-label="Draggable ListView in drag onto folder example"
      selectionMode="multiple"
      width="size-3600"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          {item.type === 'folder' && <Folder />}
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

function DroppableListViewFolder(props: DndListViewProps) {
  let { list, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only allow drops on items with childNodes aka folders
    shouldAcceptItemDrop: (target) => !!list.getItem(target.key).childNodes,    // Only accept items with the following drag type
    acceptedDragTypes: ['custom-app-type-folder-drop'],
    onInsert: async (e) => {
      let {
        items,
        target
      } = e;

      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText('custom-app-type-folder-drop')
          )
        )
      );

      if (target.dropPosition === 'before') {
        list.insertBefore(target.key, ...processedItems);
      } else if (target.dropPosition === 'after') {
        list.insertAfter(target.key, ...processedItems);
      }
    },
    onRootDrop: async (e) => {
      let {
        items
      } = e;
      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText('custom-app-type-folder-drop')
          )
        )
      );
      list.append(...processedItems);
    },
    onItemDrop: async (e) => {
      let {
        items,
        target
      } = e;

      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText('custom-app-type-folder-drop')
          )
        )
      );

      let targetItem = list.getItem(target.key);
      list.update(target.key, {
        ...targetItem,
        childNodes: [...targetItem.childNodes, ...processedItems]
      });
    },    ...otherProps
  });

  return (
    <ListView
      aria-label="Droppable ListView in drop into folder example"
      width="size-3600"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name} hasChildItems={item.type === 'folder'}>
          <Text>{item.name}</Text>
          {item.type === 'folder' &&
            (
              <>
                <Folder />
                <Text slot="description">
                  {`contains ${item.childNodes?.length} dropped item(s)`}
                </Text>
              </>
            )}
        </Item>
      )}
    </ListView>
  );
}

function DragIntoListFolder() {
  let sourceList = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'folder', name: 'Documents', childNodes: [] },
      { id: '4', type: 'file', name: 'Adobe InDesign' },
      { id: '5', type: 'folder', name: 'Utilities', childNodes: [] },
      { id: '6', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let targetList = useListData({
    initialItems: [
      { id: '7', type: 'folder', name: 'Pictures', childNodes: [] },
      { id: '8', type: 'file', name: 'Adobe Fresco' },
      { id: '9', type: 'folder', name: 'Apps', childNodes: [] }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableListViewFolder list={sourceList} />
      <DroppableListViewFolder list={targetList} />
    </Flex>
  );
}
```

```
function DraggableListViewFolder(props: DndListViewProps) {
  let { list, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only allow move operations when dropping items from this list
    getAllowedDropOperations: () => ['move'],
    getItems: (keys) =>
      [...keys].map((key) => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type-folder-drop': JSON.stringify(
            item
          ),
          'text/plain': item.name
        };
      }),
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys
      } = e;

      if (dropOperation === 'move') {
        list.remove(...keys);
      }
    },

    ...otherProps
  });

  return (
    <ListView
      aria-label="Draggable ListView in drag onto folder example"
      selectionMode="multiple"
      width="size-3600"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          {item.type === 'folder' && <Folder />}
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

function DroppableListViewFolder(props: DndListViewProps) {
  let { list, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only allow drops on items with childNodes aka folders
    shouldAcceptItemDrop: (target) =>
      !!list.getItem(target.key).childNodes,    // Only accept items with the following drag type
    acceptedDragTypes: ['custom-app-type-folder-drop'],
    onInsert: async (e) => {
      let {
        items,
        target
      } = e;

      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText(
              'custom-app-type-folder-drop'
            )
          )
        )
      );

      if (target.dropPosition === 'before') {
        list.insertBefore(target.key, ...processedItems);
      } else if (target.dropPosition === 'after') {
        list.insertAfter(target.key, ...processedItems);
      }
    },
    onRootDrop: async (e) => {
      let {
        items
      } = e;
      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText(
              'custom-app-type-folder-drop'
            )
          )
        )
      );
      list.append(...processedItems);
    },
    onItemDrop: async (e) => {
      let {
        items,
        target
      } = e;

      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText(
              'custom-app-type-folder-drop'
            )
          )
        )
      );

      let targetItem = list.getItem(target.key);
      list.update(target.key, {
        ...targetItem,
        childNodes: [
          ...targetItem.childNodes,
          ...processedItems
        ]
      });
    },    ...otherProps
  });

  return (
    <ListView
      aria-label="Droppable ListView in drop into folder example"
      width="size-3600"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item
          textValue={item.name}
          hasChildItems={item.type === 'folder'}
        >
          <Text>{item.name}</Text>
          {item.type === 'folder' &&
            (
              <>
                <Folder />
                <Text slot="description">
                  {`contains ${item.childNodes?.length} dropped item(s)`}
                </Text>
              </>
            )}
        </Item>
      )}
    </ListView>
  );
}

function DragIntoListFolder() {
  let sourceList = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      {
        id: '3',
        type: 'folder',
        name: 'Documents',
        childNodes: []
      },
      { id: '4', type: 'file', name: 'Adobe InDesign' },
      {
        id: '5',
        type: 'folder',
        name: 'Utilities',
        childNodes: []
      },
      { id: '6', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let targetList = useListData({
    initialItems: [
      {
        id: '7',
        type: 'folder',
        name: 'Pictures',
        childNodes: []
      },
      { id: '8', type: 'file', name: 'Adobe Fresco' },
      {
        id: '9',
        type: 'folder',
        name: 'Apps',
        childNodes: []
      }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableListViewFolder list={sourceList} />
      <DroppableListViewFolder list={targetList} />
    </Flex>
  );
}
```

```
function DraggableListViewFolder(
  props: DndListViewProps
) {
  let {
    list,
    ...otherProps
  } = props;
  let {
    dragAndDropHooks
  } = useDragAndDrop({
    // Only allow move operations when dropping items from this list
    getAllowedDropOperations:
      () => ['move'],
    getItems: (keys) =>
      [...keys].map(
        (key) => {
          let item = list
            .getItem(
              key
            );
          // Setup the drag types and associated info for each dragged item.
          return {
            'custom-app-type-folder-drop':
              JSON
                .stringify(
                  item
                ),
            'text/plain':
              item.name
          };
        }
      ),
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys
      } = e;

      if (
        dropOperation ===
          'move'
      ) {
        list.remove(
          ...keys
        );
      }
    },

    ...otherProps
  });

  return (
    <ListView
      aria-label="Draggable ListView in drag onto folder example"
      selectionMode="multiple"
      width="size-3600"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item
          textValue={item
            .name}
        >
          {item.type ===
              'folder' &&
            <Folder />}
          <Text>
            {item.name}
          </Text>
        </Item>
      )}
    </ListView>
  );
}

function DroppableListViewFolder(
  props: DndListViewProps
) {
  let {
    list,
    ...otherProps
  } = props;
  let {
    dragAndDropHooks
  } = useDragAndDrop({
    // Only allow drops on items with childNodes aka folders
    shouldAcceptItemDrop:
      (target) =>
        !!list.getItem(
          target.key
        ).childNodes,    // Only accept items with the following drag type
    acceptedDragTypes: [
      'custom-app-type-folder-drop'
    ],
    onInsert: async (
      e
    ) => {
      let {
        items,
        target
      } = e;

      let processedItems =
        await Promise
          .all(
            items.map(
              async (
                item
              ) =>
                JSON
                  .parse(
                    await (item as TextDropItem)
                      .getText(
                        'custom-app-type-folder-drop'
                      )
                  )
            )
          );

      if (
        target
          .dropPosition ===
          'before'
      ) {
        list
          .insertBefore(
            target.key,
            ...processedItems
          );
      } else if (
        target
          .dropPosition ===
          'after'
      ) {
        list.insertAfter(
          target.key,
          ...processedItems
        );
      }
    },
    onRootDrop: async (
      e
    ) => {
      let {
        items
      } = e;
      let processedItems =
        await Promise
          .all(
            items.map(
              async (
                item
              ) =>
                JSON
                  .parse(
                    await (item as TextDropItem)
                      .getText(
                        'custom-app-type-folder-drop'
                      )
                  )
            )
          );
      list.append(
        ...processedItems
      );
    },
    onItemDrop: async (
      e
    ) => {
      let {
        items,
        target
      } = e;

      let processedItems =
        await Promise
          .all(
            items.map(
              async (
                item
              ) =>
                JSON
                  .parse(
                    await (item as TextDropItem)
                      .getText(
                        'custom-app-type-folder-drop'
                      )
                  )
            )
          );

      let targetItem =
        list.getItem(
          target.key
        );
      list.update(
        target.key,
        {
          ...targetItem,
          childNodes: [
            ...targetItem
              .childNodes,
            ...processedItems
          ]
        }
      );
    },    ...otherProps
  });

  return (
    <ListView
      aria-label="Droppable ListView in drop into folder example"
      width="size-3600"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item
          textValue={item
            .name}
          hasChildItems={item
            .type ===
            'folder'}
        >
          <Text>
            {item.name}
          </Text>
          {item.type ===
              'folder' &&
            (
              <>
                <Folder />
                <Text slot="description">
                  {`contains ${item.childNodes?.length} dropped item(s)`}
                </Text>
              </>
            )}
        </Item>
      )}
    </ListView>
  );
}

function DragIntoListFolder() {
  let sourceList =
    useListData({
      initialItems: [
        {
          id: '1',
          type: 'file',
          name:
            'Adobe Photoshop'
        },
        {
          id: '2',
          type: 'file',
          name:
            'Adobe XD'
        },
        {
          id: '3',
          type: 'folder',
          name:
            'Documents',
          childNodes: []
        },
        {
          id: '4',
          type: 'file',
          name:
            'Adobe InDesign'
        },
        {
          id: '5',
          type: 'folder',
          name:
            'Utilities',
          childNodes: []
        },
        {
          id: '6',
          type: 'file',
          name:
            'Adobe AfterEffects'
        }
      ]
    });

  let targetList =
    useListData({
      initialItems: [
        {
          id: '7',
          type: 'folder',
          name:
            'Pictures',
          childNodes: []
        },
        {
          id: '8',
          type: 'file',
          name:
            'Adobe Fresco'
        },
        {
          id: '9',
          type: 'folder',
          name: 'Apps',
          childNodes: []
        }
      ]
    });

  return (
    <Flex
      wrap
      gap="size-300"
    >
      <DraggableListViewFolder
        list={sourceList}
      />
      <DroppableListViewFolder
        list={targetList}
      />
    </Flex>
  );
}
```

```
<DragIntoListFolder />
```

```
<DragIntoListFolder />
```

```
<DragIntoListFolder />
```

The example below demonstrates how to make a ListView draggable and droppable at the same time. The ListView below supports reordering its own rows via drag and drop.

Show code

```
function ReorderableList() {
  let list = useListData({
    initialItems: [
      {id: '1', type: 'file', name: 'Adobe Photoshop'},
      {id: '2', type: 'file', name: 'Adobe XD'},
      {id: '3', type: 'folder', name: 'Documents', childNodes: []},
      {id: '4', type: 'file', name: 'Adobe InDesign'},
      {id: '5', type: 'folder', name: 'Utilities', childNodes: []},
      {id: '6', type: 'file', name: 'Adobe AfterEffects'}
    ]
  });

  let {dragAndDropHooks} = useDragAndDrop({
    getItems(keys) {
      return [...keys].map(key => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type-reorder': JSON.stringify(item),
          'text/plain': item.name
        };
      });
    },
    acceptedDragTypes: ['custom-app-type-reorder'],
    onReorder: async (e) => {
      let {keys, target} = e;

      if (target.dropPosition === 'before') {
        list.moveBefore(target.key, [...keys]);
      } else if (target.dropPosition === 'after') {
        list.moveAfter(target.key, [...keys]);
      }
    },
    getAllowedDropOperations: () => ['move']  });

  return (
    <ListView
      aria-label="Reorderable ListView"
      selectionMode="multiple"
      width="size-3600"
      height="size-3600"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}>
      {item => (
        <Item textValue={item.name}>
          {item.type === 'folder' && <Folder />}
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}
```

```
function ReorderableList() {
  let list = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      {
        id: '3',
        type: 'folder',
        name: 'Documents',
        childNodes: []
      },
      { id: '4', type: 'file', name: 'Adobe InDesign' },
      {
        id: '5',
        type: 'folder',
        name: 'Utilities',
        childNodes: []
      },
      { id: '6', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop({
    getItems(keys) {
      return [...keys].map((key) => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type-reorder': JSON.stringify(item),
          'text/plain': item.name
        };
      });
    },
    acceptedDragTypes: ['custom-app-type-reorder'],
    onReorder: async (e) => {
      let { keys, target } = e;

      if (target.dropPosition === 'before') {
        list.moveBefore(target.key, [...keys]);
      } else if (target.dropPosition === 'after') {
        list.moveAfter(target.key, [...keys]);
      }
    },
    getAllowedDropOperations: () => ['move']  });

  return (
    <ListView
      aria-label="Reorderable ListView"
      selectionMode="multiple"
      width="size-3600"
      height="size-3600"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => (
        <Item textValue={item.name}>
          {item.type === 'folder' && <Folder />}
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}
```

```
function ReorderableList() {
  let list = useListData(
    {
      initialItems: [
        {
          id: '1',
          type: 'file',
          name:
            'Adobe Photoshop'
        },
        {
          id: '2',
          type: 'file',
          name:
            'Adobe XD'
        },
        {
          id: '3',
          type: 'folder',
          name:
            'Documents',
          childNodes: []
        },
        {
          id: '4',
          type: 'file',
          name:
            'Adobe InDesign'
        },
        {
          id: '5',
          type: 'folder',
          name:
            'Utilities',
          childNodes: []
        },
        {
          id: '6',
          type: 'file',
          name:
            'Adobe AfterEffects'
        }
      ]
    }
  );

  let {
    dragAndDropHooks
  } = useDragAndDrop({
    getItems(keys) {
      return [...keys]
        .map((key) => {
          let item = list
            .getItem(
              key
            );
          // Setup the drag types and associated info for each dragged item.
          return {
            'custom-app-type-reorder':
              JSON
                .stringify(
                  item
                ),
            'text/plain':
              item.name
          };
        });
    },
    acceptedDragTypes: [
      'custom-app-type-reorder'
    ],
    onReorder: async (
      e
    ) => {
      let {
        keys,
        target
      } = e;

      if (
        target
          .dropPosition ===
          'before'
      ) {
        list.moveBefore(
          target.key,
          [...keys]
        );
      } else if (
        target
          .dropPosition ===
          'after'
      ) {
        list.moveAfter(
          target.key,
          [...keys]
        );
      }
    },
    getAllowedDropOperations:
      () => ['move']  });

  return (
    <ListView
      aria-label="Reorderable ListView"
      selectionMode="multiple"
      width="size-3600"
      height="size-3600"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => (
        <Item
          textValue={item
            .name}
        >
          {item.type ===
              'folder' &&
            <Folder />}
          <Text>
            {item.name}
          </Text>
        </Item>
      )}
    </ListView>
  );
}
```

```
<ReorderableList />
```

```
<ReorderableList />
```

```
<ReorderableList />
```

The example below demonstrates how to create a pair of ListViews that supports dragging and dropping any items between each list, but disables the ability to drop into a folder. Each list is internally reorderable.

Show code

```
function BidirectionalDnDListView(props: DndListViewProps) {
  let { list } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['custom-app-type-bidirectional'],
    // Only allow move operations
    getAllowedDropOperations: () => ['move'],
    getItems(keys) {
      return [...keys].map((key) => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type-bidirectional': JSON.stringify(item),
          'text/plain': item.name
        };
      });
    },
    onInsert: async (e) => {
      let {
        items,
        target
      } = e;
      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText(
              'custom-app-type-bidirectional'
            )
          )
        )
      );
      if (target.dropPosition === 'before') {
        list.insertBefore(target.key, ...processedItems);
      } else if (target.dropPosition === 'after') {
        list.insertAfter(target.key, ...processedItems);
      }
    },
    onReorder: async (e) => {
      let {
        keys,
        target
      } = e;

      if (target.dropPosition === 'before') {
        list.moveBefore(target.key, [...keys]);
      } else if (target.dropPosition === 'after') {
        list.moveAfter(target.key, [...keys]);
      }
    },
    onRootDrop: async (e) => {
      let {
        items
      } = e;
      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText(
              'custom-app-type-bidirectional'
            )
          )
        )
      );
      list.append(...processedItems);
    },
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys,
        isInternal
      } = e;
      // Only remove the dragged items if they aren't dropped inside the source list
      if (dropOperation === 'move' && !isInternal) {
        list.remove(...keys);
      }
    }  });

  return (
    <ListView
      aria-label={props['aria-label']}
      selectionMode="multiple"
      width="size-3600"
      height="size-3600"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => (
        <Item textValue={item.name}>
          {item.type === 'folder' && <Folder />}
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

function DragBetweenListsExample() {
  let list1 = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'folder', name: 'Documents' },
      { id: '4', type: 'file', name: 'Adobe InDesign' },
      { id: '5', type: 'folder', name: 'Utilities' },
      { id: '6', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let list2 = useListData({
    initialItems: [
      { id: '7', type: 'folder', name: 'Pictures' },
      { id: '8', type: 'file', name: 'Adobe Fresco' },
      { id: '9', type: 'folder', name: 'Apps' },
      { id: '10', type: 'file', name: 'Adobe Illustrator' },
      { id: '11', type: 'file', name: 'Adobe Lightroom' },
      { id: '12', type: 'file', name: 'Adobe Dreamweaver' }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <BidirectionalDnDListView
        list={list1}
        aria-label="First ListView in drag between list example"
      />
      <BidirectionalDnDListView
        list={list2}
        aria-label="Second ListView in drag between list example"
      />
    </Flex>
  );
}
```

```
function BidirectionalDnDListView(props: DndListViewProps) {
  let { list } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['custom-app-type-bidirectional'],
    // Only allow move operations
    getAllowedDropOperations: () => ['move'],
    getItems(keys) {
      return [...keys].map((key) => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type-bidirectional': JSON.stringify(
            item
          ),
          'text/plain': item.name
        };
      });
    },
    onInsert: async (e) => {
      let {
        items,
        target
      } = e;
      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText(
              'custom-app-type-bidirectional'
            )
          )
        )
      );
      if (target.dropPosition === 'before') {
        list.insertBefore(target.key, ...processedItems);
      } else if (target.dropPosition === 'after') {
        list.insertAfter(target.key, ...processedItems);
      }
    },
    onReorder: async (e) => {
      let {
        keys,
        target
      } = e;

      if (target.dropPosition === 'before') {
        list.moveBefore(target.key, [...keys]);
      } else if (target.dropPosition === 'after') {
        list.moveAfter(target.key, [...keys]);
      }
    },
    onRootDrop: async (e) => {
      let {
        items
      } = e;
      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText(
              'custom-app-type-bidirectional'
            )
          )
        )
      );
      list.append(...processedItems);
    },
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys,
        isInternal
      } = e;
      // Only remove the dragged items if they aren't dropped inside the source list
      if (dropOperation === 'move' && !isInternal) {
        list.remove(...keys);
      }
    }  });

  return (
    <ListView
      aria-label={props['aria-label']}
      selectionMode="multiple"
      width="size-3600"
      height="size-3600"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => (
        <Item textValue={item.name}>
          {item.type === 'folder' && <Folder />}
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

function DragBetweenListsExample() {
  let list1 = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'folder', name: 'Documents' },
      { id: '4', type: 'file', name: 'Adobe InDesign' },
      { id: '5', type: 'folder', name: 'Utilities' },
      { id: '6', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let list2 = useListData({
    initialItems: [
      { id: '7', type: 'folder', name: 'Pictures' },
      { id: '8', type: 'file', name: 'Adobe Fresco' },
      { id: '9', type: 'folder', name: 'Apps' },
      { id: '10', type: 'file', name: 'Adobe Illustrator' },
      { id: '11', type: 'file', name: 'Adobe Lightroom' },
      { id: '12', type: 'file', name: 'Adobe Dreamweaver' }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <BidirectionalDnDListView
        list={list1}
        aria-label="First ListView in drag between list example"
      />
      <BidirectionalDnDListView
        list={list2}
        aria-label="Second ListView in drag between list example"
      />
    </Flex>
  );
}
```

```
function BidirectionalDnDListView(
  props: DndListViewProps
) {
  let { list } = props;
  let {
    dragAndDropHooks
  } = useDragAndDrop({
    acceptedDragTypes: [
      'custom-app-type-bidirectional'
    ],
    // Only allow move operations
    getAllowedDropOperations:
      () => ['move'],
    getItems(keys) {
      return [...keys]
        .map((key) => {
          let item = list
            .getItem(
              key
            );
          // Setup the drag types and associated info for each dragged item.
          return {
            'custom-app-type-bidirectional':
              JSON
                .stringify(
                  item
                ),
            'text/plain':
              item.name
          };
        });
    },
    onInsert: async (
      e
    ) => {
      let {
        items,
        target
      } = e;
      let processedItems =
        await Promise
          .all(
            items.map(
              async (
                item
              ) =>
                JSON
                  .parse(
                    await (item as TextDropItem)
                      .getText(
                        'custom-app-type-bidirectional'
                      )
                  )
            )
          );
      if (
        target
          .dropPosition ===
          'before'
      ) {
        list
          .insertBefore(
            target.key,
            ...processedItems
          );
      } else if (
        target
          .dropPosition ===
          'after'
      ) {
        list.insertAfter(
          target.key,
          ...processedItems
        );
      }
    },
    onReorder: async (
      e
    ) => {
      let {
        keys,
        target
      } = e;

      if (
        target
          .dropPosition ===
          'before'
      ) {
        list.moveBefore(
          target.key,
          [...keys]
        );
      } else if (
        target
          .dropPosition ===
          'after'
      ) {
        list.moveAfter(
          target.key,
          [...keys]
        );
      }
    },
    onRootDrop: async (
      e
    ) => {
      let {
        items
      } = e;
      let processedItems =
        await Promise
          .all(
            items.map(
              async (item) =>
                JSON
                  .parse(
                    await (item as TextDropItem)
                      .getText(
                        'custom-app-type-bidirectional'
                      )
                  )
            )
          );
      list.append(
        ...processedItems
      );
    },
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys,
        isInternal
      } = e;
      // Only remove the dragged items if they aren't dropped inside the source list
      if (
        dropOperation ===
          'move' &&
        !isInternal
      ) {
        list.remove(
          ...keys
        );
      }
    }  });

  return (
    <ListView
      aria-label={props[
        'aria-label'
      ]}
      selectionMode="multiple"
      width="size-3600"
      height="size-3600"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => (
        <Item
          textValue={item
            .name}
        >
          {item.type ===
              'folder' &&
            <Folder />}
          <Text>
            {item.name}
          </Text>
        </Item>
      )}
    </ListView>
  );
}

function DragBetweenListsExample() {
  let list1 =
    useListData({
      initialItems: [
        {
          id: '1',
          type: 'file',
          name:
            'Adobe Photoshop'
        },
        {
          id: '2',
          type: 'file',
          name:
            'Adobe XD'
        },
        {
          id: '3',
          type: 'folder',
          name:
            'Documents'
        },
        {
          id: '4',
          type: 'file',
          name:
            'Adobe InDesign'
        },
        {
          id: '5',
          type: 'folder',
          name:
            'Utilities'
        },
        {
          id: '6',
          type: 'file',
          name:
            'Adobe AfterEffects'
        }
      ]
    });

  let list2 =
    useListData({
      initialItems: [
        {
          id: '7',
          type: 'folder',
          name:
            'Pictures'
        },
        {
          id: '8',
          type: 'file',
          name:
            'Adobe Fresco'
        },
        {
          id: '9',
          type: 'folder',
          name: 'Apps'
        },
        {
          id: '10',
          type: 'file',
          name:
            'Adobe Illustrator'
        },
        {
          id: '11',
          type: 'file',
          name:
            'Adobe Lightroom'
        },
        {
          id: '12',
          type: 'file',
          name:
            'Adobe Dreamweaver'
        }
      ]
    });

  return (
    <Flex
      wrap
      gap="size-300"
    >
      <BidirectionalDnDListView
        list={list1}
        aria-label="First ListView in drag between list example"
      />
      <BidirectionalDnDListView
        list={list2}
        aria-label="Second ListView in drag between list example"
      />
    </Flex>
  );
}
```

```
<DragBetweenListsExample />
```

```
<DragBetweenListsExample />
```

```
<DragBetweenListsExample />
```

The example below demonstrates how to use `getDropOperation` to specify the default drop operation of the droppable list.

Show code

```
function DraggableListViewDefaultCopy(props: DndListViewProps) {
  let { list } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type-copy-default': JSON.stringify(item),
          'text/plain': item.name
        };
      }),
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys
      } = e;

      if (dropOperation === 'move') {
        list.remove(...keys);
      }
    }
  });

  return (
    <ListView
      aria-label="Draggable ListView in default copy operation example"
      selectionMode="multiple"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

function DroppableListViewDefaultCopy(props: DndListViewProps) {
  let { list } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['custom-app-type-copy-default'],
    getDropOperation: () => 'copy',    onInsert: async (e) => {
      let {
        items,
        target
      } = e;

      // Create random id to allow for multiple copies of the same item
      let processedItems = await Promise.all(
        items.map(async (item) => (
          {
            ...JSON.parse(
              await (item as TextDropItem).getText(
                'custom-app-type-copy-default'
              )
            ),
            id: Math.random().toString(36).slice(2)
          }
        ))
      );      if (target.dropPosition === 'before') {
        list.insertBefore(target.key, ...processedItems);
      } else if (target.dropPosition === 'after') {
        list.insertAfter(target.key, ...processedItems);
      }
    },
    onRootDrop: async (e) => {
      let {
        items
      } = e;

      // Create random id to allow for multiple copies of the same item
      let processedItems = await Promise.all(
        items.map(async (item) => (
          {
            ...JSON.parse(
              await (item as TextDropItem).getText(
                'custom-app-type-copy-default'
              )
            ),
            id: Math.random().toString(36).slice(2)
          }
        ))
      );      list.append(...processedItems);
    }
  });

  return (
    <ListView
      aria-label="Droppable ListView in default copy operation example"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

function DragIntoListDefaultCopy() {
  let sourceList = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'file', name: 'Adobe InDesign' },
      { id: '4', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let targetList = useListData({
    initialItems: [
      { id: '5', type: 'file', name: 'Adobe Dreamweaver' },
      { id: '6', type: 'file', name: 'Adobe Fresco' },
      { id: '7', type: 'file', name: 'Adobe Connect' },
      { id: '8', type: 'file', name: 'Adobe Lightroom' }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableListViewDefaultCopy list={sourceList} />
      <DroppableListViewDefaultCopy list={targetList} />
    </Flex>
  );
}
```

```
function DraggableListViewDefaultCopy(
  props: DndListViewProps
) {
  let { list } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type-copy-default': JSON.stringify(
            item
          ),
          'text/plain': item.name
        };
      }),
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys
      } = e;

      if (dropOperation === 'move') {
        list.remove(...keys);
      }
    }
  });

  return (
    <ListView
      aria-label="Draggable ListView in default copy operation example"
      selectionMode="multiple"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

function DroppableListViewDefaultCopy(
  props: DndListViewProps
) {
  let { list } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['custom-app-type-copy-default'],
    getDropOperation: () => 'copy',    onInsert: async (e) => {
      let {
        items,
        target
      } = e;

      // Create random id to allow for multiple copies of the same item
      let processedItems = await Promise.all(
        items.map(async (item) => (
          {
            ...JSON.parse(
              await (item as TextDropItem).getText(
                'custom-app-type-copy-default'
              )
            ),
            id: Math.random().toString(36).slice(2)
          }
        ))
      );      if (target.dropPosition === 'before') {
        list.insertBefore(target.key, ...processedItems);
      } else if (target.dropPosition === 'after') {
        list.insertAfter(target.key, ...processedItems);
      }
    },
    onRootDrop: async (e) => {
      let {
        items
      } = e;

      // Create random id to allow for multiple copies of the same item
      let processedItems = await Promise.all(
        items.map(async (item) => (
          {
            ...JSON.parse(
              await (item as TextDropItem).getText(
                'custom-app-type-copy-default'
              )
            ),
            id: Math.random().toString(36).slice(2)
          }
        ))
      );      list.append(...processedItems);
    }
  });

  return (
    <ListView
      aria-label="Droppable ListView in default copy operation example"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

function DragIntoListDefaultCopy() {
  let sourceList = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'file', name: 'Adobe InDesign' },
      { id: '4', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let targetList = useListData({
    initialItems: [
      { id: '5', type: 'file', name: 'Adobe Dreamweaver' },
      { id: '6', type: 'file', name: 'Adobe Fresco' },
      { id: '7', type: 'file', name: 'Adobe Connect' },
      { id: '8', type: 'file', name: 'Adobe Lightroom' }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableListViewDefaultCopy list={sourceList} />
      <DroppableListViewDefaultCopy list={targetList} />
    </Flex>
  );
}
```

```
function DraggableListViewDefaultCopy(
  props: DndListViewProps
) {
  let { list } = props;
  let {
    dragAndDropHooks
  } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map(
        (key) => {
          let item = list
            .getItem(
              key
            );
          // Setup the drag types and associated info for each dragged item.
          return {
            'custom-app-type-copy-default':
              JSON
                .stringify(
                  item
                ),
            'text/plain':
              item.name
          };
        }
      ),
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys
      } = e;

      if (
        dropOperation ===
          'move'
      ) {
        list.remove(
          ...keys
        );
      }
    }
  });

  return (
    <ListView
      aria-label="Draggable ListView in default copy operation example"
      selectionMode="multiple"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item
          textValue={item
            .name}
        >
          <Text>
            {item.name}
          </Text>
        </Item>
      )}
    </ListView>
  );
}

function DroppableListViewDefaultCopy(
  props: DndListViewProps
) {
  let { list } = props;
  let {
    dragAndDropHooks
  } = useDragAndDrop({
    acceptedDragTypes: [
      'custom-app-type-copy-default'
    ],
    getDropOperation:
      () => 'copy',    onInsert: async (
      e
    ) => {
      let {
        items,
        target
      } = e;

      // Create random id to allow for multiple copies of the same item
      let processedItems =
        await Promise
          .all(
            items.map(
              async (
                item
              ) => (
                {
                  ...JSON
                    .parse(
                      await (item as TextDropItem)
                        .getText(
                          'custom-app-type-copy-default'
                        )
                    ),
                  id:
                    Math
                      .random()
                      .toString(
                        36
                      ).slice(
                        2
                      )
                }
              )
            )
          );      if (
        target
          .dropPosition ===
          'before'
      ) {
        list
          .insertBefore(
            target.key,
            ...processedItems
          );
      } else if (
        target
          .dropPosition ===
          'after'
      ) {
        list.insertAfter(
          target.key,
          ...processedItems
        );
      }
    },
    onRootDrop: async (
      e
    ) => {
      let {
        items
      } = e;

      // Create random id to allow for multiple copies of the same item
      let processedItems =
        await Promise
          .all(
            items.map(
              async (
                item
              ) => (
                {
                  ...JSON
                    .parse(
                      await (item as TextDropItem)
                        .getText(
                          'custom-app-type-copy-default'
                        )
                    ),
                  id:
                    Math
                      .random()
                      .toString(
                        36
                      ).slice(
                        2
                      )
                }
              )
            )
          );      list.append(
        ...processedItems
      );
    }
  });

  return (
    <ListView
      aria-label="Droppable ListView in default copy operation example"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item
          textValue={item
            .name}
        >
          <Text>
            {item.name}
          </Text>
        </Item>
      )}
    </ListView>
  );
}

function DragIntoListDefaultCopy() {
  let sourceList =
    useListData({
      initialItems: [
        {
          id: '1',
          type: 'file',
          name:
            'Adobe Photoshop'
        },
        {
          id: '2',
          type: 'file',
          name:
            'Adobe XD'
        },
        {
          id: '3',
          type: 'file',
          name:
            'Adobe InDesign'
        },
        {
          id: '4',
          type: 'file',
          name:
            'Adobe AfterEffects'
        }
      ]
    });

  let targetList =
    useListData({
      initialItems: [
        {
          id: '5',
          type: 'file',
          name:
            'Adobe Dreamweaver'
        },
        {
          id: '6',
          type: 'file',
          name:
            'Adobe Fresco'
        },
        {
          id: '7',
          type: 'file',
          name:
            'Adobe Connect'
        },
        {
          id: '8',
          type: 'file',
          name:
            'Adobe Lightroom'
        }
      ]
    });

  return (
    <Flex
      wrap
      gap="size-300"
    >
      <DraggableListViewDefaultCopy
        list={sourceList}
      />
      <DroppableListViewDefaultCopy
        list={targetList}
      />
    </Flex>
  );
}
```

```
<DragIntoListDefaultCopy />
```

```
<DragIntoListDefaultCopy />
```

```
<DragIntoListDefaultCopy />
```

Use the `renderPreview` prop to provide a custom drag preview. `keys` and `draggedKey` are passed to this function, where `keys` includes all the keys of the items being dragged, and `draggedKey` is the key of the item the user initiated the drag from.

Show code

```
import {View} from '@adobe/react-spectrum';

function CustomDragPreviewExample() {
  let list = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'file', name: 'Adobe InDesign' },
      { id: '4', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => {
        let item = list.getItem(key);
        return {
          'custom-app-type': JSON.stringify(item),
          'text/plain': item.name
        };
      }),
    renderPreview: (keys, draggedKey) => (
      <View
        backgroundColor="gray-50"
        padding="size-100"
        borderRadius="medium"
        borderWidth="thin"
        borderColor="blue-500"
      >
        <strong>Custom Preview</strong>
        <div>Keys: [{[...keys].join(', ')}]</div>
        <div>Dragged: {draggedKey}</div>
      </View>
    )  });

  return (
    <ListView
      aria-label="Draggable ListView with custom drag preview"
      selectionMode="multiple"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          {item.name}
        </Item>
      )}
    </ListView>
  );
}
```

```
import {View} from '@adobe/react-spectrum';

function CustomDragPreviewExample() {
  let list = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'file', name: 'Adobe InDesign' },
      { id: '4', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => {
        let item = list.getItem(key);
        return {
          'custom-app-type': JSON.stringify(item),
          'text/plain': item.name
        };
      }),
    renderPreview: (keys, draggedKey) => (
      <View
        backgroundColor="gray-50"
        padding="size-100"
        borderRadius="medium"
        borderWidth="thin"
        borderColor="blue-500"
      >
        <strong>Custom Preview</strong>
        <div>Keys: [{[...keys].join(', ')}]</div>
        <div>Dragged: {draggedKey}</div>
      </View>
    )  });

  return (
    <ListView
      aria-label="Draggable ListView with custom drag preview"
      selectionMode="multiple"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          {item.name}
        </Item>
      )}
    </ListView>
  );
}
```

```
import {View} from '@adobe/react-spectrum';

function CustomDragPreviewExample() {
  let list = useListData(
    {
      initialItems: [
        {
          id: '1',
          type: 'file',
          name:
            'Adobe Photoshop'
        },
        {
          id: '2',
          type: 'file',
          name:
            'Adobe XD'
        },
        {
          id: '3',
          type: 'file',
          name:
            'Adobe InDesign'
        },
        {
          id: '4',
          type: 'file',
          name:
            'Adobe AfterEffects'
        }
      ]
    }
  );

  let {
    dragAndDropHooks
  } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map(
        (key) => {
          let item = list
            .getItem(
              key
            );
          return {
            'custom-app-type':
              JSON
                .stringify(
                  item
                ),
            'text/plain':
              item.name
          };
        }
      ),
    renderPreview: (
      keys,
      draggedKey
    ) => (
      <View
        backgroundColor="gray-50"
        padding="size-100"
        borderRadius="medium"
        borderWidth="thin"
        borderColor="blue-500"
      >
        <strong>
          Custom Preview
        </strong>
        <div>
          Keys: [{[
            ...keys
          ].join(', ')}]
        </div>
        <div>
          Dragged:{' '}
          {draggedKey}
        </div>
      </View>
    )  });

  return (
    <ListView
      aria-label="Draggable ListView with custom drag preview"
      selectionMode="multiple"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item
          textValue={item
            .name}
        >
          {item.name}
        </Item>
      )}
    </ListView>
  );
}
```

```
<CustomDragPreviewExample />
```

```
<CustomDragPreviewExample />
```

```
<CustomDragPreviewExample />
```

* * *

Name

Type

Default

Description

`children`

`[CollectionChildren](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:CollectionChildren)<T>`

—

The contents of the collection.

`density`

`'compact' | 'regular' | 'spacious'`

`'regular'`

Sets the amount of vertical padding within each cell.

`isQuiet`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the ListView should be displayed with a quiet style.

`loadingState`

`[LoadingState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:LoadingState)`

—

The current loading state of the ListView. Determines whether or not the progress circle should be shown.

`overflowMode`

`'truncate' | 'wrap'`

`'truncate'`

Sets the text behavior for the row contents.

`renderEmptyState`

`() => JSX.Element`

—

Sets what the ListView should render when there is no content to display.

`dragAndDropHooks`

`[DragAndDropHooks](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/dnd/src/useDragAndDrop.ts:DragAndDropHooks)<NoInfer<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>>['dragAndDropHooks']`

—

The drag and drop hooks returned by `useDragAndDrop` used to enable drag and drop behavior for the ListView.

`escapeKeyBehavior`

`'clearSelection' | 'none'`

`'clearSelection'`

Whether pressing the escape key should clear selection in the grid list or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to easily clear selection. Only use if the escape key is being handled externally or should not trigger selection clearing contextually.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [FocusStrategy](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:FocusStrategy)`

—

Whether to auto focus the gridlist or an option.

`disabledBehavior`

`[DisabledBehavior](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:DisabledBehavior)`

`"all"`

Whether `disabledKeys` applies to all interactions, or only selection.

`shouldSelectOnPressUp`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether selection should occur on press up instead of press down.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<T>`

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

`selectionStyle`

`'checkbox' | 'highlight'`

—

How selection should be displayed.

Events

Name

Type

Description

`onAction`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) )) => void`

Handler that is called when a user performs an action on an item. The exact user event depends on the collection's `selectionStyle` prop and the interaction modality.

`onSelectionChange`

`( (keys: [Selection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:Selection) )) => void`

Handler that is called when the selection changes.

`onLoadMore`

`() => any`

Handler that is called when more items should be loaded, e.g. while scrolling near the bottom.

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
function ListExample(props) {
  return (
    <ListView
      selectionMode="multiple"
      aria-label="Quiet ListView example"
      width="size-3000"
      {...props}
    >
      <Item>Adobe AfterEffects</Item>
      <Item>Adobe Dreamweaver</Item>
      <Item>Adobe Acrobat</Item>
    </ListView>
  );
}

<ListExample isQuiet />
```

```
function ListExample(props) {
  return (
    <ListView
      selectionMode="multiple"
      aria-label="Quiet ListView example"
      width="size-3000"
      {...props}
    >
      <Item>Adobe AfterEffects</Item>
      <Item>Adobe Dreamweaver</Item>
      <Item>Adobe Acrobat</Item>
    </ListView>
  );
}

<ListExample isQuiet />
```

```
function ListExample(
  props
) {
  return (
    <ListView
      selectionMode="multiple"
      aria-label="Quiet ListView example"
      width="size-3000"
      {...props}
    >
      <Item>
        Adobe
        AfterEffects
      </Item>
      <Item>
        Adobe Dreamweaver
      </Item>
      <Item>
        Adobe Acrobat
      </Item>
    </ListView>
  );
}

<ListExample isQuiet />
```

The amount of vertical padding that each row contains can be modified by providing the `density` prop.

```
<Flex wrap gap="size-300">
  <ListExample density="compact" aria-label="Compact ListView example" />
  <ListExample density="spacious" aria-label="Spacious ListView example" />
</Flex>
```

```
<Flex wrap gap="size-300">
  <ListExample
    density="compact"
    aria-label="Compact ListView example"
  />
  <ListExample
    density="spacious"
    aria-label="Spacious ListView example"
  />
</Flex>
```

```
<Flex
  wrap
  gap="size-300"
>
  <ListExample
    density="compact"
    aria-label="Compact ListView example"
  />
  <ListExample
    density="spacious"
    aria-label="Spacious ListView example"
  />
</Flex>
```

By default, text content that overflows its row will be truncated. You can have it wrap instead by passing `overflowMode="wrap"` to the ListView.

```
<ListExample
  overflowMode="wrap"
  aria-label="Text wrapping ListView example"
  width="size-2000"
/>
```

```
<ListExample
  overflowMode="wrap"
  aria-label="Text wrapping ListView example"
  width="size-2000"
/>
```

```
<ListExample
  overflowMode="wrap"
  aria-label="Text wrapping ListView example"
  width="size-2000"
/>
```

Use the `renderEmptyState` prop to customize what the ListView will display if there are no rows provided.

```
import {Content, Heading, IllustratedMessage} from '@adobe/react-spectrum';
import NotFound from '@spectrum-icons/illustrations/NotFound';

function renderEmptyState() {
  return (
    <IllustratedMessage>
      <NotFound />
      <Heading>No results</Heading>
      <Content>No results found</Content>
    </IllustratedMessage>
  );
}

<ListView
  selectionMode="multiple"
  aria-label="Example ListView for empty state"
  maxWidth="size-6000"
  height="size-3000"
  renderEmptyState={renderEmptyState}
>
  {[]}
</ListView>
```

```
import {
  Content,
  Heading,
  IllustratedMessage
} from '@adobe/react-spectrum';
import NotFound from '@spectrum-icons/illustrations/NotFound';

function renderEmptyState() {
  return (
    <IllustratedMessage>
      <NotFound />
      <Heading>No results</Heading>
      <Content>No results found</Content>
    </IllustratedMessage>
  );
}

<ListView
  selectionMode="multiple"
  aria-label="Example ListView for empty state"
  maxWidth="size-6000"
  height="size-3000"
  renderEmptyState={renderEmptyState}
>
  {[]}
</ListView>
```

```
import {
  Content,
  Heading,
  IllustratedMessage
} from '@adobe/react-spectrum';
import NotFound from '@spectrum-icons/illustrations/NotFound';

function renderEmptyState() {
  return (
    <IllustratedMessage>
      <NotFound />
      <Heading>
        No results
      </Heading>
      <Content>
        No results found
      </Content>
    </IllustratedMessage>
  );
}

<ListView
  selectionMode="multiple"
  aria-label="Example ListView for empty state"
  maxWidth="size-6000"
  height="size-3000"
  renderEmptyState={renderEmptyState}
>
  {[]}
</ListView>
```

* * *

The ListView features automatic virtualization and may need specific mocks in a test environment to enable said virtualization properly. It also features long press interactions on its rows depending on the row actions provided and if user is interacting with the list on a touch device. Please see the following sections in the testing docs for more information on how to handle these behaviors in your test suite.

[Timers](https://react-spectrum.adobe.com/react-spectrum/testing.html#timers)

[Desktop vs Mobile](https://react-spectrum.adobe.com/react-spectrum/testing.html#desktop-vs-mobile)

[Virtualized Components](https://react-spectrum.adobe.com/react-spectrum/testing.html#virtualized-components)

[Long press](https://react-spectrum.adobe.com/react-spectrum/testing.html#simulating-user-long-press)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/list/test/ListView.test.js) if you find that the above isn't sufficient when resolving issues in your own test cases.

`@react-spectrum/test-utils` offers common gridlist interaction utilities which you may find helpful when writing tests. See [here](https://react-spectrum.adobe.com/react-aria/testing.html#react-aria-test-utils) for more information on how to setup these utilities in your tests. Below is the full definition of the gridlist tester and a sample of how you could use it in your test suite.

```
// ListView.test.ts
import {render, within} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/ListView.html#testing

it('ListView can select a row via keyboard', async function () {
  // Render your test component/app and initialize the gridlist tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <ListView data-testid="test-gridlist" selectionMode="single">
        ...
      </ListView>
    </Provider>
  );
  let gridListTester = testUtilUser.createTester('GridList', {
    root: getByTestId('test-gridlist'),
    interactionType: 'keyboard'
  });

  let row = gridListTester.rows[0];
  expect(within(row).getByRole('checkbox')).not.toBeChecked();
  expect(gridListTester.selectedRows).toHaveLength(0);

  await gridListTester.toggleRowSelection({ row: 0 });
  expect(within(row).getByRole('checkbox')).toBeChecked();
  expect(gridListTester.selectedRows).toHaveLength(1);

  await gridListTester.toggleRowSelection({ row: 0 });
  expect(within(row).getByRole('checkbox')).not.toBeChecked();
  expect(gridListTester.selectedRows).toHaveLength(0);
});
```

```
// ListView.test.ts
import {render, within} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/ListView.html#testing

it('ListView can select a row via keyboard', async function () {
  // Render your test component/app and initialize the gridlist tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <ListView
        data-testid="test-gridlist"
        selectionMode="single"
      >
        ...
      </ListView>
    </Provider>
  );
  let gridListTester = testUtilUser.createTester(
    'GridList',
    {
      root: getByTestId('test-gridlist'),
      interactionType: 'keyboard'
    }
  );

  let row = gridListTester.rows[0];
  expect(within(row).getByRole('checkbox')).not
    .toBeChecked();
  expect(gridListTester.selectedRows).toHaveLength(0);

  await gridListTester.toggleRowSelection({ row: 0 });
  expect(within(row).getByRole('checkbox')).toBeChecked();
  expect(gridListTester.selectedRows).toHaveLength(1);

  await gridListTester.toggleRowSelection({ row: 0 });
  expect(within(row).getByRole('checkbox')).not
    .toBeChecked();
  expect(gridListTester.selectedRows).toHaveLength(0);
});
```

```
// ListView.test.ts
import {
  render,
  within
} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser =
  new User({
    interactionType:
      'mouse'
  });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/ListView.html#testing

it('ListView can select a row via keyboard', async function () {
  // Render your test component/app and initialize the gridlist tester
  let { getByTestId } =
    render(
      <Provider
        theme={defaultTheme}
      >
        <ListView
          data-testid="test-gridlist"
          selectionMode="single"
        >
          ...
        </ListView>
      </Provider>
    );
  let gridListTester =
    testUtilUser
      .createTester(
        'GridList',
        {
          root:
            getByTestId(
              'test-gridlist'
            ),
          interactionType:
            'keyboard'
        }
      );

  let row =
    gridListTester
      .rows[0];
  expect(
    within(row)
      .getByRole(
        'checkbox'
      )
  ).not.toBeChecked();
  expect(
    gridListTester
      .selectedRows
  ).toHaveLength(0);

  await gridListTester
    .toggleRowSelection({
      row: 0
    });
  expect(
    within(row)
      .getByRole(
        'checkbox'
      )
  ).toBeChecked();
  expect(
    gridListTester
      .selectedRows
  ).toHaveLength(1);

  await gridListTester
    .toggleRowSelection({
      row: 0
    });
  expect(
    within(row)
      .getByRole(
        'checkbox'
      )
  ).not.toBeChecked();
  expect(
    gridListTester
      .selectedRows
  ).toHaveLength(0);
});
```

### Properties

Name

Type

Description

`gridlist`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the gridlist.

`rows`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the gridlist's rows if any.

`selectedRows`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the gridlist's selected rows if any.

### Methods

Method

Description

`constructor( (opts: [GridListTesterOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:GridListTesterOpts) )): void`

`setInteractionType( (type: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType'] )): void`

Set the interaction type used by the gridlist tester.

`findRow( (opts: {  rowIndexOrText: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns a row matching the specified index or text content.

`toggleRowSelection( (opts: [GridListToggleRowOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/gridlist.ts:GridListToggleRowOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Toggles the selection for the specified gridlist row. Defaults to using the interaction type set on the gridlist tester. Note that this will endevor to always add/remove JUST the provided row to the set of selected rows.

`triggerRowAction( (opts: [GridListRowActionOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/gridlist.ts:GridListRowActionOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Triggers the action for the specified gridlist row. Defaults to using the interaction type set on the gridlist tester.

`cells( (opts: {  element?: [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the gridlist's cells if any. Can be filtered against a specific row if provided via `element`.
