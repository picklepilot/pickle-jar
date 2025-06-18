<template>
    <div
        ref="uiWindow"
        :class="
            m(
                'ui-window-container resize-container fixed z-9997 flex flex-col overflow-hidden',
                componentJarTheme.themeParams.uiWindowToolbarWindowContainer,
                fullscreen && 'rounded-0'
            )
        "
        :style="effectivePositions"
    >
        <div
            v-if="componentJarTheme.themeParams.uiWindowToolbarTopMenuEnabled"
            :class="
                m(
                    'ui-window-toolbar flex shrink-0 cursor-move items-center justify-between',
                    componentJarTheme.themeParams.uiWindowToolbarWindowTopMenu
                )
            "
            @mousedown="dragMouseDown"
            @dblclick="tfs"
        >
            <span
                v-html="title"
                :class="
                    m(
                        'pointer-events-none',
                        componentJarTheme.themeParams
                            .uiWindowToolbarWindowTopMenuTitle
                    )
                "
            />
            <span>
                <BaseButton
                    @click="$emit('close', props.id)"
                    variant="outline"
                    :theme="{
                        baseButton:
                            'bg-transparent border-none hover:bg-transparent hover:text-[var(--primary-foreground)]',
                    }"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </BaseButton>
            </span>
        </div>

        <BaseButton
            v-else
            @click="$emit('close', props.id)"
            variant="outline"
            :theme="{
                baseButton:
                    'bg-transparent border-none hover:bg-transparent hover:text-[var(--primary-foreground)]',
            }"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                />
            </svg>
        </BaseButton>

        <component
            :is="effectiveComponent"
            v-bind="componentProps"
            class="min-h-[1px] grow"
        />

        <UiWindowResizer
            v-for="resizer in resizerConfig"
            :key="resizer.direction"
            v-bind="resizer"
            @resize="resizeSetup"
        />
    </div>
</template>

<script setup lang="ts">
import { defineProps, inject, ref, watch } from 'vue'
import BaseButton from '../../components/BaseButton.vue'
import UiWindowResizer from './UiWindowResizer.vue'
import { m, type ThemeConfigurator } from '../../utils'

const props = withDefaults(
    defineProps<{
        componentProps: any
        effectiveComponent: any
        height?: string
        id: string
        left?: string
        title: string
        top?: string
        width?: string
    }>(),
    {
        height: '500px',
        left: '100px',
        top: '100px',
        width: '1000px',
    }
)

const PADDING = 10

const fullscreen = ref(false)
const originalWidth = ref(0)
const originalHeight = ref(0)
const originalX = ref(0)
const originalY = ref(0)
const uiWindow = ref()
const originalMouseX = ref(0)
const originalMouseY = ref(0)
const minimumSize = ref(300)
const dir = ref('')
const uiWindowRect = ref({ width: 0, height: 0, left: 0, top: 0 })
const viewportSizes = ref({
    bottom: window.innerHeight - PADDING,
    left: PADDING,
    right: window.innerWidth - PADDING,
    top: PADDING,
})

/* useResizeObserver(uiWindow, (entries) => {
    const entry = entries[0]
    const { width, height } = entry.contentRect
    // windowSize.value = { width, height }
}) */

const resizerConfig = ref<{ direction: string; classes?: string }[]>([
    {
        direction: '*',
        classes: 'bottom-0 right-0 z-11 h-4 w-4 cursor-se-resize',
    },

    {
        direction: 'horizontal',
        classes: 'bottom-0 right-0 h-full w-2 cursor-e-resize',
    },

    {
        direction: 'vertical',
        classes: '-bottom-2 left-0 h-3 w-full cursor-s-resize',
    },

    {
        direction: 'w',
        classes: 'bottom-0 left-0 h-full w-3 cursor-w-resize',
    },

    {
        direction: 'n',
        classes: 'left-0 top-0 h-3 w-full cursor-n-resize',
    },

    {
        direction: 'sw',
        classes: 'bottom-0 left-0 z-11 h-4 w-4 cursor-sw-resize',
    },

    {
        direction: 'nw',
        classes: 'left-0 top-0 z-11 h-4 w-4 cursor-nw-resize',
    },

    {
        direction: 'ne',
        classes: 'right-0 top-0 z-11 h-4 w-4 cursor-ne-resize',
    },
])

const positions = ref({
    clientX: undefined,
    clientY: undefined,
    movementX: 0,
    movementY: 0,
})

const effectivePositions = ref<{
    bottom: string
    height: string
    left: string
    top: string
    width: string
}>({
    bottom: 'auto',
    height: props.height,
    left: props.left,
    top: props.top,
    width: props.width,
})

const componentJarTheme = inject(
    'componentJarTheme'
) as unknown as ThemeConfigurator

watch([() => props.width, () => props.left], () => {
    effectivePositions.value.width = props.width
    effectivePositions.value.left = props.left
})

function resizeSetup(
    params: { direction: string; event: MouseEvent } /*e: MouseEvent*/
) {
    dir.value = params.direction
    const e = params.event

    e.preventDefault()
    e.stopPropagation()

    originalWidth.value = parseFloat(
        getComputedStyle(uiWindow.value, null)
            .getPropertyValue('width')
            .replace('px', '')
    )

    originalHeight.value = parseFloat(
        getComputedStyle(uiWindow.value, null)
            .getPropertyValue('height')
            .replace('px', '')
    )

    uiWindowRect.value = uiWindow.value.getBoundingClientRect()
    originalX.value = uiWindow.value.getBoundingClientRect().left
    originalY.value = uiWindow.value.getBoundingClientRect().top

    originalMouseX.value = e.pageX
    originalMouseY.value = e.pageY

    // Keep window sizes up to date
    viewportSizes.value = {
        bottom: window.innerHeight - PADDING,
        left: PADDING,
        right: window.innerWidth - PADDING,
        top: PADDING,
    }

    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResize)
}

function resize(e: any) {
    const width = ['w', 'sw', 'nw'].includes(dir.value)
        ? originalWidth.value - (e.pageX - originalMouseX.value)
        : originalWidth.value + (e.pageX - originalMouseX.value)

    const dw = e.pageX - originalMouseX.value

    const height = ['nw', 'ne', 'n'].includes(dir.value)
        ? originalHeight.value - (e.pageY - originalMouseY.value)
        : originalHeight.value + (e.pageY - originalMouseY.value)

    const dh = e.pageY - originalMouseY.value

    if (positions.value) {
        positions.value.movementX = (positions.value.clientX || 0) - e.clientX
        positions.value.movementY = (positions.value.clientY || 0) - e.clientY
    }

    if (
        width > minimumSize.value &&
        ['horizontal', '*', 'w', 'sw', 'nw', 'ne'].includes(dir.value)
    ) {
        if (
            e.clientX < viewportSizes.value.right - PADDING &&
            e.clientX > viewportSizes.value.left + PADDING
        ) {
            effectivePositions.value.width = width + 'px'

            if (['w', 'sw', 'nw'].includes(dir.value)) {
                effectivePositions.value.left = originalX.value + dw + 'px'
            }
        }
    }

    if (
        height > minimumSize.value &&
        ['vertical', '*', 'sw', 'nw', 'ne', 'n'].includes(dir.value)
    ) {
        if (
            e.clientY < viewportSizes.value.bottom - PADDING &&
            e.clientY > viewportSizes.value.top + PADDING
        ) {
            effectivePositions.value.height = height + 'px'
            if (['nw', 'ne', 'n'].includes(dir.value)) {
                effectivePositions.value.top = originalY.value + dh + 'px'
            }
        }
    }
}

function stopResize() {
    dir.value = ''
    window.removeEventListener('mousemove', resize)
}

function dragMouseDown(event: any) {
    if (!event.target.classList.contains('ui-window-toolbar')) {
        console.warn('dragMouseDown not a class')
        return false
    }

    // Sync various size caches
    uiWindowRect.value = uiWindow.value.getBoundingClientRect()
    viewportSizes.value = {
        bottom: window.innerHeight - PADDING,
        left: PADDING,
        right: window.innerWidth - PADDING,
        top: PADDING,
    }

    event.preventDefault()
    positions.value.clientX = event.clientX
    positions.value.clientY = event.clientY
    document.onmousemove = elementDrag
    document.onmouseup = closeDragElement
}

function elementDrag(event: any) {
    event.preventDefault()
    fullscreen.value = false

    if (positions.value) {
        positions.value.movementX =
            (positions.value.clientX || 0) - event.clientX
        positions.value.movementY =
            (positions.value.clientY || 0) - event.clientY
    }

    positions.value.clientX = event.clientX
    positions.value.clientY = event.clientY

    const newLeft = uiWindow.value.offsetLeft - positions.value.movementX
    const newTop = uiWindow.value.offsetTop - positions.value.movementY

    if (
        newLeft < viewportSizes.value.left ||
        newTop < viewportSizes.value.top ||
        newLeft + uiWindowRect.value.width > viewportSizes.value.right ||
        newTop + uiWindowRect.value.height > viewportSizes.value.bottom
    ) {
        return
    }

    effectivePositions.value.bottom = 'auto'
    effectivePositions.value.left =
        uiWindow.value.offsetLeft - positions.value.movementX + 'px'

    if (uiWindow.value.offsetTop + 1 >= 0) {
        effectivePositions.value.top =
            uiWindow.value.offsetTop - positions.value.movementY + 'px'
    }
}

function closeDragElement() {
    document.onmouseup = null
    document.onmousemove = null
}

function tfs(e: any) {
    e.stopPropagation()
    fullscreen.value = !fullscreen.value
}

watch(
    () => fullscreen.value,
    (wentFullscreen: boolean) => {
        if (wentFullscreen) {
            originalHeight.value = parseFloat(effectivePositions.value.height)
            originalWidth.value = parseFloat(effectivePositions.value.width)
            originalX.value = parseFloat(effectivePositions.value.left)
            originalY.value = parseFloat(effectivePositions.value.top)

            effectivePositions.value = {
                bottom: 'auto',
                height: '100vh',
                left: '0',
                top: '0',
                width: '100vw',
            }
        } else {
            effectivePositions.value = {
                bottom: 'auto',
                height: originalHeight.value + 'px',
                left: originalX.value + 'px',
                top: originalY.value + 'px',
                width: originalWidth.value + 'px',
            }
        }
    }
)
</script>
