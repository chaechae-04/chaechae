import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { MarkdownProps } from '@/types/post'

const MarkdownRenderer = ({ content }: MarkdownProps ) => {
    return (
        <article className="prose prose-invert max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ children }) {
                        return <SyntaxHighlighter>{children}</SyntaxHighlighter>
                    }
                }}>
                {content}
            </ReactMarkdown>
        </article>
    )
}

export default MarkdownRenderer