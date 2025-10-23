---
source: https://react-spectrum.adobe.com/react-spectrum/Toast.html
date: Thu, 16 Oct 2025 01:35:32 GMT
---

Toasts display brief, temporary notifications of actions, errors, or other events in an application.

* * *

First, render a toast container at the root of your app:

```
<ToastContainer />
```

```
<ToastContainer />
```

```
<ToastContainer />
```

Then, queue a toast from anywhere:

```
<Button
  onPress={() => ToastQueue.positive('Toast is done!')}
  variant="primary">
  Show toast
</Button>
```

```
<Button
  onPress={() => ToastQueue.positive('Toast is done!')}
  variant="primary">
  Show toast
</Button>
```

```
<Button
  onPress={() =>
    ToastQueue
      .positive(
        'Toast is done!'
      )}
  variant="primary"
>
  Show toast
</Button>
```

## Content[#](#content)

* * *

Toasts are triggered using one of the methods of `[ToastQueue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/toast/src/ToastContainer.tsx:SpectrumToastQueue)`. A <`[ToastContainer](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/toast/src/ToastContainer.tsx:ToastContainer)`\> element must be rendered at the root of your app in order to display the queued toasts.

Toasts are shown according to the order they are added, with the most recent toast appearing at the bottom of the stack. Please use Toasts sparingly, see [Spectrum design docs](https://spectrum.adobe.com/page/toast/#Too-many-toasts).

```
<ButtonGroup>
  <Button
    onPress={() => ToastQueue.neutral('Toast available')}    variant="secondary">
    Show Neutral Toast
  </Button>
  <Button
    onPress={() => ToastQueue.positive('Toast is done!')}    variant="primary">
    Show Positive Toast
  </Button>
  <Button
    onPress={() => ToastQueue.negative('Toast is burned!')}    variant="negative">
    Show Negative Toast
  </Button>
  <Button
    onPress={() => ToastQueue.info('Toasting…')}    variant="accent"
    style="outline">
    Show Info Toast
  </Button>
</ButtonGroup>
```

```
<ButtonGroup>
  <Button
    onPress={() => ToastQueue.neutral('Toast available')}    variant="secondary">
    Show Neutral Toast
  </Button>
  <Button
    onPress={() => ToastQueue.positive('Toast is done!')}    variant="primary">
    Show Positive Toast
  </Button>
  <Button
    onPress={() => ToastQueue.negative('Toast is burned!')}    variant="negative">
    Show Negative Toast
  </Button>
  <Button
    onPress={() => ToastQueue.info('Toasting…')}    variant="accent"
    style="outline">
    Show Info Toast
  </Button>
</ButtonGroup>
```

```
<ButtonGroup>
  <Button
    onPress={() =>
      ToastQueue
        .neutral(
          'Toast available'
        )}    variant="secondary"
  >
    Show Neutral Toast
  </Button>
  <Button
    onPress={() =>
      ToastQueue
        .positive(
          'Toast is done!'
        )}    variant="primary"
  >
    Show Positive Toast
  </Button>
  <Button
    onPress={() =>
      ToastQueue
        .negative(
          'Toast is burned!'
        )}    variant="negative"
  >
    Show Negative Toast
  </Button>
  <Button
    onPress={() =>
      ToastQueue.info(
        'Toasting…'
      )}    variant="accent"
    style="outline"
  >
    Show Info Toast
  </Button>
</ButtonGroup>
```

To internationalize a Toast, all text content within the toast should be localized. This includes the `actionLabel` option, if provided. For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of Toast is automatically flipped.

Toasts are automatically displayed in a [landmark region](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) labeled "Notifications". The label can be overridden using the `aria-label` prop of the `ToastContainer` element. Landmark regions can be navigated using the keyboard by pressing the F6 key to move forward, and the Shift + F6 key to move backward. This provides an easy way for keyboard users to jump to the toasts from anywhere in the app. When the last toast is closed, keyboard focus is restored.

* * *

Toasts can include an optional action by specifying the `actionLabel` and `onAction` options when queueing a toast. In addition, the `onClose` event is triggered when the toast is dismissed. The `shouldCloseOnAction` option automatically closes the toast when an action is performed.

```
<Button
  onPress={() => ToastQueue.info('An update is available', {
    actionLabel: 'Update',
    onAction: () => alert('Updating!'),
    shouldCloseOnAction: true  })}
  variant="primary">
  Show toast
</Button>
```

```
<Button
  onPress={() => ToastQueue.info('An update is available', {
    actionLabel: 'Update',
    onAction: () => alert('Updating!'),
    shouldCloseOnAction: true  })}
  variant="primary">
  Show toast
</Button>
```

```
<Button
  onPress={() =>
    ToastQueue.info(
      'An update is available',
      {
        actionLabel:
          'Update',
        onAction: () =>
          alert(
            'Updating!'
          ),
        shouldCloseOnAction:
          true      }
    )}
  variant="primary"
>
  Show toast
</Button>
```

* * *

Toasts support a `timeout` option to automatically hide them after a certain amount of time. For accessibility, toasts have a minimum timeout of 5 seconds, and actionable toasts will not auto dismiss. In addition, timers will pause when the user focuses or hovers over a toast.

Be sure only to automatically dismiss toasts when the information is not important, or may be found elsewhere. Some users may require additional time to read a toast message, and screen zoom users may miss toasts entirely.

```
<Button
  onPress={() => ToastQueue.positive('Toast is done!', {timeout: 5000})}  variant="primary">
  Show toast
</Button>
```

```
<Button
  onPress={() =>
    ToastQueue.positive('Toast is done!', {
      timeout: 5000
    })}  variant="primary"
>
  Show toast
</Button>
```

```
<Button
  onPress={() =>
    ToastQueue
      .positive(
        'Toast is done!',
        {
          timeout: 5000
        }
      )}  variant="primary"
>
  Show toast
</Button>
```

* * *

Toasts may be programmatically dismissed if they become irrelevant before the user manually closes them. Each method of `ToastQueue` returns a function which may be used to close a toast.

```
function Example() {
  let [close, setClose] = React.useState(null);

  return (
    <Button
      onPress={() => {
        if (!close) {
          let close = ToastQueue.negative('Unable to save', {
            onClose: () => setClose(null)
          });          setClose(() => close);
        } else {
          close();        }
      }}
      variant="primary"
    >
      {close ? 'Hide' : 'Show'} Toast
    </Button>
  );
}
```

```
function Example() {
  let [close, setClose] = React.useState(null);

  return (
    <Button
      onPress={() => {
        if (!close) {
          let close = ToastQueue.negative(
            'Unable to save',
            { onClose: () => setClose(null) }
          );          setClose(() => close);
        } else {
          close();        }
      }}
      variant="primary"
    >
      {close ? 'Hide' : 'Show'} Toast
    </Button>
  );
}
```

```
function Example() {
  let [close, setClose] =
    React.useState(null);

  return (
    <Button
      onPress={() => {
        if (!close) {
          let close =
            ToastQueue
              .negative(
                'Unable to save',
                {
                  onClose:
                    () =>
                      setClose(
                        null
                      )
                }
              );          setClose(() =>
            close
          );
        } else {
          close();        }
      }}
      variant="primary"
    >
      {close
        ? 'Hide'
        : 'Show'} Toast
    </Button>
  );
}
```

* * *

By default, toasts are displayed at the bottom center of the screen. This can be changed by setting the `placement` prop on the `ToastContainer` to `'top'`, `'top end'`, `'bottom'`, or `'bottom end'`.

```
<ToastContainer placement="bottom end" />
```

```
<ToastContainer placement="bottom end" />
```

```
<ToastContainer placement="bottom end" />
```

* * *

Method

Description

`neutral( (children: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), , options: [SpectrumToastOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/toast/src/ToastContainer.tsx:SpectrumToastOptions) )): [CloseFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/toast/src/ToastContainer.tsx:CloseFunction)`

Queues a neutral toast.

`positive( (children: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), , options: [SpectrumToastOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/toast/src/ToastContainer.tsx:SpectrumToastOptions) )): [CloseFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/toast/src/ToastContainer.tsx:CloseFunction)`

Queues a positive toast.

`negative( (children: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), , options: [SpectrumToastOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/toast/src/ToastContainer.tsx:SpectrumToastOptions) )): [CloseFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/toast/src/ToastContainer.tsx:CloseFunction)`

Queues a negative toast.

`info( (children: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), , options: [SpectrumToastOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/toast/src/ToastContainer.tsx:SpectrumToastOptions) )): [CloseFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/toast/src/ToastContainer.tsx:CloseFunction)`

Queues an informational toast.

Name

Type

Description

`actionLabel`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A label for the action button within the toast.

`onAction`

`() => void`

Handler that is called when the action button is pressed.

`shouldCloseOnAction`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the toast should automatically close when an action is performed.

`onClose`

`() => void`

Handler that is called when the toast is closed, either by the user or after a timeout.

`timeout`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

A timeout to automatically close the toast after, in milliseconds.

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

Name

Type

Default

Description

`placement`

`[ToastPlacement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/toast/src/ToastContainer.tsx:ToastPlacement)`

—

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

`"Notifications"`

An accessibility label for the toast region.

`aria-labelledby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Identifies the element (or elements) that labels the current element.

`aria-describedby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Identifies the element (or elements) that describes the object.

`aria-details`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Identifies the element (or elements) that provide a detailed, extended description for the object.

* * *

To identify a particular instance of the secondary or close button, you can use the following data-testid's respectively:

-   `"rsp-Toast-secondaryButton"`
-   `"rsp-Toast-closeButton"`
