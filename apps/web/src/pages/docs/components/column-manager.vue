<script setup lang="ts">
import { ref } from 'vue'
import DocsLayout from '@/components/docs/DocsLayout.vue'
import {
    ColumnManager,
    CodeBlock,
    DropdownItem,
    DropdownSeparator,
} from '@picklepilot/pickle-jar-ui'
import type {
    ColumnDefinition,
    ColumnGroupDefinition,
} from '@picklepilot/pickle-jar-ui'

const columns = ref<ColumnDefinition[]>([
    { id: 'name', label: 'Name', name: 'Name', type: 'string', group: 'main' },
    {
        id: 'email',
        label: 'Email',
        name: 'Email',
        type: 'string',
        group: 'main',
    },
    { id: 'role', label: 'Role', name: 'Role', type: 'string', group: 'main' },
    {
        id: 'status',
        label: 'Status',
        name: 'Status',
        type: 'string',
        group: 'main',
    },
    {
        id: 'created_at',
        label: 'Created At',
        name: 'Created At',
        type: 'date',
        group: 'main',
    },
    {
        id: 'last_login',
        label: 'Last Login',
        name: 'Last Login',
        type: 'date',
        group: 'meta',
    },
    {
        id: 'department',
        label: 'Department',
        name: 'Department',
        type: 'string',
        group: 'meta',
    },
    {
        id: 'salary',
        label: 'Salary',
        name: 'Salary',
        type: 'number',
        group: 'system',
    },
    {
        id: 'is_active',
        label: 'Active',
        name: 'Active',
        type: 'boolean',
        group: 'system',
    },
    {
        id: 'avatar',
        label: 'Avatar',
        name: 'Avatar',
        type: 'image',
        group: 'system',
    },
])

const groups = ref<ColumnGroupDefinition[]>([
    { id: 'main', name: 'Main Columns', color: '#bae6fd' },
    { id: 'meta', name: 'Meta Columns', color: '#fbcfe8' },
    { id: 'system', name: 'System Info', color: '#dcfce7' },
])

const searcher = async (query: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100))
    return columns.value.filter(col =>
        col.name.toLowerCase().includes(query.toLowerCase())
    )
}

const focusedColumn = ref<ColumnDefinition | null>(null)
</script>

<template>
    <DocsLayout>
        <div class="prose prose-gray max-w-none">
            <h1>Column Manager</h1>
            <p class="lead">
                The Column Manager is a powerful UI module for managing and
                configuring data table columns, supporting grouping,
                drag-and-drop, and customization.
            </p>

            <h2>Usage</h2>
            <div class="rounded-lg bg-gray-50 p-4 mb-6">
                <pre class="language-vue"><code>&lt;template&gt;
  &lt;ColumnManager
    :columns="columns"
    :groups="groups"
    :searcher="searcher"
    @update:columns="columns = $event"
    @update:groups="groups = $event"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
import { ColumnManager } from '@picklepilot/pickle-jar-ui'
const columns = ref([...])
const groups = ref([...])
&lt;/script&gt;</code></pre>
            </div>

            <h2>Props</h2>
            <div class="overflow-x-auto mb-8">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>columns</code></td>
                            <td><code>ColumnDefinition[]</code></td>
                            <td><code>[]</code></td>
                            <td>List of all available columns.</td>
                        </tr>
                        <tr>
                            <td><code>groups</code></td>
                            <td><code>ColumnGroupDefinition[]</code></td>
                            <td><code>[]</code></td>
                            <td>
                                List of column groups and their configuration.
                            </td>
                        </tr>
                        <tr>
                            <td><code>disabled</code></td>
                            <td><code>string[]</code></td>
                            <td><code>[]</code></td>
                            <td>
                                Array of features to disable (e.g.
                                <code>['groups']</code>).
                            </td>
                        </tr>
                        <tr>
                            <td><code>defaultGroupColor</code></td>
                            <td><code>string</code></td>
                            <td><code>'#e7e5e4'</code></td>
                            <td>Default color for new groups.</td>
                        </tr>
                        <tr>
                            <td><code>theme</code></td>
                            <td><code>Record&lt;string, string&gt;</code></td>
                            <td><code>{}</code></td>
                            <td>Custom theme variables.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Live Demo!</h2>
            <CodeBlock
                language="vue"
                auto-theme
                light-theme="min-light"
                dark-theme="min-dark"
                code="<template>
  <ColumnManager
    :columns='columns'
    :groups='groups'
    :searcher='async () => []'
    @update:columns='columns = $event'
    @update:groups='groups = $event'
  />
</template>

<script setup>
import { ref } from 'vue'
import { ColumnManager } from '@picklepilot/pickle-jar-ui'

const columns = ref([
  { id: 'name', label: 'Name', type: 'string' },
  { id: 'email', label: 'Email', type: 'string' },
  { id: 'role', label: 'Role', type: 'string' },
  { id: 'status', label: 'Status', type: 'string' },
  { id: 'created_at', label: 'Created At', type: 'date' },
  { id: 'last_login', label: 'Last Login', type: 'date' },
  { id: 'department', label: 'Department', type: 'string' },
  { id: 'salary', label: 'Salary', type: 'number' },
  { id: 'is_active', label: 'Active', type: 'boolean' },
  { id: 'avatar', label: 'Avatar', type: 'image' },
])

const groups = ref([
  { id: 'main', name: 'Main Columns', color: '#bae6fd' },
  { id: 'meta', name: 'Meta Columns', color: '#fbcfe8' },
  { id: 'system', name: 'System Info', color: '#dcfce7' },
])
</script>"
            >
                <template #demo>
                    <div
                        class="-m-4 flex items-center justify-center rounded-lg"
                    >
                        <div class="w-full">
                            <ColumnManager
                                :columns="columns"
                                :groups="groups"
                                :searcher="searcher"
                                v-model:focused-column="focusedColumn"
                                @update:focused-column="focusedColumn = $event"
                                @update:columns="columns = $event"
                                @update:groups="groups = $event"
                            >
                                <template #option="{ item, selected, active }">
                                    <div class="flex-1">
                                        <span class="font-medium">{{
                                            item.name
                                        }}</span>
                                        <span class="text-muted-foreground ml-2"
                                            >({{ item.type }})</span
                                        >
                                    </div>
                                </template>

                                <template
                                    #dropdown-content="{
                                        group,
                                        groupData,
                                        emit,
                                    }"
                                >
                                    <DropdownItem @select="emit('add-column')">
                                        Add column
                                    </DropdownItem>
                                    <DropdownItem>
                                        Add custom column
                                    </DropdownItem>
                                    <DropdownSeparator />
                                    <DropdownItem
                                        @select="emit('edit-group', groupData)"
                                    >
                                        Edit group
                                    </DropdownItem>
                                    <DropdownItem
                                        @select="
                                            emit('delete-group', groupData)
                                        "
                                    >
                                        Delete group
                                    </DropdownItem>
                                </template>

                                <div
                                    class="p-4 grow border-l border-ring"
                                    :class="[
                                        !focusedColumn &&
                                            'flex items-center justify-center',
                                    ]"
                                >
                                    <p v-if="focusedColumn">
                                        Selected: {{ focusedColumn.name }} ({{
                                            focusedColumn.type
                                        }})
                                    </p>
                                    <p
                                        v-else
                                        class="flex flex-col text-center items-center gap-1"
                                    >
                                        <span class="font-medium"
                                            >No column selected</span
                                        >
                                        <span
                                            class="text-muted-foreground text-sm"
                                            >(click on a column to select
                                            it)</span
                                        >
                                    </p>
                                </div>
                            </ColumnManager>
                        </div>
                    </div>
                </template>
            </CodeBlock>
        </div>
    </DocsLayout>
</template>
