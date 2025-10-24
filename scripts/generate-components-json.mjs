import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dir = path.join(__dirname, 'public/screenshots/adobe-spectrum-v2');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png')).sort();

// Parse all files by extracting the component name (before first dash)
const componentMap = {};

files.forEach(file => {
  const nameWithoutExt = file.replace('--2x.png', '');
  
  // Extract base component name (before first dash)
  // e.g., "button-primary-fill--default" -> component: "button", rest: "primary-fill--default"
  const dashIndex = nameWithoutExt.indexOf('-');
  let componentName, variantPart;
  
  if (dashIndex === -1) {
    // No dash found (e.g., "icon--default")
    const parts = nameWithoutExt.split('--');
    componentName = parts[0];
    variantPart = parts[1] || 'default';
  } else {
    // Split by first dash
    componentName = nameWithoutExt.substring(0, dashIndex);
    variantPart = nameWithoutExt.substring(dashIndex + 1);
  }
  
  if (!componentMap[componentName]) {
    componentMap[componentName] = {
      variants: [],
      defaultImage: null,
      category: null
    };
  }
  
  // Track if this variant contains "default"
  if (variantPart.includes('default')) {
    componentMap[componentName].defaultImage = file;
  }
  
  componentMap[componentName].variants.push({
    name: variantPart,
    filename: file
  });
});

// Map component names to categories
function getCategoryForComponent(componentName) {
  if (componentName === 'button' || componentName === 'action') return 'Buttons';
  if (componentName === 'accordion' || componentName === 'tabs' || componentName === 'breadcrumb' || componentName === 'link') return 'Navigation';
  if (componentName === 'checkbox' || componentName === 'radio' || componentName === 'slider' || componentName === 'switch' || componentName === 'textfield' || componentName === 'textarea' || componentName === 'search' || componentName === 'number' || componentName === 'color') return 'Forms';
  if (componentName === 'menu' || componentName === 'table' || componentName === 'picker') return 'Collections';
  if (componentName === 'icon' || componentName === 'icons') return 'Icons';
  if (componentName === 'grid' || componentName === 'flex' || componentName === 'view' || componentName === 'well' || componentName === 'split') return 'Layout';
  if (componentName === 'dialog' || componentName === 'tooltip' || componentName === 'popover' || componentName === 'alert') return 'Overlays';
  if (componentName === 'progress' || componentName === 'badge' || componentName === 'meter' || componentName === 'statuslight' || componentName === 'toast') return 'Status';
  if (componentName === 'field' || componentName === 'label' || componentName === 'help') return 'Forms';
  
  return 'Content'; // default fallback
}

// Get component title (convert kebab-case to Title Case)
function getTitleFromName(componentName) {
  return componentName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Get React Spectrum docs URL
function getReactSpectrumUrl(componentTitle) {
  const baseUrl = 'https://react-spectrum.adobe.com/react-spectrum/';
  // Remove spaces and join
  const titleNoSpace = componentTitle.replace(/\s+/g, '');
  return `${baseUrl}${titleNoSpace}.html`;
}

// Get Web Components URL
function getWebComponentUrl(componentTitle) {
  const baseUrl = 'https://opensource.adobe.com/spectrum-web-components/components/';
  const slugified = componentTitle.toLowerCase().replace(/\s+/g, '-');
  return `${baseUrl}${slugified}/`;
}

// Get Storybook URL
function getStorybookUrl(componentTitle) {
  const baseUrl = 'https://opensource.adobe.com/spectrum-web-components/storybook/?path=/story/';
  const slugified = componentTitle.toLowerCase().replace(/\s+/g, '-');
  return `${baseUrl}${slugified}`;
}

// Build components array
const components = Object.entries(componentMap)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([componentName, data]) => {
    const title = getTitleFromName(componentName);
    const category = getCategoryForComponent(componentName);
    
    // Sort variants: default first, then alphabetically
    const sortedVariants = data.variants.sort((a, b) => {
      if (a.name.includes('default') && !b.name.includes('default')) return -1;
      if (!a.name.includes('default') && b.name.includes('default')) return 1;
      return a.name.localeCompare(b.name);
    });
    
    // Use default image if found, otherwise first variant
    const defaultImage = data.defaultImage || sortedVariants[0].filename;
    
    return {
      id: componentName,
      title: title,
      category: category,
      defaultImage: defaultImage,
      variants: sortedVariants,
      links: {
        reactSpectrum: getReactSpectrumUrl(title),
        webComponent: getWebComponentUrl(title),
        storybook: getStorybookUrl(title)
      }
    };
  });

// Get unique categories and sort
const categories = [...new Set(components.map(c => c.category))].sort();

const output = {
  categories,
  components
};

// Write to file
const outputPath = path.join(__dirname, 'src/data/components.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`✅ Generated components.json`);
console.log(`📦 Total components: ${components.length}`);
console.log(`📂 Total categories: ${categories.length}`);
console.log(`📸 Total screenshots: ${files.length}`);
console.log(`🎯 Categories: ${categories.join(', ')}`);
console.log(`\n📋 Components by category:`);

const componentsByCategory = {};
components.forEach(c => {
  if (!componentsByCategory[c.category]) componentsByCategory[c.category] = [];
  componentsByCategory[c.category].push(`${c.title} (${c.variants.length})`);
});

Object.entries(componentsByCategory).forEach(([cat, comps]) => {
  console.log(`  ${cat}: ${comps.join(', ')}`);
});

console.log(`\n📁 File: ${outputPath}`);
