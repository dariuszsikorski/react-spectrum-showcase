---
source: https://react-spectrum.adobe.com/react-spectrum/Picker.html
date: Thu, 16 Oct 2025 01:30:47 GMT
---

Pickers allow users to choose a single option from a collapsible list of options when space is limited.

* * *

```
<Picker label="Choose frequency">
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
```

```
<Picker label="Choose frequency">
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
```

```
<Picker label="Choose frequency">
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Picker>
```

## Content[#](#content)

* * *

Picker follows the [Collection Components](https://react-spectrum.adobe.com/react-stately/collections.html) API, accepting both static and dynamic collections. Similar to [Menu](https://react-spectrum.adobe.com/react-spectrum/Menu.html), Picker accepts `<Item>` elements as children, each with a `key` prop. Basic usage of Picker, seen in the example above, shows multiple options populated with a string. Static collections, as in this example, can be used when the full list of options is known ahead of time.

Dynamic collections, as shown below, can be used when the options come from an external data source such as an API call, or update over time. Providing the data in this way allows Picker to automatically cache the rendering of each item, which dramatically improves performance.

As seen below, an iterable list of options is passed to the Picker using the `items` prop. Each item accepts a key prop, which is passed to the `onSelectionChange` handler to identify the selected item. Alternatively, if the item objects contain an `id` property, as shown in the example below, then this is used automatically and a `key` prop is not required. See the [Events](#events) section for more detail on selection.

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
      <Picker
        label="Pick an animal"
        items={options}
        onSelectionChange={setAnimalId}
      >
        {(item) => <Item>{item.name}</Item>}
      </Picker>
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
      <Picker
        label="Pick an animal"
        items={options}
        onSelectionChange={setAnimalId}
      >
        {(item) => <Item>{item.name}</Item>}
      </Picker>
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
      <Picker
        label="Pick an animal"
        items={options}
        onSelectionChange={setAnimalId}
      >
        {(item) => (
          <Item>
            {item.name}
          </Item>
        )}
      </Picker>
      <p>
        Animal id:{' '}
        {animalId}
      </p>
    </>
  );
}
```

On mobile, Pickers automatically display in a tray instead of a popover to improve usability.

To internationalize a Picker, a localized string should be passed to the `children` of each `Item`. For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of the Picker is automatically flipped.

* * *

Picker can be labeled using the `label` prop. If no label is provided, an alternative text label must be provided to identify the control for accessibility. This should be added using the `aria-label` prop. If the Picker is a required field, the `isRequired` and `necessityIndicator` props can be used to show a required state.

```
<Picker label="Choose frequency" isRequired necessityIndicator="icon">
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
```

```
<Picker
  label="Choose frequency"
  isRequired
  necessityIndicator="icon"
>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
```

```
<Picker
  label="Choose frequency"
  isRequired
  necessityIndicator="icon"
>
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Picker>
```

```
<Picker label="Choose frequency" isRequired necessityIndicator="label">
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
```

```
<Picker
  label="Choose frequency"
  isRequired
  necessityIndicator="label"
>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
```

```
<Picker
  label="Choose frequency"
  isRequired
  necessityIndicator="label"
>
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Picker>
```

```
<Picker label="Choose frequency" necessityIndicator="label">
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
```

```
<Picker label="Choose frequency" necessityIndicator="label">
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
```

```
<Picker
  label="Choose frequency"
  necessityIndicator="label"
>
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Picker>
```

* * *

Setting a selected option can be done by using the `defaultSelectedKey` or `selectedKey` prop. The selected key corresponds to the `key` of an item. See [Events](#events) for more details on selection events. Additionally see the `react-stately` [Selection docs](https://react-spectrum.adobe.com/react-stately/selection.html#selected-key-data-type) for caveats regarding selection prop typing.

```
import type {Key} from '@adobe/react-spectrum';

function Example() {
  let options = [
    {name: 'Koala'},
    {name: 'Kangaroo'},
    {name: 'Platypus'},
    {name: 'Bald Eagle'},
    {name: 'Bison'},
    {name: 'Skunk'}
  ];
  let [animal, setAnimal] = React.useState<Key>("Bison");

  return (
    <Flex gap="size-150" wrap>
      <Picker
        label="Pick an animal (uncontrolled)"
        items={options}
        defaultSelectedKey="Bison">
        {item => <Item key={item.name}>{item.name}</Item>}
      </Picker>

      <Picker
        label="Pick an animal (controlled)"
        items={options}
        selectedKey={animal}
        onSelectionChange={selected => setAnimal(selected)}>
        {item => <Item key={item.name}>{item.name}</Item>}
      </Picker>
    </Flex>
  );
}
```

```
import type {Key} from '@adobe/react-spectrum';

function Example() {
  let options = [
    {name: 'Koala'},
    {name: 'Kangaroo'},
    {name: 'Platypus'},
    {name: 'Bald Eagle'},
    {name: 'Bison'},
    {name: 'Skunk'}
  ];
  let [animal, setAnimal] = React.useState<Key>("Bison");

  return (
    <Flex gap="size-150" wrap>
      <Picker
        label="Pick an animal (uncontrolled)"
        items={options}
        defaultSelectedKey="Bison">
        {item => <Item key={item.name}>{item.name}</Item>}
      </Picker>

      <Picker
        label="Pick an animal (controlled)"
        items={options}
        selectedKey={animal}
        onSelectionChange={selected => setAnimal(selected)}>
        {item => <Item key={item.name}>{item.name}</Item>}
      </Picker>
    </Flex>
  );
}
```

```
import type {Key} from '@adobe/react-spectrum';

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
    animal,
    setAnimal
  ] = React.useState<
    Key
  >('Bison');

  return (
    <Flex
      gap="size-150"
      wrap
    >
      <Picker
        label="Pick an animal (uncontrolled)"
        items={options}
        defaultSelectedKey="Bison"
      >
        {(item) => (
          <Item
            key={item
              .name}
          >
            {item.name}
          </Item>
        )}
      </Picker>

      <Picker
        label="Pick an animal (controlled)"
        items={options}
        selectedKey={animal}
        onSelectionChange={(selected) =>
          setAnimal(
            selected
          )}
      >
        {(item) => (
          <Item
            key={item
              .name}
          >
            {item.name}
          </Item>
        )}
      </Picker>
    </Flex>
  );
}
```

Picker supports the `name` prop for integration with HTML forms. The `key` of the selected item will be submitted to the server.

```
<Picker
  label="Favorite Animal"
  name="favoriteAnimalId">
  <Item key="panda">Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
</Picker>
```

```
<Picker
  label="Favorite Animal"
  name="favoriteAnimalId">
  <Item key="panda">Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
</Picker>
```

```
<Picker
  label="Favorite Animal"
  name="favoriteAnimalId">
  <Item key="panda">
    Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
</Picker>
```

* * *

By default, interacting with an item in a Picker triggers `onSelectionChange`. Alternatively, items may be links to another page or website. This can be achieved by passing the `href` prop to the `<Item>` component. Link items in a `Picker` are not selectable.

```
<Picker label="Project">
  <Item href="https://example.com/" target="_blank">Create new…</Item>
  <Item>Proposal</Item>
  <Item>Budget</Item>
  <Item>Onboarding</Item>
</Picker>
```

```
<Picker label="Project">
  <Item href="https://example.com/" target="_blank">
    Create new…
  </Item>
  <Item>Proposal</Item>
  <Item>Budget</Item>
  <Item>Onboarding</Item>
</Picker>
```

```
<Picker label="Project">
  <Item
    href="https://example.com/"
    target="_blank"
  >
    Create new…
  </Item>
  <Item>Proposal</Item>
  <Item>Budget</Item>
  <Item>
    Onboarding
  </Item>
</Picker>
```

The `<Item>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Spectrum components that support links, this works via the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-spectrum/routing.html) to learn how to set this up.

* * *

Picker supports sections in order to group options. Sections can be used by wrapping groups of items in a `Section` element. Each `Section` takes a `title` and `key` prop.

```
<Picker label="Pick your favorite">
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
</Picker>
```

```
<Picker label="Pick your favorite">
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
</Picker>
```

```
<Picker label="Pick your favorite">
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
</Picker>
```

Sections used with dynamic items are populated from a hierarchical data structure. Similarly to the props on `Picker`, `Section` takes an array of data using the `items` prop.

```
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

  return (
    <Picker
      label="Pick an animal"
      items={options}
      onSelectionChange={(selected) => alert(selected)}
    >
      {(item) => (
        <Section key={item.name} items={item.children} title={item.name}>
          {(item) => <Item>{item.name}</Item>}
        </Section>
      )}
    </Picker>
  );
}
```

```
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

  return (
    <Picker
      label="Pick an animal"
      items={options}
      onSelectionChange={(selected) => alert(selected)}
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
    </Picker>
  );
}
```

```
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

  return (
    <Picker
      label="Pick an animal"
      items={options}
      onSelectionChange={(selected) =>
        alert(selected)}
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
    </Picker>
  );
}
```

* * *

Picker supports selection via mouse, keyboard, and touch. You can handle all of these via the `onSelectionChange` prop. Picker will pass the selected `key` to the `onSelectionChange` handler.

The following example uses an `onSelectionChange` handler to update the selection stored in React state.

```
function StaticExample() {
  let [frequency, setFrequency] = React.useState(null);

  return (
    <>
      <Picker
        label="Choose frequency"
        onSelectionChange={(selected) => setFrequency(selected)}
      >
        <Item key="Rarely">Rarely</Item>
        <Item key="Sometimes">Sometimes</Item>
        <Item key="Always">Always</Item>
      </Picker>
      <p>You selected {frequency}</p>
    </>
  );
}
```

```
function StaticExample() {
  let [frequency, setFrequency] = React.useState(null);

  return (
    <>
      <Picker
        label="Choose frequency"
        onSelectionChange={(selected) =>
          setFrequency(selected)}
      >
        <Item key="Rarely">Rarely</Item>
        <Item key="Sometimes">Sometimes</Item>
        <Item key="Always">Always</Item>
      </Picker>
      <p>You selected {frequency}</p>
    </>
  );
}
```

```
function StaticExample() {
  let [
    frequency,
    setFrequency
  ] = React.useState(
    null
  );

  return (
    <>
      <Picker
        label="Choose frequency"
        onSelectionChange={(selected) =>
          setFrequency(
            selected
          )}
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
      </Picker>
      <p>
        You selected{' '}
        {frequency}
      </p>
    </>
  );
}
```

When using Picker with dynamic items, selection works much the same way using `key`. However, if your data already has an `id` property (as is common with many data sets), Picker can use that id without needing to specify a `key` prop. The below example shows Picker using the id of each item from the `items` array as the selected value without the need for `key`. Note that `key` will always take precedence if set.

```
function DynamicExample() {
  let [animalId, setAnimalId] = React.useState(null);
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
      <Picker
        label="Pick an animal"
        items={options}
        onSelectionChange={(selected) => setAnimalId(selected)}
      >
        {(item) => <Item>{item.name}</Item>}
      </Picker>
      <p>Your favorite animal has id: {animalId}</p>
    </>
  );
}
```

```
function DynamicExample() {
  let [animalId, setAnimalId] = React.useState(null);
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
      <Picker
        label="Pick an animal"
        items={options}
        onSelectionChange={(selected) =>
          setAnimalId(selected)}
      >
        {(item) => <Item>{item.name}</Item>}
      </Picker>
      <p>Your favorite animal has id: {animalId}</p>
    </>
  );
}
```

```
function DynamicExample() {
  let [
    animalId,
    setAnimalId
  ] = React.useState(
    null
  );
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
      <Picker
        label="Pick an animal"
        items={options}
        onSelectionChange={(selected) =>
          setAnimalId(
            selected
          )}
      >
        {(item) => (
          <Item>
            {item.name}
          </Item>
        )}
      </Picker>
      <p>
        Your favorite
        animal has id:
        {' '}
        {animalId}
      </p>
    </>
  );
}
```

* * *

Items within Picker also allow for additional content used to better communicate options. Icons, avatars, and descriptions can be added to the `children` of `Item` as shown in the example below. If a description is added, the prop `slot="description"` must be used to distinguish the different `<Text>` elements. See Icon's [labeling](https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#labeling) section and Avatar's [accessibility](https://react-spectrum.adobe.com/react-spectrum/Avatar.html#accessibility) section for more information on how to label these elements.

```
<Picker label="Options">
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
</Picker>
```

```
<Picker label="Options">
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
</Picker>
```

```
<Picker label="Options">
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
</Picker>
```

```
<Picker label="Select a user">
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
</Picker>
```

```
<Picker label="Select a user">
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
</Picker>
```

```
<Picker label="Select a user">
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
</Picker>
```

* * *

Picker supports loading data asynchronously, and will display a progress circle when the `isLoading` prop is set. It also supports infinite scrolling to load more data on demand as the user scrolls, via the `onLoadMore` prop.

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
    <Picker
      label="Pick a Pokemon"
      items={list.items}
      isLoading={list.isLoading}
      onLoadMore={list.loadMore}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </Picker>
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
    <Picker
      label="Pick a Pokemon"
      items={list.items}
      isLoading={list.isLoading}
      onLoadMore={list.loadMore}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </Picker>
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
    <Picker
      label="Pick a Pokemon"
      items={list.items}
      isLoading={list
        .isLoading}
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
    </Picker>
  );
}
```

* * *

Picker supports the `isRequired` prop to ensure the user selects an option, as well as custom client and server-side validation. It can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-spectrum/forms.html) guide to learn more.

When the [Form](https://react-spectrum.adobe.com/react-spectrum/Form.html) component has the `validationBehavior="native"` prop, validation errors block form submission and are displayed as help text automatically.

```
import {Form, ButtonGroup, Button} from '@adobe/react-spectrum';

<Form validationBehavior="native" maxWidth="size-3000">
  <Picker label="Favorite animal" name="animal" isRequired>    <Item>Aardvark</Item>
    <Item>Cat</Item>
    <Item>Dog</Item>
    <Item>Kangaroo</Item>
    <Item>Panda</Item>
    <Item>Snake</Item>
  </Picker>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
```

```
import {
  Button,
  ButtonGroup,
  Form
} from '@adobe/react-spectrum';

<Form validationBehavior="native" maxWidth="size-3000">
  <Picker
    label="Favorite animal"
    name="animal"
    isRequired
  >    <Item>Aardvark</Item>
    <Item>Cat</Item>
    <Item>Dog</Item>
    <Item>Kangaroo</Item>
    <Item>Panda</Item>
    <Item>Snake</Item>
  </Picker>
  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
```

```
import {
  Button,
  ButtonGroup,
  Form
} from '@adobe/react-spectrum';

<Form
  validationBehavior="native"
  maxWidth="size-3000"
>
  <Picker
    label="Favorite animal"
    name="animal"
    isRequired
  >    <Item>
      Aardvark
    </Item>
    <Item>Cat</Item>
    <Item>Dog</Item>
    <Item>
      Kangaroo
    </Item>
    <Item>Panda</Item>
    <Item>Snake</Item>
  </Picker>
  <ButtonGroup>
    <Button
      type="submit"
      variant="primary"
    >
      Submit
    </Button>
    <Button
      type="reset"
      variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
```

By default, `Picker` displays default validation messages provided by the browser. See [Customizing error messages](https://react-spectrum.adobe.com/react-spectrum/forms.html#customizing-error-messages) in the Forms guide to learn how to provide your own custom errors.

* * *

Name

Type

Default

Description

`children`

`[CollectionChildren](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:CollectionChildren)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

—

The contents of the collection.

`isQuiet`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the textfield should be displayed with a quiet style.

`align`

`[Alignment](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/labelable.d.ts:Alignment)`

`'start'`

Alignment of the menu relative to the input target.

`direction`

`'bottom' | 'top'`

`'bottom'`

Direction the menu will render relative to the Picker.

`shouldFlip`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the menu should automatically flip direction when space is limited.

`menuWidth`

`[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)`

—

Width of the menu. By default, matches width of the trigger. Note that the minimum width of the dropdown is always equal to the trigger's width.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`autoComplete`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the input, used when submitting an HTML form.

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Sets the open state of the menu.

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Sets the default open state of the menu.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

—

Item objects in the collection.

`disabledKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input is disabled.

`isRequired`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether user input is required on the input before form submission.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input value is invalid.

`validationBehavior`

`'aria' | 'native'`

`'aria'`

Whether to use native HTML form validation to prevent form submission when the value is missing or invalid, or mark the field as required or invalid via ARIA.

`validate`

`( (value: [ValidationType](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/select/src/index.d.ts:ValidationType)<[SelectionMode](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/select/src/index.d.ts:SelectionMode)> )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if `validationBehavior="native"`. For realtime validation, use the `isInvalid` prop instead.

`description`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

A description for the field. Provides a hint such as specific requirements for what to choose.

`errorMessage`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | ( (v: [ValidationResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationResult) )) => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

An error message for the field.

`label`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The content to display as the label.

`placeholder`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Temporary text that occupies the text input when it is empty.

`selectedKey`

`[Key](https://reactjs.org/docs/lists-and-keys.html) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The currently selected key in the collection (controlled).

`defaultSelectedKey`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

—

The initial selected key in the collection (uncontrolled).

`isLoading`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the items are currently loading.

`labelPosition`

`[LabelPosition](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/labelable.d.ts:LabelPosition)`

`'top'`

The label's overall position relative to the element it is labeling.

`labelAlign`

`[Alignment](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/labelable.d.ts:Alignment)`

`'start'`

The label's horizontal alignment relative to the element it is labeling.

`necessityIndicator`

`[NecessityIndicator](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/labelable.d.ts:NecessityIndicator)`

`'icon'`

Whether the required state should be shown as an icon or text.

`contextualHelp`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

A ContextualHelp element to place next to the label.

Events

Name

Type

Description

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Method that is called when the open state of the menu changes.

`onFocus`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element receives focus.

`onBlur`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element loses focus.

`onFocusChange`

`( (isFocused: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the element's focus status changes.

`onKeyDown`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is pressed.

`onKeyUp`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is released.

`onSelectionChange`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => void`

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

`excludeFromTabOrder`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to exclude the element from the sequential tab order. If true, the element will not be focusable via the keyboard by tabbing. This should be avoided except in rare scenarios where an alternative means of accessing the element or its functionality via the keyboard is available.

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

### Label alignment and position[#](#label-alignment-and-position)

By default, the label is positioned above the Picker. The `labelPosition` prop can be used to position the label to the side. The `labelAlign` prop can be used to align the label as "start" or "end". For left-to-right (LTR) languages, "start" refers to the left most edge of the Picker and "end" refers to the right most edge. For right-to-left (RTL) languages, this is flipped.

```
<Picker label="Choose frequency" labelPosition="side" labelAlign="end">
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
```

```
<Picker
  label="Choose frequency"
  labelPosition="side"
  labelAlign="end"
>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
```

```
<Picker
  label="Choose frequency"
  labelPosition="side"
  labelAlign="end"
>
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Picker>
```

```
<Picker label="Choose frequency" isQuiet>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
```

```
<Picker label="Choose frequency" isQuiet>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
```

```
<Picker
  label="Choose frequency"
  isQuiet
>
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Picker>
```

```
<Picker label="Choose frequency" isDisabled>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
```

```
<Picker label="Choose frequency" isDisabled>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
```

```
<Picker
  label="Choose frequency"
  isDisabled
>
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Picker>
```

[View guidelines](https://spectrum.adobe.com/page/picker/#Help-text-\(description-and-error-message\))

Both a description and an error message can be supplied to a Picker. The description is always visible unless `isInvalid` is true and an error message is provided. The error message can be used to help the user fix their input quickly and should be specific to the detected error. All strings should be localized.

```
function Example() {
  let [animalId, setAnimalId] = React.useState(null);
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
  let isValid = React.useMemo(() => animalId !== 2 && animalId !== 7, [
    animalId
  ]);

  return (
    <Picker
      isInvalid={!isValid}
      label="Favorite animal"
      description="Pick your favorite animal, you will be judged."
      errorMessage={animalId === 2
        ? 'The author of this example is a dog person.'
        : "Oh no it's a snake! Choose anything else."}
      items={options}
      selectedKey={animalId}
      onSelectionChange={(selected) => setAnimalId(selected)}
    >
      {(item) => <Item>{item.name}</Item>}
    </Picker>
  );
}
```

```
function Example() {
  let [animalId, setAnimalId] = React.useState(null);
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
  let isValid = React.useMemo(
    () => animalId !== 2 && animalId !== 7,
    [animalId]
  );

  return (
    <Picker
      isInvalid={!isValid}
      label="Favorite animal"
      description="Pick your favorite animal, you will be judged."
      errorMessage={animalId === 2
        ? 'The author of this example is a dog person.'
        : "Oh no it's a snake! Choose anything else."}
      items={options}
      selectedKey={animalId}
      onSelectionChange={(selected) =>
        setAnimalId(selected)}
    >
      {(item) => <Item>{item.name}</Item>}
    </Picker>
  );
}
```

```
function Example() {
  let [
    animalId,
    setAnimalId
  ] = React.useState(
    null
  );
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
  let isValid = React
    .useMemo(
      () =>
        animalId !== 2 &&
        animalId !== 7,
      [animalId]
    );

  return (
    <Picker
      isInvalid={!isValid}
      label="Favorite animal"
      description="Pick your favorite animal, you will be judged."
      errorMessage={animalId ===
          2
        ? 'The author of this example is a dog person.'
        : "Oh no it's a snake! Choose anything else."}
      items={options}
      selectedKey={animalId}
      onSelectionChange={(selected) =>
        setAnimalId(
          selected
        )}
    >
      {(item) => (
        <Item>
          {item.name}
        </Item>
      )}
    </Picker>
  );
}
```

A [ContextualHelp](https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html) element may be placed next to the label to provide additional information or help about a Picker.

```
import {Content, ContextualHelp, Heading} from '@adobe/react-spectrum';

<Picker
  label="Engineering major"
  contextualHelp={
    <ContextualHelp variant="info">
      <Heading>Major changes</Heading>
      <Content>
        Once you have changed your major, you cannot change it back.
      </Content>
    </ContextualHelp>
  }
>
  <Item>Aerospace</Item>
  <Item>Mechanical</Item>
  <Item>Civil</Item>
  <Item>Nuclear</Item>
  <Item>Industrial</Item>
  <Item>Chemical</Item>
  <Item>Agricultural</Item>
  <Item>Electrical</Item>
</Picker>
```

```
import {
  Content,
  ContextualHelp,
  Heading
} from '@adobe/react-spectrum';

<Picker
  label="Engineering major"
  contextualHelp={
    <ContextualHelp variant="info">
      <Heading>Major changes</Heading>
      <Content>
        Once you have changed your major, you cannot
        change it back.
      </Content>
    </ContextualHelp>
  }
>
  <Item>Aerospace</Item>
  <Item>Mechanical</Item>
  <Item>Civil</Item>
  <Item>Nuclear</Item>
  <Item>Industrial</Item>
  <Item>Chemical</Item>
  <Item>Agricultural</Item>
  <Item>Electrical</Item>
</Picker>
```

```
import {
  Content,
  ContextualHelp,
  Heading
} from '@adobe/react-spectrum';

<Picker
  label="Engineering major"
  contextualHelp={
    <ContextualHelp variant="info">
      <Heading>
        Major changes
      </Heading>
      <Content>
        Once you have
        changed your
        major, you
        cannot change
        it back.
      </Content>
    </ContextualHelp>
  }
>
  <Item>
    Aerospace
  </Item>
  <Item>
    Mechanical
  </Item>
  <Item>Civil</Item>
  <Item>Nuclear</Item>
  <Item>
    Industrial
  </Item>
  <Item>Chemical</Item>
  <Item>
    Agricultural
  </Item>
  <Item>
    Electrical
  </Item>
</Picker>
```

```
<Flex direction="column" rowGap="size-150">
  <Picker label="Choose frequency" width="size-3600" maxWidth="100%">
    <Item key="rarely">Rarely</Item>
    <Item key="sometimes">Sometimes</Item>
    <Item key="always">Always</Item>
  </Picker>

  <Picker label="Choose animal" menuWidth="size-6000">
    <Item key="Emu">Emu</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Platypus">Platypus</Item>
  </Picker>
</Flex>
```

```
<Flex direction="column" rowGap="size-150">
  <Picker
    label="Choose frequency"
    width="size-3600"
    maxWidth="100%"
  >
    <Item key="rarely">Rarely</Item>
    <Item key="sometimes">Sometimes</Item>
    <Item key="always">Always</Item>
  </Picker>
   <Picker label="Choose animal" menuWidth="size-6000">
    <Item key="Emu">Emu</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Platypus">Platypus</Item>
  </Picker>
</Flex>
```

```
<Flex
  direction="column"
  rowGap="size-150"
>
  <Picker
    label="Choose frequency"
    width="size-3600"
    maxWidth="100%"
  >
    <Item key="rarely">
      Rarely
    </Item>
    <Item key="sometimes">
      Sometimes
    </Item>
    <Item key="always">
      Always
    </Item>
  </Picker>
   <Picker
    label="Choose animal"
    menuWidth="size-6000"
  >
    <Item key="Emu">
      Emu
    </Item>
    <Item key="Kangaroo">
      Kangaroo
    </Item>
    <Item key="Platypus">
      Platypus
    </Item>
  </Picker>
</Flex>
```

### Align and direction[#](#align-and-direction)

```
<Flex direction="column" gap="size-150">
  <Picker label="Choose frequency" align="end" menuWidth="size-3000">
    <Item key="rarely">Rarely</Item>
    <Item key="sometimes">Sometimes</Item>
    <Item key="always">Always</Item>
  </Picker>

  <Picker label="Choose animal" direction="top">
    <Item key="Emu">Emu</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Platypus">Platypus</Item>
  </Picker>
</Flex>
```

```
<Flex direction="column" gap="size-150">
  <Picker
    label="Choose frequency"
    align="end"
    menuWidth="size-3000"
  >
    <Item key="rarely">Rarely</Item>
    <Item key="sometimes">Sometimes</Item>
    <Item key="always">Always</Item>
  </Picker>
   <Picker label="Choose animal" direction="top">
    <Item key="Emu">Emu</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Platypus">Platypus</Item>
  </Picker>
</Flex>
```

```
<Flex
  direction="column"
  gap="size-150"
>
  <Picker
    label="Choose frequency"
    align="end"
    menuWidth="size-3000"
  >
    <Item key="rarely">
      Rarely
    </Item>
    <Item key="sometimes">
      Sometimes
    </Item>
    <Item key="always">
      Always
    </Item>
  </Picker>
   <Picker
    label="Choose animal"
    direction="top"
  >
    <Item key="Emu">
      Emu
    </Item>
    <Item key="Kangaroo">
      Kangaroo
    </Item>
    <Item key="Platypus">
      Platypus
    </Item>
  </Picker>
</Flex>
```

The open state of the menu can be controlled via the `defaultOpen` and `isOpen` props

```
function Example() {
  let [open, setOpen] = React.useState(false);

  return (
    <Picker
      label="Frequency"
      isOpen={open}
      onOpenChange={setOpen}>
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Picker>
  );
}
```

```
function Example() {
  let [open, setOpen] = React.useState(false);

  return (
    <Picker
      label="Frequency"
      isOpen={open}
      onOpenChange={setOpen}>
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Picker>
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
    <Picker
      label="Frequency"
      isOpen={open}
      onOpenChange={setOpen}
    >
      <Item key="rarely">
        Rarely
      </Item>
      <Item key="sometimes">
        Sometimes
      </Item>
      <Item key="always">
        Always
      </Item>
    </Picker>
  );
}
```

* * *

Picker may trigger a [known accessibility false positive](https://github.com/adobe/react-spectrum/wiki/Known-accessibility-false-positives#picker) from automated accessibility testing tools. This is because we include a visually hidden select element alongside the Picker to specifically aid with browser form autocomplete and hide it from screen readers via `aria-hidden` since users don't need to interact with the hidden select. We manage focus internally so that focusing this hidden select will always shift focus to the Picker's trigger button element instead. Automated accessibility testing tools have no way of knowing that we manage the focus in this way and thus throw this false positive.

To facilitate the suppression of this false positive, the `data-a11y-ignore="aria-hidden-focus"` data attribute is automatically applied to the problematic element and references the relevant `AXE` rule. Please use this data attribute to target the problematic element and exclude it from your automated accessibility tests as shown [here](https://react-spectrum.adobe.com/react-aria/accessibility.html#false-positives).

* * *

The Picker features an overlay that transitions in and out of the page as it is opened and closed. Depending on your device configuration, this overlay may render as a tray or a dropdown. Additionally, the Picker features automatic virtualization and may need specific mocks in a test environment to enable said virtualization properly. Please see the following sections in the testing docs for more information on how to handle these behaviors in your test suite.

[Timers](https://react-spectrum.adobe.com/react-spectrum/testing.html#timers)

[Desktop vs Mobile](https://react-spectrum.adobe.com/react-spectrum/testing.html#desktop-vs-mobile)

[Virtualized Components](https://react-spectrum.adobe.com/react-spectrum/testing.html#virtualized-components)

[Long press](https://react-spectrum.adobe.com/react-spectrum/testing.html#simulating-user-long-press)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/picker/test/Picker.test.js) if you find that the above isn't sufficient when resolving issues in your own test cases.

`@react-spectrum/test-utils` offers common select interaction utilities which you may find helpful when writing tests. See [here](https://react-spectrum.adobe.com/react-aria/testing.html#react-aria-test-utils) for more information on how to setup these utilities in your tests. Below is the full definition of the select tester and a sample of how you could use it in your test suite.

```
// Picker.test.ts
import {render} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/Picker.html#testing

it('Picker can select an option via keyboard', async function () {
  // Render your test component/app and initialize the select tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <Picker data-testid="test-select">
        ...
      </Picker>
    </Provider>
  );
  let selectTester = testUtilUser.createTester('Select', {
    root: getByTestId('test-select'),
    interactionType: 'keyboard'
  });
  let trigger = selectTester.trigger;
  expect(trigger).toHaveTextContent('Select…');

  await selectTester.selectOption({ option: 'Cat' });
  expect(trigger).toHaveTextContent('Cat');
});
```

```
// Picker.test.ts
import {render} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/Picker.html#testing

it('Picker can select an option via keyboard', async function () {
  // Render your test component/app and initialize the select tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <Picker data-testid="test-select">
        ...
      </Picker>
    </Provider>
  );
  let selectTester = testUtilUser.createTester('Select', {
    root: getByTestId('test-select'),
    interactionType: 'keyboard'
  });
  let trigger = selectTester.trigger;
  expect(trigger).toHaveTextContent('Select…');

  await selectTester.selectOption({ option: 'Cat' });
  expect(trigger).toHaveTextContent('Cat');
});
```

```
// Picker.test.ts
import {render} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser =
  new User({
    interactionType:
      'mouse'
  });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/Picker.html#testing

it('Picker can select an option via keyboard', async function () {
  // Render your test component/app and initialize the select tester
  let { getByTestId } =
    render(
      <Provider
        theme={defaultTheme}
      >
        <Picker data-testid="test-select">
          ...
        </Picker>
      </Provider>
    );
  let selectTester =
    testUtilUser
      .createTester(
        'Select',
        {
          root:
            getByTestId(
              'test-select'
            ),
          interactionType:
            'keyboard'
        }
      );
  let trigger =
    selectTester.trigger;
  expect(trigger)
    .toHaveTextContent(
      'Select…'
    );

  await selectTester
    .selectOption({
      option: 'Cat'
    });
  expect(trigger)
    .toHaveTextContent(
      'Cat'
    );
});
```

### Properties

Name

Type

Description

`trigger`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the select's trigger.

`listbox`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Returns the select's listbox if present.

`sections`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the select's sections if present.

### Methods

Method

Description

`constructor( (opts: [SelectTesterOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:SelectTesterOpts) )): void`

`setInteractionType( (type: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType'] )): void`

Set the interaction type used by the select tester.

`open( (opts: [SelectOpenOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/select.ts:SelectOpenOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Opens the select. Defaults to using the interaction type set on the select tester.

`close(): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Closes the select.

`findOption( (opts: {  optionIndexOrText: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns a option matching the specified index or text content.

`selectOption( (opts: [SelectTriggerOptionOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/select.ts:SelectTriggerOptionOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Selects the desired select option. Defaults to using the interaction type set on the select tester. If necessary, will open the select dropdown beforehand. The desired option can be targeted via the option's node, the option's text, or the option's index.

`options( (opts: {  element?: [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the select's options if present. Can be filtered to a subsection of the listbox if provided via `element`.
