export { default as BaseAlert } from './components/BaseAlert.vue'
export { default as BaseBadge } from './components/BaseBadge.vue'
export { default as BaseButton } from './components/BaseButton.vue'
export { default as BaseCard } from './components/BaseCard.vue'
export { default as BaseCombobox } from './components/BaseCombobox.vue'
export { default as BaseDropdownMenu } from './components/BaseDropdownMenu.vue'
export { default as BasePopover } from './components/BasePopover.vue'
export { default as BaseToolbar } from './components/BaseToolbar.vue'
export { default as BaseTypeahead } from './components/BaseTypeahead.vue'
export { default as ButtonComboDropdown } from './components/ButtonComboDropdown.vue'
export { default as ButtonGroup } from './components/ButtonGroup.vue'
export { default as ColorPicker } from './components/ColorPicker.vue'
export { default as ColumnManager } from './components/ColumnManager.vue'
export { default as EmptyState } from './components/EmptyState.vue'
export { default as InputLabel } from './components/InputLabel.vue'
export { default as InputSwitch } from './components/InputSwitch.vue'
export { default as InputText } from './components/InputText.vue'
export { default as InputTextarea } from './components/InputTextarea.vue'
export { default as ModalComponent } from './components/ModalComponent.vue'
export { default as SortableComponent } from './components/SortableComponent.vue'
export { default as TabsNav } from './components/TabsNav.vue'
export { default as TipsPanel } from './components/TipsPanel.vue'

export { SettingsCore, type SettingsConfiguration } from './modules/settings'
export {
    ConfirmationDialog,
    useConfirmationDialogStore,
} from './modules/confirmation-dialog'
export { FeaturePreview, type Feature } from './modules/feature-preview'
export { NavDrawer } from './modules/nav-drawer'

export {
    UiWindow,
    UiWindowResizer,
    UiWindowToolbar,
} from './modules/ui-window-toolbar'

// export type {
//     ColumnGroupDefinition,
//     DropdownItem,
//     Tab,
//     ToolbarItemGroup,
// } from './types'

export * from './types'

export { m } from './utils'

export { ThemeConfigurator } from './utils'

export { useThemeConfigurator } from './composables/useThemeConfigurator'
