<template>
    <div class="p-8 space-y-6">
        <h1 class="text-3xl font-bold">Drawer Component Demo</h1>

        <div class="space-y-4">
            <h2 class="text-xl font-semibold">Basic Usage</h2>
            <div class="flex flex-wrap gap-2">
                <Button @click="openDrawer('right')">Open Right Drawer</Button>
                <Button @click="openDrawer('left')">Open Left Drawer</Button>
                <Button @click="openDrawer('top')">Open Top Drawer</Button>
                <Button @click="openDrawer('bottom')"
                    >Open Bottom Drawer</Button
                >
            </div>
        </div>

        <div class="space-y-4">
            <h2 class="text-xl font-semibold">Different Sizes</h2>
            <div class="flex flex-wrap gap-2">
                <Button @click="openSizeDrawer('sm')">Small Drawer</Button>
                <Button @click="openSizeDrawer('default')"
                    >Default Drawer</Button
                >
                <Button @click="openSizeDrawer('lg')">Large Drawer</Button>
                <Button @click="openSizeDrawer('xl')"
                    >Extra Large Drawer</Button
                >
                <Button @click="openSizeDrawer('full')"
                    >Full Screen Drawer</Button
                >
            </div>
        </div>

        <div class="space-y-4">
            <h2 class="text-xl font-semibold">Custom Examples</h2>
            <div class="flex flex-wrap gap-2">
                <Button @click="openCustomDrawer">Custom Theme Drawer</Button>
                <Button @click="openNoCloseDrawer">No Close Button</Button>
            </div>
        </div>

        <div class="space-y-4">
            <h2 class="text-xl font-semibold">Drag-to-Close Examples</h2>
            <div class="flex flex-wrap gap-2">
                <Button @click="openDragDrawer">Draggable Drawer</Button>
                <Button @click="openNonDragDrawer">Non-Draggable Drawer</Button>
                <Button @click="openHighThresholdDrawer"
                    >High Threshold Drawer</Button
                >
            </div>
        </div>

        <!-- Right Drawer -->
        <Drawer
            ref="drawerRefs.right"
            :open="drawerState.right"
            position="right"
            @update:open="drawerState.right = $event"
        >
            <DrawerHeader
                :position="'right'"
                @close="drawerState.right = false"
                @update:open="drawerState.right = $event"
            >
                <DrawerTitle>Right Drawer</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <p class="mb-4">This is a right-positioned drawer.</p>
                <p class="mb-4">
                    It slides in from the right side of the screen.
                </p>
                <p>
                    You can close it by clicking the X button, pressing Escape,
                    clicking the backdrop, or dragging the handle on the left
                    side.
                </p>
            </DrawerBody>
            <DrawerFooter>
                <Button variant="outline" @click="drawerState.right = false"
                    >Cancel</Button
                >
                <Button @click="drawerState.right = false">Save</Button>
            </DrawerFooter>
        </Drawer>

        <!-- Left Drawer -->
        <Drawer
            ref="drawerRefs.left"
            :open="drawerState.left"
            position="left"
            @update:open="drawerState.left = $event"
        >
            <DrawerHeader
                :position="'left'"
                @close="drawerState.left = false"
                @update:open="drawerState.left = $event"
            >
                <DrawerTitle>Left Drawer</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <p class="mb-4">This is a left-positioned drawer.</p>
                <p>It slides in from the left side of the screen.</p>
            </DrawerBody>
        </Drawer>

        <!-- Top Drawer -->
        <Drawer
            ref="drawerRefs.top"
            :open="drawerState.top"
            position="top"
            @update:open="drawerState.top = $event"
        >
            <DrawerHeader
                :position="'top'"
                @close="drawerState.top = false"
                @update:open="drawerState.top = $event"
            >
                <DrawerTitle>Top Drawer</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <p class="mb-4">This is a top-positioned drawer.</p>
                <p>It slides in from the top of the screen.</p>
            </DrawerBody>
        </Drawer>

        <!-- Bottom Drawer -->
        <Drawer
            ref="drawerRefs.bottom"
            :open="drawerState.bottom"
            position="bottom"
            @update:open="drawerState.bottom = $event"
        >
            <DrawerHeader
                :position="'bottom'"
                @close="drawerState.bottom = false"
                @update:open="drawerState.bottom = $event"
            >
                <DrawerTitle>Bottom Drawer</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <p class="mb-4">This is a bottom-positioned drawer.</p>
                <p>It slides in from the bottom of the screen.</p>
            </DrawerBody>
        </Drawer>

        <!-- Size Drawer -->
        <Drawer
            ref="drawerRefs.size"
            :open="drawerState.size"
            position="right"
            :size="currentSize"
            @update:open="drawerState.size = $event"
        >
            <DrawerHeader
                :position="'right'"
                @close="drawerState.size = false"
                @update:open="drawerState.size = $event"
            >
                <DrawerTitle>{{ currentSize }} Drawer</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <p class="mb-4">This is a {{ currentSize }} sized drawer.</p>
                <p>Notice how the size affects the width of the drawer.</p>
            </DrawerBody>
        </Drawer>

        <!-- Custom Theme Drawer -->
        <Drawer
            ref="drawerRefs.custom"
            :open="drawerState.custom"
            position="right"
            :theme="customTheme"
            @update:open="drawerState.custom = $event"
        >
            <DrawerHeader
                :position="'right'"
                @close="drawerState.custom = false"
                @update:open="drawerState.custom = $event"
            >
                <DrawerTitle>Custom Theme</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <p class="mb-4">
                    This drawer has custom theme styling applied.
                </p>
                <p>Notice the blue color scheme and custom styling.</p>
            </DrawerBody>
        </Drawer>

        <!-- No Close Button Drawer -->
        <Drawer
            ref="drawerRefs.noClose"
            :open="drawerState.noClose"
            position="right"
            :show-close-button="false"
            @update:open="drawerState.noClose = $event"
        >
            <DrawerHeader
                :position="'right'"
                @close="drawerState.noClose = false"
                @update:open="drawerState.noClose = $event"
            >
                <DrawerTitle>No Close Button</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <p class="mb-4">
                    This drawer doesn't have a close button in the header.
                </p>
                <p>You can still close it with Escape or backdrop click.</p>
            </DrawerBody>
            <DrawerFooter>
                <Button @click="drawerState.noClose = false">Close</Button>
            </DrawerFooter>
        </Drawer>

        <!-- Draggable Drawer -->
        <Drawer
            ref="drawerRefs.draggable"
            :open="drawerState.draggable"
            position="right"
            :drag-to-close="true"
            :drag-threshold="100"
            @update:open="drawerState.draggable = $event"
        >
            <DrawerHeader
                :position="'right'"
                @close="drawerState.draggable = false"
                @update:open="drawerState.draggable = $event"
            >
                <DrawerTitle>Draggable Drawer</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <p class="mb-4">
                    This drawer supports drag-to-close functionality!
                </p>
                <p class="mb-4">
                    Try dragging the handle on the left side to close the
                    drawer.
                </p>
                <div class="space-y-2">
                    <p><strong>Features:</strong></p>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>Grab the handle and drag to close</li>
                        <li>Smooth animations with resistance</li>
                        <li>Haptic feedback on mobile devices</li>
                        <li>Configurable drag threshold</li>
                    </ul>
                </div>
            </DrawerBody>
        </Drawer>

        <!-- Non-Draggable Drawer -->
        <Drawer
            ref="drawerRefs.nonDraggable"
            :open="drawerState.nonDraggable"
            position="right"
            :drag-to-close="false"
            @update:open="drawerState.nonDraggable = $event"
        >
            <DrawerHeader
                :position="'right'"
                @close="drawerState.nonDraggable = false"
                @update:open="drawerState.nonDraggable = $event"
            >
                <DrawerTitle>Non-Draggable Drawer</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <p class="mb-4">This drawer has drag-to-close disabled.</p>
                <p>
                    You can only close it using the X button, Escape key, or
                    backdrop click.
                </p>
            </DrawerBody>
        </Drawer>

        <!-- High Threshold Drawer -->
        <Drawer
            ref="drawerRefs.highThreshold"
            :open="drawerState.highThreshold"
            position="right"
            :drag-to-close="true"
            :drag-threshold="200"
            @update:open="drawerState.highThreshold = $event"
        >
            <DrawerHeader
                :position="'right'"
                @close="drawerState.highThreshold = false"
                @update:open="drawerState.highThreshold = $event"
            >
                <DrawerTitle>High Threshold Drawer</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <p class="mb-4">
                    This drawer requires a longer drag distance to close.
                </p>
                <p class="mb-4">
                    You need to drag at least 200px to trigger the close action.
                </p>
                <p>
                    Try dragging the handle on the left side - you'll notice it
                    requires more effort to close.
                </p>
            </DrawerBody></Drawer
        >
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import {
    Drawer,
    DrawerHeader,
    DrawerTitle,
    DrawerBody,
    DrawerFooter,
    Button,
} from '../../index'

const drawerState = reactive({
    right: false,
    left: false,
    top: false,
    bottom: false,
    size: false,
    custom: false,
    noClose: false,
    draggable: false,
    nonDraggable: false,
    highThreshold: false,
})

const currentSize = ref<'sm' | 'default' | 'lg' | 'xl' | 'full'>('default')

// Drawer refs for drag event handling
const drawerRefs = reactive({
    right: null as any,
    left: null as any,
    top: null as any,
    bottom: null as any,
    size: null as any,
    custom: null as any,
    noClose: null as any,
    draggable: null as any,
    nonDraggable: null as any,
    highThreshold: null as any,
})

const openDrawer = (position: 'left' | 'right' | 'top' | 'bottom') => {
    drawerState[position] = true
}

const openSizeDrawer = (size: 'sm' | 'default' | 'lg' | 'xl' | 'full') => {
    currentSize.value = size
    drawerState.size = true
}

const openCustomDrawer = () => {
    drawerState.custom = true
}

const openNoCloseDrawer = () => {
    drawerState.noClose = true
}

const openDragDrawer = () => {
    drawerState.draggable = true
}

const openNonDragDrawer = () => {
    drawerState.nonDraggable = true
}

const openHighThresholdDrawer = () => {
    drawerState.highThreshold = true
}

const customTheme = {
    backdrop: 'bg-blue-500/20',
    container: 'bg-blue-50 border-blue-200',
    content: 'text-blue-900',
    closeButton: 'text-blue-600 hover:bg-blue-100',
}
</script>
