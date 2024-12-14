// app/posts/[id]/page.tsx

import { getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { PostParams } from '@/types/post'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import '@/styles/markdown.css'
import Header from '@/app/components/Header'


export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}

export default async function Post({ params }: PostParams) {
    const id = (await params).id
    const posts = await getAllPosts();
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return notFound();
    }

    const markdownContent = `# ${post.title}\n${post.date}\n\n${post.content}`

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow w-[60%] mx-auto px-4 py-8">
                <div className="markdown">
                    <article className="prose lg:prose-xl">
                        <ReactMarkdown
                        components={{
                            code: ({inline, className, children, ...props}) => {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                    <SyntaxHighlighter language="javascript">
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                        >
                            {markdownContent}
                        </ReactMarkdown>
                    </article>
                </div>
            </main>
        </div>
    );
}