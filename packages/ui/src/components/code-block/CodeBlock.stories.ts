import type { Meta, StoryObj } from '@storybook/vue3'
import { bundledThemes } from 'shiki'
import { ref } from 'vue'
import CodeBlock from './CodeBlock.vue'
import { useStorybookTheme } from '../../composables'
import Button from '../button/Button.vue'

const meta = {
    title: 'Components/CodeBlock',
    component: CodeBlock,
    tags: ['autodocs'],
    argTypes: {
        language: {
            control: 'select',
            options: ['typescript', 'javascript', 'vue', 'html', 'css', 'json'],
        },
        shikiTheme: {
            control: 'select',
            options: Object.keys(bundledThemes),
        },
        autoTheme: {
            control: 'boolean',
        },
        showHeader: {
            control: 'boolean',
        },
        showCopyButton: {
            control: 'boolean',
        },
        codeToHtmlOptions: {
            control: 'object',
            description: "Custom options passed to Shiki's codeToHtml method",
        },
    },
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

const sampleCode = `interface User {
    id: number
    name: string
    email: string
}

function createUser(userData: Partial<User>): User {
    return {
        id: Math.random(),
        name: userData.name || 'Anonymous',
        email: userData.email || '',
    }
}

const user = createUser({ name: 'John Doe', email: 'john@example.com' })
console.log(user)`

const sampleVueCode = `<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <button @click="incrementCount">
            Count: {{ count }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello Vue!')
const message = ref('Welcome to your Vue.js app')
const count = ref(0)

const incrementCount = () => {
    count.value++
}
</script>

<style scoped>
.container {
    padding: 2rem;
    text-align: center;
}
</style>`

const sampleJsonCode = `{
    "name": "pickle-jar-ui",
    "version": "0.1.0",
    "description": "A Vue.js UI component library",
    "main": "./dist/pickle-jar-ui.umd.js",
    "module": "./dist/pickle-jar-ui.es.js",
    "types": "./dist/index.d.ts",
    "scripts": {
        "build": "vite build",
        "test": "vitest",
        "storybook": "storybook dev -p 6006"
    },
    "dependencies": {
        "vue": "^3.5.13",
        "clsx": "^2.1.1",
        "tailwind-merge": "^2.6.0"
    }
}`

const buttonCode = `<template>
  <Button variant="default">
    Click me
  </Button>
</template>

<script setup>
import { Button } from '@pickle-jar/ui'
</script>`

const buttonVariantsCode = `<template>
  <div class="space-x-4">
    <Button variant="default">Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
</template>

<script setup>
import { Button } from '@pickle-jar/ui'
</script>`

const buttonSizesCode = `<template>
  <div class="space-x-4">
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
  </div>
</template>

<script setup>
import { Button } from '@pickle-jar/ui'
</script>`

const buttonIconCode = `<template>
  <Button>
    <template #icon>
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </template>
    With Icon
  </Button>
</template>

<script setup>
import { Button } from '@pickle-jar/ui'
</script>`

const longCodeExample = `// This is a very long code example to demonstrate overflow functionality
interface User {
    id: number
    name: string
    email: string
    avatar?: string
    role: 'admin' | 'user' | 'moderator'
    permissions: string[]
    createdAt: Date
    updatedAt: Date
    lastLoginAt?: Date
    isActive: boolean
    preferences: {
        theme: 'light' | 'dark' | 'auto'
        language: string
        notifications: boolean
        emailNotifications: boolean
        pushNotifications: boolean
    }
}

interface UserProfile {
    userId: number
    bio?: string
    location?: string
    website?: string
    socialLinks: {
        twitter?: string
        github?: string
        linkedin?: string
    }
    skills: string[]
    experience: {
        company: string
        position: string
        startDate: Date
        endDate?: Date
        description: string
    }[]
    education: {
        institution: string
        degree: string
        field: string
        startDate: Date
        endDate?: Date
        gpa?: number
    }[]
}

function createUser(userData: Partial<User>): User {
    return {
        id: Math.random(),
        name: userData.name || 'Anonymous',
        email: userData.email || '',
        role: userData.role || 'user',
        permissions: userData.permissions || [],
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: userData.isActive ?? true,
        preferences: {
            theme: 'auto',
            language: 'en',
            notifications: true,
            emailNotifications: true,
            pushNotifications: false,
            ...userData.preferences
        }
    }
}

function updateUserProfile(userId: number, profileData: Partial<UserProfile>): UserProfile {
    // This function would typically update a user profile in a database
    return {
        userId,
        bio: profileData.bio,
        location: profileData.location,
        website: profileData.website,
        socialLinks: {
            twitter: profileData.socialLinks?.twitter,
            github: profileData.socialLinks?.github,
            linkedin: profileData.socialLinks?.linkedin
        },
        skills: profileData.skills || [],
        experience: profileData.experience || [],
        education: profileData.education || []
    }
}

// Example usage
const user = createUser({ 
    name: 'John Doe', 
    email: 'john@example.com',
    role: 'admin',
    permissions: ['read', 'write', 'delete', 'admin']
})

const profile = updateUserProfile(user.id, {
    bio: 'Full-stack developer with 5+ years of experience',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev',
    socialLinks: {
        twitter: '@johndoe',
        github: 'johndoe',
        linkedin: 'johndoe'
    },
    skills: ['JavaScript', 'TypeScript', 'Vue.js', 'Node.js', 'Python', 'React'],
    experience: [
        {
            company: 'Tech Corp',
            position: 'Senior Developer',
            startDate: new Date('2020-01-01'),
            description: 'Led development of multiple web applications'
        }
    ],
    education: [
        {
            institution: 'University of Technology',
            degree: 'Bachelor of Science',
            field: 'Computer Science',
            startDate: new Date('2015-09-01'),
            endDate: new Date('2019-05-01'),
            gpa: 3.8
        }
    ]
})

console.log('User created:', user)
console.log('Profile updated:', profile)`

export const Default: Story = {
    args: {
        code: sampleCode,
        language: 'typescript',
        shikiTheme: 'monokai',
    },
}

export const AllThemes: Story = {
    args: {
        code: sampleCode,
        language: 'typescript',
        shikiTheme: 'monokai',
    },
}

export const AutoTheme: Story = {
    name: 'Auto (System) Theme',
    args: {
        code: sampleCode,
        language: 'typescript',
        autoTheme: true,
        lightTheme: 'github-light',
        darkTheme: 'github-dark',
    },
}

export const WithoutHeader: Story = {
    args: {
        code: sampleCode,
        language: 'typescript',
        shikiTheme: 'monokai',
        showHeader: false,
    },
}

export const WithoutCopyButton: Story = {
    args: {
        code: sampleCode,
        language: 'typescript',
        shikiTheme: 'monokai',
        showCopyButton: false,
    },
}

export const VueCode: Story = {
    args: {
        code: sampleVueCode,
        language: 'vue',
        shikiTheme: 'monokai',
    },
}

export const JsonCode: Story = {
    args: {
        code: sampleJsonCode,
        language: 'json',
        shikiTheme: 'github-light',
    },
}

export const ThemeAware: Story = {
    name: 'Theme Aware (Auto)',
    args: {
        code: `// This code block automatically adapts to the current theme
function greetUser(name: string) {
    const theme = isDark ? 'dark' : 'light'
    console.log(\`Hello \${name}! Current theme: \${theme}\`)
    
    return {
        message: \`Welcome to the \${theme} theme!\`,
        timestamp: new Date().toISOString()
    }
}

// Try changing the background in Storybook's controls panel above!
greetUser('Developer')`,
        language: 'typescript',
        autoTheme: true,
        lightTheme: 'min-light',
        darkTheme: 'min-dark',
        showHeader: true,
        showCopyButton: true,
    },
    render: args => ({
        components: { CodeBlock },
        setup() {
            const { isDark } = useStorybookTheme()

            return {
                isDark,
                args,
            }
        },
        template: `
            <div class="space-y-4">
                <div class="text-sm text-muted-foreground">
                    <p>Current theme: <strong>{{ isDark ? 'Dark' : 'Light' }}</strong></p>
                    <p>This code block automatically switches between light and dark syntax highlighting.</p>
                </div>
                <CodeBlock v-bind="args" />
            </div>
        `,
    }),
}

// New stories for demo slot feature
export const WithDemoSlot: Story = {
    name: 'With Demo Slot (Tabbed)',
    args: {
        code: buttonCode,
        language: 'vue',
        shikiTheme: 'monokai',
    },
    render: args => ({
        components: { CodeBlock, Button },
        setup() {
            return { args }
        },
        template: `
            <CodeBlock v-bind="args">
                <template #demo>
                    <div class="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                        <Button variant="default">Click me</Button>
                    </div>
                </template>
            </CodeBlock>
        `,
    }),
}

export const ButtonVariantsDemo: Story = {
    name: 'Button Variants Demo',
    args: {
        code: buttonVariantsCode,
        language: 'vue',
        shikiTheme: 'monokai',
    },
    render: args => ({
        components: { CodeBlock, Button },
        setup() {
            return { args }
        },
        template: `
            <CodeBlock v-bind="args">
                <template #demo>
                    <div class="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                        <div class="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                            <div class="flex gap-4">
                                <Button variant="default">Default</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                            </div>
                        </div>
                    </div>
                </template>
            </CodeBlock>
        `,
    }),
}

export const ButtonSizesDemo: Story = {
    name: 'Button Sizes Demo',
    args: {
        code: buttonSizesCode,
        language: 'vue',
        shikiTheme: 'monokai',
    },
    render: args => ({
        components: { CodeBlock, Button },
        setup() {
            return { args }
        },
        template: `
            <CodeBlock v-bind="args">
                <template #demo>
                    <div class="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                        <div class="flex items-center gap-4">
                            <Button size="sm">Small</Button>
                            <Button size="default">Default</Button>
                            <Button size="lg">Large</Button>
                        </div>
                    </div>
                </template>
            </CodeBlock>
        `,
    }),
}

export const ButtonIconDemo: Story = {
    name: 'Button with Icon Demo',
    args: {
        code: buttonIconCode,
        language: 'vue',
        shikiTheme: 'monokai',
    },
    render: args => ({
        components: { CodeBlock, Button },
        setup() {
            return { args }
        },
        template: `
            <CodeBlock v-bind="args">
                <template #demo>
                    <div class="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                        <Button>
                            <template #icon>
                                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </template>
                            With Icon
                        </Button>
                    </div>
                </template>
            </CodeBlock>
        `,
    }),
}

export const InteractiveDemo: Story = {
    name: 'Interactive Demo',
    args: {
        code: `<template>
  <div class="space-y-4">
    <div class="flex gap-2">
      <Button @click="count++">Increment</Button>
      <Button @click="count = 0" variant="outline">Reset</Button>
    </div>
    <p class="text-center">Count: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from '@pickle-jar/ui'

const count = ref(0)
</script>`,
        language: 'vue',
        shikiTheme: 'monokai',
    },
    render: args => ({
        components: { CodeBlock, Button },
        setup() {
            const count = ref(0)
            return { args, count }
        },
        template: `
            <CodeBlock v-bind="args" class="h-[450px]">
                <template #demo>
                    <div class="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                        <div class="space-y-4">
                            <div class="flex gap-2">
                                <Button @click="count++">Increment</Button>
                                <Button @click="count = 0" variant="outline">Reset</Button>
                            </div>
                            <p class="text-center">Count: {{ count }}</p>
                        </div>
                    </div>
                </template>
            </CodeBlock>
        `,
    }),
}

export const Comparison: Story = {
    name: 'With vs Without Demo Slot',
    args: {
        code: buttonCode,
        language: 'vue',
        shikiTheme: 'monokai',
    },
    render: args => ({
        components: { CodeBlock, Button },
        setup() {
            return { args }
        },
        template: `
            <div class="space-y-8">
                <div>
                    <h3 class="text-lg font-semibold mb-4">Without Demo Slot (No Tabs)</h3>
                    <CodeBlock v-bind="args" />
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">With Demo Slot (Tabbed Navigation)</h3>
                    <CodeBlock v-bind="args">
                        <template #demo>
                            <div class="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                                <Button variant="default">Click me</Button>
                            </div>
                        </template>
                    </CodeBlock>
                </div>
            </div>
        `,
    }),
}

export const WithOverflow: Story = {
    name: 'With Overflow (Long Code)',
    args: {
        code: longCodeExample,
        language: 'typescript',
        shikiTheme: 'monokai',
    },
}

export const CustomMaxHeight: Story = {
    name: 'Custom Max Height',
    args: {
        code: longCodeExample,
        language: 'typescript',
        shikiTheme: 'monokai',
    },
}

export const CustomCodeToHtmlOptions: Story = {
    name: 'Custom codeToHtml Options',
    args: {
        code: `// Custom color replacements example
function greet(name: string): string {
    return \`Hello, \${name}!\`
}

const message = greet('World')
console.log(message)`,
        language: 'typescript',
        shikiTheme: 'monokai',
        codeToHtmlOptions: {
            colorReplacements: {
                '#24292e': '#1a1a1a',
                '#ffffff': '#ffffff',
                '#fff': '#ffffff',
                '#0366d6': '#ff6b6b',
                '#28a745': '#51cf66',
                '#d73a49': '#ff8787',
            },
        },
    },
    render: args => ({
        components: { CodeBlock },
        setup() {
            return { args }
        },
        template: `
            <div class="space-y-8">
                <div>
                    <h3 class="text-lg font-semibold mb-4">Default Options</h3>
                    <CodeBlock 
                        :code="args.code" 
                        :language="args.language" 
                        :shiki-theme="args.shikiTheme" 
                    />
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Custom colorReplacements</h3>
                    <CodeBlock v-bind="args" />
                </div>
            </div>
        `,
    }),
}

export const CustomCodeToHtmlOptionsWithMeta: Story = {
    name: 'Custom codeToHtml Options with Meta',
    args: {
        code: `// Example with custom meta options
interface User {
    id: number
    name: string
    email: string
}

function createUser(userData: Partial<User>): User {
    return {
        id: Math.random(),
        name: userData.name || 'Anonymous',
        email: userData.email || '',
    }
}`,
        language: 'typescript',
        shikiTheme: 'github-dark',
        codeToHtmlOptions: {
            colorReplacements: {
                '#24292e': '#0d1117',
                '#ffffff': '#f0f6fc',
                '#fff': '#f0f6fc',
                '#0366d6': '#58a6ff',
                '#28a745': '#3fb950',
                '#d73a49': '#f85149',
            },
            // You can add any other shiki codeToHtml options here
            // For example, custom CSS classes, line numbers, etc.
        },
    },
}
