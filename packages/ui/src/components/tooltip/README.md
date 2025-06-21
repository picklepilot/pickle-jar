# Tooltip Component

A flexible and accessible tooltip component built with Vue 3 and Floating UI.

## Features

- **Portal-based positioning**: Tooltips are rendered in a portal to avoid clipping issues
- **Smart positioning**: Uses Floating UI for intelligent positioning and collision detection
- **Customizable delays**: Configurable show/hide delays for better UX
- **Accessible**: Proper ARIA attributes and keyboard navigation
- **Multiple positions**: Support for top, right, bottom, left with start/center/end alignment
- **Smooth animations**: CSS transitions for show/hide states

## Usage

```vue
<template>
    <Tooltip>
        <TooltipTrigger :delay="300" :hide-delay="0">
            <button class="btn">Hover me</button>
        </TooltipTrigger>
        <TooltipContent side="top" align="center" :side-offset="8">
            This is a tooltip message
        </TooltipContent>
    </Tooltip>
</template>
```

## Components

### Tooltip

The main wrapper component that provides context to child components.

### TooltipTrigger

Wraps the element that triggers the tooltip. Supports mouse and keyboard events.

**Props:**

- `delay` (number, default: 300): Delay before showing tooltip in milliseconds
- `hideDelay` (number, default: 0): Delay before hiding tooltip in milliseconds

### TooltipContent

The actual tooltip content that appears when triggered.

**Props:**

- `side` ('top' | 'right' | 'bottom' | 'left', default: 'top'): Preferred side for positioning
- `align` ('start' | 'center' | 'end', default: 'center'): Alignment on the specified side
- `sideOffset` (number, default: 8): Distance from the trigger element
- `alignOffset` (number, default: 0): Offset along the alignment axis
- `avoidCollisions` (boolean, default: true): Whether to flip/shift when colliding with viewport edges

## Positioning Improvements

### Before

- Tooltips were positioned absolutely within the Tooltip wrapper
- Could be clipped by parent containers with `overflow: hidden`
- Limited z-index management
- No portal rendering

### After

- **Portal rendering**: Tooltips are teleported to the body element
- **Fixed positioning**: Uses `position: fixed` for better viewport positioning
- **Higher z-index**: Uses `z-[9999]` to ensure visibility
- **Collision detection**: Automatically flips and shifts when near viewport edges
- **Better pointer events**: Proper handling of pointer events for the tooltip content

## Examples

### Basic Usage

```vue
<Tooltip>
  <TooltipTrigger>
    <button>Hover me</button>
  </TooltipTrigger>
  <TooltipContent>
    Simple tooltip
  </TooltipContent>
</Tooltip>
```

### Custom Positioning

```vue
<Tooltip>
  <TooltipTrigger>
    <button>Hover me</button>
  </TooltipTrigger>
  <TooltipContent side="right" align="start" :side-offset="12">
    Tooltip on the right
  </TooltipContent>
</Tooltip>
```

### Custom Delays

```vue
<Tooltip>
  <TooltipTrigger :delay="500" :hide-delay="200">
    <button>Hover me</button>
  </TooltipTrigger>
  <TooltipContent>
    Shows after 500ms, hides after 200ms delay
  </TooltipContent>
</Tooltip>
```

### Edge Positioning

```vue
<Tooltip>
  <TooltipTrigger>
    <button>Edge tooltip</button>
  </TooltipTrigger>
  <TooltipContent side="top" align="start" :avoid-collisions="true">
    Will automatically flip if there's not enough space
  </TooltipContent>
</Tooltip>
```

## Accessibility

- Proper `role="tooltip"` attribute
- Keyboard navigation support (focus/blur events)
- Screen reader compatible
- Follows WCAG guidelines for tooltips

## Dependencies

- `@floating-ui/vue`: For intelligent positioning and collision detection
- Vue 3: For component composition and reactivity
