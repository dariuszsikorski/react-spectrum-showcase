export interface ComponentVariant {
  name: string
  filename: string
}

export interface ComponentLink {
  reactSpectrum?: string
  webComponent?: string
  storybook?: string
}

export interface Component {
  id: string
  title: string
  category: string
  defaultImage: string
  variants: ComponentVariant[]
  links: ComponentLink
  description?: string
}

export interface ComponentData {
  components: Component[]
  categories: string[]
}
