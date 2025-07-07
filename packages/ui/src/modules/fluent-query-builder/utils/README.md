# Query Converter Architecture

This utility provides a flexible, extensible system for converting FluentQueryBuilder JSON output into various query formats using the **Strategy Pattern** combined with a **Factory Pattern**.

## Design Patterns Used

### 1. Strategy Pattern

- **Purpose**: Encapsulate different conversion algorithms
- **Implementation**: `QueryConverterStrategy` interface with concrete implementations for each format
- **Benefits**: Easy to add new formats without modifying existing code

### 2. Factory Pattern

- **Purpose**: Create appropriate converter instances
- **Implementation**: `QueryConverterFactory` class that manages converter registration and instantiation
- **Benefits**: Centralized converter management and runtime format selection

### 3. Template Method Pattern

- **Purpose**: Share common conversion logic
- **Implementation**: `BaseQueryConverter` abstract class with protected utility methods
- **Benefits**: Reduces code duplication and ensures consistent behavior

## Architecture Overview

```
QueryConverter (Main API)
    ↓
QueryConverterFactory (Factory)
    ↓
QueryConverterStrategy (Interface)
    ↓
BaseQueryConverter (Abstract Base)
    ↓
Concrete Converters:
├── LuceneQueryConverter
├── SQLQueryConverter
├── MongoDBQueryConverter
└── [Custom Converters...]
```

## Core Components

### 1. QueryConverterStrategy Interface

```typescript
interface QueryConverterStrategy {
    name: string
    convert(groups: QueryGroup[]): string
    validate?(groups: QueryGroup[]): boolean
}
```

### 2. BaseQueryConverter Abstract Class

Provides common utilities and default implementations:

- `escapeValue()`: Format-specific value escaping
- `getLogicalOperator()`: Extract logical operators
- `formatFieldName()`: Field name formatting
- `formatFieldValue()`: Value formatting

### 3. QueryConverterFactory

Manages converter registration and instantiation:

- `register()`: Register new converter types
- `create()`: Instantiate converters by name
- `getAvailableFormats()`: List registered formats

### 4. QueryConverter Main Class

Simple API for common operations:

- `convert()`: Convert query to specified format
- `getAvailableFormats()`: Get available formats
- `registerFormat()`: Register custom converters

## Usage Examples

### Basic Usage

```typescript
import { QueryConverter } from './utils'

const query = [
    /* your query groups */
]

// Convert to different formats
const luceneQuery = QueryConverter.convert(query, 'lucene')
const sqlQuery = QueryConverter.convert(query, 'sql', { tableName: 'users' })
const mongoQuery = QueryConverter.convert(query, 'mongodb')
```

### Utility Function

```typescript
import { convertQuery } from './utils'

const luceneQuery = convertQuery(query, 'lucene')
```

### Get Available Formats

```typescript
const formats = QueryConverter.getAvailableFormats()
// Returns: ['lucene', 'sql', 'mongodb']
```

## Creating Custom Converters

### 1. Extend BaseQueryConverter

```typescript
import { BaseQueryConverter, type QueryGroup } from './QueryConverter'

export class CustomQueryConverter extends BaseQueryConverter {
    name = 'custom'

    convert(groups: QueryGroup[]): string {
        // Your conversion logic here
        return 'custom query string'
    }

    // Override utility methods if needed
    protected escapeValue(value: string): string {
        return value.replace(/[special]/g, '\\$&')
    }
}
```

### 2. Register Your Converter

```typescript
import { QueryConverter } from './utils'

QueryConverter.registerFormat('custom', CustomQueryConverter)
```

### 3. Use Your Converter

```typescript
const customQuery = QueryConverter.convert(query, 'custom')
```

## Supported Formats

### 1. Lucene

- **Output**: Lucene query string
- **Features**: Wildcard searches, exact matches, negation
- **Example**: `(name:*john* AND age:(25 OR 30))`

### 2. SQL

- **Output**: SQL WHERE clause or full SELECT statement
- **Features**: LIKE clauses, IN clauses, table name configuration
- **Example**: `SELECT * FROM users WHERE (name LIKE '%john%' AND age IN ('25', '30'))`

### 3. MongoDB

- **Output**: MongoDB query object as JSON
- **Features**: $in/$nin operators, regex patterns, $and/$or operators
- **Example**: `{ "$and": [{ "name": { "$in": [/john/i] } }, { "age": { "$in": ["25", "30"] } }] }`

## Extensibility Features

### 1. Easy Format Addition

- Implement `QueryConverterStrategy` interface
- Register with factory
- No changes to existing code required

### 2. Configuration Options

- Pass options to converters (e.g., table name for SQL)
- Extensible options interface

### 3. Validation Support

- Optional `validate()` method in strategy interface
- Custom validation logic per format

### 4. Error Handling

- Graceful error handling for invalid queries
- Format-specific error messages

## Best Practices

### 1. Converter Implementation

- Extend `BaseQueryConverter` for common functionality
- Override only necessary methods
- Use protected utility methods for consistency

### 2. Error Handling

- Validate input data
- Provide meaningful error messages
- Handle edge cases (empty queries, null values)

### 3. Performance

- Use efficient string operations
- Minimize object creation
- Consider caching for complex conversions

### 4. Testing

- Test each converter independently
- Test edge cases and error conditions
- Test format-specific escaping rules

## Future Enhancements

### 1. Additional Formats

- Elasticsearch Query DSL
- GraphQL filters
- REST API query parameters
- OData filters

### 2. Advanced Features

- Query optimization
- Format-specific validation
- Query cost estimation
- Query explanation/debugging

### 3. Integration Features

- Direct database integration
- Query caching
- Query analytics
- Performance monitoring

This architecture provides a solid foundation for query conversion while maintaining flexibility for future enhancements and custom requirements.
