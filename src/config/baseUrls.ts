export const BASE_URLS = {
  webComponent: 'https://opensource.adobe.com/spectrum-web-components',
  storybook: 'https://opensource.adobe.com/spectrum-web-components/storybook'
} as const;

export type BaseUrlKey = keyof typeof BASE_URLS;
