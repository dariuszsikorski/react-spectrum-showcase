import { useResponsive } from '../../hooks/useResponsive'
import { GridItem } from './GridItem'

// Documentation URLs mapping
const DOCUMENTATION_URLS: Record<string, string> = {
  'ActionButton': 'https://react-spectrum.adobe.com/react-spectrum/ActionButton.html',
  'ActionGroup': 'https://react-spectrum.adobe.com/react-spectrum/ActionGroup.html',
  'Button': 'https://react-spectrum.adobe.com/react-spectrum/Button.html',
  'ButtonGroup': 'https://react-spectrum.adobe.com/react-spectrum/ButtonGroup.html',
  'FileTrigger': 'https://react-spectrum.adobe.com/react-spectrum/FileTrigger.html',
  'LogicButton': 'https://react-spectrum.adobe.com/react-spectrum/LogicButton.html',
  'ToggleButton': 'https://react-spectrum.adobe.com/react-spectrum/ToggleButton.html',
  'ActionBar': 'https://react-spectrum.adobe.com/react-spectrum/ActionBar.html',
  'ActionMenu': 'https://react-spectrum.adobe.com/react-spectrum/ActionMenu.html',
  'ListBox': 'https://react-spectrum.adobe.com/react-spectrum/ListBox.html',
  'ListView': 'https://react-spectrum.adobe.com/react-spectrum/ListView.html',
  'Menu': 'https://react-spectrum.adobe.com/react-spectrum/Menu.html',
  'MenuTrigger': 'https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html',
  'TableView': 'https://react-spectrum.adobe.com/react-spectrum/TableView.html',
  'TagGroup': 'https://react-spectrum.adobe.com/react-spectrum/TagGroup.html',
  'TreeView': 'https://react-spectrum.adobe.com/react-spectrum/TreeView.html',
  'ColorArea': 'https://react-spectrum.adobe.com/react-spectrum/ColorArea.html',
  'ColorField': 'https://react-spectrum.adobe.com/react-spectrum/ColorField.html',
  'ColorPicker': 'https://react-spectrum.adobe.com/react-spectrum/ColorPicker.html',
  'ColorSlider': 'https://react-spectrum.adobe.com/react-spectrum/ColorSlider.html',
  'ColorSwatch': 'https://react-spectrum.adobe.com/react-spectrum/ColorSwatch.html',
  'ColorSwatchPicker': 'https://react-spectrum.adobe.com/react-spectrum/ColorSwatchPicker.html',
  'ColorWheel': 'https://react-spectrum.adobe.com/react-spectrum/ColorWheel.html',
  'Calendar': 'https://react-spectrum.adobe.com/react-spectrum/Calendar.html',
  'DateField': 'https://react-spectrum.adobe.com/react-spectrum/DateField.html',
  'DatePicker': 'https://react-spectrum.adobe.com/react-spectrum/DatePicker.html',
  'DateRangePicker': 'https://react-spectrum.adobe.com/react-spectrum/DateRangePicker.html',
  'RangeCalendar': 'https://react-spectrum.adobe.com/react-spectrum/RangeCalendar.html',
  'TimeField': 'https://react-spectrum.adobe.com/react-spectrum/TimeField.html',
  'DropZone': 'https://react-spectrum.adobe.com/react-spectrum/DropZone.html',
  'Checkbox': 'https://react-spectrum.adobe.com/react-spectrum/Checkbox.html',
  'CheckboxGroup': 'https://react-spectrum.adobe.com/react-spectrum/CheckboxGroup.html',
  'Form': 'https://react-spectrum.adobe.com/react-spectrum/Form.html',
  'NumberField': 'https://react-spectrum.adobe.com/react-spectrum/NumberField.html',
  'RadioGroup': 'https://react-spectrum.adobe.com/react-spectrum/RadioGroup.html',
  'RangeSlider': 'https://react-spectrum.adobe.com/react-spectrum/RangeSlider.html',
  'SearchField': 'https://react-spectrum.adobe.com/react-spectrum/SearchField.html',
  'Slider': 'https://react-spectrum.adobe.com/react-spectrum/Slider.html',
  'Switch': 'https://react-spectrum.adobe.com/react-spectrum/Switch.html',
  'TextArea': 'https://react-spectrum.adobe.com/react-spectrum/TextArea.html',
  'TextField': 'https://react-spectrum.adobe.com/react-spectrum/TextField.html',
  'Flex': 'https://react-spectrum.adobe.com/react-spectrum/Flex.html',
  'Grid': 'https://react-spectrum.adobe.com/react-spectrum/Grid.html',
  'View': 'https://react-spectrum.adobe.com/react-spectrum/View.html',
  'Well': 'https://react-spectrum.adobe.com/react-spectrum/Well.html',
  'Accordion': 'https://react-spectrum.adobe.com/react-spectrum/Accordion.html',
  'Breadcrumbs': 'https://react-spectrum.adobe.com/react-spectrum/Breadcrumbs.html',
  'Disclosure': 'https://react-spectrum.adobe.com/react-spectrum/Disclosure.html',
  'Link': 'https://react-spectrum.adobe.com/react-spectrum/Link.html',
  'Tabs': 'https://react-spectrum.adobe.com/react-spectrum/Tabs.html',
  'AlertDialog': 'https://react-spectrum.adobe.com/react-spectrum/AlertDialog.html',
  'ContextualHelp': 'https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html',
  'Dialog': 'https://react-spectrum.adobe.com/react-spectrum/Dialog.html',
  'DialogContainer': 'https://react-spectrum.adobe.com/react-spectrum/DialogContainer.html',
  'DialogTrigger': 'https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html',
  'Tooltip': 'https://react-spectrum.adobe.com/react-spectrum/Tooltip.html',
  'ComboBox': 'https://react-spectrum.adobe.com/react-spectrum/ComboBox.html',
  'Picker': 'https://react-spectrum.adobe.com/react-spectrum/Picker.html',
  'Badge': 'https://react-spectrum.adobe.com/react-spectrum/Badge.html',
  'InlineAlert': 'https://react-spectrum.adobe.com/react-spectrum/InlineAlert.html',
  'LabeledValue': 'https://react-spectrum.adobe.com/react-spectrum/LabeledValue.html',
  'Meter': 'https://react-spectrum.adobe.com/react-spectrum/Meter.html',
  'ProgressBar': 'https://react-spectrum.adobe.com/react-spectrum/ProgressBar.html',
  'ProgressCircle': 'https://react-spectrum.adobe.com/react-spectrum/ProgressCircle.html',
  'StatusLight': 'https://react-spectrum.adobe.com/react-spectrum/StatusLight.html',
  'Toast': 'https://react-spectrum.adobe.com/react-spectrum/Toast.html',
  'Avatar': 'https://react-spectrum.adobe.com/react-spectrum/Avatar.html',
  'Content': 'https://react-spectrum.adobe.com/react-spectrum/Content.html',
  'Divider': 'https://react-spectrum.adobe.com/react-spectrum/Divider.html',
  'Footer': 'https://react-spectrum.adobe.com/react-spectrum/Footer.html',
  'Header': 'https://react-spectrum.adobe.com/react-spectrum/Header.html',
  'Heading': 'https://react-spectrum.adobe.com/react-spectrum/Heading.html',
  'IllustratedMessage': 'https://react-spectrum.adobe.com/react-spectrum/IllustratedMessage.html',
  'Image': 'https://react-spectrum.adobe.com/react-spectrum/Image.html',
  'Keyboard': 'https://react-spectrum.adobe.com/react-spectrum/Keyboard.html',
  'Text': 'https://react-spectrum.adobe.com/react-spectrum/Text.html'
}
import { PhosphorIconsDemo } from '../Demos/PhosphorIconsDemo'
import { CalendarDemo } from '../Demos/CalendarDemo'
import { ButtonDemo } from '../Demos/ButtonDemo'
import { ButtonGroupDemo } from '../Demos/ButtonGroupDemo'
import { ActionButtonDemo } from '../Demos/ActionButtonDemo'
import { ActionGroupDemo } from '../Demos/ActionGroupDemo'
import { ActionMenuDemo } from '../Demos/ActionMenuDemo'
import { TextFieldDemo } from '../Demos/TextFieldDemo'
import { TextAreaDemo } from '../Demos/TextAreaDemo'
import { NumberFieldDemo } from '../Demos/NumberFieldDemo'
import { SearchFieldDemo } from '../Demos/SearchFieldDemo'
import { CheckboxDemo } from '../Demos/CheckboxDemo'
import { CheckboxGroupDemo } from '../Demos/CheckboxGroupDemo'
import { RadioGroupDemo } from '../Demos/RadioGroupDemo'
import { SwitchDemo } from '../Demos/SwitchDemo'
import { SliderDemo } from '../Demos/SliderDemo'
import { RangeSliderDemo } from '../Demos/RangeSliderDemo'
import { PickerDemo } from '../Demos/PickerDemo'
import { ComboBoxDemo } from '../Demos/ComboBoxDemo'
import { ListBoxDemo } from '../Demos/ListBoxDemo'
import { MenuDemo } from '../Demos/MenuDemo'
import { ProgressBarDemo } from '../Demos/ProgressBarDemo'
import { ProgressCircleDemo } from '../Demos/ProgressCircleDemo'
import { MeterDemo } from '../Demos/MeterDemo'
import { StatusLightDemo } from '../Demos/StatusLightDemo'
import { BadgeDemo } from '../Demos/BadgeDemo'
import { InlineAlertDemo } from '../Demos/InlineAlertDemo'
import { TabsDemo } from '../Demos/TabsDemo'
import { BreadcrumbsDemo } from '../Demos/BreadcrumbsDemo'
import { LinkDemo } from '../Demos/LinkDemo'
import { DividerDemo } from '../Demos/DividerDemo'
import { TextDemo } from '../Demos/TextDemo'
import { HeadingDemo } from '../Demos/HeadingDemo'
import { AvatarDemo } from '../Demos/AvatarDemo'
import { MenuTriggerDemo } from '../Demos/MenuTriggerDemo'
import { ToastDemo } from '../Demos/ToastDemo'
import { DialogDemo } from '../Demos/DialogDemo'
import { AlertDialogDemo } from '../Demos/AlertDialogDemo'
import { DialogTriggerDemo } from '../Demos/DialogTriggerDemo'
import { TooltipDemo } from '../Demos/TooltipDemo'
import { ColorPickerDemo } from '../Demos/ColorPickerDemo'
import { ColorAreaDemo } from '../Demos/ColorAreaDemo'
import { ColorSliderDemo } from '../Demos/ColorSliderDemo'
import { ColorWheelDemo } from '../Demos/ColorWheelDemo'
import { ColorSwatchDemo } from '../Demos/ColorSwatchDemo'
import { ColorSwatchPickerDemo } from '../Demos/ColorSwatchPickerDemo'
import { ColorFieldDemo } from '../Demos/ColorFieldDemo'
import { DatePickerDemo } from '../Demos/DatePickerDemo'
import { DateFieldDemo } from '../Demos/DateFieldDemo'
import { DateRangePickerDemo } from '../Demos/DateRangePickerDemo'
import { RangeCalendarDemo } from '../Demos/RangeCalendarDemo'
import { TimeFieldDemo } from '../Demos/TimeFieldDemo'
import { FlexDemo } from '../Demos/FlexDemo'
import { GridDemo } from '../Demos/GridDemo'
import { ViewDemo } from '../Demos/ViewDemo'
import { WellDemo } from '../Demos/WellDemo'
import { DialogContainerDemo } from '../Demos/DialogContainerDemo'
import { FileTriggerDemo } from '../Demos/FileTriggerDemo'
import { FormDemo } from '../Demos/FormDemo'
import { IllustratedMessageDemo } from '../Demos/IllustratedMessageDemo'
import { ImageDemo } from '../Demos/ImageDemo'
import { LabeledValueDemo } from '../Demos/LabeledValueDemo'
import { ContentDemo } from '../Demos/ContentDemo'
import { ToggleButtonDemo } from '../Demos/ToggleButtonDemo'
import { DisclosureDemo } from '../Demos/DisclosureDemo'
import { AccordionDemo } from '../Demos/AccordionDemo'
import { LogicButtonDemo } from '../Demos/LogicButtonDemo'
import { ContextualHelpDemo } from '../Demos/ContextualHelpDemo'
import { ActionBarDemo } from '../Demos/ActionBarDemo'
import { DropZoneDemo } from '../Demos/DropZoneDemo'
import { TableViewDemo } from '../Demos/TableViewDemo'
import { ListViewDemo } from '../Demos/ListViewDemo'
import { TreeViewDemo } from '../Demos/TreeViewDemo'
import { TagGroupDemo } from '../Demos/TagGroupDemo'
import { PopoverDemo } from '../Demos/PopoverDemo'
import './Grid.css'

interface ComponentItem {
  title: string
  component: React.ComponentType
}

interface ComponentCategory {
  title: string
  components: ComponentItem[]
}

// Utility function to generate component IDs
export const generateComponentId = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, '-')
}

// Categorized components following Adobe React Spectrum official structure
export const componentCategories: ComponentCategory[] = [
  {
    title: 'Icons',
    components: [
      { title: 'Phosphor Icons', component: PhosphorIconsDemo },
    ]
  },
  {
    title: 'Buttons',
    components: [
      { title: 'ActionButton', component: ActionButtonDemo },
      { title: 'ActionGroup', component: ActionGroupDemo },
      { title: 'Button', component: ButtonDemo },
      { title: 'ButtonGroup', component: ButtonGroupDemo },
      { title: 'FileTrigger', component: FileTriggerDemo },
      { title: 'LogicButton', component: LogicButtonDemo },
      { title: 'ToggleButton', component: ToggleButtonDemo },
    ]
  },
  {
    title: 'Collections',
    components: [
      { title: 'ActionBar', component: ActionBarDemo },
      { title: 'ActionMenu', component: ActionMenuDemo },
      { title: 'ListBox', component: ListBoxDemo },
      { title: 'ListView', component: ListViewDemo },
      { title: 'Menu', component: MenuDemo },
      { title: 'MenuTrigger', component: MenuTriggerDemo },
      { title: 'TableView', component: TableViewDemo },
      { title: 'TagGroup', component: TagGroupDemo },
      { title: 'TreeView', component: TreeViewDemo },
    ]
  },
  {
    title: 'Color',
    components: [
      { title: 'ColorArea', component: ColorAreaDemo },
      { title: 'ColorField', component: ColorFieldDemo },
      { title: 'ColorPicker', component: ColorPickerDemo },
      { title: 'ColorSlider', component: ColorSliderDemo },
      { title: 'ColorSwatch', component: ColorSwatchDemo },
      { title: 'ColorSwatchPicker', component: ColorSwatchPickerDemo },
      { title: 'ColorWheel', component: ColorWheelDemo },
    ]
  },
  {
    title: 'Date and Time',
    components: [
      { title: 'Calendar', component: CalendarDemo },
      { title: 'DateField', component: DateFieldDemo },
      { title: 'DatePicker', component: DatePickerDemo },
      { title: 'DateRangePicker', component: DateRangePickerDemo },
      { title: 'RangeCalendar', component: RangeCalendarDemo },
      { title: 'TimeField', component: TimeFieldDemo },
    ]
  },
  {
    title: 'Drag and drop',
    components: [
      { title: 'DropZone', component: DropZoneDemo },
    ]
  },
  {
    title: 'Forms',
    components: [
      { title: 'Checkbox', component: CheckboxDemo },
      { title: 'CheckboxGroup', component: CheckboxGroupDemo },
      { title: 'Form', component: FormDemo },
      { title: 'NumberField', component: NumberFieldDemo },
      { title: 'RadioGroup', component: RadioGroupDemo },
      { title: 'RangeSlider', component: RangeSliderDemo },
      { title: 'SearchField', component: SearchFieldDemo },
      { title: 'Slider', component: SliderDemo },
      { title: 'Switch', component: SwitchDemo },
      { title: 'TextArea', component: TextAreaDemo },
      { title: 'TextField', component: TextFieldDemo },
    ]
  },
  {
    title: 'Layout',
    components: [
      { title: 'Flex', component: FlexDemo },
      { title: 'Grid', component: GridDemo },
      { title: 'View', component: ViewDemo },
      { title: 'Well', component: WellDemo },
    ]
  },
  {
    title: 'Navigation',
    components: [
      { title: 'Accordion', component: AccordionDemo },
      { title: 'Breadcrumbs', component: BreadcrumbsDemo },
      { title: 'Disclosure', component: DisclosureDemo },
      { title: 'Link', component: LinkDemo },
      { title: 'Tabs', component: TabsDemo },
    ]
  },
  {
    title: 'Overlays',
    components: [
      { title: 'AlertDialog', component: AlertDialogDemo },
      { title: 'ContextualHelp', component: ContextualHelpDemo },
      { title: 'Dialog', component: DialogDemo },
      { title: 'DialogContainer', component: DialogContainerDemo },
      { title: 'DialogTrigger', component: DialogTriggerDemo },
      { title: 'Popover', component: PopoverDemo },
      { title: 'Tooltip', component: TooltipDemo },
    ]
  },
  {
    title: 'Pickers',
    components: [
      { title: 'ComboBox', component: ComboBoxDemo },
      { title: 'Picker', component: PickerDemo },
    ]
  },
  {
    title: 'Status',
    components: [
      { title: 'Badge', component: BadgeDemo },
      { title: 'InlineAlert', component: InlineAlertDemo },
      { title: 'LabeledValue', component: LabeledValueDemo },
      { title: 'Meter', component: MeterDemo },
      { title: 'ProgressBar', component: ProgressBarDemo },
      { title: 'ProgressCircle', component: ProgressCircleDemo },
      { title: 'StatusLight', component: StatusLightDemo },
      { title: 'Toast', component: ToastDemo },
    ]
  },
  {
    title: 'Content',
    components: [
      { title: 'Avatar', component: AvatarDemo },
      { title: 'Content', component: ContentDemo },
      { title: 'Divider', component: DividerDemo },
      { title: 'Heading', component: HeadingDemo },
      { title: 'IllustratedMessage', component: IllustratedMessageDemo },
      { title: 'Image', component: ImageDemo },
      { title: 'Text', component: TextDemo },
      { title: 'View', component: ViewDemo },
    ]
  },
]

// Flatten for backward compatibility and easy iteration
export const demoComponents: ComponentItem[] = componentCategories.reduce(
  (acc, category) => [...acc, ...category.components],
  [] as ComponentItem[]
)

export function GridGallery() {
  const { isMobile } = useResponsive()
  const responsiveClass = isMobile ? 'is-mobile' : 'is-desktop'
  
  return (
    <div className="GridGallery_container">
      <div className={`GridGallery ${responsiveClass}`}>
        {componentCategories.map((category) => (
          <div key={category.title} className="GridGallery_category">
            <h2 className="GridGallery_categoryTitle">{category.title}</h2>
            <div className="GridGallery_categoryGrid">
              {category.components.map((demo, i) => {
                const DemoComponent = demo.component
                const componentId = generateComponentId(demo.title)
                return (
                  <GridItem 
                    key={i} 
                    title={demo.title} 
                    id={componentId}
                    documentationUrl={DOCUMENTATION_URLS[demo.title]}
                  >
                    <DemoComponent />
                  </GridItem>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GridGallery
