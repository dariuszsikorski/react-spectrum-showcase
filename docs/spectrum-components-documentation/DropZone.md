---
source: https://react-spectrum.adobe.com/react-spectrum/DropZone.html
date: Thu, 16 Oct 2025 01:38:12 GMT
---

A drop zone is an area into which one or multiple objects can be dragged and dropped.

* * *

```
import Upload from '@spectrum-icons/illustrations/Upload';

function Example() {
  let [isFilled, setIsFilled] = React.useState(false);

  return (
    <>
      <Draggable />
      <DropZone
        maxWidth="size-3000"
        isFilled={isFilled}
        onDrop={() => setIsFilled(true)}>
        <IllustratedMessage>
          <Upload />
          <Heading>
            {isFilled ? 'You dropped something!' : 'Drag and drop your file'}
          </Heading>
        </IllustratedMessage>
      </DropZone>
    </>
  )
}
```

```
import Upload from '@spectrum-icons/illustrations/Upload';

function Example() {
  let [isFilled, setIsFilled] = React.useState(false);

  return (
    <>
      <Draggable />
      <DropZone
        maxWidth="size-3000"
        isFilled={isFilled}
        onDrop={() => setIsFilled(true)}
      >
        <IllustratedMessage>
          <Upload />
          <Heading>
            {isFilled
              ? 'You dropped something!'
              : 'Drag and drop your file'}
          </Heading>
        </IllustratedMessage>
      </DropZone>
    </>
  );
}
```

```
import Upload from '@spectrum-icons/illustrations/Upload';

function Example() {
  let [
    isFilled,
    setIsFilled
  ] = React.useState(
    false
  );

  return (
    <>
      <Draggable />
      <DropZone
        maxWidth="size-3000"
        isFilled={isFilled}
        onDrop={() =>
          setIsFilled(
            true
          )}
      >
        <IllustratedMessage>
          <Upload />
          <Heading>
            {isFilled
              ? 'You dropped something!'
              : 'Drag and drop your file'}
          </Heading>
        </IllustratedMessage>
      </DropZone>
    </>
  );
}
```

The `Draggable` component used above is defined below. See [useDrag](https://react-spectrum.adobe.com/react-aria/useDrag.html) for more details and documentation.

Show code

```
import {useDrag} from 'react-aria';

function Draggable() {
  let { dragProps, isDragging } = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world',
        'my-app-custom-type': JSON.stringify({ message: 'hello world' })
      }];
    }
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${isDragging ? 'dragging' : ''}`}
    >
      Drag me
    </div>
  );
}
```

```
import {useDrag} from 'react-aria';

function Draggable() {
  let { dragProps, isDragging } = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world',
        'my-app-custom-type': JSON.stringify({
          message: 'hello world'
        })
      }];
    }
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${
        isDragging ? 'dragging' : ''
      }`}
    >
      Drag me
    </div>
  );
}
```

```
import {useDrag} from 'react-aria';

function Draggable() {
  let {
    dragProps,
    isDragging
  } = useDrag({
    getItems() {
      return [{
        'text/plain':
          'hello world',
        'my-app-custom-type':
          JSON.stringify(
            {
              message:
                'hello world'
            }
          )
      }];
    }
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${
        isDragging
          ? 'dragging'
          : ''
      }`}
    >
      Drag me
    </div>
  );
}
```

Show CSS

```
.draggable {
  display: inline-block;
  vertical-align: top;
  border: 1px solid gray;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  height: fit-content;
}

.draggable.dragging {
  opacity: 0.5;
}
```

```
.draggable {
  display: inline-block;
  vertical-align: top;
  border: 1px solid gray;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  height: fit-content;
}

.draggable.dragging {
  opacity: 0.5;
}
```

```
.draggable {
  display: inline-block;
  vertical-align: top;
  border: 1px solid gray;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  height: fit-content;
}

.draggable.dragging {
  opacity: 0.5;
}
```

## Content[#](#content)

* * *

A DropZone accepts an [IllustratedMessage](https://react-spectrum.adobe.com/react-spectrum/IllustratedMessage.html) as a child which is comprised of three areas: an illustration, a title, and a body. Each of these sections can be populated by providing the following components to the IllustratedMessage as children: a SVG, a [Heading](https://react-spectrum.adobe.com/react-spectrum/Heading.html) (title), and a [Content](https://react-spectrum.adobe.com/react-spectrum/Content.html) (body). A [FileTrigger](https://react-spectrum.adobe.com/react-aria/FileTrigger.html) is commonly paired with a DropZone to allow a user to choose files from their device.

```
import {FileTrigger} from '@adobe/react-spectrum';

function Example() {
  let [isFilled, setIsFilled] = React.useState(false);

  return (
    <>
      <Draggable />
      <DropZone
        maxWidth="size-3000"
        isFilled={isFilled}
        onDrop={() => setIsFilled(true)}>
        <IllustratedMessage>
          <Upload />
          <Heading>
            {isFilled ? 'You dropped something!' : 'Drag and drop here'}
          </Heading>
          <Content>
            <FileTrigger
              onSelect={()=> setIsFilled(true)}>
              <Button variant="primary">Browse</Button>
            </FileTrigger>
          </Content>
        </IllustratedMessage>
      </DropZone>
    </>
  )
}
```

```
import {FileTrigger} from '@adobe/react-spectrum';

function Example() {
  let [isFilled, setIsFilled] = React.useState(false);

  return (
    <>
      <Draggable />
      <DropZone
        maxWidth="size-3000"
        isFilled={isFilled}
        onDrop={() => setIsFilled(true)}
      >
        <IllustratedMessage>
          <Upload />
          <Heading>
            {isFilled
              ? 'You dropped something!'
              : 'Drag and drop here'}
          </Heading>
          <Content>
            <FileTrigger
              onSelect={() => setIsFilled(true)}
            >
              <Button variant="primary">Browse</Button>
            </FileTrigger>
          </Content>
        </IllustratedMessage>
      </DropZone>
    </>
  );
}
```

```
import {FileTrigger} from '@adobe/react-spectrum';

function Example() {
  let [
    isFilled,
    setIsFilled
  ] = React.useState(
    false
  );

  return (
    <>
      <Draggable />
      <DropZone
        maxWidth="size-3000"
        isFilled={isFilled}
        onDrop={() =>
          setIsFilled(
            true
          )}
      >
        <IllustratedMessage>
          <Upload />
          <Heading>
            {isFilled
              ? 'You dropped something!'
              : 'Drag and drop here'}
          </Heading>
          <Content>
            <FileTrigger
              onSelect={() =>
                setIsFilled(
                  true
                )}
            >
              <Button variant="primary">
                Browse
              </Button>
            </FileTrigger>
          </Content>
        </IllustratedMessage>
      </DropZone>
    </>
  );
}
```

A visual label should be provided to `DropZone` using a `Text` element with a `label` slot. If it is not provided, then an `aria-label` or `aria-labelledby` prop must be passed to identify the visually hidden button to assistive technology.

In order to internationalize a DropZone, a localized string should be passed to the `Text` element with a `label` slot or to the `aria-label` prop, in addition to the `replaceMessage` prop.

* * *

`DropZone` supports drop operations via mouse, keyboard, and touch. You can handle all of these via the `onDrop` prop. In addition, the `onDropEnter`, `onDropMove`, and `onDropExit` events are fired as the user enter and exists the dropzone during a drag operation.

The following example uses an `onDrop` handler to update the filled status stored in React state.

```
import {Flex} from '@adobe/react-spectrum';
import File from '@spectrum-icons/illustrations/File';

function Example() {
  let [filledSrc, setFilledSrc] = React.useState(null);

  return (
    <>
      <Draggable />
      <DropZone
        maxWidth="size-3000"
        isFilled={!!filledSrc}
        onDrop={async (e) => {
          e.items.find(async (item) => {
            if (item.kind === 'file') {
              setFilledSrc(item.name);
            } else if (item.kind === 'text' && item.types.has('text/plain')) {
              setFilledSrc(await item.getText('text/plain'));
            }
          });
        }}
      >
        {filledSrc
          ? (
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              gap="size-100"
            >
              <File />
              {filledSrc}
            </Flex>
          )
          : (
            <IllustratedMessage>
              <Upload />
              <Heading>
                Drag and drop here
              </Heading>
            </IllustratedMessage>
          )}
      </DropZone>
    </>
  );
}
```

```
import {Flex} from '@adobe/react-spectrum';
import File from '@spectrum-icons/illustrations/File';

function Example() {
  let [filledSrc, setFilledSrc] = React.useState(null);

  return (
    <>
      <Draggable />
      <DropZone
        maxWidth="size-3000"
        isFilled={!!filledSrc}
        onDrop={async (e) => {
          e.items.find(async (item) => {
            if (item.kind === 'file') {
              setFilledSrc(item.name);
            } else if (
              item.kind === 'text' &&
              item.types.has('text/plain')
            ) {
              setFilledSrc(
                await item.getText('text/plain')
              );
            }
          });
        }}
      >
        {filledSrc
          ? (
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              gap="size-100"
            >
              <File />
              {filledSrc}
            </Flex>
          )
          : (
            <IllustratedMessage>
              <Upload />
              <Heading>
                Drag and drop here
              </Heading>
            </IllustratedMessage>
          )}
      </DropZone>
    </>
  );
}
```

```
import {Flex} from '@adobe/react-spectrum';
import File from '@spectrum-icons/illustrations/File';

function Example() {
  let [
    filledSrc,
    setFilledSrc
  ] = React.useState(
    null
  );

  return (
    <>
      <Draggable />
      <DropZone
        maxWidth="size-3000"
        isFilled={!!filledSrc}
        onDrop={async (
          e
        ) => {
          e.items.find(
            async (
              item
            ) => {
              if (
                item
                  .kind ===
                  'file'
              ) {
                setFilledSrc(
                  item
                    .name
                );
              } else if (
                item
                    .kind ===
                  'text' &&
                item
                  .types
                  .has(
                    'text/plain'
                  )
              ) {
                setFilledSrc(
                  await item
                    .getText(
                      'text/plain'
                    )
                );
              }
            }
          );
        }}
      >
        {filledSrc
          ? (
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              gap="size-100"
            >
              <File />
              {filledSrc}
            </Flex>
          )
          : (
            <IllustratedMessage>
              <Upload />
              <Heading>
                Drag and
                drop here
              </Heading>
            </IllustratedMessage>
          )}
      </DropZone>
    </>
  );
}
```

* * *

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The content to display in the drop zone.

`isFilled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the drop zone has been filled.

`replaceMessage`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The message to replace the default banner message that is shown when the drop zone is filled.

`getDropOperation`

`( (types: [DragTypes](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DragTypes), , allowedOperations: [DropOperation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropOperation)[] )) => [DropOperation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropOperation)`

A function returning the drop operation to be performed when items matching the given types are dropped on the drop target.

Events

Name

Type

Description

`onDropEnter`

`( (e: [DropEnterEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropEnterEvent) )) => void`

Handler that is called when a valid drag enters the drop target.

`onDropMove`

`( (e: [DropMoveEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropMoveEvent) )) => void`

Handler that is called when a valid drag is moved within the drop target.

`onDropActivate`

`( (e: [DropActivateEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropActivateEvent) )) => void`

Handler that is called after a valid drag is held over the drop target for a period of time. This typically opens the item so that the user can drop within it.

`onDropExit`

`( (e: [DropExitEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropExitEvent) )) => void`

Handler that is called when a valid drag exits the drop target.

`onDrop`

`( (e: [DropEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropEvent) )) => void`

Handler that is called when a valid drag is dropped on the drop target.

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

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

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

The user is responsible for both managing the filled state of a DropZone and handling the associated styling. To set the DropZone to a filled state, the user must pass the `isFilled` prop.

The example below demonstrates one way of styling the filled state.

```
function Example() {
  let [filledSrc, setFilledSrc] = React.useState(null);

  return (
    <>
      <DraggableImage />
      <DropZone
        isFilled={!!filledSrc}
        maxWidth="size-3000"
        height="size-2400"
        getDropOperation={(types) =>
          (types.has('image/png') || types.has('image/jpeg'))
            ? 'copy'
            : 'cancel'}
        onDrop={async (e) => {
          e.items.find(async (item) => {
            if (item.kind === 'file') {
              if (item.type === 'image/jpeg' || item.type === 'image/png') {
                setFilledSrc(URL.createObjectURL(await item.getFile()));
              }
            } else if (item.kind === 'text') {
              setFilledSrc(await item.getText('image/jpeg'));
            }
          });
        }}
      >
        {filledSrc
          ? <img className="images" alt="" src={filledSrc} />
          : (
            <IllustratedMessage>
              <Upload />
              <Heading>
                Drag and drop photos
              </Heading>
            </IllustratedMessage>
          )}
      </DropZone>
    </>
  );
}
```

```
function Example() {
  let [filledSrc, setFilledSrc] = React.useState(null);

  return (
    <>
      <DraggableImage />
      <DropZone
        isFilled={!!filledSrc}
        maxWidth="size-3000"
        height="size-2400"
        getDropOperation={(types) =>
          (types.has('image/png') ||
              types.has('image/jpeg'))
            ? 'copy'
            : 'cancel'}
        onDrop={async (e) => {
          e.items.find(async (item) => {
            if (item.kind === 'file') {
              if (
                item.type === 'image/jpeg' ||
                item.type === 'image/png'
              ) {
                setFilledSrc(
                  URL.createObjectURL(await item.getFile())
                );
              }
            } else if (item.kind === 'text') {
              setFilledSrc(
                await item.getText('image/jpeg')
              );
            }
          });
        }}
      >
        {filledSrc
          ? (
            <img
              className="images"
              alt=""
              src={filledSrc}
            />
          )
          : (
            <IllustratedMessage>
              <Upload />
              <Heading>
                Drag and drop photos
              </Heading>
            </IllustratedMessage>
          )}
      </DropZone>
    </>
  );
}
```

```
function Example() {
  let [
    filledSrc,
    setFilledSrc
  ] = React.useState(
    null
  );

  return (
    <>
      <DraggableImage />
      <DropZone
        isFilled={!!filledSrc}
        maxWidth="size-3000"
        height="size-2400"
        getDropOperation={(
          types
        ) =>
          (types.has(
              'image/png'
            ) ||
              types.has(
                'image/jpeg'
              ))
            ? 'copy'
            : 'cancel'}
        onDrop={async (
          e
        ) => {
          e.items.find(
            async (
              item
            ) => {
              if (
                item
                  .kind ===
                  'file'
              ) {
                if (
                  item
                      .type ===
                    'image/jpeg' ||
                  item
                      .type ===
                    'image/png'
                ) {
                  setFilledSrc(
                    URL
                      .createObjectURL(
                        await item
                          .getFile()
                      )
                  );
                }
              } else if (
                item
                  .kind ===
                  'text'
              ) {
                setFilledSrc(
                  await item
                    .getText(
                      'image/jpeg'
                    )
                );
              }
            }
          );
        }}
      >
        {filledSrc
          ? (
            <img
              className="images"
              alt=""
              src={filledSrc}
            />
          )
          : (
            <IllustratedMessage>
              <Upload />
              <Heading>
                Drag and
                drop
                photos
              </Heading>
            </IllustratedMessage>
          )}
      </DropZone>
    </>
  );
}
```

Show CSS

```
.images {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--spectrum-alias-border-radius-small);
}
```

```
.images {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--spectrum-alias-border-radius-small);
}
```

```
.images {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--spectrum-alias-border-radius-small);
}
```

The `DraggableImage` component used above is defined below. See [useDrag](https://react-spectrum.adobe.com/react-aria/useDrag.html) for more details and documentation.

Show code

```
function DraggableImage() {
  let {dragProps, isDragging} = useDrag({
    getItems() {
      return [
        {
          'image/jpeg': 'https://i.imgur.com/Z7AzH2c.jpg'
        }
      ];
    }
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${isDragging ? 'dragging' : ''}`} >
      <img
        width="150px"
        height="100px"
        alt="Traditional Roof"
        src="https://i.imgur.com/Z7AzH2c.jpg"/>
    </div>
  );
}
```

```
function DraggableImage() {
  let { dragProps, isDragging } = useDrag({
    getItems() {
      return [
        {
          'image/jpeg': 'https://i.imgur.com/Z7AzH2c.jpg'
        }
      ];
    }
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${
        isDragging ? 'dragging' : ''
      }`}
    >
      <img
        width="150px"
        height="100px"
        alt="Traditional Roof"
        src="https://i.imgur.com/Z7AzH2c.jpg"
      />
    </div>
  );
}
```

```
function DraggableImage() {
  let {
    dragProps,
    isDragging
  } = useDrag({
    getItems() {
      return [
        {
          'image/jpeg':
            'https://i.imgur.com/Z7AzH2c.jpg'
        }
      ];
    }
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${
        isDragging
          ? 'dragging'
          : ''
      }`}
    >
      <img
        width="150px"
        height="100px"
        alt="Traditional Roof"
        src="https://i.imgur.com/Z7AzH2c.jpg"
      />
    </div>
  );
}
```

When a DropZone is in a filled state and has an object dragged over it, a message will appear in front of the DropZone. By default, this message will say "Drop file to replace". However, users can choose to customize this message through the `replaceMessage` prop. This message should describe the interaction that will occur when the object is dropped. It should also be internationalized if needed.

```
function Example() {
  let [isFilled, setIsFilled] = React.useState(false);

  return (
    <>
      <Draggable />
      <DropZone
        isFilled={isFilled}
        maxWidth="size-3000"
        replaceMessage="This is a custom message"
        onDrop={() => setIsFilled(true)}>
        <IllustratedMessage>
          <Upload />
          <Heading>
            {isFilled ? 'You dropped something!' : 'Drag and drop here'}
          </Heading>
        </IllustratedMessage>
      </DropZone>
    </>
  );
}
```

```
function Example() {
  let [isFilled, setIsFilled] = React.useState(false);

  return (
    <>
      <Draggable />
      <DropZone
        isFilled={isFilled}
        maxWidth="size-3000"
        replaceMessage="This is a custom message"
        onDrop={() => setIsFilled(true)}
      >
        <IllustratedMessage>
          <Upload />
          <Heading>
            {isFilled
              ? 'You dropped something!'
              : 'Drag and drop here'}
          </Heading>
        </IllustratedMessage>
      </DropZone>
    </>
  );
}
```

```
function Example() {
  let [
    isFilled,
    setIsFilled
  ] = React.useState(
    false
  );

  return (
    <>
      <Draggable />
      <DropZone
        isFilled={isFilled}
        maxWidth="size-3000"
        replaceMessage="This is a custom message"
        onDrop={() =>
          setIsFilled(
            true
          )}
      >
        <IllustratedMessage>
          <Upload />
          <Heading>
            {isFilled
              ? 'You dropped something!'
              : 'Drag and drop here'}
          </Heading>
        </IllustratedMessage>
      </DropZone>
    </>
  );
}
```

A DropZone displays visual feedback to the user when a drag hovers over the drop target by passing the `getDropOperation` function. If a drop target only supports data of specific types (e.g. images, videos, text, etc.), then it should implement the `getDropOperation` prop and return `'cancel'` for types that aren't supported. This will prevent visual feedback indicating that the drop target accepts the dragged data when this is not true. [Read more about getDropOperation.](https://react-spectrum.adobe.com/react-aria/useDrop.html#getdropoperation)

In the below example, the drop zone only supports dropping JPEG images. If a JPEG is dragged over the drop zone, it will be highlighted and the operating system will display a copy cursor. If another type is dragged over the drop zone, then there is no visual feedback, indicating that a drop is not accepted.

```
import {FileTrigger} from '@adobe/react-spectrum';

function Example() {
  let [filledSrc, setFilledSrc] = React.useState(null);

  return (
    <>
      <Draggable />
      <DraggableImage />
      <DropZone
        maxWidth="size-3000"
        isFilled={!!filledSrc}
        getDropOperation={(types) =>
          types.has('image/jpeg') ? 'copy' : 'cancel'}
        onDrop={async (e) => {
          e.items.find(async (item) => {
            if (item.kind === 'file') {
              if (item.type === 'image/jpeg') {
                let file = await item.getFile();
                setFilledSrc({
                  type: file.type,
                  name: file.name
                });
              }
            } else if (item.kind === 'text') {
              let file = await item.getText('image/jpeg');
              setFilledSrc({
                type: 'image/jpeg',
                name: file
              });
            }
          });
        }}
      >
        <IllustratedMessage>
          <Upload />
          <Heading>
            {filledSrc
              ? `${filledSrc.type} ${filledSrc.name}`
              : 'Drag and drop here'}
          </Heading>
          <Content>
            <FileTrigger
              acceptedFileTypes={['image/jpeg']}
              onSelect={(e) => {
                let file = (Array.from(e)).find((file) =>
                  file.type === 'image/jpeg'
                );
                if (file) {
                  setFilledSrc({
                    type: file.type,
                    name: file.name
                  });
                }
              }}
            >
              <Button variant="primary">Browse</Button>
            </FileTrigger>
          </Content>
        </IllustratedMessage>
      </DropZone>
    </>
  );
}
```

```
import {FileTrigger} from '@adobe/react-spectrum';

function Example() {
  let [filledSrc, setFilledSrc] = React.useState(null);

  return (
    <>
      <Draggable />
      <DraggableImage />
      <DropZone
        maxWidth="size-3000"
        isFilled={!!filledSrc}
        getDropOperation={(types) =>
          types.has('image/jpeg') ? 'copy' : 'cancel'}
        onDrop={async (e) => {
          e.items.find(async (item) => {
            if (item.kind === 'file') {
              if (item.type === 'image/jpeg') {
                let file = await item.getFile();
                setFilledSrc({
                  type: file.type,
                  name: file.name
                });
              }
            } else if (item.kind === 'text') {
              let file = await item.getText('image/jpeg');
              setFilledSrc({
                type: 'image/jpeg',
                name: file
              });
            }
          });
        }}
      >
        <IllustratedMessage>
          <Upload />
          <Heading>
            {filledSrc
              ? `${filledSrc.type} ${filledSrc.name}`
              : 'Drag and drop here'}
          </Heading>
          <Content>
            <FileTrigger
              acceptedFileTypes={['image/jpeg']}
              onSelect={(e) => {
                let file = (Array.from(e)).find((file) =>
                  file.type === 'image/jpeg'
                );
                if (file) {
                  setFilledSrc({
                    type: file.type,
                    name: file.name
                  });
                }
              }}
            >
              <Button variant="primary">Browse</Button>
            </FileTrigger>
          </Content>
        </IllustratedMessage>
      </DropZone>
    </>
  );
}
```

```
import {FileTrigger} from '@adobe/react-spectrum';

function Example() {
  let [
    filledSrc,
    setFilledSrc
  ] = React.useState(
    null
  );

  return (
    <>
      <Draggable />
      <DraggableImage />
      <DropZone
        maxWidth="size-3000"
        isFilled={!!filledSrc}
        getDropOperation={(
          types
        ) =>
          types.has(
              'image/jpeg'
            )
            ? 'copy'
            : 'cancel'}
        onDrop={async (
          e
        ) => {
          e.items.find(
            async (
              item
            ) => {
              if (
                item
                  .kind ===
                  'file'
              ) {
                if (
                  item
                    .type ===
                    'image/jpeg'
                ) {
                  let file =
                    await item
                      .getFile();
                  setFilledSrc(
                    {
                      type:
                        file
                          .type,
                      name:
                        file
                          .name
                    }
                  );
                }
              } else if (
                item
                  .kind ===
                  'text'
              ) {
                let file =
                  await item
                    .getText(
                      'image/jpeg'
                    );
                setFilledSrc(
                  {
                    type:
                      'image/jpeg',
                    name:
                      file
                  }
                );
              }
            }
          );
        }}
      >
        <IllustratedMessage>
          <Upload />
          <Heading>
            {filledSrc
              ? `${filledSrc.type} ${filledSrc.name}`
              : 'Drag and drop here'}
          </Heading>
          <Content>
            <FileTrigger
              acceptedFileTypes={[
                'image/jpeg'
              ]}
              onSelect={(
                e
              ) => {
                let file =
                  (Array
                    .from(
                      e
                    )).find(
                      (
                        file
                      ) =>
                        file
                          .type ===
                          'image/jpeg'
                    );
                if (
                  file
                ) {
                  setFilledSrc(
                    {
                      type:
                        file
                          .type,
                      name:
                        file
                          .name
                    }
                  );
                }
              }}
            >
              <Button variant="primary">
                Browse
              </Button>
            </FileTrigger>
          </Content>
        </IllustratedMessage>
      </DropZone>
    </>
  );
}
```
