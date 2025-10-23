---
source: https://react-spectrum.adobe.com/react-spectrum/Tabs.html
date: Thu, 16 Oct 2025 01:27:20 GMT
---

Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.

* * *

```
<Tabs aria-label="History of Ancient Rome">
  <TabList>
    <Item key="FoR">Founding of Rome</Item>
    <Item key="MaR">Monarchy and Republic</Item>
    <Item key="Emp">Empire</Item>
  </TabList>
  <TabPanels>
    <Item key="FoR">
      Arma virumque cano, Troiae qui primus ab oris.
    </Item>
    <Item key="MaR">
      Senatus Populusque Romanus.
    </Item>
    <Item key="Emp">
      Alea jacta est.
    </Item>
  </TabPanels>
</Tabs>
```

```
<Tabs aria-label="History of Ancient Rome">
  <TabList>
    <Item key="FoR">Founding of Rome</Item>
    <Item key="MaR">Monarchy and Republic</Item>
    <Item key="Emp">Empire</Item>
  </TabList>
  <TabPanels>
    <Item key="FoR">
      Arma virumque cano, Troiae qui primus ab oris.
    </Item>
    <Item key="MaR">
      Senatus Populusque Romanus.
    </Item>
    <Item key="Emp">
      Alea jacta est.
    </Item>
  </TabPanels>
</Tabs>
```

```
<Tabs aria-label="History of Ancient Rome">
  <TabList>
    <Item key="FoR">
      Founding of Rome
    </Item>
    <Item key="MaR">
      Monarchy and
      Republic
    </Item>
    <Item key="Emp">
      Empire
    </Item>
  </TabList>
  <TabPanels>
    <Item key="FoR">
      Arma virumque
      cano, Troiae qui
      primus ab oris.
    </Item>
    <Item key="MaR">
      Senatus
      Populusque
      Romanus.
    </Item>
    <Item key="Emp">
      Alea jacta est.
    </Item>
  </TabPanels>
</Tabs>
```

## Content[#](#content)

* * *

Tabs expects `<TabList>` and `<TabPanels>` elements as children, however additional elements may wrap them to allow for layout flexibility. TabList and TabPanels follow the [Collection Components](https://react-spectrum.adobe.com/react-stately/collections.html) API, accepting both static and dynamic collections. TabList and TabPanel accept `<Item>` elements as children, each with a `key` prop. The key passed to the TabList `<Item>` must match its corresponding TabPanel `<Item>`. Static collections, as in the previous example, can be used when the full list of tabs and their contents is known ahead of time.

Dynamic collections, as shown below, can be used when the options come from an external data source such as an API call, or update over time. As seen below, an iterable list of options is passed to the Tabs using the `items` prop. Each item accepts a key prop, which is passed to the `onSelectionChange` handler to identify the selected item. Alternatively, if the item objects contain an `id` property, as shown in the example below, then this is used automatically and a `key` prop is not required. See the [Events](#events) section for more detail on selection.

```
import type {Key} from '@adobe/react-spectrum';

function Example() {
  let tabs = [
    {
      id: 1,
      name: 'Founding of Rome',
      children: 'Arma virumque cano, Troiae qui primus ab oris.'
    },
    {
      id: 2,
      name: 'Monarchy and Republic',
      children: 'Senatus Populusque Romanus.'
    },
    { id: 3, name: 'Empire', children: 'Alea jacta est.' }
  ];
  type Tab = typeof tabs[0];
  let [tabId, setTabId] = React.useState<Key>(1);

  return (
    <>
      <p>Current tab id: {tabId}</p>
      <Tabs
        aria-label="History of Ancient Rome"
        items={tabs}
        onSelectionChange={setTabId}
      >
        <TabList>
          {(item: Tab) => (
            <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: Tab) => (
            <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </>
  );
}
```

```
import type {Key} from '@adobe/react-spectrum';

function Example() {
  let tabs = [
    {
      id: 1,
      name: 'Founding of Rome',
      children:
        'Arma virumque cano, Troiae qui primus ab oris.'
    },
    {
      id: 2,
      name: 'Monarchy and Republic',
      children: 'Senatus Populusque Romanus.'
    },
    { id: 3, name: 'Empire', children: 'Alea jacta est.' }
  ];
  type Tab = typeof tabs[0];
  let [tabId, setTabId] = React.useState<Key>(1);

  return (
    <>
      <p>Current tab id: {tabId}</p>
      <Tabs
        aria-label="History of Ancient Rome"
        items={tabs}
        onSelectionChange={setTabId}
      >
        <TabList>
          {(item: Tab) => (
            <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: Tab) => (
            <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </>
  );
}
```

```
import type {Key} from '@adobe/react-spectrum';

function Example() {
  let tabs = [
    {
      id: 1,
      name:
        'Founding of Rome',
      children:
        'Arma virumque cano, Troiae qui primus ab oris.'
    },
    {
      id: 2,
      name:
        'Monarchy and Republic',
      children:
        'Senatus Populusque Romanus.'
    },
    {
      id: 3,
      name: 'Empire',
      children:
        'Alea jacta est.'
    }
  ];
  type Tab =
    typeof tabs[0];
  let [tabId, setTabId] =
    React.useState<Key>(
      1
    );

  return (
    <>
      <p>
        Current tab id:
        {' '}
        {tabId}
      </p>
      <Tabs
        aria-label="History of Ancient Rome"
        items={tabs}
        onSelectionChange={setTabId}
      >
        <TabList>
          {(
            item: Tab
          ) => (
            <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(
            item: Tab
          ) => (
            <Item>
              {item
                .children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </>
  );
}
```

To internationalize Tabs, a localized string should be passed as children to the TabList `<Item>`. Any text content within the Tab's panel should also be localized accordingly. For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of Tabs is automatically flipped.

Icons can also be used in `Tabs` in addition to a text label. Tabs use [Slots](https://react-spectrum.adobe.com/react-spectrum/layout.html#slots) in order to style Icons and Text together.

```
<Tabs aria-label="History of Ancient Rome">
  <TabList>
    <Item key="FoR" textValue="FoR">
      <Bookmark />
      <Text>Founding of Rome</Text>
    </Item>
    <Item key="MaR" textValue="MaR">
      <Calendar />
      <Text>Monarchy and Republic</Text>
    </Item>
    <Item key="Emp" textValue="Emp">
      <Dashboard />
      <Text>Empire</Text>
    </Item>
  </TabList>
  <TabPanels>
    <Item key="FoR">
      Arma virumque cano, Troiae qui primus ab oris.
    </Item>
    <Item key="MaR">
      Senatus Populusque Romanus.
    </Item>
    <Item key="Emp">
      Alea jacta est.
    </Item>
  </TabPanels>
</Tabs>
```

```
<Tabs aria-label="History of Ancient Rome">
  <TabList>
    <Item key="FoR" textValue="FoR">
      <Bookmark />
      <Text>Founding of Rome</Text>
    </Item>
    <Item key="MaR" textValue="MaR">
      <Calendar />
      <Text>Monarchy and Republic</Text>
    </Item>
    <Item key="Emp" textValue="Emp">
      <Dashboard />
      <Text>Empire</Text>
    </Item>
  </TabList>
  <TabPanels>
    <Item key="FoR">
      Arma virumque cano, Troiae qui primus ab oris.
    </Item>
    <Item key="MaR">
      Senatus Populusque Romanus.
    </Item>
    <Item key="Emp">
      Alea jacta est.
    </Item>
  </TabPanels>
</Tabs>
```

```
<Tabs aria-label="History of Ancient Rome">
  <TabList>
    <Item
      key="FoR"
      textValue="FoR"
    >
      <Bookmark />
      <Text>
        Founding of
        Rome
      </Text>
    </Item>
    <Item
      key="MaR"
      textValue="MaR"
    >
      <Calendar />
      <Text>
        Monarchy and
        Republic
      </Text>
    </Item>
    <Item
      key="Emp"
      textValue="Emp"
    >
      <Dashboard />
      <Text>
        Empire
      </Text>
    </Item>
  </TabList>
  <TabPanels>
    <Item key="FoR">
      Arma virumque
      cano, Troiae qui
      primus ab oris.
    </Item>
    <Item key="MaR">
      Senatus
      Populusque
      Romanus.
    </Item>
    <Item key="Emp">
      Alea jacta est.
    </Item>
  </TabPanels>
</Tabs>
```

If you need to add additional structure to `Tabs` such as buttons in-line with the `TabList`, we support this too. `TabList` and `TabPanels` are not required to be the immediate children of `Tabs`.

```
function Example() {
  let [tabs, setTabs] = React.useState([
    { name: 'Tab 1', children: 'Tab Body 1' },
    { name: 'Tab 2', children: 'Tab Body 2' },
    { name: 'Tab 3', children: 'Tab Body 3' }
  ]);
  type Tab = typeof tabs[0];

  let addTab = () => {
    let newTabs = [...tabs];
    newTabs.push({
      name: `Tab ${tabs.length + 1}`,
      children: `Tab Body ${tabs.length + 1}`
    });

    setTabs(newTabs);
  };

  let removeTab = () => {
    if (tabs.length > 1) {
      let newTabs = [...tabs];
      newTabs.pop();
      setTabs(newTabs);
    }
  };

  return (
    <Tabs aria-label="Tab example" items={tabs}>
      <Flex>
        <TabList flex="1 1 auto" minWidth="0px">
          {(item: Tab) => (
            <Item key={item.name}>
              {item.name}
            </Item>
          )}
        </TabList>
        <div
          style={{
            display: 'flex',
            flex: '0 0 auto',
            borderBottom:
              'var(--spectrum-alias-border-size-thick) solid var(--spectrum-global-color-gray-300)'
          }}
        >
          <ActionGroup
            disabledKeys={tabs.length === 1 ? ['remove'] : undefined}
            onAction={(val) => val === 'add' ? addTab() : removeTab()}
          >
            <Item key="add">
              Add Tab
            </Item>
            <Item key="remove">
              Remove Tab
            </Item>
          </ActionGroup>
        </div>
      </Flex>
      <TabPanels>
        {(item: Tab) => (
          <Item key={item.name}>
            {item.children}
          </Item>
        )}
      </TabPanels>
    </Tabs>
  );
}
```

```
function Example() {
  let [tabs, setTabs] = React.useState([
    { name: 'Tab 1', children: 'Tab Body 1' },
    { name: 'Tab 2', children: 'Tab Body 2' },
    { name: 'Tab 3', children: 'Tab Body 3' }
  ]);
  type Tab = typeof tabs[0];

  let addTab = () => {
    let newTabs = [...tabs];
    newTabs.push({
      name: `Tab ${tabs.length + 1}`,
      children: `Tab Body ${tabs.length + 1}`
    });

    setTabs(newTabs);
  };

  let removeTab = () => {
    if (tabs.length > 1) {
      let newTabs = [...tabs];
      newTabs.pop();
      setTabs(newTabs);
    }
  };

  return (
    <Tabs aria-label="Tab example" items={tabs}>
      <Flex>
        <TabList flex="1 1 auto" minWidth="0px">
          {(item: Tab) => (
            <Item key={item.name}>
              {item.name}
            </Item>
          )}
        </TabList>
        <div
          style={{
            display: 'flex',
            flex: '0 0 auto',
            borderBottom:
              'var(--spectrum-alias-border-size-thick) solid var(--spectrum-global-color-gray-300)'
          }}
        >
          <ActionGroup
            disabledKeys={tabs.length === 1
              ? ['remove']
              : undefined}
            onAction={(val) =>
              val === 'add' ? addTab() : removeTab()}
          >
            <Item key="add">
              Add Tab
            </Item>
            <Item key="remove">
              Remove Tab
            </Item>
          </ActionGroup>
        </div>
      </Flex>
      <TabPanels>
        {(item: Tab) => (
          <Item key={item.name}>
            {item.children}
          </Item>
        )}
      </TabPanels>
    </Tabs>
  );
}
```

```
function Example() {
  let [tabs, setTabs] =
    React.useState([
      {
        name: 'Tab 1',
        children:
          'Tab Body 1'
      },
      {
        name: 'Tab 2',
        children:
          'Tab Body 2'
      },
      {
        name: 'Tab 3',
        children:
          'Tab Body 3'
      }
    ]);
  type Tab =
    typeof tabs[0];

  let addTab = () => {
    let newTabs = [
      ...tabs
    ];
    newTabs.push({
      name: `Tab ${
        tabs.length + 1
      }`,
      children:
        `Tab Body ${
          tabs.length + 1
        }`
    });

    setTabs(newTabs);
  };

  let removeTab = () => {
    if (
      tabs.length > 1
    ) {
      let newTabs = [
        ...tabs
      ];
      newTabs.pop();
      setTabs(newTabs);
    }
  };

  return (
    <Tabs
      aria-label="Tab example"
      items={tabs}
    >
      <Flex>
        <TabList
          flex="1 1 auto"
          minWidth="0px"
        >
          {(
            item: Tab
          ) => (
            <Item
              key={item
                .name}
            >
              {item.name}
            </Item>
          )}
        </TabList>
        <div
          style={{
            display:
              'flex',
            flex:
              '0 0 auto',
            borderBottom:
              'var(--spectrum-alias-border-size-thick) solid var(--spectrum-global-color-gray-300)'
          }}
        >
          <ActionGroup
            disabledKeys={tabs
                .length ===
                1
              ? [
                'remove'
              ]
              : undefined}
            onAction={(val) =>
              val ===
                  'add'
                ? addTab()
                : removeTab()}
          >
            <Item key="add">
              Add Tab
            </Item>
            <Item key="remove">
              Remove Tab
            </Item>
          </ActionGroup>
        </div>
      </Flex>
      <TabPanels>
        {(item: Tab) => (
          <Item
            key={item
              .name}
          >
            {item
              .children}
          </Item>
        )}
      </TabPanels>
    </Tabs>
  );
}
```

* * *

While an `aria-label` is not explicitly required for a tab list, Tabs should be labeled using a `aria-label` in the absence of an ancestor [landmark](https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page). This will prevent screen readers from announcing non-focused tabs, allowing for a more focused experience.

* * *

Setting a selected tab can be done by using the `defaultSelectedKey` or `selectedKey` prop. The selected key corresponds to the `key` of an item. See [Events](#events) for more details on selection events. Additionally, see the `react-stately` [Selection docs](https://react-spectrum.adobe.com/react-stately/selection.html#selected-key-data-type) for caveats regarding selection prop typing.

```
function Example() {
  let tabs = [
    { id: 1, name: 'Keyboard Settings', children: 'No keyboard detected.' },
    { id: 2, name: 'Mouse Settings', children: 'No mouse detected.' },
    { id: 3, name: 'Gamepad Settings', children: 'No gamepad detected' }
  ];
  type Tab = typeof tabs[0];
  let [tab, setTab] = React.useState<Key>(2);

  return (
    <Flex gap="size-150" wrap>
      <span id="label-2">Settings (uncontrolled)</span>
      <Tabs
        aria-labelledby="label-2"
        items={tabs}
        defaultSelectedKey={2}
        marginBottom="size-400"
      >
        <TabList>
          {(item: Tab) => (
            <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: Tab) => (
            <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
      <span id="label-3">Settings (controlled)</span>
      <Tabs
        aria-labelledby="label-3"
        items={tabs}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <TabList>
          {(item: Tab) => (
            <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: Tab) => (
            <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
```

```
function Example() {
  let tabs = [
    {
      id: 1,
      name: 'Keyboard Settings',
      children: 'No keyboard detected.'
    },
    {
      id: 2,
      name: 'Mouse Settings',
      children: 'No mouse detected.'
    },
    {
      id: 3,
      name: 'Gamepad Settings',
      children: 'No gamepad detected'
    }
  ];
  type Tab = typeof tabs[0];
  let [tab, setTab] = React.useState<Key>(2);

  return (
    <Flex gap="size-150" wrap>
      <span id="label-2">Settings (uncontrolled)</span>
      <Tabs
        aria-labelledby="label-2"
        items={tabs}
        defaultSelectedKey={2}
        marginBottom="size-400"
      >
        <TabList>
          {(item: Tab) => (
            <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: Tab) => (
            <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
      <span id="label-3">Settings (controlled)</span>
      <Tabs
        aria-labelledby="label-3"
        items={tabs}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <TabList>
          {(item: Tab) => (
            <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: Tab) => (
            <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
```

```
function Example() {
  let tabs = [
    {
      id: 1,
      name:
        'Keyboard Settings',
      children:
        'No keyboard detected.'
    },
    {
      id: 2,
      name:
        'Mouse Settings',
      children:
        'No mouse detected.'
    },
    {
      id: 3,
      name:
        'Gamepad Settings',
      children:
        'No gamepad detected'
    }
  ];
  type Tab =
    typeof tabs[0];
  let [tab, setTab] =
    React.useState<Key>(
      2
    );

  return (
    <Flex
      gap="size-150"
      wrap
    >
      <span id="label-2">
        Settings
        (uncontrolled)
      </span>
      <Tabs
        aria-labelledby="label-2"
        items={tabs}
        defaultSelectedKey={2}
        marginBottom="size-400"
      >
        <TabList>
          {(
            item: Tab
          ) => (
            <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(
            item: Tab
          ) => (
            <Item>
              {item
                .children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
      <span id="label-3">
        Settings
        (controlled)
      </span>
      <Tabs
        aria-labelledby="label-3"
        items={tabs}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <TabList>
          {(
            item: Tab
          ) => (
            <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(
            item: Tab
          ) => (
            <Item>
              {item
                .children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
```

* * *

Tabs supports selection via mouse, keyboard, and touch. You can handle all of these via the `onSelectionChange` prop. Tabs will pass the selected `key` to the `onSelectionChange` handler.

The following example uses an `onSelectionChange` handler to update the tab selection stored in React state.

```
function Example() {
  let tabs = [
    {
      name: 'Triassic',
      children:
        'The Triassic ranges roughly from 252 million to 201 million years ago, preceding the Jurassic Period.'
    },
    {
      name: 'Jurassic',
      children:
        'The Jurassic ranges from 200 million years to 145 million years ago.'
    },
    {
      name: 'Cretaceous',
      children:
        'The Cretaceous is the longest period of the Mesozoic, spanning from 145 million to 66 million years ago.'
    }
  ];
  type Tab = typeof tabs[0];
  let [timePeriod, setTimePeriod] = React.useState<Key>('Triassic');

  return (
    <>
      <p>Selected time period: {timePeriod}</p>
      <Tabs
        aria-label="Mesozoic time periods"
        items={tabs}
        selectedKey={timePeriod}
        onSelectionChange={setTimePeriod}
      >
        <TabList>
          {(item: Tab) => (
            <Item key={item.name}>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: Tab) => (
            <Item key={item.name}>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </>
  );
}
```

```
function Example() {
  let tabs = [
    {
      name: 'Triassic',
      children:
        'The Triassic ranges roughly from 252 million to 201 million years ago, preceding the Jurassic Period.'
    },
    {
      name: 'Jurassic',
      children:
        'The Jurassic ranges from 200 million years to 145 million years ago.'
    },
    {
      name: 'Cretaceous',
      children:
        'The Cretaceous is the longest period of the Mesozoic, spanning from 145 million to 66 million years ago.'
    }
  ];
  type Tab = typeof tabs[0];
  let [timePeriod, setTimePeriod] = React.useState<Key>(
    'Triassic'
  );

  return (
    <>
      <p>Selected time period: {timePeriod}</p>
      <Tabs
        aria-label="Mesozoic time periods"
        items={tabs}
        selectedKey={timePeriod}
        onSelectionChange={setTimePeriod}
      >
        <TabList>
          {(item: Tab) => (
            <Item key={item.name}>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: Tab) => (
            <Item key={item.name}>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </>
  );
}
```

```
function Example() {
  let tabs = [
    {
      name: 'Triassic',
      children:
        'The Triassic ranges roughly from 252 million to 201 million years ago, preceding the Jurassic Period.'
    },
    {
      name: 'Jurassic',
      children:
        'The Jurassic ranges from 200 million years to 145 million years ago.'
    },
    {
      name: 'Cretaceous',
      children:
        'The Cretaceous is the longest period of the Mesozoic, spanning from 145 million to 66 million years ago.'
    }
  ];
  type Tab =
    typeof tabs[0];
  let [
    timePeriod,
    setTimePeriod
  ] = React.useState<
    Key
  >('Triassic');

  return (
    <>
      <p>
        Selected time
        period:{' '}
        {timePeriod}
      </p>
      <Tabs
        aria-label="Mesozoic time periods"
        items={tabs}
        selectedKey={timePeriod}
        onSelectionChange={setTimePeriod}
      >
        <TabList>
          {(
            item: Tab
          ) => (
            <Item
              key={item
                .name}
            >
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(
            item: Tab
          ) => (
            <Item
              key={item
                .name}
            >
              {item
                .children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </>
  );
}
```

By default, pressing the arrow keys while focus is on a Tab will switch selection to the adjacent Tab in that direction, updating the content displayed accordingly. If you would like to prevent selection change from happening automatically you can set the `keyboardActivation` prop to "manual". This will prevent tab selection from changing on arrow key press, requiring a subsequent `Enter` or `Space` key press to confirm tab selection.

```
function Example() {
  let tabs = [
    {
      name: 'Triassic',
      children:
        'The Triassic ranges roughly from 252 million to 201 million years ago, preceding the Jurassic Period.'
    },
    {
      name: 'Jurassic',
      children:
        'The Jurassic ranges from 200 million years to 145 million years ago.'
    },
    {
      name: 'Cretaceous',
      children:
        'The Cretaceous is the longest period of the Mesozoic, spanning from 145 million to 66 million years ago.'
    }
  ];
  type Tab = typeof tabs[0];

  return (
    <Tabs
      aria-label="Mesozoic time periods"
      items={tabs}
      keyboardActivation="manual"
    >
      <TabList>
        {(item: Tab) => (
          <Item key={item.name}>
            {item.name}
          </Item>
        )}
      </TabList>
      <TabPanels>
        {(item: Tab) => (
          <Item key={item.name}>
            {item.children}
          </Item>
        )}
      </TabPanels>
    </Tabs>
  );
}
```

```
function Example() {
  let tabs = [
    {
      name: 'Triassic',
      children:
        'The Triassic ranges roughly from 252 million to 201 million years ago, preceding the Jurassic Period.'
    },
    {
      name: 'Jurassic',
      children:
        'The Jurassic ranges from 200 million years to 145 million years ago.'
    },
    {
      name: 'Cretaceous',
      children:
        'The Cretaceous is the longest period of the Mesozoic, spanning from 145 million to 66 million years ago.'
    }
  ];
  type Tab = typeof tabs[0];

  return (
    <Tabs
      aria-label="Mesozoic time periods"
      items={tabs}
      keyboardActivation="manual"
    >
      <TabList>
        {(item: Tab) => (
          <Item key={item.name}>
            {item.name}
          </Item>
        )}
      </TabList>
      <TabPanels>
        {(item: Tab) => (
          <Item key={item.name}>
            {item.children}
          </Item>
        )}
      </TabPanels>
    </Tabs>
  );
}
```

```
function Example() {
  let tabs = [
    {
      name: 'Triassic',
      children:
        'The Triassic ranges roughly from 252 million to 201 million years ago, preceding the Jurassic Period.'
    },
    {
      name: 'Jurassic',
      children:
        'The Jurassic ranges from 200 million years to 145 million years ago.'
    },
    {
      name: 'Cretaceous',
      children:
        'The Cretaceous is the longest period of the Mesozoic, spanning from 145 million to 66 million years ago.'
    }
  ];
  type Tab =
    typeof tabs[0];

  return (
    <Tabs
      aria-label="Mesozoic time periods"
      items={tabs}
      keyboardActivation="manual"
    >
      <TabList>
        {(item: Tab) => (
          <Item
            key={item
              .name}
          >
            {item.name}
          </Item>
        )}
      </TabList>
      <TabPanels>
        {(item: Tab) => (
          <Item
            key={item
              .name}
          >
            {item
              .children}
          </Item>
        )}
      </TabPanels>
    </Tabs>
  );
}
```

* * *

Tabs may be rendered as links to different routes in your application. This can be achieved by passing the `href` prop to the `<Item>` component. By default, links perform native browser navigation. However, you'll usually want to synchronize the selected tab with the URL from your client side router. This takes two steps:

1.  Set up a `[RouterProvider](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/openLink.tsx:RouterProvider)` at the root of your app. This will handle link navigation from all React Aria components using your framework or router. See the [client side routing guide](https://react-spectrum.adobe.com/react-spectrum/routing.html) to learn how to set this up.
2.  Use the `selectedKey` prop to set the selected tab based on the URL, as [described above](#selection).

This example uses [React Router](https://reactrouter.com/en/main) to setup routes for each tab and synchronize the selection with the URL.

```
import {BrowserRouter, Outlet, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {RouterProvider} from '@adobe/react-spectrum';

function AppTabs() {
  let { pathname } = useLocation();

  return (
    <Tabs selectedKey={pathname}>
      <TabList aria-label="Tabs">
        <Item key="/" href="/">Home</Item>
        <Item key="/shared" href="/shared">Shared</Item>
        <Item key="/deleted" href="/deleted">Deleted</Item>
      </TabList>
      <TabPanels>
        <Item key="/">
          <Outlet />
        </Item>
        <Item key="/shared">
          <Outlet />
        </Item>
        <Item key="/deleted">
          <Outlet />
        </Item>
      </TabPanels>
    </Tabs>
  );
}

function App() {
  let navigate = useNavigate();
  return (
    <RouterProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<AppTabs />}>
          <Route index element={<HomePage />} />
          <Route path="/shared" element={<SharedPage />} />
          <Route path="/deleted" element={<DeletedPage />} />
        </Route>
      </Routes>
    </RouterProvider>
  );
}

<BrowserRouter>
  <App />
</BrowserRouter>
```

```
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate
} from 'react-router-dom';
import {RouterProvider} from '@adobe/react-spectrum';

function AppTabs() {
  let { pathname } = useLocation();

  return (
    <Tabs selectedKey={pathname}>
      <TabList aria-label="Tabs">
        <Item key="/" href="/">Home</Item>
        <Item key="/shared" href="/shared">Shared</Item>
        <Item key="/deleted" href="/deleted">Deleted</Item>
      </TabList>
      <TabPanels>
        <Item key="/">
          <Outlet />
        </Item>
        <Item key="/shared">
          <Outlet />
        </Item>
        <Item key="/deleted">
          <Outlet />
        </Item>
      </TabPanels>
    </Tabs>
  );
}

function App() {
  let navigate = useNavigate();
  return (
    <RouterProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<AppTabs />}>
          <Route index element={<HomePage />} />
          <Route path="/shared" element={<SharedPage />} />
          <Route
            path="/deleted"
            element={<DeletedPage />}
          />
        </Route>
      </Routes>
    </RouterProvider>
  );
}

<BrowserRouter>
  <App />
</BrowserRouter>
```

```
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate
} from 'react-router-dom';
import {RouterProvider} from '@adobe/react-spectrum';

function AppTabs() {
  let { pathname } =
    useLocation();

  return (
    <Tabs
      selectedKey={pathname}
    >
      <TabList aria-label="Tabs">
        <Item
          key="/"
          href="/"
        >
          Home
        </Item>
        <Item
          key="/shared"
          href="/shared"
        >
          Shared
        </Item>
        <Item
          key="/deleted"
          href="/deleted"
        >
          Deleted
        </Item>
      </TabList>
      <TabPanels>
        <Item key="/">
          <Outlet />
        </Item>
        <Item key="/shared">
          <Outlet />
        </Item>
        <Item key="/deleted">
          <Outlet />
        </Item>
      </TabPanels>
    </Tabs>
  );
}

function App() {
  let navigate =
    useNavigate();
  return (
    <RouterProvider
      navigate={navigate}
    >
      <Routes>
        <Route
          path="/"
          element={
            <AppTabs />
          }
        >
          <Route
            index
            element={
              <HomePage />
            }
          />
          <Route
            path="/shared"
            element={
              <SharedPage />
            }
          />
          <Route
            path="/deleted"
            element={
              <DeletedPage />
            }
          />
        </Route>
      </Routes>
    </RouterProvider>
  );
}

<BrowserRouter>
  <App />
</BrowserRouter>
```

* * *

Name

Type

Default

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The children of the `<Tabs>` element. Should include `<TabList>` and `<TabPanels>` elements.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

—

The item objects for each tab, for dynamic collections.

`disabledKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The keys of the tabs that are disabled. These tabs cannot be selected, focused, or otherwise interacted with.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the Tabs are disabled.

`isQuiet`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the tabs are displayed in a quiet style.

`isEmphasized`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the tabs are displayed in an emphasized style.

`density`

`'compact' | 'regular'`

—

The amount of space between the tabs.

`keyboardActivation`

`'automatic' | 'manual'`

`'automatic'`

Whether tabs are activated automatically on focus or manually.

`orientation`

`[Orientation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/orientation.d.ts:Orientation)`

`'horizontal'`

The orientation of the tabs.

`disallowEmptySelection`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the collection allows empty selection.

`selectedKey`

`[Key](https://reactjs.org/docs/lists-and-keys.html) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The currently selected key in the collection (controlled).

`defaultSelectedKey`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

—

The initial selected key in the collection (uncontrolled).

Events

Name

Type

Description

`onSelectionChange`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) )) => void`

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

`[CollectionChildren](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:CollectionChildren)<T>`

The tab items to display. Item keys should match the key of the corresponding `<Item>` within the `<TabPanels>` element.

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

Description

`children`

`[CollectionChildren](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:CollectionChildren)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

The contents of each tab. Item keys should match the key of the corresponding `<Item>` within the `<TabList>` element.

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

[View guidelines](https://spectrum.adobe.com/page/tabs/#Density)

```
<Tabs aria-label="Chat log density example" density="compact">
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
```

```
<Tabs
  aria-label="Chat log density example"
  density="compact"
>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
```

```
<Tabs
  aria-label="Chat log density example"
  density="compact"
>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior
      chat history with
      John Doe.
    </Item>
    <Item key="item2">
      There is no prior
      chat history with
      Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior
      chat history with
      Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
```

[View guidelines](https://spectrum.adobe.com/page/tabs/#Quiet)

```
<Tabs aria-label="Chat log quiet example" isQuiet>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
```

```
<Tabs aria-label="Chat log quiet example" isQuiet>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
```

```
<Tabs
  aria-label="Chat log quiet example"
  isQuiet
>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior
      chat history with
      John Doe.
    </Item>
    <Item key="item2">
      There is no prior
      chat history with
      Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior
      chat history with
      Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
```

[View guidelines](https://spectrum.adobe.com/page/tabs/#Disabled)

```
<Flex direction="column" rowGap="size-150">
  <Tabs
    aria-label="Chat log single tab disabled example"
    disabledKeys={['item2']}
  >
    <TabList>
      <Item key="item1">
        John Doe
      </Item>
      <Item key="item2">
        Jane Doe
      </Item>
      <Item key="item3">
        Joe Bloggs
      </Item>
    </TabList>
    <TabPanels>
      <Item key="item1">
        There is no prior chat history with John Doe.
      </Item>
      <Item key="item2">
        There is no prior chat history with Jane Doe.
      </Item>
      <Item key="item3">
        There is no prior chat history with Joe Bloggs.
      </Item>
    </TabPanels>
  </Tabs>
  <Tabs aria-label="Chat log all tabs disabled example" isDisabled>
    <TabList>
      <Item key="item1">
        John Doe
      </Item>
      <Item key="item2">
        Jane Doe
      </Item>
      <Item key="item3">
        Joe Bloggs
      </Item>
    </TabList>
    <TabPanels>
      <Item key="item1">
        There is no prior chat history with John Doe.
      </Item>
      <Item key="item2">
        There is no prior chat history with Jane Doe.
      </Item>
      <Item key="item3">
        There is no prior chat history with Joe Bloggs.
      </Item>
    </TabPanels>
  </Tabs>
</Flex>
```

```
<Flex direction="column" rowGap="size-150">
  <Tabs
    aria-label="Chat log single tab disabled example"
    disabledKeys={['item2']}
  >
    <TabList>
      <Item key="item1">
        John Doe
      </Item>
      <Item key="item2">
        Jane Doe
      </Item>
      <Item key="item3">
        Joe Bloggs
      </Item>
    </TabList>
    <TabPanels>
      <Item key="item1">
        There is no prior chat history with John Doe.
      </Item>
      <Item key="item2">
        There is no prior chat history with Jane Doe.
      </Item>
      <Item key="item3">
        There is no prior chat history with Joe Bloggs.
      </Item>
    </TabPanels>
  </Tabs>
  <Tabs
    aria-label="Chat log all tabs disabled example"
    isDisabled
  >
    <TabList>
      <Item key="item1">
        John Doe
      </Item>
      <Item key="item2">
        Jane Doe
      </Item>
      <Item key="item3">
        Joe Bloggs
      </Item>
    </TabList>
    <TabPanels>
      <Item key="item1">
        There is no prior chat history with John Doe.
      </Item>
      <Item key="item2">
        There is no prior chat history with Jane Doe.
      </Item>
      <Item key="item3">
        There is no prior chat history with Joe Bloggs.
      </Item>
    </TabPanels>
  </Tabs>
</Flex>
```

```
<Flex
  direction="column"
  rowGap="size-150"
>
  <Tabs
    aria-label="Chat log single tab disabled example"
    disabledKeys={[
      'item2'
    ]}
  >
    <TabList>
      <Item key="item1">
        John Doe
      </Item>
      <Item key="item2">
        Jane Doe
      </Item>
      <Item key="item3">
        Joe Bloggs
      </Item>
    </TabList>
    <TabPanels>
      <Item key="item1">
        There is no
        prior chat
        history with
        John Doe.
      </Item>
      <Item key="item2">
        There is no
        prior chat
        history with
        Jane Doe.
      </Item>
      <Item key="item3">
        There is no
        prior chat
        history with
        Joe Bloggs.
      </Item>
    </TabPanels>
  </Tabs>
  <Tabs
    aria-label="Chat log all tabs disabled example"
    isDisabled
  >
    <TabList>
      <Item key="item1">
        John Doe
      </Item>
      <Item key="item2">
        Jane Doe
      </Item>
      <Item key="item3">
        Joe Bloggs
      </Item>
    </TabList>
    <TabPanels>
      <Item key="item1">
        There is no
        prior chat
        history with
        John Doe.
      </Item>
      <Item key="item2">
        There is no
        prior chat
        history with
        Jane Doe.
      </Item>
      <Item key="item3">
        There is no
        prior chat
        history with
        Joe Bloggs.
      </Item>
    </TabPanels>
  </Tabs>
</Flex>
```

[View guidelines](https://spectrum.adobe.com/page/tabs/#Orientation)

By default, tabs are horizontally oriented. The `orientation` prop can be set to `vertical` to change this. This does not affect keyboard navigation.

```
<Tabs aria-label="Chat log orientation example" orientation="vertical">
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
```

```
<Tabs
  aria-label="Chat log orientation example"
  orientation="vertical"
>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
```

```
<Tabs
  aria-label="Chat log orientation example"
  orientation="vertical"
>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior
      chat history with
      John Doe.
    </Item>
    <Item key="item2">
      There is no prior
      chat history with
      Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior
      chat history with
      Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
```

[View guidelines](https://spectrum.adobe.com/page/tabs/#Too-many-tabs)

If there isn't enough horizontal room to render every tab on a single line, the component will collapse all tabs into a `Picker`. Note that this does not apply to vertical Tabs.

Try the example below to see the above behavior.

```
function Example() {
  let [collapse, setCollapse] = React.useState(false);

  return (
    <>
      <div
        style={{
          width: collapse ? '150px' : '300px',
          marginBottom: '50px',
          height: '150px',
          maxWidth: '100%'
        }}
      >
        <Tabs aria-label="Chat log collapse example">
          <TabList>
            <Item key="item1">
              John Doe
            </Item>
            <Item key="item2">
              Jane Doe
            </Item>
            <Item key="item3">
              Joe Bloggs
            </Item>
          </TabList>
          <TabPanels>
            <Item key="item1">
              There is no prior chat history with John Doe.
            </Item>
            <Item key="item2">
              There is no prior chat history with Jane Doe.
            </Item>
            <Item key="item3">
              There is no prior chat history with Joe Bloggs.
            </Item>
          </TabPanels>
        </Tabs>
      </div>
      <Button
        variant="primary"
        onPress={() => setCollapse((collapse) => !collapse)}
      >
        Toggle tab container size.
      </Button>
    </>
  );
}
```

```
function Example() {
  let [collapse, setCollapse] = React.useState(false);

  return (
    <>
      <div
        style={{
          width: collapse ? '150px' : '300px',
          marginBottom: '50px',
          height: '150px',
          maxWidth: '100%'
        }}
      >
        <Tabs aria-label="Chat log collapse example">
          <TabList>
            <Item key="item1">
              John Doe
            </Item>
            <Item key="item2">
              Jane Doe
            </Item>
            <Item key="item3">
              Joe Bloggs
            </Item>
          </TabList>
          <TabPanels>
            <Item key="item1">
              There is no prior chat history with John Doe.
            </Item>
            <Item key="item2">
              There is no prior chat history with Jane Doe.
            </Item>
            <Item key="item3">
              There is no prior chat history with Joe
              Bloggs.
            </Item>
          </TabPanels>
        </Tabs>
      </div>
      <Button
        variant="primary"
        onPress={() => setCollapse((collapse) => !collapse)}
      >
        Toggle tab container size.
      </Button>
    </>
  );
}
```

```
function Example() {
  let [
    collapse,
    setCollapse
  ] = React.useState(
    false
  );

  return (
    <>
      <div
        style={{
          width: collapse
            ? '150px'
            : '300px',
          marginBottom:
            '50px',
          height:
            '150px',
          maxWidth:
            '100%'
        }}
      >
        <Tabs aria-label="Chat log collapse example">
          <TabList>
            <Item key="item1">
              John Doe
            </Item>
            <Item key="item2">
              Jane Doe
            </Item>
            <Item key="item3">
              Joe Bloggs
            </Item>
          </TabList>
          <TabPanels>
            <Item key="item1">
              There is no
              prior chat
              history
              with John
              Doe.
            </Item>
            <Item key="item2">
              There is no
              prior chat
              history
              with Jane
              Doe.
            </Item>
            <Item key="item3">
              There is no
              prior chat
              history
              with Joe
              Bloggs.
            </Item>
          </TabPanels>
        </Tabs>
      </div>
      <Button
        variant="primary"
        onPress={() =>
          setCollapse((
            collapse
          ) =>
            !collapse
          )}
      >
        Toggle tab
        container size.
      </Button>
    </>
  );
}
```

[View guidelines](https://spectrum.adobe.com/page/tabs/#Emphasis)

```
<Tabs aria-label="Chat log emphasized example" isEmphasized>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
```

```
<Tabs aria-label="Chat log emphasized example" isEmphasized>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
```

```
<Tabs
  aria-label="Chat log emphasized example"
  isEmphasized
>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior
      chat history with
      John Doe.
    </Item>
    <Item key="item2">
      There is no prior
      chat history with
      Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior
      chat history with
      Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
```

* * *

Tabs features automatic tab collapse behavior and may need specific mocks to test said behavior. Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/326f48154e301edab425c8198c5c3af72422462b/packages/%40react-spectrum/tabs/test/Tabs.test.js#L58-L62) if you run into any issues with your tests.

`@react-spectrum/test-utils` offers common tabs interaction utilities which you may find helpful when writing tests. See [here](https://react-spectrum.adobe.com/react-aria/testing.html#react-aria-test-utils) for more information on how to setup these utilities in your tests. Below is the full definition of the tabs tester and a sample of how you could use it in your test suite.

```
// Tabs.test.ts
import {render} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/Tabs.html#testing

it('Tabs can change selection via keyboard', async function () {
  // Render your test component/app and initialize the listbox tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <Tabs data-testid="test-tabs">
        ...
      </Tabs>
    </Provider>
  );
  let tabsTester = testUtilUser.createTester('Tabs', {
    root: getByTestId('test-tabs'),
    interactionType: 'keyboard'
  });

  let tabs = tabsTester.tabs;
  expect(tabsTester.selectedTab).toBe(tabs[0]);

  await tabsTester.triggerTab({ tab: 1 });
  expect(tabsTester.selectedTab).toBe(tabs[1]);
});
```

```
// Tabs.test.ts
import {render} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/Tabs.html#testing

it('Tabs can change selection via keyboard', async function () {
  // Render your test component/app and initialize the listbox tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <Tabs data-testid="test-tabs">
        ...
      </Tabs>
    </Provider>
  );
  let tabsTester = testUtilUser.createTester('Tabs', {
    root: getByTestId('test-tabs'),
    interactionType: 'keyboard'
  });

  let tabs = tabsTester.tabs;
  expect(tabsTester.selectedTab).toBe(tabs[0]);

  await tabsTester.triggerTab({ tab: 1 });
  expect(tabsTester.selectedTab).toBe(tabs[1]);
});
```

```
// Tabs.test.ts
import {render} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser =
  new User({
    interactionType:
      'mouse'
  });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/Tabs.html#testing

it('Tabs can change selection via keyboard', async function () {
  // Render your test component/app and initialize the listbox tester
  let { getByTestId } =
    render(
      <Provider
        theme={defaultTheme}
      >
        <Tabs data-testid="test-tabs">
          ...
        </Tabs>
      </Provider>
    );
  let tabsTester =
    testUtilUser
      .createTester(
        'Tabs',
        {
          root:
            getByTestId(
              'test-tabs'
            ),
          interactionType:
            'keyboard'
        }
      );

  let tabs =
    tabsTester.tabs;
  expect(
    tabsTester
      .selectedTab
  ).toBe(tabs[0]);

  await tabsTester
    .triggerTab({
      tab: 1
    });
  expect(
    tabsTester
      .selectedTab
  ).toBe(tabs[1]);
});
```

### Properties

Name

Type

Description

`tablist`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the tablist.

`tabpanels`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the tabpanels.

`tabs`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the tabs in the tablist.

`selectedTab`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Returns the currently selected tab in the tablist if any.

`activeTabpanel`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Returns the currently active tabpanel if any.

### Methods

Method

Description

`constructor( (opts: [TabsTesterOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:TabsTesterOpts) )): void`

`setInteractionType( (type: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType'] )): void`

Set the interaction type used by the tabs tester.

`findTab( (opts: {  tabIndexOrText: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns a tab matching the specified index or text content.

`triggerTab( (opts: [TriggerTabOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/tabs.ts:TriggerTabOptions) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Triggers the specified tab. Defaults to using the interaction type set on the tabs tester.
