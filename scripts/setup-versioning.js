#!/usr/bin/env node

/**
 * Setup script for Pickle Jar monorepo versioning
 * This script helps initialize Changesets and other versioning tools
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

console.log('🚀 Setting up versioning for Pickle Jar monorepo...\n')

// Check if we're in the root directory
const rootPackageJson = path.join(process.cwd(), 'package.json')
if (!fs.existsSync(rootPackageJson)) {
    console.error('❌ Please run this script from the monorepo root directory')
    process.exit(1)
}

// Install Changesets if not already installed
try {
    console.log('📦 Installing Changesets...')
    execSync('pnpm add -D @changesets/cli', { stdio: 'inherit' })
    console.log('✅ Changesets installed successfully\n')
} catch (error) {
    console.log('ℹ️  Changesets already installed or installation failed\n')
}

// Initialize Changesets
try {
    console.log('🔧 Initializing Changesets...')
    execSync('pnpm changeset init', { stdio: 'inherit' })
    console.log('✅ Changesets initialized successfully\n')
} catch (error) {
    console.log('ℹ️  Changesets already initialized or initialization failed\n')
}

// Create .changeset directory if it doesn't exist
const changesetDir = path.join(process.cwd(), '.changeset')
if (!fs.existsSync(changesetDir)) {
    fs.mkdirSync(changesetDir, { recursive: true })
}

// Create config.json for Changesets
const changesetConfig = {
    $schema: 'https://unpkg.com/@changesets/config@2.3.1/schema.json',
    changelog: '@changesets/cli/changelog',
    commit: false,
    fixed: [],
    linked: [],
    access: 'restricted',
    baseBranch: 'main',
    updateInternalDependencies: 'patch',
    ignore: [],
}

fs.writeFileSync(
    path.join(changesetDir, 'config.json'),
    JSON.stringify(changesetConfig, null, 2)
)

console.log('✅ Changeset configuration created\n')

// Create initial CHANGELOG files for packages
const packages = ['packages/core', 'packages/ui', 'packages/ui-lit']

packages.forEach(pkgPath => {
    const changelogPath = path.join(pkgPath, 'CHANGELOG.md')
    if (!fs.existsSync(changelogPath)) {
        const changelogContent = `# Changelog

All notable changes to this package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial release

### Changed

### Deprecated

### Removed

### Fixed

### Security
`

        fs.writeFileSync(changelogPath, changelogContent)
        console.log(`✅ Created CHANGELOG.md for ${pkgPath}`)
    }
})

console.log('\n📋 Next steps:')
console.log('1. Review the VERSIONING.md document')
console.log('2. Use "pnpm changeset" to create version change entries')
console.log('3. Use "pnpm changeset version" to bump versions')
console.log('4. Use "pnpm changeset publish" to publish packages')
console.log('\n🎉 Versioning setup complete!')
