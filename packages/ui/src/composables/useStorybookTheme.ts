import { ref, onMounted, watch, computed } from 'vue'

interface ThemeState {
    isDark: boolean
    themeClass: string
}

/**
 * Composable for managing theme state in Storybook with Tailwind CSS v4
 * Assumes the theme is controlled by a class on the <html> element (e.g., .dark)
 */
export function useStorybookTheme() {
    const themeState = ref<ThemeState>({
        isDark: false,
        themeClass: 'light',
    })

    // Function to update theme state based on document class
    const updateThemeState = () => {
        const isDark = document.documentElement.classList.contains('dark')
        themeState.value = {
            isDark,
            themeClass: isDark ? 'dark' : 'light',
        }
    }

    // Function to manually toggle theme
    const toggleTheme = () => {
        const newIsDark = !themeState.value.isDark
        document.documentElement.classList.toggle('dark', newIsDark)
        updateThemeState()

        // Dispatch a custom event for other components to listen to
        window.dispatchEvent(
            new CustomEvent('storybook-theme-change', {
                detail: {
                    isDark: newIsDark,
                    themeClass: newIsDark ? 'dark' : 'light',
                },
            })
        )
    }

    // Function to set specific theme
    const setTheme = (isDark: boolean) => {
        document.documentElement.classList.toggle('dark', isDark)
        updateThemeState()

        window.dispatchEvent(
            new CustomEvent('storybook-theme-change', {
                detail: {
                    isDark,
                    themeClass: isDark ? 'dark' : 'light',
                },
            })
        )
    }

    // Listen for theme changes from Storybook
    const handleThemeChange = (event: CustomEvent) => {
        if (event.detail) {
            const { isDark } = event.detail
            document.documentElement.classList.toggle('dark', isDark)
            updateThemeState()
        }
    }

    // Watch for theme state changes (useful for debugging)
    watch(
        () => themeState.value,
        newState => {
            console.log('Theme state changed:', newState)
        },
        { deep: true }
    )

    onMounted(() => {
        // Initialize theme state based on current document class
        updateThemeState()

        // Listen for theme change events
        window.addEventListener(
            'storybook-theme-change',
            handleThemeChange as EventListener
        )

        // Watch for changes to document element class
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (
                    mutation.type === 'attributes' &&
                    mutation.attributeName === 'class'
                ) {
                    updateThemeState()
                }
            })
        })

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        })

        // Cleanup function
        return () => {
            window.removeEventListener(
                'storybook-theme-change',
                handleThemeChange as EventListener
            )
            observer.disconnect()
        }
    })

    return {
        themeState,
        isDark: computed(() => themeState.value.isDark),
        themeClass: computed(() => themeState.value.themeClass),
        toggleTheme,
        setTheme,
        updateThemeState,
    }
}
