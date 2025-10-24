// localStorage wrapper with error handling for private browsing mode
export class StorageService {
  private storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }

  get(): number | null {
    try {
      const value = localStorage.getItem(this.storageKey);
      if (value === null) return null;
      const parsed = parseFloat(value);
      return isNaN(parsed) ? null : parsed;
    } catch (err) {
      console.warn(`[StorageService] Failed to read from localStorage:`, err);
      return null;
    }
  }

  set(scale: number): void {
    try {
      localStorage.setItem(this.storageKey, scale.toString());
    } catch (err) {
      console.warn(`[StorageService] Failed to write to localStorage:`, err);
    }
  }

  remove(): void {
    try {
      localStorage.removeItem(this.storageKey);
    } catch (err) {
      console.warn(`[StorageService] Failed to remove from localStorage:`, err);
    }
  }
}
