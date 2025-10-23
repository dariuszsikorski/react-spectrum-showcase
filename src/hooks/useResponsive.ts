// React adapter for @phi/ui-responsive
import { useEffect, useState } from 'react';
import { ResponsiveManager } from '@phi/ui-responsive';
import type { ResponsiveState } from '@phi/ui-responsive';

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
