---
source: https://react-spectrum.adobe.com/react-spectrum/ComboBox.html
date: Thu, 16 Oct 2025 01:30:01 GMT
---

ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.

* * *

```
<ComboBox label="Favorite Animal">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox label="Favorite Animal">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox label="Favorite Animal">
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
```

## Content[#](#content)

* * *

ComboBox follows the [Collection Components](https://react-spectrum.adobe.com/react-stately/collections.html) API, accepting both static and dynamic collections. Similar to [Picker](https://react-spectrum.adobe.com/react-spectrum/Picker.html), ComboBox accepts `<Item>` elements as children, each with a `key` prop. Basic usage of ComboBox, seen in the example above, shows multiple options populated with a string. Static collections, as in this example, can be used when the full list of options is known ahead of time.

Dynamic collections, as shown below, can be used when the options come from an external data source such as an API call, or update over time. Providing the data in this way allows ComboBox to automatically cache the rendering of each item, which dramatically improves performance.

As seen below, an iterable list of options is passed to the ComboBox using the `defaultItems` prop. Each item accepts a key prop, which is passed to the `onSelectionChange` handler to identify the selected item. Alternatively, if the item objects contain an `id` property, as shown in the example below, then this is used automatically and a `key` prop is not required. See the [Events](#events) section for more detail on selection.

```
function Example() {
  let options = [
    {id: 1, name: 'Aerospace'},
    {id: 2, name: 'Mechanical'},
    {id: 3, name: 'Civil'},
    {id: 4, name: 'Biomedical'},
    {id: 5, name: 'Nuclear'},
    {id: 6, name: 'Industrial'},
    {id: 7, name: 'Chemical'},
    {id: 8, name: 'Agricultural'},
    {id: 9, name: 'Electrical'}
  ];
  let [majorId, setMajorId] = React.useState(null);

  return (
    <>
      <p>Topic id: {majorId}</p>
      <ComboBox
        label="Pick an engineering major"
        defaultItems={options}
        onSelectionChange={setMajorId}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
    </>
  );
}
```

```
function Example() {
  let options = [
    {id: 1, name: 'Aerospace'},
    {id: 2, name: 'Mechanical'},
    {id: 3, name: 'Civil'},
    {id: 4, name: 'Biomedical'},
    {id: 5, name: 'Nuclear'},
    {id: 6, name: 'Industrial'},
    {id: 7, name: 'Chemical'},
    {id: 8, name: 'Agricultural'},
    {id: 9, name: 'Electrical'}
  ];
  let [majorId, setMajorId] = React.useState(null);

  return (
    <>
      <p>Topic id: {majorId}</p>
      <ComboBox
        label="Pick an engineering major"
        defaultItems={options}
        onSelectionChange={setMajorId}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
    </>
  );
}
```

```
function Example() {
  let options = [
    {
      id: 1,
      name: 'Aerospace'
    },
    {
      id: 2,
      name: 'Mechanical'
    },
    {
      id: 3,
      name: 'Civil'
    },
    {
      id: 4,
      name: 'Biomedical'
    },
    {
      id: 5,
      name: 'Nuclear'
    },
    {
      id: 6,
      name: 'Industrial'
    },
    {
      id: 7,
      name: 'Chemical'
    },
    {
      id: 8,
      name:
        'Agricultural'
    },
    {
      id: 9,
      name: 'Electrical'
    }
  ];
  let [
    majorId,
    setMajorId
  ] = React.useState(
    null
  );

  return (
    <>
      <p>
        Topic id:{' '}
        {majorId}
      </p>
      <ComboBox
        label="Pick an engineering major"
        defaultItems={options}
        onSelectionChange={setMajorId}
      >
        {(item) => (
          <Item>
            {item.name}
          </Item>
        )}
      </ComboBox>
    </>
  );
}
```

Alternatively, passing your list of options to ComboBox's `items` prop will cause the list of items to be controlled, useful for when you want to provide your own filtering logic. See the [Custom Filtering](#custom-filtering) section for more detail.

On mobile, ComboBox automatically displays in a tray instead of a popover to improve usability. The tray contains a search field that mobile users can use to filter the options available via text.

To internationalize a ComboBox, a localized string should be passed to the `children` of each `Item`. For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of the ComboBox is automatically flipped.

* * *

A ComboBox's `value` is empty by default, but an initial, uncontrolled, value can be provided using the `defaultInputValue` prop. Alternatively, a controlled value can be provided using the `inputValue` prop. Note that the input value of the ComboBox does not affect the ComboBox's selected option. See [Events](#events) for more details on input change events.

```
function Example() {
  let options = [
    {id: 1, name: 'Adobe Photoshop'},
    {id: 2, name: 'Adobe XD'},
    {id: 3, name: 'Adobe InDesign'},
    {id: 4, name: 'Adobe AfterEffects'},
    {id: 5, name: 'Adobe Illustrator'},
    {id: 6, name: 'Adobe Lightroom'},
    {id: 7, name: 'Adobe Premiere Pro'},
    {id: 8, name: 'Adobe Fresco'},
    {id: 9, name: 'Adobe Dreamweaver'}
  ];
  let [value, setValue] = React.useState('Adobe XD');

  return (
    <Flex gap="size-150" wrap>
      <ComboBox
        label="Adobe product (Uncontrolled)"
        defaultItems={options}
        defaultInputValue="Adobe XD">
        {item => <Item>{item.name}</Item>}
      </ComboBox>

      <ComboBox
        label="Pick an Adobe product (Controlled)"
        defaultItems={options}
        inputValue={value}
        onInputChange={setValue}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
    </Flex>
  );
}
```

```
function Example() {
  let options = [
    {id: 1, name: 'Adobe Photoshop'},
    {id: 2, name: 'Adobe XD'},
    {id: 3, name: 'Adobe InDesign'},
    {id: 4, name: 'Adobe AfterEffects'},
    {id: 5, name: 'Adobe Illustrator'},
    {id: 6, name: 'Adobe Lightroom'},
    {id: 7, name: 'Adobe Premiere Pro'},
    {id: 8, name: 'Adobe Fresco'},
    {id: 9, name: 'Adobe Dreamweaver'}
  ];
  let [value, setValue] = React.useState('Adobe XD');

  return (
    <Flex gap="size-150" wrap>
      <ComboBox
        label="Adobe product (Uncontrolled)"
        defaultItems={options}
        defaultInputValue="Adobe XD">
        {item => <Item>{item.name}</Item>}
      </ComboBox>

      <ComboBox
        label="Pick an Adobe product (Controlled)"
        defaultItems={options}
        inputValue={value}
        onInputChange={setValue}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
    </Flex>
  );
}
```

```
function Example() {
  let options = [
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
      name:
        'Adobe Fresco'
    },
    {
      id: 9,
      name:
        'Adobe Dreamweaver'
    }
  ];
  let [value, setValue] =
    React.useState(
      'Adobe XD'
    );

  return (
    <Flex
      gap="size-150"
      wrap
    >
      <ComboBox
        label="Adobe product (Uncontrolled)"
        defaultItems={options}
        defaultInputValue="Adobe XD"
      >
        {(item) => (
          <Item>
            {item.name}
          </Item>
        )}
      </ComboBox>

      <ComboBox
        label="Pick an Adobe product (Controlled)"
        defaultItems={options}
        inputValue={value}
        onInputChange={setValue}
      >
        {(item) => (
          <Item>
            {item.name}
          </Item>
        )}
      </ComboBox>
    </Flex>
  );
}
```

By default on blur, a ComboBox will either reset its input value to match the selected option's text or clear its input value if an option has not been selected yet. If you would like to allow the end user to provide a custom input value to the ComboBox, the `allowsCustomValue` prop can be used to override the above behavior.

```
function Example() {
  let options = [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Orange' },
    { name: 'Honeydew' },
    { name: 'Grapes' },
    { name: 'Watermelon' },
    { name: 'Cantaloupe' },
    { name: 'Pear' }
  ];

  return (
    <>
      <p>
        Please indicate what fruit you would like included with your delivery.
        If your desired choice does not appear in the list feel free to write
        your own selection.
      </p>
      <ComboBox
        label="Preferred fruit"
        defaultItems={options}
        allowsCustomValue
      >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ComboBox>
    </>
  );
}
```

```
function Example() {
  let options = [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Orange' },
    { name: 'Honeydew' },
    { name: 'Grapes' },
    { name: 'Watermelon' },
    { name: 'Cantaloupe' },
    { name: 'Pear' }
  ];

  return (
    <>
      <p>
        Please indicate what fruit you would like included
        with your delivery. If your desired choice does not
        appear in the list feel free to write your own
        selection.
      </p>
      <ComboBox
        label="Preferred fruit"
        defaultItems={options}
        allowsCustomValue
      >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ComboBox>
    </>
  );
}
```

```
function Example() {
  let options = [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Orange' },
    { name: 'Honeydew' },
    { name: 'Grapes' },
    {
      name: 'Watermelon'
    },
    {
      name: 'Cantaloupe'
    },
    { name: 'Pear' }
  ];

  return (
    <>
      <p>
        Please indicate
        what fruit you
        would like
        included with
        your delivery. If
        your desired
        choice does not
        appear in the
        list feel free to
        write your own
        selection.
      </p>
      <ComboBox
        label="Preferred fruit"
        defaultItems={options}
        allowsCustomValue
      >
        {(item) => (
          <Item
            key={item
              .name}
          >
            {item.name}
          </Item>
        )}
      </ComboBox>
    </>
  );
}
```

ComboBox supports the `name` prop for integration with HTML forms. By default, the text in the input field will be submitted to the server. If the `formValue` prop is set to `"key"`, the `key` of the selected item will be submitted instead.

```
<Flex gap="size-200" wrap>
  <ComboBox
    label="Ice cream flavor"
    name="iceCream"
    allowsCustomValue  >
    <Item>Chocolate</Item>
    <Item>Mint</Item>
    <Item>Strawberry</Item>
    <Item>Vanilla</Item>
  </ComboBox>
  <ComboBox
    label="Favorite Animal"
    name="favoriteAnimalId"
    formValue="key"  >
    <Item key="panda">Panda</Item>
    <Item key="cat">Cat</Item>
    <Item key="dog">Dog</Item>
  </ComboBox>
</Flex>
```

```
<Flex gap="size-200" wrap>
  <ComboBox
    label="Ice cream flavor"
    name="iceCream"
    allowsCustomValue  >
    <Item>Chocolate</Item>
    <Item>Mint</Item>
    <Item>Strawberry</Item>
    <Item>Vanilla</Item>
  </ComboBox>
  <ComboBox
    label="Favorite Animal"
    name="favoriteAnimalId"
    formValue="key"  >
    <Item key="panda">Panda</Item>
    <Item key="cat">Cat</Item>
    <Item key="dog">Dog</Item>
  </ComboBox>
</Flex>
```

```
<Flex
  gap="size-200"
  wrap
>
  <ComboBox
    label="Ice cream flavor"
    name="iceCream"
    allowsCustomValue  >
    <Item>
      Chocolate
    </Item>
    <Item>Mint</Item>
    <Item>
      Strawberry
    </Item>
    <Item>
      Vanilla
    </Item>
  </ComboBox>
  <ComboBox
    label="Favorite Animal"
    name="favoriteAnimalId"
    formValue="key"  >
    <Item key="panda">
      Panda
    </Item>
    <Item key="cat">
      Cat
    </Item>
    <Item key="dog">
      Dog
    </Item>
  </ComboBox>
</Flex>
```

* * *

ComboBox can be labeled using the `label` prop. If the ComboBox is a required field, the `isRequired` and `necessityIndicator` props can be used to show a required state.

```
<ComboBox label="Favorite Animal" isRequired necessityIndicator="icon">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  isRequired
  necessityIndicator="icon"
>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  isRequired
  necessityIndicator="icon"
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
```

```
<ComboBox label="Favorite Animal" isRequired necessityIndicator="label">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  isRequired
  necessityIndicator="label"
>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  isRequired
  necessityIndicator="label"
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
```

```
<ComboBox label="Favorite Animal" necessityIndicator="label">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  necessityIndicator="label"
>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  necessityIndicator="label"
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
```

If a visible label isn't specified, an `aria-label` must be provided to the ComboBox for accessibility. If the field is labeled by a separate element, an `aria-labelledby` prop must be provided using the `id` of the labeling element instead.

In order to internationalize a ComboBox, a localized string should be passed to the `label` or `aria-label` prop. When the `necessityIndicator` prop is set to `"label"`, a localized string will be provided for `"(required)"` or `"(optional)"` automatically.

* * *

Setting a selected option can be done by using the `defaultSelectedKey` or `selectedKey` prop. The selected key corresponds to the `key` of an item. See [Events](#events) for more details on selection events. Additionally, see the `react-stately` [Selection docs](https://react-spectrum.adobe.com/react-stately/selection.html#selected-key-data-type) for caveats regarding selection prop typing.

```
import type {Key} from '@adobe/react-spectrum';

function Example() {
  let options = [
    {id: 1, name: 'Adobe Photoshop'},
    {id: 2, name: 'Adobe XD'},
    {id: 3, name: 'Adobe InDesign'},
    {id: 4, name: 'Adobe AfterEffects'},
    {id: 5, name: 'Adobe Illustrator'},
    {id: 6, name: 'Adobe Lightroom'},
    {id: 7, name: 'Adobe Premiere Pro'},
    {id: 8, name: 'Adobe Fresco'},
    {id: 9, name: 'Adobe Dreamweaver'}
  ];
  let [productId, setProductId] = React.useState<Key>(9);

  return (
    <Flex gap="size-150" wrap>
      <ComboBox
        label="Pick an Adobe product (uncontrolled)"
        defaultItems={options}
        defaultSelectedKey={9}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>

      <ComboBox
        label="Pick an Adobe product (controlled)"
        defaultItems={options}
        selectedKey={productId}
        onSelectionChange={selected => setProductId(selected)}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
    </Flex>
  );
}
```

```
import type {Key} from '@adobe/react-spectrum';

function Example() {
  let options = [
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
  let [productId, setProductId] = React.useState<Key>(9);

  return (
    <Flex gap="size-150" wrap>
      <ComboBox
        label="Pick an Adobe product (uncontrolled)"
        defaultItems={options}
        defaultSelectedKey={9}
      >
        {(item) => <Item>{item.name}</Item>}
      </ComboBox>

      <ComboBox
        label="Pick an Adobe product (controlled)"
        defaultItems={options}
        selectedKey={productId}
        onSelectionChange={(selected) =>
          setProductId(selected)}
      >
        {(item) => <Item>{item.name}</Item>}
      </ComboBox>
    </Flex>
  );
}
```

```
import type {Key} from '@adobe/react-spectrum';

function Example() {
  let options = [
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
      name:
        'Adobe Fresco'
    },
    {
      id: 9,
      name:
        'Adobe Dreamweaver'
    }
  ];
  let [
    productId,
    setProductId
  ] = React.useState<
    Key
  >(9);

  return (
    <Flex
      gap="size-150"
      wrap
    >
      <ComboBox
        label="Pick an Adobe product (uncontrolled)"
        defaultItems={options}
        defaultSelectedKey={9}
      >
        {(item) => (
          <Item>
            {item.name}
          </Item>
        )}
      </ComboBox>

      <ComboBox
        label="Pick an Adobe product (controlled)"
        defaultItems={options}
        selectedKey={productId}
        onSelectionChange={(selected) =>
          setProductId(
            selected
          )}
      >
        {(item) => (
          <Item>
            {item.name}
          </Item>
        )}
      </ComboBox>
    </Flex>
  );
}
```

* * *

By default, interacting with an item in a ComboBox selects it and updates the input value. Alternatively, items may be links to another page or website. This can be achieved by passing the `href` prop to the `<Item>` component. Interacting with link items navigates to the provided URL and does not update the selection or input value.

```
<ComboBox label="Tech company websites">
  <Item href="https://adobe.com/" target="_blank">Adobe</Item>
  <Item href="https://apple.com/" target="_blank">Apple</Item>
  <Item href="https://google.com/" target="_blank">Google</Item>
  <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
</ComboBox>
```

```
<ComboBox label="Tech company websites">
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
</ComboBox>
```

```
<ComboBox label="Tech company websites">
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
</ComboBox>
```

The `<Item>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Spectrum components that support links, this works via the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-spectrum/routing.html) to learn how to set this up.

* * *

ComboBox supports sections in order to group options. Sections can be used by wrapping groups of items in a `Section` element. Each `Section` takes a `title` and `key` prop.

```
<ComboBox label="Preferred fruit or vegetable">
  <Section title="Fruit">
    <Item key="Apple">Apple</Item>
    <Item key="Banana">Banana</Item>
    <Item key="Orange">Orange</Item>
    <Item key="Honeydew">Honeydew</Item>
    <Item key="Grapes">Grapes</Item>
    <Item key="Watermelon">Watermelon</Item>
    <Item key="Cantaloupe">Cantaloupe</Item>
    <Item key="Pear">Pear</Item>
  </Section>
  <Section title="Vegetable">
    <Item key="Cabbage">Cabbage</Item>
    <Item key="Broccoli">Broccoli</Item>
    <Item key="Carrots">Carrots</Item>
    <Item key="Lettuce">Lettuce</Item>
    <Item key="Spinach">Spinach</Item>
    <Item key="Bok Choy">Bok Choy</Item>
    <Item key="Cauliflower">Cauliflower</Item>
    <Item key="Potatoes">Potatoes</Item>
  </Section>
</ComboBox>
```

```
<ComboBox label="Preferred fruit or vegetable">
  <Section title="Fruit">
    <Item key="Apple">Apple</Item>
    <Item key="Banana">Banana</Item>
    <Item key="Orange">Orange</Item>
    <Item key="Honeydew">Honeydew</Item>
    <Item key="Grapes">Grapes</Item>
    <Item key="Watermelon">Watermelon</Item>
    <Item key="Cantaloupe">Cantaloupe</Item>
    <Item key="Pear">Pear</Item>
  </Section>
  <Section title="Vegetable">
    <Item key="Cabbage">Cabbage</Item>
    <Item key="Broccoli">Broccoli</Item>
    <Item key="Carrots">Carrots</Item>
    <Item key="Lettuce">Lettuce</Item>
    <Item key="Spinach">Spinach</Item>
    <Item key="Bok Choy">Bok Choy</Item>
    <Item key="Cauliflower">Cauliflower</Item>
    <Item key="Potatoes">Potatoes</Item>
  </Section>
</ComboBox>
```

```
<ComboBox label="Preferred fruit or vegetable">
  <Section title="Fruit">
    <Item key="Apple">
      Apple
    </Item>
    <Item key="Banana">
      Banana
    </Item>
    <Item key="Orange">
      Orange
    </Item>
    <Item key="Honeydew">
      Honeydew
    </Item>
    <Item key="Grapes">
      Grapes
    </Item>
    <Item key="Watermelon">
      Watermelon
    </Item>
    <Item key="Cantaloupe">
      Cantaloupe
    </Item>
    <Item key="Pear">
      Pear
    </Item>
  </Section>
  <Section title="Vegetable">
    <Item key="Cabbage">
      Cabbage
    </Item>
    <Item key="Broccoli">
      Broccoli
    </Item>
    <Item key="Carrots">
      Carrots
    </Item>
    <Item key="Lettuce">
      Lettuce
    </Item>
    <Item key="Spinach">
      Spinach
    </Item>
    <Item key="Bok Choy">
      Bok Choy
    </Item>
    <Item key="Cauliflower">
      Cauliflower
    </Item>
    <Item key="Potatoes">
      Potatoes
    </Item>
  </Section>
</ComboBox>
```

Sections used with dynamic items are populated from a hierarchical data structure. Please note that `Section` takes an array of data using the `items` prop only.

```
function Example() {
  let options = [
    {name: 'Fruit', children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Orange'},
      {name: 'Honeydew'},
      {name: 'Grapes'},
      {name: 'Watermelon'},
      {name: 'Cantaloupe'},
      {name: 'Pear'}
    ]},
    {name: 'Vegetable', children: [
      {name: 'Cabbage'},
      {name: 'Broccoli'},
      {name: 'Carrots'},
      {name: 'Lettuce'},
      {name: 'Spinach'},
      {name: 'Bok Choy'},
      {name: 'Cauliflower'},
      {name: 'Potatoes'}
    ]}
  ];

  return (
    <ComboBox label="Preferred fruit or vegetable" defaultItems={options}>
      {item => (
        <Section key={item.name} items={item.children} title={item.name}>
          {item => <Item key={item.name}>{item.name}</Item>}
        </Section>
      )}
    </ComboBox>
  );
}
```

```
function Example() {
  let options = [
    {
      name: 'Fruit',
      children: [
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Orange' },
        { name: 'Honeydew' },
        { name: 'Grapes' },
        { name: 'Watermelon' },
        { name: 'Cantaloupe' },
        { name: 'Pear' }
      ]
    },
    {
      name: 'Vegetable',
      children: [
        { name: 'Cabbage' },
        { name: 'Broccoli' },
        { name: 'Carrots' },
        { name: 'Lettuce' },
        { name: 'Spinach' },
        { name: 'Bok Choy' },
        { name: 'Cauliflower' },
        { name: 'Potatoes' }
      ]
    }
  ];

  return (
    <ComboBox
      label="Preferred fruit or vegetable"
      defaultItems={options}
    >
      {(item) => (
        <Section
          key={item.name}
          items={item.children}
          title={item.name}
        >
          {(item) => (
            <Item key={item.name}>{item.name}</Item>
          )}
        </Section>
      )}
    </ComboBox>
  );
}
```

```
function Example() {
  let options = [
    {
      name: 'Fruit',
      children: [
        {
          name: 'Apple'
        },
        {
          name: 'Banana'
        },
        {
          name: 'Orange'
        },
        {
          name:
            'Honeydew'
        },
        {
          name: 'Grapes'
        },
        {
          name:
            'Watermelon'
        },
        {
          name:
            'Cantaloupe'
        },
        { name: 'Pear' }
      ]
    },
    {
      name: 'Vegetable',
      children: [
        {
          name: 'Cabbage'
        },
        {
          name:
            'Broccoli'
        },
        {
          name: 'Carrots'
        },
        {
          name: 'Lettuce'
        },
        {
          name: 'Spinach'
        },
        {
          name:
            'Bok Choy'
        },
        {
          name:
            'Cauliflower'
        },
        {
          name:
            'Potatoes'
        }
      ]
    }
  ];

  return (
    <ComboBox
      label="Preferred fruit or vegetable"
      defaultItems={options}
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
            <Item
              key={item
                .name}
            >
              {item.name}
            </Item>
          )}
        </Section>
      )}
    </ComboBox>
  );
}
```

* * *

ComboBox supports selection via mouse, keyboard, and touch. You can handle all of these via the `onSelectionChange` prop. ComboBox will pass the selected `key` to the `onSelectionChange` handler. Additionally, ComboBox accepts an `onInputChange` prop which is triggered whenever the value is edited by the user, whether through typing or option selection.

The example below uses `onSelectionChange` and `onInputChange` to update the selection and input value stored in React state.

```
function Example() {
  let options = [
    {id: 1, name: 'Aerospace'},
    {id: 2, name: 'Mechanical'},
    {id: 3, name: 'Civil'},
    {id: 4, name: 'Biomedical'},
    {id: 5, name: 'Nuclear'},
    {id: 6, name: 'Industrial'},
    {id: 7, name: 'Chemical'},
    {id: 8, name: 'Agricultural'},
    {id: 9, name: 'Electrical'}
  ];

  let [value, setValue] = React.useState('');
  let [majorId, setMajorId] = React.useState('');

  let onSelectionChange = (id) => {
    setMajorId(id);
  };

  let onInputChange = (value) => {
    setValue(value)
  };

  return (
    <>
      <p>Current selected major id: {majorId}</p>
      <p>Current input text: {value}</p>
      <ComboBox
        label="Pick a engineering major"
        defaultItems={options}
        selectedKey={majorId}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
    </>
  );
}
```

```
function Example() {
  let options = [
    {id: 1, name: 'Aerospace'},
    {id: 2, name: 'Mechanical'},
    {id: 3, name: 'Civil'},
    {id: 4, name: 'Biomedical'},
    {id: 5, name: 'Nuclear'},
    {id: 6, name: 'Industrial'},
    {id: 7, name: 'Chemical'},
    {id: 8, name: 'Agricultural'},
    {id: 9, name: 'Electrical'}
  ];

  let [value, setValue] = React.useState('');
  let [majorId, setMajorId] = React.useState('');

  let onSelectionChange = (id) => {
    setMajorId(id);
  };

  let onInputChange = (value) => {
    setValue(value)
  };

  return (
    <>
      <p>Current selected major id: {majorId}</p>
      <p>Current input text: {value}</p>
      <ComboBox
        label="Pick a engineering major"
        defaultItems={options}
        selectedKey={majorId}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
    </>
  );
}
```

```
function Example() {
  let options = [
    {
      id: 1,
      name: 'Aerospace'
    },
    {
      id: 2,
      name: 'Mechanical'
    },
    {
      id: 3,
      name: 'Civil'
    },
    {
      id: 4,
      name: 'Biomedical'
    },
    {
      id: 5,
      name: 'Nuclear'
    },
    {
      id: 6,
      name: 'Industrial'
    },
    {
      id: 7,
      name: 'Chemical'
    },
    {
      id: 8,
      name:
        'Agricultural'
    },
    {
      id: 9,
      name: 'Electrical'
    }
  ];

  let [value, setValue] =
    React.useState('');
  let [
    majorId,
    setMajorId
  ] = React.useState('');

  let onSelectionChange =
    (id) => {
      setMajorId(id);
    };

  let onInputChange = (
    value
  ) => {
    setValue(value);
  };

  return (
    <>
      <p>
        Current selected
        major id:{' '}
        {majorId}
      </p>
      <p>
        Current input
        text: {value}
      </p>
      <ComboBox
        label="Pick a engineering major"
        defaultItems={options}
        selectedKey={majorId}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}
      >
        {(item) => (
          <Item>
            {item.name}
          </Item>
        )}
      </ComboBox>
    </>
  );
}
```

When a ComboBox has multiple controlled properties (e.g.`inputValue`, `selectedKey`, `items`), it is important to note that an update to one of these properties will not automatically update the others. Each interaction done in the ComboBox will only trigger its associated event handler. For example, typing in the field will only trigger `onInputChange` whereas selecting an item from the ComboBox menu will only trigger `onSelectionChange` so it is your responsibility to update the other controlled properties accordingly. Note that you should provide an `onSelectionChange` handler for a ComboBox with controlled input value and open state. This way, you can properly control the menu's open state when the user selects an option or blurs from the field.

The below example demonstrates how you would construct the same example above in a completely controlled fashion.

```
import {useTreeData} from 'react-stately';

function Example() {
  let options = [
    { id: 1, name: 'Aerospace' },
    { id: 2, name: 'Mechanical' },
    { id: 3, name: 'Civil' },
    { id: 4, name: 'Biomedical' },
    { id: 5, name: 'Nuclear' },
    { id: 6, name: 'Industrial' },
    { id: 7, name: 'Chemical' },
    { id: 8, name: 'Agricultural' },
    { id: 9, name: 'Electrical' }
  ];

  let [fieldState, setFieldState] = React.useState({
    selectedKey: '',
    inputValue: ''
  });

  let list = useTreeData({
    initialItems: options
  });

  let onSelectionChange = (key) => {
    setFieldState({
      inputValue: list.getItem(key)?.value.name ?? '',
      selectedKey: key
    });
  };

  let onInputChange = (value) => {
    setFieldState((prevState) => ({
      inputValue: value,
      selectedKey: value === '' ? null : prevState.selectedKey
    }));
  };

  return (
    <>
      <p>Current selected major id: {fieldState.selectedKey}</p>
      <p>Current input text: {fieldState.inputValue}</p>
      <ComboBox
        label="Pick a engineering major"
        defaultItems={list.items}
        selectedKey={fieldState.selectedKey}
        inputValue={fieldState.inputValue}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}
      >
        {(item) => <Item>{item.value.name}</Item>}
      </ComboBox>
    </>
  );
}
```

```
import {useTreeData} from 'react-stately';

function Example() {
  let options = [
    { id: 1, name: 'Aerospace' },
    { id: 2, name: 'Mechanical' },
    { id: 3, name: 'Civil' },
    { id: 4, name: 'Biomedical' },
    { id: 5, name: 'Nuclear' },
    { id: 6, name: 'Industrial' },
    { id: 7, name: 'Chemical' },
    { id: 8, name: 'Agricultural' },
    { id: 9, name: 'Electrical' }
  ];

  let [fieldState, setFieldState] = React.useState({
    selectedKey: '',
    inputValue: ''
  });

  let list = useTreeData({
    initialItems: options
  });

  let onSelectionChange = (key) => {
    setFieldState({
      inputValue: list.getItem(key)?.value.name ?? '',
      selectedKey: key
    });
  };

  let onInputChange = (value) => {
    setFieldState((prevState) => ({
      inputValue: value,
      selectedKey: value === ''
        ? null
        : prevState.selectedKey
    }));
  };

  return (
    <>
      <p>
        Current selected major id: {fieldState.selectedKey}
      </p>
      <p>Current input text: {fieldState.inputValue}</p>
      <ComboBox
        label="Pick a engineering major"
        defaultItems={list.items}
        selectedKey={fieldState.selectedKey}
        inputValue={fieldState.inputValue}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}
      >
        {(item) => <Item>{item.value.name}</Item>}
      </ComboBox>
    </>
  );
}
```

```
import {useTreeData} from 'react-stately';

function Example() {
  let options = [
    {
      id: 1,
      name: 'Aerospace'
    },
    {
      id: 2,
      name: 'Mechanical'
    },
    {
      id: 3,
      name: 'Civil'
    },
    {
      id: 4,
      name: 'Biomedical'
    },
    {
      id: 5,
      name: 'Nuclear'
    },
    {
      id: 6,
      name: 'Industrial'
    },
    {
      id: 7,
      name: 'Chemical'
    },
    {
      id: 8,
      name:
        'Agricultural'
    },
    {
      id: 9,
      name: 'Electrical'
    }
  ];

  let [
    fieldState,
    setFieldState
  ] = React.useState({
    selectedKey: '',
    inputValue: ''
  });

  let list = useTreeData(
    {
      initialItems:
        options
    }
  );

  let onSelectionChange =
    (key) => {
      setFieldState({
        inputValue:
          list.getItem(
            key
          )?.value
            .name ?? '',
        selectedKey: key
      });
    };

  let onInputChange = (
    value
  ) => {
    setFieldState(
      (prevState) => ({
        inputValue:
          value,
        selectedKey:
          value === ''
            ? null
            : prevState
              .selectedKey
      })
    );
  };

  return (
    <>
      <p>
        Current selected
        major id:{' '}
        {fieldState
          .selectedKey}
      </p>
      <p>
        Current input
        text:{' '}
        {fieldState
          .inputValue}
      </p>
      <ComboBox
        label="Pick a engineering major"
        defaultItems={list
          .items}
        selectedKey={fieldState
          .selectedKey}
        inputValue={fieldState
          .inputValue}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}
      >
        {(item) => (
          <Item>
            {item.value
              .name}
          </Item>
        )}
      </ComboBox>
    </>
  );
}
```

* * *

Items within ComboBox also allow for additional content used to better communicate options. Icons, avatars, and descriptions can be added to the `children` of `Item` as shown in the example below. If a description is added, the prop `slot="description"` must be used to distinguish the different `<Text>` elements. See Icon's [labeling](https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#labeling) section and Avatar's [accessibility](https://react-spectrum.adobe.com/react-spectrum/Avatar.html#accessibility) section for more information on how to label these elements.

```
<ComboBox label="Select action">
  <Item textValue="Add to queue">
    <Add />
    <Text>Add to queue</Text>
    <Text slot="description">Add to current watch queue.</Text>
  </Item>
  <Item textValue="Add review">
    <Draw />
    <Text>Add review</Text>
    <Text slot="description">Post a review for the episode.</Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell />
    <Text>Subscribe to series</Text>
    <Text slot="description">
      Add series to your subscription list and be notified when a new episode
      airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert />
    <Text>Report</Text>
    <Text slot="description">Report an issue/violation.</Text>
  </Item>
</ComboBox>
```

```
<ComboBox label="Select action">
  <Item textValue="Add to queue">
    <Add />
    <Text>Add to queue</Text>
    <Text slot="description">
      Add to current watch queue.
    </Text>
  </Item>
  <Item textValue="Add review">
    <Draw />
    <Text>Add review</Text>
    <Text slot="description">
      Post a review for the episode.
    </Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell />
    <Text>Subscribe to series</Text>
    <Text slot="description">
      Add series to your subscription list and be notified
      when a new episode airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert />
    <Text>Report</Text>
    <Text slot="description">
      Report an issue/violation.
    </Text>
  </Item>
</ComboBox>
```

```
<ComboBox label="Select action">
  <Item textValue="Add to queue">
    <Add />
    <Text>
      Add to queue
    </Text>
    <Text slot="description">
      Add to current
      watch queue.
    </Text>
  </Item>
  <Item textValue="Add review">
    <Draw />
    <Text>
      Add review
    </Text>
    <Text slot="description">
      Post a review for
      the episode.
    </Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell />
    <Text>
      Subscribe to
      series
    </Text>
    <Text slot="description">
      Add series to
      your subscription
      list and be
      notified when a
      new episode airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert />
    <Text>Report</Text>
    <Text slot="description">
      Report an
      issue/violation.
    </Text>
  </Item>
</ComboBox>
```

```
<ComboBox label="Select a user">
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
</ComboBox>
```

```
<ComboBox label="Select a user">
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
</ComboBox>
```

```
<ComboBox label="Select a user">
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
</ComboBox>
```

* * *

ComboBox supports loading data asynchronously, and will display a progress circle reflecting the current load state, set by the `loadingState` prop. It also supports infinite scrolling to load more data on demand as the user scrolls, via the `onLoadMore` prop.

This example uses the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook to handle loading the data. See the docs for more information.

```
import {useAsyncList} from 'react-stately';

interface Character {
  name: string;
}

function AsyncLoadingExample() {
  let list = useAsyncList<Character>({
    async load({ signal, cursor, filterText }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      // If no cursor is available, then we're loading the first page,
      // filtering the results returned via a query string that
      // mirrors the ComboBox input text.
      // Otherwise, the cursor is the next URL to load,
      // as returned from the previous page.
      let res = await fetch(
        cursor || `https://swapi.py4e.com/api/people/?search=${filterText}`,
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
    <ComboBox
      label="Star Wars Character Lookup"
      items={list.items}
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
      loadingState={list.loadingState}
      onLoadMore={list.loadMore}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
  );
}
```

```
import {useAsyncList} from 'react-stately';

interface Character {
  name: string;
}

function AsyncLoadingExample() {
  let list = useAsyncList<Character>({
    async load({ signal, cursor, filterText }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      // If no cursor is available, then we're loading the first page,
      // filtering the results returned via a query string that
      // mirrors the ComboBox input text.
      // Otherwise, the cursor is the next URL to load,
      // as returned from the previous page.
      let res = await fetch(
        cursor ||
          `https://swapi.py4e.com/api/people/?search=${filterText}`,
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
    <ComboBox
      label="Star Wars Character Lookup"
      items={list.items}
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
      loadingState={list.loadingState}
      onLoadMore={list.loadMore}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
  );
}
```

```
import {useAsyncList} from 'react-stately';

interface Character {
  name: string;
}

function AsyncLoadingExample() {
  let list =
    useAsyncList<
      Character
    >({
      async load(
        {
          signal,
          cursor,
          filterText
        }
      ) {
        if (cursor) {
          cursor = cursor
            .replace(
              /^http:\/\//i,
              'https://'
            );
        }

        // If no cursor is available, then we're loading the first page,
        // filtering the results returned via a query string that
        // mirrors the ComboBox input text.
        // Otherwise, the cursor is the next URL to load,
        // as returned from the previous page.
        let res =
          await fetch(
            cursor ||
              `https://swapi.py4e.com/api/people/?search=${filterText}`,
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
    <ComboBox
      label="Star Wars Character Lookup"
      items={list.items}
      inputValue={list
        .filterText}
      onInputChange={list
        .setFilterText}
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
    </ComboBox>
  );
}
```

When both `inputValue` and `selectedKey` are controlled, and the `selectedKey` is set to an initial value before the `items` load, you must update the `inputValue` when the `items` load. This can be done by returning `filterText` from the `useAsyncList` load function.

The example below demonstrates how you could update the input value for your selected key once your list of items has been fetched.

```
interface Character {
  name: string;
}

function AsyncLoadingExample() {
  let isFocused = React.useRef(false);
  let list = useAsyncList<Character>({
    async load({ signal, cursor, filterText, selectedKeys }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      // If no cursor is available, then we're loading the first page,
      // filtering the results returned via a query string that
      // mirrors the ComboBox input text.
      // Otherwise, the cursor is the next URL to load,
      // as returned from the previous page.
      let res = await fetch(
        cursor || `https://swapi.py4e.com/api/people/?search=${filterText}`,
        { signal }
      );
      let json = await res.json();

      let selectedText;
      let selectedKey = selectedKeys !== 'all' &&
        selectedKeys.values().next().value;

      // If selectedKey exists and combobox is not focused, update the input value with the selected key text
      // This allows the input value to be up to date when items load for the first time or the selected key text is updated server side.
      if (!isFocused.current && selectedKey) {
        let selectedItemName = json.results.find((item) =>
          item.name === selectedKey
        )?.name;
        if (selectedItemName != null && selectedItemName !== filterText) {
          selectedText = selectedItemName;
        }
      }

      return {
        items: json.results,
        cursor: json.next,
        filterText: selectedText ?? filterText
      };
    },
    initialSelectedKeys: ['Luke Skywalker'],
    getKey: (item) => item.name
  });

  let onSelectionChange = (key) => {
    let itemText = list.getItem(key)?.name;
    list.setSelectedKeys(new Set([key]));
    list.setFilterText(itemText);
  };

  let onInputChange = (value) => {
    // Clear key if user deletes all text in the field
    if (value === '') {
      list.setSelectedKeys(new Set([null]));
    }
    list.setFilterText(value);
  };

  let selectedKey = list.selectedKeys !== 'all' &&
    list.selectedKeys.values().next().value;
  return (
    <ComboBox
      label="Star Wars Character Lookup"
      onFocusChange={(focus) => isFocused.current = focus}
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
      items={list.items}
      inputValue={list.filterText}
      onInputChange={onInputChange}
      loadingState={list.loadingState}
      onLoadMore={list.loadMore}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
  );
}
```

```
interface Character {
  name: string;
}

function AsyncLoadingExample() {
  let isFocused = React.useRef(false);
  let list = useAsyncList<Character>({
    async load(
      { signal, cursor, filterText, selectedKeys }
    ) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      // If no cursor is available, then we're loading the first page,
      // filtering the results returned via a query string that
      // mirrors the ComboBox input text.
      // Otherwise, the cursor is the next URL to load,
      // as returned from the previous page.
      let res = await fetch(
        cursor ||
          `https://swapi.py4e.com/api/people/?search=${filterText}`,
        { signal }
      );
      let json = await res.json();

      let selectedText;
      let selectedKey = selectedKeys !== 'all' &&
        selectedKeys.values().next().value;

      // If selectedKey exists and combobox is not focused, update the input value with the selected key text
      // This allows the input value to be up to date when items load for the first time or the selected key text is updated server side.
      if (!isFocused.current && selectedKey) {
        let selectedItemName = json.results.find((item) =>
          item.name === selectedKey
        )?.name;
        if (
          selectedItemName != null &&
          selectedItemName !== filterText
        ) {
          selectedText = selectedItemName;
        }
      }

      return {
        items: json.results,
        cursor: json.next,
        filterText: selectedText ?? filterText
      };
    },
    initialSelectedKeys: ['Luke Skywalker'],
    getKey: (item) => item.name
  });

  let onSelectionChange = (key) => {
    let itemText = list.getItem(key)?.name;
    list.setSelectedKeys(new Set([key]));
    list.setFilterText(itemText);
  };

  let onInputChange = (value) => {
    // Clear key if user deletes all text in the field
    if (value === '') {
      list.setSelectedKeys(new Set([null]));
    }
    list.setFilterText(value);
  };

  let selectedKey = list.selectedKeys !== 'all' &&
    list.selectedKeys.values().next().value;
  return (
    <ComboBox
      label="Star Wars Character Lookup"
      onFocusChange={(focus) => isFocused.current = focus}
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
      items={list.items}
      inputValue={list.filterText}
      onInputChange={onInputChange}
      loadingState={list.loadingState}
      onLoadMore={list.loadMore}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
  );
}
```

```
interface Character {
  name: string;
}

function AsyncLoadingExample() {
  let isFocused = React
    .useRef(false);
  let list =
    useAsyncList<
      Character
    >({
      async load(
        {
          signal,
          cursor,
          filterText,
          selectedKeys
        }
      ) {
        if (cursor) {
          cursor = cursor
            .replace(
              /^http:\/\//i,
              'https://'
            );
        }

        // If no cursor is available, then we're loading the first page,
        // filtering the results returned via a query string that
        // mirrors the ComboBox input text.
        // Otherwise, the cursor is the next URL to load,
        // as returned from the previous page.
        let res =
          await fetch(
            cursor ||
              `https://swapi.py4e.com/api/people/?search=${filterText}`,
            { signal }
          );
        let json =
          await res
            .json();

        let selectedText;
        let selectedKey =
          selectedKeys !==
            'all' &&
          selectedKeys
            .values()
            .next()
            .value;

        // If selectedKey exists and combobox is not focused, update the input value with the selected key text
        // This allows the input value to be up to date when items load for the first time or the selected key text is updated server side.
        if (
          !isFocused
            .current &&
          selectedKey
        ) {
          let selectedItemName =
            json.results
              .find(
                (item) =>
                  item
                    .name ===
                    selectedKey
              )?.name;
          if (
            selectedItemName !=
              null &&
            selectedItemName !==
              filterText
          ) {
            selectedText =
              selectedItemName;
          }
        }

        return {
          items:
            json.results,
          cursor:
            json.next,
          filterText:
            selectedText ??
              filterText
        };
      },
      initialSelectedKeys:
        ['Luke Skywalker'],
      getKey: (item) =>
        item.name
    });

  let onSelectionChange =
    (key) => {
      let itemText = list
        .getItem(key)
        ?.name;
      list
        .setSelectedKeys(
          new Set([key])
        );
      list.setFilterText(
        itemText
      );
    };

  let onInputChange = (
    value
  ) => {
    // Clear key if user deletes all text in the field
    if (value === '') {
      list
        .setSelectedKeys(
          new Set([null])
        );
    }
    list.setFilterText(
      value
    );
  };

  let selectedKey =
    list.selectedKeys !==
      'all' &&
    list.selectedKeys
      .values().next()
      .value;
  return (
    <ComboBox
      label="Star Wars Character Lookup"
      onFocusChange={(
        focus
      ) =>
        isFocused
          .current =
            focus}
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
      items={list.items}
      inputValue={list
        .filterText}
      onInputChange={onInputChange}
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
    </ComboBox>
  );
}
```

* * *

ComboBox supports the `isRequired` prop to ensure the user enters a value, as well as custom client and server-side validation. It can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-spectrum/forms.html) guide to learn more.

When the [Form](https://react-spectrum.adobe.com/react-spectrum/Form.html) component has the `validationBehavior="native"` prop, validation errors block form submission and are displayed as help text automatically. Errors are displayed when the user blurs the combo box or submits the form.

```
import {Form, ButtonGroup, Button} from '@adobe/react-spectrum';

<Form validationBehavior="native" maxWidth="size-3000">
  <ComboBox label="Favorite animal" name="animal" isRequired>    <Item>Aardvark</Item>
    <Item>Cat</Item>
    <Item>Dog</Item>
    <Item>Kangaroo</Item>
    <Item>Panda</Item>
    <Item>Snake</Item>
  </ComboBox>
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
  <ComboBox
    label="Favorite animal"
    name="animal"
    isRequired
  >    <Item>Aardvark</Item>
    <Item>Cat</Item>
    <Item>Dog</Item>
    <Item>Kangaroo</Item>
    <Item>Panda</Item>
    <Item>Snake</Item>
  </ComboBox>
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
  <ComboBox
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
  </ComboBox>
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

By default, `ComboBox` displays default validation messages provided by the browser. See [Customizing error messages](https://react-spectrum.adobe.com/react-spectrum/forms.html#customizing-error-messages) in the Forms guide to learn how to provide your own custom errors.

* * *

By default, ComboBox uses a string "contains" filtering strategy when deciding what items to display in the dropdown menu. This filtering strategy can be overwritten by filtering the list of items yourself and passing the filtered list to the ComboBox via the `items` prop.

The example below uses a string "startsWith" filter function obtained from the `useFilter` hook to display items that start with the ComboBox's current input value only. By using the `menuTrigger` returned by `onOpenChange`, it also handles displaying the entire option list regardless of the current filter value when the ComboBox menu is opened via the trigger button or arrow keys. `menuTrigger` tells you if the menu was opened manually by the user ("manual"), by focusing the ComboBox ("focus"), or by changes in the input field ("input"), allowing you to make updates to other controlled aspects of your ComboBox accordingly.

```
function Example() {
  let options = [
    { id: 1, email: 'fake@email.com' },
    { id: 2, email: 'anotherfake@email.com' },
    { id: 3, email: 'bob@email.com' },
    { id: 4, email: 'joe@email.com' },
    { id: 5, email: 'yourEmail@email.com' },
    { id: 6, email: 'valid@email.com' },
    { id: 7, email: 'spam@email.com' },
    { id: 8, email: 'newsletter@email.com' },
    { id: 9, email: 'subscribe@email.com' }
  ];

  let [showAll, setShowAll] = React.useState(false);
  let [filterValue, setFilterValue] = React.useState('');
  let { startsWith } = useFilter({ sensitivity: 'base' });
  let filteredItems = React.useMemo(
    () => options.filter((item) => startsWith(item.email, filterValue)),
    [options, filterValue]
  );

  return (
    <ComboBox
      onOpenChange={(isOpen, menuTrigger) => {
        // Show all items if menu is opened manually
        // i.e. by the arrow keys or trigger button
        if (menuTrigger === 'manual' && isOpen) {
          setShowAll(true);
        }
      }}
      width="size-3000"
      label="To:"
      items={showAll ? options : filteredItems}
      inputValue={filterValue}
      onInputChange={(value) => {
        setShowAll(false);
        setFilterValue(value);
      }}
      allowsCustomValue
    >
      {(item) => <Item>{item.email}</Item>}
    </ComboBox>
  );
}
```

```
function Example() {
  let options = [
    { id: 1, email: 'fake@email.com' },
    { id: 2, email: 'anotherfake@email.com' },
    { id: 3, email: 'bob@email.com' },
    { id: 4, email: 'joe@email.com' },
    { id: 5, email: 'yourEmail@email.com' },
    { id: 6, email: 'valid@email.com' },
    { id: 7, email: 'spam@email.com' },
    { id: 8, email: 'newsletter@email.com' },
    { id: 9, email: 'subscribe@email.com' }
  ];

  let [showAll, setShowAll] = React.useState(false);
  let [filterValue, setFilterValue] = React.useState('');
  let { startsWith } = useFilter({ sensitivity: 'base' });
  let filteredItems = React.useMemo(
    () =>
      options.filter((item) =>
        startsWith(item.email, filterValue)
      ),
    [options, filterValue]
  );

  return (
    <ComboBox
      onOpenChange={(isOpen, menuTrigger) => {
        // Show all items if menu is opened manually
        // i.e. by the arrow keys or trigger button
        if (menuTrigger === 'manual' && isOpen) {
          setShowAll(true);
        }
      }}
      width="size-3000"
      label="To:"
      items={showAll ? options : filteredItems}
      inputValue={filterValue}
      onInputChange={(value) => {
        setShowAll(false);
        setFilterValue(value);
      }}
      allowsCustomValue
    >
      {(item) => <Item>{item.email}</Item>}
    </ComboBox>
  );
}
```

```
function Example() {
  let options = [
    {
      id: 1,
      email:
        'fake@email.com'
    },
    {
      id: 2,
      email:
        'anotherfake@email.com'
    },
    {
      id: 3,
      email:
        'bob@email.com'
    },
    {
      id: 4,
      email:
        'joe@email.com'
    },
    {
      id: 5,
      email:
        'yourEmail@email.com'
    },
    {
      id: 6,
      email:
        'valid@email.com'
    },
    {
      id: 7,
      email:
        'spam@email.com'
    },
    {
      id: 8,
      email:
        'newsletter@email.com'
    },
    {
      id: 9,
      email:
        'subscribe@email.com'
    }
  ];

  let [
    showAll,
    setShowAll
  ] = React.useState(
    false
  );
  let [
    filterValue,
    setFilterValue
  ] = React.useState('');
  let { startsWith } =
    useFilter({
      sensitivity: 'base'
    });
  let filteredItems =
    React.useMemo(
      () =>
        options.filter(
          (item) =>
            startsWith(
              item.email,
              filterValue
            )
        ),
      [
        options,
        filterValue
      ]
    );

  return (
    <ComboBox
      onOpenChange={(
        isOpen,
        menuTrigger
      ) => {
        // Show all items if menu is opened manually
        // i.e. by the arrow keys or trigger button
        if (
          menuTrigger ===
            'manual' &&
          isOpen
        ) {
          setShowAll(
            true
          );
        }
      }}
      width="size-3000"
      label="To:"
      items={showAll
        ? options
        : filteredItems}
      inputValue={filterValue}
      onInputChange={(
        value
      ) => {
        setShowAll(
          false
        );
        setFilterValue(
          value
        );
      }}
      allowsCustomValue
    >
      {(item) => (
        <Item>
          {item.email}
        </Item>
      )}
    </ComboBox>
  );
}
```

* * *

By default, the ComboBox's menu is opened when the user types into the input field ("input"). There are two other supported modes: one where the menu opens when the ComboBox is focused ("focus") and the other where the menu only opens when the user clicks or taps on the ComboBox's field button ("manual"). These can be set by providing "focus" or "manual" to the `menuTrigger` prop. Guidelines on when to use a specific mode can be found [here](https://spectrum.adobe.com/page/combo-box/#Menu-trigger). Note that the mobile ComboBox experience requires the end user to press the ComboBox button to open the tray regardless of the `menuTrigger` setting.

```
<ComboBox label="Select action" menuTrigger="focus">
  <Item textValue="Add to queue">
    <Add />
    <Text>Add to queue</Text>
    <Text slot="description">Add to current watch queue.</Text>
  </Item>
  <Item textValue="Add review">
    <Draw />
    <Text>Add review</Text>
    <Text slot="description">Post a review for the episode.</Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell />
    <Text>Subscribe to series</Text>
    <Text slot="description">
      Add series to your subscription list and be notified when a new episode
      airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert />
    <Text>Report</Text>
    <Text slot="description">Report an issue/violation.</Text>
  </Item>
</ComboBox>
```

```
<ComboBox label="Select action" menuTrigger="focus">
  <Item textValue="Add to queue">
    <Add />
    <Text>Add to queue</Text>
    <Text slot="description">
      Add to current watch queue.
    </Text>
  </Item>
  <Item textValue="Add review">
    <Draw />
    <Text>Add review</Text>
    <Text slot="description">
      Post a review for the episode.
    </Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell />
    <Text>Subscribe to series</Text>
    <Text slot="description">
      Add series to your subscription list and be notified
      when a new episode airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert />
    <Text>Report</Text>
    <Text slot="description">
      Report an issue/violation.
    </Text>
  </Item>
</ComboBox>
```

```
<ComboBox
  label="Select action"
  menuTrigger="focus"
>
  <Item textValue="Add to queue">
    <Add />
    <Text>
      Add to queue
    </Text>
    <Text slot="description">
      Add to current
      watch queue.
    </Text>
  </Item>
  <Item textValue="Add review">
    <Draw />
    <Text>
      Add review
    </Text>
    <Text slot="description">
      Post a review for
      the episode.
    </Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell />
    <Text>
      Subscribe to
      series
    </Text>
    <Text slot="description">
      Add series to
      your subscription
      list and be
      notified when a
      new episode airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert />
    <Text>Report</Text>
    <Text slot="description">
      Report an
      issue/violation.
    </Text>
  </Item>
</ComboBox>
```

```
<ComboBox label="Select action" menuTrigger="manual">
  <Item textValue="Add to queue">
    <Add />
    <Text>Add to queue</Text>
    <Text slot="description">Add to current watch queue.</Text>
  </Item>
  <Item textValue="Add review">
    <Draw />
    <Text>Add review</Text>
    <Text slot="description">Post a review for the episode.</Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell />
    <Text>Subscribe to series</Text>
    <Text slot="description">
      Add series to your subscription list and be notified when a new episode
      airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert />
    <Text>Report</Text>
    <Text slot="description">Report an issue/violation.</Text>
  </Item>
</ComboBox>
```

```
<ComboBox label="Select action" menuTrigger="manual">
  <Item textValue="Add to queue">
    <Add />
    <Text>Add to queue</Text>
    <Text slot="description">
      Add to current watch queue.
    </Text>
  </Item>
  <Item textValue="Add review">
    <Draw />
    <Text>Add review</Text>
    <Text slot="description">
      Post a review for the episode.
    </Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell />
    <Text>Subscribe to series</Text>
    <Text slot="description">
      Add series to your subscription list and be notified
      when a new episode airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert />
    <Text>Report</Text>
    <Text slot="description">
      Report an issue/violation.
    </Text>
  </Item>
</ComboBox>
```

```
<ComboBox
  label="Select action"
  menuTrigger="manual"
>
  <Item textValue="Add to queue">
    <Add />
    <Text>
      Add to queue
    </Text>
    <Text slot="description">
      Add to current
      watch queue.
    </Text>
  </Item>
  <Item textValue="Add review">
    <Draw />
    <Text>
      Add review
    </Text>
    <Text slot="description">
      Post a review for
      the episode.
    </Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell />
    <Text>
      Subscribe to
      series
    </Text>
    <Text slot="description">
      Add series to
      your subscription
      list and be
      notified when a
      new episode airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert />
    <Text>Report</Text>
    <Text slot="description">
      Report an
      issue/violation.
    </Text>
  </Item>
</ComboBox>
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

`menuTrigger`

`[MenuTriggerAction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/combobox/src/index.d.ts:MenuTriggerAction)`

`'input'`

The interaction required to display the ComboBox menu. Note that this prop has no effect on the mobile ComboBox experience.

`isQuiet`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the ComboBox should be displayed with a quiet style.

`align`

`'start' | 'end'`

`'end'`

Alignment of the menu relative to the input target.

`direction`

`'bottom' | 'top'`

`'bottom'`

Direction the menu will render relative to the ComboBox.

`loadingState`

`[LoadingState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:LoadingState)`

—

The current loading state of the ComboBox. Determines whether or not the progress circle should be shown.

`shouldFlip`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the menu should automatically flip direction when space is limited.

`menuWidth`

`[DimensionValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dna.d.ts:DimensionValue)`

—

Width of the menu. By default, matches width of the combobox. Note that the minimum width of the dropdown is always equal to the combobox's width.

`formValue`

`'text' | 'key'`

`'text'`

Whether the text or key of the selected item is submitted as part of an HTML form. When `allowsCustomValue` is `true`, this option does not apply and the text is always submitted.

`shouldFocusWrap`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether keyboard navigation is circular.

`defaultItems`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

—

The list of ComboBox items (uncontrolled).

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

—

The list of ComboBox items (controlled).

`inputValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The value of the ComboBox input (controlled).

`defaultInputValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The default value of the ComboBox input (uncontrolled).

`allowsCustomValue`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the ComboBox allows a non-item matching input value to be set.

`disabledKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.

`selectedKey`

`[Key](https://reactjs.org/docs/lists-and-keys.html) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The currently selected key in the collection (controlled).

`defaultSelectedKey`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

—

The initial selected key in the collection (uncontrolled).

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input is disabled.

`isReadOnly`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input can be selected but not changed by the user.

`isRequired`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether user input is required on the input before form submission.

`validationBehavior`

`'aria' | 'native'`

`'aria'`

Whether to use native HTML form validation to prevent form submission when the value is missing or invalid, or mark the field as required or invalid via ARIA.

`validate`

`( (value: [ComboBoxValidationValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/combobox/src/index.d.ts:ComboBoxValidationValue) )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if `validationBehavior="native"`. For realtime validation, use the `isInvalid` prop instead.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`label`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The content to display as the label.

`description`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

A description for the field. Provides a hint such as specific requirements for what to choose.

`errorMessage`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | ( (v: [ValidationResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationResult) )) => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

An error message for the field.

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`validationState`

`[ValidationState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationState)`

—

Whether the input should display its "valid" or "invalid" visual styling.

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

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean), , menuTrigger?: [MenuTriggerAction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/combobox/src/index.d.ts:MenuTriggerAction) )) => void`

Method that is called when the open state of the menu changes. Returns the new open state and the action that caused the opening of the menu.

`onSelectionChange`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => void`

Handler that is called when the selection changes.

`onInputChange`

`( (value: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) )) => void`

Handler that is called when the ComboBox input value changes.

`onFocus`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)> )) => void`

Handler that is called when the element receives focus.

`onBlur`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)> )) => void`

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

### Label alignment and position[#](#label-alignment-and-position)

[View guidelines](https://spectrum.adobe.com/page/combo-box/#Label-position)

By default, the label is positioned above the ComboBox. The `labelPosition` prop can be used to position the label to the side. The `labelAlign` prop can be used to align the label as "start" or "end". For left-to-right (LTR) languages, "start" refers to the left most edge of the ComboBox and "end" refers to the right most edge. For right-to-left (RTL) languages, this is flipped.

```
<ComboBox label="Favorite Animal" labelPosition="side" labelAlign="end">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  labelPosition="side"
  labelAlign="end"
>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  labelPosition="side"
  labelAlign="end"
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
```

[View guidelines](https://spectrum.adobe.com/page/combo-box/#Quiet)

```
<ComboBox label="Favorite Animal" isQuiet>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox label="Favorite Animal" isQuiet>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  isQuiet
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
```

[View guidelines](https://spectrum.adobe.com/page/combo-box/#Disabled)

```
<ComboBox label="Favorite Animal" isDisabled>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox label="Favorite Animal" isDisabled>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  isDisabled
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
```

[View guidelines](https://spectrum.adobe.com/page/combo-box/#Read-only)

```
<ComboBox label="Favorite Animal" isReadOnly selectedKey="red panda">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  isReadOnly
  selectedKey="red panda"
>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  isReadOnly
  selectedKey="red panda"
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
```

[View guidelines](https://spectrum.adobe.com/page/combo-box/#Help-text-\(description-and-error-message\))

Both a description and an error message can be supplied to a ComboBox. The description is always visible unless the `validationState` is “invalid” and an error message is provided. The error message can be used to help the user fix their input quickly and should be specific to the detected error. All strings should be localized.

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
    <ComboBox
      validationState={!animalId ? undefined : isValid ? 'valid' : 'invalid'}
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
    </ComboBox>
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
    <ComboBox
      validationState={!animalId
        ? undefined
        : isValid
        ? 'valid'
        : 'invalid'}
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
    </ComboBox>
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
    <ComboBox
      validationState={!animalId
        ? undefined
        : isValid
        ? 'valid'
        : 'invalid'}
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
    </ComboBox>
  );
}
```

A [ContextualHelp](https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html) element may be placed next to the label to provide additional information or help about a ComboBox.

```
import {Content, ContextualHelp, Heading} from '@adobe/react-spectrum';

<ComboBox
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
</ComboBox>
```

```
import {
  Content,
  ContextualHelp,
  Heading
} from '@adobe/react-spectrum';

<ComboBox
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
</ComboBox>
```

```
import {
  Content,
  ContextualHelp,
  Heading
} from '@adobe/react-spectrum';

<ComboBox
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
</ComboBox>
```

[View guidelines](https://spectrum.adobe.com/page/combo-box/#Width)

```
<ComboBox label="Favorite Animal" width="size-6000" maxWidth="100%">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  width="size-6000"
  maxWidth="100%"
>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  width="size-6000"
  maxWidth="100%"
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
```

```
<ComboBox label="Favorite Animal" direction="top">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox label="Favorite Animal" direction="top">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  direction="top"
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
```

* * *

The ComboBox features an overlay that transitions in and out of the page as it is opened and closed. Depending on your device configuration, this overlay may render as a tray or a dropdown and the trigger itself may render as a button or a input. Additionally, the ComboBox features automatic virtualization and may need specific mocks in a test environment to enable said virtualization properly. Please see the following sections in the testing docs for more information on how to handle these behaviors in your test suite.

[Timers](https://react-spectrum.adobe.com/react-spectrum/testing.html#timers)

[Desktop vs Mobile](https://react-spectrum.adobe.com/react-spectrum/testing.html#desktop-vs-mobile)

[Virtualized Components](https://react-spectrum.adobe.com/react-spectrum/testing.html#virtualized-components)

[Long press](https://react-spectrum.adobe.com/react-spectrum/testing.html#simulating-user-long-press)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/combobox/test/ComboBox.test.js) if you find that the above isn't sufficient when resolving issues in your own test cases.

`@react-spectrum/test-utils` offers common combobox interaction utilities which you may find helpful when writing tests. See [here](https://react-spectrum.adobe.com/react-aria/testing.html#react-aria-test-utils) for more information on how to setup these utilities in your tests. Below is the full definition of the combobox tester and a sample of how you could use it in your test suite.

```
// Combobox.test.ts
import {render, within} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/ComboBox.html#testing

it('ComboBox can select an option via keyboard', async function () {
  // Render your test component/app and initialize the combobox tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <ComboBox data-testid="test-combobox">
        ...
      </ComboBox>
    </Provider>
  );
  let comboboxTester = testUtilUser.createTester('ComboBox', {
    root: getByTestId('test-combobox'),
    interactionType: 'keyboard'
  });

  await comboboxTester.open();
  expect(comboboxTester.listbox).toBeInTheDocument();

  let options = comboboxTester.options();
  await comboboxTester.selectOption({ option: options[0] });
  expect(comboboxTester.combobox.value).toBe('One');
  expect(comboboxTester.listbox).not.toBeInTheDocument();
});
```

```
// Combobox.test.ts
import {render, within} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/ComboBox.html#testing

it('ComboBox can select an option via keyboard', async function () {
  // Render your test component/app and initialize the combobox tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <ComboBox data-testid="test-combobox">
        ...
      </ComboBox>
    </Provider>
  );
  let comboboxTester = testUtilUser.createTester(
    'ComboBox',
    {
      root: getByTestId('test-combobox'),
      interactionType: 'keyboard'
    }
  );

  await comboboxTester.open();
  expect(comboboxTester.listbox).toBeInTheDocument();

  let options = comboboxTester.options();
  await comboboxTester.selectOption({ option: options[0] });
  expect(comboboxTester.combobox.value).toBe('One');
  expect(comboboxTester.listbox).not.toBeInTheDocument();
});
```

```
// Combobox.test.ts
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
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/ComboBox.html#testing

it('ComboBox can select an option via keyboard', async function () {
  // Render your test component/app and initialize the combobox tester
  let { getByTestId } =
    render(
      <Provider
        theme={defaultTheme}
      >
        <ComboBox data-testid="test-combobox">
          ...
        </ComboBox>
      </Provider>
    );
  let comboboxTester =
    testUtilUser
      .createTester(
        'ComboBox',
        {
          root:
            getByTestId(
              'test-combobox'
            ),
          interactionType:
            'keyboard'
        }
      );

  await comboboxTester
    .open();
  expect(
    comboboxTester
      .listbox
  ).toBeInTheDocument();

  let options =
    comboboxTester
      .options();
  await comboboxTester
    .selectOption({
      option: options[0]
    });
  expect(
    comboboxTester
      .combobox.value
  ).toBe('One');
  expect(
    comboboxTester
      .listbox
  ).not
    .toBeInTheDocument();
});
```

### Properties

Name

Type

Description

`combobox`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the combobox.

`trigger`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the combobox trigger button.

`listbox`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Returns the combobox's listbox if present.

`sections`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the combobox's sections if present.

`focusedOption`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Returns the currently focused option in the combobox's dropdown if any.

### Methods

Method

Description

`constructor( (opts: [ComboBoxTesterOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:ComboBoxTesterOpts) )): void`

`setInteractionType( (type: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType'] )): void`

Set the interaction type used by the combobox tester.

`open( (opts: [ComboBoxOpenOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/combobox.ts:ComboBoxOpenOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Opens the combobox dropdown. Defaults to using the interaction type set on the combobox tester.

`findOption( (opts: {  optionIndexOrText: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns an option matching the specified index or text content.

`selectOption( (opts: [ComboBoxSelectOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/combobox.ts:ComboBoxSelectOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Selects the desired combobox option. Defaults to using the interaction type set on the combobox tester. If necessary, will open the combobox dropdown beforehand. The desired option can be targeted via the option's node, the option's text, or the option's index.

`close(): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Closes the combobox dropdown.

`options( (opts: {  element?: [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the combobox's options if present. Can be filtered to a subsection of the listbox if provided via `element`.
