// Standalone responsive hook implementation
import { useEffect, useState, useCallback } from 'react';

export interface ResponsiveState {
  scale: number;
  isMobile: boolean;
  isDesktop: boolean;
}

class ResponsiveManager {
  private static instance: ResponsiveManager;
  private scale: number = 1.0;
  private isMobile: boolean = false;
  private isDesktop: boolean = false;
  private subscribers: Set<(state: ResponsiveState) => void> = new Set();

  static getInstance(): ResponsiveManager {
    if (!ResponsiveManager.instance) {
      ResponsiveManager.instance = new ResponsiveManager();
    }
    return ResponsiveManager.instance;
  }

  constructor() {
    this.updateResponsiveState();
    this.loadScaleFromStorage();
    
    window.addEventListener('resize', () => {
      this.updateResponsiveState();
      this.notifySubscribers();
    });
  }

  private updateResponsiveState() {
    const width = window.innerWidth;
    this.isMobile = width < 768;
    this.isDesktop = width >= 768;
  }

  private loadScaleFromStorage() {
    try {
      const savedScale = localStorage.getItem('ui-scale');
      if (savedScale) {
        this.scale = parseFloat(savedScale);
      }
    } catch {
      // Ignore storage errors
    }
  }

  private saveScaleToStorage(scale: number) {
    try {
      localStorage.setItem('ui-scale', scale.toString());
    } catch {
      // Ignore storage errors
    }
  }

  getState(): ResponsiveState {
    return {
      scale: this.scale,
      isMobile: this.isMobile,
      isDesktop: this.isDesktop
    };
  }

  setScale(scale: number) {
    this.scale = Math.max(0.5, Math.min(2.0, scale));
    this.saveScaleToStorage(this.scale);
    this.notifySubscribers();
  }

  cycleScale(presets: number[] = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0]) {
    const currentIndex = presets.findIndex(preset => Math.abs(preset - this.scale) < 0.01);
    const nextIndex = (currentIndex + 1) % presets.length;
    this.setScale(presets[nextIndex]);
  }

  subscribe(callback: (state: ResponsiveState) => void): () => void {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  private notifySubscribers() {
    this.subscribers.forEach(callback => callback(this.getState()));
  }
}

export function useResponsive() {
  const [state, setState] = useState<ResponsiveState>(() => {
    const manager = ResponsiveManager.getInstance();
    return manager.getState();
  });

  useEffect(() => {
    const manager = ResponsiveManager.getInstance();
    const unsubscribe = manager.subscribe(setState);
    return unsubscribe;
  }, []);

  const setScale = useCallback((scale: number) => {
    const manager = ResponsiveManager.getInstance();
    manager.setScale(scale);
  }, []);

  const cycleScale = useCallback((presets?: number[]) => {
    const manager = ResponsiveManager.getInstance();
    manager.cycleScale(presets);
  }, []);

  return {
    ...state,
    setScale,
    cycleScale
  };
}
