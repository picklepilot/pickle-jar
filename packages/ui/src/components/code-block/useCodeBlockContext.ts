import { ref, computed, provide, inject, type Ref, useSlots } from 'vue'

export interface CodeBlockTab {
    id: string
    label: string
    icon?: string
    disabled?: boolean
}

export interface CodeBlockContext {
    tabs: Ref<CodeBlockTab[]>
    activeTab: Ref<string>
    registerTab: (tab: CodeBlockTab) => void
    unregisterTab: (tabId: string) => void
    setActiveTab: (tabId: string) => void
    hasTabs: Ref<boolean>
    hasDemoSlot: Ref<boolean>
}

const CODE_BLOCK_CONTEXT_KEY = Symbol('code-block-context')

export function provideCodeBlockContext(): CodeBlockContext {
    const tabs = ref<CodeBlockTab[]>([])
    const activeTab = ref<string>('')
    const slots = useSlots()

    const hasDemoSlot = computed(() => !!slots.demo)

    const hasTabs = computed(() => !!slots.tabs)

    const registerTab = (tab: CodeBlockTab) => {
        const existingIndex = tabs.value.findIndex(t => t.id === tab.id)
        if (existingIndex >= 0) {
            tabs.value[existingIndex] = tab
        } else {
            tabs.value.push(tab)
        }

        // Set first tab as active if no active tab is set
        if (!activeTab.value && tabs.value.length > 0) {
            activeTab.value = tabs.value[0].id
        }
    }

    const unregisterTab = (tabId: string) => {
        const index = tabs.value.findIndex(t => t.id === tabId)
        if (index >= 0) {
            tabs.value.splice(index, 1)

            // If the active tab was removed, set the first available tab as active
            if (activeTab.value === tabId && tabs.value.length > 0) {
                activeTab.value = tabs.value[0].id
            }
        }
    }

    const setActiveTab = (tabId: string) => {
        const tab = tabs.value.find(t => t.id === tabId)
        if (tab && !tab.disabled) {
            activeTab.value = tabId
        }
    }

    const context: CodeBlockContext = {
        tabs,
        activeTab,
        registerTab,
        unregisterTab,
        setActiveTab,
        hasTabs,
        hasDemoSlot,
    }

    provide(CODE_BLOCK_CONTEXT_KEY, context)
    return context
}

export function useCodeBlockContext(): CodeBlockContext {
    const context = inject<CodeBlockContext>(CODE_BLOCK_CONTEXT_KEY)
    if (!context) {
        throw new Error(
            'useCodeBlockContext must be used within a CodeBlock component'
        )
    }
    return context
}
