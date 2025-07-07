import type { ThemeConfig, ComponentTheme } from '../types/index.js'
import { Z_INDEX } from '../constants/index.js'

/**
 * Default theme configuration
 */
export const defaultTheme: ThemeConfig = {
    primary: '#3b82f6',
    secondary: '#64748b',
    accent: '#f59e0b',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#1e293b',
    textSecondary: '#64748b',
}

/**
 * Dark theme configuration
 */
export const darkTheme: ThemeConfig = {
    primary: '#60a5fa',
    secondary: '#94a3b8',
    accent: '#fbbf24',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f1f5f9',
    textSecondary: '#94a3b8',
}

/**
 * Available themes
 */
export const themes: ComponentTheme[] = [
    { name: 'default', config: defaultTheme },
    { name: 'dark', config: darkTheme },
]

/**
 * Get theme by name
 */
export function getTheme(name: string): ThemeConfig {
    const theme = themes.find(t => t.name === name)
    return theme?.config || defaultTheme
}

/**
 * Apply theme to CSS custom properties
 */
export function applyTheme(theme: ThemeConfig): void {
    const root = document.documentElement

    Object.entries(theme).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value)
    })
}

/**
 * Get z-index value for a specific layer
 */
export function getZIndex(layer: keyof typeof Z_INDEX): string {
    return Z_INDEX[layer]
}

/**
 * Set z-index value for a specific layer
 */
export function setZIndex(layer: keyof typeof Z_INDEX, value: number): void {
    const root = document.documentElement
    const cssVar = `--z-index-${layer.replace(/([A-Z])/g, '-$1').toLowerCase()}`
    root.style.setProperty(cssVar, value.toString())
}

/**
 * Get all z-index values as an object
 */
export function getAllZIndices(): Record<keyof typeof Z_INDEX, string> {
    return { ...Z_INDEX }
}
