import { getSingletonHighlighter } from 'shiki'

async function testThemeLoading() {
    console.log('Testing theme loading with getSingletonHighlighter...')

    try {
        // Test min-dark theme
        console.log('Testing min-dark theme...')
        const minDarkHighlighter = await getSingletonHighlighter({
            themes: ['min-dark'],
            langs: ['typescript'],
        })

        const code = `interface User {
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
}`

        const highlighted = minDarkHighlighter.codeToHtml(code, {
            lang: 'typescript',
            theme: 'min-dark',
        })

        console.log('✅ min-dark theme loaded successfully')
        console.log('Highlighted code length:', highlighted.length)

        // Test min-light theme
        console.log('Testing min-light theme...')
        const minLightHighlighter = await getSingletonHighlighter({
            themes: ['min-light'],
            langs: ['typescript'],
        })

        const highlightedLight = minLightHighlighter.codeToHtml(code, {
            lang: 'typescript',
            theme: 'min-light',
        })

        console.log('✅ min-light theme loaded successfully')
        console.log('Highlighted code length:', highlightedLight.length)

        console.log('🎉 All themes loaded successfully!')
    } catch (error) {
        console.error('❌ Error loading themes:', error.message)
        process.exit(1)
    }
}

testThemeLoading()
