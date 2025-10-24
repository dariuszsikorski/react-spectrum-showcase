// React adapter for ui-responsive
import { useEffect, useState } from 'react';
import { ResponsiveManager } from '../lib/ui-responsive';
import type { ResponsiveState } from '../lib/ui-responsive';

export function useResponsive() {
  const manager = ResponsiveManager.getInstance();
  const [state, setState] = useState<ResponsiveState>(manager.getState());

  useEffect(() => {
    const unsubscribe = manager.subscribe(setState);
    return unsubscribe;
  }, []);

  return {
    ...state,
    setScale: (scale: number) => manager.setScale(scale),
    cycleScale: (presets?: number[]) => manager.cycleScale(presets)
  };
}
