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
            // @ts-ignore
            finalConfig[key] =
                typeof finalConfig[key] === 'string'
                    ? (m(ThemeCore[key], defaults[key] || '') as string)
                    : Object.prototype.hasOwnProperty.call(defaults, key)
                      ? defaults[key]
                      : finalConfig[key]
        })

        this.themeParams = finalConfig
        return this
    }
}
