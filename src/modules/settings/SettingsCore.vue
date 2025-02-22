<template>
    <div class="flex">
        <div :class="componentJarTheme.themeParams.settingsMenuContainer">
            <nav class="flex min-h-full flex-1 flex-col">
                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li class="text-base font-medium">
                        {{ title || 'Settings' }}
                    </li>
                    <li
                        v-for="(
                            configGroup, groupName
                        ) in settingsConfiguration"
                        :key="groupName"
                        :class="
                            componentJarTheme.themeParams
                                .settingsMenuGroupContainer
                        "
                    >
                        <ul role="list" class="-mx-2">
                            <li
                                class="px-2 pb-2 text-xs font-semibold text-zinc-700"
                            >
                                {{ groupName }}
                            </li>
                            <li
                                v-for="item in configGroup"
                                :key="item.label"
                                :class="
                                    m(
                                        componentJarTheme.themeParams
                                            .settingsMenuItem,
                                        item.active &&
                                            componentJarTheme.themeParams
                                                .settingsMenuItemActive,
                                        item.disabled &&
                                            'pointer-events-none opacity-50'
                                    )
                                "
                                @click="item.onClick"
                            >
                                <i
                                    v-if="item.icon"
                                    class="fa-regular"
                                    :class="[
                                        item.icon,
                                        componentJarTheme.themeParams
                                            .settingsMenuItemIcon,
                                    ]"
                                    aria-hidden="true"
                                />
                                <span>{{ item.label }}</span>
                            </li>
                        </ul>
                    </li>
                    <li class="mt-auto">
                        <slot name="nav-bottom" />
                    </li>
                </ul>
            </nav>
        </div>
        <div
            :class="componentJarTheme.themeParams.settingsMainContentContainer"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { m } from '../../utils'
import { type SettingsConfiguration } from './SettingsModels'
import { useThemeConfigurator } from '../../composables'

withDefaults(
    defineProps<{
        settingsConfiguration?: SettingsConfiguration
        title?: string
    }>(),
    {
        settingsConfiguration: () => ({}),
    }
)

const { componentJarTheme } = useThemeConfigurator()
</script>
