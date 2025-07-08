import MarkdownIt from 'markdown-it'

export const parseMarkdown = (markdown: string) => {
    const md = new MarkdownIt()
    return md.render(markdown)
}
