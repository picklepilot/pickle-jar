import { html, render } from 'lit'

function renderDemo() {
    const app = document.getElementById('app')

    if (!app) {
        console.error('App element not found')
        return
    }

    const demoContent = html`
        <div class="min-h-screen bg-gray-50 p-8">
            <div class="max-w-4xl mx-auto">
                <header class="mb-8">
                    <h1 class="text-4xl font-bold text-gray-900 mb-2">
                        Pickle Jar - Lit Components
                    </h1>
                    <p class="text-lg text-gray-600">
                        A demonstration of Lit components built with shared
                        utilities
                    </p>
                </header>

                <main class="space-y-8">
                    <section class="bg-white rounded-lg shadow-sm p-6">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                            Core Utilities
                        </h2>
                        <p class="text-gray-600 mb-4">
                            This section demonstrates the shared utilities from
                            @pickle-jar/core
                        </p>
                        <div class="space-y-2">
                            <div class="p-3 bg-blue-50 rounded border">
                                <strong>Theme Utilities:</strong> Available for
                                consistent theming across frameworks
                            </div>
                            <div class="p-3 bg-green-50 rounded border">
                                <strong>Validation Utilities:</strong> Shared
                                validation functions
                            </div>
                            <div class="p-3 bg-purple-50 rounded border">
                                <strong>Class Name Utilities:</strong>
                                Framework-agnostic class name helpers
                            </div>
                        </div>
                    </section>

                    <section class="bg-white rounded-lg shadow-sm p-6">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                            Lit Components
                        </h2>
                        <p class="text-gray-600 mb-4">
                            Lit components will be demonstrated here once they
                            are implemented
                        </p>
                        <div
                            class="p-4 bg-yellow-50 rounded border border-yellow-200"
                        >
                            <p class="text-yellow-800">
                                Components are being developed. Check back soon!
                            </p>
                        </div>
                    </section>

                    <section class="bg-white rounded-lg shadow-sm p-6">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                            Architecture Benefits
                        </h2>
                        <ul class="space-y-2 text-gray-600">
                            <li class="flex items-start">
                                <span class="text-green-500 mr-2">✓</span>
                                Shared utilities and types between Vue and Lit
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-500 mr-2">✓</span>
                                Consistent theming and design tokens
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-500 mr-2">✓</span>
                                Framework-agnostic validation and utilities
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-500 mr-2">✓</span>
                                Independent development and deployment
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    `

    render(demoContent, app)
}

export { renderDemo }
