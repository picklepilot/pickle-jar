import { v4 as uuidv4 } from 'uuid'

// Core interfaces
export interface QueryField {
    id: string
    label: string
    type: 'string' | 'number' | 'boolean' | 'date'
}

export interface QueryValue {
    id: string
    label: string
}

export interface QueryCondition {
    id: string
    field: QueryField | null
    operator: 'does' | 'doesnt'
    comparison: 'equal' | 'contain'
    value: QueryValue[] | null
    logicalOperator?: 'AND' | 'OR'
    logicalOrOperator: boolean
}

export interface QueryGroup {
    id: string
    conditions: QueryCondition[]
    nestedGroups?: QueryGroup[]
    logicalOrOperator: boolean
}

// Strategy interface for different output formats
export interface QueryConverterStrategy {
    name: string
    convert(groups: QueryGroup[]): string
    validate?(groups: QueryGroup[]): boolean
}

// Base converter class with common utilities
export abstract class BaseQueryConverter implements QueryConverterStrategy {
    abstract name: string
    abstract convert(groups: QueryGroup[]): string

    protected escapeValue(value: string): string {
        // Override in specific implementations for format-specific escaping
        return value
    }

    protected getLogicalOperator(
        condition: QueryCondition,
        group: QueryGroup
    ): string {
        return condition.logicalOrOperator ? 'OR' : 'AND'
    }

    protected getGroupLogicalOperator(group: QueryGroup): string {
        return group.logicalOrOperator ? 'OR' : 'AND'
    }

    protected formatFieldName(field: QueryField): string {
        return field.id
    }

    protected formatFieldValue(value: QueryValue, field: QueryField): string {
        return this.escapeValue(value.id)
    }
}

// Lucene Query Converter
export class LuceneQueryConverter extends BaseQueryConverter {
    name = 'lucene'

    convert(groups: QueryGroup[]): string {
        if (!groups || groups.length === 0) {
            return '(empty query)'
        }

        return this.convertGroups(groups)
    }

    private convertGroups(groups: QueryGroup[]): string {
        if (!groups || groups.length === 0) return ''

        const groupQueries = groups
            .map((group, index) => {
                let groupQuery = ''

                // Add logical operator between groups (except first group)
                if (index > 0) {
                    groupQuery +=
                        this.getGroupLogicalOperator(group) === 'OR'
                            ? ' OR '
                            : ' AND '
                }

                groupQuery += this.convertGroup(group)

                return groupQuery ? `(${groupQuery})` : ''
            })
            .filter(query => query.length > 0)
            .join('')

        return groupQueries
    }

    private convertGroup(group: QueryGroup): string {
        let groupQuery = ''

        // Process conditions in this group
        const conditionQueries = group.conditions
            .filter(
                condition =>
                    condition.field &&
                    condition.value &&
                    condition.value.length > 0
            )
            .map((condition, conditionIndex) => {
                let conditionQuery = ''

                // Add logical operator between conditions (except first condition)
                if (conditionIndex > 0) {
                    conditionQuery +=
                        this.getLogicalOperator(condition, group) === 'OR'
                            ? ' OR '
                            : ' AND '
                }

                conditionQuery += this.convertCondition(condition)

                return conditionQuery
            })
            .join('')

        groupQuery += conditionQueries

        // Process nested groups
        if (group.nestedGroups && group.nestedGroups.length > 0) {
            const nestedQuery = this.convertGroups(group.nestedGroups)
            if (nestedQuery) {
                if (conditionQueries) {
                    groupQuery +=
                        this.getGroupLogicalOperator(group) === 'OR'
                            ? ' OR '
                            : ' AND '
                }
                groupQuery += `(${nestedQuery})`
            }
        }

        return groupQuery
    }

    private convertCondition(condition: QueryCondition): string {
        const fieldName = this.formatFieldName(condition.field!)
        const operator = condition.operator === 'does' ? '' : 'NOT '
        const values = condition
            .value!.map(v => this.formatFieldValue(v, condition.field!))
            .join(' OR ')

        if (condition.comparison === 'contain') {
            // For contain, use wildcard search
            return `${operator}${fieldName}:*${values}*`
        } else {
            // For equal, use exact match
            return `${operator}${fieldName}:(${values})`
        }
    }

    protected escapeValue(value: string): string {
        // Lucene escaping: escape special characters
        const specialChars = [
            '+',
            '-',
            '&',
            '|',
            '!',
            '(',
            ')',
            '{',
            '}',
            '[',
            ']',
            '^',
            '"',
            '~',
            '*',
            '?',
            ':',
            '\\',
            '/',
        ]
        let escaped = value
        specialChars.forEach(char => {
            escaped = escaped.replace(new RegExp(`\\${char}`, 'g'), `\\${char}`)
        })
        return escaped
    }
}

// SQL Query Converter
export class SQLQueryConverter extends BaseQueryConverter {
    name = 'sql'
    private tableName: string

    constructor(tableName: string = 'table_name') {
        super()
        this.tableName = tableName
    }

    convert(groups: QueryGroup[]): string {
        if (!groups || groups.length === 0) {
            return `SELECT * FROM ${this.tableName}`
        }

        const whereClause = this.convertGroups(groups)
        return `SELECT * FROM ${this.tableName} WHERE ${whereClause}`
    }

    private convertGroups(groups: QueryGroup[]): string {
        if (!groups || groups.length === 0) return ''

        const groupQueries = groups
            .map((group, index) => {
                let groupQuery = ''

                // Add logical operator between groups (except first group)
                if (index > 0) {
                    groupQuery +=
                        this.getGroupLogicalOperator(group) === 'OR'
                            ? ' OR '
                            : ' AND '
                }

                groupQuery += this.convertGroup(group)

                return groupQuery ? `(${groupQuery})` : ''
            })
            .filter(query => query.length > 0)
            .join('')

        return groupQueries
    }

    private convertGroup(group: QueryGroup): string {
        let groupQuery = ''

        // Process conditions in this group
        const conditionQueries = group.conditions
            .filter(
                condition =>
                    condition.field &&
                    condition.value &&
                    condition.value.length > 0
            )
            .map((condition, conditionIndex) => {
                let conditionQuery = ''

                // Add logical operator between conditions (except first condition)
                if (conditionIndex > 0) {
                    conditionQuery +=
                        this.getLogicalOperator(condition, group) === 'OR'
                            ? ' OR '
                            : ' AND '
                }

                conditionQuery += this.convertCondition(condition)

                return conditionQuery
            })
            .join('')

        groupQuery += conditionQueries

        // Process nested groups
        if (group.nestedGroups && group.nestedGroups.length > 0) {
            const nestedQuery = this.convertGroups(group.nestedGroups)
            if (nestedQuery) {
                if (conditionQueries) {
                    groupQuery +=
                        this.getGroupLogicalOperator(group) === 'OR'
                            ? ' OR '
                            : ' AND '
                }
                groupQuery += `(${nestedQuery})`
            }
        }

        return groupQuery
    }

    private convertCondition(condition: QueryCondition): string {
        const fieldName = this.formatFieldName(condition.field!)
        const operator = condition.operator === 'does' ? '' : 'NOT '
        const values = condition.value!.map(v =>
            this.formatFieldValue(v, condition.field!)
        )

        if (condition.comparison === 'contain') {
            // For contain, use LIKE with wildcards
            const likeConditions = values
                .map(value => `${operator}${fieldName} LIKE '%${value}%'`)
                .join(' OR ')
            return `(${likeConditions})`
        } else {
            // For equal, use IN clause
            const escapedValues = values.map(v => this.escapeValue(v))
            return `${operator}${fieldName} IN (${escapedValues.map(v => `'${v}'`).join(', ')})`
        }
    }

    protected escapeValue(value: string): string {
        // SQL escaping: escape single quotes
        return value.replace(/'/g, "''")
    }

    setTableName(tableName: string): void {
        this.tableName = tableName
    }
}

// MongoDB Query Converter
export class MongoDBQueryConverter extends BaseQueryConverter {
    name = 'mongodb'

    convert(groups: QueryGroup[]): string {
        if (!groups || groups.length === 0) {
            return '{}'
        }

        const query = this.convertGroups(groups)
        return JSON.stringify(query, null, 2)
    }

    private convertGroups(groups: QueryGroup[]): any {
        if (!groups || groups.length === 0) return {}

        if (groups.length === 1) {
            return this.convertGroup(groups[0])
        }

        // Multiple groups - combine with logical operator
        const operator =
            this.getGroupLogicalOperator(groups[0]) === 'OR' ? '$or' : '$and'
        const groupQueries = groups.map(group => this.convertGroup(group))

        return { [operator]: groupQueries }
    }

    private convertGroup(group: QueryGroup): any {
        const conditions = group.conditions
            .filter(
                condition =>
                    condition.field &&
                    condition.value &&
                    condition.value.length > 0
            )
            .map(condition => this.convertCondition(condition))

        const nestedGroups =
            group.nestedGroups && group.nestedGroups.length > 0
                ? this.convertGroups(group.nestedGroups)
                : null

        if (conditions.length === 0 && !nestedGroups) {
            return {}
        }

        if (conditions.length === 1 && !nestedGroups) {
            return conditions[0]
        }

        // Combine conditions and nested groups
        const operator =
            this.getGroupLogicalOperator(group) === 'OR' ? '$or' : '$and'
        const allConditions = [...conditions]

        if (nestedGroups) {
            allConditions.push(nestedGroups)
        }

        return { [operator]: allConditions }
    }

    private convertCondition(condition: QueryCondition): any {
        const fieldName = this.formatFieldName(condition.field!)
        const values = condition.value!.map(v =>
            this.formatFieldValue(v, condition.field!)
        )

        if (condition.comparison === 'contain') {
            // For contain, use regex
            const regexPatterns = values.map(value => new RegExp(value, 'i'))

            if (condition.operator === 'does') {
                return { [fieldName]: { $in: regexPatterns } }
            } else {
                return { [fieldName]: { $nin: regexPatterns } }
            }
        } else {
            // For equal, use $in or $nin
            if (condition.operator === 'does') {
                return { [fieldName]: { $in: values } }
            } else {
                return { [fieldName]: { $nin: values } }
            }
        }
    }
}

// Factory class for creating converters
export class QueryConverterFactory {
    private static converters: Map<
        string,
        new (...args: any[]) => QueryConverterStrategy
    > = new Map()

    static register(
        name: string,
        converterClass: new (...args: any[]) => QueryConverterStrategy
    ): void {
        this.converters.set(name, converterClass)
    }

    static create(name: string, options?: any): QueryConverterStrategy {
        const ConverterClass = this.converters.get(name)
        if (!ConverterClass) {
            throw new Error(`Unknown converter: ${name}`)
        }

        return new ConverterClass(options)
    }

    static getAvailableFormats(): string[] {
        return Array.from(this.converters.keys())
    }
}

// Register default converters
QueryConverterFactory.register('lucene', LuceneQueryConverter)
QueryConverterFactory.register('sql', SQLQueryConverter)
QueryConverterFactory.register('mongodb', MongoDBQueryConverter)

// Main converter class that uses the factory
export class QueryConverter {
    static convert(
        groups: QueryGroup[],
        format: string,
        options?: any
    ): string {
        const converter = QueryConverterFactory.create(format, options)
        return converter.convert(groups)
    }

    static getAvailableFormats(): string[] {
        return QueryConverterFactory.getAvailableFormats()
    }

    static registerFormat(
        name: string,
        converterClass: new (...args: any[]) => QueryConverterStrategy
    ): void {
        QueryConverterFactory.register(name, converterClass)
    }
}

// Utility function for easy usage
export function convertQuery(
    groups: QueryGroup[],
    format: string,
    options?: any
): string {
    return QueryConverter.convert(groups, format, options)
}
