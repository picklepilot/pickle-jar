import type { Meta, StoryObj } from '@storybook/vue3'
import FluentQueryBuilder from './FluentQueryBuilder.vue'
import { ref, computed } from 'vue'
import { QueryConverter, type QueryGroup } from './utils'

// Data Viewer Component
const DataViewer = {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    setup(props: any) {
        const isExpanded = ref(false)
        const selectedFormat = ref('lucene')
        const jsonString = computed(() => JSON.stringify(props.data, null, 2))

        const availableFormats = ['lucene', 'sql', 'mongodb']

        // Generate query string using the converter
        const queryString = computed(() => {
            if (
                !props.data ||
                !Array.isArray(props.data) ||
                props.data.length === 0
            ) {
                return '(empty query)'
            }

            try {
                const options =
                    selectedFormat.value === 'sql'
                        ? { tableName: 'users' }
                        : undefined
                return QueryConverter.convert(
                    props.data as QueryGroup[],
                    selectedFormat.value,
                    options
                )
            } catch (error) {
                return `Error: ${error instanceof Error ? error.message : 'Unknown error'}`
            }
        })

        return {
            isExpanded,
            jsonString,
            queryString,
            selectedFormat,
            availableFormats,
        }
    },
    template: `
        <div class="mt-4 p-4 bg-gray-50 rounded-lg border">
            <div class="flex items-center justify-between mb-2">
                <h3 class="text-sm font-medium text-gray-700">Query Data Structure</h3>
                <button 
                    @click="isExpanded = !isExpanded"
                    class="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {{ isExpanded ? 'Hide' : 'Show' }} JSON
                </button>
            </div>
            
            <!-- Format Selector -->
            <div class="mb-3">
                <label class="text-sm font-medium text-gray-700 mr-2">Output Format:</label>
                <select 
                    v-model="selectedFormat"
                    class="text-xs px-2 py-1 border rounded bg-white"
                >
                    <option v-for="format in availableFormats" :key="format" :value="format">
                        {{ format.toUpperCase() }}
                    </option>
                </select>
            </div>
            
            <!-- Query String Output -->
            <div class="mb-3 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                <h4 class="text-sm font-medium text-blue-800 mb-1">{{ selectedFormat.toUpperCase() }} Query:</h4>
                <div class="font-mono text-sm text-blue-900 bg-white p-2 rounded border break-all max-h-48 overflow-auto">
                    <pre>{{ queryString }}</pre>
                </div>
            </div>
            
            <div v-if="isExpanded" class="bg-white p-3 rounded border font-mono text-xs overflow-auto max-h-96">
                <pre>{{ jsonString }}</pre>
            </div>
        </div>
    `,
}

const meta = {
    title: 'Modules/FluentQueryBuilder',
    component: FluentQueryBuilder,
    tags: ['autodocs'],
    argTypes: {
        modelValue: {
            control: 'object',
            description: 'The current query groups',
        },
        availableFields: {
            control: 'object',
            description: 'Available fields that can be queried',
        },
    },
} satisfies Meta<typeof FluentQueryBuilder>

export default meta
type Story = StoryObj<typeof meta>

// Sample available fields with proper types
const sampleFields = [
    {
        id: 'name',
        label: 'Name',
        type: 'string' as const,
        defaultValuesGetter: () => sampleValues.name,
        valuesSearcher: (query: string, controller?: AbortController) =>
            Promise.resolve(
                sampleValues.name.filter(value =>
                    value.label.toLowerCase().includes(query.toLowerCase())
                )
            ),
    },
    {
        id: 'age',
        label: 'Age',
        type: 'number' as const,
        defaultValuesGetter: () => sampleValues.age,
        valuesSearcher: (query: string, controller?: AbortController) =>
            Promise.resolve(
                sampleValues.age.filter(value =>
                    value.label.toLowerCase().includes(query.toLowerCase())
                )
            ),
    },
    {
        id: 'email',
        label: 'Email',
        type: 'string' as const,
        defaultValuesGetter: () => sampleValues.email,
        valuesSearcher: (query: string, controller?: AbortController) =>
            Promise.resolve(
                sampleValues.email.filter(value =>
                    value.label.toLowerCase().includes(query.toLowerCase())
                )
            ),
    },
]

// Sample values for each field
const sampleValues = {
    name: [
        { id: 'john', label: 'John Doe' },
        { id: 'jane', label: 'Jane Smith' },
        { id: 'bob', label: 'Bob Johnson' },
    ],
    age: [
        { id: '18', label: '18' },
        { id: '25', label: '25' },
        { id: '30', label: '30' },
        { id: '45', label: '45' },
    ],
    email: [
        { id: 'john@example.com', label: 'john@example.com' },
        { id: 'jane@example.com', label: 'jane@example.com' },
        { id: 'bob@example.com', label: 'bob@example.com' },
    ],
    isActive: [
        { id: 'true', label: 'Yes' },
        { id: 'false', label: 'No' },
    ],
    createdAt: [
        { id: '2024-01-01', label: 'January 1, 2024' },
        { id: '2024-02-01', label: 'February 1, 2024' },
        { id: '2024-03-01', label: 'March 1, 2024' },
    ],
}

// Basic story with default state and data viewer
export const Default: Story = {
    args: {
        availableFields: sampleFields,
    },
    render: args => ({
        components: { FluentQueryBuilder, DataViewer },
        setup() {
            const queryData = ref([])

            return {
                args,
                queryData,
                onUpdate: (newValue: any) => {
                    queryData.value = newValue
                },
            }
        },
        template: `
            <div class="w-[960px] mx-auto p-4">
                <FluentQueryBuilder
                    :available-fields="args.availableFields"
                    :is-root="true"
                    @update:model-value="onUpdate"
                />
                <DataViewer :data="queryData" />
            </div>
        `,
    }),
}
