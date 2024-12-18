import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { MarkdownProps } from '@/types/post'

const MarkdownRenderer = ({ content }: MarkdownProps ) => {
    return (
        <div className="m-5">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
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