<template>
    <div class="technology-logos">
        <h2 class="text-2xl font-bold mb-6">Technology Logos</h2>

        <!-- All logos -->
        <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4">All Technologies</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div
                    v-for="logo in technologyLogos"
                    :key="logo.name"
                    class="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                    <img
                        :src="getLogoUrl(logo.logo)"
                        :alt="logo.name"
                        class="w-12 h-12 object-contain mb-2"
                    />
                    <span class="text-sm text-center text-gray-700">{{
                        logo.name
                    }}</span>
                </div>
            </div>
        </div>

        <!-- Logos by category -->
        <div class="space-y-6">
            <div v-for="category in categories" :key="category" class="mb-6">
                <h3 class="text-lg font-semibold mb-4 capitalize">
                    {{ category }}
                </h3>
                <div
                    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
                >
                    <div
                        v-for="logo in getLogosByCategory(category)"
                        :key="logo.name"
                        class="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <img
                            :src="getLogoUrl(logo.logo)"
                            :alt="logo.name"
                            class="w-12 h-12 object-contain mb-2"
                        />
                        <span class="text-sm text-center text-gray-700">{{
                            logo.name
                        }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Technology logo types
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

// Technology logo metadata (this would come from @pickle-jar/core/logos in a real implementation)
const technologyLogos: TechnologyLogo[] = [
    { name: 'AWS', logo: 'aws', category: 'cloud' },
    { name: 'Bootstrap', logo: 'bootstrap', category: 'frontend' },
    { name: 'CSS', logo: 'css', category: 'frontend' },
    { name: 'Docker', logo: 'docker', category: 'backend' },
    { name: 'Elastic', logo: 'elastic', category: 'database' },
    { name: 'Figma', logo: 'figma', category: 'design' },
    { name: 'Firebase', logo: 'firebase', category: 'cloud' },
    { name: 'Framer', logo: 'framer', category: 'design' },
    { name: 'Git', logo: 'git', category: 'version-control' },
    { name: 'GitHub', logo: 'github', category: 'version-control' },
    { name: 'GitLab', logo: 'gitlab', category: 'version-control' },
    { name: 'HTML5', logo: 'html5', category: 'frontend' },
    { name: 'JavaScript', logo: 'javascript', category: 'frontend' },
    { name: 'Laravel', logo: 'laravel', category: 'backend' },
    { name: 'MySQL', logo: 'mysql', category: 'database' },
    { name: 'Next.js', logo: 'nextjs', category: 'frontend' },
    { name: 'OpenAI', logo: 'openai', category: 'ai' },
    { name: 'PHP', logo: 'php', category: 'backend' },
    { name: 'Pinia', logo: 'pinia', category: 'frontend' },
    { name: 'PostgreSQL', logo: 'postgresql', category: 'database' },
    { name: 'React', logo: 'react', category: 'frontend' },
    { name: 'Sass', logo: 'sass', category: 'frontend' },
    { name: 'Supabase', logo: 'supabase', category: 'database' },
    { name: 'Swift', logo: 'swift', category: 'frontend' },
    { name: 'Tailwind CSS', logo: 'tailwindcss', category: 'frontend' },
    { name: 'TypeScript', logo: 'typescript', category: 'frontend' },
    { name: 'Vite', logo: 'vite', category: 'frontend' },
    { name: 'Vue.js', logo: 'vuedotjs', category: 'frontend' },
    { name: 'WordPress', logo: 'wordpress', category: 'backend' },
]

// Get unique categories
const categories = Array.from(
    new Set(
        technologyLogos
            .map((logo: TechnologyLogo) => logo.category)
            .filter(Boolean)
    )
) as TechnologyLogo['category'][]

// Helper function to get logos by category
function getLogosByCategory(
    category: TechnologyLogo['category']
): TechnologyLogo[] {
    return technologyLogos.filter(logo => logo.category === category)
}

// Helper function to get logo URL
function getLogoUrl(logoName: string): string {
    // In a real application, you would import the SVG directly from the core package
    // For now, we'll use a placeholder approach
    return `/logos/technologies/${logoName}.svg`
}
</script>

<style scoped>
.technology-logos {
    @apply p-6;
}
</style>
