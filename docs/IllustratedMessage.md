---
source: https://react-spectrum.adobe.com/react-spectrum/IllustratedMessage.html
date: Thu, 16 Oct 2025 01:37:26 GMT
---

An IllustratedMessage displays an illustration and a message, usually for an empty state or an error page.

* * *

```
import NotFound from '@spectrum-icons/illustrations/NotFound';

<IllustratedMessage>
  <NotFound />
  <Heading>No results</Heading>
  <Content>Try another search</Content>
</IllustratedMessage>
```

```
import NotFound from '@spectrum-icons/illustrations/NotFound';

<IllustratedMessage>
  <NotFound />
  <Heading>No results</Heading>
  <Content>Try another search</Content>
</IllustratedMessage>
```

```
import NotFound from '@spectrum-icons/illustrations/NotFound';

<IllustratedMessage>
  <NotFound />
  <Heading>
    No results
  </Heading>
  <Content>
    Try another search
  </Content>
</IllustratedMessage>
```

## Content[#](#content)

* * *

An IllustratedMessage consists of three areas: an illustration, a title, and a body. Each of these sections can be populated by providing the following components to your IllustratedMessage as children: `svg`, [Heading](https://react-spectrum.adobe.com/react-spectrum/Heading.html) (title), and [Content](https://react-spectrum.adobe.com/react-spectrum/Content.html) (body).

```
import Upload from '@spectrum-icons/illustrations/Upload';

<IllustratedMessage>
  <Upload />
  <Heading>Drag and Drop your file</Heading>
  <Content>
    Select a File from your computer<br /> or Search Adobe Stock
  </Content>
</IllustratedMessage>
```

```
import Upload from '@spectrum-icons/illustrations/Upload';

<IllustratedMessage>
  <Upload />
  <Heading>Drag and Drop your file</Heading>
  <Content>
    Select a File from your computer<br />{' '}
    or Search Adobe Stock
  </Content>
</IllustratedMessage>
```

```
import Upload from '@spectrum-icons/illustrations/Upload';

<IllustratedMessage>
  <Upload />
  <Heading>
    Drag and Drop your
    file
  </Heading>
  <Content>
    Select a File from
    your computer<br />
    {' '}
    or Search Adobe
    Stock
  </Content>
</IllustratedMessage>
```

When an IllustratedMessage has a `svg` and a `Heading`, the `svg` needs an `aria-hidden` prop and a `role` prop set to `presentation`.

* * *

The title of an IllustratedMessage is typically provided via its `Heading`. If a `Heading` isn't specified, the illustration needs an `aria-label` prop to identify it to assistive technology. If you pass an SVG in yourself, you'll need to ensure that the `role` prop is set to `img` as well.

```
<IllustratedMessage>
  <NotFound aria-label="No results" />
</IllustratedMessage>
```

```
<IllustratedMessage>
  <NotFound aria-label="No results" />
</IllustratedMessage>
```

```
<IllustratedMessage>
  <NotFound aria-label="No results" />
</IllustratedMessage>
```

* * *

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The contents of the IllustratedMessage.

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

The below examples make use of illustrations included in the [@spectrum-icons/illustrations](http://npmjs.com/@spectrum-icons/illustrations) package.

```
import NoSearchResults from '@spectrum-icons/illustrations/NoSearchResults';

<IllustratedMessage>
  <NoSearchResults />
  <Heading>No matching results</Heading>
  <Content>Try another search.</Content>
</IllustratedMessage>
```

```
import NoSearchResults from '@spectrum-icons/illustrations/NoSearchResults';

<IllustratedMessage>
  <NoSearchResults />
  <Heading>No matching results</Heading>
  <Content>Try another search.</Content>
</IllustratedMessage>
```

```
import NoSearchResults from '@spectrum-icons/illustrations/NoSearchResults';

<IllustratedMessage>
  <NoSearchResults />
  <Heading>
    No matching results
  </Heading>
  <Content>
    Try another search.
  </Content>
</IllustratedMessage>
```

```
import Unauthorized from '@spectrum-icons/illustrations/Unauthorized';

<IllustratedMessage>
  <Unauthorized />
  <Heading>Error 403: Access not allowed</Heading>
  <Content>
    You do not have permission to access this page. Try checking the URL or
    visit a different page.
  </Content>
</IllustratedMessage>
```

```
import Unauthorized from '@spectrum-icons/illustrations/Unauthorized';

<IllustratedMessage>
  <Unauthorized />
  <Heading>Error 403: Access not allowed</Heading>
  <Content>
    You do not have permission to access this page. Try
    checking the URL or visit a different page.
  </Content>
</IllustratedMessage>
```

```
import Unauthorized from '@spectrum-icons/illustrations/Unauthorized';

<IllustratedMessage>
  <Unauthorized />
  <Heading>
    Error 403: Access
    not allowed
  </Heading>
  <Content>
    You do not have
    permission to
    access this page.
    Try checking the
    URL or visit a
    different page.
  </Content>
</IllustratedMessage>
```

```
<IllustratedMessage>
  <NotFound />
  <Heading>Error 404: Page not found</Heading>
  <Content>
    This page isn't available. Try checking the URL or visit a different page.
  </Content>
</IllustratedMessage>
```

```
<IllustratedMessage>
  <NotFound />
  <Heading>Error 404: Page not found</Heading>
  <Content>
    This page isn't available. Try checking the URL or
    visit a different page.
  </Content>
</IllustratedMessage>
```

```
<IllustratedMessage>
  <NotFound />
  <Heading>
    Error 404: Page not
    found
  </Heading>
  <Content>
    This page isn't
    available. Try
    checking the URL or
    visit a different
    page.
  </Content>
</IllustratedMessage>
```

```
import Error from '@spectrum-icons/illustrations/Error';

<IllustratedMessage>
  <Error />
  <Heading>Error 500: Internal server error</Heading>
  <Content>Something went wrong. Please try again later.</Content>
</IllustratedMessage>
```

```
import Error from '@spectrum-icons/illustrations/Error';

<IllustratedMessage>
  <Error />
  <Heading>Error 500: Internal server error</Heading>
  <Content>
    Something went wrong. Please try again later.
  </Content>
</IllustratedMessage>
```

```
import Error from '@spectrum-icons/illustrations/Error';

<IllustratedMessage>
  <Error />
  <Heading>
    Error 500: Internal
    server error
  </Heading>
  <Content>
    Something went
    wrong. Please try
    again later.
  </Content>
</IllustratedMessage>
```

```
import Unavailable from '@spectrum-icons/illustrations/Unavailable';

<IllustratedMessage>
  <Unavailable />
  <Heading>Error 503: Service unavailable</Heading>
  <Content>
    This page isn't working. Try a different page or try again later.
  </Content>
</IllustratedMessage>
```

```
import Unavailable from '@spectrum-icons/illustrations/Unavailable';

<IllustratedMessage>
  <Unavailable />
  <Heading>Error 503: Service unavailable</Heading>
  <Content>
    This page isn't working. Try a different page or try
    again later.
  </Content>
</IllustratedMessage>
```

```
import Unavailable from '@spectrum-icons/illustrations/Unavailable';

<IllustratedMessage>
  <Unavailable />
  <Heading>
    Error 503: Service
    unavailable
  </Heading>
  <Content>
    This page isn't
    working. Try a
    different page or
    try again later.
  </Content>
</IllustratedMessage>
```

```
import Timeout from '@spectrum-icons/illustrations/Timeout';

<IllustratedMessage>
  <Timeout />
  <Heading>Error 504: Server timeout</Heading>
  <Content>The server took too long. Please try again later.</Content>
</IllustratedMessage>
```

```
import Timeout from '@spectrum-icons/illustrations/Timeout';

<IllustratedMessage>
  <Timeout />
  <Heading>Error 504: Server timeout</Heading>
  <Content>
    The server took too long. Please try again later.
  </Content>
</IllustratedMessage>
```

```
import Timeout from '@spectrum-icons/illustrations/Timeout';

<IllustratedMessage>
  <Timeout />
  <Heading>
    Error 504: Server
    timeout
  </Heading>
  <Content>
    The server took too
    long. Please try
    again later.
  </Content>
</IllustratedMessage>
```
