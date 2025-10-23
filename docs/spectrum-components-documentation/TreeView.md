---
source: https://react-spectrum.adobe.com/react-spectrum/TreeView.html
date: Thu, 16 Oct 2025 01:09:39 GMT
---

A tree view provides users with a way to navigate nested hierarchical information.

* * *

```
<TreeView
  aria-label="Example tree with static contents"
  defaultExpandedKeys={['documents', 'photos']}
  height="size-4600"
  maxWidth="size-6000"
>
  <TreeViewItem id="documents" textValue="Documents">
    <TreeViewItemContent>
      <Text>Documents</Text>
      <Folder />
    </TreeViewItemContent>
    <TreeViewItem id="project-a" textValue="Project A">
      <TreeViewItemContent>
        <Text>Project A</Text>
        <Folder />
      </TreeViewItemContent>
      <TreeViewItem id="weekly-report" textValue="Weekly-Report">
        <TreeViewItemContent>
          <Text>Weekly Report</Text>
          <FileTxt />
        </TreeViewItemContent>
      </TreeViewItem>
    </TreeViewItem>
    <TreeViewItem id="document-1" textValue="Document 1">
      <TreeViewItemContent>
        <Text>Document 1</Text>
        <FileTxt />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem id="document-2" textValue="Document 2">
      <TreeViewItemContent>
        <Text>Document 2</Text>
        <FileTxt />
      </TreeViewItemContent>
    </TreeViewItem>
  </TreeViewItem>
  <TreeViewItem id="photos" textValue="Photos">
    <TreeViewItemContent>
      <Text>Photos</Text>
      <Folder />
    </TreeViewItemContent>
    <TreeViewItem id="image-1" textValue="Image 1">
      <TreeViewItemContent>
        <Text>Image 1</Text>
        <Image />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem id="image-2" textValue="Image 2">
      <TreeViewItemContent>
        <Text>Image 2</Text>
        <Image />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem id="image-3" textValue="Image 3">
      <TreeViewItemContent>
        <Text>Image 3</Text>
        <Image />
      </TreeViewItemContent>
    </TreeViewItem>
  </TreeViewItem>
</TreeView>
```

```
<TreeView
  aria-label="Example tree with static contents"
  defaultExpandedKeys={['documents', 'photos']}
  height="size-4600"
  maxWidth="size-6000"
>
  <TreeViewItem id="documents" textValue="Documents">
    <TreeViewItemContent>
      <Text>Documents</Text>
      <Folder />
    </TreeViewItemContent>
    <TreeViewItem id="project-a" textValue="Project A">
      <TreeViewItemContent>
        <Text>Project A</Text>
        <Folder />
      </TreeViewItemContent>
      <TreeViewItem
        id="weekly-report"
        textValue="Weekly-Report"
      >
        <TreeViewItemContent>
          <Text>Weekly Report</Text>
          <FileTxt />
        </TreeViewItemContent>
      </TreeViewItem>
    </TreeViewItem>
    <TreeViewItem id="document-1" textValue="Document 1">
      <TreeViewItemContent>
        <Text>Document 1</Text>
        <FileTxt />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem id="document-2" textValue="Document 2">
      <TreeViewItemContent>
        <Text>Document 2</Text>
        <FileTxt />
      </TreeViewItemContent>
    </TreeViewItem>
  </TreeViewItem>
  <TreeViewItem id="photos" textValue="Photos">
    <TreeViewItemContent>
      <Text>Photos</Text>
      <Folder />
    </TreeViewItemContent>
    <TreeViewItem id="image-1" textValue="Image 1">
      <TreeViewItemContent>
        <Text>Image 1</Text>
        <Image />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem id="image-2" textValue="Image 2">
      <TreeViewItemContent>
        <Text>Image 2</Text>
        <Image />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem id="image-3" textValue="Image 3">
      <TreeViewItemContent>
        <Text>Image 3</Text>
        <Image />
      </TreeViewItemContent>
    </TreeViewItem>
  </TreeViewItem>
</TreeView>
```

```
<TreeView
  aria-label="Example tree with static contents"
  defaultExpandedKeys={[
    'documents',
    'photos'
  ]}
  height="size-4600"
  maxWidth="size-6000"
>
  <TreeViewItem
    id="documents"
    textValue="Documents"
  >
    <TreeViewItemContent>
      <Text>
        Documents
      </Text>
      <Folder />
    </TreeViewItemContent>
    <TreeViewItem
      id="project-a"
      textValue="Project A"
    >
      <TreeViewItemContent>
        <Text>
          Project A
        </Text>
        <Folder />
      </TreeViewItemContent>
      <TreeViewItem
        id="weekly-report"
        textValue="Weekly-Report"
      >
        <TreeViewItemContent>
          <Text>
            Weekly
            Report
          </Text>
          <FileTxt />
        </TreeViewItemContent>
      </TreeViewItem>
    </TreeViewItem>
    <TreeViewItem
      id="document-1"
      textValue="Document 1"
    >
      <TreeViewItemContent>
        <Text>
          Document 1
        </Text>
        <FileTxt />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem
      id="document-2"
      textValue="Document 2"
    >
      <TreeViewItemContent>
        <Text>
          Document 2
        </Text>
        <FileTxt />
      </TreeViewItemContent>
    </TreeViewItem>
  </TreeViewItem>
  <TreeViewItem
    id="photos"
    textValue="Photos"
  >
    <TreeViewItemContent>
      <Text>
        Photos
      </Text>
      <Folder />
    </TreeViewItemContent>
    <TreeViewItem
      id="image-1"
      textValue="Image 1"
    >
      <TreeViewItemContent>
        <Text>
          Image 1
        </Text>
        <Image />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem
      id="image-2"
      textValue="Image 2"
    >
      <TreeViewItemContent>
        <Text>
          Image 2
        </Text>
        <Image />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem
      id="image-3"
      textValue="Image 3"
    >
      <TreeViewItemContent>
        <Text>
          Image 3
        </Text>
        <Image />
      </TreeViewItemContent>
    </TreeViewItem>
  </TreeViewItem>
</TreeView>
```

## Content[#](#content)

* * *

TreeView is a [collection component](https://react-spectrum.adobe.com/react-aria/collections.html) that provides users with a way to navigate nested hierarchical information.

Basic usage of TreeView, seen in the example above, shows the use of a static collection where the contents of the TreeView are hard coded. Dynamic collections, as shown below, can be used when the options come from an external data source, such as an API, or update over time. Providing the data in this way allows TreeView to automatically cache the rendering of each item, which dramatically improves performance.

Items can be statically defined as children, or generated dynamically using a function based on the data passed to the `items` prop.

Each item has a unique key defined by the data. The `key` of each item element is implicitly defined by the id property of the item object. See [collections](https://react-spectrum.adobe.com/react-aria/collections.html#unique-ids) to learn more about keys in dynamic collections.

**Note: Asynchronous tree loading (i.e, loading by level or infinite scrolling) is not yet supported in TreeView.**

```
type MyItem = {
  id: string;
  name: string;
  icon: JSX.Element;
  childItems?: MyItem[];
};

let items: MyItem[] = [
  {
    id: 'projects',
    name: 'Projects',
    icon: <Folder />,
    childItems: [
      { id: 'project-1', name: 'Project 1', icon: <FileTxt /> },
      {
        id: 'project-2',
        name: 'Project 2',
        icon: <Folder />,
        childItems: [
          { id: 'document-a', name: 'Document A', icon: <FileTxt /> },
          { id: 'document-b', name: 'Document B', icon: <FileTxt /> }
        ]
      }
    ]
  },
  {
    id: 'reports',
    name: 'Reports',
    icon: <Folder />,
    childItems: [
      { id: 'report-1', name: 'Reports 1', icon: <FileTxt /> }
    ]
  }
];

const DynamicTreeItem = (props) => {
  return (
    <>
      <TreeViewItem id={props.id} textValue={props.name}>
        <TreeViewItemContent>
          <Text>{props.name}</Text>
          {props.icon}
        </TreeViewItemContent>
        <Collection items={props.childItems}>
          {(item: any) => (
            <DynamicTreeItem
              id={item.id}
              icon={item.icon}
              childItems={item.childItems}
              textValue={item.name}
              name={item.name}
            >
              {item.name}
            </DynamicTreeItem>
          )}
        </Collection>
      </TreeViewItem>
    </>
  );
};

function ExampleTree(props) {
  return (
    <TreeView
      aria-label="Example tree with dynamic content"
      height="size-3000"
      maxWidth="size-6000"
      items={items}
      {...props}
    >
      {(item: MyItem) => (
        <DynamicTreeItem
          id={item.id}
          icon={item.icon}
          childItems={item.childItems}
          textValue={item.name}
          name={item.name}
        />
      )}
    </TreeView>
  );
}
```

```
type MyItem = {
  id: string;
  name: string;
  icon: JSX.Element;
  childItems?: MyItem[];
};

let items: MyItem[] = [
  {
    id: 'projects',
    name: 'Projects',
    icon: <Folder />,
    childItems: [
      {
        id: 'project-1',
        name: 'Project 1',
        icon: <FileTxt />
      },
      {
        id: 'project-2',
        name: 'Project 2',
        icon: <Folder />,
        childItems: [
          {
            id: 'document-a',
            name: 'Document A',
            icon: <FileTxt />
          },
          {
            id: 'document-b',
            name: 'Document B',
            icon: <FileTxt />
          }
        ]
      }
    ]
  },
  {
    id: 'reports',
    name: 'Reports',
    icon: <Folder />,
    childItems: [
      {
        id: 'report-1',
        name: 'Reports 1',
        icon: <FileTxt />
      }
    ]
  }
];

const DynamicTreeItem = (props) => {
  return (
    <>
      <TreeViewItem id={props.id} textValue={props.name}>
        <TreeViewItemContent>
          <Text>{props.name}</Text>
          {props.icon}
        </TreeViewItemContent>
        <Collection items={props.childItems}>
          {(item: any) => (
            <DynamicTreeItem
              id={item.id}
              icon={item.icon}
              childItems={item.childItems}
              textValue={item.name}
              name={item.name}
            >
              {item.name}
            </DynamicTreeItem>
          )}
        </Collection>
      </TreeViewItem>
    </>
  );
};

function ExampleTree(props) {
  return (
    <TreeView
      aria-label="Example tree with dynamic content"
      height="size-3000"
      maxWidth="size-6000"
      items={items}
      {...props}
    >
      {(item: MyItem) => (
        <DynamicTreeItem
          id={item.id}
          icon={item.icon}
          childItems={item.childItems}
          textValue={item.name}
          name={item.name}
        />
      )}
    </TreeView>
  );
}
```

```
type MyItem = {
  id: string;
  name: string;
  icon: JSX.Element;
  childItems?: MyItem[];
};

let items: MyItem[] = [
  {
    id: 'projects',
    name: 'Projects',
    icon: <Folder />,
    childItems: [
      {
        id: 'project-1',
        name:
          'Project 1',
        icon: (
          <FileTxt />
        )
      },
      {
        id: 'project-2',
        name:
          'Project 2',
        icon: <Folder />,
        childItems: [
          {
            id:
              'document-a',
            name:
              'Document A',
            icon: (
              <FileTxt />
            )
          },
          {
            id:
              'document-b',
            name:
              'Document B',
            icon: (
              <FileTxt />
            )
          }
        ]
      }
    ]
  },
  {
    id: 'reports',
    name: 'Reports',
    icon: <Folder />,
    childItems: [
      {
        id: 'report-1',
        name:
          'Reports 1',
        icon: (
          <FileTxt />
        )
      }
    ]
  }
];

const DynamicTreeItem = (
  props
) => {
  return (
    <>
      <TreeViewItem
        id={props.id}
        textValue={props
          .name}
      >
        <TreeViewItemContent>
          <Text>
            {props.name}
          </Text>
          {props.icon}
        </TreeViewItemContent>
        <Collection
          items={props
            .childItems}
        >
          {(
            item: any
          ) => (
            <DynamicTreeItem
              id={item
                .id}
              icon={item
                .icon}
              childItems={item
                .childItems}
              textValue={item
                .name}
              name={item
                .name}
            >
              {item.name}
            </DynamicTreeItem>
          )}
        </Collection>
      </TreeViewItem>
    </>
  );
};

function ExampleTree(
  props
) {
  return (
    <TreeView
      aria-label="Example tree with dynamic content"
      height="size-3000"
      maxWidth="size-6000"
      items={items}
      {...props}
    >
      {(
        item: MyItem
      ) => (
        <DynamicTreeItem
          id={item.id}
          icon={item
            .icon}
          childItems={item
            .childItems}
          textValue={item
            .name}
          name={item
            .name}
        />
      )}
    </TreeView>
  );
}
```

To internationalize a TreeView, all text content within the TreeView should be localized. This includes the `aria-label` provided to the TreeView if any. For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of TreeView is automatically flipped.

* * *

An `aria-label` must be provided to the TreeView for accessibility. If the TreeView is labeled by a separate element, an `aria-labelledby` prop must be provided using the id of the labeling element instead.

* * *

By default, TreeView items are initially collapsed. Use `defaultExpandedKeys` to provide a default set of expanded items. Note that the value of the expanded keys must match the `id` prop of the TreeViewItem.

The example below uses `defaultExpandedKeys` to select the items with keys "documents" and "photos".

```
<ExampleTree
  aria-label="Example tree with default expanded items"
  defaultExpandedKeys={['projects', 'reports']}/>
```

```
<ExampleTree
  aria-label="Example tree with default expanded items"
  defaultExpandedKeys={['projects', 'reports']}/>
```

```
<ExampleTree
  aria-label="Example tree with default expanded items"
  defaultExpandedKeys={[
    'projects',
    'reports'
  ]}/>
```

To programmatically control item expansion, use the `expandedKeys` prop paired with the `onExpandedChange` callback. The `key` prop from the expanded items will be passed into the callback when the item is pressed, allowing you to update state accordingly.

Here is how you would control expansion for the above example.

```
function ControlledExpansion() {
  let [expandedKeys, setExpandedKeys] = React.useState<Set<Key>>(
    new Set(['projects', 'reports'])
  );

  return (
    <ExampleTree
      aria-label="Example tree with controlled expanded items"
      expandedKeys={expandedKeys}
      onExpandedChange={setExpandedKeys}    />
  );
}
```

```
function ControlledExpansion() {
  let [expandedKeys, setExpandedKeys] = React.useState<
    Set<Key>
  >(new Set(['projects', 'reports']));

  return (
    <ExampleTree
      aria-label="Example tree with controlled expanded items"
      expandedKeys={expandedKeys}
      onExpandedChange={setExpandedKeys}    />
  );
}
```

```
function ControlledExpansion() {
  let [
    expandedKeys,
    setExpandedKeys
  ] = React.useState<
    Set<Key>
  >(
    new Set([
      'projects',
      'reports'
    ])
  );

  return (
    <ExampleTree
      aria-label="Example tree with controlled expanded items"
      expandedKeys={expandedKeys}
      onExpandedChange={setExpandedKeys}    />
  );
}
```

* * *

By default, TreeView doesn't allow item selection but this can be enabled using the `selectionMode` prop. Use `defaultSelectedKeys` to provide a default set of selected items. Note that the value of the selected keys must match the `id` prop of the TreeViewItem.

The example below enables multiple selection mode, and uses `defaultSelectedKeys` to select the items with keys "document-a" and "document-b".

```
<ExampleTree
  aria-label="Example tree with selection"
  defaultExpandedKeys={['projects', 'project-2']}
  selectionMode="multiple"
  defaultSelectedKeys={['document-a', 'document-b']}/>
```

```
<ExampleTree
  aria-label="Example tree with selection"
  defaultExpandedKeys={['projects', 'project-2']}
  selectionMode="multiple"
  defaultSelectedKeys={['document-a', 'document-b']}/>
```

```
<ExampleTree
  aria-label="Example tree with selection"
  defaultExpandedKeys={[
    'projects',
    'project-2'
  ]}
  selectionMode="multiple"
  defaultSelectedKeys={[
    'document-a',
    'document-b'
  ]}/>
```

To programmatically control item selection, use the `selectedKeys` prop paired with the `onSelectionChange` callback. The `key` prop from the selected items will be passed into the callback when the item is pressed, allowing you to update state accordingly.

Here is how you would control selection for the above example.

```
import type {Selection} from '@adobe/react-spectrum';

function ControlledSelection() {
  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(['document-a', 'document-b'])
  );

  return (
    <ExampleTree
      aria-label="Example tree with controlled selection"
      defaultExpandedKeys={['projects', 'project-2']}
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}    />
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function ControlledSelection() {
  let [selectedKeys, setSelectedKeys] = React.useState<
    Selection
  >(new Set(['document-a', 'document-b']));

  return (
    <ExampleTree
      aria-label="Example tree with controlled selection"
      defaultExpandedKeys={['projects', 'project-2']}
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}    />
  );
}
```

```
import type {Selection} from '@adobe/react-spectrum';

function ControlledSelection() {
  let [
    selectedKeys,
    setSelectedKeys
  ] = React.useState<
    Selection
  >(
    new Set([
      'document-a',
      'document-b'
    ])
  );

  return (
    <ExampleTree
      aria-label="Example tree with controlled selection"
      defaultExpandedKeys={[
        'projects',
        'project-2'
      ]}
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}    />
  );
}
```

To limit users to selecting only a single item at a time, `selectionMode` can be set to `single`.

```
<ExampleTree
  aria-label="Example tree with single selection"
  defaultExpandedKeys={['projects', 'project-2']}
  selectionMode="single"/>
```

```
<ExampleTree
  aria-label="Example tree with single selection"
  defaultExpandedKeys={['projects', 'project-2']}
  selectionMode="single"/>
```

```
<ExampleTree
  aria-label="Example tree with single selection"
  defaultExpandedKeys={[
    'projects',
    'project-2'
  ]}
  selectionMode="single"/>
```

TreeView also supports a `disallowEmptySelection` prop which forces the user to have at least one item in the TreeView selected at all times. In this mode, if a single item is selected and the user presses it, it will not be deselected.

```
<ExampleTree
  aria-label="Example tree with disallowed empty selection"
  defaultExpandedKeys={['projects', 'project-2']}
  selectionMode="single"
  defaultSelectedKeys={['document-a']}
  disallowEmptySelection/>
```

```
<ExampleTree
  aria-label="Example tree with disallowed empty selection"
  defaultExpandedKeys={['projects', 'project-2']}
  selectionMode="single"
  defaultSelectedKeys={['document-a']}
  disallowEmptySelection/>
```

```
<ExampleTree
  aria-label="Example tree with disallowed empty selection"
  defaultExpandedKeys={[
    'projects',
    'project-2'
  ]}
  selectionMode="single"
  defaultSelectedKeys={[
    'document-a'
  ]}
  disallowEmptySelection/>
```

You can disable specific items by providing an array of keys to TreeView via the `disabledKeys` prop. This will prevent items from being selectable as shown in the example below.

```
<ExampleTree
  aria-label="Example tree with disabled items"
  defaultExpandedKeys={['projects', 'project-2']}
  selectionMode="single"
  disabledKeys={['document-a', 'document-b']}/>
```

```
<ExampleTree
  aria-label="Example tree with disabled items"
  defaultExpandedKeys={['projects', 'project-2']}
  selectionMode="single"
  disabledKeys={['document-a', 'document-b']}/>
```

```
<ExampleTree
  aria-label="Example tree with disabled items"
  defaultExpandedKeys={[
    'projects',
    'project-2'
  ]}
  selectionMode="single"
  disabledKeys={[
    'document-a',
    'document-b'
  ]}/>
```

By default, TreeView uses the checkbox selection style, which includes a checkbox in each item for selection. When the selectionStyle prop is set to `"highlight"`, the checkboxes are hidden, and the selected items are displayed with a highlighted background instead.

In addition to changing the appearance, the selection behavior also changes depending on the `selectionStyle` prop. In the default checkbox selection style, clicking, tapping, or pressing the Space or Enter keys toggles selection for the focused item. Using the arrow keys moves focus but does not change selection.

In the highlight selection style, however, clicking a item with the mouse _replaces_ the selection with only that item. Using the arrow keys moves both focus and selection. To select multiple items, modifier keys such as Ctrl, Cmd, and Shift can be used. On touch screen devices, selection always behaves as toggle since modifier keys may not be available.

These selection styles implement the behaviors defined in [Aria Practices](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/#keyboardinteraction).

```
<ExampleTree
  aria-label="Example tree with highlight selection"
  defaultExpandedKeys={['projects', 'project-2']}
  selectionMode="multiple"
  defaultSelectedKeys={['document-a', 'document-b']}
  selectionStyle="highlight"/>
```

```
<ExampleTree
  aria-label="Example tree with highlight selection"
  defaultExpandedKeys={['projects', 'project-2']}
  selectionMode="multiple"
  defaultSelectedKeys={['document-a', 'document-b']}
  selectionStyle="highlight"/>
```

```
<ExampleTree
  aria-label="Example tree with highlight selection"
  defaultExpandedKeys={[
    'projects',
    'project-2'
  ]}
  selectionMode="multiple"
  defaultSelectedKeys={[
    'document-a',
    'document-b'
  ]}
  selectionStyle="highlight"/>
```

* * *

TreeView supports item actions via the `onAction` prop, which is useful for functionality such as navigation. When nothing is selected, the TreeView performs actions by default when clicking or tapping a item. Items may be selected using the checkbox, or by long pressing on touch devices. When at least one item is selected, the TreeView is in selection mode, and clicking or tapping a item toggles the selection. Actions may also be triggered via the Enter key, and selection using the Space key.

This behavior is slightly different in the highlight selection style, where single clicking selects the item and actions are performed via double click. Touch and keyboard behaviors are unaffected.

```
<Flex direction="column" gap="size-300">
  <ExampleTree
    aria-label="Example tree with item actions and checkbox selection"
    defaultExpandedKeys={['projects', 'project-2']}
    selectionMode="multiple"
    onAction={key => alert(`Opening item ${key}...`)}  />
  <ExampleTree
    aria-label="Example tree with item actions and highlight selection"
    defaultExpandedKeys={['projects', 'project-2']}
    selectionMode="multiple"
    selectionStyle="highlight"
    onAction={key => alert(`Opening item ${key}...`)}  />
</Flex>
```

```
<Flex direction="column" gap="size-300">
  <ExampleTree
    aria-label="Example tree with item actions and checkbox selection"
    defaultExpandedKeys={['projects', 'project-2']}
    selectionMode="multiple"
    onAction={(key) => alert(`Opening item ${key}...`)}  />
  <ExampleTree
    aria-label="Example tree with item actions and highlight selection"
    defaultExpandedKeys={['projects', 'project-2']}
    selectionMode="multiple"
    selectionStyle="highlight"
    onAction={(key) => alert(`Opening item ${key}...`)}  />
</Flex>
```

```
<Flex
  direction="column"
  gap="size-300"
>
  <ExampleTree
    aria-label="Example tree with item actions and checkbox selection"
    defaultExpandedKeys={[
      'projects',
      'project-2'
    ]}
    selectionMode="multiple"
    onAction={(key) =>
      alert(
        `Opening item ${key}...`
      )}  />
  <ExampleTree
    aria-label="Example tree with item actions and highlight selection"
    defaultExpandedKeys={[
      'projects',
      'project-2'
    ]}
    selectionMode="multiple"
    selectionStyle="highlight"
    onAction={(key) =>
      alert(
        `Opening item ${key}...`
      )}  />
</Flex>
```

Tree items may also be links to another page or website. This can be achieved by passing the `href` prop to the `<TreeViewItem>` component. Links behave the same way as described above for item actions depending on the `selectionMode` and `selectionStyle`.

```
<TreeView
  aria-label="Example tree with links"
  defaultExpandedKeys={new Set(['bookmarks'])}
  height="size-2000"
  maxWidth="size-6000"
>
  <TreeViewItem id="bookmarks" textValue="Bookmarks">
    <TreeViewItemContent>
      <Text>Bookmarks</Text>
      <Folder />
    </TreeViewItemContent>
    <TreeViewItem
      href="https://adobe.com/"
      target="_blank"
      id="adobe"
      textValue="Adobe"
    >
      <TreeViewItemContent>
        <Text>Adobe</Text>
        <GlobeOutline />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem
      href="https://google.com/"
      target="_blank"
      id="google"
      textValue="Google"
    >
      <TreeViewItemContent>
        <Text>Google</Text>
        <GlobeOutline />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem
      href="https://nytimes.com/"
      target="_blank"
      id="nytimes"
      textValue="New York Times"
    >
      <TreeViewItemContent>
        <Text>New York Times</Text>
        <GlobeOutline />
      </TreeViewItemContent>
    </TreeViewItem>
  </TreeViewItem>
</TreeView>
```

```
<TreeView
  aria-label="Example tree with links"
  defaultExpandedKeys={new Set(['bookmarks'])}
  height="size-2000"
  maxWidth="size-6000"
>
  <TreeViewItem id="bookmarks" textValue="Bookmarks">
    <TreeViewItemContent>
      <Text>Bookmarks</Text>
      <Folder />
    </TreeViewItemContent>
    <TreeViewItem
      href="https://adobe.com/"
      target="_blank"
      id="adobe"
      textValue="Adobe"
    >
      <TreeViewItemContent>
        <Text>Adobe</Text>
        <GlobeOutline />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem
      href="https://google.com/"
      target="_blank"
      id="google"
      textValue="Google"
    >
      <TreeViewItemContent>
        <Text>Google</Text>
        <GlobeOutline />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem
      href="https://nytimes.com/"
      target="_blank"
      id="nytimes"
      textValue="New York Times"
    >
      <TreeViewItemContent>
        <Text>New York Times</Text>
        <GlobeOutline />
      </TreeViewItemContent>
    </TreeViewItem>
  </TreeViewItem>
</TreeView>
```

```
<TreeView
  aria-label="Example tree with links"
  defaultExpandedKeys={new Set(
    ['bookmarks']
  )}
  height="size-2000"
  maxWidth="size-6000"
>
  <TreeViewItem
    id="bookmarks"
    textValue="Bookmarks"
  >
    <TreeViewItemContent>
      <Text>
        Bookmarks
      </Text>
      <Folder />
    </TreeViewItemContent>
    <TreeViewItem
      href="https://adobe.com/"
      target="_blank"
      id="adobe"
      textValue="Adobe"
    >
      <TreeViewItemContent>
        <Text>
          Adobe
        </Text>
        <GlobeOutline />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem
      href="https://google.com/"
      target="_blank"
      id="google"
      textValue="Google"
    >
      <TreeViewItemContent>
        <Text>
          Google
        </Text>
        <GlobeOutline />
      </TreeViewItemContent>
    </TreeViewItem>
    <TreeViewItem
      href="https://nytimes.com/"
      target="_blank"
      id="nytimes"
      textValue="New York Times"
    >
      <TreeViewItemContent>
        <Text>
          New York
          Times
        </Text>
        <GlobeOutline />
      </TreeViewItemContent>
    </TreeViewItem>
  </TreeViewItem>
</TreeView>
```

The `<TreeViewItem>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Spectrum components that support links, this works via the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-spectrum/routing.html) to learn how to set this up.

```
<TreeView
  aria-label="Example tree with action groups"
  height="size-3000"
  maxWidth="size-6000"
  items={items}
>
  {function renderItem(item: MyItem) {
    return (
      <TreeViewItem textValue={item.name}>
        <TreeViewItemContent>
          <Text>{item.name}</Text>
          {item.icon}
          <ActionGroup
            onAction={(key) => alert(`Item: ${item.id}, Action: ${key}`)}
          >
            <Item key="edit" textValue="Edit">
              <Edit />
              <Text>Edit</Text>
            </Item>
            <Item key="delete" textValue="Delete">
              <Delete />
              <Text>Delete</Text>
            </Item>
          </ActionGroup>
        </TreeViewItemContent>
        <Collection items={item.childItems}>
          {renderItem}
        </Collection>
      </TreeViewItem>
    );
  }}
</TreeView>
```

```
<TreeView
  aria-label="Example tree with action groups"
  height="size-3000"
  maxWidth="size-6000"
  items={items}
>
  {function renderItem(item: MyItem) {
    return (
      <TreeViewItem textValue={item.name}>
        <TreeViewItemContent>
          <Text>{item.name}</Text>
          {item.icon}
          <ActionGroup
            onAction={(key) =>
              alert(`Item: ${item.id}, Action: ${key}`)}
          >
            <Item key="edit" textValue="Edit">
              <Edit />
              <Text>Edit</Text>
            </Item>
            <Item key="delete" textValue="Delete">
              <Delete />
              <Text>Delete</Text>
            </Item>
          </ActionGroup>
        </TreeViewItemContent>
        <Collection items={item.childItems}>
          {renderItem}
        </Collection>
      </TreeViewItem>
    );
  }}
</TreeView>
```

```
<TreeView
  aria-label="Example tree with action groups"
  height="size-3000"
  maxWidth="size-6000"
  items={items}
>
  {function renderItem(
    item: MyItem
  ) {
    return (
      <TreeViewItem
        textValue={item
          .name}
      >
        <TreeViewItemContent>
          <Text>
            {item.name}
          </Text>
          {item.icon}
          <ActionGroup
            onAction={(
              key
            ) =>
              alert(
                `Item: ${item.id}, Action: ${key}`
              )}
          >
            <Item
              key="edit"
              textValue="Edit"
            >
              <Edit />
              <Text>
                Edit
              </Text>
            </Item>
            <Item
              key="delete"
              textValue="Delete"
            >
              <Delete />
              <Text>
                Delete
              </Text>
            </Item>
          </ActionGroup>
        </TreeViewItemContent>
        <Collection
          items={item
            .childItems}
        >
          {renderItem}
        </Collection>
      </TreeViewItem>
    );
  }}
</TreeView>
```

```
import {Collection} from '@adobe/react-spectrum';

<TreeView
  aria-label="Example tree with action menus"
  height="size-3000"
  maxWidth="size-6000"
  items={items}
>
  {function renderItem(item: MyItem) {
    return (
      <TreeViewItem textValue={item.name}>
        <TreeViewItemContent>
          <Text>{item.name}</Text>
          {item.icon}
          <ActionMenu
            onAction={(key) => alert(`Item: ${item.id}, Action: ${key}`)}
          >
            <Item key="edit" textValue="Edit">
              <Edit />
              <Text>Edit</Text>
            </Item>
            <Item key="delete" textValue="Delete">
              <Delete />
              <Text>Delete</Text>
            </Item>
          </ActionMenu>
        </TreeViewItemContent>
        <Collection items={item.childItems}>
          {renderItem}
        </Collection>
      </TreeViewItem>
    );
  }}
</TreeView>
```

```
import {Collection} from '@adobe/react-spectrum';

<TreeView
  aria-label="Example tree with action menus"
  height="size-3000"
  maxWidth="size-6000"
  items={items}
>
  {function renderItem(item: MyItem) {
    return (
      <TreeViewItem textValue={item.name}>
        <TreeViewItemContent>
          <Text>{item.name}</Text>
          {item.icon}
          <ActionMenu
            onAction={(key) =>
              alert(`Item: ${item.id}, Action: ${key}`)}
          >
            <Item key="edit" textValue="Edit">
              <Edit />
              <Text>Edit</Text>
            </Item>
            <Item key="delete" textValue="Delete">
              <Delete />
              <Text>Delete</Text>
            </Item>
          </ActionMenu>
        </TreeViewItemContent>
        <Collection items={item.childItems}>
          {renderItem}
        </Collection>
      </TreeViewItem>
    );
  }}
</TreeView>
```

```
import {Collection} from '@adobe/react-spectrum';

<TreeView
  aria-label="Example tree with action menus"
  height="size-3000"
  maxWidth="size-6000"
  items={items}
>
  {function renderItem(
    item: MyItem
  ) {
    return (
      <TreeViewItem
        textValue={item
          .name}
      >
        <TreeViewItemContent>
          <Text>
            {item.name}
          </Text>
          {item.icon}
          <ActionMenu
            onAction={(
              key
            ) =>
              alert(
                `Item: ${item.id}, Action: ${key}`
              )}
          >
            <Item
              key="edit"
              textValue="Edit"
            >
              <Edit />
              <Text>
                Edit
              </Text>
            </Item>
            <Item
              key="delete"
              textValue="Delete"
            >
              <Delete />
              <Text>
                Delete
              </Text>
            </Item>
          </ActionMenu>
        </TreeViewItemContent>
        <Collection
          items={item
            .childItems}
        >
          {renderItem}
        </Collection>
      </TreeViewItem>
    );
  }}
</TreeView>
```

* * *

Name

Type

Default

Description

`renderEmptyState`

`() => JSX.Element`

—

Provides content to display when there are no items in the tree.

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | ( (item: [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) )) => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The contents of the tree.

`escapeKeyBehavior`

`'clearSelection' | 'none'`

`'clearSelection'`

Whether pressing the escape key should clear selection in the grid list or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to easily clear selection. Only use if the escape key is being handled externally or should not trigger selection clearing contextually.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [FocusStrategy](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:FocusStrategy)`

—

Whether to auto focus the gridlist or an option.

`disabledBehavior`

`[DisabledBehavior](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:DisabledBehavior)`

`"all"`

Whether `disabledKeys` applies to all interactions, or only selection.

`shouldSelectOnPressUp`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether selection should occur on press up instead of press down.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<T>`

—

Item objects in the collection.

`disabledKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.

`selectionMode`

`[SelectionMode](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:SelectionMode)`

—

The type of selection that is allowed in the collection.

`disallowEmptySelection`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the collection allows empty selection.

`selectedKeys`

`'all' | [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The currently selected keys in the collection (controlled).

`defaultSelectedKeys`

`'all' | [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The initial selected keys in the collection (uncontrolled).

`selectionStyle`

`'checkbox' | 'highlight'`

—

How selection should be displayed.

`expandedKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The currently expanded keys in the collection (controlled).

`defaultExpandedKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The initial expanded keys in the collection (uncontrolled).

Events

Name

Type

Description

`onAction`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) )) => void`

Handler that is called when a user performs an action on an item. The exact user event depends on the collection's `selectionStyle` prop and the interaction modality.

`onSelectionChange`

`( (keys: [Selection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:Selection) )) => void`

Handler that is called when the selection changes.

`onExpandedChange`

`( (keys: [Set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<[Key](https://reactjs.org/docs/lists-and-keys.html)> )) => any`

Handler that is called when items are expanded or collapsed.

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

### TreeViewItemContent props[#](#treeviewitemcontent-props)

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

Rendered contents of the tree item or child items.

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

Rendered contents of the tree item or child items.

`textValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A string representation of the tree item's contents, used for features like typeahead.

`id`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

The unique id of the tree row.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the item is disabled.

`href`

`[Href](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dom.d.ts:Href)`

A URL to link to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href).

`hrefLang`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Hints at the human language of the linked URL. See[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang).

`target`

`HTMLAttributeAnchorTarget`

The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).

`rel`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).

`download`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Causes the browser to download the linked URL. A string may be provided to suggest a file name. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).

`ping`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A space-separated list of URLs to ping when the link is followed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping).

`referrerPolicy`

`HTMLAttributeReferrerPolicy`

How much of the referrer to send when following the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy).

`routerOptions`

`[RouterOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dom.d.ts:RouterOptions)`

Options for the configured client side router.

`hasChildItems`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether this item has children, even if not loaded yet.

Events

Name

Type

Description

`onAction`

`() => void`

Handler that is called when a user performs an action on this tree item. The exact user event depends on the collection's `selectionBehavior` prop and the interaction modality.

`onPress`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when the press is released over the target.

`onPressStart`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press interaction starts.

`onPressEnd`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press interaction ends, either over the target or when the pointer leaves the target.

`onPressChange`

`( (isPressed: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the press state changes.

`onPressUp`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press is released over the target, regardless of whether it started on the target or not.

PositioningAccessibility

Name

Type

Description

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

An accessibility label for this tree item.

* * *

Use the `renderEmptyState` prop to customize what the TreeView will display if there are no items provided.

```
import {Content, Heading, IllustratedMessage} from '@adobe/react-spectrum';
import NotFound from '@spectrum-icons/illustrations/NotFound';

function renderEmptyState() {
  return (
    <IllustratedMessage>
      <NotFound />
      <Heading>No results</Heading>
      <Content>No results found</Content>
    </IllustratedMessage>
  );
}

<TreeView
  aria-label="Example tree for empty state"
  height="size-2400"
  maxWidth="size-6000"
  renderEmptyState={renderEmptyState}
>
  {[]}
</TreeView>
```

```
import {
  Content,
  Heading,
  IllustratedMessage
} from '@adobe/react-spectrum';
import NotFound from '@spectrum-icons/illustrations/NotFound';

function renderEmptyState() {
  return (
    <IllustratedMessage>
      <NotFound />
      <Heading>No results</Heading>
      <Content>No results found</Content>
    </IllustratedMessage>
  );
}

<TreeView
  aria-label="Example tree for empty state"
  height="size-2400"
  maxWidth="size-6000"
  renderEmptyState={renderEmptyState}
>
  {[]}
</TreeView>
```

```
import {
  Content,
  Heading,
  IllustratedMessage
} from '@adobe/react-spectrum';
import NotFound from '@spectrum-icons/illustrations/NotFound';

function renderEmptyState() {
  return (
    <IllustratedMessage>
      <NotFound />
      <Heading>
        No results
      </Heading>
      <Content>
        No results found
      </Content>
    </IllustratedMessage>
  );
}

<TreeView
  aria-label="Example tree for empty state"
  height="size-2400"
  maxWidth="size-6000"
  renderEmptyState={renderEmptyState}
>
  {[]}
</TreeView>
```

* * *

The TreeView features long press interactions on its items depending on the item actions provided and if user is interacting with the list on a touch device. Please see the following sections in the testing docs for more information on how to handle these behaviors in your test suite.

[Timers](https://react-spectrum.adobe.com/react-spectrum/testing.html#timers)

[Desktop vs Mobile](https://react-spectrum.adobe.com/react-spectrum/testing.html#desktop-vs-mobile)

[Long press](https://react-spectrum.adobe.com/react-spectrum/testing.html#simulating-user-long-press)

Please also refer to [React Spectrum's test suite](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/tree/test/TreeView.test.tsx) if you find that the above isn't sufficient when resolving issues in your own test cases.

`@react-spectrum/test-utils` offers common tree interaction utilities which you may find helpful when writing tests. See [here](https://react-spectrum.adobe.com/react-aria/testing.html#react-aria-test-utils) for more information on how to setup these utilities in your tests. Below is the full definition of the tree tester and a sample of how you could use it in your test suite.

```
// Tree.test.ts
import {render, within} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/TreeView.html#testing

it('TreeView can select a row via keyboard', async function () {
  // Render your test component/app and initialize the Tree tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <TreeView data-testid="test-tree" selectionMode="multiple">
        ...
      </TreeView>
    </Provider>
  );
  let treeTester = testUtilUser.createTester('Tree', {
    root: getByTestId('test-tree'),
    interactionType: 'keyboard'
  });

  await treeTester.toggleRowSelection({ row: 0 });
  expect(treeTester.selectedRows).toHaveLength(1);
  expect(within(treeTester.rows[0]).getByRole('checkbox')).toBeChecked();

  await treeTester.toggleRowSelection({ row: 1 });
  expect(treeTester.selectedRows).toHaveLength(2);
  expect(within(treeTester.rows[1]).getByRole('checkbox')).toBeChecked();

  await treeTester.toggleRowSelection({ row: 0 });
  expect(treeTester.selectedRows).toHaveLength(1);
  expect(within(treeTester.rows[0]).getByRole('checkbox')).not.toBeChecked();
});
```

```
// Tree.test.ts
import {render, within} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/TreeView.html#testing

it('TreeView can select a row via keyboard', async function () {
  // Render your test component/app and initialize the Tree tester
  let { getByTestId } = render(
    <Provider theme={defaultTheme}>
      <TreeView
        data-testid="test-tree"
        selectionMode="multiple"
      >
        ...
      </TreeView>
    </Provider>
  );
  let treeTester = testUtilUser.createTester('Tree', {
    root: getByTestId('test-tree'),
    interactionType: 'keyboard'
  });

  await treeTester.toggleRowSelection({ row: 0 });
  expect(treeTester.selectedRows).toHaveLength(1);
  expect(within(treeTester.rows[0]).getByRole('checkbox'))
    .toBeChecked();

  await treeTester.toggleRowSelection({ row: 1 });
  expect(treeTester.selectedRows).toHaveLength(2);
  expect(within(treeTester.rows[1]).getByRole('checkbox'))
    .toBeChecked();

  await treeTester.toggleRowSelection({ row: 0 });
  expect(treeTester.selectedRows).toHaveLength(1);
  expect(within(treeTester.rows[0]).getByRole('checkbox'))
    .not.toBeChecked();
});
```

```
// Tree.test.ts
import {
  render,
  within
} from '@testing-library/react';
import {theme} from '@react-spectrum/theme-default';
import {User} from '@react-spectrum/test-utils';

let testUtilUser =
  new User({
    interactionType:
      'mouse'
  });
// Other setup, be sure to check out the suggested mocks mentioned above in https://react-spectrum.adobe.com/react-spectrum/TreeView.html#testing

it('TreeView can select a row via keyboard', async function () {
  // Render your test component/app and initialize the Tree tester
  let { getByTestId } =
    render(
      <Provider
        theme={defaultTheme}
      >
        <TreeView
          data-testid="test-tree"
          selectionMode="multiple"
        >
          ...
        </TreeView>
      </Provider>
    );
  let treeTester =
    testUtilUser
      .createTester(
        'Tree',
        {
          root:
            getByTestId(
              'test-tree'
            ),
          interactionType:
            'keyboard'
        }
      );

  await treeTester
    .toggleRowSelection({
      row: 0
    });
  expect(
    treeTester
      .selectedRows
  ).toHaveLength(1);
  expect(
    within(
      treeTester.rows[0]
    ).getByRole(
      'checkbox'
    )
  ).toBeChecked();

  await treeTester
    .toggleRowSelection({
      row: 1
    });
  expect(
    treeTester
      .selectedRows
  ).toHaveLength(2);
  expect(
    within(
      treeTester.rows[1]
    ).getByRole(
      'checkbox'
    )
  ).toBeChecked();

  await treeTester
    .toggleRowSelection({
      row: 0
    });
  expect(
    treeTester
      .selectedRows
  ).toHaveLength(1);
  expect(
    within(
      treeTester.rows[0]
    ).getByRole(
      'checkbox'
    )
  ).not.toBeChecked();
});
```

### Properties

Name

Type

Description

`tree`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the tree.

`rows`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the tree's rows if any.

`selectedRows`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the tree's selected rows if any.

### Methods

Method

Description

`constructor( (opts: [TreeTesterOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:TreeTesterOpts) )): void`

`setInteractionType( (type: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType'] )): void`

Set the interaction type used by the tree tester.

`findRow( (opts: {  rowIndexOrText: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns a row matching the specified index or text content.

`toggleRowSelection( (opts: [TreeToggleRowOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/tree.ts:TreeToggleRowOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Toggles the selection for the specified tree row. Defaults to using the interaction type set on the tree tester. Note that this will endevor to always add/remove JUST the provided row to the set of selected rows.

`toggleRowExpansion( (opts: [TreeToggleExpansionOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/tree.ts:TreeToggleExpansionOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Toggles the expansion for the specified tree row. Defaults to using the interaction type set on the tree tester.

`triggerRowAction( (opts: [TreeRowActionOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/tree.ts:TreeRowActionOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Triggers the action for the specified tree row. Defaults to using the interaction type set on the tree tester.

`cells( (opts: {  element?: [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the tree's cells if any. Can be filtered against a specific row if provided via `element`.
