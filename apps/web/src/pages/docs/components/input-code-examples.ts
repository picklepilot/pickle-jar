export const inputCodeExamples = {
    oneLineUsage: '<Input type="text" placeholder="Enter text..." />',
    basic: `<template>
  <Input type="text" placeholder="Enter text..." />
</template>

<script setup>
import { Input } from '@picklepilot/pickle-jar-ui'
</script>`,
    basicUsage: `<template>
  <Input type="text" placeholder="Enter text..." />
</template>

<script setup>
import { Input } from '@picklepilot/pickle-jar-ui'
</script>`,
    withValue: `<template>
  <Input type="text" placeholder="Enter text..." v-model="value" />
</template>

<script setup>
import { Input } from '@picklepilot/pickle-jar-ui'
import { ref } from 'vue'

const value = ref('Hello World')
</script>`,
    types: `<template>
  <div class="space-y-4">
    <Input type="text" placeholder="Text input..." />
    <Input type="email" placeholder="Email input..." />
    <Input type="password" placeholder="Password input..." />
    <Input type="number" placeholder="Number input..." />
  </div>
</template>

<script setup>
import { Input } from '@picklepilot/pickle-jar-ui'
</script>`,
    disabled: `<template>
  <Input type="text" placeholder="Disabled input..." disabled />
</template>

<script setup>
import { Input } from '@picklepilot/pickle-jar-ui'
</script>`,
    customTheme: `<template>
  <Input 
    type="text" 
    placeholder="Custom themed input..." 
    :theme="{ input: 'bg-blue-50 border-blue-200 focus:ring-blue-500 focus:border-blue-500' }"
  />
</template>

<script setup>
import { Input } from '@picklepilot/pickle-jar-ui'
</script>`,
    import: "import { Input } from '@picklepilot/pickle-jar-ui'",
}
