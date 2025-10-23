---
source: https://react-spectrum.adobe.com/react-spectrum/Provider.html
date: Thu, 16 Oct 2025 01:04:41 GMT
---

Provider is the container for all React Spectrum applications. It defines the theme, locale, and other application level settings, and can also be used to provide common properties to a group of components.

* * *

```
import {Button, defaultTheme, Provider} from '@adobe/react-spectrum';

function App() {
  return (
    (
      <Provider theme={defaultTheme}>
        <Button variant="accent">
          Hello React Spectrum!
        </Button>
      </Provider>
    )
  );
}
```

```
import {
  Button,
  defaultTheme,
  Provider
} from '@adobe/react-spectrum';

function App() {
  return (
    (
      <Provider theme={defaultTheme}>
        <Button variant="accent">
          Hello React Spectrum!
        </Button>
      </Provider>
    )
  );
}
```

```
import {
  Button,
  defaultTheme,
  Provider
} from '@adobe/react-spectrum';

function App() {
  return (
    (
      <Provider
        theme={defaultTheme}
      >
        <Button variant="accent">
          Hello React
          Spectrum!
        </Button>
      </Provider>
    )
  );
}
```

* * *

A Provider must be the root component of your application. All other React Spectrum components rely on the Provider to define the theme, locale, and other settings that they need in order to render.

In order to provide the styling attributes that components need to render, you must pass a theme as a prop to the root provider in your application. Themes consist of a light and dark color scheme, along with medium and large platform scales. By default, React Spectrum will select the color scheme according to the user’s operating system setting, and the scale according to the device type (e.g. touch vs mouse input). To read more details about how theming works in React Spectrum, see the [theming docs](https://react-spectrum.adobe.com/react-spectrum/theming.html).

We recommend supporting both light and dark color schemes in your app, however, if you need to override this with an application specific setting, you can use the `colorScheme` prop.

```
<Provider theme={theme} colorScheme="light">
  <ActionButton margin="size-100">I'm a light button</ActionButton>
</Provider>
```

```
<Provider theme={theme} colorScheme="light">
  <ActionButton margin="size-100">
    I'm a light button
  </ActionButton>
</Provider>
```

```
<Provider
  theme={theme}
  colorScheme="light"
>
  <ActionButton margin="size-100">
    I'm a light button
  </ActionButton>
</Provider>
```

See the [styling docs](https://react-spectrum.adobe.com/react-spectrum/styling.html) for more information about using Spectrum color variables in your app to ensure it adapts to light and dark mode properly.

Another important setting for your application is the locale. By default, React Spectrum chooses the locale matching the user’s browser/operating system language, but this can be overridden with the locale prop if you have an application specific setting. This prop accepts a [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code. A list of supported locales is available [here](https://react-spectrum.adobe.com/react-aria/internationalization.html#supported-locales).

```
<Provider theme={theme} locale={appSettings.locale}>
  <YourApp />
</Provider>
```

```
<Provider theme={theme} locale={appSettings.locale}>
  <YourApp />
</Provider>
```

```
<Provider
  theme={theme}
  locale={appSettings
    .locale}
>
  <YourApp />
</Provider>
```

To access the current locale anywhere in your application, see the [useLocale](https://react-spectrum.adobe.com/react-aria/useLocale.html) hook.

The Provider component can also be used to set the responsive breakpoints for your application, which are used by [layout components](https://react-spectrum.adobe.com/react-spectrum/layout.html#responsive-layout) and [style props](https://react-spectrum.adobe.com/react-spectrum/styling.html#responsive-styles) of all components within the Provider. By default, React Spectrum provides 5 breakpoints, which correspond to common device resolutions:

-   S – 640px
-   M - 768px
-   L – 1024px
-   XL - 1280px
-   XXL - 1536px

These breakpoints can be overridden by passing the `breakpoints` prop to the `Provider` component. Any components within the Provider will consume these breakpoints and apply their style props accordingly. By default, React Spectrum uses t-shirt style names for breakpoints, but you can name custom breakpoints however you like.

This example specifies two breakpoints: `tablet` and `desktop`. It displays a [View](https://react-spectrum.adobe.com/react-spectrum/View.html) that changes color depending on which breakpoint is matched: green by default, blue at the `tablet` breakpoint, and magenta at the `desktop` breakpoint. See the docs for [style props](https://react-spectrum.adobe.com/react-spectrum/styling.html#responsive-styles) for more details.

```
<Provider theme={theme} breakpoints={{ tablet: 640, desktop: 1024 }}>
  <View
    height="size-1000"
    backgroundColor={{
      base: 'celery-600',
      tablet: 'blue-600',
      desktop: 'magenta-600'
    }}
  />
</Provider>
```

```
<Provider
  theme={theme}
  breakpoints={{ tablet: 640, desktop: 1024 }}
>
  <View
    height="size-1000"
    backgroundColor={{
      base: 'celery-600',
      tablet: 'blue-600',
      desktop: 'magenta-600'
    }}
  />
</Provider>
```

```
<Provider
  theme={theme}
  breakpoints={{
    tablet: 640,
    desktop: 1024
  }}
>
  <View
    height="size-1000"
    backgroundColor={{
      base:
        'celery-600',
      tablet:
        'blue-600',
      desktop:
        'magenta-600'
    }}
  />
</Provider>
```

The Provider component accepts an optional `router` prop. This enables React Spectrum components that render links to perform client side navigation using your application or framework's client side router. See the [client side routing guide](https://react-spectrum.adobe.com/react-spectrum/routing.html) for details on how to set this up.

```
let navigate = useNavigateFromYourRouter();

<Provider theme={theme} router={{navigate}}>
  <YourApp />
</Provider>
```

```
let navigate = useNavigateFromYourRouter();

<Provider theme={theme} router={{navigate}}>
  <YourApp />
</Provider>
```

```
let navigate =
  useNavigateFromYourRouter();

<Provider
  theme={theme}
  router={{ navigate }}
>
  <YourApp />
</Provider>
```

* * *

Provider can also be used to define common properties for a group of components within it. For example, a group of components could be disabled together rather than individually by setting the `isDisabled` prop on any parent provider.

```
<Flex direction="column" gap="size-100" alignItems="start">
  <Provider isDisabled>
    <RadioGroup label="Favorite animal">
      <Radio value="dogs">Dogs</Radio>
      <Radio value="cats">Cats</Radio>
      <Radio value="horses">Horses</Radio>
    </RadioGroup>
    <Checkbox>I agree</Checkbox>
    <Button variant="primary">Submit</Button>
  </Provider>
</Flex>
```

```
<Flex direction="column" gap="size-100" alignItems="start">
  <Provider isDisabled>
    <RadioGroup label="Favorite animal">
      <Radio value="dogs">Dogs</Radio>
      <Radio value="cats">Cats</Radio>
      <Radio value="horses">Horses</Radio>
    </RadioGroup>
    <Checkbox>I agree</Checkbox>
    <Button variant="primary">Submit</Button>
  </Provider>
</Flex>
```

```
<Flex
  direction="column"
  gap="size-100"
  alignItems="start"
>
  <Provider isDisabled>
    <RadioGroup label="Favorite animal">
      <Radio value="dogs">
        Dogs
      </Radio>
      <Radio value="cats">
        Cats
      </Radio>
      <Radio value="horses">
        Horses
      </Radio>
    </RadioGroup>
    <Checkbox>
      I agree
    </Checkbox>
    <Button variant="primary">
      Submit
    </Button>
  </Provider>
</Flex>
```

Provider supports many other properties that can be used in this way: `isQuiet`, `isEmphasized`, `isDisabled`, `isRequired`, `isReadOnly`, and `validationState`. These will be applied to any child components that support them.

Property groups can also be nested. For example, a group of components could be made quiet or emphasized, with a sub-group that is also disabled. The inner-most provider will override outer ones, as will corresponding props on the components themselves.

The following example shows a registration form, which disables a picker and submit button until an email address is entered. All elements within the form use a quiet style, except the submit button, which overrides the provider setting using a prop.

```
function Register() {
  let [email, setEmail] = React.useState('');

  return (
    <Flex direction="column" gap="size-100" alignItems="start">
      <Provider isQuiet>
        <TextField
          label="Email"
          value={email}
          onChange={setEmail} />
        <Provider isDisabled={email.length === 0}>
          <Picker label="Favorite color">
            <Item key="magenta">Magenta</Item>
            <Item key="indigo">Indigo</Item>
            <Item key="chartreuse">Chartreuse</Item>
          </Picker>
          <Button variant="primary">Submit</Button>
        </Provider>
      </Provider>
    </Flex>
  );
}
```

```
function Register() {
  let [email, setEmail] = React.useState('');

  return (
    <Flex
      direction="column"
      gap="size-100"
      alignItems="start"
    >
      <Provider isQuiet>
        <TextField
          label="Email"
          value={email}
          onChange={setEmail}
        />
        <Provider isDisabled={email.length === 0}>
          <Picker label="Favorite color">
            <Item key="magenta">Magenta</Item>
            <Item key="indigo">Indigo</Item>
            <Item key="chartreuse">Chartreuse</Item>
          </Picker>
          <Button variant="primary">Submit</Button>
        </Provider>
      </Provider>
    </Flex>
  );
}
```

```
function Register() {
  let [email, setEmail] =
    React.useState('');

  return (
    <Flex
      direction="column"
      gap="size-100"
      alignItems="start"
    >
      <Provider isQuiet>
        <TextField
          label="Email"
          value={email}
          onChange={setEmail}
        />
        <Provider
          isDisabled={email
            .length ===
            0}
        >
          <Picker label="Favorite color">
            <Item key="magenta">
              Magenta
            </Item>
            <Item key="indigo">
              Indigo
            </Item>
            <Item key="chartreuse">
              Chartreuse
            </Item>
          </Picker>
          <Button variant="primary">
            Submit
          </Button>
        </Provider>
      </Provider>
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

The content of the Provider.

`theme`

`[Theme](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/provider/src/index.d.ts:Theme)`

—

The theme for your application.

`colorScheme`

`[ColorScheme](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/provider/src/index.d.ts:ColorScheme)`

—

The color scheme for your application. Defaults to operating system preferences.

`defaultColorScheme`

`[ColorScheme](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/provider/src/index.d.ts:ColorScheme)`

`'light'`

The default color scheme if no operating system setting is available.

`scale`

`[Scale](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/provider/src/index.d.ts:Scale)`

—

Sets the scale for your applications. Defaults based on device pointer type.

`locale`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

`'en-US'`

The locale for your application as a [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code. Defaults to the browser/OS language setting.

`breakpoints`

`[Breakpoints](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/provider/src/index.d.ts:Breakpoints)`

`{S:380,M:768,L:1024}`

The breakpoints for styleProps. Do not use `base` property.

`router`

`[Router](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/provider/src/index.d.ts:Router)`

—

Provides a client side router to all nested React Spectrum links to enable client side navigation.

`isQuiet`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether descendants should be displayed with the quiet style.

`isEmphasized`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether descendants should be displayed with the emphasized style.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether descendants should be disabled.

`isRequired`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether descendants should be displayed with the required style.

`isReadOnly`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether descendants should be read only.

`validationState`

`[ValidationState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationState)`

—

Whether descendants should be displayed with the validation state style.

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

The `[useProvider](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/provider/src/Provider.tsx:useProvider)` hook can be used to access the various properties applied by the nearest parent Provider. This can be useful for adapting a custom component to the current color scheme or scale.

The example below uses the `colorScheme` returned from `useProvider` to display either a moon or sun icon depending on the current color scheme. Toggle the theme using the switcher in the top right corner of the page to see the icon change.

```
import {useProvider} from '@adobe/react-spectrum';
import Light from '@spectrum-icons/workflow/Light';
import Moon from '@spectrum-icons/workflow/Moon';

function Example() {
  let { colorScheme } = useProvider();

  return colorScheme === 'dark'
    ? <Moon aria-label="In dark theme" />
    : <Light aria-label="In light theme" />;
}

<Example />
```

```
import {useProvider} from '@adobe/react-spectrum';
import Light from '@spectrum-icons/workflow/Light';
import Moon from '@spectrum-icons/workflow/Moon';

function Example() {
  let { colorScheme } = useProvider();

  return colorScheme === 'dark'
    ? <Moon aria-label="In dark theme" />
    : <Light aria-label="In light theme" />;
}

<Example />
```

```
import {useProvider} from '@adobe/react-spectrum';
import Light from '@spectrum-icons/workflow/Light';
import Moon from '@spectrum-icons/workflow/Moon';

function Example() {
  let { colorScheme } =
    useProvider();

  return colorScheme ===
      'dark'
    ? (
      <Moon aria-label="In dark theme" />
    )
    : (
      <Light aria-label="In light theme" />
    );
}

<Example />
```
