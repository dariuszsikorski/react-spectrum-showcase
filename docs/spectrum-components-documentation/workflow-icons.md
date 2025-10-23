---
source: https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html
date: Thu, 16 Oct 2025 01:26:02 GMT
---

Workflow icons are graphical metaphors or symbols that can be used to compliment existing experiences.

* * *

```
import Airplane from '@spectrum-icons/workflow/Airplane';

<Airplane aria-label="Airplane" />
```

```
import Airplane from '@spectrum-icons/workflow/Airplane';

<Airplane aria-label="Airplane" />
```

```
import Airplane from '@spectrum-icons/workflow/Airplane';

<Airplane aria-label="Airplane" />
```

* * *

Icons support t-shirt sizing. When used inside another React Spectrum component, they'll generally be sized automatically, but if you use icons standalone, you can use the `size` prop to control the sizing. The default size is "M" in medium scale (desktop), and "L" in large scale (mobile).

```
import Beaker from '@spectrum-icons/workflow/Beaker';

<Flex gap="size-100">
  <Beaker aria-label="XXS Beaker" size="XXS" />
  <Beaker aria-label="XS Beaker" size="XS" />
  <Beaker aria-label="S Beaker" size="S" />
  <Beaker aria-label="M Beaker" size="M" />
  <Beaker aria-label="L Beaker" size="L" />
  <Beaker aria-label="XL Beaker" size="XL" />
  <Beaker aria-label="XXL Beaker" size="XXL" />
</Flex>
```

```
import Beaker from '@spectrum-icons/workflow/Beaker';

<Flex gap="size-100">
  <Beaker aria-label="XXS Beaker" size="XXS" />
  <Beaker aria-label="XS Beaker" size="XS" />
  <Beaker aria-label="S Beaker" size="S" />
  <Beaker aria-label="M Beaker" size="M" />
  <Beaker aria-label="L Beaker" size="L" />
  <Beaker aria-label="XL Beaker" size="XL" />
  <Beaker aria-label="XXL Beaker" size="XXL" />
</Flex>
```

```
import Beaker from '@spectrum-icons/workflow/Beaker';

<Flex gap="size-100">
  <Beaker
    aria-label="XXS Beaker"
    size="XXS"
  />
  <Beaker
    aria-label="XS Beaker"
    size="XS"
  />
  <Beaker
    aria-label="S Beaker"
    size="S"
  />
  <Beaker
    aria-label="M Beaker"
    size="M"
  />
  <Beaker
    aria-label="L Beaker"
    size="L"
  />
  <Beaker
    aria-label="XL Beaker"
    size="XL"
  />
  <Beaker
    aria-label="XXL Beaker"
    size="XXL"
  />
</Flex>
```

* * *

Icons support four Spectrum semantic colors: `negative`, `notice`, `positive`, and `informative`. Icons within React Spectrum components typically have their colors styled appropriately, but you can use the `color` prop to adjust the color of any standalone icons.

```
import Alert from '@spectrum-icons/workflow/Alert';

<Flex gap="size-100">
  <Alert aria-label="Default Alert" />
  <Alert aria-label="Negative Alert" color="negative" />
  <Alert aria-label="Notification Alert" color="notice" />
  <Alert aria-label="Positive Alert" color="positive" />
  <Alert aria-label="Informative Alert" color="informative" />
</Flex>
```

```
import Alert from '@spectrum-icons/workflow/Alert';

<Flex gap="size-100">
  <Alert aria-label="Default Alert" />
  <Alert aria-label="Negative Alert" color="negative" />
  <Alert aria-label="Notification Alert" color="notice" />
  <Alert aria-label="Positive Alert" color="positive" />
  <Alert
    aria-label="Informative Alert"
    color="informative"
  />
</Flex>
```

```
import Alert from '@spectrum-icons/workflow/Alert';

<Flex gap="size-100">
  <Alert aria-label="Default Alert" />
  <Alert
    aria-label="Negative Alert"
    color="negative"
  />
  <Alert
    aria-label="Notification Alert"
    color="notice"
  />
  <Alert
    aria-label="Positive Alert"
    color="positive"
  />
  <Alert
    aria-label="Informative Alert"
    color="informative"
  />
</Flex>
```

* * *

By default, icons are considered decorative, and are hidden from assistive technology. When used within a component like a button that has no label, an `aria-label` should be provided to the parent component. If used standalone, an `aria-label` can be provided to the icon itself.

```
import LockClosed from '@spectrum-icons/workflow/LockClosed';

<LockClosed aria-label="Locked" />
```

```
import LockClosed from '@spectrum-icons/workflow/LockClosed';

<LockClosed aria-label="Locked" />
```

```
import LockClosed from '@spectrum-icons/workflow/LockClosed';

<LockClosed aria-label="Locked" />
```

* * *

A [searchable list of workflow icons](https://spectrum.adobe.com/page/icons/) is available on the Spectrum website. The name of the icon without any whitespace matches the import in React Spectrum.

**Note**: The Workflow icons we ship should not be wrapped in an `Icon` component like [Custom Icons](https://react-spectrum.adobe.com/react-spectrum/custom-icons.html), they are already wrapped.
