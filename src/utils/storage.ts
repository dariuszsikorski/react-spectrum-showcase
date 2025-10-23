const NAMESPACE_PREFIX = 'phi-ui-rs::'

export function getJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(NAMESPACE_PREFIX + key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch (err) {
    console.warn('storage:get', key, err)
    return fallback
  }
}

export function setJson<T>(key: string, value: T): void {
  try {
    localStorage.setItem(NAMESPACE_PREFIX + key, JSON.stringify(value))
  } catch (err) {
    console.warn('storage:set', key, err)
  }
}


