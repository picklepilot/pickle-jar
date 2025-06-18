import {
    QueryConverter,
    convertQuery,
    BaseQueryConverter,
    type QueryConverterStrategy,
    type QueryGroup,
    type QueryCondition,
} from './QueryConverter'

// Example usage of the QueryConverter
export function exampleUsage() {
    // Sample query data
    const sampleQuery: QueryGroup[] = [
        {
            id: '1',
            conditions: [
                {
                    id: '1-1',
                    field: { id: 'name', label: 'Name', type: 'string' },
                    operator: 'does',
                    comparison: 'contain',
                    value: [{ id: 'john', label: 'John Doe' }],
                    logicalOrOperator: false,
                },
                {
                    id: '1-2',
                    field: { id: 'age', label: 'Age', type: 'number' },
                    operator: 'does',
                    comparison: 'equal',
                    value: [
                        { id: '25', label: '25' },
                        { id: '30', label: '30' },
                    ],
                    logicalOperator: 'OR',
                    logicalOrOperator: false,
                },
            ],
            nestedGroups: [],
            logicalOrOperator: false,
        },
    ]

    // Convert to different formats
    console.log('Lucene Query:')
    console.log(QueryConverter.convert(sampleQuery, 'lucene'))

    console.log('\nSQL Query:')
    console.log(
        QueryConverter.convert(sampleQuery, 'sql', { tableName: 'users' })
    )

    console.log('\nMongoDB Query:')
    console.log(QueryConverter.convert(sampleQuery, 'mongodb'))

    // Using the utility function
    console.log('\nUsing utility function:')
    console.log(convertQuery(sampleQuery, 'lucene'))

    // Get available formats
    console.log('\nAvailable formats:', QueryConverter.getAvailableFormats())
}

// Example of creating a custom converter
export class ElasticsearchQueryConverter extends BaseQueryConverter {
    name = 'elasticsearch'

    convert(groups: QueryGroup[]): string {
        if (!groups || groups.length === 0) {
            return JSON.stringify({ query: { match_all: {} } }, null, 2)
        }

        const query = this.convertGroups(groups)
        return JSON.stringify({ query }, null, 2)
    }

    private convertGroups(groups: QueryGroup[]): any {
        if (!groups || groups.length === 0) return { match_all: {} }

        if (groups.length === 1) {
            return this.convertGroup(groups[0])
        }

        // Multiple groups - combine with bool query
        const operator =
            this.getGroupLogicalOperator(groups[0]) === 'OR' ? 'should' : 'must'
        const groupQueries = groups.map(group => this.convertGroup(group))

        return {
            bool: {
                [operator]: groupQueries,
            },
        }
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
            return { match_all: {} }
        }

        if (conditions.length === 1 && !nestedGroups) {
            return conditions[0]
        }

        // Combine conditions and nested groups
        const operator =
            this.getGroupLogicalOperator(group) === 'OR' ? 'should' : 'must'
        const allConditions = [...conditions]

        if (nestedGroups) {
            allConditions.push(nestedGroups)
        }

        return {
            bool: {
                [operator]: allConditions,
            },
        }
    }

    private convertCondition(condition: QueryCondition): any {
        const fieldName = this.formatFieldName(condition.field!)
        const values = condition.value!.map((v: any) =>
            this.formatFieldValue(v, condition.field!)
        )

        if (condition.comparison === 'contain') {
            // For contain, use wildcard query
            const wildcardQueries = values.map((value: string) => ({
                wildcard: {
                    [fieldName]: `*${value}*`,
                },
            }))

            if (condition.operator === 'does') {
                return wildcardQueries.length === 1
                    ? wildcardQueries[0]
                    : {
                          bool: { should: wildcardQueries },
                      }
            } else {
                return {
                    bool: { must_not: wildcardQueries },
                }
            }
        } else {
            // For equal, use terms query
            if (condition.operator === 'does') {
                return {
                    terms: {
                        [fieldName]: values,
                    },
                }
            } else {
                return {
                    bool: {
                        must_not: {
                            terms: {
                                [fieldName]: values,
                            },
                        },
                    },
                }
            }
        }
    }
}

// Example of registering and using a custom converter
export function exampleCustomConverter() {
    // Register the custom converter
    QueryConverter.registerFormat('elasticsearch', ElasticsearchQueryConverter)

    const sampleQuery: QueryGroup[] = [
        {
            id: '1',
            conditions: [
                {
                    id: '1-1',
                    field: { id: 'name', label: 'Name', type: 'string' },
                    operator: 'does',
                    comparison: 'contain',
                    value: [{ id: 'john', label: 'John Doe' }],
                    logicalOrOperator: false,
                },
            ],
            nestedGroups: [],
            logicalOrOperator: false,
        },
    ]

    console.log('Elasticsearch Query:')
    console.log(QueryConverter.convert(sampleQuery, 'elasticsearch'))

    console.log(
        '\nUpdated available formats:',
        QueryConverter.getAvailableFormats()
    )
}

// Example of using the converter with validation
export function exampleWithValidation() {
    const invalidQuery: QueryGroup[] = [
        {
            id: '1',
            conditions: [
                {
                    id: '1-1',
                    field: null, // Invalid: no field selected
                    operator: 'does',
                    comparison: 'equal',
                    value: [],
                    logicalOrOperator: false,
                },
            ],
            nestedGroups: [],
            logicalOrOperator: false,
        },
    ]

    try {
        const result = QueryConverter.convert(invalidQuery, 'lucene')
        console.log('Result:', result)
    } catch (error) {
        console.error('Validation error:', error)
    }
}
