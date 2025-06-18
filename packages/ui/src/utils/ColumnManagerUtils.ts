import { type ColumnGroupDefinition } from '../types/ColumnGroupDefinition'

export function groupColumns(columns: any[]): { [key: string]: any } {
    return columns.reduce((result, currentValue) => {
        const groupKey = currentValue.group || 'Default'
        if (!result[groupKey]) {
            result[groupKey] = []
        }
        result[groupKey].push(currentValue)
        return result
    }, {})
}

export function ungroupColumns(columns: { [key: string]: any }) {
    return Object.values(columns).flat()
}

/**
 * Take the provided column groups definition and merge
 * it with the defaults to ensure there are no bugs when
 * initializing the column manager.
 *
 * @param {Record<string, ColumnGroupDefinition>} columnGroupsDefinition - An object with the column groups definitions, keyed by the group name.
 * @returns
 */
export function mergeColumnGroupsWithDefaults(
    columnGroupsDefinition: Record<string, ColumnGroupDefinition>
) {
    return Object.keys(columnGroupsDefinition).map(
        (groupName: string, idx: number) => {
            return {
                name: groupName || `Group ${idx}`,
                color: columnGroupsDefinition[groupName]?.color || '#f4f4f5', // default to Tailwind's gray-100
            }
        }
    )
}
