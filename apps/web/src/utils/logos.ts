// Technology logo types
export interface TechnologyLogo {
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

// Technology logo metadata
export const technologyLogos: TechnologyLogo[] = [
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

// Helper function to get logo by name
export function getTechnologyLogo(name: string): TechnologyLogo | undefined {
    return technologyLogos.find(
        logo =>
            logo.name.toLowerCase() === name.toLowerCase() ||
            logo.logo.toLowerCase() === name.toLowerCase()
    )
}

// Helper function to get logos by category
export function getLogosByCategory(
    category: TechnologyLogo['category']
): TechnologyLogo[] {
    return technologyLogos.filter(logo => logo.category === category)
}

// Helper function to get logo URL
export function getLogoUrl(logoName: string): string {
    return `/logos/technologies/${logoName}.svg`
}
