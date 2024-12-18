import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

import MarkdownRenderer from '@/app/components/MarkdownRender'

import { PostData, Props } from '@/types/post'

const getPost = async (id: string): Promise<PostData> => {
    const encodedId = encodeURIComponent(id)
    const res = await fetch(`http://localhost:3000/api/posts/${encodedId}`, {
        next: { revalidate: 10 }
    })
    if (!res.ok) throw new Error('Filed to fetch post')
        return res.json()
}

export async function generateMetadata({ params }: Props) {
    const { id } = await params
    const post = await getPost(id)

    return {
        title: post.title,
        description: post.excerpt
    }
}

export default async function Post({ params }: Props) {
    const { id } = await params
    const post = await getPost(id)

    return (
        <div className="min-h-screen bg-[#051c2c]">
            <Header />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <article className="bg-[#0A2540] rounded-lg p-6 shadow-lg">
                    <div className="prose prose-invert max-w-none">
                        <MarkdownRenderer content={post.content} />
                    </div>
                </article>
            </div>
            <Footer />
        </div>
    )
}