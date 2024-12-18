import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { MarkdownProps } from '@/types/post'

const MarkdownRenderer = ({ content }: MarkdownProps ) => {
    return (
        <div className="m-5">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ children }) {
                        return <SyntaxHighlighter>{children}</SyntaxHighlighter>
                    }
                }}>
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default MarkdownRenderer