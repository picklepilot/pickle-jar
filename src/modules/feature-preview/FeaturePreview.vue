<template>
    <ModalComponent :show-modal="show" :theme="theme" @close="emit('close')">
        <div
            class="flex items-center border-b border-zinc-300/60 p-4 font-medium"
        >
            {{ title }}
        </div>
        <div :class="m('flex', theme.container)">
            <div
                :class="
                    m(
                        componentJarTheme.themeParams.settingsMenuContainer,
                        theme.menuContainer
                    )
                "
            >
                <nav class="flex min-h-full flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col">
                        <li
                            v-for="(feature, idx) in features"
                            :key="`feature-${idx}`"
                            :class="theme.menuItem"
                            :data-enabled="feature.enabled"
                            :data-active="focusedFeatureIdx === idx"
                            @click="focusedFeatureIdx = idx"
                        >
                            <svg
                                v-if="feature.enabled"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6 text-green-500"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>

                            <svg
                                v-else
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                            </svg>

                            <span>{{ feature.name }}</span>
                        </li>
                        <li class="mt-auto">
                            <slot name="nav-bottom" />
                        </li>
                    </ul>
                </nav>
            </div>
            <div :class="theme.mainContentContainer">
                <div
                    :class="
                        m(
                            'flex justify-between border-b border-zinc-300/60',
                            theme.mainContentContainerHeader
                        )
                    "
                >
                    <h2 class="min-w-px grow text-lg font-medium">
                        {{ features[focusedFeatureIdx].name }}
                    </h2>

                    <span class="flex items-center">
                        <BaseButton
                            @click="
                                emit('update:feature', {
                                    name: features[focusedFeatureIdx].name,
                                    enabled:
                                        !features[focusedFeatureIdx].enabled,
                                })
                            "
                            :theme="{
                                baseButton:
                                    'bg-white hover:shadow-sm border border-zinc-300/60 hover:bg-zinc-100',
                            }"
                        >
                            {{
                                features[focusedFeatureIdx].enabled
                                    ? 'Disable'
                                    : 'Enable'
                            }}
                        </BaseButton>
                    </span>
                </div>
                <div
                    :class="
                        m(
                            'overflow-hidden rounded-lg ring-1 ring-zinc-300/60',
                            theme.mainContentContainerBody
                        )
                    "
                >
                    <video
                        v-if="features[focusedFeatureIdx].video"
                        loop
                        autoplay
                        width="100%"
                        height="400px"
                        class="rounded-lg"
                    >
                        <source
                            :src="features[focusedFeatureIdx].video"
                            type="video/webm"
                        />
                    </video>
                    <div
                        v-else
                        class="flex h-80 w-full items-center justify-center overflow-hidden rounded-lg bg-zinc-50"
                    >
                        <span>This is where image/webm should go.</span>
                    </div>
                </div>
                <div
                    data-role="description"
                    v-html="features[focusedFeatureIdx].content"
                />
            </div>
        </div>
    </ModalComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type Feature } from './Feature'
import ModalComponent from '../../components/ModalComponent.vue'
import { m } from '../../utils'
import { useThemeConfigurator } from '../../composables'
import BaseButton from '../../components/BaseButton.vue'

const emit = defineEmits(['close', 'update:feature'])

withDefaults(
    defineProps<{
        features: Feature[]
        theme?: {
            container?: string
            mainContentContainer?: string
            mainContentContainerHeader?: string
            mainContentContainerBody?: string
            menuContainer?: string
            menuItem?: string
            modalBackdrop?: string
            modalMainContainer?: string
            modalMainContentContainer?: string
        }
        title?: string
    }>(),
    {
        theme: () => ({
            container: '',
            mainContentContainer: '',
            mainContentContainerHeader: '',
            mainContentContainerBody: '',
            menuContainer: '',
            menuItem: '',
            modalBackdrop: '',
            modalMainContainer: '',
            modalMainContentContainer: '',
        }),
        title: 'Feature preview',
    }
)

const { componentJarTheme } = useThemeConfigurator()

const focusedFeatureIdx = ref(0)
const show = ref(false)

function closeModal() {
    show.value = false
}

function openModal() {
    show.value = true
}

defineExpose({
    closeModal,
    openModal,
})
</script>
