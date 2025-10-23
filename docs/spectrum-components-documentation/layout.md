---
source: https://react-spectrum.adobe.com/react-spectrum/layout.html
date: Thu, 16 Oct 2025 01:03:29 GMT
---

This page describes how to build application layouts with React Spectrum using Flex or Grid, as well as how to integrate with pre-defined Spectrum layouts using slots.

* * *

React Spectrum includes layout components to help build Spectrum compliant applications more easily. The [Flex](https://react-spectrum.adobe.com/react-spectrum/Flex.html) and [Grid](https://react-spectrum.adobe.com/react-spectrum/Grid.html) components are containers, which are responsible for the layout of their children. `Flex` follows the [CSS flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) algorithm, while `Grid` implements [CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout). These components provide props with pre-defined Spectrum variables for sizing, spacing, and other layout options. You can use `Flex` and `Grid` together as needed to build different parts of your application, and even nest them to create more complex layouts.

In general, you should prefer using flex and grid over other CSS layout models. Spacing between components should be left to parent layout components rather than added as via margins to specific children. This helps ensure components are composable when reused in different places, and ensures that spacing is consistent.

In addition to `Flex` and `Grid`, some React Spectrum components include pre-built layouts which you can insert your content into via slots. This often happens automatically through the use of semantic elements, but can also be configured through props. For example, the [Dialog](https://react-spectrum.adobe.com/react-spectrum/Dialog.html) component accepts [Heading](https://react-spectrum.adobe.com/react-spectrum/Heading.html), [Content](https://react-spectrum.adobe.com/react-spectrum/Content.html), and [Footer](https://react-spectrum.adobe.com/react-spectrum/Footer.html) elements as children and will handle the layout automatically.

* * *

The [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) layout model is a simple yet versatile method of laying out components in rows and columns. You can use it to build vertical or horizontal stacks, simple wrapping grids, and more. The [Flex](https://react-spectrum.adobe.com/react-spectrum/Flex.html) component can be used to create flexbox containers, and any React Spectrum component can be used as a child. Flex layouts are also automatically mirrored in right-to-left languages, and can be nested to create more complex layouts.

The `gap`, `rowGap` and `columnGap` can be defined with [Spectrum dimension variables](https://react-spectrum.adobe.com/react-spectrum/styling.html#dimension-values) to ensure consistency across applications, and allow the layout to adapt to different devices automatically.

This example shows a simple vertical stack, with a gap between each item defined using a [Spectrum dimension variable](https://react-spectrum.adobe.com/react-spectrum/styling.html#dimension-values).

```
<Flex direction="column" width="size-2000" gap="size-100">
  <View backgroundColor="celery-600" height="size-800" />
  <View backgroundColor="blue-600" height="size-800" />
  <View backgroundColor="magenta-600" height="size-800" />
</Flex>
```

```
<Flex direction="column" width="size-2000" gap="size-100">
  <View backgroundColor="celery-600" height="size-800" />
  <View backgroundColor="blue-600" height="size-800" />
  <View backgroundColor="magenta-600" height="size-800" />
</Flex>
```

```
<Flex
  direction="column"
  width="size-2000"
  gap="size-100"
>
  <View
    backgroundColor="celery-600"
    height="size-800"
  />
  <View
    backgroundColor="blue-600"
    height="size-800"
  />
  <View
    backgroundColor="magenta-600"
    height="size-800"
  />
</Flex>
```

You can learn more about `Flex` and see more examples on the [Flex](https://react-spectrum.adobe.com/react-spectrum/Flex.html) page. In addition, there are many great resources on the web for learning flexbox.

-   [The MDN guide to flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) — full walkthrough of flexbox layout.
-   [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — great reference for all of the properties supported by flexbox.

* * *

[CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout) is a powerful way to lay out elements in two dimensions. It can be used to to build full page application layouts, or smaller user interface elements. It is especially powerful because it allows you to build many types of layouts without extra presentational elements, keeping your code clean and semantic. In addition, grid layouts are automatically mirrored in right-to-left languages.

The [Grid](https://react-spectrum.adobe.com/react-spectrum/Grid.html) component can be used as a container to define a grid layout. Any React Spectrum component can be used as a child of a `Grid`. The `Grid` component extends the CSS syntax to support defining grids using [Spectrum-defined dimension values](https://react-spectrum.adobe.com/react-spectrum/styling.html#dimension-values). This ensures that sizing and spacing is consistent between applications, and allows the layout to adapt to different devices automatically.

There are many ways to define grids, but the simplest is to use the `areas` prop to declaratively specify your layout using named areas. This prop accepts an array of strings which represent rows. Within the rows, you specify space separated names for grid areas. The children of the `Grid` can declare the `gridArea` prop, which places them into these named regions.

In addition, you can define the `columns` and `rows` props on the `Grid` container to specify the widths and heights of the columns and rows respectively. This can be done using [Spectrum dimension values](https://react-spectrum.adobe.com/react-spectrum/styling.html#dimension-values) to ensure they are adaptive on various devices.

The following example shows how you could use `Grid` to declare a common application layout, with a header, sidebar, content area, and footer. Notice how there are no nested layout elements — the layout is entirely declared in the `Grid` and the children simply declare where they should be placed.

```
<Grid
  areas={[
    'header  header',
    'sidebar content',
    'footer  footer'
  ]}
  columns={['1fr', '3fr']}
  rows={['size-1000', 'auto', 'size-1000']}
  height="size-6000"
  gap="size-100">
  <View backgroundColor="celery-600" gridArea="header" />
  <View backgroundColor="blue-600" gridArea="sidebar" />
  <View backgroundColor="purple-600" gridArea="content" />
  <View backgroundColor="magenta-600" gridArea="footer" />
</Grid>
```

```
<Grid
  areas={[
    'header  header',
    'sidebar content',
    'footer  footer'
  ]}
  columns={['1fr', '3fr']}
  rows={['size-1000', 'auto', 'size-1000']}
  height="size-6000"
  gap="size-100">
  <View backgroundColor="celery-600" gridArea="header" />
  <View backgroundColor="blue-600" gridArea="sidebar" />
  <View backgroundColor="purple-600" gridArea="content" />
  <View backgroundColor="magenta-600" gridArea="footer" />
</Grid>
```

```
<Grid
  areas={[
    'header  header',
    'sidebar content',
    'footer  footer'
  ]}
  columns={[
    '1fr',
    '3fr'
  ]}
  rows={[
    'size-1000',
    'auto',
    'size-1000'
  ]}
  height="size-6000"
  gap="size-100"
>
  <View
    backgroundColor="celery-600"
    gridArea="header"
  />
  <View
    backgroundColor="blue-600"
    gridArea="sidebar"
  />
  <View
    backgroundColor="purple-600"
    gridArea="content"
  />
  <View
    backgroundColor="magenta-600"
    gridArea="footer"
  />
</Grid>
```

You can learn more about `Grid` and see more examples on the [Grid](https://react-spectrum.adobe.com/react-spectrum/Grid.html) page. In addition, there are many great resources on the web for learning CSS grid.

-   [The MDN guide to CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) — full walkthrough of grid layout.
-   [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid) — great reference for all of the properties supported by grid.
-   [The Difference Between Explicit and Implicit Grids](https://css-tricks.com/difference-explicit-implicit-grids/) — an article that discusses the various ways of defining grids.

* * *

All props of the `Flex` and `Grid` components support object syntax to specify different values for the prop depending on the responsive breakpoint. By default, breakpoints are named following t-shirt sizing, and correspond to common device resolutions. Breakpoints can be overridden at the application level via the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component. In addition to breakpoints, a `base` value can be provided to style props, which will be applied when no breakpoints match.

This example applies Flex direction `row` by default, but switches to `column` at the large breakpoint.

```
<Flex direction={{base: 'row', L: 'column'}} />
```

```
<Flex direction={{base: 'row', L: 'column'}} />
```

```
<Flex
  direction={{
    base: 'row',
    L: 'column'
  }}
/>
```

React Spectrum's breakpoints are mobile first, which means style props apply at that breakpoint and above. For example, the `L` breakpoint is applied at screen sizes 1024px and wider. The `base` value should be used to specify the layout at the smallest possible screen size, and additional breakpoints may be added to adapt the layout for larger devices.

The following example shows how you could use `Grid` to define a responsive layout. It consists of a header, navigation area, content area, table of contents, and footer. On small screens, all of these areas are displayed in a vertical stack, and the table of contents is hidden. At the medium breakpoint, the navigation and content appear next to each other. At the large breakpoint, the table of contents appears.

This layout is accomplished by changing the grid areas and columns at the medium and large breakpoints. In addition, the `isHidden` prop of the table of contents element is set to true except at the large breakpoint. Within the navigation area, the boxes representing links are displayed in a vertical stack on large displays, and a horizontal stack on small screens. This is done by changing the Flex `direction` prop between `row` and `column` at the medium breakpoint.

Resize your browser window to see how the layout changes.

```
<Grid
  areas={{
    base: [
      'header',
      'nav',
      'content',
      'footer'
    ],
    M: [
      'header   header',
      'nav      content',
      'nav      content',
      'footer   footer'
    ],
    L: [
      'header header  header',
      'nav    content toc',
      'nav    content toc',
      'footer footer  footer'
    ]
  }}
  columns={{
    M: ['size-2000', '1fr'],
    L: ['size-2000', '1fr', 'size-2000']
  }}
  gap="size-100"
>
  <View
    backgroundColor="celery-600"
    gridArea="header"
    height="size-1000"
  />
  <View
    backgroundColor="blue-600"
    gridArea="nav"
  >
    <Flex
      direction={{ base: 'row', M: 'column' }}
      gap="size-100"
      margin="size-100"
    >
      <View
        backgroundColor="static-gray-50"
        height="size-250"
        minWidth="size-900"
      />
      <View
        backgroundColor="static-gray-50"
        height="size-250"
        minWidth="size-900"
      />
      <View
        backgroundColor="static-gray-50"
        height="size-250"
        minWidth="size-900"
      />
    </Flex>
  </View>
  <View
    backgroundColor="purple-600"
    gridArea="content"
    height="size-4600"
  />
  <View
    backgroundColor="magenta-600"
    gridArea="toc"
    minHeight="size-1000"
    isHidden={{ base: true, L: false }}
  />
  <View
    backgroundColor="seafoam-600"
    gridArea="footer"
    height="size-1000"
  />
</Grid>
```

```
<Grid
  areas={{
    base: [
      'header',
      'nav',
      'content',
      'footer'
    ],
    M: [
      'header   header',
      'nav      content',
      'nav      content',
      'footer   footer'
    ],
    L: [
      'header header  header',
      'nav    content toc',
      'nav    content toc',
      'footer footer  footer'
    ]
  }}
  columns={{
    M: ['size-2000', '1fr'],
    L: ['size-2000', '1fr', 'size-2000']
  }}
  gap="size-100"
>
  <View
    backgroundColor="celery-600"
    gridArea="header"
    height="size-1000"
  />
  <View
    backgroundColor="blue-600"
    gridArea="nav"
  >
    <Flex
      direction={{ base: 'row', M: 'column' }}
      gap="size-100"
      margin="size-100"
    >
      <View
        backgroundColor="static-gray-50"
        height="size-250"
        minWidth="size-900"
      />
      <View
        backgroundColor="static-gray-50"
        height="size-250"
        minWidth="size-900"
      />
      <View
        backgroundColor="static-gray-50"
        height="size-250"
        minWidth="size-900"
      />
    </Flex>
  </View>
  <View
    backgroundColor="purple-600"
    gridArea="content"
    height="size-4600"
  />
  <View
    backgroundColor="magenta-600"
    gridArea="toc"
    minHeight="size-1000"
    isHidden={{ base: true, L: false }}
  />
  <View
    backgroundColor="seafoam-600"
    gridArea="footer"
    height="size-1000"
  />
</Grid>
```

```
<Grid
  areas={{
    base: [
      'header',
      'nav',
      'content',
      'footer'
    ],
    M: [
      'header   header',
      'nav      content',
      'nav      content',
      'footer   footer'
    ],
    L: [
      'header header  header',
      'nav    content toc',
      'nav    content toc',
      'footer footer  footer'
    ]
  }}
  columns={{
    M: [
      'size-2000',
      '1fr'
    ],
    L: [
      'size-2000',
      '1fr',
      'size-2000'
    ]
  }}
  gap="size-100"
>
  <View
    backgroundColor="celery-600"
    gridArea="header"
    height="size-1000"
  />
  <View
    backgroundColor="blue-600"
    gridArea="nav"
  >
    <Flex
      direction={{
        base: 'row',
        M: 'column'
      }}
      gap="size-100"
      margin="size-100"
    >
      <View
        backgroundColor="static-gray-50"
        height="size-250"
        minWidth="size-900"
      />
      <View
        backgroundColor="static-gray-50"
        height="size-250"
        minWidth="size-900"
      />
      <View
        backgroundColor="static-gray-50"
        height="size-250"
        minWidth="size-900"
      />
    </Flex>
  </View>
  <View
    backgroundColor="purple-600"
    gridArea="content"
    height="size-4600"
  />
  <View
    backgroundColor="magenta-600"
    gridArea="toc"
    minHeight="size-1000"
    isHidden={{
      base: true,
      L: false
    }}
  />
  <View
    backgroundColor="seafoam-600"
    gridArea="footer"
    height="size-1000"
  />
</Grid>
```

* * *

Several React Spectrum components include pre-defined layouts that you can insert elements into via slots. Slots are named areas in a component that receive children and provide style and layout for them. This often occurs automatically through the use of semantic elements like [Header](https://react-spectrum.adobe.com/react-spectrum/Header.html), [Content](https://react-spectrum.adobe.com/react-spectrum/Content.html), and [Footer](https://react-spectrum.adobe.com/react-spectrum/Footer.html), which include default slots out of the box.

Slots and semantic elements allow you to let Spectrum define the complex layouts required by many components according to design requirements automatically. You just provide the proper child elements, and the container component handles the layout and styling of the children for you.

For example, the [Dialog](https://react-spectrum.adobe.com/react-spectrum/Dialog.html) component accepts many types of children, e.g. a [Heading](https://react-spectrum.adobe.com/react-spectrum/Heading.html) for the title, a [Content](https://react-spectrum.adobe.com/react-spectrum/Content.html) element for the body, a [ButtonGroup](https://react-spectrum.adobe.com/react-spectrum/ButtonGroup.html) for the buttons, etc., and `Dialog` takes care of positioning and styling them properly for the dialog context. In addition, the layout of these items can change depending on the screen size. For example, the buttons in full screen dialogs move from the top to the bottom on mobile.

Another example of this is the complex items supported by [Picker](https://react-spectrum.adobe.com/react-spectrum/Picker.html) and [Menu](https://react-spectrum.adobe.com/react-spectrum/Menu.html). These components allow icons, text, and descriptions to be added as children of items, and the layout and styling is handled automatically. The icon and main text element of an item are placed in slots automatically, and the description text element is placed using the `slot` prop to specify a named area.

```
<Picker label="Permission" defaultSelectedKey="read">
  <Item textValue="Read" key="read">
    <Book />
    <Text>Read</Text>
    <Text slot="description">Read only</Text>
  </Item>
  <Item textValue="Write" key="write">
    <Draw />
    <Text>Write</Text>
    <Text slot="description">Read and write only</Text>
  </Item>
  <Item textValue="Admin" key="admin">
    <BulkEditUsers />
    <Text>Admin</Text>
    <Text slot="description">Full access</Text>
  </Item>
</Picker>
```

```
<Picker label="Permission" defaultSelectedKey="read">
  <Item textValue="Read" key="read">
    <Book />
    <Text>Read</Text>
    <Text slot="description">Read only</Text>
  </Item>
  <Item textValue="Write" key="write">
    <Draw />
    <Text>Write</Text>
    <Text slot="description">Read and write only</Text>
  </Item>
  <Item textValue="Admin" key="admin">
    <BulkEditUsers />
    <Text>Admin</Text>
    <Text slot="description">Full access</Text>
  </Item>
</Picker>
```

```
<Picker
  label="Permission"
  defaultSelectedKey="read"
>
  <Item
    textValue="Read"
    key="read"
  >
    <Book />
    <Text>Read</Text>
    <Text slot="description">
      Read only
    </Text>
  </Item>
  <Item
    textValue="Write"
    key="write"
  >
    <Draw />
    <Text>Write</Text>
    <Text slot="description">
      Read and write
      only
    </Text>
  </Item>
  <Item
    textValue="Admin"
    key="admin"
  >
    <BulkEditUsers />
    <Text>Admin</Text>
    <Text slot="description">
      Full access
    </Text>
  </Item>
</Picker>
```

You can learn more about the slots and semantic elements supported by each component by reading their individual documentation pages.
