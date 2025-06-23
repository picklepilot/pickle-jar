<template>
    <div ref="contentRef" class="absolute z-50" :style="floatingStyles">
        <transition
            enter-active-class="transition-all duration-200 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
        >
            <div
                v-show="dropdown?.isOpen"
                role="menu"
                :class="[
                    'relative min-w-[8rem] overflow-hidden rounded-md border border-ring bg-popover p-1 text-foreground shadow-lg',
                ]"
                @click="handleClick"
                @keydown="handleKeydown"
                tabindex="-1"
            >
                <slot />
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import {
    ref,
    inject,
    onMounted,
    onUnmounted,
    watch,
    nextTick,
    type Ref,
    computed,
} from 'vue'
import {
    useFloating,
    offset,
    flip,
    shift,
    autoPlacement,
    autoUpdate,
} from '@floating-ui/vue'

interface Props {
    side?: 'top' | 'right' | 'bottom' | 'left'
    align?: 'start' | 'center' | 'end'
    sideOffset?: number
    alignOffset?: number
    avoidCollisions?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    side: 'bottom',
    align: 'start',
    sideOffset: 4,
    alignOffset: 0,
    avoidCollisions: true,
})

interface DropdownContext {
    isOpen: any
    triggerRef: any
    open: () => void
    close: () => void
    toggle: () => void
    setTriggerRef: (ref: HTMLElement) => void
    // Keyboard navigation
    registerItem: (itemRef: HTMLElement, itemId: string) => void
    unregisterItem: (itemId: string) => void
    focusNext: () => void
    focusPrevious: () => void
    focusFirst: () => void
    focusLast: () => void
    focusItem: (itemId: string) => void
    getActiveItemId: () => string | null
}

const dropdown = inject<DropdownContext>('dropdown')
const triggerRef = inject<Ref<HTMLElement>>('triggerRef')
const contentRef = ref<HTMLElement>()

// console.log('DropdownContent context:', {
//     dropdown,
//     isOpen: dropdown?.isOpen,
//     hasTriggerRef: !!triggerRef?.value,
//     triggerRefFromDropdown: !!dropdown?.triggerRef?.value,
// })

// Use the triggerRef from the dropdown context if the injected one is not available
const effectiveTriggerRef = computed(
    () => triggerRef?.value || dropdown?.triggerRef?.value
)

// watch(
//     () => effectiveTriggerRef.value,
//     value => {
//         console.log('effectiveTriggerRef', value)
//     }
// )

const { floatingStyles, update } = useFloating(
    effectiveTriggerRef || ref(null),
    contentRef,
    {
        strategy: 'absolute',
        placement: `${props.side}-${props.align}` as any,
        middleware: [
            offset({
                mainAxis: props.sideOffset,
                crossAxis: props.alignOffset,
            }),
            ...(props.avoidCollisions ? [flip()] : []),
            ...(props.avoidCollisions ? [shift()] : []),
            // autoPlacement(),
        ],
    }
)

const handleClick = (event: Event) => {
    event.stopPropagation()
}

const handleKeydown = (event: KeyboardEvent) => {
    if (!dropdown?.isOpen) return

    switch (event.key) {
        case 'ArrowDown':
            event.preventDefault()
            event.stopPropagation()
            dropdown.focusNext()
            break
        case 'ArrowUp':
            event.preventDefault()
            event.stopPropagation()
            dropdown.focusPrevious()
            break
        case 'Home':
            event.preventDefault()
            event.stopPropagation()
            dropdown.focusFirst()
            break
        case 'End':
            event.preventDefault()
            event.stopPropagation()
            dropdown.focusLast()
            break
        case 'Escape':
            event.preventDefault()
            event.stopPropagation()
            dropdown.close()
            break
        case 'Enter':
        case ' ':
            // Allow Enter and Space to bubble up for item selection
            // but prevent them from reaching other page elements
            event.stopPropagation()
            break
        default:
            // For all other keys, prevent them from bubbling up to other page elements
            // This prevents other components from responding to key presses while dropdown is open
            event.stopPropagation()
            break
    }
}

// Handle click outside to close dropdown
const handleClickOutside = (event: MouseEvent) => {
    console.log('Click outside detected', {
        isOpen: dropdown?.isOpen,
        hasContent: !!contentRef.value,
        target: event.target,
    })

    if (!dropdown?.isOpen || !contentRef.value) return

    const target = event.target as Element
    const triggerElement = effectiveTriggerRef.value

    console.log('Checking click outside', {
        triggerElement,
        isInTrigger: triggerElement?.contains(target),
        isInContent: contentRef.value.contains(target),
    })

    // Check if click is outside both trigger and content
    if (
        triggerElement &&
        !triggerElement.contains(target) &&
        !contentRef.value.contains(target)
    ) {
        console.log('Closing dropdown')
        dropdown.close()
    }
}

// Ensure position is calculated when dropdown opens
watch(
    () => dropdown?.isOpen,
    async isOpen => {
        if (isOpen) {
            console.log('Dropdown opened, adding click outside handler')
            // Calculate position immediately when dropdown opens
            // await nextTick()
            // if (update) {
            //     update()
            // }
            document.addEventListener('click', handleClickOutside, true)

            // Focus the first item after a short delay to ensure items are registered
            setTimeout(() => {
                dropdown?.focusFirst()
            }, 50)
        } else {
            console.log('Dropdown closed, removing click outside handler')
            document.removeEventListener('click', handleClickOutside, true)
        }
    }
)

// Watch for changes in the trigger ref to recalculate position when needed
watch(
    () => effectiveTriggerRef.value,
    async newTriggerRef => {
        if (newTriggerRef && dropdown?.isOpen) {
            // Recalculate position when trigger ref changes and dropdown is open
            await nextTick()
            // update()
        }
    }
)

onMounted(async () => {
    await nextTick()
    if (update) {
        update()
    }
})

onUnmounted(() => {
    console.log('DropdownContent unmounted')
    document.removeEventListener('click', handleClickOutside, true)
})
</script>
