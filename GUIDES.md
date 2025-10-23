# Adobe Spectrum Technical Mini-Guides

**RULE:** This is the ONLY file for documentation. DO NOT create separate .md files. If you created one, delete it after summarizing its essence here.

**Format:** Max 100 words per section. Technical details for senior frontend developers.

---

## 1. Icon Alignment Patterns

Wrap icon + label in `<Flex alignItems="center" gap="size-50">` for proper vertical centering. Icons must be wrapped in `<PhosphorIcon icon={...} />` (never raw SVG). Gap sizing: `size-50` (4px) for compact button content, `size-75` (6px) for navigation items, `size-100` (8px) for spacious layouts. Pattern for components WITH Flex wrapper: `<ToggleButton><Flex alignItems="center" gap="size-50"><PhosphorIcon icon={PushPin} /><Text>Pin</Text></Flex></ToggleButton>`. Exception: ActionGroup items DO NOT use Flex - Adobe handles alignment. Pattern: `<Item><PhosphorIcon icon={...} /><Text>Label</Text></Item>`.

---

## 2. Theme-Aware Color Switching

Import: `import { useTheme } from '../contexts/theme-context'`. Extract colorScheme: `const { colorScheme } = useTheme()`. Create helper: `const isDark = colorScheme === 'dark'`. Build color functions: `const getColor = () => isDark ? '#white' : '#dark'`. Apply dynamically to components. Theme context triggers re-render on switch. Supports `light`, `dark` schemes. Use computed values instead of hardcoded colors for automatic theme updates.

---

## 3. ActionGroup Item Structure

Official Adobe pattern requires icon and text as direct siblings inside Item component. Structure: `<Item key="id"><PhosphorIcon icon={PencilSimple} /><Text>Label</Text></Item>`. CRITICAL: Use `<PhosphorIcon icon={...} />` wrapper, never raw SVG. Never wrap in Flex or div - breaks internal layout system. ActionGroup manages alignment, spacing, and focus states. Custom wrappers interfere with accessibility tree and keyboard navigation. PhosphorIcon automatically inherits size (16px standard). Text component ensures proper typography scaling across viewport sizes.

---

## 4. FileTrigger Button Composition

FileTrigger requires Button wrapper with Flex inside for icon-label layout. Pattern: `<FileTrigger><Button><Flex alignItems="center" gap="size-50"><PhosphorIcon icon={PaperclipHorizontal} /><Text>Upload</Text></Flex></Button></FileTrigger>`. CRITICAL: Wrap Phosphor icons in PhosphorIcon component. Gap `size-50` maintains compact 4px spacing. Button component doesn't handle internal alignment - manual Flex wrapper required. PhosphorIcon inherits 16px size. Text component scales with responsive typography. Flex ensures vertical centering across font-size changes.

---

## 5. Spectrum Gap Tokens

Adobe Spectrum spacing tokens map to pixel values: `size-50` (4px), `size-75` (6px), `size-100` (8px), `size-125` (10px), `size-150` (12px), `size-200` (16px). Use semantic tokens instead of raw pixels for consistent spacing. Tokens adapt to density scales (compact/regular/spacious). Apply via `gap` prop in Flex/Grid components. Design system ensures mathematical relationships between spacing values. Tokens maintain accessibility targets for touch/click areas. Follow 4px baseline grid system.

---

## 6. Icon Sizing & Inheritance

Standard icon sizes: 16px (buttons/inline), 20px (larger buttons), 24px (headers), 32px (prominent). Resolution priority: 1) Explicit `size` prop, 2) IconContext from parent (ActionButton sets 'S'=16px default), 3) Provider scale. Size token mapping: XXS=10px, XS=12px, S=16px, M=20px, L=24px, XL=28px, XXL=32px. Icon component reads context, applies size class. Custom wrappers bypass context reading. Small icons (12px) discourage accessibility. Maintain 1:1 aspect ratio. Larger icons (48px+) reserved for empty states/placeholders.

---

## 7. Icon Wrapper Pattern

Universal pattern for any icon library: `import { Icon } from '@adobe/react-spectrum'; export function PhosphorIcon({ icon: Ico, ...iconProps }) { return <Icon {...iconProps}><Ico /></Icon> }`. PhosphorIcon handles: size inheritance via IconContext, SlotProvider prop reception, CSS Module class application, React.cloneElement to SVG, accessibility props. Correct usage: ActionButton/Menu: direct `<PhosphorIcon icon={Pencil} />`, ToggleButton/Button: `<Flex><PhosphorIcon /></Flex>`, FileTrigger: nested Flex, ActionGroup: direct sibling. CRITICAL: Never use raw SVG or nested custom wrappers - breaks integration chain.

---

## 8. Spectrum Integration Mechanics

Spectrum uses SlotProvider + React.cloneElement for prop injection. Flow: ActionButton → SlotProvider injects `{ UNSAFE_className: classNames(styles, 'spectrum-Icon') }` → Icon receives via slot detection → Icon clones SVG child with classes. CSS Modules compile `.spectrum-Icon` to `.o7Xu8a_spectrum-Icon` (hash prefix). Icon component imports compiled modules, applies via classNames which resolves hash. ActionButton selector `.o7Xu8a_spectrum-ActionButton .o7Xu8a_spectrum-Icon` requires exact match. Direct SVG embedding misses injection chain, breaks styling. Icon bridges component/element boundary—essential for universal compatibility.

---

## 9. Implementation Strategy

Two-step decision framework: **Step 1 - Identify Component Category:** A) SlotProvider Components (ActionButton, ActionGroup, Menu) - Adobe manages layout, pattern `<Item><PhosphorIcon /><Text /></Item>`, NO Flex. B) Manual-Layout Components (ToggleButton, Button, FileTrigger) - pattern `<Button><Flex><PhosphorIcon /><Text /></Flex></Button>`. C) Container Components (ActionBar, ListView, TableView) - verify architecture separately. **Step 2 - Before implementing:** Check Adobe docs + official examples, test basic structure first, avoid blind refactoring across categories. When unsure, prefer working implementation over theoretical elegance.

---

## 10. Quick Icon Implementation Reference

**ActionButton/ActionGroup/Menu:** `<ActionButton><PhosphorIcon icon={Pencil} /><Text>Edit</Text></ActionButton>` • `<Item><PhosphorIcon icon={Copy} /><Text>Copy</Text></Item>` **ToggleButton/Button/FileTrigger:** `<ToggleButton><Flex alignItems="center" gap="size-50"><PhosphorIcon icon={Pin} /><Text>Pin</Text></Flex></ToggleButton>` • `<FileTrigger><Button><Flex alignItems="center" gap="size-50"><PhosphorIcon icon={Paperclip} /><Text>Upload</Text></Flex></Button></FileTrigger>` **Icon-only:** `<ActionButton aria-label="Settings"><PhosphorIcon icon={Gear} /></ActionButton>`

---

## 11. TypeScript Integration

**Type Requirements:** onAction handlers expect `Key` type from @react-types/shared. onSelectionChange expects `Selection` type. Match exact callback signatures (onDragEnter→onDropEnter). **ColorScheme Handling:** Use proper ColorScheme union, not custom strings. **Icon Integration:** Convert Icon types to ReactNode for TableView columns. **Common Errors:** Missing PhosphorIcon imports (21 files), invalid backgroundColor values ("blue-100"→"blue-400"), ColorScheme doesn't accept "darkest" in storage functions, onAction expects Key not string, non-existent props like `isQuiet` on LogicButton. **Fix:** Use type-only imports: `import type { Icon, ReactElement }` for verbatimModuleSyntax compliance.

---

## 12. Project Structure

```
src/
  components/      # Reusable UI components
    Demos/        # 76+ React Spectrum component demos
    Grid/         # Grid layout components
    PhosphorIcon/ # Icon wrapper component
    Sidebar/      # Sidebar components
  contexts/       # Theme and responsive state
  hooks/          # useResponsive, useDebounce, useDisclosureState
  utils/          # Helpers: color, storage, scrolling
  assets/         # Static assets (images, icons)
  App.tsx         # Main application component
  main.tsx        # Application entry point
```

Convention: CSS Modules for component styles, SCSS for global utilities. Use `.ComponentName` and `.ComponentName_child` for class naming (SCSS nesting pattern). Import styles as modules: `import styles from './Component.module.scss'`. Keep component logic focused, extract logic to utils/hooks. Collocate related files.

---

## 13. Responsive UI Integration

Standalone `useResponsive()` hook in `src/hooks/useResponsive.ts` provides viewport detection and scaling. Returns: `{ scale, isMobile, isDesktop, setScale(), cycleScale() }`. ResponsiveManager singleton handles state subscription and updates. Body classes `.is-mobile`/`.is-desktop` auto-injected on resize. Scale persists to localStorage. Dynamic breakpoint adjusts with scale (1200px at 125% = 960px effective). Use hook in components for reactive state. No external dependencies - fully self-contained implementation.

---
