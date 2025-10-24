const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/Dariusz/Projects/phi/packages/ui-react-spectrum/public/screenshots/adobe-spectrum-v2';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png')).sort();

// Parse all files
const componentMap = {};

files.forEach(file => {
  const nameWithoutEng = file.replace('--2x.png', '');
  const parts = nameWithoutEng.split('--');
  let componentName, variant;
  
  if (parts.length === 2) {
    componentName = parts[0];
    variant = parts[1];
  } else if (parts.length > 2) {
    variant = parts[parts.length - 1];
    componentName = parts.slice(0, -1).join('--');
  } else return;
  
  if (!componentMap[componentName]) {
    componentMap[componentName] = { variants: [], defaultImage: null };
  }
  
  // Track if this is default variant
  if (variant === 'default') {
    componentMap[componentName].defaultImage = file;
  }
  
  componentMap[componentName].variants.push({ name: variant, filename: file });
});

// Map components to categories based on their names
function getCategoryForComponent(componentName) {
  if (componentName.startsWith('button')) return 'Buttons';
  if (componentName.startsWith('accordion')) return 'Navigation';
  if (componentName.includes('checkbox')) return 'Forms';
  if (componentName.includes('radio')) return 'Forms';
  if (componentName.includes('slider')) return 'Forms';
  if (componentName.includes('switch')) return 'Forms';
  if (componentName.includes('text-field') || componentName.includes('text-area')) return 'Forms';
  if (componentName.includes('search')) return 'Forms';
  if (componentName.includes('number-field')) return 'Forms';
  if (componentName.includes('color')) return 'Color';
  if (componentName.includes('date') || componentName.includes('calendar') || componentName.includes('time')) return 'Date and Time';
  if (componentName.includes('menu') || componentName.includes('action-menu')) return 'Collections';
  if (componentName.includes('list')) return 'Collections';
  if (componentName.includes('table')) return 'Collections';
  if (componentName.includes('tabs')) return 'Navigation';
  if (componentName.includes('breadcrumb')) return 'Navigation';
  if (componentName.includes('link')) return 'Navigation';
  if (componentName.includes('dialog')) return 'Overlays';
  if (componentName.includes('tooltip')) return 'Overlays';
  if (componentName.includes('popover')) return 'Overlays';
  if (componentName.includes('progress') || componentName.includes('status')) return 'Status';
  if (componentName.includes('badge')) return 'Status';
  if (componentName.includes('alert')) return 'Status';
  if (componentName.includes('meter')) return 'Status';
  if (componentName.includes('avatar') || componentName.includes('divider') || componentName.includes('heading') || componentName.includes('text')) return 'Content';
  if (componentName.includes('flex') || componentName.includes('grid') || componentName.includes('view') || componentName.includes('well')) return 'Layout';
  if (componentName.includes('action-button') || componentName.includes('action-group') || componentName.includes('action-bar')) return 'Buttons';
  if (componentName.includes('icon')) return 'Icons';
  if (componentName.includes('file-trigger')) return 'Forms';
  if (componentName.includes('combo-box') || componentName.includes('picker')) return 'Pickers';
  if (componentName.includes('drop-zone')) return 'Drag and drop';
  
  return 'Content'; // default fallback
}

// Convert to React Spectrum documentation URL format
function getComponentTitle(componentName) {
  // Handle button variants - they're all part of Button component
  if (componentName.startsWith('button-')) {
    // Extract base type (primary-fill, accent-outline, etc.)
    return 'Button';
  }
  
  // Handle accordion variants
  if (componentName.startsWith('accordion')) {
    return 'Accordion';
  }
  
  // Convert kebab-case to TitleCase
  return componentName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Get React Spectrum docs URL
function getReactSpectrumUrl(title) {
  const baseUrl = 'https://react-spectrum.adobe.com/react-spectrum/';
  return `${baseUrl}${title}.html`;
}

// Get Web Components URL
function getWebComponentUrl(title) {
  const baseUrl = 'https://opensource.adobe.com/spectrum-web-components/components/';
  const slugified = title.split(/(?=[A-Z])/).join('-').toLowerCase();
  return `${baseUrl}${slugified}/`;
}

// Get Storybook URL
function getStorybookUrl(title) {
  const baseUrl = 'https://opensource.adobe.com/spectrum-web-components/storybook/?path=/story/';
  const slugified = title.split(/(?=[A-Z])/).join('-').toLowerCase();
  return `${baseUrl}${slugified}`;
}

// Build components array
const components = Object.entries(componentMap)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([componentName, data]) => {
    const title = getComponentTitle(componentName);
    const defaultImage = data.defaultImage || data.variants[0].filename;
    const category = getCategoryForComponent(componentName);
    
    // Only add variant if different from default
    let variants = data.variants;
    if (variants.length > 1) {
      variants = variants.sort((a, b) => {
        if (a.name === 'default') return -1;
        if (b.name === 'default') return 1;
        return a.name.localeCompare(b.name);
      });
    }
    
    return {
      id: title,
      title: title,
      category: category,
      defaultImage: defaultImage,
      variants: variants,
      links: {
        reactSpectrum: getReactSpectrumUrl(title),
        webComponent: getWebComponentUrl(title),
        storybook: getStorybookUrl(title)
      }
    };
  });

// Get unique categories
const categories = [...new Set(components.map(c => c.category))].sort();

const output = {
  categories,
  components
};

// Write to file
const outputPath = path.join(process.cwd(), 'src/data/components.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`✅ Generated components.json`);
console.log(`📦 Total components: ${components.length}`);
console.log(`📂 Total categories: ${categories.length}`);
console.log(`📸 Total screenshots: ${files.length}`);
console.log(`📁 File: ${outputPath}`);
