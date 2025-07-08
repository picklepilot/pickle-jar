export const checkboxCodeExamples = {
    import: "import { Checkbox } from '@picklepilot/pickle-jar-ui'",
    basicUsage: `<template>
    <Checkbox v-model="checked">
        Accept terms and conditions
    </Checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@picklepilot/pickle-jar-ui'

const checked = ref(false)
</script>`,
}
