---
source: https://react-spectrum.adobe.com/react-spectrum/FileTrigger.html
date: Thu, 16 Oct 2025 01:06:06 GMT
---

A FileTrigger allows a user to access the file system with any pressable React Aria or React Spectrum component, or custom components built with usePress.

* * *

```
import {FileTrigger, Button} from '@adobe/react-spectrum';

function Example(){
  let [file, setFile] = React.useState(null);

  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          let files = Array.from(e);
          let filenames = files.map((file) => file.name);
          setFile(filenames);
        }}>
        <Button variant="accent">Select a file</Button>
      </FileTrigger>
      {file && file}
    </>
  )
}
```

```
import {FileTrigger, Button} from '@adobe/react-spectrum';

function Example(){
  let [file, setFile] = React.useState(null);

  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          let files = Array.from(e);
          let filenames = files.map((file) => file.name);
          setFile(filenames);
        }}>
        <Button variant="accent">Select a file</Button>
      </FileTrigger>
      {file && file}
    </>
  )
}
```

```
import {
  Button,
  FileTrigger
} from '@adobe/react-spectrum';

function Example() {
  let [file, setFile] =
    React.useState(null);

  return (
    <>
      <FileTrigger
        onSelect={(
          e
        ) => {
          let files =
            Array.from(
              e
            );
          let filenames =
            files.map((
              file
            ) =>
              file.name
            );
          setFile(
            filenames
          );
        }}
      >
        <Button variant="accent">
          Select a file
        </Button>
      </FileTrigger>
      {file && file}
    </>
  );
}
```

## Content[#](#content)

* * *

A `FileTrigger` wraps around a pressable child such as a button, and includes a visually hidden input element that allows the user to select files from their device.

```
import {FileTrigger, Button} from '@adobe/react-spectrum';

<FileTrigger>
  <Button />
</FileTrigger>
```

```
import {FileTrigger, Button} from '@adobe/react-spectrum';

<FileTrigger>
  <Button />
</FileTrigger>
```

```
import {
  Button,
  FileTrigger
} from '@adobe/react-spectrum';

<FileTrigger>
  <Button />
</FileTrigger>
```

If a visual label is not provided on the pressable child, then an `aria-label` or `aria-labelledby` prop must be passed to identify the file trigger to assistive technology.

* * *

By default, the file trigger will accept any file type. To support only certain file types, pass an array of the [mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) of files via the `acceptedFileTypes` prop.

```
<FileTrigger acceptedFileTypes={['image/png']}>
  <Button variant="primary">Select files</Button>
</FileTrigger>
```

```
<FileTrigger acceptedFileTypes={['image/png']}>
  <Button variant="primary">Select files</Button>
</FileTrigger>
```

```
<FileTrigger
  acceptedFileTypes={[
    'image/png'
  ]}
>
  <Button variant="primary">
    Select files
  </Button>
</FileTrigger>
```

* * *

A file trigger can accept multiple files by passsing the `allowsMultiple` property.

```
<FileTrigger allowsMultiple>
  <Button variant="primary">Upload your files</Button>
</FileTrigger>
```

```
<FileTrigger allowsMultiple>
  <Button variant="primary">Upload your files</Button>
</FileTrigger>
```

```
<FileTrigger
  allowsMultiple
>
  <Button variant="primary">
    Upload your files
  </Button>
</FileTrigger>
```

* * *

To enable selecting directories instead of files, use the `acceptDirectory` property.

This reflects the [webkitdirectory](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory) HTML attribute and allows users to select directories and their contents. Please note that support for this feature varies from browser to browser.

```
function Example() {
  let [files, setFiles] = React.useState([]);

  return (
    <>
      <FileTrigger
        acceptDirectory
        onSelect={(e) => {
          if (e) {
            let fileList = [...e].map((file) =>
              file.webkitRelativePath !== ''
                ? file.webkitRelativePath
                : file.name
            );
            setFiles(fileList);
          }
        }}
      >
        <Button variant="accent">Upload</Button>
      </FileTrigger>
      {files && (
        <ul>
          {files.map((file, index) => <li key={index}>{file}</li>)}
        </ul>
      )}
    </>
  );
}
```

```
function Example() {
  let [files, setFiles] = React.useState([]);

  return (
    <>
      <FileTrigger
        acceptDirectory
        onSelect={(e) => {
          if (e) {
            let fileList = [...e].map((file) =>
              file.webkitRelativePath !== ''
                ? file.webkitRelativePath
                : file.name
            );
            setFiles(fileList);
          }
        }}
      >
        <Button variant="accent">Upload</Button>
      </FileTrigger>
      {files && (
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>
      )}
    </>
  );
}
```

```
function Example() {
  let [files, setFiles] =
    React.useState([]);

  return (
    <>
      <FileTrigger
        acceptDirectory
        onSelect={(
          e
        ) => {
          if (e) {
            let fileList =
              [...e].map(
                (file) =>
                  file
                      .webkitRelativePath !==
                      ''
                    ? file
                      .webkitRelativePath
                    : file
                      .name
              );
            setFiles(
              fileList
            );
          }
        }}
      >
        <Button variant="accent">
          Upload
        </Button>
      </FileTrigger>
      {files && (
        <ul>
          {files.map((
            file,
            index
          ) => (
            <li
              key={index}
            >
              {file}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
```

* * *

To specify the media capture mechanism to capture media on the spot, pass `user` for the user-facing camera or `environment` for the outward-facing camera via the `defaultCamera` prop.

This behavior only works on mobile devices. On desktop devices, it will open the file system like normal. [Read more about capture](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture).

```
<FileTrigger defaultCamera="environment">
  <Button variant="accent">Open Camera</Button>
</FileTrigger>
```

```
<FileTrigger defaultCamera="environment">
  <Button variant="accent">Open Camera</Button>
</FileTrigger>
```

```
<FileTrigger defaultCamera="environment">
  <Button variant="accent">
    Open Camera
  </Button>
</FileTrigger>
```

* * *

Name

Type

Description

`acceptedFileTypes`

`ReadonlyArray<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>`

Specifies what mime type of files are allowed.

`allowsMultiple`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether multiple files can be selected.

`defaultCamera`

`'user' | 'environment'`

Specifies the use of a media capture mechanism to capture the media on the spot.

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The children of the component.

`acceptDirectory`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Enables the selection of directories instead of individual files.

Events

Name

Type

Description

`onSelect`

`( (files: FileList |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => void`

Handler when a user selects a file.

Positioning
