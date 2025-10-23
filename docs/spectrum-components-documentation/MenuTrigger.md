---
source: https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html
date: Thu, 16 Oct 2025 01:08:26 GMT
---

The MenuTrigger serves as a wrapper around a Menu and its associated trigger, linking the Menu's open state with the trigger's press state.

* * *

```
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item>Cut</Item>
    <Item>Copy</Item>
    <Item>Paste</Item>
  </Menu>
</MenuTrigger>
```

```
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item>Cut</Item>
    <Item>Copy</Item>
    <Item>Paste</Item>
  </Menu>
</MenuTrigger>
```

```
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item>Cut</Item>
    <Item>Copy</Item>
    <Item>Paste</Item>
  </Menu>
</MenuTrigger>
```

## Content[#](#content)

* * *

The MenuTrigger accepts exactly two children: the element which triggers the opening of the Menu and the Menu itself. The trigger element must be the first child passed into the MenuTrigger and should support press events.

* * *

MenuTrigger accepts an `onOpenChange` handler which is triggered whenever the Menu is opened or closed.

```
function Example() {
  let [isOpen, setIsOpen] = React.useState(false);

  return (
    <Flex gap="size-100" alignItems="center">
      <MenuTrigger onOpenChange={setIsOpen}>
        <ActionButton>
            Edit
        </ActionButton>
        <Menu>
          <Item key="cut">Cut</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
        </Menu>
      </MenuTrigger>
      <div>Currently open: {isOpen.toString()}</div>
    </Flex>
  );
}
```

```
function Example() {
  let [isOpen, setIsOpen] = React.useState(false);

  return (
    <Flex gap="size-100" alignItems="center">
      <MenuTrigger onOpenChange={setIsOpen}>
        <ActionButton>
            Edit
        </ActionButton>
        <Menu>
          <Item key="cut">Cut</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
        </Menu>
      </MenuTrigger>
      <div>Currently open: {isOpen.toString()}</div>
    </Flex>
  );
}
```

```
function Example() {
  let [
    isOpen,
    setIsOpen
  ] = React.useState(
    false
  );

  return (
    <Flex
      gap="size-100"
      alignItems="center"
    >
      <MenuTrigger
        onOpenChange={setIsOpen}
      >
        <ActionButton>
          Edit
        </ActionButton>
        <Menu>
          <Item key="cut">
            Cut
          </Item>
          <Item key="copy">
            Copy
          </Item>
          <Item key="paste">
            Paste
          </Item>
        </Menu>
      </MenuTrigger>
      <div>
        Currently open:
        {' '}
        {isOpen
          .toString()}
      </div>
    </Flex>
  );
}
```

* * *

By default, a MenuTrigger's Menu is opened by pressing the trigger element or activating it via the Space or Enter keys. However, there may be cases in which your trigger element should perform a separate default action on press such as selection, and should only display the Menu when long pressed. This behavior can be changed by providing `"longPress"` to the `trigger` prop. With this prop, the Menu will only be opened upon pressing and holding the trigger element or by using the Option (Alt on Windows) + Down Arrow/Up Arrow keys while focusing the trigger element.

The example below illustrates how one would setup a MenuTrigger to have long press behavior.

```
import {Text} from '@adobe/react-spectrum';
import CloneStamp from '@spectrum-icons/workflow/CloneStamp';
import Crop from '@spectrum-icons/workflow/Crop';
import CropRotate from '@spectrum-icons/workflow/CropRotate';
import Slice from '@spectrum-icons/workflow/Slice';

<MenuTrigger trigger="longPress">
  <ActionButton
    aria-label="Crop tool"
    onPress={() => alert('Cropping!')}
  >
    <Crop />
  </ActionButton>
  <Menu>
    <Item textValue="Crop Rotate">
      <CropRotate />
      <Text>Crop Rotate</Text>
    </Item>
    <Item textValue="Slice">
      <Slice />
      <Text>Slice</Text>
    </Item>
    <Item textValue="Clone stamp">
      <CloneStamp />
      <Text>Clone Stamp</Text>
    </Item>
  </Menu>
</MenuTrigger>
```

```
import {Text} from '@adobe/react-spectrum';
import CloneStamp from '@spectrum-icons/workflow/CloneStamp';
import Crop from '@spectrum-icons/workflow/Crop';
import CropRotate from '@spectrum-icons/workflow/CropRotate';
import Slice from '@spectrum-icons/workflow/Slice';

<MenuTrigger trigger="longPress">
  <ActionButton
    aria-label="Crop tool"
    onPress={() => alert('Cropping!')}
  >
    <Crop />
  </ActionButton>
  <Menu>
    <Item textValue="Crop Rotate">
      <CropRotate />
      <Text>Crop Rotate</Text>
    </Item>
    <Item textValue="Slice">
      <Slice />
      <Text>Slice</Text>
    </Item>
    <Item textValue="Clone stamp">
      <CloneStamp />
      <Text>Clone Stamp</Text>
    </Item>
  </Menu>
</MenuTrigger>
```

```
import {Text} from '@adobe/react-spectrum';
import CloneStamp from '@spectrum-icons/workflow/CloneStamp';
import Crop from '@spectrum-icons/workflow/Crop';
import CropRotate from '@spectrum-icons/workflow/CropRotate';
import Slice from '@spectrum-icons/workflow/Slice';

<MenuTrigger trigger="longPress">
  <ActionButton
    aria-label="Crop tool"
    onPress={() =>
      alert(
        'Cropping!'
      )}
  >
    <Crop />
  </ActionButton>
  <Menu>
    <Item textValue="Crop Rotate">
      <CropRotate />
      <Text>
        Crop Rotate
      </Text>
    </Item>
    <Item textValue="Slice">
      <Slice />
      <Text>
        Slice
      </Text>
    </Item>
    <Item textValue="Clone stamp">
      <CloneStamp />
      <Text>
        Clone Stamp
      </Text>
    </Item>
  </Menu>
</MenuTrigger>
```

* * *

Name

Type

Default

Description

`children`

`[ReactElement](https://reactjs.org/docs/rendering-elements.html)[]`

—

The contents of the MenuTrigger - a trigger and a Menu.

`align`

`[Alignment](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/labelable.d.ts:Alignment)`

`'start'`

Alignment of the menu relative to the trigger.

`direction`

`'bottom' | 'top' | 'left' | 'right' | 'start' | 'end'`

`'bottom'`

Where the Menu opens relative to its trigger.

`shouldFlip`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the menu should automatically flip direction when space is limited.

`closeOnSelect`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the Menu closes when a selection is made.

`trigger`

`[MenuTriggerType](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/menu/src/index.d.ts:MenuTriggerType)`

`'press'`

How the menu is triggered.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

Events

Name

Type

Description

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the overlay's open state changes.

* * *

### Align and direction[#](#align-and-direction)

[View guidelines](https://spectrum.adobe.com/page/popover/#Placement)

The `align` prop aligns the Menu relative to the trigger and the `direction` prop controls the direction the Menu will render.

```
<Flex gap="size-100">
  <MenuTrigger align="start">
    <ActionButton>Edit</ActionButton>
    <Menu>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger align="end" direction="top" shouldFlip={false}>
    <ActionButton>View</ActionButton>
    <Menu>
      <Item key="side">Side bar</Item>
      <Item key="options">Page options</Item>
      <Item key="edit">Edit Panel</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger direction="start" align="start">
    <ActionButton>Edit</ActionButton>
    <Menu>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger direction="end" align="end">
    <ActionButton>View</ActionButton>
    <Menu>
      <Item key="side">Side bar</Item>
      <Item key="options">Page options</Item>
      <Item key="edit">Edit Panel</Item>
    </Menu>
  </MenuTrigger>
</Flex>
```

```
<Flex gap="size-100">
  <MenuTrigger align="start">
    <ActionButton>Edit</ActionButton>
    <Menu>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger
    align="end"
    direction="top"
    shouldFlip={false}
  >
    <ActionButton>View</ActionButton>
    <Menu>
      <Item key="side">Side bar</Item>
      <Item key="options">Page options</Item>
      <Item key="edit">Edit Panel</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger direction="start" align="start">
    <ActionButton>Edit</ActionButton>
    <Menu>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger direction="end" align="end">
    <ActionButton>View</ActionButton>
    <Menu>
      <Item key="side">Side bar</Item>
      <Item key="options">Page options</Item>
      <Item key="edit">Edit Panel</Item>
    </Menu>
  </MenuTrigger>
</Flex>
```

```
<Flex gap="size-100">
  <MenuTrigger align="start">
    <ActionButton>
      Edit
    </ActionButton>
    <Menu>
      <Item key="cut">
        Cut
      </Item>
      <Item key="copy">
        Copy
      </Item>
      <Item key="paste">
        Paste
      </Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger
    align="end"
    direction="top"
    shouldFlip={false}
  >
    <ActionButton>
      View
    </ActionButton>
    <Menu>
      <Item key="side">
        Side bar
      </Item>
      <Item key="options">
        Page options
      </Item>
      <Item key="edit">
        Edit Panel
      </Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger
    direction="start"
    align="start"
  >
    <ActionButton>
      Edit
    </ActionButton>
    <Menu>
      <Item key="cut">
        Cut
      </Item>
      <Item key="copy">
        Copy
      </Item>
      <Item key="paste">
        Paste
      </Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger
    direction="end"
    align="end"
  >
    <ActionButton>
      View
    </ActionButton>
    <Menu>
      <Item key="side">
        Side bar
      </Item>
      <Item key="options">
        Page options
      </Item>
      <Item key="edit">
        Edit Panel
      </Item>
    </Menu>
  </MenuTrigger>
</Flex>
```

By default, the Menu closes when an item is selected. To change this, set the `closeOnSelect` prop to `false`. This might be useful when multiple selection is used. See [menu selection](https://react-spectrum.adobe.com/react-spectrum/Menu.html#Selection) for more information.

```
<MenuTrigger closeOnSelect={false}>
  <ActionButton>
    View
  </ActionButton>
  <Menu selectionMode="multiple">
    <Item key="side">Side bar</Item>
    <Item key="options">Page options</Item>
    <Item key="edit">Edit Panel</Item>
  </Menu>
</MenuTrigger>
```

```
<MenuTrigger closeOnSelect={false}>
  <ActionButton>
    View
  </ActionButton>
  <Menu selectionMode="multiple">
    <Item key="side">Side bar</Item>
    <Item key="options">Page options</Item>
    <Item key="edit">Edit Panel</Item>
  </Menu>
</MenuTrigger>
```

```
<MenuTrigger
  closeOnSelect={false}
>
  <ActionButton>
    View
  </ActionButton>
  <Menu selectionMode="multiple">
    <Item key="side">
      Side bar
    </Item>
    <Item key="options">
      Page options
    </Item>
    <Item key="edit">
      Edit Panel
    </Item>
  </Menu>
</MenuTrigger>
```

By default, the Menu flips direction automatically upon opening when space is limited. To change this, set the `shouldFlip` prop to `false`. Try scrolling the viewport close to the edge of the trigger in the example to see this in action.

```
<Flex gap="size-100">
  <MenuTrigger shouldFlip>
    <ActionButton>
      View
    </ActionButton>
    <Menu>
      <Item key="side">Side bar</Item>
      <Item key="options">Page options</Item>
      <Item key="edit">Edit Panel</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger shouldFlip={false}>
    <ActionButton>
      Edit
    </ActionButton>
    <Menu>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </Menu>
  </MenuTrigger>
</Flex>
```

```
<Flex gap="size-100">
  <MenuTrigger shouldFlip>
    <ActionButton>
      View
    </ActionButton>
    <Menu>
      <Item key="side">Side bar</Item>
      <Item key="options">Page options</Item>
      <Item key="edit">Edit Panel</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger shouldFlip={false}>
    <ActionButton>
      Edit
    </ActionButton>
    <Menu>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </Menu>
  </MenuTrigger>
</Flex>
```

```
<Flex gap="size-100">
  <MenuTrigger
    shouldFlip
  >
    <ActionButton>
      View
    </ActionButton>
    <Menu>
      <Item key="side">
        Side bar
      </Item>
      <Item key="options">
        Page options
      </Item>
      <Item key="edit">
        Edit Panel
      </Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger
    shouldFlip={false}
  >
    <ActionButton>
      Edit
    </ActionButton>
    <Menu>
      <Item key="cut">
        Cut
      </Item>
      <Item key="copy">
        Copy
      </Item>
      <Item key="paste">
        Paste
      </Item>
    </Menu>
  </MenuTrigger>
</Flex>
```

The `isOpen` and `defaultOpen` props on the MenuTrigger control whether the Menu is open by default. They apply controlled and uncontrolled behavior on the Menu respectively.

```
function Example() {
  let [open, setOpen] = React.useState(false);

  return (
    <MenuTrigger
      isOpen={open}
      onOpenChange={setOpen}>
      <ActionButton>
        View
      </ActionButton>
      <Menu selectionMode="multiple">
        <Item key="side">Side bar</Item>
        <Item key="options">Page options</Item>
        <Item key="edit">Edit Panel</Item>
      </Menu>
    </MenuTrigger>
  );
}
```

```
function Example() {
  let [open, setOpen] = React.useState(false);

  return (
    <MenuTrigger
      isOpen={open}
      onOpenChange={setOpen}>
      <ActionButton>
        View
      </ActionButton>
      <Menu selectionMode="multiple">
        <Item key="side">Side bar</Item>
        <Item key="options">Page options</Item>
        <Item key="edit">Edit Panel</Item>
      </Menu>
    </MenuTrigger>
  );
}
```

```
function Example() {
  let [open, setOpen] =
    React.useState(
      false
    );

  return (
    <MenuTrigger
      isOpen={open}
      onOpenChange={setOpen}
    >
      <ActionButton>
        View
      </ActionButton>
      <Menu selectionMode="multiple">
        <Item key="side">
          Side bar
        </Item>
        <Item key="options">
          Page options
        </Item>
        <Item key="edit">
          Edit Panel
        </Item>
      </Menu>
    </MenuTrigger>
  );
}
```

* * *

The Menu features an overlay that transitions in and out of the page as it is opened and closed. Depending on your configuration, this overlay may render as a tray or a dropdown and may feature long press interactions on the trigger itself. Please see the following sections in the testing docs for more information on how to handle these behaviors in your test suite.

[Timers](https://react-spectrum.adobe.com/react-spectrum/testing.html#timers)

[Desktop vs Mobile](https://react-spectrum.adobe.com/react-spectrum/testing.html#desktop-vs-mobile)

[Long press](https://react-spectrum.adobe.com/react-spectrum/testing.html#simulating-user-long-press)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/menu/test/MenuTrigger.test.js) if you find that the above isn't sufficient when resolving issues in your own test cases.

`@react-spectrum/test-utils` offers common menu interaction utilities which you may find helpful when writing tests. See [here](https://react-spectrum.adobe.com/react-aria/testing.html#react-aria-test-utils) for more information on how to setup these utilities in your tests. Below is the full definition of the menu tester and a sample of how you could use it in your test suite.

```
// Menu.test.ts
import {render} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html#testing

it('Menu can open its submenu via keyboard', async function () {
  // Render your test component/app and initialize the menu tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <MenuTrigger>
        <Button data-testid="test-menutrigger">Menu trigger</Button>
        ...
      </MenuTrigger>
    </Provider>
  );
  let menuTester = testUtilUser.createTester('Menu', {
    root: getByTestId('test-menutrigger'),
    interactionType: 'keyboard'
  });

  await menuTester.open();
  expect(menuTester.menu).toBeInTheDocument();
  let submenuTriggers = menuTester.submenuTriggers;
  expect(submenuTriggers).toHaveLength(1);

  let submenuTester = await menuTester.openSubmenu({
    submenuTrigger: 'Share…'
  });
  expect(submenuTester.menu).toBeInTheDocument();

  await submenuTester.selectOption({ option: submenuTester.options()[0] });
  expect(submenuTester.menu).not.toBeInTheDocument();
  expect(menuTester.menu).not.toBeInTheDocument();
});
```

```
// Menu.test.ts
import {render} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html#testing

it('Menu can open its submenu via keyboard', async function () {
  // Render your test component/app and initialize the menu tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <MenuTrigger>
        <Button data-testid="test-menutrigger">
          Menu trigger
        </Button>
        ...
      </MenuTrigger>
    </Provider>
  );
  let menuTester = testUtilUser.createTester('Menu', {
    root: getByTestId('test-menutrigger'),
    interactionType: 'keyboard'
  });

  await menuTester.open();
  expect(menuTester.menu).toBeInTheDocument();
  let submenuTriggers = menuTester.submenuTriggers;
  expect(submenuTriggers).toHaveLength(1);

  let submenuTester = await menuTester.openSubmenu({
    submenuTrigger: 'Share…'
  });
  expect(submenuTester.menu).toBeInTheDocument();

  await submenuTester.selectOption({
    option: submenuTester.options()[0]
  });
  expect(submenuTester.menu).not.toBeInTheDocument();
  expect(menuTester.menu).not.toBeInTheDocument();
});
```

```
// Menu.test.ts
import {render} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser =
  new User({
    interactionType:
      'mouse'
  });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html#testing

it('Menu can open its submenu via keyboard', async function () {
  // Render your test component/app and initialize the menu tester
  let { getByTestId } =
    render(
      <Provider
        theme={defaultTheme}
      >
        <MenuTrigger>
          <Button data-testid="test-menutrigger">
            Menu trigger
          </Button>
          ...
        </MenuTrigger>
      </Provider>
    );
  let menuTester =
    testUtilUser
      .createTester(
        'Menu',
        {
          root:
            getByTestId(
              'test-menutrigger'
            ),
          interactionType:
            'keyboard'
        }
      );

  await menuTester
    .open();
  expect(menuTester.menu)
    .toBeInTheDocument();
  let submenuTriggers =
    menuTester
      .submenuTriggers;
  expect(submenuTriggers)
    .toHaveLength(1);

  let submenuTester =
    await menuTester
      .openSubmenu({
        submenuTrigger:
          'Share…'
      });
  expect(
    submenuTester.menu
  ).toBeInTheDocument();

  await submenuTester
    .selectOption({
      option:
        submenuTester
          .options()[0]
    });
  expect(
    submenuTester.menu
  ).not
    .toBeInTheDocument();
  expect(menuTester.menu)
    .not
    .toBeInTheDocument();
});
```

### Properties

Name

Type

Description

`trigger`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the menu's trigger.

`menu`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Returns the menu if present.

`sections`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the menu's sections if any.

`submenuTriggers`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the menu's submenu triggers if any.

### Methods

Method

Description

`constructor( (opts: [MenuTesterOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:MenuTesterOpts) )): void`

`setInteractionType( (type: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType'] )): void`

Set the interaction type used by the menu tester.

`open( (opts: [MenuOpenOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/menu.ts:MenuOpenOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Opens the menu. Defaults to using the interaction type set on the menu tester.

`findOption( (opts: {  optionIndexOrText: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns a option matching the specified index or text content.

`selectOption( (opts: [MenuSelectOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/menu.ts:MenuSelectOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Selects the desired menu option. Defaults to using the interaction type set on the menu tester. If necessary, will open the menu dropdown beforehand. The desired option can be targeted via the option's node, the option's text, or the option's index.

`openSubmenu( (opts: [MenuOpenSubmenuOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/menu.ts:MenuOpenSubmenuOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[MenuTester](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/menu.ts:MenuTester) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

Opens the submenu. Defaults to using the interaction type set on the menu tester. The submenu trigger can be targeted via the trigger's node or the trigger's text.

`close(): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Closes the menu.

`options( (opts: {  element?: [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the menu's options if present. Can be filtered to a subsection of the menu if provided via `element`.
