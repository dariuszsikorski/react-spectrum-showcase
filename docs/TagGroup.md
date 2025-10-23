---
source: https://react-spectrum.adobe.com/react-spectrum/TagGroup.html
date: Thu, 16 Oct 2025 01:09:31 GMT
---

Tags allow users to categorize content. They can represent keywords or people, and are grouped to describe an item or a search request.

* * *

```
<TagGroup aria-label="Static TagGroup items example">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

```
<TagGroup aria-label="Static TagGroup items example">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

```
<TagGroup aria-label="Static TagGroup items example">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

## Content[#](#content)

* * *

TagGroup is a component that allows users to categorize content. Basic usage of TagGroup, seen in the example above, shows the use of a static collection where the contents of the TagGroup are hard coded. Dynamic collections, as shown below, can be used when the options come from an external data source such as an API, or update over time.

Each item has a unique key defined by the data. In the example below, the `key` of each row element is implicitly defined by the id property of the row object. See [collections](https://react-spectrum.adobe.com/react-stately/collections.html#unique-keys) to learn more about keys in dynamic collections.

```
const items = [
  {id: 1, name: 'News'},
  {id: 2, name: 'Travel'},
  {id: 3, name: 'Gaming'},
  {id: 4, name: 'Shopping'}
];

<TagGroup items={items} aria-label="Dynamic TagGroup items example">
  {item => <Item>{item.name}</Item>}
</TagGroup>
```

```
const items = [
  { id: 1, name: 'News' },
  { id: 2, name: 'Travel' },
  { id: 3, name: 'Gaming' },
  { id: 4, name: 'Shopping' }
];

<TagGroup
  items={items}
  aria-label="Dynamic TagGroup items example"
>
  {(item) => <Item>{item.name}</Item>}
</TagGroup>
```

```
const items = [
  {
    id: 1,
    name: 'News'
  },
  {
    id: 2,
    name: 'Travel'
  },
  {
    id: 3,
    name: 'Gaming'
  },
  {
    id: 4,
    name: 'Shopping'
  }
];

<TagGroup
  items={items}
  aria-label="Dynamic TagGroup items example"
>
  {(item) => (
    <Item>
      {item.name}
    </Item>
  )}
</TagGroup>
```

To internationalize a TagGroup, all text content within the TagGroup should be localized. This includes the `aria-label` provided to the TagGroup if any. For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of TagGroup is automatically flipped.

* * *

A visual label can be provided with the `label` prop. If a visual label isn't included, an `aria-label` must be provided to the TagGroup for accessibility. If the TagGroup is labeled by a separate element, an `aria-labelledby` prop must be provided using the id of the labeling element instead.

```
<TagGroup label="Categories">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

```
<TagGroup label="Categories">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

```
<TagGroup label="Categories">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

* * *

Removing tags can be enabled by providing the `onRemove` prop to the TagGroup, which will receive the set of keys to remove.

```
function Example() {
  let defaultItems = [
    {id: 1, name: 'News'},
    {id: 2, name: 'Travel'},
    {id: 3, name: 'Gaming'},
    {id: 4, name: 'Shopping'}
  ];

  let [items, setItems] = React.useState(defaultItems);

  let onRemove = (keys) => {
    setItems(prevItems => prevItems.filter((item) => !keys.has(item.id)));
  };

  return (
    <TagGroup
      items={items}
      onRemove={onRemove}      aria-label="Removable TagGroup example">
      {item => <Item>{item.name}</Item>}
    </TagGroup>
  );
}
```

```
function Example() {
  let defaultItems = [
    { id: 1, name: 'News' },
    { id: 2, name: 'Travel' },
    { id: 3, name: 'Gaming' },
    { id: 4, name: 'Shopping' }
  ];

  let [items, setItems] = React.useState(defaultItems);

  let onRemove = (keys) => {
    setItems((prevItems) =>
      prevItems.filter((item) => !keys.has(item.id))
    );
  };

  return (
    <TagGroup
      items={items}
      onRemove={onRemove}      aria-label="Removable TagGroup example"
    >
      {(item) => <Item>{item.name}</Item>}
    </TagGroup>
  );
}
```

```
function Example() {
  let defaultItems = [
    {
      id: 1,
      name: 'News'
    },
    {
      id: 2,
      name: 'Travel'
    },
    {
      id: 3,
      name: 'Gaming'
    },
    {
      id: 4,
      name: 'Shopping'
    }
  ];

  let [items, setItems] =
    React.useState(
      defaultItems
    );

  let onRemove = (
    keys
  ) => {
    setItems(
      (prevItems) =>
        prevItems.filter(
          (item) =>
            !keys.has(
              item.id
            )
        )
    );
  };

  return (
    <TagGroup
      items={items}
      onRemove={onRemove}      aria-label="Removable TagGroup example"
    >
      {(item) => (
        <Item>
          {item.name}
        </Item>
      )}
    </TagGroup>
  );
}
```

TagGroup supports an `onAction` handler that, when used with the `actionLabel` prop, will add an action button at the end of the tags that can be used to perform a custom action.

```
<TagGroup
  actionLabel="Clear"
  onAction={() => alert('Clear action pressed.')}  aria-label="TagGroup with action">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

```
<TagGroup
  actionLabel="Clear"
  onAction={() => alert('Clear action pressed.')}  aria-label="TagGroup with action">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

```
<TagGroup
  actionLabel="Clear"
  onAction={() =>
    alert(
      'Clear action pressed.'
    )}  aria-label="TagGroup with action"
>
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

* * *

Tags may be links to another page or website. This can be achieved by passing the `href` prop to the `<Item>` component.

```
<TagGroup label="Links">
  <Item href="https://adobe.com/" target="_blank">Adobe</Item>
  <Item href="https://apple.com/" target="_blank">Apple</Item>
  <Item href="https://google.com/" target="_blank">Google</Item>
  <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
</TagGroup>
```

```
<TagGroup label="Links">
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
</TagGroup>
```

```
<TagGroup label="Links">
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
</TagGroup>
```

The `<Item>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Spectrum components that support links, this works via the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-spectrum/routing.html) to learn how to set this up.

* * *

Name

Type

Default

Description

`children`

`[CollectionChildren](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:CollectionChildren)<T>`

—

The contents of the collection.

`actionLabel`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The label to display on the action button.

`renderEmptyState`

`() => JSX.Element`

—

Sets what the TagGroup should render when there are no tags to display.

`maxRows`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

Limit the number of rows initially shown. This will render a button that allows the user to expand to show all tags.

`shouldSelectOnPressUp`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether selection should occur on press up instead of press down.

`errorMessage`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

An error message for the field.

`escapeKeyBehavior`

`'clearSelection' | 'none'`

`'clearSelection'`

Whether pressing the escape key should clear selection in the TagGroup or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to easily clear selection. Only use if the escape key is being handled externally or should not trigger selection clearing contextually.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<T>`

—

Item objects in the collection.

`label`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The content to display as the label.

`description`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

A description for the field. Provides a hint such as specific requirements for what to choose.

`labelPosition`

`[LabelPosition](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/labelable.d.ts:LabelPosition)`

`'top'`

The label's overall position relative to the element it is labeling.

`labelAlign`

`[Alignment](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/labelable.d.ts:Alignment)`

`'start'`

The label's horizontal alignment relative to the element it is labeling.

`contextualHelp`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

A ContextualHelp element to place next to the label.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input value is invalid.

Events

Name

Type

Description

`onAction`

`() => void`

Handler that is called when the action button is pressed.

`onRemove`

`( (keys: [Set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<[Key](https://reactjs.org/docs/lists-and-keys.html)> )) => void`

Handler that is called when a user deletes a tag.

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
<TagGroup aria-label="TagGroup with icons example">
  <Item textValue="News">
    <News />
    <Text>News</Text>
  </Item>
  <Item textValue="Travel">
    <Airplane />
    <Text>Travel</Text>
  </Item>
  <Item textValue="Gaming">
    <Game />
    <Text>Gaming</Text>
  </Item>
  <Item textValue="Shopping">
    <ShoppingCart />
    <Text>Shopping</Text>
  </Item>
</TagGroup>
```

```
<TagGroup aria-label="TagGroup with icons example">
  <Item textValue="News">
    <News />
    <Text>News</Text>
  </Item>
  <Item textValue="Travel">
    <Airplane />
    <Text>Travel</Text>
  </Item>
  <Item textValue="Gaming">
    <Game />
    <Text>Gaming</Text>
  </Item>
  <Item textValue="Shopping">
    <ShoppingCart />
    <Text>Shopping</Text>
  </Item>
</TagGroup>
```

```
<TagGroup aria-label="TagGroup with icons example">
  <Item textValue="News">
    <News />
    <Text>News</Text>
  </Item>
  <Item textValue="Travel">
    <Airplane />
    <Text>Travel</Text>
  </Item>
  <Item textValue="Gaming">
    <Game />
    <Text>Gaming</Text>
  </Item>
  <Item textValue="Shopping">
    <ShoppingCart />
    <Text>
      Shopping
    </Text>
  </Item>
</TagGroup>
```

```
<TagGroup aria-label="TagGroup with avatars example">
  <Item textValue="Person 1">
    <Avatar src="https://i.imgur.com/kJOwAdv.png" />
    <Text>Person 1</Text>
  </Item>
  <Item textValue="Person 2">
    <Avatar src="https://i.imgur.com/kJOwAdv.png" />
    <Text>Person 2</Text>
  </Item>
  <Item textValue="Person 3">
    <Avatar src="https://i.imgur.com/kJOwAdv.png" />
    <Text>Person 3</Text>
  </Item>
  <Item textValue="Person 4">
    <Avatar src="https://i.imgur.com/kJOwAdv.png" />
    <Text>Person 4</Text>
  </Item>
</TagGroup>
```

```
<TagGroup aria-label="TagGroup with avatars example">
  <Item textValue="Person 1">
    <Avatar src="https://i.imgur.com/kJOwAdv.png" />
    <Text>Person 1</Text>
  </Item>
  <Item textValue="Person 2">
    <Avatar src="https://i.imgur.com/kJOwAdv.png" />
    <Text>Person 2</Text>
  </Item>
  <Item textValue="Person 3">
    <Avatar src="https://i.imgur.com/kJOwAdv.png" />
    <Text>Person 3</Text>
  </Item>
  <Item textValue="Person 4">
    <Avatar src="https://i.imgur.com/kJOwAdv.png" />
    <Text>Person 4</Text>
  </Item>
</TagGroup>
```

```
<TagGroup aria-label="TagGroup with avatars example">
  <Item textValue="Person 1">
    <Avatar src="https://i.imgur.com/kJOwAdv.png" />
    <Text>
      Person 1
    </Text>
  </Item>
  <Item textValue="Person 2">
    <Avatar src="https://i.imgur.com/kJOwAdv.png" />
    <Text>
      Person 2
    </Text>
  </Item>
  <Item textValue="Person 3">
    <Avatar src="https://i.imgur.com/kJOwAdv.png" />
    <Text>
      Person 3
    </Text>
  </Item>
  <Item textValue="Person 4">
    <Avatar src="https://i.imgur.com/kJOwAdv.png" />
    <Text>
      Person 4
    </Text>
  </Item>
</TagGroup>
```

### Label position and alignment[#](#label-position-and-alignment)

By default, the label is positioned above the TagGroup. The `labelPosition` prop can be used to position the label to the side. The `labelAlign` prop can be used to align the label as "start" or "end". For left-to-right (LTR) languages, "start" refers to the left most edge of the TagGroup and "end" refers to the right most edge. For right-to-left (RTL) languages, this is flipped.

```
<TagGroup label="Categories" labelPosition="side" labelAlign="end">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

```
<TagGroup
  label="Categories"
  labelPosition="side"
  labelAlign="end"
>
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

```
<TagGroup
  label="Categories"
  labelPosition="side"
  labelAlign="end"
>
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

[View guidelines](https://spectrum.adobe.com/page/help-text/)

Both a description and an error message can be supplied to a TagGroup. The description is always visible unless `isInvalid` is true and an error message is provided. The error message can be used to help the user fix their input quickly and should be specific to the detected error. All strings should be localized.

```
function Example() {
  let defaultItems = [
    {id: 1, name: 'News'},
    {id: 2, name: 'Travel'},
    {id: 3, name: 'Gaming'},
    {id: 4, name: 'Shopping'}
  ];

  let [items, setItems] = React.useState(defaultItems);

  let onRemove = (keys) => {
    setItems(prevItems => prevItems.filter((item) => !keys.has(item.id)));
  };

  let isValid = items.length <= 3;

  return (
    <TagGroup
      label="Categories"
      items={items}
      onRemove={onRemove}
      aria-label="TagGroup help text example"
      isInvalid={!isValid}
      description="Please include tags for related categories."
      errorMessage="Must contain no more than 3 tags. Please remove some."
      >
      {item => <Item>{item.name}</Item>}
    </TagGroup>
  );
}
```

```
function Example() {
  let defaultItems = [
    { id: 1, name: 'News' },
    { id: 2, name: 'Travel' },
    { id: 3, name: 'Gaming' },
    { id: 4, name: 'Shopping' }
  ];

  let [items, setItems] = React.useState(defaultItems);

  let onRemove = (keys) => {
    setItems((prevItems) =>
      prevItems.filter((item) => !keys.has(item.id))
    );
  };

  let isValid = items.length <= 3;

  return (
    <TagGroup
      label="Categories"
      items={items}
      onRemove={onRemove}
      aria-label="TagGroup help text example"
      isInvalid={!isValid}
      description="Please include tags for related categories."
      errorMessage="Must contain no more than 3 tags. Please remove some."
    >
      {(item) => <Item>{item.name}</Item>}
    </TagGroup>
  );
}
```

```
function Example() {
  let defaultItems = [
    {
      id: 1,
      name: 'News'
    },
    {
      id: 2,
      name: 'Travel'
    },
    {
      id: 3,
      name: 'Gaming'
    },
    {
      id: 4,
      name: 'Shopping'
    }
  ];

  let [items, setItems] =
    React.useState(
      defaultItems
    );

  let onRemove = (
    keys
  ) => {
    setItems(
      (prevItems) =>
        prevItems.filter(
          (item) =>
            !keys.has(
              item.id
            )
        )
    );
  };

  let isValid =
    items.length <= 3;

  return (
    <TagGroup
      label="Categories"
      items={items}
      onRemove={onRemove}
      aria-label="TagGroup help text example"
      isInvalid={!isValid}
      description="Please include tags for related categories."
      errorMessage="Must contain no more than 3 tags. Please remove some."
    >
      {(item) => (
        <Item>
          {item.name}
        </Item>
      )}
    </TagGroup>
  );
}
```

A [ContextualHelp](https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html) element may be placed next to the label to provide additional information or help about a TagGroup.

```
import {Content, ContextualHelp, Heading} from '@adobe/react-spectrum';

<TagGroup
  label="Categories"
  contextualHelp={
    <ContextualHelp>
      <Heading>What are tags?</Heading>
      <Content>Tags allow users to categorize content.</Content>
    </ContextualHelp>
  }>
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

```
import {
  Content,
  ContextualHelp,
  Heading
} from '@adobe/react-spectrum';

<TagGroup
  label="Categories"
  contextualHelp={
    <ContextualHelp>
      <Heading>What are tags?</Heading>
      <Content>
        Tags allow users to categorize content.
      </Content>
    </ContextualHelp>
  }
>
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

```
import {
  Content,
  ContextualHelp,
  Heading
} from '@adobe/react-spectrum';

<TagGroup
  label="Categories"
  contextualHelp={
    <ContextualHelp>
      <Heading>
        What are tags?
      </Heading>
      <Content>
        Tags allow
        users to
        categorize
        content.
      </Content>
    </ContextualHelp>
  }
>
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
```

TagGroup supports a `maxRows` prop that will limit the number of rows initially shown. This will add an action button that can be pressed to show the remaining tags.

```
<View
  maxWidth="size-3400"
  minHeight="size-2000"
  padding="size-150"
  borderWidth="thin"
  borderColor="dark"
  borderRadius="medium"
>
  <TagGroup
    maxRows={2}    aria-label="Static TagGroup items example with maxRows set"
  >
    <Item>News</Item>
    <Item>Travel</Item>
    <Item>Gaming</Item>
    <Item>Shopping</Item>
    <Item>Business</Item>
    <Item>Entertainment</Item>
    <Item>Food</Item>
    <Item>Technology</Item>
    <Item>Politics</Item>
    <Item>Health</Item>
    <Item>Science</Item>
  </TagGroup>
</View>
```

```
<View
  maxWidth="size-3400"
  minHeight="size-2000"
  padding="size-150"
  borderWidth="thin"
  borderColor="dark"
  borderRadius="medium"
>
  <TagGroup
    maxRows={2}    aria-label="Static TagGroup items example with maxRows set"
  >
    <Item>News</Item>
    <Item>Travel</Item>
    <Item>Gaming</Item>
    <Item>Shopping</Item>
    <Item>Business</Item>
    <Item>Entertainment</Item>
    <Item>Food</Item>
    <Item>Technology</Item>
    <Item>Politics</Item>
    <Item>Health</Item>
    <Item>Science</Item>
  </TagGroup>
</View>
```

```
<View
  maxWidth="size-3400"
  minHeight="size-2000"
  padding="size-150"
  borderWidth="thin"
  borderColor="dark"
  borderRadius="medium"
>
  <TagGroup
    maxRows={2}    aria-label="Static TagGroup items example with maxRows set"
  >
    <Item>News</Item>
    <Item>Travel</Item>
    <Item>Gaming</Item>
    <Item>
      Shopping
    </Item>
    <Item>
      Business
    </Item>
    <Item>
      Entertainment
    </Item>
    <Item>Food</Item>
    <Item>
      Technology
    </Item>
    <Item>
      Politics
    </Item>
    <Item>Health</Item>
    <Item>
      Science
    </Item>
  </TagGroup>
</View>
```

Use the `renderEmptyState` prop to customize what the TagGroup will display if there are no tags provided.

```
import {Link} from '@adobe/react-spectrum';

function renderEmptyState() {
  return (
    <span>
      No categories.{' '}
      <Link>
        <a href="//react-spectrum.com">Click here</a>
      </Link>{' '}
      to add some.
    </span>
  );
}

<TagGroup
  label="Categories"
  renderEmptyState={renderEmptyState}
>
  {[]}
</TagGroup>
```

```
import {Link} from '@adobe/react-spectrum';

function renderEmptyState() {
  return (
    <span>
      No categories.{' '}
      <Link>
        <a href="//react-spectrum.com">Click here</a>
      </Link>{' '}
      to add some.
    </span>
  );
}

<TagGroup
  label="Categories"
  renderEmptyState={renderEmptyState}
>
  {[]}
</TagGroup>
```

```
import {Link} from '@adobe/react-spectrum';

function renderEmptyState() {
  return (
    <span>
      No categories.{' '}
      <Link>
        <a href="//react-spectrum.com">
          Click here
        </a>
      </Link>{' '}
      to add some.
    </span>
  );
}

<TagGroup
  label="Categories"
  renderEmptyState={renderEmptyState}
>
  {[]}
</TagGroup>
```
