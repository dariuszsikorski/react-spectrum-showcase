---
source: https://react-spectrum.adobe.com/react-spectrum/LabeledValue.html
date: Thu, 16 Oct 2025 01:32:00 GMT
---

A LabeledValue displays a non-editable value with a label. It formats numbers, dates, times, and lists according to the user's locale.

* * *

```
<LabeledValue label="File name" value="Budget.xls" />
```

```
<LabeledValue label="File name" value="Budget.xls" />
```

```
<LabeledValue
  label="File name"
  value="Budget.xls"
/>
```

* * *

In addition to a string as shown above, a `LabeledValue` accepts numbers, dates, times, and lists of strings in the `value` prop.

When the `value` prop is set to a number, `LabeledValue` formats it according to the user's locale.

```
<LabeledValue label="Number of cookies" value={1024} />
```

```
<LabeledValue label="Number of cookies" value={1024} />
```

```
<LabeledValue
  label="Number of cookies"
  value={1024}
/>
```

Custom `formatOptions` can also be provided to format the value as a percentage, unit, currency, etc. This prop is compatible with the option parameter of [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat).

```
<LabeledValue
  label="File size"
  value={1.2}
  formatOptions={{ style: 'unit', unit: 'megabyte' }}
/>
```

```
<LabeledValue
  label="File size"
  value={1.2}
  formatOptions={{ style: 'unit', unit: 'megabyte' }}
/>
```

```
<LabeledValue
  label="File size"
  value={1.2}
  formatOptions={{
    style: 'unit',
    unit: 'megabyte'
  }}
/>
```

An object with `start` and `end` properties may also be provided to format a numeric range.

```
<LabeledValue
  label="Price range"
  value={{ start: 150, end: 400 }}
  formatOptions={{
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }}
/>
```

```
<LabeledValue
  label="Price range"
  value={{ start: 150, end: 400 }}
  formatOptions={{
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }}
/>
```

```
<LabeledValue
  label="Price range"
  value={{
    start: 150,
    end: 400
  }}
  formatOptions={{
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits:
      0
  }}
/>
```

### Dates and times[#](#dates-and-times)

The `value` prop may be set to a JavaScript [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, or one of the types from [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) to display a date or time, which is formatted according to the user's locale.

```
import {getLocalTimeZone, today} from '@internationalized/date';

<LabeledValue
  label="Date modified"
  value={today(getLocalTimeZone()).subtract({ weeks: 1 })}
/>
```

```
import {
  getLocalTimeZone,
  today
} from '@internationalized/date';

<LabeledValue
  label="Date modified"
  value={today(getLocalTimeZone()).subtract({ weeks: 1 })}
/>
```

```
import {
  getLocalTimeZone,
  today
} from '@internationalized/date';

<LabeledValue
  label="Date modified"
  value={today(
    getLocalTimeZone()
  ).subtract({
    weeks: 1
  })}
/>
```

By default, the formatting depends on the type of value provided. Above, a [CalendarDate](https://react-spectrum.adobe.com/internationalized/date/CalendarDate.html) is provided, so only the date is displayed. To display a time, pass a [Time](https://react-spectrum.adobe.com/internationalized/date/Time.html) object. You can also provide a [CalendarDateTime](https://react-spectrum.adobe.com/internationalized/date/CalendarDateTime.html) or [ZonedDateTime](https://react-spectrum.adobe.com/internationalized/date/ZonedDateTime.html) to display a date with a time.

```
import {getLocalTimeZone, now} from '@internationalized/date';

<LabeledValue label="Page load time" value={now(getLocalTimeZone())} />
```

```
import {
  getLocalTimeZone,
  now
} from '@internationalized/date';

<LabeledValue
  label="Page load time"
  value={now(getLocalTimeZone())}
/>
```

```
import {
  getLocalTimeZone,
  now
} from '@internationalized/date';

<LabeledValue
  label="Page load time"
  value={now(
    getLocalTimeZone()
  )}
/>
```

An object with `start` and `end` properties may also be provided to format a date or time range.

```
import {Time} from '@internationalized/date';

<LabeledValue
  label="Business hours"
  value={{ start: new Time(8, 30), end: new Time(18) }}
/>
```

```
import {Time} from '@internationalized/date';

<LabeledValue
  label="Business hours"
  value={{ start: new Time(8, 30), end: new Time(18) }}
/>
```

```
import {Time} from '@internationalized/date';

<LabeledValue
  label="Business hours"
  value={{
    start: new Time(
      8,
      30
    ),
    end: new Time(18)
  }}
/>
```

Custom `formatOptions` can also be provided control the exact date format. This prop is compatible with the option parameter of [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

```
<LabeledValue
  label="Appointment date"
  value={new Date(2022, 6, 5)}
  formatOptions={{ dateStyle: 'short' }}
/>
```

```
<LabeledValue
  label="Appointment date"
  value={new Date(2022, 6, 5)}
  formatOptions={{ dateStyle: 'short' }}
/>
```

```
<LabeledValue
  label="Appointment date"
  value={new Date(
    2022,
    6,
    5
  )}
  formatOptions={{
    dateStyle: 'short'
  }}
/>
```

When the `value` prop is set to an array of strings, they are rendered as a comma-separated list according to the user's locale.

```
<LabeledValue
  label="Pizza toppings"
  value={['Pepperoni', 'Pineapple', 'Mushroom', 'Garlic']}
/>
```

```
<LabeledValue
  label="Pizza toppings"
  value={['Pepperoni', 'Pineapple', 'Mushroom', 'Garlic']}
/>
```

```
<LabeledValue
  label="Pizza toppings"
  value={[
    'Pepperoni',
    'Pineapple',
    'Mushroom',
    'Garlic'
  ]}
/>
```

By default, the list is displayed as a conjunction (an "and"-based grouping of items). This may be changed to a disjunction (an "or"-based grouping), or a pure comma-separated list using the `formatOptions` prop. This is compatible with the option parameter of [Intl.ListFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat).

```
<LabeledValue
  label="Interests"
  value={['Travel', 'Hiking', 'Snorkeling', 'Camping']}
  formatOptions={{ type: 'unit' }}
/>
```

```
<LabeledValue
  label="Interests"
  value={['Travel', 'Hiking', 'Snorkeling', 'Camping']}
  formatOptions={{ type: 'unit' }}
/>
```

```
<LabeledValue
  label="Interests"
  value={[
    'Travel',
    'Hiking',
    'Snorkeling',
    'Camping'
  ]}
  formatOptions={{
    type: 'unit'
  }}
/>
```

The value can be a component and will be rendered as provided. Components cannot be editable.

```
import {Link} from '@adobe/react-spectrum';

<LabeledValue
  label="Website"
  value={<Link href="https://www.adobe.com/">Adobe.com</Link>}
/>
```

```
import {Link} from '@adobe/react-spectrum';

<LabeledValue
  label="Website"
  value={
    <Link href="https://www.adobe.com/">Adobe.com</Link>
  }
/>
```

```
import {Link} from '@adobe/react-spectrum';

<LabeledValue
  label="Website"
  value={
    <Link href="https://www.adobe.com/">
      Adobe.com
    </Link>
  }
/>
```

* * *

A visual label must be provided to the `LabeledValue` using the `label` prop.

In order to internationalize a `LabeledValue`, a localized string should be passed to the `label` prop.

`LabeledValue` automatically formats numbers, dates, times, and lists according to the user's locale, as defined by the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html#locales) component. String values provided to a `LabeledValue` should be translated accordingly.

* * *

Name

Type

Default

Description

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[] | [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [RangeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:RangeValue)<[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)> | [DateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/labeledvalue/src/LabeledValue.tsx:DateTime) | [RangeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:RangeValue)<[DateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-spectrum/labeledvalue/src/LabeledValue.tsx:DateTime)> | [ReactElement](https://reactjs.org/docs/rendering-elements.html)`

—

The value to display.

`label`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The content to display as the label.

`formatOptions`

`[Intl.NumberFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) | [Intl.DateTimeFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) | [Intl.ListFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat)`

—

Formatting options for the value. The available options depend on the type passed to the `value` prop.

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

### Label alignment and position[#](#label-alignment-and-position)

[View guidelines](https://spectrum.adobe.com/page/field-label/#Label-position)

By default, the label is positioned above the `LabeledValue`. The `labelPosition` prop can be used to position the label to the side. The `labelAlign` prop can be used to align the label as "start" or "end". For left-to-right (LTR) languages, "start" refers to the left most edge of the `LabeledValue` and "end" refers to the right-most edge. For right-to-left (RTL) languages, this is flipped.

```
<LabeledValue
  label="File name"
  value="Onboarding.pdf"
  labelPosition="side"
  labelAlign="end"
/>
```

```
<LabeledValue
  label="File name"
  value="Onboarding.pdf"
  labelPosition="side"
  labelAlign="end"
/>
```

```
<LabeledValue
  label="File name"
  value="Onboarding.pdf"
  labelPosition="side"
  labelAlign="end"
/>
```

A [ContextualHelp](https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html) element may be placed next to the label to provide additional information or help about a LabeledValue.

```
import {Content, ContextualHelp, Heading} from '@adobe/react-spectrum';

<LabeledValue
  label="Aperture"
  value="f/1.5"
  contextualHelp={
    <ContextualHelp>
      <Heading>What is the aperture?</Heading>
      <Content>
        The aperture setting controls the amount of light reaching the image
        sensor.
      </Content>
    </ContextualHelp>
  }
/>
```

```
import {
  Content,
  ContextualHelp,
  Heading
} from '@adobe/react-spectrum';

<LabeledValue
  label="Aperture"
  value="f/1.5"
  contextualHelp={
    <ContextualHelp>
      <Heading>What is the aperture?</Heading>
      <Content>
        The aperture setting controls the amount of light
        reaching the image sensor.
      </Content>
    </ContextualHelp>
  }
/>
```

```
import {
  Content,
  ContextualHelp,
  Heading
} from '@adobe/react-spectrum';

<LabeledValue
  label="Aperture"
  value="f/1.5"
  contextualHelp={
    <ContextualHelp>
      <Heading>
        What is the
        aperture?
      </Heading>
      <Content>
        The aperture
        setting
        controls the
        amount of light
        reaching the
        image sensor.
      </Content>
    </ContextualHelp>
  }
/>
```
