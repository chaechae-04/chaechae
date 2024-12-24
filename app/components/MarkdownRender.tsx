import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import Image from 'next/image'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { MarkdownProps } from '@/types/post'

const MarkdownRenderer = ({ content }: MarkdownProps ) => {
    return (
        <div className="m-0 md:m-5 lg:m-5 xl:m-5">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    code({ children }) {
                        return <SyntaxHighlighter>{children}</SyntaxHighlighter>
                    },
                    img({ ...props }) {
                        return (
                            <Image
                                {...props}
                                width={1200}
                                height={800}
                                className="w-full md:w-[75%] lg:w-[50%] xl:w-[50%] object-contain"
                                alt={props.alt || ''}
                                priority
                            />
                        )
                    }
                }} className="text-xs md:text-base lg:text-lg xl:text-lg">
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default MarkdownRenderer