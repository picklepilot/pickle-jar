/**
 * Email validation
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

/**
 * URL validation
 */
export function isValidUrl(url: string): boolean {
    try {
        new URL(url)
        return true
    } catch {
        return false
    }
}

/**
 * Required field validation
 */
export function isRequired(value: any): boolean {
    if (typeof value === 'string') {
        return value.trim().length > 0
    }
    return value !== null && value !== undefined
}

/**
 * Minimum length validation
 */
export function hasMinLength(value: string, minLength: number): boolean {
    return value.length >= minLength
}

/**
 * Maximum length validation
 */
export function hasMaxLength(value: string, maxLength: number): boolean {
    return value.length <= maxLength
}
