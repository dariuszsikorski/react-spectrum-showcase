---
source: https://react-spectrum.adobe.com/react-spectrum/ssr.html
date: Thu, 16 Oct 2025 01:04:08 GMT
---

This page describes how to use React Spectrum with server side rendering, including frameworks like Next.js, Remix, and Gatsby.

* * *

**Server side rendering**, or SSR, is the process of rendering components to HTML on the server, rather than rendering them only on the client. **Static rendering** is a similar approach, but pre-renders pages to HTML at build time rather than on each request. These techniques can help improve perceived loading performance and SEO. React Spectrum supports both of these approaches, either through a custom implementation or via frameworks like [Next.js](https://nextjs.org/),[Remix](https://remix.run/), and [Gatsby](https://www.gatsbyjs.com/).

* * *

When using server side rendering, the `locale` prop should be set explicitly on the `Provider` rather than relying on automatic locale selection. This ensures that the locale of the content rendered on the server matches the locale expected by the browser. This could be done by using the `Accept-Language` HTTP header, which the browser sends to the server with the user’s desired language. You could also use an in-application setting for this if available, or separate locale-specific URLs, for example.

```
import {Provider, defaultTheme} from '@adobe/react-spectrum';

function App() {
  return (
    <Provider theme={defaultTheme} locale={yourLocaleHere}>
      {/* your app here */}
    </Provider>
  );
}
```

```
import {
  defaultTheme,
  Provider
} from '@adobe/react-spectrum';

function App() {
  return (
    <Provider theme={defaultTheme} locale={yourLocaleHere}>
      {/* your app here */}
    </Provider>
  );
}
```

```
import {
  defaultTheme,
  Provider
} from '@adobe/react-spectrum';

function App() {
  return (
    <Provider
      theme={defaultTheme}
      locale={yourLocaleHere}
    >
      {/* your app here */}
    </Provider>
  );
}
```

See the [internationalization docs](https://react-spectrum.adobe.com/react-aria/internationalization.html) for more information about i18n in React Aria and React Spectrum.

By default, React Spectrum includes translations for all 30+ [supported languages](https://react-spectrum.adobe.com/react-aria/internationalization.html#supported-locales). When using server side rendering, this can be optimized so that only the strings for the current user's language are sent over the network rather than the strings for all supported languages. This takes two steps:

1.  Configure React Aria's build plugin for your framework to exclude all translation strings from your JavaScript bundle at build time.
2.  Render React Spectrum's `LocalizedStringProvider` component at the root of your app. This includes the strings for the user's language in the initial HTML so that the client can access them. It also passes the locale to the client, so an `I18nProvider` is not needed.

See below for framework-specific guideance.

First, install `@react-aria/optimize-locales-plugin` with your package manager. Then, add the following to your `next.config.js`:

```
// next.config.js
const localesPlugin = require('@react-aria/optimize-locales-plugin');

module.exports = {
  // ...
  webpack(config, {isServer}) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins.push(localesPlugin.webpack({locales: []}));    }
    return config;
  }
};
```

```
// next.config.js
const localesPlugin = require(
  '@react-aria/optimize-locales-plugin'
);

module.exports = {
  // ...
  webpack(config, { isServer }) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins.push(
        localesPlugin.webpack({ locales: [] })
      );    }
    return config;
  }
};
```

```
// next.config.js
const localesPlugin =
  require(
    '@react-aria/optimize-locales-plugin'
  );

module.exports = {
  // ...
  webpack(
    config,
    { isServer }
  ) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins
        .push(
          localesPlugin
            .webpack({
              locales: []
            })
        );    }
    return config;
  }
};
```

Finally, add a `LocalizedStringProvider` to your root layout component. This example uses a URL parameter to get the requested locale. See the [Next.js Internationalization guide](https://nextjs.org/docs/app/building-your-application/routing/internationalization) to learn how to set this up.

```
// app/[lang]/layout.tsx
import {LocalizedStringProvider} from '@adobe/react-spectrum/i18n';
export default function RootLayout(
  {children, params: {lang}}:
  {children: React.ReactNode, params: {lang: string}}
) {
  return (
    <html lang={lang}>
      <body>
        <LocalizedStringProvider locale={lang} />        {children}
      </body>
    </html>
  );
}
```

```
// app/[lang]/layout.tsx
import {LocalizedStringProvider} from '@adobe/react-spectrum/i18n';
export default function RootLayout(
  { children, params: { lang } }: {
    children: React.ReactNode;
    params: { lang: string };
  }
) {
  return (
    <html lang={lang}>
      <body>
        <LocalizedStringProvider locale={lang} />        {children}
      </body>
    </html>
  );
}
```

```
// app/[lang]/layout.tsx
import {LocalizedStringProvider} from '@adobe/react-spectrum/i18n';
export default function RootLayout(
  {
    children,
    params: { lang }
  }: {
    children:
      React.ReactNode;
    params: {
      lang: string;
    };
  }
) {
  return (
    <html lang={lang}>
      <body>
        <LocalizedStringProvider
          locale={lang}
        />        {children}
      </body>
    </html>
  );
}
```

First, install `@react-aria/optimize-locales-plugin` with your package manager. Then, add the following to your `next.config.js`:

```
// next.config.js
const localesPlugin = require('@react-aria/optimize-locales-plugin');

module.exports = {
  // ...
  i18n: {
    // See Next.js i18n docs...
  },
  webpack(config, {isServer}) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins.push(localesPlugin.webpack({locales: []}));    }
    return config;
  }
};
```

```
// next.config.js
const localesPlugin = require(
  '@react-aria/optimize-locales-plugin'
);

module.exports = {
  // ...
  i18n: {
    // See Next.js i18n docs...
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins.push(
        localesPlugin.webpack({ locales: [] })
      );    }
    return config;
  }
};
```

```
// next.config.js
const localesPlugin =
  require(
    '@react-aria/optimize-locales-plugin'
  );

module.exports = {
  // ...
  i18n: {
    // See Next.js i18n docs...
  },
  webpack(
    config,
    { isServer }
  ) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins
        .push(
          localesPlugin
            .webpack({
              locales: []
            })
        );    }
    return config;
  }
};
```

Finally, add a `LocalizedStringProvider` to `pages/_document.tsx` before the `<NextScript />` element. Use `props.locale` to access the requested locale, which is provided by Next.js. See the [Next.js Internationalization guide](https://nextjs.org/docs/pages/building-your-application/routing/internationalization) to learn how to set this up.

```
// pages/_document.tsx
import {Html, Head, Main, NextScript, DocumentProps} from 'next/document'
import {LocalizedStringProvider} from '@adobe/react-spectrum/i18n';
export default function Document(props: DocumentProps) {
  return (
    <Html lang={props.locale}>
      <Head />
      <body>
        <Main />
        <LocalizedStringProvider locale={props.locale} />        <NextScript />
      </body>
    </Html>
  );
}
```

```
// pages/_document.tsx
import {
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import {LocalizedStringProvider} from '@adobe/react-spectrum/i18n';
export default function Document(props: DocumentProps) {
  return (
    <Html lang={props.locale}>
      <Head />
      <body>
        <Main />
        <LocalizedStringProvider locale={props.locale} />        <NextScript />
      </body>
    </Html>
  );
}
```

```
// pages/_document.tsx
import {
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import {LocalizedStringProvider} from '@adobe/react-spectrum/i18n';
export default function Document(
  props: DocumentProps
) {
  return (
    <Html
      lang={props.locale}
    >
      <Head />
      <body>
        <Main />
        <LocalizedStringProvider
          locale={props
            .locale}
        />        <NextScript />
      </body>
    </Html>
  );
}
```

Remix is supported [when using Vite](https://remix.run/docs/en/main/future/vite) for builds. First, install `@react-aria/optimize-locales-plugin` with your package manager. Then, add the following to your `vite.config.ts`:

```
// vite.config.ts
import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import localesPlugin from '@react-aria/optimize-locales-plugin';
export default defineConfig({
  plugins: [
    remix(),
    // Don't include any locale strings in the client JS bundle.
    {...localesPlugin.vite({locales: []}), enforce: 'pre'}  ],
});
```

```
// vite.config.ts
import {unstable_vitePlugin as remix} from '@remix-run/dev';
import {defineConfig} from 'vite';
import localesPlugin from '@react-aria/optimize-locales-plugin';
export default defineConfig({
  plugins: [
    remix(),
    // Don't include any locale strings in the client JS bundle.
    {
      ...localesPlugin.vite({ locales: [] }),
      enforce: 'pre'
    }  ]
});
```

```
// vite.config.ts
import {unstable_vitePlugin as remix} from '@remix-run/dev';
import {defineConfig} from 'vite';
import localesPlugin from '@react-aria/optimize-locales-plugin';
export default defineConfig(
  {
    plugins: [
      remix(),
      // Don't include any locale strings in the client JS bundle.
      {
        ...localesPlugin
          .vite({
            locales: []
          }),
        enforce: 'pre'
      }    ]
  }
);
```

Finally, you'll need an [entry.server.tsx](https://remix.run/docs/en/main/file-conventions/entry.server) file, which will handle injecting the localized strings into the initial HTML for the client to access. The below file can be generated by running `npx remix reveal`, and making the highlighted modifications.

**Note**: Remix uses the `getLocalizationScript` function instead of the `LocalizedStringProvider` component to inject the strings into the initial HTML.

```
// app/entry.server.tsx
import type {EntryContext} from '@remix-run/node';
import {PassThrough} from 'node:stream';
import {createReadableStreamFromReadable} from '@remix-run/node';
import {RemixServer} from '@remix-run/react';
import {renderToPipeableStream} from 'react-dom/server';
import {getLocalizationScript} from '@adobe/react-spectrum/i18n';
const ABORT_DELAY = 5000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  // Get the requested language (e.g. from headers, URL param, database, etc.)
  let lang = await getRequestedLanguageSomehow(request);
  return new Promise((resolve, reject) => {
    let {pipe, abort} = renderToPipeableStream(
      <RemixServer
        context={remixContext}
        url={request.url}
        abortDelay={ABORT_DELAY}
      />,
      {
        bootstrapScriptContent: getLocalizationScript(lang),        onShellReady() {
          let body = new PassThrough();
          let stream = createReadableStreamFromReadable(body);

          responseHeaders.set('Content-Type', 'text/html');
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          console.error(error);
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
```

```
// app/entry.server.tsx
import type {EntryContext} from '@remix-run/node';
import {PassThrough} from 'node:stream';
import {createReadableStreamFromReadable} from '@remix-run/node';
import {RemixServer} from '@remix-run/react';
import {renderToPipeableStream} from 'react-dom/server';
import {getLocalizationScript} from '@adobe/react-spectrum/i18n';
const ABORT_DELAY = 5000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  // Get the requested language (e.g. from headers, URL param, database, etc.)
  let lang = await getRequestedLanguageSomehow(request);
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      <RemixServer
        context={remixContext}
        url={request.url}
        abortDelay={ABORT_DELAY}
      />,
      {
        bootstrapScriptContent: getLocalizationScript(lang),        onShellReady() {
          let body = new PassThrough();
          let stream = createReadableStreamFromReadable(
            body
          );

          responseHeaders.set('Content-Type', 'text/html');
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          console.error(error);
        }
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
```

```
// app/entry.server.tsx
import type {EntryContext} from '@remix-run/node';
import {PassThrough} from 'node:stream';
import {createReadableStreamFromReadable} from '@remix-run/node';
import {RemixServer} from '@remix-run/react';
import {renderToPipeableStream} from 'react-dom/server';
import {getLocalizationScript} from '@adobe/react-spectrum/i18n';
const ABORT_DELAY = 5000;

export default async function handleRequest(
  request: Request,
  responseStatusCode:
    number,
  responseHeaders:
    Headers,
  remixContext:
    EntryContext
) {
  // Get the requested language (e.g. from headers, URL param, database, etc.)
  let lang =
    await getRequestedLanguageSomehow(
      request
    );
  return new Promise(
    (
      resolve,
      reject
    ) => {
      let {
        pipe,
        abort
      } =
        renderToPipeableStream(
          <RemixServer
            context={remixContext}
            url={request
              .url}
            abortDelay={ABORT_DELAY}
          />,
          {
            bootstrapScriptContent:
              getLocalizationScript(
                lang
              ),            onShellReady() {
              let body =
                new PassThrough();
              let stream =
                createReadableStreamFromReadable(
                  body
                );

              responseHeaders
                .set(
                  'Content-Type',
                  'text/html'
                );
              resolve(
                new Response(
                  stream,
                  {
                    headers:
                      responseHeaders,
                    status:
                      responseStatusCode
                  }
                )
              );

              pipe(body);
            },
            onShellError(
              error:
                unknown
            ) {
              reject(
                error
              );
            },
            onError(
              error:
                unknown
            ) {
              responseStatusCode =
                500;
              console
                .error(
                  error
                );
            }
          }
        );

      setTimeout(
        abort,
        ABORT_DELAY
      );
    }
  );
}
```

You should also make sure to set the `lang` attribute on the root `<html>` element in `app/root.tsx` using the same language detection logic used above.

`LocalizedStringProvider` includes the strings for all React Spectrum components by default. This reduces the size a lot compared with bundling all languages, but you can also manually include a subset of the strings for only the components you use to get the smallest possible bundle size. However, this takes some careful work to ensure you include the strings for all of the components used across your app and update this list over time.

Start by creating a `LocalizedStringDictionary` containing only the strings for the components you use with the `createLocalizedStringDictionary` function. This accepts a list of npm package names for the individual React Spectrum components you use.

```
import {createLocalizedStringDictionary} from '@adobe/react-spectrum/i18n';

const dictionary = createLocalizedStringDictionary([
  '@react-spectrum/datepicker'
]);
```

```
import {createLocalizedStringDictionary} from '@adobe/react-spectrum/i18n';

const dictionary = createLocalizedStringDictionary([
  '@react-spectrum/datepicker'
]);
```

```
import {createLocalizedStringDictionary} from '@adobe/react-spectrum/i18n';

const dictionary =
  createLocalizedStringDictionary(
    ['@react-spectrum/datepicker']
  );
```

Then, pass this as an additional prop to `LocalizedStringProvider`:

```
<LocalizedStringProvider locale={locale} dictionary={dictionary} />
```

```
<LocalizedStringProvider
  locale={locale}
  dictionary={dictionary}
/>
```

```
<LocalizedStringProvider
  locale={locale}
  dictionary={dictionary}
/>
```

Or if using Remix, pass the dictionary as an additional parameter to `getLocalizationScript`:

```
getLocalizationScript(locale, dictionary)
```

```
getLocalizationScript(locale, dictionary)
```

```
getLocalizationScript(
  locale,
  dictionary
);
```

* * *

In React 18, SSR works out of the box with no additional work. If you're using React 16 or 17, you will need to wrap your application in an [SSRProvider](https://react-spectrum.adobe.com/react-aria/SSRProvider.html) component. This signals to all nested React Spectrum components that they are being rendered in an SSR context, which ensures that the HTML generated on the server matches the DOM structure hydrated on the client.

```
import {SSRProvider, Provider, defaultTheme} from '@adobe/react-spectrum';

// SSRProvider is only needed if you are using React 16 or 17.
<SSRProvider>
  <Provider theme={defaultTheme} locale={yourLocaleHere}>
    <App />
  </Provider>
</SSRProvider>
```

```
import {
  defaultTheme,
  Provider,
  SSRProvider
} from '@adobe/react-spectrum';

// SSRProvider is only needed if you are using React 16 or 17.
<SSRProvider>
  <Provider theme={defaultTheme} locale={yourLocaleHere}>
    <App />
  </Provider>
</SSRProvider>
```

```
import {
  defaultTheme,
  Provider,
  SSRProvider
} from '@adobe/react-spectrum';

// SSRProvider is only needed if you are using React 16 or 17.
<SSRProvider>
  <Provider
    theme={defaultTheme}
    locale={yourLocaleHere}
  >
    <App />
  </Provider>
</SSRProvider>
```

* * *

When using SSR, only a single copy of React Spectrum can be on the page at a time. This is in contrast to client-side rendering, where multiple copies from different parts of an app can coexist. Internally, many components rely on auto-generated ids to link related elements via ARIA attributes. When server side rendering, these ids need to be consistent so they match between the server and client, and this would not be possible with multiple copies of React Spectrum.

Media queries and DOM feature detection cannot be performed on the server because they depend on specific browser parameters that aren’t sent as part of the request. In cases where these affect the rendering of a particular component, this check is delayed until just after hydration is completed. This ensures that the rendering is consistent between the server and hydrated DOM, but updated immediately after the page becomes interactive.

* * *

[Next.js](https://nextjs.org/) is a framework for building websites and web applications with React. It supports both server side rendering as well as static rendering. A small amount of configuration is required to get React Spectrum’s CSS working with Next.js.

First, install the `glob` package with npm/yarn. Then, add the following to your `next.config.js` file. This will ensure that React Spectrum’s CSS is loaded properly by Next.js.

```
const glob = require('glob');

module.exports = {
  transpilePackages: [
    '@adobe/react-spectrum',
    '@react-spectrum/*',
    '@spectrum-icons/*'
  ].flatMap((spec) => glob.sync(`${spec}`, { cwd: 'node_modules/' }))
};
```

```
const glob = require('glob');

module.exports = {
  transpilePackages: [
    '@adobe/react-spectrum',
    '@react-spectrum/*',
    '@spectrum-icons/*'
  ].flatMap((spec) =>
    glob.sync(`${spec}`, { cwd: 'node_modules/' })
  )
};
```

```
const glob = require(
  'glob'
);

module.exports = {
  transpilePackages: [
    '@adobe/react-spectrum',
    '@react-spectrum/*',
    '@spectrum-icons/*'
  ].flatMap((spec) =>
    glob.sync(
      `${spec}`,
      {
        cwd:
          'node_modules/'
      }
    )
  )
};
```

For Next.js 13.0.x and below

You’ll need to install an additional Next.js plugin:

```
yarn add next-transpile-modules
```

With this installed, add the following to your `next.config.js` file.

```
const glob = require('glob');

const withTM = require('next-transpile-modules')([
  '@adobe/react-spectrum',
  '@react-spectrum/*',
  '@spectrum-icons/*'
].flatMap((spec) => glob.sync(`${spec}`, { cwd: 'node_modules/' })));

module.exports = withTM({
  // Your Next.js configuration
});
```

```
const glob = require('glob');

const withTM = require('next-transpile-modules')([
  '@adobe/react-spectrum',
  '@react-spectrum/*',
  '@spectrum-icons/*'
].flatMap((spec) =>
  glob.sync(`${spec}`, { cwd: 'node_modules/' })
));

module.exports = withTM({
  // Your Next.js configuration
});
```

```
const glob = require(
  'glob'
);

const withTM = require(
  'next-transpile-modules'
)([
  '@adobe/react-spectrum',
  '@react-spectrum/*',
  '@spectrum-icons/*'
].flatMap((spec) =>
  glob.sync(`${spec}`, {
    cwd: 'node_modules/'
  })
));

module.exports = withTM({
  // Your Next.js configuration
});
```

* * *

[Gatsby](https://www.gatsbyjs.com/) is a static site generator built with React. Gatsby works out of the box with React Spectrum without any additional configuration. For an example of a working Gatsby site using React Spectrum, see [this repo](https://github.com/devongovett/rsp-gatsby).

* * *

[Remix](https://remix.run/) is a full-stack React framework with nested routing.

To configure Remix to load React Spectrum styles, CSS Side-Effect Imports is required, and [Remix Vite](https://remix.run/docs/en/main/future/vite) has built-in support for it.

However, to make it work with SSR, a small amount of configuration is required. Add the following to your `vite.config.js` or `vite.config.ts` file. This will ensure that React Spectrum’s CSS can be built properly.

```
import glob from 'glob';

export default defineConfig({
  ssr: {
    noExternal: [
      '@adobe/react-spectrum',
      '@react-spectrum/*',
      '@spectrum-icons/*'
    ].flatMap((spec) => glob.sync(`${spec}`, { cwd: 'node_modules/' }))
  }
});
```

```
import glob from 'glob';

export default defineConfig({
  ssr: {
    noExternal: [
      '@adobe/react-spectrum',
      '@react-spectrum/*',
      '@spectrum-icons/*'
    ].flatMap((spec) =>
      glob.sync(`${spec}`, { cwd: 'node_modules/' })
    )
  }
});
```

```
import glob from 'glob';

export default defineConfig(
  {
    ssr: {
      noExternal: [
        '@adobe/react-spectrum',
        '@react-spectrum/*',
        '@spectrum-icons/*'
      ].flatMap((spec) =>
        glob.sync(
          `${spec}`,
          {
            cwd:
              'node_modules/'
          }
        )
      )
    }
  }
);
```
