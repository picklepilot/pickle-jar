import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Maximum size for each entry in bytes (10KB)
const MAX_ENTRY_SIZE = 10000

/**
 * Truncates content to fit within the maximum entry size
 * @param {Object} entry - The entry object to truncate
 * @returns {Object} - The truncated entry
 */
function truncateEntry(entry) {
    const entryStr = JSON.stringify(entry)

    if (entryStr.length <= MAX_ENTRY_SIZE) {
        return entry
    }

    console.log(
        `⚠️  Entry ${entry.objectID} is too large (${entryStr.length} bytes), truncating...`
    )

    // Calculate how much we need to reduce the content
    const currentSize = entryStr.length
    const excessSize = currentSize - MAX_ENTRY_SIZE

    // If content is the largest field, truncate it
    if (entry.content && entry.content.length > excessSize) {
        const newContentLength = entry.content.length - excessSize - 100 // Leave some buffer
        entry.content =
            entry.content.substring(0, newContentLength) + '... [truncated]'
    }

    // If still too large, remove optional fields
    const optionalFields = [
        'description',
        'codeBlocks',
        'props',
        'events',
        'slots',
    ]
    for (const field of optionalFields) {
        if (entry[field] && JSON.stringify(entry).length > MAX_ENTRY_SIZE) {
            console.log(`  Removing field: ${field}`)
            delete entry[field]
        }
    }

    // Final check - if still too large, truncate content more aggressively
    let finalEntryStr = JSON.stringify(entry)
    if (finalEntryStr.length > MAX_ENTRY_SIZE) {
        const maxContentSize = MAX_ENTRY_SIZE - 500 // Reserve space for other fields
        entry.content =
            entry.content.substring(0, maxContentSize) + '... [truncated]'
        console.log(
            `  Aggressively truncating content to ${maxContentSize} characters`
        )
    }

    const finalSize = JSON.stringify(entry).length
    console.log(`  ✅ Final size: ${finalSize} bytes`)

    return entry
}

// Configuration for different data sources
const SOURCES = [
    {
        name: 'docs',
        directory: path.join(__dirname, '../src/pages/docs'),
        filePattern: /\.vue$/,
        urlPrefix: '/docs',
        extractContent: (filePath, content) => {
            const { data: frontmatter, content: markdown } = matter(content)
            const title =
                frontmatter.title ||
                path
                    .basename(filePath, '.vue')
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')

            const url = `${SOURCES[0].urlPrefix}/${path.basename(filePath, '.vue')}`

            const entry = {
                objectID: url,
                title,
                content: markdown,
                url,
                source: 'docs',
                ...frontmatter,
            }

            return truncateEntry(entry)
        },
    },
    {
        name: 'components',
        directory: path.join(__dirname, '../../../packages/ui/src/components'),
        filePattern: /\.vue$/,
        urlPrefix: '/components',
        extractContent: (filePath, content) => {
            const { data: frontmatter, content: markdown } = matter(content)
            const title =
                frontmatter.title ||
                path
                    .basename(filePath, '.vue')
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')

            // Get the relative path from components directory to create a proper URL
            const relativePath = path.relative(
                SOURCES[1].directory,
                path.dirname(filePath)
            )
            const url = `${SOURCES[1].urlPrefix}/${relativePath ? relativePath + '/' : ''}${path.basename(filePath, '.vue')}`

            const entry = {
                objectID: url,
                title,
                content: markdown,
                url,
                source: 'components',
                ...frontmatter,
            }

            return truncateEntry(entry)
        },
    },
]

const OUTPUT_FILE = path.join(__dirname, '../algolia-index.json')

function findFiles(dir, pattern) {
    let results = []
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        if (entry.isDirectory()) {
            results = results.concat(findFiles(fullPath, pattern))
        } else if (entry.isFile() && pattern.test(entry.name)) {
            results.push(fullPath)
        }
    }

    return results
}

function processSource(source) {
    console.log(`Scanning directory: ${source.directory}`)
    const files = findFiles(source.directory, source.filePattern)

    console.log(
        `Found ${files.length} matching files in ${source.name}:`,
        files
    )

    return files.map(filePath => {
        console.log(`Processing file: ${filePath}`)
        const content = fs.readFileSync(filePath, 'utf-8')
        return source.extractContent(filePath, content)
    })
}

function generateIndex() {
    const allRecords = SOURCES.flatMap(source => {
        console.log(`Processing source: ${source.name}`)
        return processSource(source)
    })

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allRecords, null, 2))
    console.log(
        `Generated Algolia index with ${allRecords.length} records at ${OUTPUT_FILE}`
    )
}

generateIndex()
