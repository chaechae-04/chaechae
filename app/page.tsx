// app/page.tsx

import Link from 'next/link'
import Header from '@/app/components/Header'
import { getAllPosts } from '@/lib/posts'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-[#051c2c]">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-[#0A2540] p-6 rounded-lg hover:bg-[#123456] transition-colors">
              <Link href={`/posts/${post.id}`}>
                <h2 className="text-white text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-500">
                  <span>{post.date}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}