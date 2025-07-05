import { Ref } from 'vue'

export interface TabsProps {
    /** The default selected tab value */
    defaultValue?: string
    /** The currently selected tab value */
    value?: string
    /** Callback when tab selection changes */
    onValueChange?: (value: string) => void
    /** The orientation of the tabs */
    orientation?: 'horizontal' | 'vertical'
    /** Whether the tabs are disabled */
    disabled?: boolean
    /** CSS class to apply to the root element */
    class?: string
}

export interface TabsEmits {
    /** Emitted when tab selection changes */
    'update:value': [value: string]
    /** Emitted when tab selection changes */
    valueChange: [value: string]
}

export interface TabsListProps {
    /** Whether the tabs list is disabled */
    disabled?: boolean
    /** The orientation of the tabs list */
    orientation?: 'horizontal' | 'vertical'
    /** CSS class to apply to the list element */
    class?: string
}

export interface TabsListEmits {
    /** No specific emits for TabsList */
}

export interface TabsTriggerProps {
    /** The value of this tab trigger */
    value: string
    /** Whether this tab trigger is disabled */
    disabled?: boolean
    /** Whether this tab trigger is selected */
    selected?: boolean
    /** CSS class to apply to the trigger element */
    class?: string
}

export interface TabsTriggerEmits {
    /** Emitted when the trigger is clicked */
    click: [event: MouseEvent]
    /** Emitted when the trigger is selected */
    select: [value: string]
    /** Emitted when the trigger is hovered */
    mouseenter: [value: string]
    /** Emitted when the trigger is not hovered */
    mouseleave: [value: string]
}

export interface TabsContentProps {
    /** The value of this tab content */
    value: string
    /** Whether this tab content is selected */
    selected?: boolean
    /** CSS class to apply to the content element */
    class?: string
}

export interface TabsContentEmits {
    /** No specific emits for TabsContent */
}

export interface TabsPanelProps {
    /** The value of this tab panel */
    value: string
    /** Whether this tab panel is selected */
    selected?: boolean
    /** CSS class to apply to the panel element */
    class?: string
}

export interface TabsPanelEmits {
    /** No specific emits for TabsPanel */
}

export interface TabsContext {
    /** The currently selected tab value */
    selectedValue: Ref<string>
    /** The orientation of the tabs */
    orientation: Ref<'horizontal' | 'vertical'>
    /** Whether the tabs are disabled */
    disabled: Ref<boolean>
    /** Method to select a tab */
    selectTab: (value: string) => void
    /** Method to register a tab */
    registerTab: (value: string) => void
    /** Method to unregister a tab */
    unregisterTab: (value: string) => void
}

export interface TabsListContext {
    /** Register a tab element for background animation */
    registerTabElement: (value: string, element: HTMLElement) => void
    /** Unregister a tab element */
    unregisterTabElement: (value: string) => void
    /** Handle tab hover for background animation */
    handleTabHover: (value: string) => void
    /** Handle tab leave for background animation */
    handleTabLeave: () => void
    /** Handle tab select for background animation */
    handleTabSelect: (value: string) => void
    /** The orientation of the tabs list */
    orientation: Ref<'horizontal' | 'vertical'>
}
