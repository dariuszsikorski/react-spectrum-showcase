export const BASE_URLS = {
  reactSpectrum: 'https://react-spectrum.adobe.com',
  webComponent: 'https://opensource.adobe.com/spectrum-web-components',
  storybook: 'https://opensource.adobe.com/spectrum-web-components/storybook'
} as const;

export type BaseUrlKey = keyof typeof BASE_URLS;
