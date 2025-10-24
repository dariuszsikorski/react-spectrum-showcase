// Core responsive manager - framework-agnostic singleton
import type { 
  ResponsiveConfig, 
  ResponsiveState, 
  ResponsiveListener,
  ResponsiveManagerInterface 
} from './types';
import { StorageService } from './storage';

const DEFAULT_CONFIG: ResponsiveConfig = {
  baseSize: 16,
  minScale: 0.5,
  maxScale: 2.0,
  breakpointRem: 60,
  throttleMs: 500,
  storageKey: 'ui-scale'
};

// Simple throttle implementation
function throttle<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): T & { cancel?: () => void } {
  let timeoutId: number | null = null;
  let lastRan = 0;

  const throttled = function(this: any, ...args: Parameters<T>) {
    const now = Date.now();
    
    if (lastRan && now < lastRan + delay) {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastRan = now;
        func.apply(this, args);
      }, delay - (now - lastRan));
    } else {
      lastRan = now;
      func.apply(this, args);
    }
  } as T & { cancel?: () => void };

  throttled.cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return throttled;
}

export class ResponsiveManager implements ResponsiveManagerInterface {
  private static instance: ResponsiveManager | null = null;
  
  private config: ResponsiveConfig;
  private storage: StorageService;
  private listeners: Set<ResponsiveListener> = new Set();
  private throttledResizeHandler: ((() => void) & { cancel?: () => void }) | null = null;
  
  private state: ResponsiveState = {
    scale: 1.0,
    isDesktop: false,
    isMobile: true,
    viewportWidth: 0,
    breakpointPx: 0
  };

  private constructor(config: Partial<ResponsiveConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.storage = new StorageService(this.config.storageKey);
  }

  static getInstance(config?: Partial<ResponsiveConfig>): ResponsiveManager {
    if (!ResponsiveManager.instance) {
      ResponsiveManager.instance = new ResponsiveManager(config);
    }
    return ResponsiveManager.instance;
  }

  getState(): ResponsiveState {
    return { ...this.state };
  }

  getConfig(): ResponsiveConfig {
    return { ...this.config };
  }

  private calculateBreakpoint(scale: number): number {
    return this.config.breakpointRem * this.config.baseSize * scale;
  }

  private updateViewportState(): void {
    const viewportWidth = window.innerWidth;
    const breakpointPx = this.calculateBreakpoint(this.state.scale);
    const isDesktop = viewportWidth > breakpointPx;
    
    this.state = {
      ...this.state,
      viewportWidth,
      breakpointPx,
      isDesktop,
      isMobile: !isDesktop
    };

    this.updateBodyClasses();
  }

  private updateBodyClasses(): void {
    if (typeof document === 'undefined') return;
    
    const body = document.body;
    
    if (this.state.isDesktop) {
      body.classList.add('is-desktop');
      body.classList.remove('is-mobile');
    } else {
      body.classList.add('is-mobile');
      body.classList.remove('is-desktop');
    }
  }

  private applyFontSize(scale: number): void {
    if (typeof document === 'undefined') return;
    
    const fontSizePercent = `${scale * 100}%`;
    document.documentElement.style.fontSize = fontSizePercent;
  }

  private notifyListeners(): void {
    const stateCopy = this.getState();
    this.listeners.forEach(listener => {
      try {
        listener(stateCopy);
      } catch (err) {
        console.error('[ResponsiveManager] Listener error:', err);
      }
    });
  }

  setScale(scale: number): void {
    const clampedScale = Math.min(
      Math.max(scale, this.config.minScale),
      this.config.maxScale
    );
    
    if (clampedScale === this.state.scale) return;
    
    this.state.scale = clampedScale;
    this.applyFontSize(clampedScale);
    this.storage.set(clampedScale);
    this.updateViewportState();
    this.notifyListeners();
  }

  cycleScale(presets: number[] = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0]): void {
    const validPresets = presets.filter(
      p => p >= this.config.minScale && p <= this.config.maxScale
    );
    
    if (validPresets.length === 0) return;
    
    const currentIndex = validPresets.findIndex(p => p === this.state.scale);
    const nextIndex = (currentIndex + 1) % validPresets.length;
    this.setScale(validPresets[nextIndex]);
  }

  subscribe(listener: ResponsiveListener): () => void {
    this.listeners.add(listener);
    
    // Immediately call listener with current state
    try {
      listener(this.getState());
    } catch (err) {
      console.error('[ResponsiveManager] Initial listener call error:', err);
    }
    
    // Return unsubscribe function
    return () => {
      this.listeners.delete(listener);
    };
  }

  private handleResize = (): void => {
    this.updateViewportState();
    this.notifyListeners();
  };

  initialize(): void {
    if (typeof window === 'undefined') return;
    
    // Load saved scale or use default
    const savedScale = this.storage.get();
    const initialScale = savedScale !== null ? savedScale : this.state.scale;
    
    // Apply initial scale
    this.state.scale = Math.min(
      Math.max(initialScale, this.config.minScale),
      this.config.maxScale
    );
    this.applyFontSize(this.state.scale);
    
    // Set initial viewport state
    this.updateViewportState();
    
    // Create throttled resize handler
    this.throttledResizeHandler = throttle(
      this.handleResize,
      this.config.throttleMs
    );
    
    // Attach resize listener
    window.addEventListener('resize', this.throttledResizeHandler);
  }

  cleanup(): void {
    if (this.throttledResizeHandler) {
      // Cancel any pending throttled calls
      if (this.throttledResizeHandler.cancel) {
        this.throttledResizeHandler.cancel();
      }
      window.removeEventListener('resize', this.throttledResizeHandler);
      this.throttledResizeHandler = null;
    }
    
    this.listeners.clear();
  }
}

export default ResponsiveManager;
