import type { Meta, StoryObj } from '@storybook/vue3'
import ColumnManager from './ColumnManager.vue'
import { ref } from 'vue'

const meta = {
    title: 'Modules/ColumnManager',
    component: ColumnManager,
    tags: ['autodocs'],
    argTypes: {
        defaultItems: {
            control: 'object',
            description: 'Default items to display in the typeahead component',
        },
        disabled: {
            control: 'object',
            description: 'Array of disabled features/functionalities',
        },
        defaultGroupColor: {
            control: 'color',
            description: 'Default color for new groups',
        },
        existingColumns: {
            control: 'object',
            description: 'Array of existing columns to display in the manager',
        },
        groupConfiguration: {
            control: 'object',
            description: 'Configuration for group settings like name and color',
        },
        groupMenuItems: {
            control: 'object',
            description: 'Custom menu items for group actions',
        },
        searcher: {
            control: 'object',
            description: 'Function to search for columns',
        },
        theme: {
            control: 'object',
            description: 'Theme configuration for various container elements',
        },
        typeaheadGroupBy: {
            control: 'text',
            description: 'Property to group by in the typeahead component',
        },
        typeaheadGroupsConfig: {
            control: 'object',
            description: 'Configuration for typeahead groups',
        },
        typeaheadMiddlewareOptions: {
            control: 'object',
            description:
                'Options for typeahead middleware positioning and sizing',
        },
    },
} satisfies Meta<typeof ColumnManager>

export default meta
type Story = StoryObj<typeof meta>

// Mock data for stories
const mockColumns = [
    // Sony Games
    { id: '1', name: 'God of War Ragnarök', group: 'Sony' },
    { id: '2', name: 'Spider-Man 2', group: 'Sony' },
    { id: '3', name: 'The Last of Us Part I', group: 'Sony' },
    { id: '4', name: 'Horizon Forbidden West', group: 'Sony' },
    { id: '5', name: 'Gran Turismo 7', group: 'Sony' },
    { id: '6', name: 'Ratchet & Clank: Rift Apart', group: 'Sony' },
    { id: '7', name: "Demon's Souls", group: 'Sony' },
    { id: '8', name: 'Returnal', group: 'Sony' },

    // Microsoft Games
    { id: '9', name: 'Halo Infinite', group: 'Microsoft' },
    { id: '10', name: 'Forza Horizon 5', group: 'Microsoft' },
    { id: '11', name: 'Starfield', group: 'Microsoft' },
    { id: '12', name: 'Gears 5', group: 'Microsoft' },
    { id: '13', name: 'Sea of Thieves', group: 'Microsoft' },
    { id: '14', name: 'Microsoft Flight Simulator', group: 'Microsoft' },
    { id: '15', name: 'Age of Empires IV', group: 'Microsoft' },

    // Nintendo Games
    {
        id: '16',
        name: 'The Legend of Zelda: Tears of the Kingdom',
        group: 'Nintendo',
    },
    { id: '17', name: 'Super Mario Bros. Wonder', group: 'Nintendo' },
    { id: '18', name: 'Pokémon Scarlet & Violet', group: 'Nintendo' },
    { id: '19', name: 'Splatoon 3', group: 'Nintendo' },
    { id: '20', name: 'Mario Kart 8 Deluxe', group: 'Nintendo' },
    { id: '21', name: 'Animal Crossing: New Horizons', group: 'Nintendo' },
    { id: '22', name: 'Metroid Prime Remastered', group: 'Nintendo' },
]

const mockGroupConfig = {
    Sony: { id: 'Sony', name: 'Sony', color: '#0000FF' },
    Microsoft: { id: 'Microsoft', name: 'Microsoft', color: '#00FF00' },
    Nintendo: { id: 'Nintendo', name: 'Nintendo', color: '#FF0000' },
}

const mockSearcher = async (query: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return mockColumns.filter(col =>
        col.name.toLowerCase().includes(query.toLowerCase())
    )
}

const defaultTypeaheadMiddlewareOptions = {
    autoPlacement: {
        allowedPlacements: ['top-start', 'bottom-start'],
    },
    buffer: 20,
    size: {},
}

export const Default: Story = {
    render: args => ({
        components: { ColumnManager },
        setup() {
            const groupConfig = ref(args.groupConfiguration)
            const editableColumns = ref(args.defaultItems)
            const focusedColumn = ref(null)
            const onUpdateGroupConfiguration = (groupConfiguration: any) => {
                console.log('groupConfiguration', groupConfiguration)
                groupConfig.value = { ...groupConfiguration }
            }

            return {
                args,
                editableColumns,
                groupConfig,
                onUpdateGroupConfiguration,
                focusedColumn,
            }
        },
        template: `
            <div class="w-full md:w-[960px] md:h-[600px]">
                <ColumnManager ref="columnManager" v-bind="args" :default-items="editableColumns" :existing-columns="editableColumns" :group-configuration="groupConfig" @update:group-configuration="onUpdateGroupConfiguration" v-model:focused-column="focusedColumn">
                    <template #column="{ element, index }">
                        <div class="flex-1 min-w-px flex text-sm">
                           {{ element.name }}
                        </div>
                    </template>
                    <template #option="{ item, selected, active }">
                        <div class="flex-1">
                            {{ item.name }}
                        </div>
                    </template>
                    <div class="p-4">
                        <p>
                            {{ focusedColumn?.name }}
                        </p>
                    </div>
                </ColumnManager>
            </div>
        `,
    }),
    args: {
        defaultGroupColor: '#e7e5e4',
        defaultItems: mockColumns,
        existingColumns: mockColumns,
        groupConfiguration: mockGroupConfig,
        searcher: mockSearcher,
        typeaheadGroupBy: 'group',
        typeaheadMiddlewareOptions: defaultTypeaheadMiddlewareOptions,
    },
}

export const Empty: Story = {
    args: {
        existingColumns: [],
        groupConfiguration: {},
        searcher: mockSearcher,
        defaultGroupColor: '#e7e5e4',
        typeaheadMiddlewareOptions: defaultTypeaheadMiddlewareOptions,
    },
}

export const DisabledGroups: Story = {
    args: {
        existingColumns: mockColumns,
        groupConfiguration: mockGroupConfig,
        searcher: mockSearcher,
        defaultGroupColor: '#e7e5e4',
        disabled: ['groups'],
        typeaheadMiddlewareOptions: defaultTypeaheadMiddlewareOptions,
    },
}

export const CustomTheme: Story = {
    args: {
        existingColumns: mockColumns,
        groupConfiguration: mockGroupConfig,
        searcher: mockSearcher,
        defaultGroupColor: '#e7e5e4',
        theme: {
            columnManagerContainer: 'bg-gray-50',
            columnManagerGroupHeader: 'bg-white shadow-sm',
            columnManagerItem: 'hover:bg-blue-50',
            addGroupButton: 'bg-blue-500 text-white hover:bg-blue-600',
        },
        typeaheadMiddlewareOptions: defaultTypeaheadMiddlewareOptions,
    },
}

export const WithCustomMenuItems: Story = {
    args: {
        existingColumns: mockColumns,
        groupConfiguration: mockGroupConfig,
        searcher: mockSearcher,
        defaultGroupColor: '#e7e5e4',
        groupMenuItems: [
            {
                icon: 'fa-star',
                label: 'Mark as Favorite',
                onClick: (context: any) => {
                    console.log('Mark as favorite:', context.groupName)
                },
            },
            {
                icon: 'fa-lock',
                label: 'Lock Group',
                onClick: (context: any) => {
                    console.log('Lock group:', context.groupName)
                },
            },
        ],
        typeaheadMiddlewareOptions: defaultTypeaheadMiddlewareOptions,
    },
}
