---
source: https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html
date: Thu, 16 Oct 2025 01:27:58 GMT
---

Contextual help shows a user extra information about the state of an adjacent component, or a total view.

* * *

```
<ContextualHelp variant="info">
  <Heading>Need help?</Heading>
  <Content>
    <Text>
      If you're having issues accessing your account, contact our customer
      support team for help.
    </Text>
  </Content>
</ContextualHelp>
```

```
<ContextualHelp variant="info">
  <Heading>Need help?</Heading>
  <Content>
    <Text>
      If you're having issues accessing your account,
      contact our customer support team for help.
    </Text>
  </Content>
</ContextualHelp>
```

```
<ContextualHelp variant="info">
  <Heading>
    Need help?
  </Heading>
  <Content>
    <Text>
      If you're having
      issues accessing
      your account,
      contact our
      customer support
      team for help.
    </Text>
  </Content>
</ContextualHelp>
```

## Content[#](#content)

* * *

Unlike [Dialog](https://react-spectrum.adobe.com/react-spectrum/Dialog.html), the layout in ContextualHelp is very deliberate. Every ContextualHelp component is triggered as a popover where the trigger element is a quiet action button with either a help or info icon. Much like [Dialog](https://react-spectrum.adobe.com/react-spectrum/Dialog.html), however, ContextualHelp has sections that can be populated by providing the following components to your ContextualHelp as children: [Heading](https://react-spectrum.adobe.com/react-spectrum/Heading.html) (title), [Content](https://react-spectrum.adobe.com/react-spectrum/Content.html) (body), and [Footer](https://react-spectrum.adobe.com/react-spectrum/Footer.html) (link). Each of these components are required in a Spectrum compliant ContextualHelp except for `Footer` since including a link is optional.

```
<ContextualHelp variant="help">
  <Heading>What is a segment?</Heading>
  <Content>
    <Text>
      Segments identify who your visitors are, what devices and services they
      use, where they navigated from, and much more.
    </Text>
  </Content>
  <Footer>
    <Link>Learn more about segments</Link>
  </Footer>
</ContextualHelp>
```

```
<ContextualHelp variant="help">
  <Heading>What is a segment?</Heading>
  <Content>
    <Text>
      Segments identify who your visitors are, what
      devices and services they use, where they navigated
      from, and much more.
    </Text>
  </Content>
  <Footer>
    <Link>Learn more about segments</Link>
  </Footer>
</ContextualHelp>
```

```
<ContextualHelp variant="help">
  <Heading>
    What is a segment?
  </Heading>
  <Content>
    <Text>
      Segments identify
      who your visitors
      are, what devices
      and services they
      use, where they
      navigated from,
      and much more.
    </Text>
  </Content>
  <Footer>
    <Link>
      Learn more about
      segments
    </Link>
  </Footer>
</ContextualHelp>
```

* * *

ContextualHelp supports [Dialog placement](https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html#dialog-placement) options for when the positioning of the popover needs to customized.

```
<ContextualHelp variant="info" placement="top start">
  <Heading>Placement</Heading>
  <Content>
    <Text>
      The placement of this contextual help popover has been customized to use
      top start.
    </Text>
  </Content>
</ContextualHelp>
```

```
<ContextualHelp variant="info" placement="top start">
  <Heading>Placement</Heading>
  <Content>
    <Text>
      The placement of this contextual help popover has
      been customized to use top start.
    </Text>
  </Content>
</ContextualHelp>
```

```
<ContextualHelp
  variant="info"
  placement="top start"
>
  <Heading>
    Placement
  </Heading>
  <Content>
    <Text>
      The placement of
      this contextual
      help popover has
      been customized
      to use top start.
    </Text>
  </Content>
</ContextualHelp>
```

* * *

ContextualHelp accepts an `onOpenChange` prop, triggered when the ContextualHelp's popover opens or closes.

The example below uses `onOpenChange` to update a separate element with the current open state of the Dialog.

```
function Example() {
  let [state, setState] = React.useState(false);

  return (
    <Flex alignItems="center" gap="size-100">
      <ContextualHelp
        variant="info"
        onOpenChange={(isOpen) => setState(isOpen)}
      >
        <Heading>Permission required</Heading>
        <Content>
          <Text>
            Your admin must grant you permission before you can create a
            segment.
          </Text>
        </Content>
      </ContextualHelp>
      <Text>Current open state: {state.toString()}</Text>
    </Flex>
  );
}
```

```
function Example() {
  let [state, setState] = React.useState(false);

  return (
    <Flex alignItems="center" gap="size-100">
      <ContextualHelp
        variant="info"
        onOpenChange={(isOpen) => setState(isOpen)}
      >
        <Heading>Permission required</Heading>
        <Content>
          <Text>
            Your admin must grant you permission before you
            can create a segment.
          </Text>
        </Content>
      </ContextualHelp>
      <Text>Current open state: {state.toString()}</Text>
    </Flex>
  );
}
```

```
function Example() {
  let [state, setState] =
    React.useState(
      false
    );

  return (
    <Flex
      alignItems="center"
      gap="size-100"
    >
      <ContextualHelp
        variant="info"
        onOpenChange={(
          isOpen
        ) =>
          setState(
            isOpen
          )}
      >
        <Heading>
          Permission
          required
        </Heading>
        <Content>
          <Text>
            Your admin
            must grant
            you
            permission
            before you
            can create a
            segment.
          </Text>
        </Content>
      </ContextualHelp>
      <Text>
        Current open
        state:{' '}
        {state
          .toString()}
      </Text>
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

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

Contents of the Contextual Help popover.

`variant`

`'help' | 'info'`

`'help'`

Indicates whether contents are informative or provides helpful guidance.

`placement`

`[Placement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/overlays/src/index.d.ts:Placement)`

`'bottom start'`

The placement of the popover with respect to the action button.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

`containerPadding`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`12`

The placement padding that should be applied between the element and its surrounding container.

`offset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The additional offset applied along the main axis between the element and its anchor element.

`crossOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The additional offset applied along the cross axis between the element and its anchor element.

`shouldFlip`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.

Events

Name

Type

Description

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the overlay's open state changes.

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

Use the info icon for brief, specific, contextual guidance. This is best for supplemental or nice-to-know information, in-line with a label or a component (if there is no label). The content for an info icon’s popover should be [instructive](https://spectrum.adobe.com/page/voice-and-tone/#Tone-spectrum) in tone.

```
<ContextualHelp variant="info">
  <Heading>Permission required</Heading>
  <Content>
    <Text>
      Your admin must grant you permission before you can create a segment.
    </Text>
  </Content>
</ContextualHelp>
```

```
<ContextualHelp variant="info">
  <Heading>Permission required</Heading>
  <Content>
    <Text>
      Your admin must grant you permission before you can
      create a segment.
    </Text>
  </Content>
</ContextualHelp>
```

```
<ContextualHelp variant="info">
  <Heading>
    Permission required
  </Heading>
  <Content>
    <Text>
      Your admin must
      grant you
      permission before
      you can create a
      segment.
    </Text>
  </Content>
</ContextualHelp>
```

Use the help icon for content that offers more detailed, in-depth guidance about a task, UI element, tool, or keyboard shortcuts. This may include an image, video, or link and should be [helpful](https://spectrum.adobe.com/page/voice-and-tone/#Tone-spectrum) in tone.

```
<ContextualHelp variant="help">
  <Heading>What is a segment?</Heading>
  <Content>
    <Text>
      Segments identify who your visitors are, what devices and services they
      use, where they navigated from, and much more.
    </Text>
  </Content>
  <Footer>
    <Link>Learn more about segments</Link>
  </Footer>
</ContextualHelp>
```

```
<ContextualHelp variant="help">
  <Heading>What is a segment?</Heading>
  <Content>
    <Text>
      Segments identify who your visitors are, what
      devices and services they use, where they navigated
      from, and much more.
    </Text>
  </Content>
  <Footer>
    <Link>Learn more about segments</Link>
  </Footer>
</ContextualHelp>
```

```
<ContextualHelp variant="help">
  <Heading>
    What is a segment?
  </Heading>
  <Content>
    <Text>
      Segments identify
      who your visitors
      are, what devices
      and services they
      use, where they
      navigated from,
      and much more.
    </Text>
  </Content>
  <Footer>
    <Link>
      Learn more about
      segments
    </Link>
  </Footer>
</ContextualHelp>
```

* * *

The ContextualHelpTrigger features an overlay that transitions in and out of the page as it is opened and closed. Please see the following sections in the testing docs for more information on how to handle these behaviors in your test suite.

[Timers](https://react-spectrum.adobe.com/react-spectrum/testing.html#timers)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/dialog/test/AlertDialog.test.js) if you find that the above isn't sufficient when resolving issues in your own test cases.
