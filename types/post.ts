export interface PostData {
    id: string
    title: string
    type: string
    date: string
    excerpt: string
    content: string
}

export type Props = {
    params: Promise<{ id: string }>
}

export interface MarkdownProps {
    content: string
}