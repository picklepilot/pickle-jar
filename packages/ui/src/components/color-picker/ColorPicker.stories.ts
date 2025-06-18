import type { Meta, StoryObj } from '@storybook/vue3'
import ColorPicker from './ColorPicker.vue'
import { ref } from 'vue'

const meta = {
    title: 'Components/ColorPicker',
    component: ColorPicker,
    tags: ['autodocs'],
    argTypes: {
        modelValue: {
            control: 'text',
            description: 'The selected color in hex format',
        },
    },
} satisfies Meta<typeof ColorPicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: args => ({
        components: { ColorPicker },
        setup() {
            const selectedColor = ref(args.modelValue)
            return { selectedColor }
        },
        template: `
            <div class="p-4">
                <ColorPicker v-model="selectedColor" />
                <div class="mt-4 text-sm text-gray-600">
                    Selected color: {{ selectedColor }}
                </div>
            </div>
        `,
    }),
    args: {
        modelValue: '#f0fdf4', // green-50
    },
}
