import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const screenshotDir = path.join(__dirname, 'public/screenshots/adobe-spectrum-v2')

// Get all PNG files
const files = fs.readdirSync(screenshotDir).filter(f => f.endsWith('.png'))

// Parse filenames to extract component and variant info
const componentMap: Record<string, Set<string>> = {}

files.forEach(file => {
  const filenameWithoutExt = file.replace('--2x.png', '')
  const parts = filenameWithoutExt.split('--')
  
  // Component name is everything except last part (which is variant)
  let componentName: string
  let variant: string
  
  if (parts.length === 2) {
    // e.g., "accordion--default" -> component: "accordion", variant: "default"
    componentName = parts[0]
    variant = parts[1]
  } else if (parts.length > 2) {
    // e.g., "button-primary-fill--default" -> component: "button-primary-fill", variant: "default"
    variant = parts[parts.length - 1]
    componentName = parts.slice(0, -1).join('--')
  } else {
    return // Skip if can't parse
  }
  
  if (!componentMap[componentName]) {
    componentMap[componentName] = new Set()
  }
  componentMap[componentName].add(variant)
})

// Print results
console.log('Component Map:')
Object.entries(componentMap).forEach(([component, variants]) => {
  console.log(`"${component}": [${Array.from(variants).map(v => `"${v}"`).join(', ')}]`)
})

console.log(`\nTotal components: ${Object.keys(componentMap).length}`)
