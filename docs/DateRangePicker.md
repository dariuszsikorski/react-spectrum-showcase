---
source: https://react-spectrum.adobe.com/react-spectrum/DateRangePicker.html
date: Thu, 16 Oct 2025 01:16:23 GMT
---

DateRangePickers combine two DateFields and a RangeCalendar popover to allow users to enter or select a date and time range.

* * *

```
<DateRangePicker label="Date range" />
```

```
<DateRangePicker label="Date range" />
```

```
<DateRangePicker label="Date range" />
```

* * *

A `DateRangePicker` displays a placeholder by default. An initial, uncontrolled value can be provided to the `DateRangePicker` using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop.

Date ranges are objects with `start` and `end` properties containing date values, which are provided using objects in the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) package. This library handles correct international date manipulation across calendars, time zones, and other localization concerns. `DateRangePicker` supports values of the following types:

-   `[CalendarDate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDate)` – a date without any time components. May be parsed from a string representation using the `[parseDate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseDate)` function. Use this type to represent dates where the time is not important, such as a birthday or an all day calendar event.
-   `[CalendarDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDateTime)` – a date with a time, but not in any specific time zone. May be parsed from a string representation using the `[parseDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseDateTime)` function. Use this type to represent times that occur at the same local time regardless of the time zone, such as the time of New Years Eve fireworks which always occur at midnight. Most times are better stored as a `ZonedDateTime`.
-   `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` – a date with a time in a specific time zone. May be parsed from a string representation using the `[parseZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseZonedDateTime)`, `[parseAbsolute](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsolute)`, or `[parseAbsoluteToLocal](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsoluteToLocal)` functions. Use this type to represent an exact moment in time at a particular location on Earth.

```
import {parseDate} from '@internationalized/date';

function Example() {
  let [value, setValue] = React.useState({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08')
  });

  return (
    <Flex gap="size-150" wrap>
      <DateRangePicker
        label="Date range (uncontrolled)"
        defaultValue={{
          start: parseDate('2020-02-03'),
          end: parseDate('2020-02-08')
        }} />
      <DateRangePicker
        label="Date range (controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}
```

```
import {parseDate} from '@internationalized/date';

function Example() {
  let [value, setValue] = React.useState({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08')
  });

  return (
    <Flex gap="size-150" wrap>
      <DateRangePicker
        label="Date range (uncontrolled)"
        defaultValue={{
          start: parseDate('2020-02-03'),
          end: parseDate('2020-02-08')
        }} />
      <DateRangePicker
        label="Date range (controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}
```

```
import {parseDate} from '@internationalized/date';

function Example() {
  let [value, setValue] =
    React.useState({
      start: parseDate(
        '2020-02-03'
      ),
      end: parseDate(
        '2020-02-08'
      )
    });

  return (
    <Flex
      gap="size-150"
      wrap
    >
      <DateRangePicker
        label="Date range (uncontrolled)"
        defaultValue={{
          start:
            parseDate(
              '2020-02-03'
            ),
          end: parseDate(
            '2020-02-08'
          )
        }}
      />
      <DateRangePicker
        label="Date range (controlled)"
        value={value}
        onChange={setValue}
      />
    </Flex>
  );
}
```

`DateRangePicker` is time zone aware when `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` objects are provided as the value. In this case, the time zone abbreviation is displayed, and time zone concerns such as daylight saving time are taken into account when the value is manipulated.

In most cases, your data will come from and be sent to a server as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string. [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) includes functions for parsing strings in multiple formats into `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` objects. Which format you use will depend on what information you need to store.

-   `[parseZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseZonedDateTime)` – This function parses a date with an explicit time zone and optional UTC offset attached (e.g. `"2021-11-07T00:45[America/Los_Angeles]"` or `"2021-11-07T00:45-07:00[America/Los_Angeles]"`). This format preserves the maximum amount of information. If the exact local time and time zone that a user selected is important, use this format. Storing the time zone and offset that was selected rather than converting to UTC ensures that the local time is correct regardless of daylight saving rule changes (e.g. if a locale abolishes DST). Examples where this applies include calendar events, reminders, and other times that occur in a particular location.
-   `[parseAbsolute](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsolute)` – This function parses an absolute date and time that occurs at the same instant at all locations on Earth. It can be represented in UTC (e.g. `"2021-11-07T07:45:00Z"`), or stored with a particular offset (e.g. `"2021-11-07T07:45:00-07:00"`). A time zone identifier, e.g. `America/Los_Angeles`, must be passed, and the result will be converted into that time zone. Absolute times are the best way to represent events that occurred in the past, or future events where an exact time is needed, regardless of time zone.
-   `[parseAbsoluteToLocal](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsoluteToLocal)` – This function parses an absolute date and time into the current user's local time zone. It is a shortcut for `parseAbsolute`, and accepts the same formats.

```
import {parseZonedDateTime} from '@internationalized/date';

<DateRangePicker
  label="Date range"
  defaultValue={{
    start: parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]'),
    end: parseZonedDateTime('2022-11-08T11:15[America/Los_Angeles]')
  }} />
```

```
import {parseZonedDateTime} from '@internationalized/date';

<DateRangePicker
  label="Date range"
  defaultValue={{
    start: parseZonedDateTime(
      '2022-11-07T00:45[America/Los_Angeles]'
    ),
    end: parseZonedDateTime(
      '2022-11-08T11:15[America/Los_Angeles]'
    )
  }}
/>
```

```
import {parseZonedDateTime} from '@internationalized/date';

<DateRangePicker
  label="Date range"
  defaultValue={{
    start:
      parseZonedDateTime(
        '2022-11-07T00:45[America/Los_Angeles]'
      ),
    end:
      parseZonedDateTime(
        '2022-11-08T11:15[America/Los_Angeles]'
      )
  }}
/>
```

`DateRangePicker` displays times in the time zone included in the `ZonedDateTime` object. The above example is always displayed in Pacific Standard Time because the `America/Los_Angeles` time zone identifier is provided. [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) includes functions for converting dates between time zones, or parsing a date directly into a specific time zone or the user's local time zone, as shown below.

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<DateRangePicker
  label="Date range"
  defaultValue={{
    start: parseAbsoluteToLocal('2021-11-07T07:45:00Z'),
    end: parseAbsoluteToLocal('2021-11-08T14:25:00Z')
  }}
/>
```

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<DateRangePicker
  label="Date range"
  defaultValue={{
    start: parseAbsoluteToLocal('2021-11-07T07:45:00Z'),
    end: parseAbsoluteToLocal('2021-11-08T14:25:00Z')
  }}
/>
```

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<DateRangePicker
  label="Date range"
  defaultValue={{
    start:
      parseAbsoluteToLocal(
        '2021-11-07T07:45:00Z'
      ),
    end:
      parseAbsoluteToLocal(
        '2021-11-08T14:25:00Z'
      )
  }}
/>
```

The `granularity` prop allows you to control the smallest unit that is displayed by a `DateRangePicker`. By default, `CalendarDate` values are displayed with `"day"` granularity (year, month, and day), and `CalendarDateTime` and `ZonedDateTime` values are displayed with `"minute"` granularity. More granular time values can be displayed by setting the `granularity` prop to `"second"`.

In addition, when a value with a time is provided but you wish to only display the date, you can set the granularity to `"day"`. This has no effect on the actual value (it still has a time component), only on what fields are displayed. In the following example, two DateRangePickers are synchronized with the same value, but display different granularities.

```
function Example() {
  let [date, setDate] = React.useState({
    start: parseAbsoluteToLocal('2021-04-07T18:45:22Z'),
    end: parseAbsoluteToLocal('2021-04-08T20:00:00Z')
  });

  return (
    <Flex gap="size-150" wrap>
      <DateRangePicker
        label="Date and time range"
        granularity="second"
        value={date}
        onChange={setDate} />
      <DateRangePicker
        label="Date range"
        granularity="day"
        value={date}
        onChange={setDate} />
    </Flex>
  );
}
```

```
function Example() {
  let [date, setDate] = React.useState({
    start: parseAbsoluteToLocal('2021-04-07T18:45:22Z'),
    end: parseAbsoluteToLocal('2021-04-08T20:00:00Z')
  });

  return (
    <Flex gap="size-150" wrap>
      <DateRangePicker
        label="Date and time range"
        granularity="second"
        value={date}
        onChange={setDate} />
      <DateRangePicker
        label="Date range"
        granularity="day"
        value={date}
        onChange={setDate} />
    </Flex>
  );
}
```

```
function Example() {
  let [date, setDate] =
    React.useState({
      start:
        parseAbsoluteToLocal(
          '2021-04-07T18:45:22Z'
        ),
      end:
        parseAbsoluteToLocal(
          '2021-04-08T20:00:00Z'
        )
    });

  return (
    <Flex
      gap="size-150"
      wrap
    >
      <DateRangePicker
        label="Date and time range"
        granularity="second"
        value={date}
        onChange={setDate}
      />
      <DateRangePicker
        label="Date range"
        granularity="day"
        value={date}
        onChange={setDate}
      />
    </Flex>
  );
}
```

If no `value` or `defaultValue` prop is passed, then the `granularity` prop also affects which type of value is emitted from the `onChange` event. Note that by default, time values will not have a time zone because none was supplied. You can override this by setting the `placeholderValue` prop explicitly. Values emitted from `onChange` will use the time zone of the placeholder value.

```
import {now} from '@internationalized/date';

<Flex gap="size-150" wrap>
  <DateRangePicker
    label="Date range"
    granularity="second" />
  <DateRangePicker
    label="Date range"
    placeholderValue={now('America/New_York')}
    granularity="second" />
</Flex>
```

```
import {now} from '@internationalized/date';

<Flex gap="size-150" wrap>
  <DateRangePicker
    label="Date range"
    granularity="second" />
  <DateRangePicker
    label="Date range"
    placeholderValue={now('America/New_York')}
    granularity="second" />
</Flex>
```

```
import {now} from '@internationalized/date';

<Flex
  gap="size-150"
  wrap
>
  <DateRangePicker
    label="Date range"
    granularity="second"
  />
  <DateRangePicker
    label="Date range"
    placeholderValue={now(
      'America/New_York'
    )}
    granularity="second"
  />
</Flex>
```

`DateRangePicker` supports selecting dates in many calendar systems used around the world, including Gregorian, Hebrew, Indian, Islamic, Buddhist, and more. Dates are automatically displayed in the appropriate calendar system for the user's locale. The calendar system can be overridden using the [Unicode calendar locale extension](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#adding_a_calendar_in_the_locale_string), passed to the `Provider` component.

Selected dates passed to `onChange` always use the same calendar system as the `value` or `defaultValue` prop. If no `value` or `defaultValue` is provided, then dates passed to `onChange` are always in the Gregorian calendar since this is the most commonly used. This means that even though the user selects dates in their local calendar system, applications are able to deal with dates from all users consistently.

The below example displays a `DateRangePicker` in the Hindi language, using the Indian calendar. Dates emitted from `onChange` are in the Gregorian calendar.

```
import {Provider} from '@adobe/react-spectrum';

function Example() {
  let [range, setRange] = React.useState(null);
  return (
    <Provider locale="hi-IN-u-ca-indian">
      <DateRangePicker label="Date range" value={range} onChange={setRange} />
      <p>Start date: {range?.start.toString()}</p>
      <p>End date: {range?.end.toString()}</p>
    </Provider>
  );
}
```

```
import {Provider} from '@adobe/react-spectrum';

function Example() {
  let [range, setRange] = React.useState(null);
  return (
    <Provider locale="hi-IN-u-ca-indian">
      <DateRangePicker
        label="Date range"
        value={range}
        onChange={setRange}
      />
      <p>Start date: {range?.start.toString()}</p>
      <p>End date: {range?.end.toString()}</p>
    </Provider>
  );
}
```

```
import {Provider} from '@adobe/react-spectrum';

function Example() {
  let [range, setRange] =
    React.useState(null);
  return (
    <Provider locale="hi-IN-u-ca-indian">
      <DateRangePicker
        label="Date range"
        value={range}
        onChange={setRange}
      />
      <p>
        Start date:{' '}
        {range?.start
          .toString()}
      </p>
      <p>
        End date:{' '}
        {range?.end
          .toString()}
      </p>
    </Provider>
  );
}
```

`DateRangePicker` also supports custom calendar systems that implement custom business rules. An example would be a fiscal year calendar that follows a [4-5-4 format](https://nrf.com/resources/4-5-4-calendar), where month ranges don't follow the usual Gregorian calendar. This prop is used when displaying the range calendar popover component.

The `createCalendar` prop accepts a function that returns an instance of the `[Calendar](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/types.ts:Calendar)` interface. See the docs in [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/Calendar.html#custom-calendars) for an example implementation.

```
import {GregorianCalendar} from '@internationalized/date';

function Example() {
  return <DateRangePicker createCalendar={() => new Custom454()} />;
}

class Custom454 extends GregorianCalendar {
  // See @internationalized/date docs linked above...
  
}
```

```
import {GregorianCalendar} from '@internationalized/date';

function Example() {
  return (
    <DateRangePicker
      createCalendar={() => new Custom454()}
    />
  );
}

class Custom454 extends GregorianCalendar {
  // See @internationalized/date docs linked above...
}
```

```
import {GregorianCalendar} from '@internationalized/date';

function Example() {
  return (
    <DateRangePicker
      createCalendar={() =>
        new Custom454()}
    />
  );
}

class Custom454
  extends GregorianCalendar {
  // See @internationalized/date docs linked above...
}
```

DateRangePicker supports the `startName` and `endName` props for integration with HTML forms. The values will be submitted to the server as [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted strings according to the granularity of the value. For example, if the date range picker allows selecting only dates then strings such as `"2023-02-03"` will be submitted, and if it allows selecting times then strings such as `"2023-02-03T08:45:00"` will be submitted. See the [Value](#value) section above for more details about the supported value types.

```
<DateRangePicker label="Trip dates" startName="startDate" endName="endDate" />
```

```
<DateRangePicker
  label="Trip dates"
  startName="startDate"
  endName="endDate"
/>
```

```
<DateRangePicker
  label="Trip dates"
  startName="startDate"
  endName="endDate"
/>
```

* * *

A visual label should be provided for the `DateRangePicker` using the `label` prop. If the `DateRangePicker` is required, the `isRequired` and `necessityIndicator` props can be used to show a required state.

```
<Flex gap="size-150" wrap>
  <DateRangePicker label="Date range" />
  <DateRangePicker label="Date range" isRequired necessityIndicator="icon" />
  <DateRangePicker label="Date range" isRequired necessityIndicator="label" />
  <DateRangePicker label="Date range" necessityIndicator="label" />
</Flex>
```

```
<Flex gap="size-150" wrap>
  <DateRangePicker label="Date range" />
  <DateRangePicker
    label="Date range"
    isRequired
    necessityIndicator="icon"
  />
  <DateRangePicker
    label="Date range"
    isRequired
    necessityIndicator="label"
  />
  <DateRangePicker
    label="Date range"
    necessityIndicator="label"
  />
</Flex>
```

```
<Flex
  gap="size-150"
  wrap
>
  <DateRangePicker label="Date range" />
  <DateRangePicker
    label="Date range"
    isRequired
    necessityIndicator="icon"
  />
  <DateRangePicker
    label="Date range"
    isRequired
    necessityIndicator="label"
  />
  <DateRangePicker
    label="Date range"
    necessityIndicator="label"
  />
</Flex>
```

If a visible label isn't specified, an `aria-label` must be provided to the `DateRangePicker` for accessibility. If the field is labeled by a separate element, an `aria-labelledby` prop must be provided using the `id` of the labeling element instead.

In order to internationalize a `DateRangePicker`, a localized string should be passed to the `label` or `aria-label` prop. When the `necessityIndicator` prop is set to `"label"`, a localized string will be provided for `"(required)"` or `"(optional)"` automatically.

* * *

`DateRangePicker` accepts an `onChange` prop which is triggered whenever the start or end date is edited by the user. The example below uses `onChange` to update a separate element with a formatted version of the date range in the user's locale and local time zone. This is done by converting the dates to native JavaScript `Date` objects to pass to the formatter.

```
import {getLocalTimeZone} from '@internationalized/date';
import {useDateFormatter} from '@adobe/react-spectrum';

function Example() {
  let [range, setRange] = React.useState({
    start: parseDate('2020-07-03'),
    end: parseDate('2020-07-10')
  });
  let formatter = useDateFormatter({ dateStyle: 'long' });

  return (
    <>
      <DateRangePicker label="Date range" value={range} onChange={setRange} />
      <p>
        Selected date: {range
          ? formatter.formatRange(
            range.start.toDate(getLocalTimeZone()),
            range.end.toDate(getLocalTimeZone())
          )
          : '--'}
      </p>
    </>
  );
}
```

```
import {getLocalTimeZone} from '@internationalized/date';
import {useDateFormatter} from '@adobe/react-spectrum';

function Example() {
  let [range, setRange] = React.useState({
    start: parseDate('2020-07-03'),
    end: parseDate('2020-07-10')
  });
  let formatter = useDateFormatter({ dateStyle: 'long' });

  return (
    <>
      <DateRangePicker
        label="Date range"
        value={range}
        onChange={setRange}
      />
      <p>
        Selected date: {range
          ? formatter.formatRange(
            range.start.toDate(getLocalTimeZone()),
            range.end.toDate(getLocalTimeZone())
          )
          : '--'}
      </p>
    </>
  );
}
```

```
import {getLocalTimeZone} from '@internationalized/date';
import {useDateFormatter} from '@adobe/react-spectrum';

function Example() {
  let [range, setRange] =
    React.useState({
      start: parseDate(
        '2020-07-03'
      ),
      end: parseDate(
        '2020-07-10'
      )
    });
  let formatter =
    useDateFormatter({
      dateStyle: 'long'
    });

  return (
    <>
      <DateRangePicker
        label="Date range"
        value={range}
        onChange={setRange}
      />
      <p>
        Selected date:
        {' '}
        {range
          ? formatter
            .formatRange(
              range.start
                .toDate(
                  getLocalTimeZone()
                ),
              range.end
                .toDate(
                  getLocalTimeZone()
                )
            )
          : '--'}
      </p>
    </>
  );
}
```

* * *

DateRangePicker supports the `isRequired` prop to ensure the user enters a value, as well as minimum and maximum values, and custom client and server-side validation. It can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-spectrum/forms.html) guide to learn more.

When the [Form](https://react-spectrum.adobe.com/react-spectrum/Form.html) component has the `validationBehavior="native"` prop, validation errors block form submission and are displayed as help text automatically. Errors are displayed when the user blurs the date range picker or submits the form.

```
import {Button, ButtonGroup, Form} from '@adobe/react-spectrum';

<Form validationBehavior="native" maxWidth="size-3000">
  <DateRangePicker
    label="Date range"
    startName="startDate"
    endName="endDate"
    isRequired
  />  <ButtonGroup>
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
  <DateRangePicker
    label="Date range"
    startName="startDate"
    endName="endDate"
    isRequired
  />  <ButtonGroup>
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
  <DateRangePicker
    label="Date range"
    startName="startDate"
    endName="endDate"
    isRequired
  />  <ButtonGroup>
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

By default, `DateRangePicker` displays default validation messages provided by the browser. See [Customizing error messages](https://react-spectrum.adobe.com/react-spectrum/forms.html#customizing-error-messages) in the Forms guide to learn how to provide your own custom errors.

### Minimum and maximum values[#](#minimum-and-maximum-values)

The `minValue` and `maxValue` props can also be used to ensure the value is within a specific range. `DateRangePicker` also validates that the end date is after the start date. This example only accepts dates after today.

```
import {today} from '@internationalized/date';

<Form validationBehavior="native" maxWidth="size-3000">
  <DateRangePicker
    label="Trip dates"
    minValue={today(getLocalTimeZone())}    defaultValue={{
      start: parseDate('2022-02-03'),
      end: parseDate('2022-05-03')
    }} />
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
```

```
import {today} from '@internationalized/date';

<Form validationBehavior="native" maxWidth="size-3000">
  <DateRangePicker
    label="Trip dates"
    minValue={today(getLocalTimeZone())}    defaultValue={{
      start: parseDate('2022-02-03'),
      end: parseDate('2022-05-03')
    }} />
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
```

```
import {today} from '@internationalized/date';

<Form
  validationBehavior="native"
  maxWidth="size-3000"
>
  <DateRangePicker
    label="Trip dates"
    minValue={today(
      getLocalTimeZone()
    )}    defaultValue={{
      start: parseDate(
        '2022-02-03'
      ),
      end: parseDate(
        '2022-05-03'
      )
    }}
  />
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

The `validate` function can be used to perform custom validation logic. It receives the current date range, and should return a string or array of strings representing one or more error messages if the value is invalid.

This example validates that the selected date range is a maximum of 1 week in duration.

```
<Form validationBehavior="native" maxWidth="size-3000">
  <DateRangePicker
    label="Trip dates"
    validate={(range) =>
      range?.end.compare(range.start) > 7
        ? 'Maximum stay duration is 1 week.'
        : null}    defaultValue={{
      start: today(getLocalTimeZone()),
      end: today(getLocalTimeZone()).add({ weeks: 1, days: 3 })
    }}
  />
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
```

```
<Form validationBehavior="native" maxWidth="size-3000">
  <DateRangePicker
    label="Trip dates"
    validate={(range) =>
      range?.end.compare(range.start) > 7
        ? 'Maximum stay duration is 1 week.'
        : null}    defaultValue={{
      start: today(getLocalTimeZone()),
      end: today(getLocalTimeZone()).add({
        weeks: 1,
        days: 3
      })
    }}
  />
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
<Form
  validationBehavior="native"
  maxWidth="size-3000"
>
  <DateRangePicker
    label="Trip dates"
    validate={(range) =>
      range?.end
          .compare(
            range.start
          ) > 7
        ? 'Maximum stay duration is 1 week.'
        : null}    defaultValue={{
      start: today(
        getLocalTimeZone()
      ),
      end: today(
        getLocalTimeZone()
      ).add({
        weeks: 1,
        days: 3
      })
    }}
  />
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

`DateRangePicker` supports marking certain dates as _unavailable_. These dates cannot be selected by the user and are displayed with a crossed out appearance in the calendar. The `isDateUnavailable` prop accepts a callback that is called to evaluate whether each visible date is unavailable.

Note that by default, users may not select non-contiguous ranges, i.e. ranges that contain unavailable dates within them. Once a start date is selected in the calendar, enabled dates will be restricted to subsequent dates until an unavailable date is hit. While this is handled automatically in the calendar, additional validation logic must be provided to ensure an invalid state is displayed in the date field. This can be achieved using the `validationState` prop. See [below](#non-contiguous-ranges) for an example of how to allow non-contiguous ranges.

This example includes multiple unavailable date ranges, e.g. dates when a rental house is not available. The `minValue` prop is also used to prevent selecting dates before today. The `validationState` prop is used to mark selected date ranges with unavailable dates in the middle as invalid.

```
import {today} from '@internationalized/date';

function Example() {
  let now = today(getLocalTimeZone());
  let disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })]
  ];

  return (
    <DateRangePicker
      label="Trip dates"
      minValue={today(getLocalTimeZone())}
      isDateUnavailable={(date) =>
        disabledRanges.some((interval) =>
          date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
        )}
      validate={(value) =>
        disabledRanges.some((interval) =>
            value && value.end.compare(interval[0]) >= 0 &&
            value.start.compare(interval[1]) <= 0
          )
          ? 'Selected date range may not include unavailable dates.'
          : null}      validationBehavior="native"
    />
  );
}
```

```
import {today} from '@internationalized/date';

function Example() {
  let now = today(getLocalTimeZone());
  let disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })]
  ];

  return (
    <DateRangePicker
      label="Trip dates"
      minValue={today(getLocalTimeZone())}
      isDateUnavailable={(date) =>
        disabledRanges.some((interval) =>
          date.compare(interval[0]) >= 0 &&
          date.compare(interval[1]) <= 0
        )}
      validate={(value) =>
        disabledRanges.some((interval) =>
            value && value.end.compare(interval[0]) >= 0 &&
            value.start.compare(interval[1]) <= 0
          )
          ? 'Selected date range may not include unavailable dates.'
          : null}      validationBehavior="native"
    />
  );
}
```

```
import {today} from '@internationalized/date';

function Example() {
  let now = today(
    getLocalTimeZone()
  );
  let disabledRanges = [
    [
      now,
      now.add({
        days: 5
      })
    ],
    [
      now.add({
        days: 14
      }),
      now.add({
        days: 16
      })
    ],
    [
      now.add({
        days: 23
      }),
      now.add({
        days: 24
      })
    ]
  ];

  return (
    <DateRangePicker
      label="Trip dates"
      minValue={today(
        getLocalTimeZone()
      )}
      isDateUnavailable={(date) =>
        disabledRanges
          .some((
            interval
          ) =>
            date.compare(
                interval[
                  0
                ]
              ) >= 0 &&
            date.compare(
                interval[
                  1
                ]
              ) <= 0
          )}
      validate={(value) =>
        disabledRanges
            .some(
              (interval) =>
                value &&
                value.end
                    .compare(
                      interval[
                        0
                      ]
                    ) >=
                  0 &&
                value
                    .start
                    .compare(
                      interval[
                        1
                      ]
                    ) <=
                  0
            )
          ? 'Selected date range may not include unavailable dates.'
          : null}      validationBehavior="native"
    />
  );
}
```

The `allowsNonContiguousRanges` prop enables a range to be selected even if there are unavailable dates in the middle. The value emitted in the `onChange` event will still be a single range with a `start` and `end` property, but unavailable dates will not be displayed as selected. It is up to applications to split the full selected range into multiple as needed for business logic.

This example prevents selecting weekends, but allows selecting ranges that span multiple weeks.

```
import {isWeekend} from '@internationalized/date';
import {useLocale} from '@adobe/react-spectrum';

function Example() {
  let { locale } = useLocale();

  return (
    <DateRangePicker
      label="Time off request"
      isDateUnavailable={(date) => isWeekend(date, locale)}
      allowsNonContiguousRanges
    />
  );
}
```

```
import {isWeekend} from '@internationalized/date';
import {useLocale} from '@adobe/react-spectrum';

function Example() {
  let { locale } = useLocale();

  return (
    <DateRangePicker
      label="Time off request"
      isDateUnavailable={(date) => isWeekend(date, locale)}
      allowsNonContiguousRanges
    />
  );
}
```

```
import {isWeekend} from '@internationalized/date';
import {useLocale} from '@adobe/react-spectrum';

function Example() {
  let { locale } =
    useLocale();

  return (
    <DateRangePicker
      label="Time off request"
      isDateUnavailable={(date) =>
        isWeekend(
          date,
          locale
        )}
      allowsNonContiguousRanges
    />
  );
}
```

* * *

Name

Type

Default

Description

`pageBehavior`

`[PageBehavior](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:PageBehavior)`

`visible`

Controls the behavior of paging. Pagination either works by advancing the visible page by visibleDuration (default) or one unit of visibleDuration.

`firstDayOfWeek`

`'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat'`

—

The day that starts the week.

`minValue`

`[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The minimum allowed date that a user may select.

`maxValue`

`[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The maximum allowed date that a user may select.

`isDateUnavailable`

`( (date: [DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue) )) => [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.

`placeholderValue`

`[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

A placeholder date that influences the format of the placeholder shown when no value is selected. Defaults to today's date at midnight.

`hourCycle`

`12 | 24`

—

Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.

`granularity`

`[Granularity](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:Granularity)`

—

Determines the smallest unit that is displayed in the date picker. By default, this is `"day"` for dates, and `"minute"` for times.

`hideTimeZone`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether to hide the time zone abbreviation.

`shouldForceLeadingZeros`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether to always show leading zeros in the month, day, and hour fields. By default, this is determined by the user's locale.

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

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`allowsNonContiguousRanges`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

When combined with `isDateUnavailable`, determines whether non-contiguous ranges, i.e. ranges containing unavailable dates, may be selected.

`startName`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the start date input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`endName`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the end date input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`validate`

`( (value: [RangeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:RangeValue)<[MappedDateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:MappedDateValue)<[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue)>> )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if `validationBehavior="native"`. For realtime validation, use the `isInvalid` prop instead.

`value`

`[RangeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:RangeValue)<[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The current value (controlled).

`defaultValue`

`[RangeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:RangeValue)<[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The default value (uncontrolled).

`maxVisibleMonths`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`1`

The maximum number of months to display at once in the calendar popover, if screen space permits.

`shouldFlip`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the calendar popover should automatically flip direction when space is limited.

`createCalendar`

`( (identifier: [CalendarIdentifier](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/types.ts:CalendarIdentifier) )) => [Calendar](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/types.ts:Calendar)`

—

A function to create a new [Calendar](https://react-spectrum.adobe.com/internationalized/date/Calendar.html) object for a given calendar identifier. This will be used for the popover calendar. If not provided, the `createCalendar` function from `@internationalized/date` will be used.

`isQuiet`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether the date picker should be displayed with a quiet style.

`showFormatHelpText`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether to show the localized date format as help text below the field.

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

`validationState`

`[ValidationState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationState)`

—

Whether the input should display its "valid" or "invalid" visual styling.

Events

Name

Type

Description

`onFocus`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element receives focus.

`onBlur`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

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

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the overlay's open state changes.

`onChange`

`( (value: [RangeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:RangeValue)<[MappedDateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:MappedDateValue)<[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue)>> |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => void`

Handler that is called when the value changes.

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
<DateRangePicker label="Date range" isQuiet />
```

```
<DateRangePicker label="Date range" isQuiet />
```

```
<DateRangePicker
  label="Date range"
  isQuiet
/>
```

```
<DateRangePicker label="Date range" isDisabled />
```

```
<DateRangePicker label="Date range" isDisabled />
```

```
<DateRangePicker
  label="Date range"
  isDisabled
/>
```

The `isReadOnly` boolean prop makes the DateRangePicker's value immutable. Unlike `isDisabled`, the DateRangePicker remains focusable.

```
<DateRangePicker
  label="Date range"
  value={{
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1 })
  }}
  isReadOnly
/>
```

```
<DateRangePicker
  label="Date range"
  value={{
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1 })
  }}
  isReadOnly
/>
```

```
<DateRangePicker
  label="Date range"
  value={{
    start: today(
      getLocalTimeZone()
    ),
    end: today(
      getLocalTimeZone()
    ).add({ weeks: 1 })
  }}
  isReadOnly
/>
```

### Label alignment and position[#](#label-alignment-and-position)

[View guidelines](https://spectrum.adobe.com/page/text-field/#Label-position)

By default, the label is positioned above the `DateRangePicker`. The `labelPosition` prop can be used to position the label to the side. The `labelAlign` prop can be used to align the label as "start" or "end". For left-to-right (LTR) languages, "start" refers to the left most edge of the `DateRangePicker` and "end" refers to the right most edge. For right-to-left (RTL) languages, this is flipped.

```
<DateRangePicker label="Date range" labelPosition="side" labelAlign="end" />
```

```
<DateRangePicker
  label="Date range"
  labelPosition="side"
  labelAlign="end"
/>
```

```
<DateRangePicker
  label="Date range"
  labelPosition="side"
  labelAlign="end"
/>
```

[View guidelines](https://spectrum.adobe.com/page/help-text/#Usage-guidelines)

Both a description and an error message can be supplied to a `DateRangePicker`. The description is always visible unless the `validationState` is “invalid” and an error message is provided. The error message can be used to help the user fix their input quickly and should be specific to the detected error. All strings should be localized.

```
<Flex gap="size-100" wrap>
  <DateRangePicker
    label="Date range"
    defaultValue={{
      start: today(getLocalTimeZone()),
      end: today(getLocalTimeZone()).add({ weeks: 1 })
    }}
    validationState="valid"
    description="Select your trip dates."
  />
  <DateRangePicker
    label="Date range"
    validationState="invalid"
    errorMessage="Empty input is not allowed."
  />
</Flex>
```

```
<Flex gap="size-100" wrap>
  <DateRangePicker
    label="Date range"
    defaultValue={{
      start: today(getLocalTimeZone()),
      end: today(getLocalTimeZone()).add({ weeks: 1 })
    }}
    validationState="valid"
    description="Select your trip dates."
  />
  <DateRangePicker
    label="Date range"
    validationState="invalid"
    errorMessage="Empty input is not allowed."
  />
</Flex>
```

```
<Flex
  gap="size-100"
  wrap
>
  <DateRangePicker
    label="Date range"
    defaultValue={{
      start: today(
        getLocalTimeZone()
      ),
      end: today(
        getLocalTimeZone()
      ).add({
        weeks: 1
      })
    }}
    validationState="valid"
    description="Select your trip dates."
  />
  <DateRangePicker
    label="Date range"
    validationState="invalid"
    errorMessage="Empty input is not allowed."
  />
</Flex>
```

`DateRangePicker` also supports displaying the expected date format for the user's locale automatically using the `showFormatHelpText` prop.

```
<DateRangePicker label="Date range" showFormatHelpText />
```

```
<DateRangePicker label="Date range" showFormatHelpText />
```

```
<DateRangePicker
  label="Date range"
  showFormatHelpText
/>
```

A [ContextualHelp](https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html) element may be placed next to the label to provide additional information or help about a DateRangePicker.

```
import {Content, ContextualHelp, Heading} from '@adobe/react-spectrum';

<DateRangePicker
  label="Trip dates"
  contextualHelp={
    <ContextualHelp variant="info">
      <Heading>Date changes</Heading>
      <Content>Your trip dates cannot be changed once scheduled.</Content>
    </ContextualHelp>
  } />
```

```
import {
  Content,
  ContextualHelp,
  Heading
} from '@adobe/react-spectrum';

<DateRangePicker
  label="Trip dates"
  contextualHelp={
    <ContextualHelp variant="info">
      <Heading>Date changes</Heading>
      <Content>
        Your trip dates cannot be changed once scheduled.
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

<DateRangePicker
  label="Trip dates"
  contextualHelp={
    <ContextualHelp variant="info">
      <Heading>
        Date changes
      </Heading>
      <Content>
        Your trip dates
        cannot be
        changed once
        scheduled.
      </Content>
    </ContextualHelp>
  }
/>
```

When no value is set, a placeholder is shown. The format of the placeholder is influenced by the `granularity` and `placeholderValue` props. `placeholderValue` also controls the default values of each segment when the user first interacts with them, e.g. using the up and down arrow keys, as well as the default month shown in the calendar popover. By default, the `placeholderValue` is the current date at midnight, but you can set it to a more appropriate value if needed.

```
import {CalendarDate} from '@internationalized/date';

<DateRangePicker
  label="Date range"
  placeholderValue={new CalendarDate(1980, 1, 1)}
/>
```

```
import {CalendarDate} from '@internationalized/date';

<DateRangePicker
  label="Date range"
  placeholderValue={new CalendarDate(1980, 1, 1)}
/>
```

```
import {CalendarDate} from '@internationalized/date';

<DateRangePicker
  label="Date range"
  placeholderValue={new CalendarDate(
    1980,
    1,
    1
  )}
/>
```

By default, the calendar popover displays a single month. The `maxVisibleMonths` prop allows displaying up to 3 months at a time, if screen space permits.

```
<DateRangePicker label="Date range" maxVisibleMonths={3} />
```

```
<DateRangePicker label="Date range" maxVisibleMonths={3} />
```

```
<DateRangePicker
  label="Date range"
  maxVisibleMonths={3}
/>
```

By default, when pressing the next or previous buttons, pagination will advance by the `maxVisibleMonths` value. This behavior can be changed to page by single months instead, by setting `pageBehavior` to `single`.

```
<DateRangePicker
  label="Date range"
  maxVisibleMonths={3}
  pageBehavior="single"
/>
```

```
<DateRangePicker
  label="Date range"
  maxVisibleMonths={3}
  pageBehavior="single"
/>
```

```
<DateRangePicker
  label="Date range"
  maxVisibleMonths={3}
  pageBehavior="single"
/>
```

When `ZonedDateTime` objects are provided as the value of a `DateRangePicker`, the time zone abbreviation is displayed by default. However, if this is displayed elsewhere or implicit based on the usecase, it can be hidden using the `hideTimeZone` option.

```
<DateRangePicker
  label="Date range"
  defaultValue={{
    start: parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]'),
    end: parseZonedDateTime('2022-11-08T19:45[America/Los_Angeles]')
  }}
  hideTimeZone />
```

```
<DateRangePicker
  label="Date range"
  defaultValue={{
    start: parseZonedDateTime(
      '2022-11-07T10:45[America/Los_Angeles]'
    ),
    end: parseZonedDateTime(
      '2022-11-08T19:45[America/Los_Angeles]'
    )
  }}
  hideTimeZone
/>
```

```
<DateRangePicker
  label="Date range"
  defaultValue={{
    start:
      parseZonedDateTime(
        '2022-11-07T10:45[America/Los_Angeles]'
      ),
    end:
      parseZonedDateTime(
        '2022-11-08T19:45[America/Los_Angeles]'
      )
  }}
  hideTimeZone
/>
```

By default, `DateRangePicker` displays times in either 12 or 24 hour hour format depending on the user's locale. However, this can be overridden using the `hourCycle` prop if needed for a specific usecase. This example forces the `DateRangePicker` to use 24-hour time, regardless of the locale.

```
<DateRangePicker
  label="Date range"
  granularity="minute"
  hourCycle={24} />
```

```
<DateRangePicker
  label="Date range"
  granularity="minute"
  hourCycle={24} />
```

```
<DateRangePicker
  label="Date range"
  granularity="minute"
  hourCycle={24} />
```

By default, the first day of the week is automatically set based on the current locale. This can be changed by setting the `firstDayOfWeek` prop to `'sun'`, `'mon'`, `'tue'`, `'wed'`, `'thu'`, `'fri'`, or `'sat'`.

```
<DateRangePicker label="Date range" firstDayOfWeek="mon" />
```

```
<DateRangePicker label="Date range" firstDayOfWeek="mon" />
```

```
<DateRangePicker
  label="Date range"
  firstDayOfWeek="mon"
/>
```

* * *

The DateRangePicker features an overlay that transitions in and out of the page as it is opened and closed. Depending on your configuration, this overlay may render as a tray or a popover. Please see the following sections in the testing docs for more information on how to handle these behaviors in your test suite.

[Timers](https://react-spectrum.adobe.com/react-spectrum/testing.html#timers)

[Desktop vs Mobile](https://react-spectrum.adobe.com/react-spectrum/testing.html#desktop-vs-mobile)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/datepicker/docs/DateRangePicker.mdx) if you find that the above isn't sufficient when resolving issues in your own test cases.
