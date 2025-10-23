---
source: https://react-spectrum.adobe.com/react-spectrum/ListBox.html
date: Thu, 16 Oct 2025 01:07:20 GMT
---

A list of options that can allow selection of one or more.

* * *

```
<ListBox width="size-2400" aria-label="Alignment">
  <Item>Left</Item>
  <Item>Middle</Item>
  <Item>Right</Item>
</ListBox>
```

```
<ListBox width="size-2400" aria-label="Alignment">
  <Item>Left</Item>
  <Item>Middle</Item>
  <Item>Right</Item>
</ListBox>
```

```
<ListBox
  width="size-2400"
  aria-label="Alignment"
>
  <Item>Left</Item>
  <Item>Middle</Item>
  <Item>Right</Item>
</ListBox>
```

## Content[#](#content)

* * *

A ListBox displays a list of options, and allows users to select one or more of them. It follows the [Collection Components](https://react-spectrum.adobe.com/react-stately/collections.html) API, accepting both static and dynamic collections. Similar to [Picker](https://react-spectrum.adobe.com/react-spectrum/Picker.html), ListBox accepts `<Item>` elements as children, each with a `key` prop. Basic usage of the ListBox, seen in the example above, shows multiple options populated with a string. Static collections, as in this example, can be used when the full list of options is known ahead of time.

Dynamic collections, as shown below, can be used when the options come from an external data source such as an API call, or update over time. Providing the data in this way allows for ListBox to automatically cache the rendering of each item, which dramatically improves performance.

As seen below, an iterable list of options is passed to the Listbox using the `items` prop. Each item accepts a key prop, which is passed to the `onSelectionChange` handler, when present, to identify the selected item. Alternatively, if the item objects contain an `id` property, as shown in the example below, then this is used automatically and a `key` prop is not required. See the [Events](#events) section for more detail on selection. By default, selection is not enabled, however this can be changed using the `selectionMode` prop. See [Selection](#selection) for more information.

```
function Example() {
  let options = [
    { id: 1, name: 'Aardvark' },
    { id: 2, name: 'Cat' },
    { id: 3, name: 'Dog' },
    { id: 4, name: 'Kangaroo' },
    { id: 5, name: 'Koala' },
    { id: 6, name: 'Penguin' },
    { id: 7, name: 'Snake' },
    { id: 8, name: 'Turtle' },
    { id: 9, name: 'Wombat' }
  ];
  let [animalId, setAnimalId] = React.useState(null);

  return (
    <>
      <ListBox
        width="size-2400"
        aria-label="Animals"
        items={options}
        selectionMode="single"
        onSelectionChange={setAnimalId}
      >
        {(item) => <Item>{item.name}</Item>}
      </ListBox>
      <p>Animal id: {animalId}</p>
    </>
  );
}
```

```
function Example() {
  let options = [
    { id: 1, name: 'Aardvark' },
    { id: 2, name: 'Cat' },
    { id: 3, name: 'Dog' },
    { id: 4, name: 'Kangaroo' },
    { id: 5, name: 'Koala' },
    { id: 6, name: 'Penguin' },
    { id: 7, name: 'Snake' },
    { id: 8, name: 'Turtle' },
    { id: 9, name: 'Wombat' }
  ];
  let [animalId, setAnimalId] = React.useState(null);

  return (
    <>
      <ListBox
        width="size-2400"
        aria-label="Animals"
        items={options}
        selectionMode="single"
        onSelectionChange={setAnimalId}
      >
        {(item) => <Item>{item.name}</Item>}
      </ListBox>
      <p>Animal id: {animalId}</p>
    </>
  );
}
```

```
function Example() {
  let options = [
    {
      id: 1,
      name: 'Aardvark'
    },
    {
      id: 2,
      name: 'Cat'
    },
    {
      id: 3,
      name: 'Dog'
    },
    {
      id: 4,
      name: 'Kangaroo'
    },
    {
      id: 5,
      name: 'Koala'
    },
    {
      id: 6,
      name: 'Penguin'
    },
    {
      id: 7,
      name: 'Snake'
    },
    {
      id: 8,
      name: 'Turtle'
    },
    {
      id: 9,
      name: 'Wombat'
    }
  ];
  let [
    animalId,
    setAnimalId
  ] = React.useState(
    null
  );

  return (
    <>
      <ListBox
        width="size-2400"
        aria-label="Animals"
        items={options}
        selectionMode="single"
        onSelectionChange={setAnimalId}
      >
        {(item) => (
          <Item>
            {item.name}
          </Item>
        )}
      </ListBox>
      <p>
        Animal id:{' '}
        {animalId}
      </p>
    </>
  );
}
```

ListBoxes should be labeled using the `aria-label` prop. If the ListBox is labeled by a separate element, an `aria-labelledby` prop must be provided using the id of the labeling element instead.

To internationalize a ListBox, a localized string should be passed to the `children` of each `Item`. For languages that are read right to left (e.g. Hebrew and Arabic), the layout of the ListBox is flipped.

* * *

ListBox supports no selection, single and multiple selection modes using the `selectionMode` prop. Setting selected options can be done by using the `defaultSelectedKeys` or `selectedKeys` prop. The selected key corresponds to the `key` of an item. See [Events](#events "Events") for more details on selection events. Additionally, see the `react-stately` [Selection docs](https://react-spectrum.adobe.com/react-stately/selection.html#selected-key-data-type) for caveats regarding selection prop typing.

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let options = [
    { name: 'Koala' },
    { name: 'Kangaroo' },
    { name: 'Platypus' },
    { name: 'Bald Eagle' },
    { name: 'Bison' },
    { name: 'Skunk' }
  ];
  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(['Bison'])
  );

  return (
    <Flex direction="row" gap="size-350">
      <ListBox
        selectionMode="multiple"
        aria-label="Pick an animal"
        items={options}
        defaultSelectedKeys={['Bison', 'Koala']}
        width="size-2400"
      >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ListBox>

      <ListBox
        selectionMode="multiple"
        aria-label="Pick an animal"
        items={options}
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        width="size-2400"
      >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ListBox>
    </Flex>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let options = [
    { name: 'Koala' },
    { name: 'Kangaroo' },
    { name: 'Platypus' },
    { name: 'Bald Eagle' },
    { name: 'Bison' },
    { name: 'Skunk' }
  ];
  let [selectedKeys, setSelectedKeys] = React.useState<
    Selection
  >(new Set(['Bison']));

  return (
    <Flex direction="row" gap="size-350">
      <ListBox
        selectionMode="multiple"
        aria-label="Pick an animal"
        items={options}
        defaultSelectedKeys={['Bison', 'Koala']}
        width="size-2400"
      >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ListBox>

      <ListBox
        selectionMode="multiple"
        aria-label="Pick an animal"
        items={options}
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        width="size-2400"
      >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ListBox>
    </Flex>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let options = [
    { name: 'Koala' },
    { name: 'Kangaroo' },
    { name: 'Platypus' },
    {
      name: 'Bald Eagle'
    },
    { name: 'Bison' },
    { name: 'Skunk' }
  ];
  let [
    selectedKeys,
    setSelectedKeys
  ] = React.useState<
    Selection
  >(new Set(['Bison']));

  return (
    <Flex
      direction="row"
      gap="size-350"
    >
      <ListBox
        selectionMode="multiple"
        aria-label="Pick an animal"
        items={options}
        defaultSelectedKeys={[
          'Bison',
          'Koala'
        ]}
        width="size-2400"
      >
        {(item) => (
          <Item
            key={item
              .name}
          >
            {item.name}
          </Item>
        )}
      </ListBox>

      <ListBox
        selectionMode="multiple"
        aria-label="Pick an animal"
        items={options}
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        width="size-2400"
      >
        {(item) => (
          <Item
            key={item
              .name}
          >
            {item.name}
          </Item>
        )}
      </ListBox>
    </Flex>
  );
}
```

* * *

By default, interacting with an item in a ListBox triggers `onSelectionChange`. Alternatively, items may be links to another page or website. This can be achieved by passing the `href` prop to the `<Item>` component. Link items in a ListBox are not selectable.

```
<ListBox aria-label="Links">
  <Item href="https://adobe.com/" target="_blank">Adobe</Item>
  <Item href="https://apple.com/" target="_blank">Apple</Item>
  <Item href="https://google.com/" target="_blank">Google</Item>
  <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
</ListBox>
```

```
<ListBox aria-label="Links">
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
</ListBox>
```

```
<ListBox aria-label="Links">
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
</ListBox>
```

The `<Item>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Spectrum components that support links, this works via the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-spectrum/routing.html) to learn how to set this up.

* * *

ListBox supports sections in order to group options. Sections can be used by wrapping groups of Items in a `Section` component. Each `Section` takes a `title` and `key` prop.

```
<ListBox
  width="size-2400"
  aria-label="Pick your favorite"
  selectionMode="single"
>
  <Section title="Animals">
    <Item key="Aardvark">Aardvark</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Snake">Snake</Item>
  </Section>
  <Section title="People">
    <Item key="Danni">Danni</Item>
    <Item key="Devon">Devon</Item>
    <Item key="Ross">Ross</Item>
  </Section>
</ListBox>
```

```
<ListBox
  width="size-2400"
  aria-label="Pick your favorite"
  selectionMode="single"
>
  <Section title="Animals">
    <Item key="Aardvark">Aardvark</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Snake">Snake</Item>
  </Section>
  <Section title="People">
    <Item key="Danni">Danni</Item>
    <Item key="Devon">Devon</Item>
    <Item key="Ross">Ross</Item>
  </Section>
</ListBox>
```

```
<ListBox
  width="size-2400"
  aria-label="Pick your favorite"
  selectionMode="single"
>
  <Section title="Animals">
    <Item key="Aardvark">
      Aardvark
    </Item>
    <Item key="Kangaroo">
      Kangaroo
    </Item>
    <Item key="Snake">
      Snake
    </Item>
  </Section>
  <Section title="People">
    <Item key="Danni">
      Danni
    </Item>
    <Item key="Devon">
      Devon
    </Item>
    <Item key="Ross">
      Ross
    </Item>
  </Section>
</ListBox>
```

Sections used with dynamic items are populated from a hierarchical data structure. Similarly to the props on `ListBox`, `Section` takes an array of data using the `items` prop.

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let options = [
    {name: 'Australian', children: [
      {id: 2, name: 'Koala'},
      {id: 3, name: 'Kangaroo'},
      {id: 4, name: 'Platypus'}
    ]},
    {name: 'American', children: [
      {id: 6, name: 'Bald Eagle'},
      {id: 7, name: 'Bison'},
      {id: 8, name: 'Skunk'}
    ]}
  ];
  let [selected, setSelected] = React.useState<Selection>(new Set());

  return (
    <ListBox
      aria-label="Pick an animal"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}
      width="size-2400">
      {item => (
        <Section key={item.name} items={item.children} title={item.name}>
          {item => <Item>{item.name}</Item>}
        </Section>
      )}
    </ListBox>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let options = [
    {
      name: 'Australian',
      children: [
        { id: 2, name: 'Koala' },
        { id: 3, name: 'Kangaroo' },
        { id: 4, name: 'Platypus' }
      ]
    },
    {
      name: 'American',
      children: [
        { id: 6, name: 'Bald Eagle' },
        { id: 7, name: 'Bison' },
        { id: 8, name: 'Skunk' }
      ]
    }
  ];
  let [selected, setSelected] = React.useState<Selection>(
    new Set()
  );

  return (
    <ListBox
      aria-label="Pick an animal"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}
      width="size-2400"
    >
      {(item) => (
        <Section
          key={item.name}
          items={item.children}
          title={item.name}
        >
          {(item) => <Item>{item.name}</Item>}
        </Section>
      )}
    </ListBox>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let options = [
    {
      name: 'Australian',
      children: [
        {
          id: 2,
          name: 'Koala'
        },
        {
          id: 3,
          name:
            'Kangaroo'
        },
        {
          id: 4,
          name:
            'Platypus'
        }
      ]
    },
    {
      name: 'American',
      children: [
        {
          id: 6,
          name:
            'Bald Eagle'
        },
        {
          id: 7,
          name: 'Bison'
        },
        {
          id: 8,
          name: 'Skunk'
        }
      ]
    }
  ];
  let [
    selected,
    setSelected
  ] = React.useState<
    Selection
  >(new Set());

  return (
    <ListBox
      aria-label="Pick an animal"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}
      width="size-2400"
    >
      {(item) => (
        <Section
          key={item.name}
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
    </ListBox>
  );
}
```

* * *

ListBox supports selection via mouse, keyboard, and touch. You can handle all of these via the `onSelectionChange` prop. ListBox will pass the selected `key` to the `onSelectionChange` handler.

The following example uses an `onSelectionChange` handler to update the selection stored in React state.

```
import type {Selection} from '@adobe/react-spectrum';

function StaticExample() {
  let [frequency, setFrequency] = React.useState<Selection>(new Set());

  return (
    <>
      <ListBox
        aria-label="Choose frequency"
        selectionMode="single"
        onSelectionChange={selected => setFrequency(selected)}
        width="size-2400">
        <Item key="Rarely">Rarely</Item>
        <Item key="Sometimes">Sometimes</Item>
        <Item key="Always">Always</Item>
      </ListBox>
      <p>You selected: {[...frequency][0]}</p>
    </>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function StaticExample() {
  let [frequency, setFrequency] = React.useState<Selection>(
    new Set()
  );

  return (
    <>
      <ListBox
        aria-label="Choose frequency"
        selectionMode="single"
        onSelectionChange={(selected) =>
          setFrequency(selected)}
        width="size-2400"
      >
        <Item key="Rarely">Rarely</Item>
        <Item key="Sometimes">Sometimes</Item>
        <Item key="Always">Always</Item>
      </ListBox>
      <p>You selected: {[...frequency][0]}</p>
    </>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function StaticExample() {
  let [
    frequency,
    setFrequency
  ] = React.useState<
    Selection
  >(new Set());

  return (
    <>
      <ListBox
        aria-label="Choose frequency"
        selectionMode="single"
        onSelectionChange={(selected) =>
          setFrequency(
            selected
          )}
        width="size-2400"
      >
        <Item key="Rarely">
          Rarely
        </Item>
        <Item key="Sometimes">
          Sometimes
        </Item>
        <Item key="Always">
          Always
        </Item>
      </ListBox>
      <p>
        You selected:
        {' '}
        {[...frequency][
          0
        ]}
      </p>
    </>
  );
}
```

When using ListBox with dynamic items, selection works much the same way using `key`. However, if your data already has an `id` property (as is common with many data sets), ListBox can use that id without needing to specify a `key` prop. The below example shows ListBox using the id of each item from the `items` array as the selected value without the need for `key`. Note that `key` will always take precedence if set.

```
import type {Selection} from '@adobe/react-spectrum';

function DynamicExample() {
  let [animalId, setAnimalId] = React.useState<Selection>(new Set());
  let options = [
    {id: 1, name: 'Aardvark'},
    {id: 2, name: 'Cat'},
    {id: 3, name: 'Dog'},
    {id: 4, name: 'Kangaroo'},
    {id: 5, name: 'Koala'},
    {id: 6, name: 'Penguin'},
    {id: 7, name: 'Snake'},
    {id: 8, name: 'Turtle'},
    {id: 9, name: 'Wombat'}
  ];

  return (
    <>
      <ListBox
        selectionMode="single"
        aria-label="Pick an animal"
        items={options}
        onSelectionChange={selected => setAnimalId(selected)}
        width="size-2400">
        {item => <Item>{item.name}</Item>}
      </ListBox>
      <p>Your favorite animal has id: {[...animalId][0]}</p>
    </>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function DynamicExample() {
  let [animalId, setAnimalId] = React.useState<Selection>(
    new Set()
  );
  let options = [
    { id: 1, name: 'Aardvark' },
    { id: 2, name: 'Cat' },
    { id: 3, name: 'Dog' },
    { id: 4, name: 'Kangaroo' },
    { id: 5, name: 'Koala' },
    { id: 6, name: 'Penguin' },
    { id: 7, name: 'Snake' },
    { id: 8, name: 'Turtle' },
    { id: 9, name: 'Wombat' }
  ];

  return (
    <>
      <ListBox
        selectionMode="single"
        aria-label="Pick an animal"
        items={options}
        onSelectionChange={(selected) =>
          setAnimalId(selected)}
        width="size-2400"
      >
        {(item) => <Item>{item.name}</Item>}
      </ListBox>
      <p>Your favorite animal has id: {[...animalId][0]}</p>
    </>
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function DynamicExample() {
  let [
    animalId,
    setAnimalId
  ] = React.useState<
    Selection
  >(new Set());
  let options = [
    {
      id: 1,
      name: 'Aardvark'
    },
    {
      id: 2,
      name: 'Cat'
    },
    {
      id: 3,
      name: 'Dog'
    },
    {
      id: 4,
      name: 'Kangaroo'
    },
    {
      id: 5,
      name: 'Koala'
    },
    {
      id: 6,
      name: 'Penguin'
    },
    {
      id: 7,
      name: 'Snake'
    },
    {
      id: 8,
      name: 'Turtle'
    },
    {
      id: 9,
      name: 'Wombat'
    }
  ];

  return (
    <>
      <ListBox
        selectionMode="single"
        aria-label="Pick an animal"
        items={options}
        onSelectionChange={(selected) =>
          setAnimalId(
            selected
          )}
        width="size-2400"
      >
        {(item) => (
          <Item>
            {item.name}
          </Item>
        )}
      </ListBox>
      <p>
        Your favorite
        animal has id:
        {' '}
        {[...animalId][
          0
        ]}
      </p>
    </>
  );
}
```

* * *

Items within ListBox also allow for additional content used to better communicate options. Icons, avatars, and descriptions can be added to the `children` of `Item` as shown in the example below. If a description is added, the prop `slot="description"` must be used to distinguish the different `<Text>` elements. See Icon's [labeling](https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#labeling) section and Avatar's [accessibility](https://react-spectrum.adobe.com/react-spectrum/Avatar.html#accessibility) section for more information on how to label these elements.

```
<ListBox width="size-2400" aria-label="Options" selectionMode="single">
  <Section title="Permission">
    <Item textValue="Read">
      <Book size="S" />
      <Text>Read</Text>
      <Text slot="description">Read Only</Text>
    </Item>
    <Item textValue="Write">
      <Draw size="S" />
      <Text>Write</Text>
      <Text slot="description">Read and Write Only</Text>
    </Item>
    <Item textValue="Admin">
      <BulkEditUsers size="S" />
      <Text>Admin</Text>
      <Text slot="description">Full access</Text>
    </Item>
  </Section>
</ListBox>
```

```
<ListBox
  width="size-2400"
  aria-label="Options"
  selectionMode="single"
>
  <Section title="Permission">
    <Item textValue="Read">
      <Book size="S" />
      <Text>Read</Text>
      <Text slot="description">Read Only</Text>
    </Item>
    <Item textValue="Write">
      <Draw size="S" />
      <Text>Write</Text>
      <Text slot="description">Read and Write Only</Text>
    </Item>
    <Item textValue="Admin">
      <BulkEditUsers size="S" />
      <Text>Admin</Text>
      <Text slot="description">Full access</Text>
    </Item>
  </Section>
</ListBox>
```

```
<ListBox
  width="size-2400"
  aria-label="Options"
  selectionMode="single"
>
  <Section title="Permission">
    <Item textValue="Read">
      <Book size="S" />
      <Text>Read</Text>
      <Text slot="description">
        Read Only
      </Text>
    </Item>
    <Item textValue="Write">
      <Draw size="S" />
      <Text>
        Write
      </Text>
      <Text slot="description">
        Read and Write
        Only
      </Text>
    </Item>
    <Item textValue="Admin">
      <BulkEditUsers size="S" />
      <Text>
        Admin
      </Text>
      <Text slot="description">
        Full access
      </Text>
    </Item>
  </Section>
</ListBox>
```

```
<ListBox width="size-2400" aria-label="Options" selectionMode="single">
  <Section title="Users">
    <Item textValue="User 1">
      <Avatar src="https://i.imgur.com/kJOwAdv.png" />
      <Text>User 1</Text>
    </Item>
    <Item textValue="User 2">
      <Avatar src="https://i.imgur.com/kJOwAdv.png" />
      <Text>User 2</Text>
    </Item>
    <Item textValue="User 3">
      <Avatar src="https://i.imgur.com/kJOwAdv.png" />
      <Text>User 3</Text>
    </Item>
    <Item textValue="User 4">
      <Avatar src="https://i.imgur.com/kJOwAdv.png" />
      <Text>User 4</Text>
    </Item>
  </Section>
</ListBox>
```

```
<ListBox
  width="size-2400"
  aria-label="Options"
  selectionMode="single"
>
  <Section title="Users">
    <Item textValue="User 1">
      <Avatar src="https://i.imgur.com/kJOwAdv.png" />
      <Text>User 1</Text>
    </Item>
    <Item textValue="User 2">
      <Avatar src="https://i.imgur.com/kJOwAdv.png" />
      <Text>User 2</Text>
    </Item>
    <Item textValue="User 3">
      <Avatar src="https://i.imgur.com/kJOwAdv.png" />
      <Text>User 3</Text>
    </Item>
    <Item textValue="User 4">
      <Avatar src="https://i.imgur.com/kJOwAdv.png" />
      <Text>User 4</Text>
    </Item>
  </Section>
</ListBox>
```

```
<ListBox
  width="size-2400"
  aria-label="Options"
  selectionMode="single"
>
  <Section title="Users">
    <Item textValue="User 1">
      <Avatar src="https://i.imgur.com/kJOwAdv.png" />
      <Text>
        User 1
      </Text>
    </Item>
    <Item textValue="User 2">
      <Avatar src="https://i.imgur.com/kJOwAdv.png" />
      <Text>
        User 2
      </Text>
    </Item>
    <Item textValue="User 3">
      <Avatar src="https://i.imgur.com/kJOwAdv.png" />
      <Text>
        User 3
      </Text>
    </Item>
    <Item textValue="User 4">
      <Avatar src="https://i.imgur.com/kJOwAdv.png" />
      <Text>
        User 4
      </Text>
    </Item>
  </Section>
</ListBox>
```

* * *

ListBox supports loading data asynchronously, and will display a progress circle when the `isLoading` prop is set. It also supports infinite scrolling to load more data on demand as the user scrolls, via the `onLoadMore` prop.

This example uses the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook to handle loading the data. See the docs for more information.

```
import {useAsyncList} from 'react-stately';

interface Pokemon {
  name: string;
}

function AsyncLoadingExample() {
  let list = useAsyncList<Pokemon>({
    async load({ signal, cursor }) {
      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      let res = await fetch(cursor || 'https://pokeapi.co/api/v2/pokemon', {
        signal
      });
      let json = await res.json();
      return {
        items: json.results,
        cursor: json.next
      };
    }
  });

  return (
    <Flex maxHeight="size-2400">
      <ListBox
        aria-label="Pick a Pokemon"
        items={list.items}
        isLoading={list.isLoading}
        onLoadMore={list.loadMore}
        width="size-2400"
      >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ListBox>
    </Flex>
  );
}
```

```
import {useAsyncList} from 'react-stately';

interface Pokemon {
  name: string;
}

function AsyncLoadingExample() {
  let list = useAsyncList<Pokemon>({
    async load({ signal, cursor }) {
      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      let res = await fetch(
        cursor || 'https://pokeapi.co/api/v2/pokemon',
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
    <Flex maxHeight="size-2400">
      <ListBox
        aria-label="Pick a Pokemon"
        items={list.items}
        isLoading={list.isLoading}
        onLoadMore={list.loadMore}
        width="size-2400"
      >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ListBox>
    </Flex>
  );
}
```

```
import {useAsyncList} from 'react-stately';

interface Pokemon {
  name: string;
}

function AsyncLoadingExample() {
  let list =
    useAsyncList<
      Pokemon
    >({
      async load(
        {
          signal,
          cursor
        }
      ) {
        // If no cursor is available, then we're loading the first page.
        // Otherwise, the cursor is the next URL to load, as returned from the previous page.
        let res =
          await fetch(
            cursor ||
              'https://pokeapi.co/api/v2/pokemon',
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
    <Flex maxHeight="size-2400">
      <ListBox
        aria-label="Pick a Pokemon"
        items={list
          .items}
        isLoading={list
          .isLoading}
        onLoadMore={list
          .loadMore}
        width="size-2400"
      >
        {(item) => (
          <Item
            key={item
              .name}
          >
            {item.name}
          </Item>
        )}
      </ListBox>
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

`[CollectionChildren](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:CollectionChildren)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

—

The contents of the collection.

`escapeKeyBehavior`

`'clearSelection' | 'none'`

`'clearSelection'`

Whether pressing the escape key should clear selection in the listbox or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to easily clear selection. Only use if the escape key is being handled externally or should not trigger selection clearing contextually.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [FocusStrategy](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:FocusStrategy)`

—

Whether to auto focus the listbox or an option.

`shouldFocusWrap`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether focus should wrap around when the end/start is reached.

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

`isLoading`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the items are currently loading.

Events

Name

Type

Description

`onSelectionChange`

`( (keys: [Selection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:Selection) )) => void`

Handler that is called when the selection changes.

`onFocus`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element receives focus.

`onBlur`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element loses focus.

`onFocusChange`

`( (isFocused: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the element's focus status changes.

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
<ListBox
  isLoading
  aria-label="Choose frequency"
  selectionMode="single"
  width="size-1200">
  {[]}
</ListBox>
```

```
<ListBox
  isLoading
  aria-label="Choose frequency"
  selectionMode="single"
  width="size-1200">
  {[]}
</ListBox>
```

```
<ListBox
  isLoading
  aria-label="Choose frequency"
  selectionMode="single"
  width="size-1200"
>
  {[]}
</ListBox>
```

Use the `disabledKeys` prop to specify which item keys to disable in the ListBox.

```
<ListBox
  width="size-2400"
  aria-label="Pick your favorite"
  disabledKeys={['Snake', 'Ross']}
  selectionMode="single"
>
  <Section title="Animals">
    <Item key="Aardvark">Aardvark</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Snake">Snake</Item>
  </Section>
  <Section title="People">
    <Item key="Danni">Danni</Item>
    <Item key="Devon">Devon</Item>
    <Item key="Ross">Ross</Item>
  </Section>
</ListBox>
```

```
<ListBox
  width="size-2400"
  aria-label="Pick your favorite"
  disabledKeys={['Snake', 'Ross']}
  selectionMode="single"
>
  <Section title="Animals">
    <Item key="Aardvark">Aardvark</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Snake">Snake</Item>
  </Section>
  <Section title="People">
    <Item key="Danni">Danni</Item>
    <Item key="Devon">Devon</Item>
    <Item key="Ross">Ross</Item>
  </Section>
</ListBox>
```

```
<ListBox
  width="size-2400"
  aria-label="Pick your favorite"
  disabledKeys={[
    'Snake',
    'Ross'
  ]}
  selectionMode="single"
>
  <Section title="Animals">
    <Item key="Aardvark">
      Aardvark
    </Item>
    <Item key="Kangaroo">
      Kangaroo
    </Item>
    <Item key="Snake">
      Snake
    </Item>
  </Section>
  <Section title="People">
    <Item key="Danni">
      Danni
    </Item>
    <Item key="Devon">
      Devon
    </Item>
    <Item key="Ross">
      Ross
    </Item>
  </Section>
</ListBox>
```

* * *

The ListBox features automatic virtualization and may need specific mocks in a test environment to enable said virtualization properly. Please see the following sections in the testing docs for more information on how to handle these behaviors in your test suite.

[Timers](https://react-spectrum.adobe.com/react-spectrum/testing.html#timers)

[Virtualized Components](https://react-spectrum.adobe.com/react-spectrum/testing.html#virtualized-components)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/listbox/test/ListBox.test.js) if you find that the above isn't sufficient when resolving issues in your own test cases.

`@react-spectrum/test-utils` offers common listbox interaction utilities which you may find helpful when writing tests. See [here](https://react-spectrum.adobe.com/react-aria/testing.html#react-aria-test-utils) for more information on how to setup these utilities in your tests. Below is the full definition of the listbox tester and a sample of how you could use it in your test suite.

```
// ListBox.test.ts
import {render} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/ListBox.html#testing

it('ListBox can select an option via keyboard', async function () {
  // Render your test component/app and initialize the listbox tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <ListBox selectionMode="single" data-testid="test-listbox">
        ...
      </ListBox>
    </Provider>
  );
  let listboxTester = testUtilUser.createTester('ListBox', {
    root: getByTestId('test-listbox'),
    interactionType: 'keyboard'
  });

  await listboxTester.toggleOptionSelection({ option: 4 });
  expect(listboxTester.options()[4]).toHaveAttribute('aria-selected', 'true');
});
```

```
// ListBox.test.ts
import {render} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/ListBox.html#testing

it('ListBox can select an option via keyboard', async function () {
  // Render your test component/app and initialize the listbox tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <ListBox
        selectionMode="single"
        data-testid="test-listbox"
      >
        ...
      </ListBox>
    </Provider>
  );
  let listboxTester = testUtilUser.createTester('ListBox', {
    root: getByTestId('test-listbox'),
    interactionType: 'keyboard'
  });

  await listboxTester.toggleOptionSelection({ option: 4 });
  expect(listboxTester.options()[4]).toHaveAttribute(
    'aria-selected',
    'true'
  );
});
```

```
// ListBox.test.ts
import {render} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser =
  new User({
    interactionType:
      'mouse'
  });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/ListBox.html#testing

it('ListBox can select an option via keyboard', async function () {
  // Render your test component/app and initialize the listbox tester
  let { getByTestId } =
    render(
      <Provider
        theme={defaultTheme}
      >
        <ListBox
          selectionMode="single"
          data-testid="test-listbox"
        >
          ...
        </ListBox>
      </Provider>
    );
  let listboxTester =
    testUtilUser
      .createTester(
        'ListBox',
        {
          root:
            getByTestId(
              'test-listbox'
            ),
          interactionType:
            'keyboard'
        }
      );

  await listboxTester
    .toggleOptionSelection(
      { option: 4 }
    );
  expect(
    listboxTester
      .options()[4]
  ).toHaveAttribute(
    'aria-selected',
    'true'
  );
});
```

### Properties

Name

Type

Description

`listbox`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the listbox.

`selectedOptions`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the listbox's selected options if any.

`sections`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the listbox's sections if any.

### Methods

Method

Description

`constructor( (opts: [ListBoxTesterOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:ListBoxTesterOpts) )): void`

`setInteractionType( (type: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType'] )): void`

Set the interaction type used by the listbox tester.

`findOption( (opts: {  optionIndexOrText: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns a option matching the specified index or text content.

`toggleOptionSelection( (opts: [ListBoxToggleOptionOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/listbox.ts:ListBoxToggleOptionOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Toggles the selection for the specified listbox option. Defaults to using the interaction type set on the listbox tester.

`triggerOptionAction( (opts: [ListBoxOptionActionOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/listbox.ts:ListBoxOptionActionOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Triggers the action for the specified listbox option. Defaults to using the interaction type set on the listbox tester.

`options( (opts: {  element?: [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the listbox options. Can be filtered to a subsection of the listbox if provided via `element`.
