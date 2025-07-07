import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, watch } from 'vue'
import ColumnManagerRefactored from './ColumnManagerRefactored.vue'
import type { ColumnDefinition } from '../../types/ColumnDefinition'
import type { ColumnGroupDefinition } from '../../types'
import DropdownSeparator from '../../components/dropdown/DropdownSeparator.vue'
import DropdownItem from '../../components/dropdown/DropdownItem.vue'

const meta: Meta<typeof ColumnManagerRefactored> = {
    title: 'Modules/ColumnManager/Refactored',
    component: ColumnManagerRefactored,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const sampleColumns: ColumnDefinition[] = [
    { id: '1', name: 'Name', type: 'string' },
    { id: '2', name: 'Email', type: 'string' },
    { id: '3', name: 'Age', type: 'number' },
    { id: '4', name: 'Status', type: 'string' },
    { id: '5', name: 'Created Date', type: 'date' },
    { id: '6', name: 'Updated Date', type: 'date' },
]

const sampleGroups: ColumnGroupDefinition[] = [
    { id: 'group1', name: 'Basic Info', color: '#e7e5e4' },
    { id: 'group2', name: 'Contact', color: '#dbeafe' },
    { id: 'group3', name: 'Metadata', color: '#fef3c7' },
]

export const Default: Story = {
    render: () => ({
        components: { ColumnManagerRefactored },
        setup() {
            const columns = ref<ColumnDefinition[]>([...sampleColumns])
            const groups = ref<ColumnGroupDefinition[]>([...sampleGroups])
            const focusedColumn = ref<ColumnDefinition | null>(null)

            const searcher = async (query: string) => {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 100))
                return sampleColumns.filter(col =>
                    col.name.toLowerCase().includes(query.toLowerCase())
                )
            }

            return {
                columns,
                groups,
                focusedColumn,
                searcher,
            }
        },
        template: `
      <div class="w-full md:w-[960px] md:h-[600px]">
        <ColumnManagerRefactored
          v-model:columns="columns"
          v-model:groups="groups"
          :searcher="searcher"
          @column-select="focusedColumn = $event"
        >
          <template #column-content="{ column }">
            <div class="flex-1 min-w-px flex text-sm">
              {{ column.name }}
            </div>
          </template>
          
          <template #option="{ item, selected, active }">
            <div class="flex-1">
              {{ item.name }}
            </div>
          </template>
          
          <div class="p-4">
            <p v-if="focusedColumn">
              Selected: {{ focusedColumn.name }}
            </p>
            <p v-else>
              No column selected
            </p>
          </div>
        </ColumnManagerRefactored>
      </div>
    `,
    }),
}

export const WithCustomActions: Story = {
    render: () => ({
        components: { ColumnManagerRefactored },
        setup() {
            const columns = ref<ColumnDefinition[]>([...sampleColumns])
            const groups = ref<ColumnGroupDefinition[]>([...sampleGroups])
            const focusedColumn = ref<ColumnDefinition | null>(null)

            const searcher = async (query: string) => {
                await new Promise(resolve => setTimeout(resolve, 100))
                return sampleColumns.filter(col =>
                    col.name.toLowerCase().includes(query.toLowerCase())
                )
            }

            return {
                columns,
                groups,
                focusedColumn,
                searcher,
            }
        },
        template: `
      <div class="w-full md:w-[960px] md:h-[600px]">
        <ColumnManagerRefactored
          v-model:columns="columns"
          v-model:groups="groups"
          :searcher="searcher"
          @column-select="focusedColumn = $event"
        >
          <template #column-content="{ column }">
            <div class="flex-1 min-w-px flex text-sm">
              <span class="font-medium">{{ column.name }}</span>
              <span class="text-muted-foreground ml-2">({{ column.type }})</span>
            </div>
          </template>
          
          <template #column-actions="{ column, onRemove, onEdit }">
            <button
              @click="onEdit"
              class="p-1 rounded hover:bg-accent"
              title="Edit column"
            >
              ✏️
            </button>
            <button
              @click="onRemove"
              class="p-1 rounded hover:bg-accent text-red-500"
              title="Remove column"
            >
              🗑️
            </button>
          </template>

          
          
          <template #option="{ item, selected, active }">
            <div class="flex-1">
              <span class="font-medium">{{ item.name }}</span>
              <span class="text-muted-foreground ml-2">({{ item.type }})</span>
            </div>
          </template>
          
          <div class="p-4">
            <p v-if="focusedColumn">
              Selected: {{ focusedColumn.name }} ({{ focusedColumn.type }})
            </p>
            <p v-else>
              No column selected
            </p>
          </div>
        </ColumnManagerRefactored>
      </div>
    `,
    }),
}

export const DragToEmptyGroup: Story = {
    render: () => ({
        components: { ColumnManagerRefactored },
        setup() {
            const columns = ref<ColumnDefinition[]>([
                { id: '1', name: 'Name', type: 'string' },
                { id: '2', name: 'Email', type: 'string' },
                { id: '3', name: 'Age', type: 'number' },
            ])
            const groups = ref<ColumnGroupDefinition[]>([
                { id: 'group1', name: 'Group 1', color: '#e7e5e4' },
                { id: 'group2', name: 'Empty Group', color: '#dbeafe' }, // Empty group
            ])

            const searcher = async (query: string) => {
                await new Promise(resolve => setTimeout(resolve, 100))
                return columns.value.filter(col =>
                    col.name.toLowerCase().includes(query.toLowerCase())
                )
            }

            return {
                columns,
                groups,
                searcher,
            }
        },
        template: `
      <div class="w-full md:w-[960px] md:h-[600px]">
        <h3 class="mb-4 text-lg font-semibold">Test: Drag columns to empty group</h3>
        <p class="mb-4 text-sm text-muted-foreground">
          Try dragging columns from "Group 1" to "Empty Group" to test the drag and drop functionality.
        </p>
        
        <ColumnManagerRefactored
          v-model:columns="columns"
          v-model:groups="groups"
          :searcher="searcher"
        >
          <template #column-content="{ column }">
            <div class="flex-1 min-w-px flex text-sm">
              {{ column.name }}
            </div>
          </template>
          
          <template #option="{ item, selected, active }">
            <div class="flex-1">
              {{ item.name }}
            </div>
          </template>
        </ColumnManagerRefactored>
        
        <div class="mt-4 p-4 bg-muted rounded-lg">
          <h4 class="font-medium mb-2">Debug Info:</h4>
          <p class="text-sm">Check the browser console for drag and drop event logs.</p>
        </div>
      </div>
    `,
    }),
}

export const CrossGroupDragging: Story = {
    render: () => ({
        components: {
            ColumnManagerRefactored,
            DropdownSeparator,
            DropdownItem,
        },
        setup() {
            const columnManagerRef = ref()
            const groupedColumns = ref({})

            const columns = ref<ColumnDefinition[]>([
                { id: '1', name: 'Name', type: 'string', group: 'group1' },
                { id: '2', name: 'Email', type: 'string', group: 'group2' },
                { id: '3', name: 'Age', type: 'number', group: 'group1' },
                { id: '4', name: 'Status', type: 'string', group: 'group3' },
                {
                    id: '5',
                    name: 'Created Date',
                    type: 'date',
                    group: 'group3',
                },
                { id: '6', name: 'Phone', type: 'string', group: 'group2' },
                { id: '7', name: 'Address', type: 'string', group: 'group2' },
                {
                    id: '8',
                    name: 'Updated Date',
                    type: 'date',
                    group: 'group3',
                },
            ])
            const groups = ref<ColumnGroupDefinition[]>([
                { id: 'group1', name: 'Basic Info', color: '#e7e5e4' },
                { id: 'group2', name: 'Contact', color: '#dbeafe' },
                { id: 'group3', name: 'Metadata', color: '#fef3c7' },
                { id: 'group4', name: 'Empty Group', color: '#f3e8ff' }, // Empty group for testing
            ])

            const searcher = async (query: string) => {
                await new Promise(resolve => setTimeout(resolve, 100))
                return columns.value.filter(col =>
                    col.name.toLowerCase().includes(query.toLowerCase())
                )
            }

            // Debug logging
            console.log('CrossGroupDragging story setup:', {
                columns: columns.value,
                groups: groups.value,
            })

            // Watch for changes in the column manager's grouped columns
            watch(
                () => columnManagerRef.value?.groupedColumns,
                newGroupedColumns => {
                    if (newGroupedColumns) {
                        groupedColumns.value = newGroupedColumns
                        console.log(
                            'Story - Grouped columns updated:',
                            newGroupedColumns
                        )
                    }
                },
                { deep: true }
            )

            const onGroupAdd = (group: ColumnGroupDefinition) => {
                console.log('Story - Groups updated:', group)
                groups.value = [...groups.value, group]
                // groups.value.push(group)
            }

            return {
                columnManagerRef,
                columns,
                groupedColumns,
                groups,
                onGroupAdd,
                searcher,
            }
        },
        template: `
      <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div class="max-w-7xl mx-auto">
          <!-- Header Section -->
          <div class="mb-8 text-center">
            <h1 class="text-4xl font-bold text-slate-900 mb-4">
              Cross-Group Dragging Demo
            </h1>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experience seamless drag and drop functionality with our advanced column manager. 
              Drag columns between groups, reorder them within groups, and watch the magic happen.
            </p>
          </div>

          <!-- Feature Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">🔄</span>
              </div>
              <h3 class="text-lg font-semibold text-slate-900 mb-2">Cross-Group Dragging</h3>
              <p class="text-slate-600">Drag columns between different groups seamlessly</p>
            </div>
            
            <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">📋</span>
              </div>
              <h3 class="text-lg font-semibold text-slate-900 mb-2">Group Reordering</h3>
              <p class="text-slate-600">Rearrange entire groups to match your workflow</p>
            </div>
            
            <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">⚡</span>
              </div>
              <h3 class="text-lg font-semibold text-slate-900 mb-2">Real-time Updates</h3>
              <p class="text-slate-600">See changes instantly with live data synchronization</p>
            </div>
          </div>

          <!-- Main Demo Section -->
          <div class="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div class="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-6">
              <h2 class="text-2xl font-bold text-white mb-2">Interactive Demo</h2>
              <p class="text-slate-300">Try dragging columns between groups and watch the data update in real-time</p>
            </div>
            
            <div class="p-8">
              <ColumnManagerRefactored
                ref="columnManagerRef"
                v-model:columns="columns"
                v-model:groups="groups"
                :searcher="searcher"
                @group-add="onGroupAdd"
              > 
                <template #option="{ item, selected, active }">
                  <div class="flex-1 flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="font-medium text-slate-900">{{ item.name }}</span>
                    <span class="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded-md font-mono">
                      {{ item.type }}
                    </span>
                  </div>
                </template>

                <template #dropdown-items="{ group, groupData }">
                 
                <DropdownItem>Add custom column</DropdownItem>
                  <DropdownSeparator />
                  <DropdownItem>Edit group</DropdownItem>
                  <DropdownItem>Delete group</DropdownItem>
                </template>
              </ColumnManagerRefactored>
            </div>
          </div>

          <!-- Debug Panel -->
          <div class="mt-8 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            <div class="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <h3 class="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <svg class="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Live Data Structure
              </h3>
              <p class="text-sm text-slate-600 mt-1">Real-time view of how columns are organized across groups</p>
            </div>
            <div class="p-6">
              <pre class="text-xs bg-slate-900 text-slate-100 p-4 rounded-lg overflow-auto max-h-64 font-mono leading-relaxed">{{ JSON.stringify(groupedColumns, null, 2) }}</pre>
            </div>
          </div>

          <!-- Instructions -->
          <div class="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <h3 class="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              How to Test
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-900 font-semibold text-xs">1</span>
                <p>Drag columns between groups to test cross-group functionality</p>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-900 font-semibold text-xs">2</span>
                <p>Drag groups to reorder them and see the layout change</p>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-900 font-semibold text-xs">3</span>
                <p>Reorder columns within the same group to test within-group dragging</p>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-900 font-semibold text-xs">4</span>
                <p>Watch the data structure update in real-time in the debug panel below</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    }),
}

export const DragOverVisualFeedback: Story = {
    render: () => ({
        components: { ColumnManagerRefactored },
        setup() {
            const columns = ref<ColumnDefinition[]>([
                { id: '1', name: 'Name', type: 'string' },
                { id: '2', name: 'Email', type: 'string' },
                { id: '3', name: 'Age', type: 'number' },
                { id: '4', name: 'Status', type: 'string' },
                { id: '5', name: 'Created Date', type: 'date' },
            ])
            const groups = ref<ColumnGroupDefinition[]>([
                { id: 'group1', name: 'Group 1', color: '#e7e5e4' },
                { id: 'group2', name: 'Group 2', color: '#dbeafe' },
                { id: 'group3', name: 'Empty Group', color: '#fef3c7' }, // Empty group for testing
            ])

            const searcher = async (query: string) => {
                await new Promise(resolve => setTimeout(resolve, 100))
                return columns.value.filter(col =>
                    col.name.toLowerCase().includes(query.toLowerCase())
                )
            }

            return {
                columns,
                groups,
                searcher,
            }
        },
        template: `
      <div class="w-full md:w-[960px] md:h-[600px]">
        <div class="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 class="text-lg font-semibold text-blue-900 mb-2">Drag-Over Visual Feedback Demo</h3>
          <p class="text-sm text-blue-800 mb-3">
            This demo shows the visual feedback when dragging columns over groups. 
            When you drag a column over a group, it will show a blue ring and background highlight.
          </p>
          <div class="text-xs text-blue-700 space-y-1">
            <p>✨ <strong>Features:</strong></p>
            <p>• Groups highlight when you drag a column over them</p>
            <p>• Visual feedback with blue ring and background tint</p>
            <p>• Smooth transitions and hover states</p>
            <p>• Works with both empty and populated groups</p>
          </div>
        </div>
        
        <ColumnManagerRefactored
          v-model:columns="columns"
          v-model:groups="groups"
          :searcher="searcher"
        >
          <template #column-content="{ column }">
            <div class="flex-1 min-w-px flex text-sm">
              {{ column.name }}
            </div>
          </template>
          
          <template #option="{ item, selected, active }">
            <div class="flex-1">
              {{ item.name }}
            </div>
          </template>
        </ColumnManagerRefactored>
        
        <div class="mt-4 p-4 bg-muted rounded-lg">
          <h4 class="font-medium mb-2">Instructions:</h4>
          <ol class="text-sm space-y-1 list-decimal list-inside">
            <li>Try dragging any column from Group 1 or Group 2</li>
            <li>Drag it over different groups and watch for the visual feedback</li>
            <li>Notice the blue ring and background highlight on the target group</li>
            <li>Drop the column in the "Empty Group" to see it populate</li>
          </ol>
        </div>
      </div>
    `,
    }),
}

export const ActionButtonsTest: Story = {
    render: () => ({
        components: { ColumnManagerRefactored },
        setup() {
            const columns = ref<ColumnDefinition[]>([
                { id: '1', name: 'Name', type: 'string' },
                { id: '2', name: 'Email', type: 'string' },
                { id: '3', name: 'Age', type: 'number' },
                { id: '4', name: 'Status', type: 'string' },
            ])
            const groups = ref<ColumnGroupDefinition[]>([
                { id: 'group1', name: 'Test Group', color: '#e7e5e4' },
            ])
            const focusedColumn = ref<ColumnDefinition | null>(null)
            const actionLog = ref<string[]>([])

            const searcher = async (query: string) => {
                await new Promise(resolve => setTimeout(resolve, 100))
                return columns.value.filter(col =>
                    col.name.toLowerCase().includes(query.toLowerCase())
                )
            }

            const logAction = (action: string, column: ColumnDefinition) => {
                actionLog.value.push(`${action}: ${column.name} (${column.id})`)
            }

            return {
                columns,
                groups,
                focusedColumn,
                searcher,
                actionLog,
                logAction,
            }
        },
        template: `
      <div class="w-full md:w-[960px] md:h-[600px]">
        <div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 class="text-lg font-semibold text-green-900 mb-2">Action Buttons Test</h3>
          <p class="text-sm text-green-800 mb-3">
            This demo tests the remove and edit action buttons on each column. 
            Click the buttons to see the actions logged below.
          </p>
          <div class="text-xs text-green-700 space-y-1">
            <p>✨ <strong>Test Actions:</strong></p>
            <p>• Click the ✏️ button to edit a column (selects it)</p>
            <p>• Click the 🗑️ button to remove a column</p>
            <p>• Watch the action log below for feedback</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-medium mb-2">Column Manager:</h4>
            <ColumnManagerRefactored
              v-model:columns="columns"
              v-model:groups="groups"
              :searcher="searcher"
              @column-select="focusedColumn = $event"
            >
              <template #column-content="{ column }">
                <div class="flex-1 min-w-px flex text-sm">
                  <span class="font-medium">{{ column.name }}</span>
                  <span class="text-muted-foreground ml-2">({{ column.type }})</span>
                </div>
              </template>
              
              <template #column-actions="{ column, onRemove, onEdit }">
                <button
                  @click="() => { logAction('Edit', column); onEdit() }"
                  class="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900"
                  title="Edit column"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </button>
                <button
                  @click="() => { logAction('Remove', column); onRemove() }"
                  class="p-2 rounded-lg hover:bg-red-50 transition-colors text-slate-600 hover:text-red-600"
                  title="Remove column"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </template>
              
              <template #option="{ item, selected, active }">
                <div class="flex-1">
                  <span class="font-medium">{{ item.name }}</span>
                  <span class="text-muted-foreground ml-2">({{ item.type }})</span>
                </div>
              </template>
            </ColumnManagerRefactored>
          </div>
          
          <div>
            <h4 class="font-medium mb-2">Action Log:</h4>
            <div class="bg-slate-50 p-4 rounded-lg max-h-96 overflow-y-auto">
              <div v-if="actionLog.length === 0" class="text-sm text-slate-500">
                No actions performed yet. Try clicking the buttons above.
              </div>
              <div v-else class="space-y-1">
                <div 
                  v-for="(action, index) in actionLog" 
                  :key="index"
                  class="text-sm p-2 bg-white rounded border"
                >
                  {{ action }}
                </div>
              </div>
            </div>
            
            <div class="mt-4">
              <h4 class="font-medium mb-2">Selected Column:</h4>
              <div class="bg-slate-50 p-4 rounded-lg">
                <p v-if="focusedColumn" class="text-sm">
                  <strong>{{ focusedColumn.name }}</strong> ({{ focusedColumn.type }})
                </p>
                <p v-else class="text-sm text-slate-500">
                  No column selected
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    }),
}

export const EmptyGroupDragTest: Story = {
    render: () => ({
        components: { ColumnManagerRefactored },
        setup() {
            const columns = ref<ColumnDefinition[]>([
                { id: '1', name: 'Name', type: 'string' },
                { id: '2', name: 'Email', type: 'string' },
                { id: '3', name: 'Age', type: 'number' },
            ])
            const groups = ref<ColumnGroupDefinition[]>([
                { id: 'group1', name: 'Group with Columns', color: '#e7e5e4' },
                { id: 'group2', name: 'Empty Group', color: '#dbeafe' },
            ])

            const searcher = async (query: string) => {
                await new Promise(resolve => setTimeout(resolve, 100))
                return columns.value.filter(col =>
                    col.name.toLowerCase().includes(query.toLowerCase())
                )
            }

            return {
                columns,
                groups,
                searcher,
            }
        },
        template: `
      <div class="w-full md:w-[960px] md:h-[600px]">
        <div class="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <h3 class="text-lg font-semibold text-orange-900 mb-2">Empty Group Drag Test</h3>
          <p class="text-sm text-orange-800 mb-3">
            This test specifically checks if dragging columns to empty groups works.
          </p>
          <div class="text-xs text-orange-700 space-y-1">
            <p>🎯 <strong>Test Steps:</strong></p>
            <p>1. Try dragging a column from "Group with Columns" to "Empty Group"</p>
            <p>2. Check if the column appears in the empty group</p>
            <p>3. Check the browser console for any error messages</p>
          </div>
        </div>
        
        <ColumnManagerRefactored
          v-model:columns="columns"
          v-model:groups="groups"
          :searcher="searcher"
        >
          <template #column-content="{ column }">
            <div class="flex-1 min-w-px flex text-sm">
              <span class="font-medium">{{ column.name }}</span>
              <span class="text-muted-foreground ml-2">({{ column.type }})</span>
            </div>
          </template>
          
          <template #option="{ item, selected, active }">
            <div class="flex-1">
              <span class="font-medium">{{ item.name }}</span>
              <span class="text-muted-foreground ml-2">({{ item.type }})</span>
            </div>
          </template>
        </ColumnManagerRefactored>
        
        <div class="mt-4 p-4 bg-muted rounded-lg">
          <h4 class="font-medium mb-2">Debug Info:</h4>
          <p class="text-sm">Check the browser console for drag and drop event logs.</p>
          <p class="text-sm mt-2">Current columns: {{ columns.length }}</p>
          <p class="text-sm">Current groups: {{ groups.length }}</p>
        </div>
      </div>
    `,
    }),
}
