---
source: https://react-spectrum.adobe.com/react-spectrum/TableView.html
date: Thu, 16 Oct 2025 01:08:39 GMT
---

Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.

* * *

```
<TableView
  aria-label="Example table with static contents"
  selectionMode="multiple"
>
  <TableHeader>
    <Column>Name</Column>
    <Column>Type</Column>
    <Column align="end">Date Modified</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>Games</Cell>
      <Cell>File folder</Cell>
      <Cell>6/7/2020</Cell>
    </Row>
    <Row>
      <Cell>Program Files</Cell>
      <Cell>File folder</Cell>
      <Cell>4/7/2021</Cell>
    </Row>
    <Row>
      <Cell>bootmgr</Cell>
      <Cell>System file</Cell>
      <Cell>11/20/2010</Cell>
    </Row>
    <Row>
      <Cell>log.txt</Cell>
      <Cell>Text Document</Cell>
      <Cell>1/18/2016</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView
  aria-label="Example table with static contents"
  selectionMode="multiple"
>
  <TableHeader>
    <Column>Name</Column>
    <Column>Type</Column>
    <Column align="end">Date Modified</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>Games</Cell>
      <Cell>File folder</Cell>
      <Cell>6/7/2020</Cell>
    </Row>
    <Row>
      <Cell>Program Files</Cell>
      <Cell>File folder</Cell>
      <Cell>4/7/2021</Cell>
    </Row>
    <Row>
      <Cell>bootmgr</Cell>
      <Cell>System file</Cell>
      <Cell>11/20/2010</Cell>
    </Row>
    <Row>
      <Cell>log.txt</Cell>
      <Cell>Text Document</Cell>
      <Cell>1/18/2016</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView
  aria-label="Example table with static contents"
  selectionMode="multiple"
>
  <TableHeader>
    <Column>
      Name
    </Column>
    <Column>
      Type
    </Column>
    <Column align="end">
      Date Modified
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        Games
      </Cell>
      <Cell>
        File folder
      </Cell>
      <Cell>
        6/7/2020
      </Cell>
    </Row>
    <Row>
      <Cell>
        Program Files
      </Cell>
      <Cell>
        File folder
      </Cell>
      <Cell>
        4/7/2021
      </Cell>
    </Row>
    <Row>
      <Cell>
        bootmgr
      </Cell>
      <Cell>
        System file
      </Cell>
      <Cell>
        11/20/2010
      </Cell>
    </Row>
    <Row>
      <Cell>
        log.txt
      </Cell>
      <Cell>
        Text Document
      </Cell>
      <Cell>
        1/18/2016
      </Cell>
    </Row>
  </TableBody>
</TableView>
```

## Content[#](#content)

* * *

TableView is a complex [collection component](https://react-spectrum.adobe.com/react-stately/collections.html) that is built up from many child elements including columns, rows, and cells. Columns are defined within a TableHeader element and rows are defined within a TableBody element. Rows contain Cell elements that correspond to each column. Cells can contain any element, allowing you to have focusable children within the TableView.

Basic usage of TableView, seen in the example above, shows the use of a static collection where the contents of the TableView is hard coded. Dynamic collections, as shown below, can be used when the options come from an external data source such as an API, or update over time. Providing the data in this way allows TableView to automatically cache the rendering of each item, which dramatically improves performance.

Columns and rows can be statically defined as children, or generated dynamically using a function based on the data passed to the `columns` or `items` prop respectively. Cells can also be statically defined as children, or generated dynamically based on the columns defined in the TableHeader.

Each column and row has a unique key defined by the data. In the example below, the `uid` property of the column object is used as the `key` for the Column element within the TableHeader. The `key` of each row element is implicitly defined by the id property of the row object. See [collections](https://react-spectrum.adobe.com/react-stately/collections.html#unique-keys) to learn more about keys in dynamic collections.

```
let columns = [
  {name: 'Name', uid: 'name'},
  {name: 'Type', uid: 'type'},
  {name: 'Date Modified', uid: 'date'}
];

let rows = [
  {id: 1, name: 'Games', date: '6/7/2020', type: 'File folder'},
  {id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder'},
  {id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file'},
  {id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document'}
];

<TableView
  aria-label="Example table with dynamic content"
  maxWidth="size-6000">
  <TableHeader columns={columns}>
    {column => (
      <Column
        key={column.uid}
        align={column.uid === 'date' ? 'end' : 'start'}>
        {column.name}
      </Column>
    )}
  </TableHeader>
  <TableBody items={rows}>
    {item => (
      <Row>
        {columnKey => <Cell>{item[columnKey]}</Cell>}
      </Row>
    )}
  </TableBody>
</TableView>
```

```
let columns = [
  { name: 'Name', uid: 'name' },
  { name: 'Type', uid: 'type' },
  { name: 'Date Modified', uid: 'date' }
];

let rows = [
  {
    id: 1,
    name: 'Games',
    date: '6/7/2020',
    type: 'File folder'
  },
  {
    id: 2,
    name: 'Program Files',
    date: '4/7/2021',
    type: 'File folder'
  },
  {
    id: 3,
    name: 'bootmgr',
    date: '11/20/2010',
    type: 'System file'
  },
  {
    id: 4,
    name: 'log.txt',
    date: '1/18/2016',
    type: 'Text Document'
  }
];

<TableView
  aria-label="Example table with dynamic content"
  maxWidth="size-6000"
>
  <TableHeader columns={columns}>
    {(column) => (
      <Column
        key={column.uid}
        align={column.uid === 'date' ? 'end' : 'start'}
      >
        {column.name}
      </Column>
    )}
  </TableHeader>
  <TableBody items={rows}>
    {(item) => (
      <Row>
        {(columnKey) => <Cell>{item[columnKey]}</Cell>}
      </Row>
    )}
  </TableBody>
</TableView>
```

```
let columns = [
  {
    name: 'Name',
    uid: 'name'
  },
  {
    name: 'Type',
    uid: 'type'
  },
  {
    name:
      'Date Modified',
    uid: 'date'
  }
];

let rows = [
  {
    id: 1,
    name: 'Games',
    date: '6/7/2020',
    type: 'File folder'
  },
  {
    id: 2,
    name:
      'Program Files',
    date: '4/7/2021',
    type: 'File folder'
  },
  {
    id: 3,
    name: 'bootmgr',
    date: '11/20/2010',
    type: 'System file'
  },
  {
    id: 4,
    name: 'log.txt',
    date: '1/18/2016',
    type: 'Text Document'
  }
];

<TableView
  aria-label="Example table with dynamic content"
  maxWidth="size-6000"
>
  <TableHeader
    columns={columns}
  >
    {(column) => (
      <Column
        key={column
          .uid}
        align={column
            .uid ===
            'date'
          ? 'end'
          : 'start'}
      >
        {column.name}
      </Column>
    )}
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
```

TableViews are often contained within a page layout that defines the size of the table. For example, a page might have a header or toolbar with a TableView below that fills the remaining vertical space. TableView is designed to scroll internally while the column headers remain fixed. Because of this, TableViews should not be placed within a scrollable container.

The example below shows how to use a [Flex](https://react-spectrum.adobe.com/react-spectrum/Flex.html) component to achieve the layout described above. Note the TableView uses the `flex` prop to fill the remainder of the available space.

```
<Flex height="size-5000" width="100%" direction="column" gap="size-150">
  <ActionButton alignSelf="start">Add</ActionButton>
  <TableView
    flex
    aria-label="Example table with dynamic content"
  >
    <TableHeader columns={columns}>
      {(column) => (
        <Column
          key={column.id}
        >
          {column.name}
        </Column>
      )}
    </TableHeader>
    <TableBody items={rows}>
      {(item) => (
        <Row>
          {(columnKey) => <Cell>{item[columnKey]}</Cell>}
        </Row>
      )}
    </TableBody>
  </TableView>
</Flex>
```

```
<Flex
  height="size-5000"
  width="100%"
  direction="column"
  gap="size-150"
>
  <ActionButton alignSelf="start">Add</ActionButton>
  <TableView
    flex
    aria-label="Example table with dynamic content"
  >
    <TableHeader columns={columns}>
      {(column) => (
        <Column
          key={column.id}
        >
          {column.name}
        </Column>
      )}
    </TableHeader>
    <TableBody items={rows}>
      {(item) => (
        <Row>
          {(columnKey) => <Cell>{item[columnKey]}</Cell>}
        </Row>
      )}
    </TableBody>
  </TableView>
</Flex>
```

```
<Flex
  height="size-5000"
  width="100%"
  direction="column"
  gap="size-150"
>
  <ActionButton alignSelf="start">
    Add
  </ActionButton>
  <TableView
    flex
    aria-label="Example table with dynamic content"
  >
    <TableHeader
      columns={columns}
    >
      {(column) => (
        <Column
          key={column
            .id}
        >
          {column.name}
        </Column>
      )}
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
</Flex>
```

To internationalize a TableView, all text content within the TableView should be localized. This includes the `aria-label` provided to the TableView if any. For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of TableView is automatically flipped.

* * *

An `aria-label` must be provided to the TableView for accessibility. If the TableView is labeled by a separate element, an `aria-labelledby` prop must be provided using the id of the labeling element instead.

By default, the first column of the TableView is used as the [row header](https://www.w3.org/TR/wai-aria-1.1/#rowheader) and is announced by assistive technology when navigating through the rows. You can override this behavior by providing the `isRowHeader` prop to one or more Columns, allowing you to customize which columns should label the rows of the TableView.

The example below applies `isRowHeader` to the "First Name" and "Last Name" columns so that each row is announced with the person's full name (e.g. "John Doe").

```
<TableView aria-label="Example table with static contents">
  <TableHeader>
    <Column isRowHeader>First Name</Column>
    <Column isRowHeader>Last Name</Column>
    <Column align="end">Age</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>John</Cell>
      <Cell>Doe</Cell>
      <Cell>45</Cell>
    </Row>
    <Row>
      <Cell>Jane</Cell>
      <Cell>Doe</Cell>
      <Cell>37</Cell>
    </Row>
    <Row>
      <Cell>Joe</Cell>
      <Cell>Schmoe</Cell>
      <Cell>67</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView aria-label="Example table with static contents">
  <TableHeader>
    <Column isRowHeader>First Name</Column>
    <Column isRowHeader>Last Name</Column>
    <Column align="end">Age</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>John</Cell>
      <Cell>Doe</Cell>
      <Cell>45</Cell>
    </Row>
    <Row>
      <Cell>Jane</Cell>
      <Cell>Doe</Cell>
      <Cell>37</Cell>
    </Row>
    <Row>
      <Cell>Joe</Cell>
      <Cell>Schmoe</Cell>
      <Cell>67</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView aria-label="Example table with static contents">
  <TableHeader>
    <Column
      isRowHeader
    >
      First Name
    </Column>
    <Column
      isRowHeader
    >
      Last Name
    </Column>
    <Column align="end">
      Age
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>John</Cell>
      <Cell>Doe</Cell>
      <Cell>45</Cell>
    </Row>
    <Row>
      <Cell>Jane</Cell>
      <Cell>Doe</Cell>
      <Cell>37</Cell>
    </Row>
    <Row>
      <Cell>Joe</Cell>
      <Cell>
        Schmoe
      </Cell>
      <Cell>67</Cell>
    </Row>
  </TableBody>
</TableView>
```

* * *

TableView supports loading data asynchronously, and will display a progress circle reflecting the current load state, set by the `loadingState` prop. It also supports infinite scrolling to load more data on demand as the user scrolls, via the `onLoadMore` prop.

This example uses the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook to handle loading the data. See the docs for more information.

```
import {useAsyncList} from 'react-stately';

interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: number;
}

function AsyncTable() {
  let columns = [
    { name: 'Name', key: 'name' },
    { name: 'Height', key: 'height' },
    { name: 'Mass', key: 'mass' },
    { name: 'Birth Year', key: 'birth_year' }
  ];

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
    <TableView aria-label="example async loading table" height="size-3000">
      <TableHeader columns={columns}>
        {(column) => (
          <Column align={column.key !== 'name' ? 'end' : 'start'}>
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
        items={list.items}
        loadingState={list.loadingState}
        onLoadMore={list.loadMore}
      >
        {(item) => (
          <Row key={item.name}>{(key) => <Cell>{item[key]}</Cell>}</Row>
        )}
      </TableBody>
    </TableView>
  );
}
```

```
import {useAsyncList} from 'react-stately';

interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: number;
}

function AsyncTable() {
  let columns = [
    { name: 'Name', key: 'name' },
    { name: 'Height', key: 'height' },
    { name: 'Mass', key: 'mass' },
    { name: 'Birth Year', key: 'birth_year' }
  ];

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
    <TableView
      aria-label="example async loading table"
      height="size-3000"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            align={column.key !== 'name' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
        items={list.items}
        loadingState={list.loadingState}
        onLoadMore={list.loadMore}
      >
        {(item) => (
          <Row key={item.name}>
            {(key) => <Cell>{item[key]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
```

```
import {useAsyncList} from 'react-stately';

interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: number;
}

function AsyncTable() {
  let columns = [
    {
      name: 'Name',
      key: 'name'
    },
    {
      name: 'Height',
      key: 'height'
    },
    {
      name: 'Mass',
      key: 'mass'
    },
    {
      name: 'Birth Year',
      key: 'birth_year'
    }
  ];

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
    <TableView
      aria-label="example async loading table"
      height="size-3000"
    >
      <TableHeader
        columns={columns}
      >
        {(column) => (
          <Column
            align={column
                .key !==
                'name'
              ? 'end'
              : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
        items={list
          .items}
        loadingState={list
          .loadingState}
        onLoadMore={list
          .loadMore}
      >
        {(item) => (
          <Row
            key={item
              .name}
          >
            {(key) => (
              <Cell>
                {item[
                  key
                ]}
              </Cell>
            )}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
```

* * *

By default, TableView doesn't allow row selection but this can be enabled using the `selectionMode` prop. Use `defaultSelectedKeys` to provide a default set of selected rows. Note that the value of the selected keys must match the `key` prop of the Row.

The example below enables multiple selection mode, and uses `defaultSelectedKeys` to select the rows with keys "2" and "4".

```
<TableView
  aria-label="Example table with multiple selection"
  selectionMode="multiple"
  defaultSelectedKeys={['2', '4']}
>
  <TableHeader>
    <Column>Name</Column>
    <Column>Type</Column>
    <Column align="end">Level</Column>
  </TableHeader>
  <TableBody>
    <Row key="1">
      <Cell>Charizard</Cell>
      <Cell>Fire, Flying</Cell>
      <Cell>67</Cell>
    </Row>
    <Row key="2">
      <Cell>Blastoise</Cell>
      <Cell>Water</Cell>
      <Cell>56</Cell>
    </Row>
    <Row key="3">
      <Cell>Venusaur</Cell>
      <Cell>Grass, Poison</Cell>
      <Cell>83</Cell>
    </Row>
    <Row key="4">
      <Cell>Pikachu</Cell>
      <Cell>Electric</Cell>
      <Cell>100</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView
  aria-label="Example table with multiple selection"
  selectionMode="multiple"
  defaultSelectedKeys={['2', '4']}
>
  <TableHeader>
    <Column>Name</Column>
    <Column>Type</Column>
    <Column align="end">Level</Column>
  </TableHeader>
  <TableBody>
    <Row key="1">
      <Cell>Charizard</Cell>
      <Cell>Fire, Flying</Cell>
      <Cell>67</Cell>
    </Row>
    <Row key="2">
      <Cell>Blastoise</Cell>
      <Cell>Water</Cell>
      <Cell>56</Cell>
    </Row>
    <Row key="3">
      <Cell>Venusaur</Cell>
      <Cell>Grass, Poison</Cell>
      <Cell>83</Cell>
    </Row>
    <Row key="4">
      <Cell>Pikachu</Cell>
      <Cell>Electric</Cell>
      <Cell>100</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView
  aria-label="Example table with multiple selection"
  selectionMode="multiple"
  defaultSelectedKeys={[
    '2',
    '4'
  ]}
>
  <TableHeader>
    <Column>
      Name
    </Column>
    <Column>
      Type
    </Column>
    <Column align="end">
      Level
    </Column>
  </TableHeader>
  <TableBody>
    <Row key="1">
      <Cell>
        Charizard
      </Cell>
      <Cell>
        Fire, Flying
      </Cell>
      <Cell>67</Cell>
    </Row>
    <Row key="2">
      <Cell>
        Blastoise
      </Cell>
      <Cell>
        Water
      </Cell>
      <Cell>56</Cell>
    </Row>
    <Row key="3">
      <Cell>
        Venusaur
      </Cell>
      <Cell>
        Grass, Poison
      </Cell>
      <Cell>83</Cell>
    </Row>
    <Row key="4">
      <Cell>
        Pikachu
      </Cell>
      <Cell>
        Electric
      </Cell>
      <Cell>100</Cell>
    </Row>
  </TableBody>
</TableView>
```

To programmatically control row selection, use the `selectedKeys` prop paired with the `onSelectionChange` callback. The `key` prop from the selected rows will be passed into the callback when the row is pressed, allowing you to update state accordingly.

Here is how you would control selection for the above example.

```
import type {Selection} from '@adobe/react-spectrum';

function PokemonTable(props) {
  let columns = [
    { name: 'Name', uid: 'name' },
    { name: 'Type', uid: 'type' },
    { name: 'Level', uid: 'level' }
  ];

  let rows = [
    { id: 1, name: 'Charizard', type: 'Fire, Flying', level: '67' },
    { id: 2, name: 'Blastoise', type: 'Water', level: '56' },
    { id: 3, name: 'Venusaur', type: 'Grass, Poison', level: '83' },
    { id: 4, name: 'Pikachu', type: 'Electric', level: '100' }
  ];

  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([2]));

  return (
    <TableView
      aria-label="Table with controlled selection"
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      {...props}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.uid}
            align={column.uid === 'level' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function PokemonTable(props) {
  let columns = [
    { name: 'Name', uid: 'name' },
    { name: 'Type', uid: 'type' },
    { name: 'Level', uid: 'level' }
  ];

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

  let [selectedKeys, setSelectedKeys] = React.useState<
    Selection
  >(new Set([2]));

  return (
    <TableView
      aria-label="Table with controlled selection"
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      {...props}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.uid}
            align={column.uid === 'level' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function PokemonTable(
  props
) {
  let columns = [
    {
      name: 'Name',
      uid: 'name'
    },
    {
      name: 'Type',
      uid: 'type'
    },
    {
      name: 'Level',
      uid: 'level'
    }
  ];

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

  let [
    selectedKeys,
    setSelectedKeys
  ] = React.useState<
    Selection
  >(new Set([2]));

  return (
    <TableView
      aria-label="Table with controlled selection"
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      {...props}
    >
      <TableHeader
        columns={columns}
      >
        {(column) => (
          <Column
            key={column
              .uid}
            align={column
                .uid ===
                'level'
              ? 'end'
              : 'start'}
          >
            {column.name}
          </Column>
        )}
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
  );
}
```

To limit users to selecting only a single item at a time, `selectionMode` can be set to `single`.

```
// Using the same table as above
<PokemonTable selectionMode="single" />
```

```
// Using the same table as above
<PokemonTable selectionMode="single" />
```

```
// Using the same table as above
<PokemonTable selectionMode="single" />
```

TableView also supports a `disallowEmptySelection` prop which forces the user to have at least one row in the TableView selected at all times. In this mode, if a single row is selected and the user presses it, it will not be deselected.

```
// Using the same table as above
<PokemonTable disallowEmptySelection />
```

```
// Using the same table as above
<PokemonTable disallowEmptySelection />
```

```
// Using the same table as above
<PokemonTable
  disallowEmptySelection
/>
```

You can disable specific rows by providing an array of keys to TableView via the `disabledKeys` prop. This will prevent rows from being selectable as shown in the example below.

```
// Using the same table as above
<PokemonTable selectionMode="multiple" disabledKeys={[3]} />
```

```
// Using the same table as above
<PokemonTable selectionMode="multiple" disabledKeys={[3]} />
```

```
// Using the same table as above
<PokemonTable
  selectionMode="multiple"
  disabledKeys={[3]}
/>
```

By default, TableView uses the checkbox selection style, which includes a checkbox in each row for selection. When the selectionStyle prop is set to `"highlight"`, the checkboxes are hidden, and the selected rows are displayed with a highlighted background instead.

In addition to changing the appearance, the selection behavior also changes depending on the `selectionStyle` prop. In the default checkbox selection style, clicking, tapping, or pressing the Space or Enter keys toggles selection for the focused row. Using the arrow keys moves focus but does not change selection.

In the highlight selection style, however, clicking a row with the mouse _replaces_ the selection with only that row. Using the arrow keys moves both focus and selection. To select multiple rows, modifier keys such as Ctrl, Cmd, and Shift can be used. On touch screen devices, selection always behaves as toggle since modifier keys may not be available.

These selection styles implement the behaviors defined in [Aria Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/#keyboardinteraction).

```
<PokemonTable selectionMode="multiple" selectionStyle="highlight" />
```

```
<PokemonTable
  selectionMode="multiple"
  selectionStyle="highlight"
/>
```

```
<PokemonTable
  selectionMode="multiple"
  selectionStyle="highlight"
/>
```

* * *

TableView supports row actions via the `onAction` prop, which is useful for functionality such as navigation. When nothing is selected, the TableView performs actions by default when clicking or tapping a row. Items may be selected using the checkbox, or by long pressing on touch devices. When at least one item is selected, the TableView is in selection mode, and clicking or tapping a row toggles the selection. Actions may also be triggered via the Enter key, and selection using the Space key.

This behavior is slightly different in the highlight selection style, where single clicking selects the row and actions are performed via double click. Touch and keyboard behaviors are unaffected.

```
<Flex direction="column" gap="size-300">
  <PokemonTable
    aria-label="Pokemon table with row actions and checkbox selection"
    selectionMode="multiple"
    onAction={(key) => alert(`Opening item ${key}...`)}
  />
  <PokemonTable
    aria-label="Pokemon table with row actions and highlight selection"
    selectionMode="multiple"
    selectionStyle="highlight"
    onAction={(key) => alert(`Opening item ${key}...`)}
  />
</Flex>
```

```
<Flex direction="column" gap="size-300">
  <PokemonTable
    aria-label="Pokemon table with row actions and checkbox selection"
    selectionMode="multiple"
    onAction={(key) => alert(`Opening item ${key}...`)}
  />
  <PokemonTable
    aria-label="Pokemon table with row actions and highlight selection"
    selectionMode="multiple"
    selectionStyle="highlight"
    onAction={(key) => alert(`Opening item ${key}...`)}
  />
</Flex>
```

```
<Flex
  direction="column"
  gap="size-300"
>
  <PokemonTable
    aria-label="Pokemon table with row actions and checkbox selection"
    selectionMode="multiple"
    onAction={(key) =>
      alert(
        `Opening item ${key}...`
      )}
  />
  <PokemonTable
    aria-label="Pokemon table with row actions and highlight selection"
    selectionMode="multiple"
    selectionStyle="highlight"
    onAction={(key) =>
      alert(
        `Opening item ${key}...`
      )}
  />
</Flex>
```

Table rows may also be links to another page or website. This can be achieved by passing the `href` prop to the `<Row>` component. Links behave the same way as described above for row actions depending on the `selectionMode` and `selectionStyle`.

```
<TableView aria-label="Bookmarks" selectionMode="multiple">
  <TableHeader>
    <Column>Name</Column>
    <Column>URL</Column>
    <Column>Date added</Column>
  </TableHeader>
  <TableBody>
    <Row href="https://adobe.com/" target="_blank">
      <Cell>Adobe</Cell>
      <Cell>https://adobe.com/</Cell>
      <Cell>January 28, 2023</Cell>
    </Row>
    <Row href="https://google.com/" target="_blank">
      <Cell>Google</Cell>
      <Cell>https://google.com/</Cell>
      <Cell>April 5, 2023</Cell>
    </Row>
    <Row href="https://nytimes.com/" target="_blank">
      <Cell>New York Times</Cell>
      <Cell>https://nytimes.com/</Cell>
      <Cell>July 12, 2023</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView aria-label="Bookmarks" selectionMode="multiple">
  <TableHeader>
    <Column>Name</Column>
    <Column>URL</Column>
    <Column>Date added</Column>
  </TableHeader>
  <TableBody>
    <Row href="https://adobe.com/" target="_blank">
      <Cell>Adobe</Cell>
      <Cell>https://adobe.com/</Cell>
      <Cell>January 28, 2023</Cell>
    </Row>
    <Row href="https://google.com/" target="_blank">
      <Cell>Google</Cell>
      <Cell>https://google.com/</Cell>
      <Cell>April 5, 2023</Cell>
    </Row>
    <Row href="https://nytimes.com/" target="_blank">
      <Cell>New York Times</Cell>
      <Cell>https://nytimes.com/</Cell>
      <Cell>July 12, 2023</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView
  aria-label="Bookmarks"
  selectionMode="multiple"
>
  <TableHeader>
    <Column>
      Name
    </Column>
    <Column>
      URL
    </Column>
    <Column>
      Date added
    </Column>
  </TableHeader>
  <TableBody>
    <Row
      href="https://adobe.com/"
      target="_blank"
    >
      <Cell>
        Adobe
      </Cell>
      <Cell>
        https://adobe.com/
      </Cell>
      <Cell>
        January 28,
        2023
      </Cell>
    </Row>
    <Row
      href="https://google.com/"
      target="_blank"
    >
      <Cell>
        Google
      </Cell>
      <Cell>
        https://google.com/
      </Cell>
      <Cell>
        April 5, 2023
      </Cell>
    </Row>
    <Row
      href="https://nytimes.com/"
      target="_blank"
    >
      <Cell>
        New York Times
      </Cell>
      <Cell>
        https://nytimes.com/
      </Cell>
      <Cell>
        July 12, 2023
      </Cell>
    </Row>
  </TableBody>
</TableView>
```

The `<Row>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Spectrum components that support links, this works via the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-spectrum/routing.html) to learn how to set this up.

* * *

TableView supports sorting its data when a column header is pressed. To designate that a Column should support sorting, provide it with the `allowsSorting` prop. The TableView accepts a `sortDescriptor` prop that defines the current column key to sort by and the sort direction (ascending/descending). When the user presses a sortable column header, the column's key and sort direction is passed into the `onSortChange` callback, allowing you to update the `sortDescriptor` appropriately.

This example performs client side sorting by passing a `sort` function to the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook. See the docs for more information on how to perform server side sorting.

```
import {useCollator} from '@adobe/react-spectrum';

interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: number;
}

function AsyncSortTable() {
  let collator = useCollator({ numeric: true });

  let list = useAsyncList<Character>({
    async load({ signal }) {
      let res = await fetch(`https://swapi.py4e.com/api/people/?search`, {
        signal
      });
      let json = await res.json();
      return {
        items: json.results
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column];
          let second = b[sortDescriptor.column];
          let cmp = collator.compare(first, second);
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
          }
          return cmp;
        })
      };
    }
  });

  return (
    <TableView
      aria-label="Example table with client side sorting"
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
      height="size-3000"
    >
      <TableHeader>
        <Column key="name" allowsSorting>Name</Column>
        <Column key="height" allowsSorting>Height</Column>
        <Column key="mass" allowsSorting>Mass</Column>
        <Column key="birth_year" allowsSorting>Birth Year</Column>
      </TableHeader>
      <TableBody
        items={list.items}
        loadingState={list.loadingState}
      >
        {(item) => (
          <Row key={item.name}>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
```

```
import {useCollator} from '@adobe/react-spectrum';

interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: number;
}

function AsyncSortTable() {
  let collator = useCollator({ numeric: true });

  let list = useAsyncList<Character>({
    async load({ signal }) {
      let res = await fetch(
        `https://swapi.py4e.com/api/people/?search`,
        { signal }
      );
      let json = await res.json();
      return {
        items: json.results
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column];
          let second = b[sortDescriptor.column];
          let cmp = collator.compare(first, second);
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
          }
          return cmp;
        })
      };
    }
  });

  return (
    <TableView
      aria-label="Example table with client side sorting"
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
      height="size-3000"
    >
      <TableHeader>
        <Column key="name" allowsSorting>Name</Column>
        <Column key="height" allowsSorting>Height</Column>
        <Column key="mass" allowsSorting>Mass</Column>
        <Column key="birth_year" allowsSorting>
          Birth Year
        </Column>
      </TableHeader>
      <TableBody
        items={list.items}
        loadingState={list.loadingState}
      >
        {(item) => (
          <Row key={item.name}>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
```

```
import {useCollator} from '@adobe/react-spectrum';

interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: number;
}

function AsyncSortTable() {
  let collator =
    useCollator({
      numeric: true
    });

  let list =
    useAsyncList<
      Character
    >({
      async load(
        { signal }
      ) {
        let res =
          await fetch(
            `https://swapi.py4e.com/api/people/?search`,
            { signal }
          );
        let json =
          await res
            .json();
        return {
          items:
            json.results
        };
      },
      async sort(
        {
          items,
          sortDescriptor
        }
      ) {
        return {
          items: items
            .sort(
              (a, b) => {
                let first =
                  a[
                    sortDescriptor
                      .column
                  ];
                let second =
                  b[
                    sortDescriptor
                      .column
                  ];
                let cmp =
                  collator
                    .compare(
                      first,
                      second
                    );
                if (
                  sortDescriptor
                    .direction ===
                    'descending'
                ) {
                  cmp *=
                    -1;
                }
                return cmp;
              }
            )
        };
      }
    });

  return (
    <TableView
      aria-label="Example table with client side sorting"
      sortDescriptor={list
        .sortDescriptor}
      onSortChange={list
        .sort}
      height="size-3000"
    >
      <TableHeader>
        <Column
          key="name"
          allowsSorting
        >
          Name
        </Column>
        <Column
          key="height"
          allowsSorting
        >
          Height
        </Column>
        <Column
          key="mass"
          allowsSorting
        >
          Mass
        </Column>
        <Column
          key="birth_year"
          allowsSorting
        >
          Birth Year
        </Column>
      </TableHeader>
      <TableBody
        items={list
          .items}
        loadingState={list
          .loadingState}
      >
        {(item) => (
          <Row
            key={item
              .name}
          >
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
  );
}
```

## Column widths[#](#column-widths)

* * *

By default, TableView divides the available space evenly among the columns. The `Column` component also supports four different width props that allow you to control column sizing behavior: `defaultWidth`, `width`, `minWidth`, and `maxWidth`.

The `width` and `defaultWidth` props define the width of a column. The former defines a controlled width, and the latter defines an uncontrolled width when the column is [resizable](#column-resizing). These props accept fixed pixel values, percentages of the total table width, or [fractional](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#the_fr_unit) values (the `fr` unit), which represent a fraction of the available space. Columns without a defined width are equivalent to `1fr`.

The `minWidth` and `maxWidth` props define constraints on the size of a column, which may be defined either as fixed pixel values or as percentages of the total table width. These are respected when calculating the size of a column, and also provide limits for column resizing.

```
<TableView aria-label="Example table for column widths" maxWidth={320}>
  <TableHeader>
    <Column defaultWidth="1fr" align="start">Name</Column>
    <Column maxWidth={80}>Type</Column>
    <Column width={80}>Size</Column>
    <Column minWidth={100} align="end">Date Modified</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>2021406_Proposal</Cell>
      <Cell>PDF</Cell>
      <Cell>86 KB</Cell>
      <Cell>April 12</Cell>
    </Row>
    <Row>
      <Cell>Budget Template</Cell>
      <Cell>XLS</Cell>
      <Cell>120 KB</Cell>
      <Cell>November 27</Cell>
    </Row>
    <Row>
      <Cell>Onboarding</Cell>
      <Cell>PPT</Cell>
      <Cell>472 KB</Cell>
      <Cell>January 7</Cell>
    </Row>
    <Row>
      <Cell>Welcome</Cell>
      <Cell>TXT</Cell>
      <Cell>24 KB</Cell>
      <Cell>February 11</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView
  aria-label="Example table for column widths"
  maxWidth={320}
>
  <TableHeader>
    <Column defaultWidth="1fr" align="start">Name</Column>
    <Column maxWidth={80}>Type</Column>
    <Column width={80}>Size</Column>
    <Column minWidth={100} align="end">
      Date Modified
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>2021406_Proposal</Cell>
      <Cell>PDF</Cell>
      <Cell>86 KB</Cell>
      <Cell>April 12</Cell>
    </Row>
    <Row>
      <Cell>Budget Template</Cell>
      <Cell>XLS</Cell>
      <Cell>120 KB</Cell>
      <Cell>November 27</Cell>
    </Row>
    <Row>
      <Cell>Onboarding</Cell>
      <Cell>PPT</Cell>
      <Cell>472 KB</Cell>
      <Cell>January 7</Cell>
    </Row>
    <Row>
      <Cell>Welcome</Cell>
      <Cell>TXT</Cell>
      <Cell>24 KB</Cell>
      <Cell>February 11</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView
  aria-label="Example table for column widths"
  maxWidth={320}
>
  <TableHeader>
    <Column
      defaultWidth="1fr"
      align="start"
    >
      Name
    </Column>
    <Column
      maxWidth={80}
    >
      Type
    </Column>
    <Column width={80}>
      Size
    </Column>
    <Column
      minWidth={100}
      align="end"
    >
      Date Modified
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        2021406_Proposal
      </Cell>
      <Cell>PDF</Cell>
      <Cell>
        86 KB
      </Cell>
      <Cell>
        April 12
      </Cell>
    </Row>
    <Row>
      <Cell>
        Budget Template
      </Cell>
      <Cell>XLS</Cell>
      <Cell>
        120 KB
      </Cell>
      <Cell>
        November 27
      </Cell>
    </Row>
    <Row>
      <Cell>
        Onboarding
      </Cell>
      <Cell>PPT</Cell>
      <Cell>
        472 KB
      </Cell>
      <Cell>
        January 7
      </Cell>
    </Row>
    <Row>
      <Cell>
        Welcome
      </Cell>
      <Cell>TXT</Cell>
      <Cell>
        24 KB
      </Cell>
      <Cell>
        February 11
      </Cell>
    </Row>
  </TableBody>
</TableView>
```

## Column Resizing[#](#column-resizing)

* * *

TableView supports resizable columns, allowing users to dynamically adjust the width of a column. To designate that a Column is resizable, provide it with the `allowsResizing` prop. This will render a draggable resizer handle that becomes visible on hover. Keyboard, touch, and screen reader users can start resizing by interacting with the target column's header and selecting the "Resize column" option from the dropdown.

An initial, uncontrolled width can be provided to a Column using the `defaultWidth` prop. This allows the column width to freely shrink and grow in relation to other column widths. Alternatively, a controlled value can be provided by the `width` prop. The `minWidth` and `maxWidth` props allow you to restrict a Column's size. See [column widths](#column-widths) above for more details.

The example below illustrates how each of the column width props affects their respective column's resize behavior.

```
<TableView
  aria-label="TableView with resizable columns"
  maxWidth={320}
  height={210} >
  <TableHeader>
    <Column key="file" allowsResizing maxWidth={500}>File Name</Column>
    <Column key="size" width={80}>Size</Column>
    <Column key="date" allowsResizing minWidth={100}>Date Modified</Column>  </TableHeader>
  <TableBody>
    <Row>
      <Cell>2022-Roadmap-Proposal-Revision-012822-Copy(2)</Cell>
      <Cell>214 KB</Cell>
      <Cell>November 27, 2022 at 4:56PM</Cell>
    </Row>
    <Row>
      <Cell>62259692_p0_master1200</Cell>
      <Cell>120 KB</Cell>
      <Cell>January 27, 2021 at 1:56AM</Cell>
    </Row>
    <Row>
      <Cell colSpan={3}>Total space: 334 KB</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView
  aria-label="TableView with resizable columns"
  maxWidth={320}
  height={210}
>
  <TableHeader>
    <Column key="file" allowsResizing maxWidth={500}>
      File Name
    </Column>
    <Column key="size" width={80}>Size</Column>
    <Column key="date" allowsResizing minWidth={100}>
      Date Modified
    </Column>  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        2022-Roadmap-Proposal-Revision-012822-Copy(2)
      </Cell>
      <Cell>214 KB</Cell>
      <Cell>November 27, 2022 at 4:56PM</Cell>
    </Row>
    <Row>
      <Cell>62259692_p0_master1200</Cell>
      <Cell>120 KB</Cell>
      <Cell>January 27, 2021 at 1:56AM</Cell>
    </Row>
    <Row>
      <Cell colSpan={3}>Total space: 334 KB</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView
  aria-label="TableView with resizable columns"
  maxWidth={320}
  height={210}
>
  <TableHeader>
    <Column
      key="file"
      allowsResizing
      maxWidth={500}
    >
      File Name
    </Column>
    <Column
      key="size"
      width={80}
    >
      Size
    </Column>
    <Column
      key="date"
      allowsResizing
      minWidth={100}
    >
      Date Modified
    </Column>  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        2022-Roadmap-Proposal-Revision-012822-Copy(2)
      </Cell>
      <Cell>
        214 KB
      </Cell>
      <Cell>
        November 27,
        2022 at 4:56PM
      </Cell>
    </Row>
    <Row>
      <Cell>
        62259692_p0_master1200
      </Cell>
      <Cell>
        120 KB
      </Cell>
      <Cell>
        January 27,
        2021 at 1:56AM
      </Cell>
    </Row>
    <Row>
      <Cell
        colSpan={3}
      >
        Total space:
        334 KB
      </Cell>
    </Row>
  </TableBody>
</TableView>
```

TableView accepts an `onResize` prop which is triggered whenever a column resizer is moved by the user. This can be used in combination with the `width` prop to update a Column's width in a controlled fashion. TableView also accepts an `onResizeEnd` prop, which is triggered when the user finishes a column resize operation. Both events receive a Map object containing the widths of every column in the TableView.

The example below uses `onResize` to update each of the TableView's controlled column widths. It also saves the finalized column widths to `localStorage` in `onResizeEnd`, allowing the TableView's state to be preserved between page loads and refreshes.

```
let items = [
  {
    id: '1',
    file: '2022-Roadmap-Proposal-Revision-012822-Copy(2)',
    size: '214 KB',
    date: 'November 27, 2022 at 4:56PM'
  },
  {
    id: '2',
    file: '62259692_p0_master1200',
    size: '120 KB',
    date: 'January 27, 2021 at 1:56AM'
  }
];

let columnsData = [
  { name: 'File Name', id: 'file', width: '1fr' },
  { name: 'Size', id: 'size', width: 80 },
  { name: 'Date', id: 'date', width: 100 }
];

function ResizableTable() {
  let [columns, setColumns] = React.useState(() => {
    let localStorageWidths = localStorage.getItem('RSPWidths');
    if (localStorageWidths) {
      let widths = JSON.parse(localStorageWidths);
      return columnsData.map((col) => ({ ...col, width: widths[col.id] }));
    } else {
      return columnsData;
    }
  });

  let onResize = (widths) => {
    setColumns((columns) =>
      columns.map((col) => ({ ...col, width: widths.get(col.id) }))
    );
  };

  let onResizeEnd = (widths) => {
    localStorage.setItem(
      'RSPWidths',
      JSON.stringify(Object.fromEntries(widths))
    );
  };
  return (
    <TableView
      onResize={onResize}
      onResizeEnd={onResizeEnd}      aria-label="TableView with controlled, resizable columns saved in local storage"
      maxWidth={320}
      height={200}
    >
      <TableHeader columns={columns}>
        {(column) => {
          const { name, id, width } = column;
          return <Column allowsResizing key={id} width={width}>{name}</Column>;
        }}
      </TableHeader>
      <TableBody items={items}>
        {(item) => <Row key={item.id}>{(key) => <Cell>{item[key]}</Cell>}</Row>}
      </TableBody>
    </TableView>
  );
}

<ResizableTable />
```

```
let items = [
  {
    id: '1',
    file: '2022-Roadmap-Proposal-Revision-012822-Copy(2)',
    size: '214 KB',
    date: 'November 27, 2022 at 4:56PM'
  },
  {
    id: '2',
    file: '62259692_p0_master1200',
    size: '120 KB',
    date: 'January 27, 2021 at 1:56AM'
  }
];

let columnsData = [
  { name: 'File Name', id: 'file', width: '1fr' },
  { name: 'Size', id: 'size', width: 80 },
  { name: 'Date', id: 'date', width: 100 }
];

function ResizableTable() {
  let [columns, setColumns] = React.useState(() => {
    let localStorageWidths = localStorage.getItem(
      'RSPWidths'
    );
    if (localStorageWidths) {
      let widths = JSON.parse(localStorageWidths);
      return columnsData.map((col) => ({
        ...col,
        width: widths[col.id]
      }));
    } else {
      return columnsData;
    }
  });

  let onResize = (widths) => {
    setColumns((columns) =>
      columns.map((col) => ({
        ...col,
        width: widths.get(col.id)
      }))
    );
  };

  let onResizeEnd = (widths) => {
    localStorage.setItem(
      'RSPWidths',
      JSON.stringify(Object.fromEntries(widths))
    );
  };
  return (
    <TableView
      onResize={onResize}
      onResizeEnd={onResizeEnd}      aria-label="TableView with controlled, resizable columns saved in local storage"
      maxWidth={320}
      height={200}
    >
      <TableHeader columns={columns}>
        {(column) => {
          const { name, id, width } = column;
          return (
            <Column allowsResizing key={id} width={width}>
              {name}
            </Column>
          );
        }}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <Row key={item.id}>
            {(key) => <Cell>{item[key]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

<ResizableTable />
```

```
let items = [
  {
    id: '1',
    file:
      '2022-Roadmap-Proposal-Revision-012822-Copy(2)',
    size: '214 KB',
    date:
      'November 27, 2022 at 4:56PM'
  },
  {
    id: '2',
    file:
      '62259692_p0_master1200',
    size: '120 KB',
    date:
      'January 27, 2021 at 1:56AM'
  }
];

let columnsData = [
  {
    name: 'File Name',
    id: 'file',
    width: '1fr'
  },
  {
    name: 'Size',
    id: 'size',
    width: 80
  },
  {
    name: 'Date',
    id: 'date',
    width: 100
  }
];

function ResizableTable() {
  let [
    columns,
    setColumns
  ] = React.useState(
    () => {
      let localStorageWidths =
        localStorage
          .getItem(
            'RSPWidths'
          );
      if (
        localStorageWidths
      ) {
        let widths = JSON
          .parse(
            localStorageWidths
          );
        return columnsData
          .map(
            (col) => ({
              ...col,
              width:
                widths[
                  col.id
                ]
            })
          );
      } else {
        return columnsData;
      }
    }
  );

  let onResize = (
    widths
  ) => {
    setColumns(
      (columns) =>
        columns.map(
          (col) => ({
            ...col,
            width: widths
              .get(
                col.id
              )
          })
        )
    );
  };

  let onResizeEnd = (
    widths
  ) => {
    localStorage.setItem(
      'RSPWidths',
      JSON.stringify(
        Object
          .fromEntries(
            widths
          )
      )
    );
  };
  return (
    <TableView
      onResize={onResize}
      onResizeEnd={onResizeEnd}      aria-label="TableView with controlled, resizable columns saved in local storage"
      maxWidth={320}
      height={200}
    >
      <TableHeader
        columns={columns}
      >
        {(column) => {
          const {
            name,
            id,
            width
          } = column;
          return (
            <Column
              allowsResizing
              key={id}
              width={width}
            >
              {name}
            </Column>
          );
        }}
      </TableHeader>
      <TableBody
        items={items}
      >
        {(item) => (
          <Row
            key={item.id}
          >
            {(key) => (
              <Cell>
                {item[
                  key
                ]}
              </Cell>
            )}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

<ResizableTable />
```

## Drag and drop beta[#](#drag-and-drop-)

* * *

To enable drag and drop in a TableView, you must provide the drag and drop hooks sourced from `[useDragAndDrop](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/dnd/src/useDragAndDrop.ts:useDragAndDrop)` to the TableView's `dragAndDropHooks` prop. See the examples below for various common drag and drop use cases. For more information on `useDragAndDrop` and the various supported ways to perform a drag and drop interaction, please see the [drag and drop documentation](https://react-spectrum.adobe.com/react-spectrum/dnd.html).

### Draggable TableView and droppable TableView[#](#draggable-tableview-and-droppable-tableview)

The example below demonstrates how to create a draggable TableView and a droppable TableView.

Show code

```
import type {DragAndDropOptions, TextDropItem} from '@adobe/react-spectrum';
import {useDragAndDrop} from '@adobe/react-spectrum';
import type {ListData} from '@adobe/react-spectrum';
import {useListData} from '@adobe/react-spectrum';

interface Item {
  name: string;
  type?: string;
  date?: string;
  childNodes?: Item[];
}

interface DndTableViewProps extends DragAndDropOptions {
  list: ListData<Item>;
  columns: { name: string; id: string }[];
}

function DraggableTableView(props: DndTableViewProps) {
  let { list, columns, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only allow move operations when dropping items from this table
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
    <TableView
      aria-label="Draggable TableView in drag into table example"
      selectionMode="multiple"
      width="size-5000"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DroppableTableView(props: DndTableViewProps) {
  let { list, columns, ...otherProps } = props;
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
    <TableView
      aria-label="Droppable TableView in drag into table example"
      width="size-5000"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DragIntoTable() {
  let columns = [
    { name: 'Name', id: 'name' },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' }
  ];

  let sourceList = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop', date: '6/7/2020' },
      { id: '2', type: 'file', name: 'Adobe XD', date: '4/7/2021' },
      { id: '3', type: 'file', name: 'Adobe InDesign', date: '11/20/2010' },
      { id: '4', type: 'file', name: 'Adobe AfterEffects', date: '1/18/2016' }
    ]
  });

  let targetList = useListData({
    initialItems: [
      { id: '5', type: 'file', name: 'Adobe Dreamweaver', date: '1/18/2016' },
      { id: '6', type: 'file', name: 'Adobe Fresco', date: '11/20/2010' },
      { id: '7', type: 'file', name: 'Adobe Connect', date: '4/7/2021' },
      { id: '8', type: 'file', name: 'Adobe Lightroom', date: '6/7/2020' }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableTableView list={sourceList} columns={columns} />
      <DroppableTableView list={targetList} columns={columns} />
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
  date?: string;
  childNodes?: Item[];
}

interface DndTableViewProps extends DragAndDropOptions {
  list: ListData<Item>;
  columns: { name: string; id: string }[];
}

function DraggableTableView(props: DndTableViewProps) {
  let { list, columns, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only allow move operations when dropping items from this table
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
    <TableView
      aria-label="Draggable TableView in drag into table example"
      selectionMode="multiple"
      width="size-5000"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DroppableTableView(props: DndTableViewProps) {
  let { list, columns, ...otherProps } = props;
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
    <TableView
      aria-label="Droppable TableView in drag into table example"
      width="size-5000"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DragIntoTable() {
  let columns = [
    { name: 'Name', id: 'name' },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' }
  ];

  let sourceList = useListData({
    initialItems: [
      {
        id: '1',
        type: 'file',
        name: 'Adobe Photoshop',
        date: '6/7/2020'
      },
      {
        id: '2',
        type: 'file',
        name: 'Adobe XD',
        date: '4/7/2021'
      },
      {
        id: '3',
        type: 'file',
        name: 'Adobe InDesign',
        date: '11/20/2010'
      },
      {
        id: '4',
        type: 'file',
        name: 'Adobe AfterEffects',
        date: '1/18/2016'
      }
    ]
  });

  let targetList = useListData({
    initialItems: [
      {
        id: '5',
        type: 'file',
        name: 'Adobe Dreamweaver',
        date: '1/18/2016'
      },
      {
        id: '6',
        type: 'file',
        name: 'Adobe Fresco',
        date: '11/20/2010'
      },
      {
        id: '7',
        type: 'file',
        name: 'Adobe Connect',
        date: '4/7/2021'
      },
      {
        id: '8',
        type: 'file',
        name: 'Adobe Lightroom',
        date: '6/7/2020'
      }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableTableView
        list={sourceList}
        columns={columns}
      />
      <DroppableTableView
        list={targetList}
        columns={columns}
      />
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
  date?: string;
  childNodes?: Item[];
}

interface DndTableViewProps
  extends
    DragAndDropOptions {
  list: ListData<Item>;
  columns: {
    name: string;
    id: string;
  }[];
}

function DraggableTableView(
  props:
    DndTableViewProps
) {
  let {
    list,
    columns,
    ...otherProps
  } = props;
  let {
    dragAndDropHooks
  } = useDragAndDrop({
    // Only allow move operations when dropping items from this table
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
    <TableView
      aria-label="Draggable TableView in drag into table example"
      selectionMode="multiple"
      width="size-5000"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}    >
      <TableHeader
        columns={columns}
      >
        {(column) => (
          <Column
            key={column
              .id}
            align={column
                .id ===
                'date'
              ? 'end'
              : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
        items={list
          .items}
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
  );
}

function DroppableTableView(
  props:
    DndTableViewProps
) {
  let {
    list,
    columns,
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
    <TableView
      aria-label="Droppable TableView in drag into table example"
      width="size-5000"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}    >
      <TableHeader
        columns={columns}
      >
        {(column) => (
          <Column
            key={column
              .id}
            align={column
                .id ===
                'date'
              ? 'end'
              : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
        items={list
          .items}
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
  );
}

function DragIntoTable() {
  let columns = [
    {
      name: 'Name',
      id: 'name'
    },
    {
      name: 'Type',
      id: 'type'
    },
    {
      name:
        'Date Modified',
      id: 'date'
    }
  ];

  let sourceList =
    useListData({
      initialItems: [
        {
          id: '1',
          type: 'file',
          name:
            'Adobe Photoshop',
          date:
            '6/7/2020'
        },
        {
          id: '2',
          type: 'file',
          name:
            'Adobe XD',
          date:
            '4/7/2021'
        },
        {
          id: '3',
          type: 'file',
          name:
            'Adobe InDesign',
          date:
            '11/20/2010'
        },
        {
          id: '4',
          type: 'file',
          name:
            'Adobe AfterEffects',
          date:
            '1/18/2016'
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
            'Adobe Dreamweaver',
          date:
            '1/18/2016'
        },
        {
          id: '6',
          type: 'file',
          name:
            'Adobe Fresco',
          date:
            '11/20/2010'
        },
        {
          id: '7',
          type: 'file',
          name:
            'Adobe Connect',
          date:
            '4/7/2021'
        },
        {
          id: '8',
          type: 'file',
          name:
            'Adobe Lightroom',
          date:
            '6/7/2020'
        }
      ]
    });

  return (
    <Flex
      wrap
      gap="size-300"
    >
      <DraggableTableView
        list={sourceList}
        columns={columns}
      />
      <DroppableTableView
        list={targetList}
        columns={columns}
      />
    </Flex>
  );
}
```

```
<DragIntoTable />
```

```
<DragIntoTable />
```

```
<DragIntoTable />
```

### Handling folder drops[#](#handling-folder-drops)

The example below replicates the previous example but demonstrates how to handle on item drops.

Show code

```
function DraggableTableViewFolder(props: DndTableViewProps) {
  let { list, columns, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only allow move operations when dropping items from this table
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
    <TableView
      aria-label="Draggable TableView in drag onto folder example"
      selectionMode="multiple"
      width="size-5000"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DroppableTableViewFolder(props: DndTableViewProps) {
  let { list, columns, ...otherProps } = props;
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
    <TableView
      aria-label="Droppable TableView in drop into folder example"
      width="size-5000"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => (
              <Cell>
                {item[columnKey]}
                {columnKey === 'type' && item[columnKey] === 'folder' &&
                  item.childNodes.length > 0 &&
                  ` (${item.childNodes?.length} dropped item(s)`}
              </Cell>
            )}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DragIntoTableFolder() {
  let columns = [
    { name: 'Name', id: 'name' },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' }
  ];

  let sourceList = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop', date: '2/1/2020' },
      { id: '2', type: 'file', name: 'Adobe XD', date: '6/7/2020' },
      {
        id: '3',
        type: 'folder',
        name: 'Documents',
        date: '6/13/2020',
        childNodes: []
      },
      { id: '4', type: 'file', name: 'Adobe InDesign', date: '2/4/2020' },
      {
        id: '5',
        type: 'folder',
        name: 'Utilities',
        date: '12/3/2020',
        childNodes: []
      },
      { id: '6', type: 'file', name: 'Adobe AfterEffects', date: '3/12/2020' }
    ]
  });

  let targetList = useListData({
    initialItems: [
      {
        id: '7',
        type: 'folder',
        name: 'Pictures',
        date: '6/17/2020',
        childNodes: []
      },
      { id: '8', type: 'file', name: 'Adobe Fresco', date: '1/27/2020' },
      {
        id: '9',
        type: 'folder',
        name: 'Apps',
        date: '12/23/2020',
        childNodes: []
      }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableTableViewFolder list={sourceList} columns={columns} />
      <DroppableTableViewFolder list={targetList} columns={columns} />
    </Flex>
  );
}
```

```
function DraggableTableViewFolder(
  props: DndTableViewProps
) {
  let { list, columns, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only allow move operations when dropping items from this table
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
    <TableView
      aria-label="Draggable TableView in drag onto folder example"
      selectionMode="multiple"
      width="size-5000"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DroppableTableViewFolder(
  props: DndTableViewProps
) {
  let { list, columns, ...otherProps } = props;
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
    <TableView
      aria-label="Droppable TableView in drop into folder example"
      width="size-5000"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => (
              <Cell>
                {item[columnKey]}
                {columnKey === 'type' &&
                  item[columnKey] === 'folder' &&
                  item.childNodes.length > 0 &&
                  ` (${item.childNodes?.length} dropped item(s)`}
              </Cell>
            )}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DragIntoTableFolder() {
  let columns = [
    { name: 'Name', id: 'name' },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' }
  ];

  let sourceList = useListData({
    initialItems: [
      {
        id: '1',
        type: 'file',
        name: 'Adobe Photoshop',
        date: '2/1/2020'
      },
      {
        id: '2',
        type: 'file',
        name: 'Adobe XD',
        date: '6/7/2020'
      },
      {
        id: '3',
        type: 'folder',
        name: 'Documents',
        date: '6/13/2020',
        childNodes: []
      },
      {
        id: '4',
        type: 'file',
        name: 'Adobe InDesign',
        date: '2/4/2020'
      },
      {
        id: '5',
        type: 'folder',
        name: 'Utilities',
        date: '12/3/2020',
        childNodes: []
      },
      {
        id: '6',
        type: 'file',
        name: 'Adobe AfterEffects',
        date: '3/12/2020'
      }
    ]
  });

  let targetList = useListData({
    initialItems: [
      {
        id: '7',
        type: 'folder',
        name: 'Pictures',
        date: '6/17/2020',
        childNodes: []
      },
      {
        id: '8',
        type: 'file',
        name: 'Adobe Fresco',
        date: '1/27/2020'
      },
      {
        id: '9',
        type: 'folder',
        name: 'Apps',
        date: '12/23/2020',
        childNodes: []
      }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableTableViewFolder
        list={sourceList}
        columns={columns}
      />
      <DroppableTableViewFolder
        list={targetList}
        columns={columns}
      />
    </Flex>
  );
}
```

```
function DraggableTableViewFolder(
  props:
    DndTableViewProps
) {
  let {
    list,
    columns,
    ...otherProps
  } = props;
  let {
    dragAndDropHooks
  } = useDragAndDrop({
    // Only allow move operations when dropping items from this table
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
    <TableView
      aria-label="Draggable TableView in drag onto folder example"
      selectionMode="multiple"
      width="size-5000"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader
        columns={columns}
      >
        {(column) => (
          <Column
            key={column
              .id}
            align={column
                .id ===
                'date'
              ? 'end'
              : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
        items={list
          .items}
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
  );
}

function DroppableTableViewFolder(
  props:
    DndTableViewProps
) {
  let {
    list,
    columns,
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
    <TableView
      aria-label="Droppable TableView in drop into folder example"
      width="size-5000"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader
        columns={columns}
      >
        {(column) => (
          <Column
            key={column
              .id}
            align={column
                .id ===
                'date'
              ? 'end'
              : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
        items={list
          .items}
      >
        {(item) => (
          <Row>
            {(columnKey) => (
              <Cell>
                {item[
                  columnKey
                ]}
                {columnKey ===
                    'type' &&
                  item[
                      columnKey
                    ] ===
                    'folder' &&
                  item
                      .childNodes
                      .length >
                    0 &&
                  ` (${item.childNodes?.length} dropped item(s)`}
              </Cell>
            )}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DragIntoTableFolder() {
  let columns = [
    {
      name: 'Name',
      id: 'name'
    },
    {
      name: 'Type',
      id: 'type'
    },
    {
      name:
        'Date Modified',
      id: 'date'
    }
  ];

  let sourceList =
    useListData({
      initialItems: [
        {
          id: '1',
          type: 'file',
          name:
            'Adobe Photoshop',
          date:
            '2/1/2020'
        },
        {
          id: '2',
          type: 'file',
          name:
            'Adobe XD',
          date:
            '6/7/2020'
        },
        {
          id: '3',
          type: 'folder',
          name:
            'Documents',
          date:
            '6/13/2020',
          childNodes: []
        },
        {
          id: '4',
          type: 'file',
          name:
            'Adobe InDesign',
          date:
            '2/4/2020'
        },
        {
          id: '5',
          type: 'folder',
          name:
            'Utilities',
          date:
            '12/3/2020',
          childNodes: []
        },
        {
          id: '6',
          type: 'file',
          name:
            'Adobe AfterEffects',
          date:
            '3/12/2020'
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
          date:
            '6/17/2020',
          childNodes: []
        },
        {
          id: '8',
          type: 'file',
          name:
            'Adobe Fresco',
          date:
            '1/27/2020'
        },
        {
          id: '9',
          type: 'folder',
          name: 'Apps',
          date:
            '12/23/2020',
          childNodes: []
        }
      ]
    });

  return (
    <Flex
      wrap
      gap="size-300"
    >
      <DraggableTableViewFolder
        list={sourceList}
        columns={columns}
      />
      <DroppableTableViewFolder
        list={targetList}
        columns={columns}
      />
    </Flex>
  );
}
```

```
<DragIntoTableFolder />
```

```
<DragIntoTableFolder />
```

```
<DragIntoTableFolder />
```

The example below demonstrates how to make a TableView draggable and droppable at the same time. The TableView below supports reordering its own rows via drag and drop.

Show code

```
function ReorderableTable() {
  let columns = [
    { name: 'Name', id: 'name' },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' }
  ];

  let list = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop', date: '6/3/2020' },
      { id: '2', type: 'file', name: 'Adobe XD', date: '2/2/2020' },
      {
        id: '3',
        type: 'folder',
        name: 'Documents',
        date: '5/1/2020',
        childNodes: []
      },
      { id: '4', type: 'file', name: 'Adobe InDesign', date: '5/9/2020' },
      {
        id: '5',
        type: 'folder',
        name: 'Utilities',
        date: '12/7/2020',
        childNodes: []
      },
      { id: '6', type: 'file', name: 'Adobe AfterEffects', date: '6/1/2020' }
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
    <TableView
      aria-label="Reorderable TableView"
      selectionMode="multiple"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
```

```
function ReorderableTable() {
  let columns = [
    { name: 'Name', id: 'name' },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' }
  ];

  let list = useListData({
    initialItems: [
      {
        id: '1',
        type: 'file',
        name: 'Adobe Photoshop',
        date: '6/3/2020'
      },
      {
        id: '2',
        type: 'file',
        name: 'Adobe XD',
        date: '2/2/2020'
      },
      {
        id: '3',
        type: 'folder',
        name: 'Documents',
        date: '5/1/2020',
        childNodes: []
      },
      {
        id: '4',
        type: 'file',
        name: 'Adobe InDesign',
        date: '5/9/2020'
      },
      {
        id: '5',
        type: 'folder',
        name: 'Utilities',
        date: '12/7/2020',
        childNodes: []
      },
      {
        id: '6',
        type: 'file',
        name: 'Adobe AfterEffects',
        date: '6/1/2020'
      }
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
    <TableView
      aria-label="Reorderable TableView"
      selectionMode="multiple"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
```

```
function ReorderableTable() {
  let columns = [
    {
      name: 'Name',
      id: 'name'
    },
    {
      name: 'Type',
      id: 'type'
    },
    {
      name:
        'Date Modified',
      id: 'date'
    }
  ];

  let list = useListData(
    {
      initialItems: [
        {
          id: '1',
          type: 'file',
          name:
            'Adobe Photoshop',
          date:
            '6/3/2020'
        },
        {
          id: '2',
          type: 'file',
          name:
            'Adobe XD',
          date:
            '2/2/2020'
        },
        {
          id: '3',
          type: 'folder',
          name:
            'Documents',
          date:
            '5/1/2020',
          childNodes: []
        },
        {
          id: '4',
          type: 'file',
          name:
            'Adobe InDesign',
          date:
            '5/9/2020'
        },
        {
          id: '5',
          type: 'folder',
          name:
            'Utilities',
          date:
            '12/7/2020',
          childNodes: []
        },
        {
          id: '6',
          type: 'file',
          name:
            'Adobe AfterEffects',
          date:
            '6/1/2020'
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
    <TableView
      aria-label="Reorderable TableView"
      selectionMode="multiple"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader
        columns={columns}
      >
        {(column) => (
          <Column
            key={column
              .id}
            align={column
                .id ===
                'date'
              ? 'end'
              : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
        items={list
          .items}
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
  );
}
```

```
<ReorderableTable />
```

```
<ReorderableTable />
```

```
<ReorderableTable />
```

The example below demonstrates how to create a pair of TableViews that supports dragging and dropping any items between each table, but disables the ability to drop into a folder. Each table is internally reorderable.

Show code

```
function BidirectionalDnDTableView(props: DndTableViewProps) {
  let { list, columns } = props;
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
    <TableView
      aria-label={props['aria-label']}
      selectionMode="multiple"
      width="size-5000"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DragBetweenTablesExample() {
  let columns = [
    { name: 'Name', id: 'name' },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' }
  ];

  let list1 = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop', date: '6/7/2020' },
      { id: '2', type: 'file', name: 'Adobe XD', date: '4/7/2021' },
      { id: '3', type: 'folder', name: 'Documents', date: '4/9/2021' },
      { id: '4', type: 'file', name: 'Adobe InDesign', date: '11/20/2010' },
      { id: '5', type: 'folder', name: 'Utilities', date: '9/18/2016' },
      { id: '6', type: 'file', name: 'Adobe AfterEffects', date: '1/18/2016' }
    ]
  });

  let list2 = useListData({
    initialItems: [
      { id: '7', type: 'folder', name: 'Pictures', date: '6/7/2020' },
      { id: '8', type: 'file', name: 'Adobe Fresco', date: '4/2/2020' },
      { id: '9', type: 'folder', name: 'Apps', date: '2/3/2020' },
      { id: '10', type: 'file', name: 'Adobe Illustrator', date: '6/5/2020' },
      { id: '11', type: 'file', name: 'Adobe Lightroom', date: '3/7/2020' },
      { id: '12', type: 'file', name: 'Adobe Dreamweaver', date: '3/9/2020' }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <BidirectionalDnDTableView
        list={list1}
        columns={columns}
        aria-label="First TableView in drag between table example"
      />
      <BidirectionalDnDTableView
        list={list2}
        columns={columns}
        aria-label="Second TableView in drag between table example"
      />
    </Flex>
  );
}
```

```
function BidirectionalDnDTableView(
  props: DndTableViewProps
) {
  let { list, columns } = props;
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
    <TableView
      aria-label={props['aria-label']}
      selectionMode="multiple"
      width="size-5000"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DragBetweenTablesExample() {
  let columns = [
    { name: 'Name', id: 'name' },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' }
  ];

  let list1 = useListData({
    initialItems: [
      {
        id: '1',
        type: 'file',
        name: 'Adobe Photoshop',
        date: '6/7/2020'
      },
      {
        id: '2',
        type: 'file',
        name: 'Adobe XD',
        date: '4/7/2021'
      },
      {
        id: '3',
        type: 'folder',
        name: 'Documents',
        date: '4/9/2021'
      },
      {
        id: '4',
        type: 'file',
        name: 'Adobe InDesign',
        date: '11/20/2010'
      },
      {
        id: '5',
        type: 'folder',
        name: 'Utilities',
        date: '9/18/2016'
      },
      {
        id: '6',
        type: 'file',
        name: 'Adobe AfterEffects',
        date: '1/18/2016'
      }
    ]
  });

  let list2 = useListData({
    initialItems: [
      {
        id: '7',
        type: 'folder',
        name: 'Pictures',
        date: '6/7/2020'
      },
      {
        id: '8',
        type: 'file',
        name: 'Adobe Fresco',
        date: '4/2/2020'
      },
      {
        id: '9',
        type: 'folder',
        name: 'Apps',
        date: '2/3/2020'
      },
      {
        id: '10',
        type: 'file',
        name: 'Adobe Illustrator',
        date: '6/5/2020'
      },
      {
        id: '11',
        type: 'file',
        name: 'Adobe Lightroom',
        date: '3/7/2020'
      },
      {
        id: '12',
        type: 'file',
        name: 'Adobe Dreamweaver',
        date: '3/9/2020'
      }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <BidirectionalDnDTableView
        list={list1}
        columns={columns}
        aria-label="First TableView in drag between table example"
      />
      <BidirectionalDnDTableView
        list={list2}
        columns={columns}
        aria-label="Second TableView in drag between table example"
      />
    </Flex>
  );
}
```

```
function BidirectionalDnDTableView(
  props:
    DndTableViewProps
) {
  let { list, columns } =
    props;
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
    <TableView
      aria-label={props[
        'aria-label'
      ]}
      selectionMode="multiple"
      width="size-5000"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader
        columns={columns}
      >
        {(column) => (
          <Column
            key={column
              .id}
            align={column
                .id ===
                'date'
              ? 'end'
              : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
        items={list
          .items}
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
  );
}

function DragBetweenTablesExample() {
  let columns = [
    {
      name: 'Name',
      id: 'name'
    },
    {
      name: 'Type',
      id: 'type'
    },
    {
      name:
        'Date Modified',
      id: 'date'
    }
  ];

  let list1 =
    useListData({
      initialItems: [
        {
          id: '1',
          type: 'file',
          name:
            'Adobe Photoshop',
          date:
            '6/7/2020'
        },
        {
          id: '2',
          type: 'file',
          name:
            'Adobe XD',
          date:
            '4/7/2021'
        },
        {
          id: '3',
          type: 'folder',
          name:
            'Documents',
          date:
            '4/9/2021'
        },
        {
          id: '4',
          type: 'file',
          name:
            'Adobe InDesign',
          date:
            '11/20/2010'
        },
        {
          id: '5',
          type: 'folder',
          name:
            'Utilities',
          date:
            '9/18/2016'
        },
        {
          id: '6',
          type: 'file',
          name:
            'Adobe AfterEffects',
          date:
            '1/18/2016'
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
            'Pictures',
          date:
            '6/7/2020'
        },
        {
          id: '8',
          type: 'file',
          name:
            'Adobe Fresco',
          date:
            '4/2/2020'
        },
        {
          id: '9',
          type: 'folder',
          name: 'Apps',
          date:
            '2/3/2020'
        },
        {
          id: '10',
          type: 'file',
          name:
            'Adobe Illustrator',
          date:
            '6/5/2020'
        },
        {
          id: '11',
          type: 'file',
          name:
            'Adobe Lightroom',
          date:
            '3/7/2020'
        },
        {
          id: '12',
          type: 'file',
          name:
            'Adobe Dreamweaver',
          date:
            '3/9/2020'
        }
      ]
    });

  return (
    <Flex
      wrap
      gap="size-300"
    >
      <BidirectionalDnDTableView
        list={list1}
        columns={columns}
        aria-label="First TableView in drag between table example"
      />
      <BidirectionalDnDTableView
        list={list2}
        columns={columns}
        aria-label="Second TableView in drag between table example"
      />
    </Flex>
  );
}
```

```
<DragBetweenTablesExample />
```

```
<DragBetweenTablesExample />
```

```
<DragBetweenTablesExample />
```

The example below demonstrates how to use `getDropOperation` to specify the default drop operation of the droppable table.

Show code

```
function DraggableTableViewDefaultCopy(props: DndTableViewProps) {
  let { list, columns } = props;
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
    <TableView
      aria-label="Draggable TableView in default copy operation example"
      selectionMode="multiple"
      width="size-5000"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DroppableTableViewDefaultCopy(props: DndTableViewProps) {
  let { list, columns } = props;
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
    <TableView
      aria-label="Droppable TableView in default copy operation example"
      width="size-5000"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DragIntoTablesDefaultCopy() {
  let columns = [
    { name: 'Name', id: 'name' },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' }
  ];

  let sourceList = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop', date: '6/7/2020' },
      { id: '2', type: 'file', name: 'Adobe XD', date: '4/7/2021' },
      { id: '3', type: 'file', name: 'Adobe InDesign', date: '11/20/2010' },
      { id: '4', type: 'file', name: 'Adobe AfterEffects', date: '1/18/2016' }
    ]
  });

  let targetList = useListData({
    initialItems: [
      { id: '5', type: 'file', name: 'Adobe Dreamweaver', date: '6/7/2020' },
      { id: '6', type: 'file', name: 'Adobe Fresco', date: '2/17/2020' },
      { id: '7', type: 'file', name: 'Adobe Connect', date: '1/23/2020' },
      { id: '8', type: 'file', name: 'Adobe Lightroom', date: '12/17/2020' }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableTableViewDefaultCopy list={sourceList} columns={columns} />
      <DroppableTableViewDefaultCopy list={targetList} columns={columns} />
    </Flex>
  );
}
```

```
function DraggableTableViewDefaultCopy(
  props: DndTableViewProps
) {
  let { list, columns } = props;
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
    <TableView
      aria-label="Draggable TableView in default copy operation example"
      selectionMode="multiple"
      width="size-5000"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DroppableTableViewDefaultCopy(
  props: DndTableViewProps
) {
  let { list, columns } = props;
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
    <TableView
      aria-label="Droppable TableView in default copy operation example"
      width="size-5000"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function DragIntoTablesDefaultCopy() {
  let columns = [
    { name: 'Name', id: 'name' },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' }
  ];

  let sourceList = useListData({
    initialItems: [
      {
        id: '1',
        type: 'file',
        name: 'Adobe Photoshop',
        date: '6/7/2020'
      },
      {
        id: '2',
        type: 'file',
        name: 'Adobe XD',
        date: '4/7/2021'
      },
      {
        id: '3',
        type: 'file',
        name: 'Adobe InDesign',
        date: '11/20/2010'
      },
      {
        id: '4',
        type: 'file',
        name: 'Adobe AfterEffects',
        date: '1/18/2016'
      }
    ]
  });

  let targetList = useListData({
    initialItems: [
      {
        id: '5',
        type: 'file',
        name: 'Adobe Dreamweaver',
        date: '6/7/2020'
      },
      {
        id: '6',
        type: 'file',
        name: 'Adobe Fresco',
        date: '2/17/2020'
      },
      {
        id: '7',
        type: 'file',
        name: 'Adobe Connect',
        date: '1/23/2020'
      },
      {
        id: '8',
        type: 'file',
        name: 'Adobe Lightroom',
        date: '12/17/2020'
      }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableTableViewDefaultCopy
        list={sourceList}
        columns={columns}
      />
      <DroppableTableViewDefaultCopy
        list={targetList}
        columns={columns}
      />
    </Flex>
  );
}
```

```
function DraggableTableViewDefaultCopy(
  props:
    DndTableViewProps
) {
  let { list, columns } =
    props;
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
    <TableView
      aria-label="Draggable TableView in default copy operation example"
      selectionMode="multiple"
      width="size-5000"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader
        columns={columns}
      >
        {(column) => (
          <Column
            key={column
              .id}
            align={column
                .id ===
                'date'
              ? 'end'
              : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
        items={list
          .items}
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
  );
}

function DroppableTableViewDefaultCopy(
  props:
    DndTableViewProps
) {
  let { list, columns } =
    props;
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
    <TableView
      aria-label="Droppable TableView in default copy operation example"
      width="size-5000"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader
        columns={columns}
      >
        {(column) => (
          <Column
            key={column
              .id}
            align={column
                .id ===
                'date'
              ? 'end'
              : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
        items={list
          .items}
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
  );
}

function DragIntoTablesDefaultCopy() {
  let columns = [
    {
      name: 'Name',
      id: 'name'
    },
    {
      name: 'Type',
      id: 'type'
    },
    {
      name:
        'Date Modified',
      id: 'date'
    }
  ];

  let sourceList =
    useListData({
      initialItems: [
        {
          id: '1',
          type: 'file',
          name:
            'Adobe Photoshop',
          date:
            '6/7/2020'
        },
        {
          id: '2',
          type: 'file',
          name:
            'Adobe XD',
          date:
            '4/7/2021'
        },
        {
          id: '3',
          type: 'file',
          name:
            'Adobe InDesign',
          date:
            '11/20/2010'
        },
        {
          id: '4',
          type: 'file',
          name:
            'Adobe AfterEffects',
          date:
            '1/18/2016'
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
            'Adobe Dreamweaver',
          date:
            '6/7/2020'
        },
        {
          id: '6',
          type: 'file',
          name:
            'Adobe Fresco',
          date:
            '2/17/2020'
        },
        {
          id: '7',
          type: 'file',
          name:
            'Adobe Connect',
          date:
            '1/23/2020'
        },
        {
          id: '8',
          type: 'file',
          name:
            'Adobe Lightroom',
          date:
            '12/17/2020'
        }
      ]
    });

  return (
    <Flex
      wrap
      gap="size-300"
    >
      <DraggableTableViewDefaultCopy
        list={sourceList}
        columns={columns}
      />
      <DroppableTableViewDefaultCopy
        list={targetList}
        columns={columns}
      />
    </Flex>
  );
}
```

```
<DragIntoTablesDefaultCopy />
```

```
<DragIntoTablesDefaultCopy />
```

```
<DragIntoTablesDefaultCopy />
```

By default, the drag preview for a dragged row will include the `textValue` provided to that row. If no `textValue` was provided, it will default to the contents of the columns that are row headers, as specified by the `isRowHeader` prop on columns. If no row header columns were specified, the first column will be used, as mentioned in the [Accessibility](#accessibility) section.

Use the `renderPreview` prop to provide a custom drag preview. `keys` and `draggedKey` are passed to this function, where `keys` includes all the keys of the items being dragged, and `draggedKey` is the key of the item the user initiated the drag from.

Show code

```
import {View} from '@adobe/react-spectrum';

function CustomDragPreviewExample() {
  let columns = [
    { name: 'Name', id: 'name' },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' }
  ];

  let list = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop', date: '6/3/2020' },
      { id: '2', type: 'file', name: 'Adobe XD', date: '2/2/2020' },
      {
        id: '3',
        type: 'folder',
        name: 'Documents',
        date: '5/1/2020',
        childNodes: []
      },
      { id: '4', type: 'file', name: 'Adobe InDesign', date: '5/9/2020' },
      {
        id: '5',
        type: 'folder',
        name: 'Utilities',
        date: '12/7/2020',
        childNodes: []
      },
      { id: '6', type: 'file', name: 'Adobe AfterEffects', date: '6/1/2020' }
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
    <TableView
      aria-label="Draggable TableView example with custom drag preview"
      selectionMode="multiple"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
```

```
import {View} from '@adobe/react-spectrum';

function CustomDragPreviewExample() {
  let columns = [
    { name: 'Name', id: 'name' },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' }
  ];

  let list = useListData({
    initialItems: [
      {
        id: '1',
        type: 'file',
        name: 'Adobe Photoshop',
        date: '6/3/2020'
      },
      {
        id: '2',
        type: 'file',
        name: 'Adobe XD',
        date: '2/2/2020'
      },
      {
        id: '3',
        type: 'folder',
        name: 'Documents',
        date: '5/1/2020',
        childNodes: []
      },
      {
        id: '4',
        type: 'file',
        name: 'Adobe InDesign',
        date: '5/9/2020'
      },
      {
        id: '5',
        type: 'folder',
        name: 'Utilities',
        date: '12/7/2020',
        childNodes: []
      },
      {
        id: '6',
        type: 'file',
        name: 'Adobe AfterEffects',
        date: '6/1/2020'
      }
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
    <TableView
      aria-label="Draggable TableView example with custom drag preview"
      selectionMode="multiple"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.id}
            align={column.id === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
```

```
import {View} from '@adobe/react-spectrum';

function CustomDragPreviewExample() {
  let columns = [
    {
      name: 'Name',
      id: 'name'
    },
    {
      name: 'Type',
      id: 'type'
    },
    {
      name:
        'Date Modified',
      id: 'date'
    }
  ];

  let list = useListData(
    {
      initialItems: [
        {
          id: '1',
          type: 'file',
          name:
            'Adobe Photoshop',
          date:
            '6/3/2020'
        },
        {
          id: '2',
          type: 'file',
          name:
            'Adobe XD',
          date:
            '2/2/2020'
        },
        {
          id: '3',
          type: 'folder',
          name:
            'Documents',
          date:
            '5/1/2020',
          childNodes: []
        },
        {
          id: '4',
          type: 'file',
          name:
            'Adobe InDesign',
          date:
            '5/9/2020'
        },
        {
          id: '5',
          type: 'folder',
          name:
            'Utilities',
          date:
            '12/7/2020',
          childNodes: []
        },
        {
          id: '6',
          type: 'file',
          name:
            'Adobe AfterEffects',
          date:
            '6/1/2020'
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
    <TableView
      aria-label="Draggable TableView example with custom drag preview"
      selectionMode="multiple"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader
        columns={columns}
      >
        {(column) => (
          <Column
            key={column
              .id}
            align={column
                .id ===
                'date'
              ? 'end'
              : 'start'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
        items={list
          .items}
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

`[ [ReactElement](https://reactjs.org/docs/rendering-elements.html)<[TableHeaderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:TableHeaderProps)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>>, [ReactElement](https://reactjs.org/docs/rendering-elements.html)<[TableBodyProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:TableBodyProps)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>> ]`

—

The elements that make up the table. Includes the TableHeader, TableBody, Columns, and Rows.

`density`

`'compact' | 'regular' | 'spacious'`

`'regular'`

Sets the amount of vertical padding within each cell.

`overflowMode`

`'wrap' | 'truncate'`

`'truncate'`

Sets the overflow behavior for the cell contents.

`isQuiet`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the TableView should be displayed with a quiet style.

`renderEmptyState`

`() => JSX.Element`

—

Sets what the TableView should render when there is no content to display.

`disabledBehavior`

`[DisabledBehavior](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:DisabledBehavior)`

`"selection"`

Whether `disabledKeys` applies to all interactions, or only selection.

`dragAndDropHooks`

`[DragAndDropHooks](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/dnd/src/useDragAndDrop.ts:DragAndDropHooks)<NoInfer<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>>['dragAndDropHooks']`

—

The drag and drop hooks returned by `useDragAndDrop` used to enable drag and drop behavior for the TableView.

`disabledKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

A list of row keys to disable.

`escapeKeyBehavior`

`'clearSelection' | 'none'`

`'clearSelection'`

Whether pressing the escape key should clear selection in the table or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to easily clear selection. Only use if the escape key is being handled externally or should not trigger selection clearing contextually.

`shouldSelectOnPressUp`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether selection should occur on press up instead of press down.

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

`sortDescriptor`

`[SortDescriptor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:SortDescriptor)`

—

The current sorted column and direction.

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

Handler that is called when a user performs an action on a row.

`onResizeStart`

`( (widths: [Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<[Key](https://reactjs.org/docs/lists-and-keys.html), [ColumnSize](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnSize)> )) => void`

Handler that is called when a user starts a column resize.

`onResize`

`( (widths: [Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<[Key](https://reactjs.org/docs/lists-and-keys.html), [ColumnSize](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnSize)> )) => void`

Handler that is called when a user performs a column resize. Can be used with the width property on columns to put the column widths into a controlled state.

`onResizeEnd`

`( (widths: [Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<[Key](https://reactjs.org/docs/lists-and-keys.html), [ColumnSize](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnSize)> )) => void`

Handler that is called after a user performs a column resize. Can be used to store the widths of columns for another future session.

`onSelectionChange`

`( (keys: [Selection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:Selection) )) => void`

Handler that is called when the selection changes.

`onSortChange`

`( (descriptor: [SortDescriptor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:SortDescriptor) )) => any`

Handler that is called when the sorted column or direction changes.

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

`[ColumnElement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnElement)<T> | [ColumnElement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnElement)<T>[] | [ColumnRenderer](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnRenderer)<T>`

A list of `Column(s)` or a function. If the latter, a list of columns must be provided using the `columns` prop.

`columns`

`T[]`

A list of table columns.

### Column props[#](#column-props)

Name

Type

Default

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | [ColumnElement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnElement)<T> | [ColumnElement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnElement)<T>[]`

—

Static child columns or content to render as the column header.

`align`

`'start' | 'center' | 'end'`

`'start'`

The alignment of the column's contents relative to its allotted width.

`showDivider`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the column should render a divider between it and the next column.

`hideHeader`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the column should hide its header text. A tooltip with the column's header text will be displayed when the column header is focused instead. Note that this prop is specifically for columns that contain ActionButtons in place of text content.

`title`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

Rendered contents of the column if `children` contains child columns.

`childColumns`

`T[]`

—

A list of child columns used when dynamically rendering nested child columns.

`allowsResizing`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the column allows resizing.

`allowsSorting`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the column allows sorting.

`isRowHeader`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether a column is a [row header](https://www.w3.org/TR/wai-aria-1.1/#rowheader) and should be announced by assistive technology during row navigation.

`textValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

A string representation of the column's contents, used for accessibility announcements.

Sizing

Name

Type

Description

`width`

`[ColumnSize](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnSize) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

The width of the column.

`minWidth`

`[ColumnStaticSize](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnStaticSize) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

The minimum width of the column.

`maxWidth`

`[ColumnStaticSize](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnStaticSize) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

The maximum width of the column.

`defaultWidth`

`[ColumnSize](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnSize) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

The default width of the column.

### TableBody props[#](#tablebody-props)

Name

Type

Description

`children`

`[RowElement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:RowElement)<T> | [RowElement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:RowElement)<T>[] | ( (item: T )) => [RowElement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:RowElement)<T>`

The contents of the table body. Supports static items or a function for dynamic rendering.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<T>`

A list of row objects in the table body used when dynamically rendering rows.

`loadingState`

`[LoadingState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:LoadingState)`

The current loading state of the table.

Events

Name

Type

Description

`onLoadMore`

`() => any`

Handler that is called when more items should be loaded, e.g. while scrolling near the bottom.

Name

Type

Description

`children`

`[CellElement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:CellElement) | [CellElement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:CellElement)[] | [CellRenderer](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:CellRenderer)`

Rendered contents of the row or row child items.

`textValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A string representation of the row's contents, used for features like typeahead.

`href`

`[Href](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dom.d.ts:Href)`

A URL to link to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href).

`hrefLang`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Hints at the human language of the linked URL. See[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang).

`target`

`HTMLAttributeAnchorTarget`

The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).

`rel`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).

`download`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Causes the browser to download the linked URL. A string may be provided to suggest a file name. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).

`ping`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A space-separated list of URLs to ping when the link is followed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping).

`referrerPolicy`

`HTMLAttributeReferrerPolicy`

How much of the referrer to send when following the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy).

`routerOptions`

`[RouterOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dom.d.ts:RouterOptions)`

Options for the configured client side router.

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The contents of the cell.

`textValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A string representation of the cell's contents, used for features like typeahead.

`colSpan`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

Indicates how many columns the data cell spans.

* * *

### Column alignment[#](#column-alignment)

[View guidelines](https://spectrum.adobe.com/page/table/#Usage-guidelines)

```
<TableView aria-label="Example table for column alignment">
  <TableHeader>
    <Column align="start">Name</Column>
    <Column align="center">Type</Column>
    <Column align="end">Size</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>2021406_Proposal</Cell>
      <Cell>PDF</Cell>
      <Cell>86 KB</Cell>
    </Row>
    <Row>
      <Cell>Budget Template</Cell>
      <Cell>XLS</Cell>
      <Cell>120 KB</Cell>
    </Row>
    <Row>
      <Cell>Onboarding</Cell>
      <Cell>PPT</Cell>
      <Cell>472 KB</Cell>
    </Row>
    <Row>
      <Cell>Welcome</Cell>
      <Cell>TXT</Cell>
      <Cell>24 KB</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView aria-label="Example table for column alignment">
  <TableHeader>
    <Column align="start">Name</Column>
    <Column align="center">Type</Column>
    <Column align="end">Size</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>2021406_Proposal</Cell>
      <Cell>PDF</Cell>
      <Cell>86 KB</Cell>
    </Row>
    <Row>
      <Cell>Budget Template</Cell>
      <Cell>XLS</Cell>
      <Cell>120 KB</Cell>
    </Row>
    <Row>
      <Cell>Onboarding</Cell>
      <Cell>PPT</Cell>
      <Cell>472 KB</Cell>
    </Row>
    <Row>
      <Cell>Welcome</Cell>
      <Cell>TXT</Cell>
      <Cell>24 KB</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView aria-label="Example table for column alignment">
  <TableHeader>
    <Column align="start">
      Name
    </Column>
    <Column align="center">
      Type
    </Column>
    <Column align="end">
      Size
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        2021406_Proposal
      </Cell>
      <Cell>PDF</Cell>
      <Cell>
        86 KB
      </Cell>
    </Row>
    <Row>
      <Cell>
        Budget Template
      </Cell>
      <Cell>XLS</Cell>
      <Cell>
        120 KB
      </Cell>
    </Row>
    <Row>
      <Cell>
        Onboarding
      </Cell>
      <Cell>PPT</Cell>
      <Cell>
        472 KB
      </Cell>
    </Row>
    <Row>
      <Cell>
        Welcome
      </Cell>
      <Cell>TXT</Cell>
      <Cell>
        24 KB
      </Cell>
    </Row>
  </TableBody>
</TableView>
```

### Column dividers[#](#column-dividers)

[View guidelines](https://spectrum.adobe.com/page/table/#Column-dividers)

```
<TableView aria-label="Example table for column dividers">
  <TableHeader>
    <Column align="start" showDivider>Name</Column>
    <Column showDivider>Type</Column>
    <Column align="end" showDivider>Size</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>2021406_Proposal</Cell>
      <Cell>PDF</Cell>
      <Cell>86 KB</Cell>
    </Row>
    <Row>
      <Cell>Budget Template</Cell>
      <Cell>XLS</Cell>
      <Cell>120 KB</Cell>
    </Row>
    <Row>
      <Cell>Onboarding</Cell>
      <Cell>PPT</Cell>
      <Cell>472 KB</Cell>
    </Row>
    <Row>
      <Cell>Welcome</Cell>
      <Cell>TXT</Cell>
      <Cell>24 KB</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView aria-label="Example table for column dividers">
  <TableHeader>
    <Column align="start" showDivider>Name</Column>
    <Column showDivider>Type</Column>
    <Column align="end" showDivider>Size</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>2021406_Proposal</Cell>
      <Cell>PDF</Cell>
      <Cell>86 KB</Cell>
    </Row>
    <Row>
      <Cell>Budget Template</Cell>
      <Cell>XLS</Cell>
      <Cell>120 KB</Cell>
    </Row>
    <Row>
      <Cell>Onboarding</Cell>
      <Cell>PPT</Cell>
      <Cell>472 KB</Cell>
    </Row>
    <Row>
      <Cell>Welcome</Cell>
      <Cell>TXT</Cell>
      <Cell>24 KB</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView aria-label="Example table for column dividers">
  <TableHeader>
    <Column
      align="start"
      showDivider
    >
      Name
    </Column>
    <Column
      showDivider
    >
      Type
    </Column>
    <Column
      align="end"
      showDivider
    >
      Size
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        2021406_Proposal
      </Cell>
      <Cell>PDF</Cell>
      <Cell>
        86 KB
      </Cell>
    </Row>
    <Row>
      <Cell>
        Budget Template
      </Cell>
      <Cell>XLS</Cell>
      <Cell>
        120 KB
      </Cell>
    </Row>
    <Row>
      <Cell>
        Onboarding
      </Cell>
      <Cell>PPT</Cell>
      <Cell>
        472 KB
      </Cell>
    </Row>
    <Row>
      <Cell>
        Welcome
      </Cell>
      <Cell>TXT</Cell>
      <Cell>
        24 KB
      </Cell>
    </Row>
  </TableBody>
</TableView>
```

Individual column headers can be hidden by providing the `hideHeader` prop to the Column. A tooltip is rendered when the column header is focused to compensate for the lack of a visual title. Note that the `hideHeader` prop is specifically intended for columns that contain ActionButtons instead of text content.

```
function TableExample(props) {
  let columns = [
    { name: 'First Name', key: 'firstName' },
    { name: 'Last Name', key: 'lastName' },
    { name: 'Add Info', key: 'addInfo' },
    { name: 'Age', key: 'age' }
  ];

  let rows = [
    { id: '1', firstName: 'John', lastName: 'Doe', age: '45' },
    { id: '2', firstName: 'Jane', lastName: 'Doe', age: '37' },
    { id: '3', firstName: 'Joe', lastName: 'Schmoe', age: '67' },
    { id: '4', firstName: 'Joe', lastName: 'Bloggs', age: '12' },
    {
      id: '5',
      firstName: 'Taylor',
      lastName: 'Rodriguez Lloyd-Atkinson',
      age: '83'
    }
  ];

  return (
    <TableView
      aria-label="Example table with hidden headers"
      maxWidth="size-6000"
      {...props}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            hideHeader={column.key === 'addInfo'}
            align={column.key === 'age' ? 'end' : 'start'}
            showDivider={column.key === 'addInfo'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <Row key={item.id}>
            {(key) =>
              key === 'addInfo'
                ? (
                  <Cell>
                    <ActionButton aria-label="Add Info" isQuiet>
                      <Add />
                    </ActionButton>
                  </Cell>
                )
                : <Cell>{item[key]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
```

```
function TableExample(props) {
  let columns = [
    { name: 'First Name', key: 'firstName' },
    { name: 'Last Name', key: 'lastName' },
    { name: 'Add Info', key: 'addInfo' },
    { name: 'Age', key: 'age' }
  ];

  let rows = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      age: '45'
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Doe',
      age: '37'
    },
    {
      id: '3',
      firstName: 'Joe',
      lastName: 'Schmoe',
      age: '67'
    },
    {
      id: '4',
      firstName: 'Joe',
      lastName: 'Bloggs',
      age: '12'
    },
    {
      id: '5',
      firstName: 'Taylor',
      lastName: 'Rodriguez Lloyd-Atkinson',
      age: '83'
    }
  ];

  return (
    <TableView
      aria-label="Example table with hidden headers"
      maxWidth="size-6000"
      {...props}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            hideHeader={column.key === 'addInfo'}
            align={column.key === 'age' ? 'end' : 'start'}
            showDivider={column.key === 'addInfo'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <Row key={item.id}>
            {(key) =>
              key === 'addInfo'
                ? (
                  <Cell>
                    <ActionButton
                      aria-label="Add Info"
                      isQuiet
                    >
                      <Add />
                    </ActionButton>
                  </Cell>
                )
                : <Cell>{item[key]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
```

```
function TableExample(
  props
) {
  let columns = [
    {
      name: 'First Name',
      key: 'firstName'
    },
    {
      name: 'Last Name',
      key: 'lastName'
    },
    {
      name: 'Add Info',
      key: 'addInfo'
    },
    {
      name: 'Age',
      key: 'age'
    }
  ];

  let rows = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      age: '45'
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Doe',
      age: '37'
    },
    {
      id: '3',
      firstName: 'Joe',
      lastName: 'Schmoe',
      age: '67'
    },
    {
      id: '4',
      firstName: 'Joe',
      lastName: 'Bloggs',
      age: '12'
    },
    {
      id: '5',
      firstName:
        'Taylor',
      lastName:
        'Rodriguez Lloyd-Atkinson',
      age: '83'
    }
  ];

  return (
    <TableView
      aria-label="Example table with hidden headers"
      maxWidth="size-6000"
      {...props}
    >
      <TableHeader
        columns={columns}
      >
        {(column) => (
          <Column
            hideHeader={column
              .key ===
              'addInfo'}
            align={column
                .key ===
                'age'
              ? 'end'
              : 'start'}
            showDivider={column
              .key ===
              'addInfo'}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
        items={rows}
      >
        {(item) => (
          <Row
            key={item.id}
          >
            {(key) =>
              key ===
                  'addInfo'
                ? (
                  <Cell>
                    <ActionButton
                      aria-label="Add Info"
                      isQuiet
                    >
                      <Add />
                    </ActionButton>
                  </Cell>
                )
                : (
                  <Cell>
                    {item[
                      key
                    ]}
                  </Cell>
                )}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
```

[View guidelines](https://spectrum.adobe.com/page/table/#Standard-or-quiet)

```
// Using same setup as hide header example
<TableExample isQuiet />
```

```
// Using same setup as hide header example
<TableExample isQuiet />
```

```
// Using same setup as hide header example
<TableExample
  isQuiet
/>
```

The amount of vertical padding that each row contains can be modified by providing the `density` prop.

```
// Using same setup as hide header example
<Flex direction="column" gap="size-300">
  <TableExample density="compact" />
  <TableExample density="spacious" />
</Flex>
```

```
// Using same setup as hide header example
<Flex direction="column" gap="size-300">
  <TableExample density="compact" />
  <TableExample density="spacious" />
</Flex>
```

```
// Using same setup as hide header example
<Flex
  direction="column"
  gap="size-300"
>
  <TableExample density="compact" />
  <TableExample density="spacious" />
</Flex>
```

By default, text content that overflows its table cell will be truncated. You can have it wrap instead by passing `overflowMode="wrap"` to the TableView.

```
// Using same setup as hide header example
<TableExample overflowMode="wrap" />
```

```
// Using same setup as hide header example
<TableExample overflowMode="wrap" />
```

```
// Using same setup as hide header example
<TableExample overflowMode="wrap" />
```

Use the `renderEmptyState` prop to customize what the TableView will display if there are no rows provided.

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

<TableView
  aria-label="Example table for empty state"
  height="size-3000"
  renderEmptyState={renderEmptyState}
>
  <TableHeader>
    <Column>Name</Column>
    <Column>Type</Column>
    <Column>Size</Column>
  </TableHeader>
  <TableBody>
    {[]}
  </TableBody>
</TableView>
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

<TableView
  aria-label="Example table for empty state"
  height="size-3000"
  renderEmptyState={renderEmptyState}
>
  <TableHeader>
    <Column>Name</Column>
    <Column>Type</Column>
    <Column>Size</Column>
  </TableHeader>
  <TableBody>
    {[]}
  </TableBody>
</TableView>
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

<TableView
  aria-label="Example table for empty state"
  height="size-3000"
  renderEmptyState={renderEmptyState}
>
  <TableHeader>
    <Column>
      Name
    </Column>
    <Column>
      Type
    </Column>
    <Column>
      Size
    </Column>
  </TableHeader>
  <TableBody>
    {[]}
  </TableBody>
</TableView>
```

### Nested columns[#](#nested-columns)

TableView supports nesting columns, allowing you to create column groups, or "tiered" column headers. Data for the leaf columns appears in each row of the table body.

```
<TableView aria-label="Example table for nested columns">
  <TableHeader>
    <Column title="Name">
      <Column isRowHeader>First Name</Column>
      <Column isRowHeader>Last Name</Column>
    </Column>
    <Column title="Information">
      <Column>Age</Column>
      <Column>Birthday</Column>
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>Sam</Cell>
      <Cell>Smith</Cell>
      <Cell>36</Cell>
      <Cell>May 3</Cell>
    </Row>
    <Row>
      <Cell>Julia</Cell>
      <Cell>Jones</Cell>
      <Cell>24</Cell>
      <Cell>February 10</Cell>
    </Row>
    <Row>
      <Cell>Peter</Cell>
      <Cell>Parker</Cell>
      <Cell>28</Cell>
      <Cell>September 7</Cell>
    </Row>
    <Row>
      <Cell>Bruce</Cell>
      <Cell>Wayne</Cell>
      <Cell>32</Cell>
      <Cell>December 18</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView aria-label="Example table for nested columns">
  <TableHeader>
    <Column title="Name">
      <Column isRowHeader>First Name</Column>
      <Column isRowHeader>Last Name</Column>
    </Column>
    <Column title="Information">
      <Column>Age</Column>
      <Column>Birthday</Column>
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>Sam</Cell>
      <Cell>Smith</Cell>
      <Cell>36</Cell>
      <Cell>May 3</Cell>
    </Row>
    <Row>
      <Cell>Julia</Cell>
      <Cell>Jones</Cell>
      <Cell>24</Cell>
      <Cell>February 10</Cell>
    </Row>
    <Row>
      <Cell>Peter</Cell>
      <Cell>Parker</Cell>
      <Cell>28</Cell>
      <Cell>September 7</Cell>
    </Row>
    <Row>
      <Cell>Bruce</Cell>
      <Cell>Wayne</Cell>
      <Cell>32</Cell>
      <Cell>December 18</Cell>
    </Row>
  </TableBody>
</TableView>
```

```
<TableView aria-label="Example table for nested columns">
  <TableHeader>
    <Column title="Name">
      <Column
        isRowHeader
      >
        First Name
      </Column>
      <Column
        isRowHeader
      >
        Last Name
      </Column>
    </Column>
    <Column title="Information">
      <Column>
        Age
      </Column>
      <Column>
        Birthday
      </Column>
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>Sam</Cell>
      <Cell>
        Smith
      </Cell>
      <Cell>36</Cell>
      <Cell>
        May 3
      </Cell>
    </Row>
    <Row>
      <Cell>
        Julia
      </Cell>
      <Cell>
        Jones
      </Cell>
      <Cell>24</Cell>
      <Cell>
        February 10
      </Cell>
    </Row>
    <Row>
      <Cell>
        Peter
      </Cell>
      <Cell>
        Parker
      </Cell>
      <Cell>28</Cell>
      <Cell>
        September 7
      </Cell>
    </Row>
    <Row>
      <Cell>
        Bruce
      </Cell>
      <Cell>
        Wayne
      </Cell>
      <Cell>32</Cell>
      <Cell>
        December 18
      </Cell>
    </Row>
  </TableBody>
</TableView>
```

Nested columns can also be defined dynamically using the function syntax and the `childColumns` prop. The following example is the same as the example above, but defined dynamically.

```
interface ColumnDefinition {
  name: string,
  key: string,
  children?: ColumnDefinition[],
  isRowHeader?: boolean
}

let columns: ColumnDefinition[] = [
  {name: 'Name', key: 'name', children: [
    {name: 'First Name', key: 'first', isRowHeader: true},
    {name: 'Last Name', key: 'last', isRowHeader: true}
  ]},
  {name: 'Information', key: 'info', children: [
    {name: 'Age', key: 'age'},
    {name: 'Birthday', key: 'birthday'}
  ]}
];

let rows = [
  {id: 1, first: 'Sam', last: 'Smith', age: 36, birthday: 'May 3'},
  {id: 2, first: 'Julia', last: 'Jones', age: 24, birthday: 'February 10'},
  {id: 3, first: 'Peter', last: 'Parker', age: 28, birthday: 'September 7'},
  {id: 4, first: 'Bruce', last: 'Wayne', age: 32, birthday: 'December 18'}
];

<TableView aria-label="Example table for nested columns">
  <TableHeader columns={columns}>
    {column => (
      <Column isRowHeader={column.isRowHeader} childColumns={column.children}>
        {column.name}
      </Column>
    )}
  </TableHeader>
  <TableBody items={rows}>
    {item => (
      <Row>
        {columnKey => <Cell>{item[columnKey]}</Cell>}
      </Row>
    )}
  </TableBody>
</TableView>
```

```
interface ColumnDefinition {
  name: string;
  key: string;
  children?: ColumnDefinition[];
  isRowHeader?: boolean;
}

let columns: ColumnDefinition[] = [
  {
    name: 'Name',
    key: 'name',
    children: [
      {
        name: 'First Name',
        key: 'first',
        isRowHeader: true
      },
      { name: 'Last Name', key: 'last', isRowHeader: true }
    ]
  },
  {
    name: 'Information',
    key: 'info',
    children: [
      { name: 'Age', key: 'age' },
      { name: 'Birthday', key: 'birthday' }
    ]
  }
];

let rows = [
  {
    id: 1,
    first: 'Sam',
    last: 'Smith',
    age: 36,
    birthday: 'May 3'
  },
  {
    id: 2,
    first: 'Julia',
    last: 'Jones',
    age: 24,
    birthday: 'February 10'
  },
  {
    id: 3,
    first: 'Peter',
    last: 'Parker',
    age: 28,
    birthday: 'September 7'
  },
  {
    id: 4,
    first: 'Bruce',
    last: 'Wayne',
    age: 32,
    birthday: 'December 18'
  }
];

<TableView aria-label="Example table for nested columns">
  <TableHeader columns={columns}>
    {(column) => (
      <Column
        isRowHeader={column.isRowHeader}
        childColumns={column.children}
      >
        {column.name}
      </Column>
    )}
  </TableHeader>
  <TableBody items={rows}>
    {(item) => (
      <Row>
        {(columnKey) => <Cell>{item[columnKey]}</Cell>}
      </Row>
    )}
  </TableBody>
</TableView>
```

```
interface ColumnDefinition {
  name: string;
  key: string;
  children?:
    ColumnDefinition[];
  isRowHeader?: boolean;
}

let columns:
  ColumnDefinition[] = [
    {
      name: 'Name',
      key: 'name',
      children: [
        {
          name:
            'First Name',
          key: 'first',
          isRowHeader:
            true
        },
        {
          name:
            'Last Name',
          key: 'last',
          isRowHeader:
            true
        }
      ]
    },
    {
      name:
        'Information',
      key: 'info',
      children: [
        {
          name: 'Age',
          key: 'age'
        },
        {
          name:
            'Birthday',
          key: 'birthday'
        }
      ]
    }
  ];

let rows = [
  {
    id: 1,
    first: 'Sam',
    last: 'Smith',
    age: 36,
    birthday: 'May 3'
  },
  {
    id: 2,
    first: 'Julia',
    last: 'Jones',
    age: 24,
    birthday:
      'February 10'
  },
  {
    id: 3,
    first: 'Peter',
    last: 'Parker',
    age: 28,
    birthday:
      'September 7'
  },
  {
    id: 4,
    first: 'Bruce',
    last: 'Wayne',
    age: 32,
    birthday:
      'December 18'
  }
];

<TableView aria-label="Example table for nested columns">
  <TableHeader
    columns={columns}
  >
    {(column) => (
      <Column
        isRowHeader={column
          .isRowHeader}
        childColumns={column
          .children}
      >
        {column.name}
      </Column>
    )}
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
```

* * *

The TableView features automatic virtualization and may need specific mocks in a test environment to enable said virtualization properly. It also features long press interactions on its rows depending on the row actions provided and if user is interacting with the list on a touch device. Please see the following sections in the testing docs for more information on how to handle these behaviors in your test suite.

[Timers](https://react-spectrum.adobe.com/react-spectrum/testing.html#timers)

[Desktop vs Mobile](https://react-spectrum.adobe.com/react-spectrum/testing.html#desktop-vs-mobile)

[Virtualized Components](https://react-spectrum.adobe.com/react-spectrum/testing.html#virtualized-components)

[Long press](https://react-spectrum.adobe.com/react-spectrum/testing.html#simulating-user-long-press)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/table/test/Table.test.js) if you find that the above isn't sufficient when resolving issues in your own test cases.

`@react-spectrum/test-utils` offers common table interaction utilities which you may find helpful when writing tests. See [here](https://react-spectrum.adobe.com/react-aria/testing.html#react-aria-test-utils) for more information on how to setup these utilities in your tests. Below is the full definition of the table tester and a sample of how you could use it in your test suite.

```
// TableView.test.ts
import {render, within} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({
  interactionType: 'mouse',
  advanceTimer: jest.advanceTimersByTime
});
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/TableView.html#testing

it('TableView can toggle row selection', async function () {
  // Render your test component/app and initialize the table tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <TableView data-testid="test-table" selectionMode="multiple">
        ...
      </TableView>
    </Provider>
  );
  let tableTester = testUtilUser.createTester('Table', {
    root: getByTestId('test-table')
  });
  expect(tableTester.selectedRows).toHaveLength(0);

  await tableTester.toggleSelectAll();
  expect(tableTester.selectedRows).toHaveLength(10);

  await tableTester.toggleRowSelection({ row: 2 });
  expect(tableTester.selectedRows).toHaveLength(9);
  let checkbox = within(tableTester.rows[2]).getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

  await tableTester.toggleSelectAll();
  expect(tableTester.selectedRows).toHaveLength(10);
  expect(checkbox).toBeChecked();

  await tableTester.toggleSelectAll();
  expect(tableTester.selectedRows).toHaveLength(0);
});
```

```
// TableView.test.ts
import {render, within} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({
  interactionType: 'mouse',
  advanceTimer: jest.advanceTimersByTime
});
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/TableView.html#testing

it('TableView can toggle row selection', async function () {
  // Render your test component/app and initialize the table tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <TableView
        data-testid="test-table"
        selectionMode="multiple"
      >
        ...
      </TableView>
    </Provider>
  );
  let tableTester = testUtilUser.createTester('Table', {
    root: getByTestId('test-table')
  });
  expect(tableTester.selectedRows).toHaveLength(0);

  await tableTester.toggleSelectAll();
  expect(tableTester.selectedRows).toHaveLength(10);

  await tableTester.toggleRowSelection({ row: 2 });
  expect(tableTester.selectedRows).toHaveLength(9);
  let checkbox = within(tableTester.rows[2]).getByRole(
    'checkbox'
  );
  expect(checkbox).not.toBeChecked();

  await tableTester.toggleSelectAll();
  expect(tableTester.selectedRows).toHaveLength(10);
  expect(checkbox).toBeChecked();

  await tableTester.toggleSelectAll();
  expect(tableTester.selectedRows).toHaveLength(0);
});
```

```
// TableView.test.ts
import {
  render,
  within
} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser =
  new User({
    interactionType:
      'mouse',
    advanceTimer:
      jest
        .advanceTimersByTime
  });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/TableView.html#testing

it('TableView can toggle row selection', async function () {
  // Render your test component/app and initialize the table tester
  let { getByTestId } =
    render(
      <Provider
        theme={defaultTheme}
      >
        <TableView
          data-testid="test-table"
          selectionMode="multiple"
        >
          ...
        </TableView>
      </Provider>
    );
  let tableTester =
    testUtilUser
      .createTester(
        'Table',
        {
          root:
            getByTestId(
              'test-table'
            )
        }
      );
  expect(
    tableTester
      .selectedRows
  ).toHaveLength(0);

  await tableTester
    .toggleSelectAll();
  expect(
    tableTester
      .selectedRows
  ).toHaveLength(10);

  await tableTester
    .toggleRowSelection({
      row: 2
    });
  expect(
    tableTester
      .selectedRows
  ).toHaveLength(9);
  let checkbox = within(
    tableTester.rows[2]
  ).getByRole(
    'checkbox'
  );
  expect(checkbox).not
    .toBeChecked();

  await tableTester
    .toggleSelectAll();
  expect(
    tableTester
      .selectedRows
  ).toHaveLength(10);
  expect(checkbox)
    .toBeChecked();

  await tableTester
    .toggleSelectAll();
  expect(
    tableTester
      .selectedRows
  ).toHaveLength(0);
});
```

### Properties

Name

Type

Description

`table`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the table.

`rowGroups`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the row groups within the table.

`columns`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the columns within the table.

`rows`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the rows within the table if any.

`selectedRows`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the currently selected rows within the table if any.

`rowHeaders`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the row headers within the table if any.

### Methods

Method

Description

`constructor( (opts: [TableTesterOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:TableTesterOpts) )): void`

`setInteractionType( (type: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType'] )): void`

Set the interaction type used by the table tester.

`toggleRowSelection( (opts: [TableToggleRowOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/table.ts:TableToggleRowOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Toggles the selection for the specified table row. Defaults to using the interaction type set on the table tester.

`toggleSort( (opts: [TableToggleSortOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/table.ts:TableToggleSortOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Toggles the sort order for the specified table column. Defaults to using the interaction type set on the table tester.

`triggerColumnHeaderAction( (opts: [TableColumnHeaderActionOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/table.ts:TableColumnHeaderActionOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Triggers an action for the specified table column menu. Defaults to using the interaction type set on the table tester.

`triggerRowAction( (opts: [TableRowActionOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/table.ts:TableRowActionOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Triggers the action for the specified table row. Defaults to using the interaction type set on the table tester.

`toggleSelectAll( (opts: {  interactionType?: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType']  } )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Toggle selection for all rows in the table. Defaults to using the interaction type set on the table tester.

`findRow( (opts: {  rowIndexOrText: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns a row matching the specified index or text content.

`findCell( (opts: {  text: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns a cell matching the specified text content.

`cells( (opts: {  element?: [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the cells within the table if any. Can be filtered against a specific row if provided via `element`.
