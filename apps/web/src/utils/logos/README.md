# Technology Logos Utility

This utility provides access to technology logos for use in Vue components throughout the pickle.jar application.

## Current Implementation

The logos are currently implemented as a local utility in `apps/web/src/utils/logos.ts` to avoid import issues with the monorepo setup. This provides the same functionality as the core package but works reliably in the current environment.

## Usage

### Basic Import

```typescript
import { technologyLogos, getLogosByCategory, getLogoUrl } from '@/utils/logos'
```

### Using in Vue Components

```vue
<template>
    <div class="technology-grid">
        <div v-for="logo in frontendLogos" :key="logo.name" class="tech-item">
            <img
                :src="getLogoUrl(logo.logo)"
                :alt="logo.name"
                class="tech-logo"
            />
            <span class="tech-name">{{ logo.name }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getLogosByCategory, getLogoUrl } from '@/utils/logos'

const frontendLogos = getLogosByCategory('frontend')
</script>
```

### Available Functions

#### `getLogosByCategory(category)`

Returns all logos in a specific category.

```typescript
const frontendLogos = getLogosByCategory('frontend')
const backendLogos = getLogosByCategory('backend')
const databaseLogos = getLogosByCategory('database')
```

#### `getTechnologyLogo(name)`

Finds a specific logo by name.

```typescript
const vueLogo = getTechnologyLogo('Vue.js')
const reactLogo = getTechnologyLogo('React')
```

#### `getLogoUrl(logoName)`

Generates the URL path for a logo file.

```typescript
const logoUrl = getLogoUrl('vue') // Returns '/logos/technologies/vue.svg'
```

### Available Categories

- `frontend` - Frontend technologies (React, Vue, TypeScript, etc.)
- `backend` - Backend technologies (Laravel, PHP, WordPress, etc.)
- `database` - Database technologies (MySQL, PostgreSQL, Elastic, etc.)
- `cloud` - Cloud services (AWS, Firebase, etc.)
- `design` - Design tools (Figma, Framer, etc.)
- `version-control` - Version control systems (Git, GitHub, GitLab)
- `ai` - AI/ML technologies (OpenAI)

### Available Logos

The following 28 logos are available:

- AWS
- Bootstrap
- CSS
- Docker
- Elastic
- Figma
- Firebase
- Framer
- Git
- GitHub
- GitLab
- HTML5
- JavaScript
- Laravel
- MySQL
- Next.js
- OpenAI
- PHP
- Pinia
- PostgreSQL
- React
- Sass
- Supabase
- Swift
- Tailwind CSS
- TypeScript
- Vite
- Vue.js
- WordPress

## TypeScript Support

All functions and data are fully typed:

```typescript
interface TechnologyLogo {
    name: string
    logo: string
    category?:
        | 'frontend'
        | 'backend'
        | 'database'
        | 'cloud'
        | 'design'
        | 'version-control'
        | 'ai'
}
```

## File Structure

```
apps/web/
├── public/
│   └── logos/
│       └── technologies/
│           ├── aws.svg
│           ├── react.svg
│           ├── vue.svg
│           └── ... (all 28 SVG files)
└── src/
    └── utils/
        └── logos.ts (main utility file)
```

## Future Improvements

1. **Core Package Integration**: Once the monorepo import issues are resolved, this utility can be moved to the core package and imported from `@pickle-jar/core/logos`.

2. **Dynamic Imports**: Consider using dynamic imports for better tree-shaking and performance.

3. **SVG Optimization**: Implement SVG optimization and compression.

4. **Additional Formats**: Support for PNG, WebP, and other image formats.

## Example Implementation

See `apps/web/src/pages/docs/introduction.vue` for a complete example of how to use the logos in a Vue component, including:

- Displaying logos by category
- Responsive grid layout
- Hover effects
- Proper accessibility attributes
