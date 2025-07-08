# Drawer Component

A sliding drawer component that can be positioned on any side of the screen with smooth animations, backdrop support, and **advanced drag-to-close functionality** similar to [Vaul](https://vaul.emilkowal.ski/).

## Features

- **Multiple Positions**: Slide in from left, right, top, or bottom
- **Flexible Sizing**: Multiple size options from small to full screen
- **Smooth Animations**: CSS transitions with proper enter/exit animations
- **Backdrop Support**: Semi-transparent backdrop with blur effect
- **Advanced Drag-to-Close**: Momentum-based dragging with iOS-like behavior
- **Opposite Direction Dampening**: Natural resistance when dragging in the wrong direction
- **Velocity-Based Closing**: Close with quick flicks using momentum
- **Haptic Feedback**: Tactile feedback on mobile devices when dragging
- **Accessibility**: Full keyboard navigation and ARIA support
- **Focus Management**: Automatic focus trapping and restoration
- **Body Scroll Prevention**: Prevents background scrolling when open
- **Theme Customization**: Customizable styling through theme props

## Basic Usage

```vue
<template>
    <div>
        <Button @click="isOpen = true">Open Drawer</Button>

        <Drawer :open="isOpen" @update:open="isOpen = $event">
            <DrawerHeader
                @close="isOpen = false"
                @update:open="isOpen = $event"
            >
                <DrawerTitle>Drawer Title</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <p>Your content goes here</p>
            </DrawerBody>
            <DrawerFooter>
                <Button variant="outline" @click="isOpen = false"
                    >Cancel</Button
                >
                <Button @click="isOpen = false">Save</Button>
            </DrawerFooter>
        </Drawer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    Drawer,
    DrawerHeader,
    DrawerTitle,
    DrawerBody,
    DrawerFooter,
    Button,
} from '@/components/drawer'

const isOpen = ref(false)
</script>
```

## Component Structure

The Drawer component is composed of several sub-components:

- **Drawer**: Main wrapper component
- **DrawerRoot**: Handles backdrop and positioning
- **DrawerContent**: The actual drawer container
- **DrawerHeader**: Header section with title and close button
- **DrawerTitle**: Title component for the header
- **DrawerBody**: Main content area
- **DrawerFooter**: Footer section for actions
- **DrawerClose**: Close button component

## Props

### Drawer Props

| Prop                   | Type                                          | Default          | Description                           |
| ---------------------- | --------------------------------------------- | ---------------- | ------------------------------------- |
| `open`                 | `boolean`                                     | `false`          | Controls whether the drawer is open   |
| `position`             | `'left' \| 'right' \| 'top' \| 'bottom'`      | `'right'`        | Position of the drawer                |
| `size`                 | `'sm' \| 'default' \| 'lg' \| 'xl' \| 'full'` | `'default'`      | Size of the drawer                    |
| `showCloseButton`      | `boolean`                                     | `true`           | Whether to show the close button      |
| `closeOnBackdropClick` | `boolean`                                     | `true`           | Close on backdrop click               |
| `closeOnEscape`        | `boolean`                                     | `true`           | Close on Escape key                   |
| `preventBodyScroll`    | `boolean`                                     | `true`           | Prevent body scroll when open         |
| `dragToClose`          | `boolean`                                     | `true`           | Enable drag-to-close functionality    |
| `dragThreshold`        | `number`                                      | `100`            | Distance threshold to trigger close   |
| `velocityThreshold`    | `number`                                      | `0.5`            | Velocity threshold for momentum close |
| `closeButtonLabel`     | `string`                                      | `'Close drawer'` | Aria label for close button           |
| `theme`                | `object`                                      | `{}`             | Custom theme styling                  |

### Size Options

- **sm**: Small size (320px width for left/right, 256px height for top/bottom)
- **default**: Default size (384px width for left/right, 320px height for top/bottom)
- **lg**: Large size (448px width for left/right, 384px height for top/bottom)
- **xl**: Extra large size (512px width for left/right, 448px height for top/bottom)
- **full**: Full screen size

## Events

| Event         | Payload   | Description                     |
| ------------- | --------- | ------------------------------- |
| `close`       | -         | Emitted when drawer closes      |
| `update:open` | `boolean` | Emitted when open state changes |

## Slots

| Slot      | Description       |
| --------- | ----------------- |
| `default` | Main content area |
| `header`  | Header section    |
| `title`   | Title content     |
| `footer`  | Footer section    |

## Examples

### Different Positions

```vue
<!-- Right drawer (default) -->
<Drawer position="right" :open="isOpen" @update:open="isOpen = $event">
  <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
    <DrawerTitle>Right Drawer</DrawerTitle>
  </DrawerHeader>
  <!-- Content -->
</Drawer>

<!-- Left drawer -->
<Drawer position="left" :open="isOpen" @update:open="isOpen = $event">
  <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
    <DrawerTitle>Left Drawer</DrawerTitle>
  </DrawerHeader>
  <!-- Content -->
</Drawer>

<!-- Top drawer -->
<Drawer position="top" :open="isOpen" @update:open="isOpen = $event">
  <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
    <DrawerTitle>Top Drawer</DrawerTitle>
  </DrawerHeader>
  <!-- Content -->
</Drawer>

<!-- Bottom drawer -->
<Drawer position="bottom" :open="isOpen" @update:open="isOpen = $event">
  <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
    <DrawerTitle>Bottom Drawer</DrawerTitle>
  </DrawerHeader>
  <!-- Content -->
</Drawer>
```

### Different Sizes

```vue
<!-- Small drawer -->
<Drawer size="sm" :open="isOpen" @update:open="isOpen = $event">
  <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
    <DrawerTitle>Small Drawer</DrawerTitle>
  </DrawerHeader>
  <!-- Content -->
</Drawer>

<!-- Large drawer -->
<Drawer size="lg" :open="isOpen" @update:open="isOpen = $event">
  <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
    <DrawerTitle>Large Drawer</DrawerTitle>
  </DrawerHeader>
  <!-- Content -->
</Drawer>

<!-- Full screen drawer -->
<Drawer size="full" :open="isOpen" @update:open="isOpen = $event">
  <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
    <DrawerTitle>Full Screen Drawer</DrawerTitle>
  </DrawerHeader>
  <!-- Content -->
</Drawer>
```

### Custom Theme

```vue
<Drawer
    :open="isOpen"
    @update:open="isOpen = $event"
    :theme="{
        backdrop: 'bg-blue-500/20',
        container: 'bg-blue-50 border-blue-200',
        content: 'text-blue-900',
        closeButton: 'text-blue-600 hover:bg-blue-100',
    }"
>
  <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
    <DrawerTitle>Custom Theme</DrawerTitle>
  </DrawerHeader>
  <!-- Content -->
</Drawer>
```

### Without Close Button

```vue
<Drawer
    :open="isOpen"
    @update:open="isOpen = $event"
    :show-close-button="false"
>
  <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
    <DrawerTitle>Custom Header</DrawerTitle>
  </DrawerHeader>
  <DrawerBody>
    <!-- Content -->
  </DrawerBody>
  <DrawerFooter>
    <Button @click="isOpen = false">Close</Button>
  </DrawerFooter>
</Drawer>
```

### Drag-to-Close with Momentum

```vue
<!-- Basic momentum drag (default settings) -->
<Drawer :open="isOpen" @update:open="isOpen = $event">
  <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
    <DrawerTitle>Momentum Drawer</DrawerTitle>
  </DrawerHeader>
  <DrawerBody>
    <p>Try quick flicks or slow drags to close!</p>
  </DrawerBody>
</Drawer>

<!-- Sensitive momentum (easy to close) -->
<Drawer
    :open="isOpen"
    :drag-threshold="50"
    :velocity-threshold="0.2"
    @update:open="isOpen = $event"
>
  <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
    <DrawerTitle>Sensitive Drawer</DrawerTitle>
  </DrawerHeader>
  <DrawerBody>
    <p>Easy to close with small gestures.</p>
  </DrawerBody>
</Drawer>

<!-- Resistant momentum (requires deliberate gestures) -->
<Drawer
    :open="isOpen"
    :drag-threshold="150"
    :velocity-threshold="0.8"
    @update:open="isOpen = $event"
>
  <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
    <DrawerTitle>Resistant Drawer</DrawerTitle>
  </DrawerHeader>
  <DrawerBody>
    <p>Requires intentional gestures to close.</p>
  </DrawerBody>
</Drawer>
```

## Accessibility

The Drawer component includes comprehensive accessibility features:

- **ARIA Attributes**: Proper `role`, `aria-modal`, `aria-labelledby`, and `aria-describedby`
- **Keyboard Navigation**: Full keyboard support with focus trapping
- **Screen Reader Support**: Proper labeling and announcements
- **Focus Management**: Automatic focus restoration when closed

## Z-Index Management

The drawer uses CSS custom properties for z-index management:

- Backdrop: `var(--z-modal-backdrop)` (1007)
- Drawer content: `var(--z-modal)` (1008)

This ensures proper layering with other UI components in the design system.

## Animation

The drawer uses CSS transitions for smooth animations:

- **Enter**: Slides in from the specified position with opacity fade
- **Exit**: Slides out to the specified position with opacity fade
- **Backdrop**: Fades in/out with blur effect

Animation durations are optimized for a smooth user experience:

- Enter: 300ms ease-out
- Exit: 200ms ease-in
- Backdrop: 300ms ease-out / 200ms ease-in

## Drag-to-Close Features

The drawer includes advanced drag-to-close functionality inspired by [Vaul](https://vaul.emilkowal.ski/) with iOS-like behavior:

### **Momentum-Based Dragging**

- **Velocity Tracking**: Tracks drag velocity for momentum-based closing
- **Quick Flicks**: Close the drawer with fast flick gestures
- **Distance + Velocity**: Combines both distance and velocity for natural closing behavior
- **Configurable Thresholds**: Adjust both distance and velocity thresholds

### **Opposite Direction Dampening**

- **Natural Resistance**: When dragging in the opposite direction (away from close), movement is dampened
- **Progressive Dampening**: The more you drag in the wrong direction, the more resistance you feel
- **Anchored Behavior**: Drawer stays anchored and feels natural, like iOS sheets

### **Drag Handle**

- **Visual Indicator**: A subtle handle bar appears at the top of the drawer
- **Grab Cursor**: Changes to grab/grabbing cursor on hover and drag
- **Touch Optimized**: Works seamlessly on both desktop and mobile devices

### **Smooth Animations**

- **iOS-Like Transitions**: Uses the same cubic-bezier curve as iOS (0.32, 0.72, 0, 1)
- **500ms Duration**: Matches iOS sheet animation timing
- **Snap Behavior**: Always snaps to fully open or fully closed, never stays in between
- **Smooth Close**: When threshold is reached, the drawer smoothly animates to closed position

### **Haptic Feedback**

- **Mobile Vibration**: Provides tactile feedback on mobile devices when dragging starts
- **Enhanced UX**: Makes the interaction feel more responsive and native

### **Configurable Behavior**

- **Enable/Disable**: Turn drag-to-close on or off with the `dragToClose` prop
- **Distance Threshold**: Adjust the drag distance required to trigger close with `dragThreshold`
- **Velocity Threshold**: Control how fast a flick needs to be with `velocityThreshold`
- **Position Aware**: Works correctly with all drawer positions (left, right, top, bottom)

### **Advanced Features**

- **Multi-Touch Prevention**: Ignores additional touches during drag to prevent jumping
- **Bounds Checking**: Prevents the drawer from being dragged to extreme positions
- **Time-Based Velocity**: Calculates velocity based on actual time, not just position changes
- **Direction-Aware Logic**: Different behavior for each drawer position

### **Accessibility**

- **Keyboard Support**: Drag-to-close doesn't interfere with keyboard navigation
- **Screen Reader Friendly**: Proper ARIA attributes and focus management
- **Touch Gestures**: Supports standard touch gestures on mobile devices

### **Performance Optimizations**

- **Direct Style Updates**: Updates transform directly instead of CSS variables for better performance
- **Efficient Calculations**: Optimized velocity and position calculations
- **Smooth 60fps**: Maintains smooth animations even with complex content
