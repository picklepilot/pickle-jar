import { ThemeCore } from '../themes/ThemeCore'
import { type ThemeParam, type ThemeParams } from '../themes/ThemeParams'
import { m } from '../utils'

export default class ThemeConfigurator {
    public themeParams: ThemeParams

    constructor() {
        this.themeParams = ThemeCore
    }

    public withParams(defaults: Partial<ThemeParams>): ThemeConfigurator {
        const finalConfig: ThemeParams = ThemeCore
        const themeParamNames = Object.keys(defaults) as ThemeParam[]
        themeParamNames.forEach((key: ThemeParam): void => {
            finalConfig[key] = m(ThemeCore[key], defaults[key] || '')
        })

        this.themeParams = finalConfig
        return this
    }
}
