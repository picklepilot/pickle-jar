import type { Meta, StoryObj } from '@storybook/vue3'
import BaseCombobox from './BaseCombobox.vue'

const meta = {
    title: 'Components/BaseCombobox',
    component: BaseCombobox,
    tags: ['autodocs'],
    argTypes: {
        modelValue: {
            control: 'object',
            description: 'The selected value',
        },
        items: {
            control: 'object',
            description: 'Array of items to display in the combobox',
        },
        displayValue: {
            control: 'object',
            description: 'Function to determine how to display each item',
        },
        nullable: {
            control: 'boolean',
            description: 'Whether the combobox can have no selection',
        },
        immediate: {
            control: 'boolean',
            description: 'Whether to emit changes immediately',
        },
    },
} satisfies Meta<typeof BaseCombobox>

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
    { id: 1, name: 'Next.js' },
    { id: 2, name: 'SvelteKit' },
    { id: 3, name: 'Nuxt.js' },
    { id: 4, name: 'Remix' },
    { id: 5, name: 'Astro' },
]

export const Default: Story = {
    args: {
        items: frameworks,
        displayValue: (item: any) => item.name,
        nullable: true,
    },
}

export const WithInitialValue: Story = {
    args: {
        items: frameworks,
        modelValue: frameworks[0],
        displayValue: (item: any) => item.name,
        nullable: false,
    },
}

export const CustomOption: Story = {
    args: {
        items: frameworks,
        displayValue: (item: any) => item.name,
        nullable: true,
    },
    render: args => ({
        components: { BaseCombobox },
        setup() {
            return { args }
        },
        template: `
      <BaseCombobox v-bind="args">
        <template #option="{ item, selected, active }">
          <li
            class="relative cursor-default select-none py-2 pl-10 pr-4"
            :class="{
              'bg-indigo-600 text-white': active,
              'text-gray-900': !active
            }"
          >
            <span
              class="block truncate"
              :class="{ 'font-medium': selected, 'font-normal': !selected }"
            >
              {{ item.name }}
            </span>
            <span
              v-if="selected"
              class="absolute inset-y-0 left-0 flex items-center pl-3"
              :class="{ 'text-white': active, 'text-indigo-600': !active }"
            >
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </li>
        </template>
      </BaseCombobox>
    `,
    }),
}
