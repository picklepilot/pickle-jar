import type { ThemeParams } from './ThemeParams.js'

export const ThemeCore: ThemeParams = {
    baseButton: 'flex items-center rounded-md font-medium leading-none',
    baseButtonDisabled: 'pointer-events-none opacity-60',
    baseButtonIcon: '',
    baseDropdownInputContainer: '',
    baseDropdownInputText: '',
    baseDropdownMenuContainer: 'relative inline-block text-left',
    baseDropdownMenuHeader: '',
    baseDropdownMenuItem: '',
    baseDropdownMenuItemActiveButton: '',
    baseDropdownMenuItemButton: '',
    baseDropdownMenuItemFocusButton: 'bg-zinc-100',
    baseDropdownMenuItemGroup: '',
    baseDropdownMenuItemIcon: '',
    baseDropdownMenuItems: '',
    baseDropdownMenuTriggerButton: '',
    baseDropdownMenuTriggerButtonActive: '',
    baseTypeaheadContainer: '',
    buttonComboDropdownPrimaryButton: '',
    buttonComboDropdownTriggerButton: '',
    buttonComboDropdownTriggerButtonIcon: '',
    columnManagerContainer: 'flex h-full',
    columnManagerGroupContainer: '',
    columnManagerGroupHeader: '',
    columnManagerGroupsContainer: '',
    columnManagerItem: 'group flex w-full [&.selected]:bg-blue-100',
    columnManagerNewGroupContainer: '',
    columnManagerNewGroupInput: '',
    columnManagerNewGroupInputButton: '',
    comboboxFloatingPanelContainer: '',
    confirmationDialogBackdrop: 'fixed inset-0 bg-black/25',
    confirmationDialogContainer: 'fixed inset-0 overflow-y-auto',
    confirmationDialogContent:
        'flex min-h-full items-center justify-center p-4 text-center',
    confirmationDialogTitle: 'text-xl font-semibold leading-6 text-zinc-900',
    confirmationDialogDescription: 'text-base text-zinc-500',
    confirmationDialogButtonCancel:
        'px-3 py-2.5 bg-transparent border border-transparent text-zinc-800 hover:text-zinc-900 hover:bg-zinc-900/10 hover:border-zinc-900/0',
    confirmationDialogButtonConfirm:
        'px-3 py-2.5 shadow-xs hover:bg-zinc-900/80 rounded-md',
    confirmationDialogProcessing:
        'flex items-center justify-end space-x-1.5 pt-4',
    generalFloatingPanelContainer: '',
    inputSwitch: '',
    inputText:
        'block w-full rounded-md border border-solid border-zinc-300/80 px-3 py-2.5 text-sm leading-none text-zinc-900 ring-[3px] ring-transparent placeholder:text-zinc-400 focus-within:border-zinc-500 focus-within:ring-[3px] focus-within:ring-zinc-200/60',
    inputTextarea: '',
    inputTextareaContainer: '',
    inputTextInvalid:
        'block w-full rounded-md border border-solid border-red-300/80 px-3 py-2.5 text-sm leading-none text-zinc-900 ring-[3px] ring-transparent placeholder:text-zinc-400 focus-within:border-red-500 focus-within:ring-[3px] focus-within:ring-red-200/60',
    modalBackdrop: 'fixed inset-0 bg-black/25',
    modalCloseButton: '',
    modalMainContainer:
        'flex min-h-full items-center justify-center p-4 sm:items-center sm:p-0',
    modalMainContentContainer:
        'relative h-auto w-full transform rounded-xl border border-zinc-100/50 bg-white p-5 shadow-xl transition-all sm:max-w-lg',
    modalScrollContainer:
        'fixed inset-0 z-[9998] w-screen overflow-y-auto p-10',
    popoverMenu: 'relative inline-block text-left',
    popoverMenuButton: '',
    popoverMenuItems:
        'fixed z-10 transform overflow-x-hidden overflow-y-auto rounded-lg bg-white p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm',
    popoverMenuItem: '',
    popoverMenuItemIcon: '',
    settingsMainContentContainer: 'h-full grow overflow-auto',
    settingsMenuContainer:
        'w-72 shrink-0 border-r border-zinc-300/60 bg-zinc-100',
    settingsMenuGroupContainer: '',
    settingsMenuItem: '',
    settingsMenuItemActive: 'bg-zinc-200',
    settingsMenuItemIcon: 'text-sm',
    tabsNavLine: '-mt-px border-zinc-300',
    tabsNavTab: '',
    toolbarButton: '',
    uiWindowToolbarTopMenuEnabled: true,
    uiWindowToolbarWindowCloseButton:
        'border-0 p-0 justify-center rounded-full text-zinc-800 h-6 w-6 leading-none bg-red-500 hover:bg-red-400',
    uiWindowToolbarWindowContainer:
        'border border-zinc-300/80 bg-white shadow-xl',
    uiWindowToolbarWindowTopMenu:
        'border-b border-zinc-300/80 bg-zinc-100 px-3 py-3',
    uiWindowToolbarWindowTopMenuTitle: 'text-sm font-bold text-zinc-500',
}
