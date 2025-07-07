import type { Meta, StoryObj } from '@storybook/vue3'
import { Checkbox } from './index'
import { ref, watch, computed } from 'vue'

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'A customizable checkbox component with accessibility features and theme support.',
            },
        },
    },
    argTypes: {
        modelValue: {
            control: 'boolean',
            description: 'The current checked state of the checkbox',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the checkbox is disabled',
        },
        indeterminate: {
            control: 'boolean',
            description: 'Whether the checkbox is in an indeterminate state',
        },
        id: {
            control: 'text',
            description: 'The unique identifier for the checkbox',
        },
        name: {
            control: 'text',
            description: 'The name attribute for the checkbox',
        },
        value: {
            control: 'text',
            description: 'The value attribute for the checkbox',
        },
        required: {
            control: 'boolean',
            description: 'Whether the checkbox is required in a form',
        },
        theme: {
            control: 'object',
            description: 'Custom theme properties',
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Basic checkbox
export const Default: Story = {
    args: {
        modelValue: false,
    },
    render: args => ({
        components: { Checkbox },
        setup() {
            const checked = ref(args.modelValue)

            // Watch for changes in the args
            watch(
                () => args.modelValue,
                newValue => {
                    checked.value = newValue
                },
                { immediate: true }
            )

            // Watch for changes in the checked value
            watch(checked, value => {
                console.log('checked', value)
            })

            return { args, checked }
        },
        template: `
            <Checkbox 
                v-model="checked" 
                :disabled="args.disabled"
                :indeterminate="args.indeterminate"
                :id="args.id"
                :name="args.name"
                :value="args.value"
                :required="args.required"
                :theme="args.theme"
            >
                Accept terms and conditions
            </Checkbox>
        `,
    }),
}

// Checked state
export const Checked: Story = {
    args: {
        modelValue: true,
    },
    render: args => ({
        components: { Checkbox },
        setup() {
            const checked = ref(args.modelValue)

            // Watch for changes in the args
            watch(
                () => args.modelValue,
                newValue => {
                    checked.value = newValue
                },
                { immediate: true }
            )

            return { args, checked }
        },
        template: `
            <Checkbox 
                v-model="checked" 
                :disabled="args.disabled"
                :indeterminate="args.indeterminate"
                :id="args.id"
                :name="args.name"
                :value="args.value"
                :required="args.required"
                :theme="args.theme"
            >
                I agree to the terms
            </Checkbox>
        `,
    }),
}

// Disabled state
export const Disabled: Story = {
    args: {
        modelValue: false,
        disabled: true,
    },
    render: args => ({
        components: { Checkbox },
        setup() {
            const checked = ref(args.modelValue)

            // Watch for changes in the args
            watch(
                () => args.modelValue,
                newValue => {
                    checked.value = newValue
                },
                { immediate: true }
            )

            return { args, checked }
        },
        template: `
            <div class="space-y-4">
                <Checkbox 
                    v-model="checked" 
                    :disabled="args.disabled"
                    :indeterminate="args.indeterminate"
                    :id="args.id"
                    :name="args.name"
                    :value="args.value"
                    :required="args.required"
                    :theme="args.theme"
                >
                    Disabled unchecked
                </Checkbox>
                <Checkbox 
                    v-model="checked" 
                    :disabled="true"
                    :model-value="true"
                >
                    Disabled checked
                </Checkbox>
            </div>
        `,
    }),
}

// Indeterminate state
export const Indeterminate: Story = {
    args: {
        modelValue: false,
        indeterminate: true,
    },
    render: args => ({
        components: { Checkbox },
        setup() {
            const checked = ref(args.modelValue)
            const indeterminate = ref(args.indeterminate)

            // Watch for changes in the args
            watch(
                () => args.modelValue,
                newValue => {
                    checked.value = newValue
                },
                { immediate: true }
            )

            watch(
                () => args.indeterminate,
                newValue => {
                    indeterminate.value = newValue
                },
                { immediate: true }
            )

            return { args, checked, indeterminate }
        },
        template: `
            <div class="space-y-4">
                <Checkbox 
                    v-model="checked" 
                    :disabled="args.disabled"
                    :indeterminate="indeterminate"
                    :id="args.id"
                    :name="args.name"
                    :value="args.value"
                    :required="args.required"
                    :theme="args.theme"
                >
                    Select all items (indeterminate)
                </Checkbox>
                
                <div class="text-sm text-muted-foreground">
                    <p>Click the checkbox to set it to checked state.</p>
                    <p>Use the controls to toggle between indeterminate and normal states.</p>
                </div>
            </div>
        `,
    }),
}

// Multiple checkboxes
export const Multiple: Story = {
    render: () => ({
        components: { Checkbox },
        setup() {
            const options = ref([
                { id: '1', label: 'Option 1', checked: false },
                { id: '2', label: 'Option 2', checked: true },
                { id: '3', label: 'Option 3', checked: false },
            ])

            const toggleOption = (index: number) => {
                options.value[index].checked = !options.value[index].checked
            }

            return { options, toggleOption }
        },
        template: `
            <div class="space-y-2">
                <h3 class="text-sm font-medium mb-2">Select your preferences:</h3>
                <div v-for="(option, index) in options" :key="option.id" class="flex items-center">
                    <Checkbox 
                        :model-value="option.checked"
                        @update:model-value="toggleOption(index)"
                    >
                        {{ option.label }}
                    </Checkbox>
                </div>
            </div>
        `,
    }),
}

// With custom theme
export const CustomTheme: Story = {
    args: {
        modelValue: false,
        theme: {
            checkbox:
                'border-2 border-blue-500 bg-blue-50 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-600',
            label: 'text-blue-700 font-semibold',
        },
    },
    render: args => ({
        components: { Checkbox },
        setup() {
            const checked = ref(args.modelValue)

            // Watch for changes in the args
            watch(
                () => args.modelValue,
                newValue => {
                    checked.value = newValue
                },
                { immediate: true }
            )

            return { args, checked }
        },
        template: `
            <Checkbox 
                v-model="checked" 
                :disabled="args.disabled"
                :indeterminate="args.indeterminate"
                :id="args.id"
                :name="args.name"
                :value="args.value"
                :required="args.required"
                :theme="args.theme"
            >
                Custom themed checkbox
            </Checkbox>
        `,
    }),
}

// Form example
export const FormExample: Story = {
    render: () => ({
        components: { Checkbox },
        setup() {
            const formData = ref({
                newsletter: false,
                marketing: true,
                terms: false,
            })

            const handleSubmit = () => {
                if (!formData.value.terms) {
                    alert('You must accept the terms and conditions')
                    return
                }
                alert('Form submitted: ' + JSON.stringify(formData.value))
            }

            return { formData, handleSubmit }
        },
        template: `
            <form @submit.prevent="handleSubmit" class="space-y-4 max-w-md">
                <h3 class="text-lg font-semibold">Registration Form</h3>
                
                <div class="space-y-2">
                    <Checkbox 
                        v-model="formData.newsletter"
                        name="newsletter"
                        value="newsletter"
                    >
                        Subscribe to newsletter
                    </Checkbox>
                    
                    <Checkbox 
                        v-model="formData.marketing"
                        name="marketing"
                        value="marketing"
                    >
                        Receive marketing emails
                    </Checkbox>
                    
                    <Checkbox 
                        v-model="formData.terms"
                        name="terms"
                        value="terms"
                        required
                    >
                        I accept the terms and conditions
                    </Checkbox>
                </div>
                
                <button 
                    type="submit"
                    class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                >
                    Submit
                </button>
            </form>
        `,
    }),
}

// Accessibility example
export const Accessibility: Story = {
    render: () => ({
        components: { Checkbox },
        setup() {
            const accessibilityOptions = ref([
                {
                    id: 'screen-reader',
                    label: 'Screen reader support',
                    checked: false,
                },
                {
                    id: 'keyboard-nav',
                    label: 'Keyboard navigation',
                    checked: true,
                },
                {
                    id: 'high-contrast',
                    label: 'High contrast mode',
                    checked: false,
                },
                {
                    id: 'reduced-motion',
                    label: 'Reduced motion',
                    checked: true,
                },
            ])

            const toggleOption = (index: number) => {
                accessibilityOptions.value[index].checked =
                    !accessibilityOptions.value[index].checked
            }

            return { accessibilityOptions, toggleOption }
        },
        template: `
            <div class="space-y-4">
                <h3 class="text-lg font-semibold">Accessibility Settings</h3>
                <p class="text-sm text-muted-foreground">
                    Use Tab to navigate, Space or Enter to toggle checkboxes
                </p>
                
                <div class="space-y-2">
                    <div 
                        v-for="(option, index) in accessibilityOptions" 
                        :key="option.id" 
                        class="flex items-center"
                    >
                        <Checkbox 
                            :id="option.id"
                            :model-value="option.checked"
                            @update:model-value="toggleOption(index)"
                        >
                            {{ option.label }}
                        </Checkbox>
                    </div>
                </div>
            </div>
        `,
    }),
}

// Select all example with indeterminate state
export const SelectAllExample: Story = {
    render: () => ({
        components: { Checkbox },
        setup() {
            const items = ref([
                { id: '1', label: 'Item 1', checked: false },
                { id: '2', label: 'Item 2', checked: true },
                { id: '3', label: 'Item 3', checked: false },
                { id: '4', label: 'Item 4', checked: true },
            ])

            const selectAllChecked = computed(() => {
                const checkedCount = items.value.filter(
                    item => item.checked
                ).length
                return checkedCount === items.value.length
            })

            const selectAllIndeterminate = computed(() => {
                const checkedCount = items.value.filter(
                    item => item.checked
                ).length
                return checkedCount > 0 && checkedCount < items.value.length
            })

            const toggleSelectAll = () => {
                const newState = !selectAllChecked.value
                items.value.forEach(item => {
                    item.checked = newState
                })
            }

            const toggleItem = (index: number) => {
                items.value[index].checked = !items.value[index].checked
            }

            return {
                items,
                selectAllChecked,
                selectAllIndeterminate,
                toggleSelectAll,
                toggleItem,
            }
        },
        template: `
            <div class="space-y-4 max-w-md">
                <h3 class="text-lg font-semibold">Select All Example</h3>
                
                <div class="space-y-2">
                    <Checkbox 
                        :model-value="selectAllChecked"
                        :indeterminate="selectAllIndeterminate"
                        @update:model-value="toggleSelectAll"
                    >
                        Select all items
                    </Checkbox>
                    
                    <div class="border-t pt-2 space-y-1">
                        <div 
                            v-for="(item, index) in items" 
                            :key="item.id"
                            class="flex items-center"
                        >
                            <Checkbox 
                                :model-value="item.checked"
                                @update:model-value="toggleItem(index)"
                            >
                                {{ item.label }}
                            </Checkbox>
                        </div>
                    </div>
                </div>
                
                <div class="text-sm text-muted-foreground">
                    <p>This demonstrates how indeterminate state works in a "select all" scenario.</p>
                    <p>When some items are selected, the "Select all" checkbox shows an indeterminate state.</p>
                </div>
            </div>
        `,
    }),
}
