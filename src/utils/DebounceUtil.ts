export function debounce(
    this: any,
    func: (...args: any[]) => any,
    delay: number
): any {
    const _this = this
    let timeoutId: any

    return function (...args: any[]) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            func.apply(_this, args)
        }, delay)
    }
}
