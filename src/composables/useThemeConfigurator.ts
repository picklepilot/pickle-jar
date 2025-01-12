import { inject } from 'vue'
import type { ThemeConfigurator } from '../utils'

export function useThemeConfigurator() {
    const componentJarTheme = inject(
        'componentJarTheme'
    ) as unknown as ThemeConfigurator

    return {
        componentJarTheme,
    }
}
