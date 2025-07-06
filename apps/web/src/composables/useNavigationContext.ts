import { computed, inject, provide, type ComputedRef } from 'vue'
import { useRoute } from 'vue-router'

const NAVIGATION_CONTEXT_KEY = Symbol('navigation-context')

export interface NavigationItem {
    active?: boolean
    href?: string
    items?: NavigationItem[]
    title: string
}

export interface NavigationContext {
    navigation: ComputedRef<NavigationItem[]>
    previousPage: ComputedRef<NavigationItem | null>
    nextPage: ComputedRef<NavigationItem | null>
}

export function provideNavigationContext() {
    const route = useRoute()
    const navigation = computed(() => [
        {
            title: 'Getting Started',
            items: [
                {
                    title: 'Introduction',
                    href: '/docs/introduction',
                    active: route.path === '/docs/introduction',
                },
                {
                    title: 'Installation',
                    href: '/docs/installation',
                    active: route.path === '/docs/installation',
                },
                {
                    title: 'Quick Start',
                    href: '/docs/quick-start',
                    active: route.path === '/docs/quick-start',
                },
            ],
        },
        {
            title: 'Components',
            items: [
                {
                    title: 'Button',
                    href: '/docs/components/button',
                    active: route.path === '/docs/components/button',
                },
                {
                    title: 'Input',
                    href: '/docs/components/input',
                    active: route.path === '/docs/components/input',
                },
                {
                    title: 'Select',
                    href: '/docs/components/select',
                    active: route.path === '/docs/components/select',
                },
                {
                    title: 'Label',
                    href: '/docs/components/label',
                    active: route.path === '/docs/components/label',
                },
            ],
        },
        {
            title: 'Modules',
            items: [
                {
                    title: 'Column Manager',
                    href: '/docs/components/column-manager',
                    active: route.path === '/docs/components/column-manager',
                },
                {
                    title: 'Command Palette',
                    href: '/docs/modules/command-palette',
                    active: route.path === '/docs/modules/command-palette',
                },
                {
                    title: 'Fluent Query Builder',
                    href: '/docs/modules/fluent-query-builder',
                    active: route.path === '/docs/modules/fluent-query-builder',
                },
                {
                    title: 'Tabs',
                    href: '/docs/modules/tabs',
                    active: route.path === '/docs/modules/tabs',
                },
            ],
        },
    ])

    // Flatten all navigation items for easier traversal
    const allNavigationItems = computed(() => {
        return navigation.value.flatMap(section => section.items)
    })

    // Find current page index
    const currentPageIndex = computed(() => {
        return allNavigationItems.value.findIndex(
            item => item.href === route.path
        )
    })

    // Get previous page
    const previousPage = computed(() => {
        if (currentPageIndex.value > 0) {
            return allNavigationItems.value[currentPageIndex.value - 1]
        }
        return null
    })

    // Get next page
    const nextPage = computed(() => {
        if (
            currentPageIndex.value >= 0 &&
            currentPageIndex.value < allNavigationItems.value.length - 1
        ) {
            return allNavigationItems.value[currentPageIndex.value + 1]
        }
        return null
    })

    const context: NavigationContext = {
        navigation,
        previousPage,
        nextPage,
    }

    provide(NAVIGATION_CONTEXT_KEY, context)
    return context
}

export function useNavigationContext() {
    const context = inject<NavigationContext>(NAVIGATION_CONTEXT_KEY)
    if (!context) {
        throw new Error(
            'useNavigationContext must be used within a NavigationContext'
        )
    }
    return context
}
