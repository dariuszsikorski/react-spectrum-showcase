// Lightweight color helpers for hex colors

function clamp01(value: number): number {
  if (value < 0) return 0
  if (value > 1) return 1
  return value
}

function hexToRgb(hex: string): { r: number, g: number, b: number } {
  const normalized = hex.trim().toLowerCase()
  const match = normalized.match(/^#?([a-f0-9]{6})$/i)
  if (!match) {
    // Fallback to black if invalid
    return { r: 0, g: 0, b: 0 }
  }
  const intVal = parseInt(match[1], 16)
  const r = (intVal >> 16) & 255
  const g = (intVal >> 8) & 255
  const b = intVal & 255
  return { r, g, b }
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (v: number) => v.toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function rgbToHsl(r: number, g: number, b: number): { h: number, s: number, l: number } {
  const rn = r / 255
  const gn = g / 255
  const bn = b / 255
  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  const delta = max - min
  let h = 0
  if (delta !== 0) {
    if (max === rn) h = ((gn - bn) / delta) % 6
    else if (max === gn) h = (bn - rn) / delta + 2
    else h = (rn - gn) / delta + 4
  }
  const l = (max + min) / 2
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  return { h: (h * 60 + 360) % 360, s, l }
}

function hslToRgb(h: number, s: number, l: number): { r: number, g: number, b: number } {
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2
  let rn = 0, gn = 0, bn = 0
  if (0 <= h && h < 60) { rn = c; gn = x; bn = 0 }
  else if (60 <= h && h < 120) { rn = x; gn = c; bn = 0 }
  else if (120 <= h && h < 180) { rn = 0; gn = c; bn = x }
  else if (180 <= h && h < 240) { rn = 0; gn = x; bn = c }
  else if (240 <= h && h < 300) { rn = x; gn = 0; bn = c }
  else { rn = c; gn = 0; bn = x }
  return { r: Math.round((rn + m) * 255), g: Math.round((gn + m) * 255), b: Math.round((bn + m) * 255) }
}

export function lighten(hex: string, amount: number): string {
  const { r, g, b } = hexToRgb(hex)
  const { h, s, l } = rgbToHsl(r, g, b)
  const nl = clamp01(l + amount)
  const { r: nr, g: ng, b: nb } = hslToRgb(h, s, nl)
  return rgbToHex(nr, ng, nb)
}

export function darken(hex: string, amount: number): string {
  const { r, g, b } = hexToRgb(hex)
  const { h, s, l } = rgbToHsl(r, g, b)
  const nl = clamp01(l - amount)
  const { r: nr, g: ng, b: nb } = hslToRgb(h, s, nl)
  return rgbToHex(nr, ng, nb)
}

// Choose black/white text for best readability on a background
export function getReadableContentColor(hex: string): string {
  const { r, g, b } = hexToRgb(hex)
  // Perceived brightness (YIQ)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 150 ? '#000000' : '#ffffff'
}


