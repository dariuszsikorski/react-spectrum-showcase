# React Spectrum Component Development Guide

Complete reference for building React Spectrum components with Adobe Spectrum design system. Covers architecture, theming, components, accessibility, testing, and implementation patterns.

---

## Table of Contents

1. [Architecture Layers (100w)](#1-architecture-layers-100w)
2. [Build Configuration (100w)](#2-build-configuration-100w)
3. [CSS Token System (100w)](#3-css-token-system-100w)
4. [Theme Provider System (100w)](#4-theme-provider-system-100w)
5. [Component Structure Pattern (100w)](#5-component-structure-pattern-100w)
6. [Hook Composition Patterns (100w)](#6-hook-composition-patterns-100w)
7. [Utility Functions (100w)](#7-utility-functions-100w)
8. [Icon System Implementation (100w)](#8-icon-system-implementation-100w)
9. [Slot System & Composition (100w)](#9-slot-system-composition-100w)
10. [Focus Management (100w)](#10-focus-management-100w)
11. [Collection Components (100w)](#11-collection-components-100w)
12. [Overlay Management (100w)](#12-overlay-management-100w)
13. [Form Components (100w)](#13-form-components-100w)
14. [Accessibility Patterns (100w)](#14-accessibility-patterns-100w)
15. [Internationalization (100w)](#15-internationalization-100w)
16. [Testing Patterns (100w)](#16-testing-patterns-100w)
17. [State Management (100w)](#17-state-management-100w)
18. [Responsive System (100w)](#18-responsive-system-100w)
19. [Performance Optimizations (100w)](#19-performance-optimizations-100w)
20. [Spectrum 2 Architecture (100w)](#20-spectrum-2-architecture-100w)
21. [React Aria Components (100w)](#21-react-aria-components-100w)
22. [Drag and Drop (100w)](#22-drag-and-drop-100w)
23. [Event Handling (100w)](#23-event-handling-100w)
24. [Animation Patterns (100w)](#24-animation-patterns-100w)
25. [Error Boundaries (100w)](#25-error-boundaries-100w)
26. [Implementation Checklist](#26-implementation-checklist)

---

## 1. Architecture Layers (100w)

Adobe Spectrum uses 4-layer architecture for component development. **@react-types** defines TypeScript interfaces and shared prop types. **@react-aria** provides unstyled behavior hooks handling accessibility, keyboard navigation, and interactions. **@react-stately** manages component state logic, selection, and collections. **@react-spectrum** implements styled components combining aria hooks with Spectrum CSS. Each layer is independently versioned and published. Components import from all layers: types for interfaces, aria for behavior, stately for state, utils for styling. Pattern: `useButton` (aria) + `useToggleState` (stately) + styles (CSS modules) = complete component. Separation enables headless UI patterns and framework-agnostic implementations.

---

## 2. Build Configuration (100w)

Spectrum uses Parcel 2 for bundling with `.parcelrc-build` configuration. TypeScript configured with `verbatimModuleSyntax: true` requiring explicit type imports. Babel transpiles JSX with automatic runtime. PostCSS processes CSS modules with custom importers. Entry points defined in package.json `exports` field supporting ESM/CJS dual packages. Build outputs to `dist/` with structure: `main.js` (CJS), `module.js` (ESM), `import.mjs` (ESM imports), types in `.d.ts`. CSS compiled separately, imported as side effects. Tree-shaking enabled via `sideEffects: ["*.css"]`. Components export named exports from index.ts barrel files. Development uses `yarn parcel build` with targets for node/browser environments.

---

## 3. CSS Token System (100w)

Spectrum CSS uses design tokens via CSS custom properties. Global tokens in `spectrum-global.css` define primitives: colors (`--spectrum-global-color-gray-50`), dimensions (`--spectrum-global-dimension-size-100`), animations (`--spectrum-global-animation-duration-100`). Component tokens in `vars.css` files reference globals: `--spectrum-button-m-primary-fill-color: var(--spectrum-global-color-accent)`. Semantic layers: global → alias → component. Theme switching changes root variables. Scale modifiers multiply dimension tokens. Tokens follow naming: `--spectrum-[component]-[size]-[variant]-[property]-[state]`. Import pattern: `import styles from '@adobe/spectrum-css-temp/components/button/vars.css'`. CSS Modules hash classes, preserving token references. Components apply via `className={classNames(styles, 'spectrum-Button')}`. System enables runtime theming without recompilation. Responsive breakpoints: S(640px), M(768px), L(1024px), XL(1280px), XXL(1536px). Color customization: override CSS variables like `--spectrum-accent-background-color-default`, `--spectrum-accent-background-color-hover`, `--spectrum-accent-content-color-default`, or global colors `--spectrum-global-color-gray-800`. Apply via inline style or custom theme CSS class. Semantic colors: negative (red), notice (orange), positive (green), informative (blue).

---

## 4. Theme Provider System (100w)

Provider component wraps application, injecting theme context. Structure: `<Provider theme={theme} colorScheme="dark" scale="medium">`. Themes import from `@react-spectrum/theme-default`. ColorScheme: "light" | "dark" (auto-detects OS preference). Scale: "medium" (desktop/mouse) | "large" (mobile/touch), auto-selected by device. Provider sets CSS classes: `spectrum--light`, `spectrum--medium`. Uses React Context for prop inheritance. `useProviderProps()` merges provider defaults with component props. Theme object contains: global, light, dark, medium, large CSS modules. Provider handles locale, ARIA labels, RTL support. Nested providers override parent settings. Components read theme via `useProvider()` hook. CSS variables cascade from provider root enabling dynamic switching. Custom breakpoints configurable: `breakpoints={{S:640,M:768,L:1024,XL:1280,XXL:1536}}`.

**Size/Scheme Quick Reference:** ColorSchemes(2): light, dark. Scales(2): medium, large. IconSizes(7): XXS, XS, S, M, L, XL, XXL. ComponentSizes: S|M|L (most) or S|L (some). Breakpoints(5): S(640px), M(768px), L(1024px), XL(1280px), XXL(1536px). IconColors(5): default, negative, notice, positive, informative.

---

## 5. Component Structure Pattern (100w)

Standard component anatomy follows strict pattern. Import layer dependencies: `import {useButton} from '@react-aria/button'`, `import {useProviderProps} from '@react-spectrum/provider'`, `import styles from '@adobe/spectrum-css-temp/components/button/vars.css'`. Props interface extends base: `interface SpectrumButtonProps extends AriaButtonProps`. Component uses forwardRef for ref access. Implementation: merge provider props, extract style props, call aria hook, apply className. Return JSX with spread handlers. Pattern: `let {buttonProps} = useButton(props, ref)`, `return <button {...buttonProps} className={classNames(styles, 'spectrum-Button')}>{children}</button>`. Export wrapped in forwardRef. Components are pure functions, no internal state. Hooks handle all logic. CSS modules provide scoped styles.

**Complete Example:**
```tsx
import {useButton} from '@react-aria/button';
import {useProviderProps} from '@react-spectrum/provider';
import styles from '@adobe/spectrum-css-temp/components/button/vars.css';

interface SpectrumButtonProps extends AriaButtonProps {
  variant?: 'accent' | 'primary' | 'secondary';
}

function Button(props: SpectrumButtonProps, ref: FocusableRef) {
  props = useProviderProps(props);
  let {styleProps} = useStyleProps(props);
  let {buttonProps} = useButton(props, ref);
  
  return (
    <button 
      {...buttonProps} 
      {...styleProps}
      className={classNames(styles, 'spectrum-Button')}>
      {props.children}
    </button>
  );
}

export default React.forwardRef(Button);
```

**Color Customization Example:**
```tsx
// Custom accent colors via CSS variables
<Provider theme={defaultTheme} UNSAFE_style={{
  '--spectrum-accent-background-color-default': '#5100FF',
  '--spectrum-accent-background-color-hover': '#6020FF',
  '--spectrum-global-color-gray-800': 'hotpink'
}}>
  <Button variant="accent">Custom Accent</Button>
</Provider>
```

---

## 6. Hook Composition Patterns (100w)

Spectrum components compose multiple hooks for complete functionality. Aria hooks provide behavior: `useButton` (click handling), `useFocusRing` (focus styles), `useHover` (hover state). Stately hooks manage state: `useToggleState` (checked/unchecked), `useSelectState` (selection). Pattern: `let state = useToggleState(props)`, `let {buttonProps} = useButton({...props, onPress: state.toggle}, ref)`. Hooks return props objects to spread on elements. Composition order matters: state → behavior → styling. Custom hooks wrap common patterns: `useFocusableRef` combines ref forwarding with focus methods. Hooks handle platform differences (touch/mouse). Event normalization happens in hooks. Components stay thin, hooks contain logic. Enables headless UI usage without styles.

---

## 7. Utility Functions (100w)

Core utilities in `@react-spectrum/utils` enable component development. `classNames()` merges CSS module classes with string classes. `useStyleProps()` converts style props to className/style objects. `useFocusableRef()` creates refs with imperative focus methods. `useSlotProps()` manages slot-based composition. `filterDOMProps()` removes non-DOM props from spread. `mergeProps()` intelligently merges multiple prop objects, concatenating event handlers. `useLayoutEffect()` provides SSR-safe layout effects. `useResizeObserver()` tracks element dimensions. `useControlledState()` handles controlled/uncontrolled patterns. `chain()` combines multiple callbacks into one. `clsx()` alternative for conditional classes. `shouldClientNavigate()` determines link behavior. Utilities are framework-agnostic, work with any React version. Import individually for tree-shaking: `import {classNames} from '@react-spectrum/utils'`.

---

## 8. Icon System Implementation (100w)

Icons use wrapper component pattern for consistent sizing/coloring. Base `<Icon>` component accepts children, applies CSS classes. Pattern: `<Icon><svg>...</svg></Icon>`. Icon reads size from context via `useSlotProps()`. Size options: 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' (default M for medium scale, L for large scale). Color options: undefined (inherit), 'negative', 'notice', 'positive', 'informative' for semantic states. Icons wrapped in provider automatically inherit theme colors via `fill="currentColor"`. Custom icon libraries integrate via wrapper: `function PhosphorIcon({icon: IconComponent}) { return <Icon><IconComponent /></Icon> }`. ActionButton provides IconContext setting default size. Workflow icons use two-tone with CSS variables. Icons support UNSAFE_className for overrides. Decorative icons have `aria-hidden="true"`. Semantic icons require `aria-label`. Import from `@spectrum-icons/workflow` or custom library.

---

## 9. Slot System & Composition (100w)

Slots enable flexible component composition via React Context. `SlotProvider` wraps children, injecting props based on slot names. Pattern: `<SlotProvider slots={{icon: {size: 'S'}, text: {weight: 'bold'}}}>{children}</SlotProvider>`. Children consume via `useSlotProps()` hook detecting their slot. Common slots: icon, text, description, illustration. Components define internal structure with slots: `<Item><Icon slot="icon"/><Text slot="text"/></Item>`. Enables consistent spacing without explicit props. ActionButton uses slots for icon+text alignment. Collections use slots for item rendering. Dialog uses slots for header/content/footer sections. Slots cascade through component tree. Override with local slot prop. System handles prop merging, className concatenation. Alternative to render props pattern.

---

## 10. Focus Management (100w)

FocusableRef pattern enables imperative focus control. Type: `FocusableRef<HTMLElement>` combines RefObject with focus methods. Creation: `useFocusableRef()` returns enhanced ref. Methods: `focus()`, `blur()`, `scrollIntoView()`. Components forward refs using `forwardRef<FocusableRef>`. Focus rings via `useFocusRing()` hook adding data attributes. CSS targets `[data-focus-ring]` for styling. FocusScope component traps focus within region. `autoFocus` prop focuses on mount. `restoreFocus` returns focus on unmount. `contain` prevents tabbing outside. Focus manager handles complex scenarios: modal stacking, menu navigation, grid cells. `useFocusManager()` provides focus utilities within scope. Keyboard navigation via `useKeyboard()`. Platform-specific focus behavior handled automatically. SSR-safe with client-only effects.

---

## 11. Collection Components (100w)

Collections handle dynamic lists via Item/Section components. ListView/TableView accept JSX children or items prop. JSX pattern: `<ListView><Item key="1">Text</Item></ListView>`. Data pattern: `<ListView items={data}>{item => <Item>{item.name}</Item>}</ListView>`. Sections group items: `<Section title="Group"><Item/></Section>`. Virtualization via `@tanstack/react-virtual` for performance. Selection managed by `useListState()` returning Set of keys. Selection modes: none, single, multiple. Keyboard navigation automatic via `useListBox()`. Async loading with `loadMore` prop. Drag/drop via `useDraggableCollection()`. Empty state via `renderEmptyState`. Column definitions for tables: `<Column key="name" isRowHeader>Name</Column>`. Sorting via `sortDescriptor` prop. Filtering happens in state hook. TypeScript generics preserve item types. Expandable rows for hierarchical data with nested expansion. Column resizing and reordering supported for customization. Mobile responsive design with horizontal scroll for wide tables.

---

## 12. Overlay Management (100w)

Overlays render outside component tree via React Portal. `OverlayProvider` at app root manages stacking. `useOverlayPosition()` calculates placement relative to trigger. Placement options: top, bottom, left, right with -start/-end variants. `shouldFlip` prevents viewport overflow. `offset` adds spacing from trigger. Modal overlays use `<Modal>` wrapper handling backdrop, escape key, focus trap. Popover uses `useOverlayTrigger()` linking trigger/overlay. Tooltip shows on hover/focus after delay. Z-index managed by stacking context. Animations via CSS transitions on data attributes. `isOpen` controlled state, `defaultOpen` uncontrolled. `onOpenChange` callback for state changes. Dismissal: escape key, backdrop click, blur. Focus restoration on close. Nested overlays maintain proper stacking order. Transition states tracked: entering/exiting for animation coordination. Mobile: tap outside overlay dismisses automatically.

---

## 13. Form Components (100w)

Form components share consistent API patterns. Value/onChange for controlled, defaultValue for uncontrolled. Validation via `isInvalid`, `errorMessage` props. Required fields show asterisk via `isRequired`. Labels associate using `useTextField()` generating IDs. Help text via `description` prop positioned below input. Character count for text inputs: `showCharacterCount`, `maxLength`. Number fields: `minValue`, `maxValue`, `step` props. Format options: currency, percent, decimal. Input addons via `startIcon`, `endIcon` slots. Size prop: 'S' | 'M' | 'L' (some components use 'S' | 'L' only). Quiet variant removes borders. Read-only vs disabled states differ visually. Autofocus, placeholder, inputMode supported. Custom validation via `validate` function. Forms use `Form` wrapper with `validationBehavior` prop. Submit handling via `onSubmit`. Reset via `Form.reset()`. Field registration automatic via context. Validation timing configurable: onChange, onBlur, onSubmit. Async validator support for server-side checks. Server error integration for API validation responses.

---

## 14. Accessibility Patterns (100w)

ARIA attributes automated via behavior hooks. `useButton()` adds role="button", tabIndex, keyboard handlers. Live regions via `announce()` function for screen readers. Labels required: explicit via `aria-label` or associated via `aria-labelledby`. Description text connected via `aria-describedby`. Semantic HTML preferred: button over div with role. Keyboard navigation: Tab for focus, Arrow keys for selection, Space/Enter for activation. Focus visible styles mandatory. Color alone never conveys meaning, icons have text alternatives. Error messages announced via `role="alert"`. Loading states announced via `aria-busy`. Required fields marked with `aria-required`. Invalid fields have `aria-invalid`. Collections support full keyboard navigation. High contrast mode supported via CSS. Landmarks for page structure organization (header, nav, main, footer). Skip links for efficient navigation. Touch targets meet WCAG minimums (32-48px). Platform-specific behavior handled automatically (iOS, Android, desktop differences).

---

## 15. Internationalization (100w)

I18n via `@react-aria/i18n` package. `I18nProvider` wraps app with locale. Strings stored in JSON: `packages/*/intl/{locale}.json`. `useLocalizedStringFormatter()` loads translations. Pattern: `let stringFormatter = useLocalizedStringFormatter(intlStrings)`. Usage: `stringFormatter.format('buttonLabel')`. Plural rules via ICU MessageFormat. Number formatting: `useNumberFormatter()` with locale-aware decimals, currency. Date formatting: `useDateFormatter()` handling calendars. RTL support via `direction` prop on Provider. Bidirectional text handled automatically. Component text externalized for translation. ARIA labels localized. Error messages translatable. Keyboard shortcuts adapt to locale. Calendar systems: Gregorian, Buddhist, Islamic. Time zones supported. Relative time formatting available. Collation for sorting respects locale.

---

## 16. Testing Patterns (100w)

Tests use React Testing Library with custom utilities. `render()` wrapped with Provider supplying theme. `@react-spectrum/test-utils` provides helpers: `triggerPress()`, `triggerKeyboard()`. Interaction testing via `user` from `@testing-library/user-event`. Async handling: `waitFor()`, `findBy*` queries. Component tests focus on behavior not implementation. Test structure: setup → act → assert. Mock providers for isolated testing. Visual regression via Chromatic snapshots. Accessibility testing with jest-axe. SSR tests using Node environment. Test IDs avoided, query by role/label. Collections tested with mock data. Overlay components need special portal handling. Focus/blur events simulated. Keyboard navigation fully tested. Mobile interactions via touch events. Performance benchmarks for large collections. Storybook for visual testing. E2E testing with Playwright for complete user flows. Integration tests verify multi-component interactions. CI/CD automation ensures test execution on every commit.

---

## 17. State Management (100w)

State hooks in `@react-stately` manage complex component logic. `useToggleState()` handles boolean states with toggle method. `useSelectState()` manages selection sets supporting single/multiple. `useListState()` handles collection state, selection, sorting, filtering. `useTreeState()` for hierarchical data with expansion. `useComboBoxState()` combines input with selection. `useTableState()` coordinates column visibility, sorting, selection. State hooks accept props, return state object with methods. Pattern: `let state = useListState(props)`. State includes: collection data, selection Set, disabled keys, sort descriptor. Methods: select(), toggle(), sort(). State hooks handle controlled/uncontrolled patterns internally. Persistence via `defaultSelectedKeys` vs `selectedKeys`. State updates trigger re-renders automatically. Computed properties like `isEmpty` derived from state.

---

## 18. Responsive System (100w)

Responsive behavior via `@react-spectrum/utils/MatchMedia`. Default breakpoints: S(640px), M(768px), L(1024px), XL(1280px), XXL(1536px). `useMatchMedia()` hook returns current breakpoint. Scale system (medium/large) affects component density and touch targets. Dimension tokens scale: `--spectrum-global-dimension-size-*`. Text scales via `--spectrum-global-font-size-*`. Touch target minimums: 32px (medium scale), 40-48px (large scale). Components adapt automatically via CSS tokens. Explicit responsive props: `isHidden={{S: true, M: false}}`, `width={{base: 'size-2000', L: 'size-5000'}}`. Orientation detection: portrait/landscape. Container queries preferred over viewport. Responsive collections: different layouts per breakpoint. Mobile: larger touch targets, simplified interactions. Desktop: hover states, keyboard shortcuts. Adaptive loading: virtualization thresholds change. SSR handles unknown viewport gracefully. Resize observer updates reactive.

---

## 19. Performance Optimizations (100w)

Virtualization for large lists via `@tanstack/react-virtual`. Collections render only visible items plus buffer. Lazy loading with `loadMore` for infinite scroll. Memoization: `useMemo()` for expensive computations, `React.memo()` for pure components. Code splitting: dynamic imports for heavy components. CSS-in-JS avoided, uses static CSS modules. Bundle size: tree-shaking enabled, side effects marked. Synthetic events pooled, handlers cached. Debouncing for search inputs via `useDebounce()`. Throttling for scroll handlers. Image loading: lazy with intersection observer. Font loading: subset with unicode-range. Animation: CSS transforms, will-change hints. React 18: automatic batching, concurrent features, Suspense for code splitting, selective hydration for improved initial load. SSR: streaming rendering for progressive content display. Dev mode: strict mode catches issues early. CDN for static assets delivery. Service worker caching for offline support. Preload critical resources for faster initial render. Profile regularly with React DevTools for optimization opportunities.

---

## 20. Spectrum 2 Architecture (100w)

Spectrum 2 (S2) introduces modern token system with semantic naming. Style macros replace CSS modules: `style({ backgroundColor: 'accent' })`. Tokens reference design system directly without CSS variables. Components use `@react-spectrum/s2` package. Simplified prop interface removing UNSAFE_ prefixes. Automatic dark mode without explicit colorScheme. Express mode for faster development. Component anatomy: fewer DOM nodes, semantic HTML. Performance: smaller bundles, faster runtime. Migration: S1/S2 can coexist. New components: Avatar, Badge, TagGroup. Improved TypeScript with stricter types. Style overrides via `styles` prop accepting macros. Animation system built-in. Better tree-shaking with modular exports. Design tokens in JavaScript/TypeScript. Platform-adaptive components detecting OS.

---

## 21. React Aria Components (100w)

RAC provides unstyled, accessible components for custom design systems. Import from `react-aria-components`. Components handle ARIA, keyboard, touch automatically. Styling via CSS, CSS-in-JS, or Tailwind. Composition-first API using compound components. Example: `<Button><Icon/><Text/></Button>`. No provider required, works standalone. Render props for custom elements: `{({isPressed}) => ...}`. Data attributes for styling states: `data-pressed`, `data-focused`. Animation via `data-entering`, `data-exiting`. Collection components use same Item/Section pattern. Built-in virtualization support. TypeScript generics preserve types. Context system for prop inheritance. Hooks exposed for custom implementations. SSR/hydration safe. Smaller bundle than full Spectrum. Framework agnostic core, React wrapper. Modern React: hooks, suspense, concurrent mode compatible.

---

## 22. Drag and Drop (100w)

Drag/drop via `@react-aria/dnd` and `@react-stately/dnd`. `useDraggableCollection()` enables dragging from lists. `useDroppableCollection()` accepts drops. Drag preview customizable via `renderDragPreview`. Drop indicators show valid targets. `getDropOperation()` determines move/copy/link. Keyboard support: Space to lift, Arrows to move, Enter to drop. Touch: long press to initiate. Auto-scroll near edges during drag. Multi-select drag supported. External files via `useDropZone()`. Data transfer via `useDragItem()` with types. Visual feedback: ghost image, drop zones highlight. Accessibility: live regions announce operations. Cancel via Escape key. Nested drop zones supported. Reordering within same list. Cross-list transfers. Tree drag/drop with hierarchy preservation. Mobile gestures properly handled.

---

## 23. Event Handling (100w)

Events normalized across platforms via hooks. `usePress()` handles click/tap/keyboard. `useHover()` manages mouse enter/leave. `useFocus()` tracks focus/blur. `useKeyboard()` captures key events. `useMove()` handles drag gestures. Events include pointer type: mouse, touch, pen, keyboard. Pressed state maintained during drag. Long press via `useLongPress()` with timing. Press events: onPressStart, onPressEnd, onPressUp, onPressChange. Hover disabled on touch devices. Focus visible only for keyboard navigation. Event handlers receive PressEvent with target, type, pointerType. Propagation control: continuePropagation(). Default prevention handled internally. Gesture conflicts resolved automatically. Text selection preserved in inputs. Context menu handling on right-click. Scroll lock during interactions.

---

## 24. Animation Patterns (100w)

CSS transitions handle state changes. Data attributes trigger animations: `[data-entering]`, `[data-exiting]`. Spectrum motion tokens: `--spectrum-global-animation-duration-*`. Enter/exit via `useTransition()` hook. Spring physics for natural motion. Reduced motion respected via `prefers-reduced-motion`. Animation orchestration: stagger, sequence, parallel. Page transitions with `AnimatePresence`. Micro-interactions: button press scale, hover lift. Loading skeletons pulse effect. Progress indicators smooth transitions. Modal fade/slide combinations. Collapse/expand height animations. Tab sliding indicators. Scroll-triggered animations via Intersection Observer. Performance: transform/opacity only, will-change hints. GPU acceleration for transforms. RequestAnimationFrame for JavaScript animations. FLIP technique for layout animations. Accessibility: motion can be disabled. Exit animations delay unmount.

---

## 25. Error Boundaries (100w)

Error boundaries catch component errors preventing app crashes. Pattern: class ErrorBoundary extends Component with componentDidCatch. Spectrum components wrapped in boundaries at strategic points. Provider includes top-level boundary. Errors logged to console in development. Production shows fallback UI. Error recovery via reset button. Async errors need special handling. Network errors caught in data hooks. Validation errors displayed inline. Form submission errors in alerts. Error context provides details to children. Retry logic for transient failures. Error reporting to analytics services. Dev mode shows error overlay with stack trace. Suspense boundaries for loading states. Hydration mismatches handled gracefully. TypeScript catches type errors at build time. PropType warnings in development only.

---

## 26. Implementation Checklist

Complete checklist for building production-ready Spectrum component library from scratch.

**Directory Structure:**
```
components/
├── @react-types/          # TypeScript interfaces
│   └── Component.d.ts
├── @react-aria/           # Behavior hooks
│   └── useComponent.ts
├── @react-stately/        # State management
│   └── useComponentState.ts
├── @react-spectrum/       # Styled components
│   ├── Component.tsx
│   └── styles/
│       └── component.module.css
├── test/
│   └── Component.test.tsx
└── stories/
    └── Component.stories.tsx
```

**Setup Tasks:**
- Configure Provider with theme and scale options
- Implement design token CSS system (global → alias → component)
- Create Icon wrapper component for consistent sizing
- Setup build pipeline (Parcel 2 or Vite)
- Configure TypeScript with path aliases and verbatimModuleSyntax
- Add testing utilities and React Testing Library setup
- Document patterns in Storybook for visual component documentation
- Setup CI/CD pipeline for automated testing and deployment
- Performance monitoring with bundle size tracking
- Accessibility audits with automated tools (jest-axe, Lighthouse)
- Visual regression testing (Chromatic or similar)
- i18n string extraction and translation workflow
- Error boundary implementation at app and component levels
- Analytics integration for usage tracking
- Documentation site for component library
- Component library package configuration
- NPM publishing setup with semantic versioning
- Versioning strategy (independent vs fixed versions)

**Per-Component Checklist:**
- [ ] Define TypeScript interfaces in @react-types
- [ ] Implement behavior hook in @react-aria
- [ ] Create state hook in @react-stately (if needed)
- [ ] Build component in @react-spectrum with forwardRef
- [ ] Create CSS module with design tokens
- [ ] Write unit tests (behavior, accessibility, edge cases)
- [ ] Create Storybook stories with all variants
- [ ] Add JSDoc comments and usage examples
- [ ] Test keyboard navigation thoroughly
- [ ] Test screen reader compatibility
- [ ] Verify RTL support
- [ ] Test responsive behavior across breakpoints
- [ ] Performance test with large datasets
- [ ] Visual regression snapshot
- [ ] Update documentation

**Quality Gates:**
- Zero TypeScript errors
- 80%+ test coverage
- All accessibility tests passing
- Bundle size within limits
- Visual regression approved
- Documentation complete
- Storybook stories for all variants

---

