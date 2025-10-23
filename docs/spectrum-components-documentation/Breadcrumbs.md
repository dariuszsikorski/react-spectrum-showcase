---
source: https://react-spectrum.adobe.com/react-spectrum/Breadcrumbs.html
date: Thu, 16 Oct 2025 01:26:31 GMT
---

Breadcrumbs show hierarchy and navigational context for a user’s location within an application.

* * *

```
<Breadcrumbs>
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
  <Item key="march 2020 assets">March 2020 Assets</Item>
</Breadcrumbs>
```

```
<Breadcrumbs>
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
  <Item key="march 2020 assets">March 2020 Assets</Item>
</Breadcrumbs>
```

```
<Breadcrumbs>
  <Item key="home">
    Home
  </Item>
  <Item key="trendy">
    Trendy
  </Item>
  <Item key="march 2020 assets">
    March 2020 Assets
  </Item>
</Breadcrumbs>
```

## Content[#](#content)

* * *

Breadcrumbs follow the [Collection Components](https://react-spectrum.adobe.com/react-stately/collections.html) API, accepting only static children. Similar to [Menu](https://react-spectrum.adobe.com/react-spectrum/Menu.html), Breadcrumbs accepts <`[Item](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/collections/src/Item.ts:Item)`\> elements as children, each with a `key` prop, which is passed to the `onAction` handler to identify the selected item. Basic usage of Breadcrumbs, as seen in the example above, shows a list of `[Item](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/collections/src/Item.ts:Item)` elements, populated with a string. See [Events](#events) for more information.

In order to internationalize Breadcrumbs, the content of all child items should be localized.

* * *

Use the `onAction` prop as a callback to handle press events on items.

```
function Example() {
  let folders = [
    {id: 1, label: 'Home'},
    {id: 2, label: 'Trendy'},
    {id: 3, label: 'March 2020 Assets'}
  ];
  let [folderId, setFolderId] = React.useState(null);
  return (
    <div>
      <Breadcrumbs onAction={(a) => setFolderId(a)}>
        {folders.map(f => <Item key={f.id}>{f.label}</Item>)}
      </Breadcrumbs>
      <p>You pressed folder ID: {folderId}</p>
    </div>
  );
}
```

```
function Example() {
  let folders = [
    { id: 1, label: 'Home' },
    { id: 2, label: 'Trendy' },
    { id: 3, label: 'March 2020 Assets' }
  ];
  let [folderId, setFolderId] = React.useState(null);
  return (
    <div>
      <Breadcrumbs onAction={(a) => setFolderId(a)}>
        {folders.map((f) => (
          <Item key={f.id}>{f.label}</Item>
        ))}
      </Breadcrumbs>
      <p>You pressed folder ID: {folderId}</p>
    </div>
  );
}
```

```
function Example() {
  let folders = [
    {
      id: 1,
      label: 'Home'
    },
    {
      id: 2,
      label: 'Trendy'
    },
    {
      id: 3,
      label:
        'March 2020 Assets'
    }
  ];
  let [
    folderId,
    setFolderId
  ] = React.useState(
    null
  );
  return (
    <div>
      <Breadcrumbs
        onAction={(a) =>
          setFolderId(a)}
      >
        {folders.map(
          (f) => (
            <Item
              key={f.id}
            >
              {f.label}
            </Item>
          )
        )}
      </Breadcrumbs>
      <p>
        You pressed
        folder ID:{' '}
        {folderId}
      </p>
    </div>
  );
}
```

* * *

By default, interacting with an item in Breadcrumbs triggers `onAction`. Items may also be links to another page or website. This can be achieved by passing the `href` prop to the `<Item>` component.

```
<Breadcrumbs>
  <Item href="/">Home</Item>
  <Item href="/react-spectrum/">React Spectrum</Item>
  <Item href="/react-spectrum/Breadcrumbs.html">Breadcrumbs</Item>
</Breadcrumbs>
```

```
<Breadcrumbs>
  <Item href="/">Home</Item>
  <Item href="/react-spectrum/">React Spectrum</Item>
  <Item href="/react-spectrum/Breadcrumbs.html">
    Breadcrumbs
  </Item>
</Breadcrumbs>
```

```
<Breadcrumbs>
  <Item href="/">
    Home
  </Item>
  <Item href="/react-spectrum/">
    React Spectrum
  </Item>
  <Item href="/react-spectrum/Breadcrumbs.html">
    Breadcrumbs
  </Item>
</Breadcrumbs>
```

The `<Item>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Spectrum components that support links, this works via the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-spectrum/routing.html) to learn how to set this up.

* * *

Name

Type

Default

Description

`children`

`[ReactElement](https://reactjs.org/docs/rendering-elements.html)<[ItemProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:ItemProps)<T>> | [ReactElement](https://reactjs.org/docs/rendering-elements.html)<[ItemProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:ItemProps)<T>>[]`

—

The breadcrumb items.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the Breadcrumbs are disabled.

`size`

`'S' | 'M' | 'L'`

`'L'`

Size of the Breadcrumbs including spacing and layout.

`showRoot`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether to always show the root item if the items are collapsed.

`isMultiline`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether to place the last Breadcrumb item onto a new line.

`autoFocusCurrent`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether to autoFocus the last Breadcrumb item when the Breadcrumbs render.

Events

Name

Type

Description

`onAction`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) )) => void`

Called when an item is acted upon (usually selection via press).

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

[View guidelines](https://spectrum.adobe.com/page/breadcrumbs/#Options)

Small

```
<Breadcrumbs size="S">
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
</Breadcrumbs>
```

```
<Breadcrumbs size="S">
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
</Breadcrumbs>
```

```
<Breadcrumbs size="S">
  <Item key="home">
    Home
  </Item>
  <Item key="trendy">
    Trendy
  </Item>
</Breadcrumbs>
```

Medium

```
<Breadcrumbs size="M">
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
</Breadcrumbs>
```

```
<Breadcrumbs size="M">
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
</Breadcrumbs>
```

```
<Breadcrumbs size="M">
  <Item key="home">
    Home
  </Item>
  <Item key="trendy">
    Trendy
  </Item>
</Breadcrumbs>
```

Large (default)

```
<Breadcrumbs size="L">
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
</Breadcrumbs>
```

```
<Breadcrumbs size="L">
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
</Breadcrumbs>
```

```
<Breadcrumbs size="L">
  <Item key="home">
    Home
  </Item>
  <Item key="trendy">
    Trendy
  </Item>
</Breadcrumbs>
```

Use the `isMultiline` prop to place the last item below the other items. This adds emphasis to the current location as a page title or heading.

```
<Breadcrumbs isMultiline>
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
  <Item key="march 2020 assets">March 2020 Assets</Item>
</Breadcrumbs>
```

```
<Breadcrumbs isMultiline>
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
  <Item key="march 2020 assets">March 2020 Assets</Item>
</Breadcrumbs>
```

```
<Breadcrumbs
  isMultiline
>
  <Item key="home">
    Home
  </Item>
  <Item key="trendy">
    Trendy
  </Item>
  <Item key="march 2020 assets">
    March 2020 Assets
  </Item>
</Breadcrumbs>
```

[View guidelines](https://spectrum.adobe.com/page/breadcrumbs/#With-root-context)

Some applications find that always displaying the root item is useful to orient users. This variation keeps the root visible when other items are truncated into the menu.

```
<View overflow="hidden" width="200px">
  <Breadcrumbs showRoot>
    <Item key="home">Home</Item>
    <Item key="trendy">Trendy</Item>
    <Item key="2020 assets">March 2020 Assets</Item>
    <Item key="winter">Winter</Item>
    <Item key="holiday">Holiday</Item>
  </Breadcrumbs>
</View>
```

```
<View overflow="hidden" width="200px">
  <Breadcrumbs showRoot>
    <Item key="home">Home</Item>
    <Item key="trendy">Trendy</Item>
    <Item key="2020 assets">March 2020 Assets</Item>
    <Item key="winter">Winter</Item>
    <Item key="holiday">Holiday</Item>
  </Breadcrumbs>
</View>
```

```
<View
  overflow="hidden"
  width="200px"
>
  <Breadcrumbs
    showRoot
  >
    <Item key="home">
      Home
    </Item>
    <Item key="trendy">
      Trendy
    </Item>
    <Item key="2020 assets">
      March 2020 Assets
    </Item>
    <Item key="winter">
      Winter
    </Item>
    <Item key="holiday">
      Holiday
    </Item>
  </Breadcrumbs>
</View>
```

Breadcrumbs in a disabled state shows items, but indicates that navigation is not available. This can be used to maintain layout continuity.

```
<Breadcrumbs isDisabled>
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
  <Item key="march 2020 assets">March 2020 Assets</Item>
</Breadcrumbs>
```

```
<Breadcrumbs isDisabled>
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
  <Item key="march 2020 assets">March 2020 Assets</Item>
</Breadcrumbs>
```

```
<Breadcrumbs
  isDisabled
>
  <Item key="home">
    Home
  </Item>
  <Item key="trendy">
    Trendy
  </Item>
  <Item key="march 2020 assets">
    March 2020 Assets
  </Item>
</Breadcrumbs>
```

[View guidelines](https://spectrum.adobe.com/page/breadcrumbs/#Truncation-and-overflow)

Breadcrumbs collapses items into a menu when space is limited. It will only show a maximum of 4 visible items including the root and menu button, if either are visible. If the root item cannot be rendered in the available horizontal space, it will be collapsed into the menu regardless of `showRoot`. Note that the last breadcrumb item will automatically truncate with an ellipsis instead of collapsing into the menu.

Resize your browser window to see the above behavior in the examples below.

```
<Breadcrumbs>
  <Item key="shared">My Shared Documents</Item>
  <Item key="catalogue">North America Spring Catalogue</Item>
  <Item key="march 2020">March 2020</Item>
  <Item key="assets">
    Downloaded Screenshots and Assets (approval required)
  </Item>
  <Item key="streetwear">Streetwear</Item>
  <Item key="jackets">Jackets</Item>
</Breadcrumbs>
```

```
<Breadcrumbs>
  <Item key="shared">My Shared Documents</Item>
  <Item key="catalogue">
    North America Spring Catalogue
  </Item>
  <Item key="march 2020">March 2020</Item>
  <Item key="assets">
    Downloaded Screenshots and Assets (approval required)
  </Item>
  <Item key="streetwear">Streetwear</Item>
  <Item key="jackets">Jackets</Item>
</Breadcrumbs>
```

```
<Breadcrumbs>
  <Item key="shared">
    My Shared Documents
  </Item>
  <Item key="catalogue">
    North America
    Spring Catalogue
  </Item>
  <Item key="march 2020">
    March 2020
  </Item>
  <Item key="assets">
    Downloaded
    Screenshots and
    Assets (approval
    required)
  </Item>
  <Item key="streetwear">
    Streetwear
  </Item>
  <Item key="jackets">
    Jackets
  </Item>
</Breadcrumbs>
```

```
<Breadcrumbs showRoot>
  <Item key="shared">My Shared Documents</Item>
  <Item key="catalogue">North America Spring Catalogue</Item>
  <Item key="march 2020">March 2020</Item>
  <Item key="assets">
    Downloaded Screenshots and Assets (approval required)
  </Item>
</Breadcrumbs>
```

```
<Breadcrumbs showRoot>
  <Item key="shared">My Shared Documents</Item>
  <Item key="catalogue">
    North America Spring Catalogue
  </Item>
  <Item key="march 2020">March 2020</Item>
  <Item key="assets">
    Downloaded Screenshots and Assets (approval required)
  </Item>
</Breadcrumbs>
```

```
<Breadcrumbs showRoot>
  <Item key="shared">
    My Shared Documents
  </Item>
  <Item key="catalogue">
    North America
    Spring Catalogue
  </Item>
  <Item key="march 2020">
    March 2020
  </Item>
  <Item key="assets">
    Downloaded
    Screenshots and
    Assets (approval
    required)
  </Item>
</Breadcrumbs>
```
