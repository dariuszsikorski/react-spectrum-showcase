// Core TypeScript types for responsive UI scaling and device detection
export interface ResponsiveConfig {
  baseSize: number; // Base font size in pixels (default: 16)
  minScale: number; // Minimum scale factor (default: 0.5 = 50%)
  maxScale: number; // Maximum scale factor (default: 2.0 = 200%)
  breakpointRem: number; // Breakpoint in rem units at base scale (default: 60)
  throttleMs: number; // Resize event throttle delay in milliseconds (default: 500)
  storageKey: string; // localStorage key for persisting scale (default: 'ui-scale')
}

export interface ResponsiveState {
  scale: number; // Current scale factor (1.0 = 100%, 1.25 = 125%)
  isDesktop: boolean; // True if viewport is wider than breakpoint
  isMobile: boolean; // True if viewport is narrower than breakpoint
  viewportWidth: number; // Current viewport width in pixels
  breakpointPx: number; // Current breakpoint in pixels (adjusts with scale)
}

export type ResponsiveListener = (state: ResponsiveState) => void;

export interface ResponsiveManagerInterface {
  getState(): ResponsiveState;
  getConfig(): ResponsiveConfig;
  setScale(scale: number): void;
  cycleScale(presets?: number[]): void;
  subscribe(listener: ResponsiveListener): () => void;
  initialize(): void;
  cleanup(): void;
}
